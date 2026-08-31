# Routing

## Decision

**Invoke `diagnosing-bugs` (Lineage B). One skill, now. Everything after it is conditional on what its loop shows.**

## Order

1. **`diagnosing-bugs`** — the only committed invocation. Run Phase 1 to completion: a tight loop that goes red on the dashboard slowness, one command already run at least once, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.
2. *(conditional)* **`performance-optimization`** — consulted as reference, not executed, and only once the loop localises the problem to a layer. Pull the one relevant section.
3. *(conditional)* **`test-driven-development`** — if the fix turns out contained and understood, that plus a commit is the whole remainder.

Nothing else. No `/webperf`, no `/ship`, no spec/plan/ticket chain.

## Why

**The routing table sends a symptom to diagnosis.** "Something is broken and you don't know why" → `diagnosing-bugs`. "Feels slow after the last deploy" is a symptom report with no located cause, not a contained change I already understand.

**The collision is real and has to be resolved explicitly, not dismissed.** `performance-optimization`'s description lists performance regressions as a trigger, so it genuinely matches the words the user used. It is Lineage A: a 180–500 line encyclopedic checklist, strong on *what to consider* and weak on *what to do next*. Reaching for it at a symptom produces a list of things that are commonly slow — hypothesis-first reasoning wearing a checklist for cover. It is reference consulted *after* localisation, not a workflow run at a symptom. The reply names this collision rather than silently picking a side.

**The deploy boundary is a lever, not a cause.** Routing guidance is explicit: let the deploy be the thing you bisect against rather than the cause you assume. The loop run against the previous build either bounds the search to a diff or clears the deploy entirely.

**The gate is on the hypothesis, not on the fix.** Deferring only the patch while opening with a ranked list of four likely culprits has already lost Phase 1 — the loop then exists to confirm a theory rather than find one. So the response names no likely mechanism at all, and says why. Candidate mechanisms are things the loop should force, not a likelihood ordering.

**Intermittency tightens rather than loosens this.** "Feels slow" leaves open whether it's every load. If intermittent, the rate is a thing to drive to certainty before any mechanism is named — a 50% reproduction is workable, 1% is not — because a fix has good odds of appearing to work by chance otherwise.

**Where the environment can't be driven, say so and stop.** The named fallback — reading code and reasoning about what ought to be slow — is precisely the failure Phase 1 exists to prevent. The reply commits to stopping rather than falling back.

## Skipped, and why

- **`/webperf`** — fans out to the `web-performance-auditor` persona. Without a Lighthouse or CrUX artifact it runs Quick mode and labels findings `potential impact`, i.e. unmeasured. That's a plausible-sounding list before any measurement exists, the same failure mode as the checklist. Possibly useful later as an instrument *inside* the loop; not the route.
- **`/ship`, `spec-driven-development`, `planning-and-task-breakdown`, `to-tickets`** — ceremony. Skipping is a normal decision, not a violation.
- **`observability-and-instrumentation`, `code-review*`, `browser-testing-with-devtools`** — none of these is the route at a symptom; DevTools may be the *instrument* the loop uses, but the skill that governs is `diagnosing-bugs`.
- **`interview-me` / clarifying-question skills** — the reply asks two scoping questions inline (which interaction, how often) as part of building the loop; that doesn't warrant a separate interview workflow.

## Visibility check

The routing guidance requires that what the route demands be visible in the reply, not only in these notes. The response therefore: states up front that no measurement exists yet; commits to the loop before any cause; names the collision with `performance-optimization` and where that skill re-enters; treats the deploy as a bisect boundary; declines to rank mechanisms and says why; and marks everything after the loop conditional — one commitment, not a numbered list of five.
