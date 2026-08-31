"Feels slow since the last deploy" is a regression report, and the useful move is to treat it as one: find what changed and prove which change causes the slowdown, rather than start optimizing things that look expensive.

Here's what I'd do, in order:

**1. Pin down the symptom before touching code.** "Slow" splits into very different bugs, and the fix differs completely:
- Slow *initial load* (blank screen, spinner) — likely bundle size, render-blocking assets, or a slow first API call.
- Slow *after load* (data arrives late, widgets pop in) — likely backend/query regression or a new N+1.
- Slow *interaction* (filters, sorting, hovering feel laggy) — likely a client-side render/re-render regression.
I'd get one concrete example from you: which page, which action, roughly how long it takes now vs. before, and whether it's every load or only some.

**2. Establish the delta.** The single most valuable evidence is the diff between the last-good deploy and the current one — including dependency bumps and config/infra changes, not just application code. Perf regressions from a deploy are usually caused by something in that diff: a new dependency pulled into the main bundle, a lifted query that lost its index or its batching, a caching layer disabled, a feature flag flipped, an added blocking request on page load.

**3. Measure, don't guess.** Reproduce it and capture real numbers on the current build:
- Frontend: a DevTools performance trace and a network waterfall of the dashboard load — this immediately separates "waiting on the server" from "burning CPU in the browser" and gives LCP/INP numbers.
- Backend: timings for the dashboard's API calls, and query-level timing for the slowest one. If APM or structured logs exist, compare the p95 for those endpoints across the deploy boundary — that alone often names the culprit.

**4. Bisect if the diff doesn't confess.** With a repro, checking out the prior deploy locally (or in staging) and confirming it's fast establishes the regression is real and in the diff; then bisect commits or selectively revert the suspicious change. A revert that restores the speed is proof; a plausible-looking hot spot is not.

**5. Only then fix — and re-measure against the same benchmark** to confirm the number moved, plus add whatever timing instrumentation was missing that let this ship unnoticed in the first place.

Two things worth saying plainly:
- I haven't looked at any code or metrics yet, so I have no candidate cause. Anything I named above would be speculation, and speculative perf fixes tend to add complexity without moving the number.
- If it turns out the slowdown predates the deploy or is environmental (a slower database instance, a noisy neighbor, a CDN change, or one user's network), that changes the whole investigation — which is why step 1 and 2 come before any optimization work.

Point me at the repo and tell me which part feels slow, and I'll start with the deploy diff and a real profile.
