"Slow after the last deploy" is a regression with a suspect window, not a general performance problem — so I'd treat it as a diagnosis job first and an optimization job only once we know what changed. Optimizing before we've localized it is how you end up rewriting a query that was never the problem.

Here's what I'd do, in order:

**1. Pin down the symptom before touching code.** Right now "feels slow" could be several different things with completely different causes:
- slow *initial load* (bundle size, render-blocking assets, server response time)
- slow *interactions* after load (re-render storms, main-thread work)
- slow *data* (an endpoint that got worse, an N+1 that appeared, a missing index)

I'd ask you which one it is, or reproduce it myself and time it. If we have RUM or APM data, the p75/p95 before-and-after the deploy tells us this in one chart, and also tells us whether it's real or vibes.

**2. Get the diff.** `git log`/`git diff` between the previously deployed commit and the current one, filtered to anything on the dashboard's path — components, data fetching, API handlers, queries, and especially dependency and build-config changes. A deploy window is a gift: it bounds the search space to a specific set of commits instead of the whole codebase.

**3. Bisect on evidence, not intuition.** Form a hypothesis from the diff, then confirm it with a measurement before fixing anything:
- frontend: a Chrome DevTools performance trace and a network waterfall on the actual dashboard route — that distinguishes "waiting on the server" from "burning main thread" immediately, and gives us LCP/INP numbers rather than adjectives
- backend: timings on the dashboard's endpoints, and query plans on anything that got touched

**4. Only then fix**, and re-measure against the same trace to prove the number moved.

Two things worth flagging up front. First, deploys change more than code — infra, cache warmth, feature flags, data volume, a cold CDN. If the diff looks innocent, that's where I'd look next rather than assuming the code is guilty. Second, if there's no baseline measurement from before the deploy, our first fix is really a guess with extra steps; I'd want at least one reproducible timing on the slow path so we can tell whether anything we do actually helps.

Tell me which of the three symptoms above matches what you're seeing (or point me at the repo and the deploy), and I'll start with the diff and a trace.
