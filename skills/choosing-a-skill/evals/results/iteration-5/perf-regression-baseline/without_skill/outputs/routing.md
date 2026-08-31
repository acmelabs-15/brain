# Routing

## The routing decision

The request has two features that decide everything: it is a **regression** ("after the last deploy"), and the evidence is **subjective** ("feels slow"). That makes it a diagnosis problem with a bounded suspect window, not an optimization problem. The name-matching trap here is `performance-optimization` / `/webperf` — they match the word "slow" but assume you already know what to make faster. Running them first produces a generic audit of whatever they happen to find, which is not the same thing as finding what the deploy broke.

## Order

**1. `diagnosing-bugs` — primary, invoke first.**
Its description explicitly covers "performance regressions" and "reports something ... slow", which is this request almost verbatim. It provides the hypothesis-then-evidence loop that a regression needs: bound the search to the deploy diff, form a hypothesis, confirm it with a measurement before changing anything. This is the skill that keeps step 2 honest.

**2. `browser-testing-with-devtools` (or `chrome-devtools-mcp:debug-optimize-lcp` if it localizes to load time) — during diagnosis, to get real numbers.**
Invoked from inside the diagnosis loop, not as a separate track. "Feels slow" has to become a trace and a network waterfall before anything else is worth doing; that single measurement also splits frontend main-thread work from backend latency, which decides whether the rest of the investigation lives in the browser or the server. `debug-optimize-lcp` is the sharper choice only once we know the symptom is initial load. If there is no browser access, this step becomes endpoint timings and query plans instead — the point is a measurement, not this specific tool.

**3. `performance-optimization` — conditional, only after localization.**
Correct once we know *what* is slow and *why*. It is the fix step. Invoking it before step 2 would mean optimizing a guess. Genuinely appropriate for the N+1, missing-index, or bundle-size class of cause once diagnosis has named one.

**4. `test-driven-development` / Prove-It — conditional, at fix time.**
If the cause turns out to be a concrete code defect, a failing test that captures the regression (a timing assertion, or a query-count assertion for an N+1) stops it recurring on the next deploy. Optional; skip it if the cause is infra rather than code.

## Explicitly not invoked

- **`/webperf` (web-performance-auditor)** — a broad audit persona. It would return a long list of general findings, most unrelated to this deploy. Wrong instrument for a bounded regression; it does not use the one piece of evidence we have (the deploy window).
- **`code-review` / `/review`** — reviewing the deploy diff is part of diagnosis, but a full five-axis review over the diff is far wider than needed and would bury the performance signal in unrelated findings. Reading the diff directly is cheaper.
- **`observability-and-instrumentation`** — relevant as a *follow-up* if it turns out we cannot tell what happened because nothing is instrumented. Not the opening move.
- **`interview-me` / `ask-user-question`** — the one clarifying question (which of the three symptoms) belongs inline in the reply. Spinning up an interview skill for a single question is overkill and delays the work.
- **`incident`-style shipping/rollback skills** — no evidence yet that this is severe enough to warrant a rollback decision. If diagnosis shows a serious regression, `shipping-and-launch` (rollback strategy) becomes relevant.

## Underlying principle

Route on the *shape of the evidence*, not on the loudest keyword. "Slow" points at performance skills; "after the last deploy" plus "feels" points at diagnosis. When a request names a change window, the window is the most valuable thing in it, and the skill that exploits a bounded suspect set wins over the skill that matches the symptom noun.
