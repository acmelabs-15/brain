"Feels slow after the last deploy" is a regression with a known change window, which is the good case — we don't have to guess across the whole system, we can bisect against the diff. But "slow" spans several very different failure modes (slower first paint, slower interactions, slower data), and each has a different culprit, so the first job is to turn the feeling into a measurement before touching any code.

Here's how I'd work it:

**1. Pin down the symptom.** Slow to *load* (blank screen, spinner on first paint), slow to *respond* (clicks and filters lag once it's up), or slow to *fetch* (page renders fast, panels fill in late)? I'll infer this from a trace rather than asking you — I'll load the dashboard with DevTools attached, capture a performance trace and the network waterfall, and see which phase actually got worse.

**2. Get a before/after.** The single most valuable artifact here is the same trace against the previous deploy. If you have the old build deployable (previous tag, staging pinned to it, or a local checkout of the prior commit), I'll capture both and diff them. Without a baseline we're profiling in absolute terms and every finding is arguable; with one, the regression usually falls out in a couple of minutes.

**3. Read the diff for known regression shapes.** In parallel with the trace, I'd scan what actually shipped for the usual suspects:
- a new or newly-unbatched query in a render path (N+1 that only shows up with real row counts)
- a dropped index, changed query plan, or a filter that stopped being sargable
- a bundle-size jump — a new dependency pulled in eagerly, a lazy import that stopped being lazy, or a vendor chunk that stopped splitting
- a lost memo/cache — a changed dependency array, a new object identity per render, a disabled HTTP or CDN cache header
- something moved from build time to request time (SSG→SSR, a config flag flipped)
- an added blocking third-party script or font

**4. Confirm causally, then fix.** Once the trace and the diff agree on a suspect, I want one falsifiable check — revert or stub that one thing and watch the number move — before writing a fix. Perf work goes wrong when we optimize the thing that's easiest to see rather than the thing that's actually costing time.

**5. Fix narrowly and leave a guard.** Smallest change that moves the metric, re-measure to prove it, and then a regression guard so this class doesn't come back silently — a bundle-size budget in CI, a query-count assertion, or a Core Web Vitals check on the dashboard route.

What I need from you to start, and I can begin without any of it:
- the dashboard URL (local, staging, or prod) and creds if it's behind auth
- the deploy in question — commit range, tag, or PR — so I can read the diff
- whether the previous build is still deployable anywhere for a baseline

If you'd rather I just dive in, give me the repo and the URL and I'll come back with a trace, a ranked list of suspects with evidence, and a proposed fix for the top one.
