"Feels slow after the last deploy" is a regression report, so I'd treat it as a diagnosis job rather than a general performance-tuning job. The difference matters: tuning asks "what could be faster here?" and will happily hand you a list of plausible optimizations that have nothing to do with why today is worse than last week. Diagnosis asks "what changed?" and stops when the cause is found.

Here's how I'd work it:

**1. Pin the symptom to something measurable.** "Feels slow" isn't yet a fact I can chase. I'd want to know which surface is slow (initial load, a specific panel, an interaction after the page is up), and get one number that's worse than it used to be — TTFB, LCP, a specific API's p95, time-to-first-render. Without that, any fix is unfalsifiable.

**2. Bracket the change.** The deploy is the strongest clue on the table. I'd get the diff for that release and read it for the usual regression shapes: a new query inside a loop or a rendering path, an index or caching layer dropped, a synchronous call added to a hot path, a dependency bump, a config or feature-flag change that shipped alongside the code. A release that touches nothing performance-relevant is itself useful information — it points at infrastructure, data growth, or a coincidence of timing rather than the code.

**3. Split frontend from backend before optimizing either.** The fastest disambiguation is a single loaded page with the network panel open: if the server's responses are slow, the frontend is innocent and I stop looking at bundle size and render paths entirely. If responses are fast and the page still crawls, it's rendering, bundle, or a client-side data-fetching waterfall. I'd do this with Chrome DevTools against a real instance rather than reasoning about it from the source.

**4. Confirm causally, not by correlation.** Whatever I find, I want it demonstrated — the slow query reproduced with a timing, the added round-trip visible in a trace, ideally the previous release measured under the same conditions for contrast. A regression fix that isn't measured against a before-number is a guess wearing a lab coat.

**5. Only then fix, and re-measure.** With the cause confirmed, the fix is usually narrow and obvious. I'd re-run the same measurement to prove the number moved, and I'd note that the reason nobody caught this at deploy time is probably a missing performance signal in CI or monitoring — worth a follow-up.

To start, the useful things to point me at: which part of the dashboard feels slow, the deploy or PR in question, and whether I can hit a running instance (local or staging). If you'd rather I just start digging, I'll take the release diff and work backwards from there.
