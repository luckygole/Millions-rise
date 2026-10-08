// Live index quotes (Yahoo Finance public chart endpoint, unofficial). Cached 60 s so we never hammer the source.
const r = require('express').Router();

const SYM = [
  ['NIFTY 50', '^NSEI'],
  ['SENSEX', '^BSESN'],
  ['BANK NIFTY', '^NSEBANK'],
  ['USD/INR', 'INR=X'],
  ['GOLD $/oz', 'GC=F'],
];

let cache = { t: 0, d: null };

const one = async ([name, sym]) => {
  const x = await fetch(
    'https://query1.finance.yahoo.com/v8/finance/chart/' +
      encodeURIComponent(sym) +
      '?interval=1d&range=1d',
    { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) }
  );
  if (!x.ok) throw new Error('quote failed');
  const m = (await x.json()).chart.result[0].meta;
  const p = m.regularMarketPrice;
  const pc = m.chartPreviousClose ?? m.previousClose;
  return { name, price: p, change: p - pc, pct: ((p - pc) / pc) * 100, time: m.regularMarketTime };
};

r.get('/', async (q, s) => {
  if (cache.d && Date.now() - cache.t < 6e4) return s.json(cache.d);
  const res = (await Promise.allSettled(SYM.map(one)))
    .filter((x) => x.status === 'fulfilled')
    .map((x) => x.value);
  if (res.length) {
    cache = { t: Date.now(), d: res };
    return s.json(res);
  }
  if (cache.d) return s.json(cache.d); // serve last good data if the source is down
  s.status(503).json({ error: 'Market data unavailable' });
});

module.exports = r;