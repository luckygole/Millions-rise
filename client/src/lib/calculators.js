// Each calculator: n=name, f=inputs [key,label,default,min,max,step], k(v)=>{r:result rows, b:[invested,gain], s:yearly [[invested,gain],...], l:legend labels}
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN"),
  pw = Math.pow;
const sipFv = (a, r, m) => {
  r /= 1200;
  return r ? ((a * (pw(1 + r, m) - 1)) / r) * (1 + r) : a * m;
};
const yrs = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1));
const ra = (l, d, a, b, s) => ["a", l, d, a, b, s];
const P3 = [
  ["r", "Expected Return (%)", 12, 1, 20, 0.5],
  ["y", "Time period (Years)", 20, 1, 40, 1],
];
const gk = (n, d) => ({
  n,
  f: [
    ra("Cost today (₹)", d, 50000, 100000000, 50000),
    ["i", "Inflation (% p.a.)", 6, 3, 12, 0.5],
    ["r", "Expected Return (%)", 12, 1, 20, 0.5],
    ["y", "Years to goal", 10, 1, 40, 1],
  ],
  k: (v) => {
    const F = v.a * pw(1 + v.i / 100, v.y),
      m = v.y * 12,
      r = v.r / 1200,
      s = (F * r) / ((pw(1 + r, m) - 1) * (1 + r));
    return {
      r: [
        ["Future cost of goal", inr(F)],
        ["Monthly SIP needed", inr(s)],
        ["Total invested", inr(s * m)],
      ],
      b: [s * m, F - s * m],
      s: yrs(v.y, (t) => [s * 12 * t, sipFv(s, v.r, 12 * t) - s * 12 * t]),
    };
  },
});
export const C = {
  sip: {
    n: "SIP Calculator",
    f: [ra("Monthly investment (₹)", 10000, 500, 200000, 500), ...P3],
    k: (v) => {
      const t = sipFv(v.a, v.r, v.y * 12),
        i = v.a * v.y * 12;
      return {
        r: [
          ["Invested Amount", inr(i)],
          ["Growth", inr(t - i)],
          ["Total Future Value", inr(t)],
        ],
        b: [i, t - i],
        s: yrs(v.y, (y) => {
          const x = v.a * 12 * y;
          return [x, sipFv(v.a, v.r, 12 * y) - x];
        }),
      };
    },
  },
  step: {
    n: "Step-up SIP",
    f: [
      ra("Starting monthly SIP (₹)", 10000, 500, 200000, 500),
      ["s", "Annual step-up (%)", 10, 0, 25, 1],
      ...P3,
    ],
    k: (v) => {
      let b = 0,
        a = v.a,
        i = 0;
      const s = [];
      for (let m = 1; m <= v.y * 12; m++) {
        b = (b + a) * (1 + v.r / 1200);
        i += a;
        if (m % 12 == 0) {
          s.push([i, b - i]);
          a *= 1 + v.s / 100;
        }
      }
      return {
        r: [
          ["Invested Amount", inr(i)],
          ["Growth", inr(b - i)],
          ["Total Future Value", inr(b)],
        ],
        b: [i, b - i],
        s,
      };
    },
  },
  lump: {
    n: "Lumpsum Calculator",
    f: [ra("Amount (₹)", 500000, 10000, 10000000, 10000), ...P3],
    k: (v) => {
      const t = v.a * pw(1 + v.r / 100, v.y);
      return {
        r: [
          ["Invested Amount", inr(v.a)],
          ["Growth", inr(t - v.a)],
          ["Total Future Value", inr(t)],
        ],
        b: [v.a, t - v.a],
        s: yrs(v.y, (y) => [v.a, v.a * pw(1 + v.r / 100, y) - v.a]),
      };
    },
  },
  swp: {
    n: "SWP Calculator",
    f: [
      ra("Corpus (₹)", 5000000, 100000, 50000000, 100000),
      ["w", "Monthly withdrawal (₹)", 30000, 1000, 500000, 1000],
      ["r", "Expected Return (%)", 9, 1, 20, 0.5],
      ["y", "Time period (Years)", 15, 1, 40, 1],
    ],
    k: (v) => {
      let b = v.a,
        w = 0;
      const s = [];
      for (let m = 1; m <= v.y * 12; m++) {
        if (b > 0) {
          b *= 1 + v.r / 1200;
          const x = Math.min(v.w, b);
          b -= x;
          w += x;
        }
        if (m % 12 == 0) s.push([w, b]);
      }
      return {
        r: [
          ["Initial corpus", inr(v.a)],
          ["Total withdrawn", inr(w)],
          ["Balance left", inr(b)],
        ],
        b: [w, b],
        s,
        l: ["Withdrawn", "Balance"],
      };
    },
  },
  goal: gk("Goal Planner", 2500000),
  retire: gk("Retirement Calculator", 20000000),
  edu: gk("Education Calculator", 2500000),
  wed: gk("Wedding Calculator", 1500000),
  vac: gk("Vacation Calculator", 300000),
  home: gk("Home Calculator", 5000000),
  car: gk("Car Calculator", 1000000),
  emi: {
    n: "EMI Calculator",
    f: [
      ra("Loan amount (₹)", 1000000, 50000, 50000000, 50000),
      ["r", "Interest rate (%)", 9, 1, 20, 0.1],
      ["y", "Tenure (Years)", 10, 1, 30, 1],
    ],
    k: (v) => {
      const r = v.r / 1200,
        m = v.y * 12,
        e = (v.a * r * pw(1 + r, m)) / (pw(1 + r, m) - 1);
      let bal = v.a,
        ip = 0;
      const s = [];
      for (let k = 1; k <= m; k++) {
        const it = bal * r;
        ip += it;
        bal -= e - it;
        if (k % 12 == 0) s.push([v.a - Math.max(bal, 0), ip]);
      }
      return {
        r: [
          ["Monthly EMI", inr(e)],
          ["Total interest", inr(e * m - v.a)],
          ["Total payment", inr(e * m)],
        ],
        b: [v.a, e * m - v.a],
        s,
        l: ["Principal", "Interest"],
      };
    },
  },
  fd: {
    n: "FD Calculator",
    f: [
      ra("Deposit (₹)", 100000, 10000, 10000000, 10000),
      ["r", "Interest rate (%)", 7, 1, 12, 0.1],
      ["y", "Time period (Years)", 5, 1, 20, 1],
    ],
    k: (v) => {
      const t = v.a * pw(1 + v.r / 400, 4 * v.y);
      return {
        r: [
          ["Deposit", inr(v.a)],
          ["Interest earned", inr(t - v.a)],
          ["Maturity value", inr(t)],
        ],
        b: [v.a, t - v.a],
        s: yrs(v.y, (y) => [v.a, v.a * pw(1 + v.r / 400, 4 * y) - v.a]),
        l: ["Deposit", "Interest"],
      };
    },
  },
  cagr: {
    n: "CAGR Calculator",
    f: [
      ["s", "Start value (₹)", 100000, 1000, 10000000, 1000],
      ["e", "End value (₹)", 250000, 1000, 50000000, 1000],
      ["y", "Time period (Years)", 5, 1, 40, 1],
    ],
    k: (v) => {
      const c = pw(v.e / v.s, 1 / v.y) - 1;
      return {
        r: [
          ["Start value", inr(v.s)],
          ["Absolute gain", inr(v.e - v.s)],
          ["CAGR", (c * 100).toFixed(2) + "%"],
        ],
        b: [v.s, Math.max(v.e - v.s, 0)],
        s: yrs(v.y, (y) => [v.s, Math.max(v.s * pw(1 + c, y) - v.s, 0)]),
        l: ["Start value", "Gain"],
      };
    },
  },
  infl: {
    n: "Inflation Calculator",
    f: [
      ra("Amount today (₹)", 100000, 1000, 10000000, 1000),
      ["i", "Inflation (% p.a.)", 6, 1, 15, 0.5],
      ["y", "Time period (Years)", 15, 1, 40, 1],
    ],
    k: (v) => {
      const F = v.a * pw(1 + v.i / 100, v.y);
      return {
        r: [
          ["Amount today", inr(v.a)],
          ["Worth of today's money then", inr(v.a / pw(1 + v.i / 100, v.y))],
          ["Same goods will cost", inr(F)],
        ],
        b: [v.a, F - v.a],
        s: yrs(v.y, (y) => [v.a, v.a * pw(1 + v.i / 100, y) - v.a]),
        l: ["Today's cost", "Price rise"],
      };
    },
  },
  emg: {
    n: "Emergency Fund",
    f: [
      ra("Monthly expenses (₹)", 40000, 5000, 500000, 1000),
      ["m", "Months of cover", 6, 3, 12, 1],
    ],
    k: (v) => ({
      r: [
        ["Monthly expenses", inr(v.a)],
        ["Months of cover", String(v.m)],
        ["Corpus needed", inr(v.a * v.m)],
      ],
      b: [v.a * v.m, 0],
      s: [[v.a * v.m, 0]],
      l: ["Corpus", "—"],
    }),
  },
};
