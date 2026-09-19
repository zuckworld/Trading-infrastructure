async function refresh() {
  try {
    const [snapshotResponse, healthResponse] = await Promise.all([fetch('/api/snapshot'), fetch('/api/health')]);
    const snapshot = await snapshotResponse.json();
    const health = await healthResponse.json();
    document.querySelector('#healthDot').classList.toggle('bad', !health.allowed);
    document.querySelector('#healthText').textContent = health.status;
    document.querySelector('#equity').textContent = format(snapshot.equity);
    document.querySelector('#dailyPnl').textContent = `${format(snapshot.dailyPnL)} daily`;
    document.querySelector('#floatingPnl').textContent = format(snapshot.floatingPnL);
    document.querySelector('#drawdown').textContent = `${snapshot.currentDrawdown}% drawdown`;
    document.querySelector('#mode').textContent = snapshot.mode;
    document.querySelector('#scanner').textContent = `Scanner ${snapshot.scannerStatus}`;
    document.querySelector('#summary').textContent = snapshot.summary;
    document.querySelector('#h4Status').textContent = snapshot.h4Status;
    document.querySelector('#m5Status').textContent = snapshot.m5Status;
    document.querySelector('#setups').textContent = snapshot.activeSetups;
    document.querySelector('#positions').textContent = snapshot.openPositions;
    document.querySelector('#updated').textContent = `Updated ${new Date().toLocaleTimeString()}`;
    document.querySelector('#alerts').innerHTML = snapshot.alerts.length ? snapshot.alerts.slice(-5).reverse().map((alert) => `<li><strong>${escapeHtml(alert.message)}</strong><small>${escapeHtml(alert.severity)} / ${escapeHtml(alert.type)}</small></li>`).join('') : '<li class="muted">No active alerts</li>';
  } catch (error) {
    document.querySelector('#healthDot').classList.add('bad');
    document.querySelector('#healthText').textContent = 'Telemetry unavailable';
  }
}
function format(value) { return Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 }); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]); }
refresh();
setInterval(refresh, 5000);
