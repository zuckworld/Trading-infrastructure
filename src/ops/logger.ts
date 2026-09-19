export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface StructuredLogger {
  debug: (message: string, context?: Record<string, unknown>) => void;
  info: (message: string, context?: Record<string, unknown>) => void;
  warn: (message: string, context?: Record<string, unknown>) => void;
  error: (message: string, context?: Record<string, unknown>) => void;
}

const levelRank: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 };

export function createStructuredLogger(level: LogLevel = 'info', write: (line: string) => void = console.log): StructuredLogger {
  const emit = (entryLevel: LogLevel, message: string, context: Record<string, unknown> = {}) => {
    if (levelRank[entryLevel] < levelRank[level]) return;
    write(JSON.stringify({ timestamp: new Date().toISOString(), level: entryLevel, message, ...context }));
  };
  return {
    debug: (message, context) => emit('debug', message, context),
    info: (message, context) => emit('info', message, context),
    warn: (message, context) => emit('warn', message, context),
    error: (message, context) => emit('error', message, context),
  };
}
