# Routing

## Read of the request

Three signals decide the routing:

1. **"slow"** — performance.
2. **"after the last deploy"** — a *regression*, with a known-good before state. This is the load-bearing signal. It makes the job diagnosis (find the cause), not optimization (make things faster in general).
3. **"tell me what you'd do"** — the user wants an approach, and there is no repo, no URL and no reproduction in hand yet. So the opening reply is a plan plus the two facts I need, not a tool run.

The trap here is routing on the loudest keyword ("slow" → `performance-optimization`) and starting to hunt for things to optimize. A regression has a specific cause introduced by a specific change; general optimization would burn effort on code that was equally slow yesterday and is not the culprit.

## Skills I would invoke, in order

**1. `diagnosing-bugs` — first, and the primary skill.**
Its description explicitly covers performance regressions and fires on "reports something broken/throwing/failing/slow". It gives the diagnosis loop that this task actually needs: reproduce, form hypotheses, bisect against the last-known-good state (here, the previous deploy), and confirm the cause with evidence before proposing a fix. The deploy boundary makes bisection unusually cheap, which is exactly the leverage a diagnosis skill exploits and an optimization skill does not.

**2. `browser-testing-with-devtools` (or the `chrome-devtools` / `debug-optimize-lcp` skills) — second, as the instrument, once I have a URL.**
Diagnosis needs measurement. A dashboard is a browser artifact, so the trace, the network waterfall and the main-thread profile are the primary evidence. If the symptom turns out to be page-load specifically, `chrome-devtools-mcp:debug-optimize-lcp` is the narrower fit. This is subordinate to step 1 — it collects evidence for the hypothesis loop, it doesn't replace it. If it turns out the time is spent server-side, this step is skipped in favour of server timings/logs.

**3. `performance-optimization` — third, and conditionally, only once the cause is known.**
Correct skill for the *fix*, wrong skill for the *investigation*. It carries the frontend/backend/query/DB optimization patterns (N+1, Core Web Vitals, bundle size) that will be relevant once the trace says which layer is at fault. Invoking it first would mean optimizing without knowing what regressed.

**4. `observability-and-instrumentation` — optional follow-up.**
If the diagnosis is hard because there is nothing to measure (no server timings, no RUM), this fills the gap. And after the fix, it is the right skill for the guard that stops a silent repeat.

## Skills I would not invoke

- **`webperf` / `web-performance-auditor`** — a general audit produces a list of everything imperfect on the page. Against a known regression that is noise; it dilutes the one real cause into twenty findings. It becomes reasonable only if bisection fails to isolate anything.
- **`code-review` / `review`** — reviewing the deploy diff is a step *inside* the diagnosis, but running a five-axis review of the whole change would surface correctness/security/readability findings unrelated to the reported symptom.
- **`interview-me` / `grilling`** — the ask is underspecified, but the eval constraint is no clarifying questions, and more importantly a browser trace answers "which part is slow" faster and more reliably than the user can. I state the two facts I want and offer to start either way, rather than blocking on an interview.
- **`debugging-and-error-recovery`** — overlaps `diagnosing-bugs`; the latter names performance regressions explicitly, so it is the more specific match.
- **`memory-leak-debugging`** — plausible for a dashboard that degrades over a session, but that is a hypothesis, not the report. It comes back only if the trace points that way.
- **`shipping-and-launch` / `git-workflow-and-versioning`** — the deploy is context, not the subject.

## Summary

`diagnosing-bugs` → `browser-testing-with-devtools` (evidence) → `performance-optimization` (only after the cause is confirmed) → `observability-and-instrumentation` (guard). The regression framing, not the word "slow", is what picks the first skill.
