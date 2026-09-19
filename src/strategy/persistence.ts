import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

export interface PersistentStateInput {
  accountEquity: number;
  drawdownPercent: number;
  openPositions: Array<{
    symbol: string;
    side: 'long' | 'short';
    entry: number;
    stop: number;
  }>;
  setupState: Record<string, unknown>;
  trailingState: Record<string, unknown>;
}

export interface PersistentState {
  accountEquity: number;
  drawdownPercent: number;
  openPositions: PersistentStateInput['openPositions'];
  setupState: Record<string, unknown>;
  trailingState: Record<string, unknown>;
  updatedAt: number;
}

export interface SaveStateResult {
  saved: boolean;
  state: PersistentState;
}

export interface PersistentStateStore {
  save: (state: PersistentState) => SaveStateResult;
  load: () => PersistentState;
}

export function savePersistentState(input: PersistentStateInput): SaveStateResult {
  const state: PersistentState = {
    accountEquity: input.accountEquity,
    drawdownPercent: input.drawdownPercent,
    openPositions: input.openPositions,
    setupState: input.setupState,
    trailingState: input.trailingState,
    updatedAt: Date.now(),
  };

  return {
    saved: true,
    state,
  };
}

export function restorePersistentState(state: PersistentState): PersistentState {
  return {
    ...state,
    updatedAt: state.updatedAt ?? Date.now(),
  };
}

export function createPersistentStateStore(filePath: string): PersistentStateStore {
  return {
    save: (state) => {
      const directory = dirname(filePath);
      const temporaryPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;

      mkdirSync(directory, { recursive: true });
      writeFileSync(temporaryPath, JSON.stringify(state), 'utf8');
      renameSync(temporaryPath, filePath);

      return { saved: true, state };
    },
    load: () => {
      let parsed: unknown;

      try {
        parsed = JSON.parse(readFileSync(filePath, 'utf8'));
      } catch (error) {
        throw new Error(`unable to load persistent state: ${error instanceof Error ? error.message : 'invalid file'}`);
      }

      if (!isPersistentState(parsed)) {
        throw new Error('unable to load persistent state: invalid state shape');
      }

      return restorePersistentState(parsed);
    },
  };
}

function isPersistentState(value: unknown): value is PersistentState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const state = value as Partial<PersistentState>;
  return typeof state.accountEquity === 'number'
    && typeof state.drawdownPercent === 'number'
    && Array.isArray(state.openPositions)
    && typeof state.setupState === 'object'
    && state.setupState !== null
    && typeof state.trailingState === 'object'
    && state.trailingState !== null
    && typeof state.updatedAt === 'number';
}
