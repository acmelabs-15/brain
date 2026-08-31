# Routing

## Order

1. **`diagnosing-bugs`** — primary, invoked first.
2. **`browser-testing-with-devtools`** — conditionally, inside step 3 of the diagnosis, only if the frontend/backend split points at the browser.
3. **`performance-optimization`** — after diagnosis has named a cause, to do the actual fix.
4. **`observability-and-instrumentation`** — conditionally, if no before/after telemetry exists to compare against.

## Why

### `diagnosing-bugs` first

The request is a symptom report, not a task specification. The user has an observation ("feels slow"), a suspected cause ("the last deploy"), and no evidence connecting them. That is a diagnosis problem, and `diagnosing-bugs` states outright that it covers performance regressions and reports of something being slow. It owns the loop that matters here: reproduce, measure, isolate, attribute.

Routing straight to a fix skill would skip the step that determines whether there is a regression at all. "After the last deploy" is the user's hypothesis about causation, and the most common failure mode on this class of request is accepting that hypothesis and optimizing whatever looks slowest in the code, which produces a change that is plausible, unmeasured, and possibly unrelated.

### Why not `performance-optimization` first

Its description is a genuine near-match — it names "suspect performance regressions" explicitly. But it is scoped to the act of optimizing: Core Web Vitals, N+1 queries, profiling-revealed bottlenecks. All of those presuppose a located bottleneck. Here nothing is located yet; we do not even know whether the cost is in the browser, the API, or the database. This skill is the right second call, once diagnosis has produced a named cause, and it is the one that should carry the fix and the re-measurement.

### Why not `/webperf` or `browser-testing-with-devtools` first

`/webperf` fans out to the web-performance-auditor persona, and `browser-testing-with-devtools` drives Chrome DevTools MCP. Both assume the problem is in the browser. "Dashboard" makes that tempting — dashboards are web UIs — but a dashboard that feels slow is at least as often a slow aggregation query or a fanned-out API call, and a browser audit would return a list of real-but-irrelevant frontend findings while the actual regression sat in a query plan. So the browser tooling is invoked from inside the diagnosis, at the point where the trace shows the browser busy rather than waiting, and not before. If that split lands the other way, the browser skills are never invoked at all and nothing is wasted.

### Why not `code-review` / `review` on the deploy diff

Reviewing the deploy diff looks like a direct route to the culprit, but reviewing for performance without a reproducing measurement means ranking changes by how slow they look, which is exactly the guessing that diagnosis exists to replace. The diff becomes useful at diagnosis step 4, as the finite candidate set to bisect against a number that already reproduces — used as evidence inside the diagnosis, not as a review deliverable of its own.

### `observability-and-instrumentation` as a conditional branch

If step 2 finds there is no before/after data to compare against, the honest first deliverable is instrumentation rather than a fix — and that skill owns "production issues are reported but you can't tell what happened from the available data," which is precisely that situation. Flagged in the reply so the user is not surprised if the work turns out to start there.

### Not routed

- `interview-me` / `grilling` — the task forbids clarifying questions, and the open questions in the reply are framed as things the diagnosis will answer by measurement rather than things the user must answer first.
- `debugging-and-error-recovery` — overlaps `diagnosing-bugs`, but that skill is framed around failing tests, broken builds and errors. Nothing here is throwing; the specific mention of performance regressions in `diagnosing-bugs` makes it the tighter match, and running both would duplicate the same loop.
- `spec-driven-development`, `planning-and-task-breakdown` — no feature is being built.
