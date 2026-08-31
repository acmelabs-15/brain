# Routing

## Decision

**`diagnosing-bugs` — alone, and nothing else until Phase 1 completes.**

Order:

1. `diagnosing-bugs` (the whole job, starting at Phase 1)
2. *Conditionally, and only after the loop is red and localises the regression to the browser:* `/webperf` (the `web-performance-auditor` persona) as a second opinion on rendering/network shape.
3. *Conditionally, after a fix is identified:* `test-driven-development` to land it, since by then the tight loop is effectively the failing test.

Steps 2 and 3 are not committed to now. They depend on what the loop shows.

## Why

The routing table's row is unambiguous: **"Something is broken and you don't know why" → `diagnosing-bugs`**. "The dashboard feels slow after the last deploy" is a symptom with no known cause, and `diagnosing-bugs` explicitly covers performance regressions as well as functional bugs. Nothing about the request is a feature, a design question, or a contained change I already understand, so no other row applies.

The substance of the routing is Phase 1: **build a tight loop that goes red on this specific bug**. The completion criterion is one command already run at least once — red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2. For a performance regression, "red" means a measured threshold that fails on the current deploy, so the loop has to carry a number and a target view.

The gate is on the **hypothesis**, not on the fix. This is the trap the request is shaped to spring: a deploy-correlated slowdown invites opening with a ranked list of plausible causes (N+1, bundle bloat, a new blocking request) while deferring only the patch. That has already lost the phase — the loop then exists to confirm a theory rather than find one. So the reply names candidate mechanisms as things the loop should *force*, not as a likelihood ordering, and declines to read the diff for suspects first.

Intermittency, if it appears, tightens rather than loosens this: a rate is something to drive to certainty, not evidence for a mechanism, and sampling until it fires is not a loop. And where the environment cannot be driven, the correct move is to say so and stop — not to fall back on reading code and reasoning about what is probably heavy, which is the failure the phase exists to prevent wearing a fallback's clothes. Both are stated up front in the reply because both are live possibilities for a production dashboard.

## Why not the alternatives

- **`performance-optimization`** (Lineage A) — the surface-level lexical match, and the wrong route. Lineage A skills are encyclopedic checklists: reference you consult, not workflows you execute. It is strong on *what to consider* (Core Web Vitals, N+1 patterns, profiling) and weak on *what to do next*, which is precisely the wrong tool when the cause is unknown. Consulting a relevant section later, once the loop has localised the problem, is a fine use of it. Leading with it means generating a list of things that are commonly slow — the hypothesis-first failure above, with a checklist for cover.
- **`/webperf`** — assumes the problem is web-frontend-shaped before anything has established that. A dashboard slowdown could equally be a query, a cache, or an API. It also runs in Quick mode without a Lighthouse/CrUX artifact and labels findings `potential impact`, i.e. unmeasured speculation, which is exactly what Phase 1 forbids at this stage. Held as a conditional step 2.
- **`/ship`, `code-review`, `code-review:code-review`** — a deploy is in play, so review-shaped skills are tempting. But nothing is being merged or launched; a review of the deploy's diff is another route to "which change looks suspicious", i.e. hypothesis-first by another name.
- **`grilling` / `interview-me` / `spec` chain** — ceremony. There is no feature and no design decision here, and the routing table warns the standing failure mode is running a full lifecycle over a job that needed a diagnosis.
- **`observability-and-instrumentation`** — plausible if the answer turns out to be "we cannot see what happened in production." That is a finding the loop's failure produces, not an opening move.
- **`debugging-and-error-recovery`** (Lineage A) — the checklist-lineage near-twin of `diagnosing-bugs`. Same lineage argument as `performance-optimization`; `diagnosing-bugs` is the Lineage B workflow and is the one to follow literally.

## Note on the clarifying question

The reply ends by asking which view and slow at what. This is not a request for permission or scope — it is the one input the tight loop cannot be built without, since "feels slow" is not a threshold that can go in a command. It is asked at the end, after the approach is already stated, so the user gets the plan whether or not they answer immediately.
