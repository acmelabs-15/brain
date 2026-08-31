# Routing

## Decision

**Invoke `diagnosing-bugs` (local, Lineage B). Alone. Nothing before it.**

Order:

1. `diagnosing-bugs` — the whole job, starting at its Phase 1.
2. *(conditionally, inside Phase 1 only)* `browser-testing-with-devtools` or the
   `chrome-devtools-mcp:chrome-devtools` plugin skill — **only** as instrumentation for building
   the tight loop, if the repo has no browser-driven harness already and the Chrome DevTools MCP
   server is configured. This is a tool for the loop, not a separate phase, and it does not
   displace `diagnosing-bugs` as the governing workflow.
3. *(only after the loop is red and the root cause is found)* `test-driven-development` — to land
   the fix with the red-capable command as the failing test. Not committed to up front; it is the
   routing table's "a contained change you already understand" entry, and I do not yet understand
   the change.

## Why

**The routing table sends this here directly.** "Something is broken and you don't know why" →
`diagnosing-bugs`. The user has a symptom and no cause. That is the row.

**Phase 1 is the skill, and Phase 1 is where this request will fail if I let it.** The completion
criterion is a single command, already run at least once, that goes red on this specific bug —
deterministic, fast, agent-runnable. No red-capable command, no Phase 2. So the opening reply has
to be about constructing that command, not about what's likely wrong.

**The gate is on the hypothesis, not on the fix.** The tempting move here is to open with "this is
almost always a race between the auth fetch and the first render" and a ranked list of four
candidates, while carefully deferring the actual patch. That has already lost the phase: the loop
then exists to confirm a theory rather than to find one, and every subsequent observation gets read
through it. So the response names candidate mechanisms **only as axes the loop must be able to
force**, explicitly not as a likelihood ordering.

**One-in-five sharpens this rather than loosening it.** A rate is something to drive to certainty,
not evidence for a mechanism. A wrong fix has an 80% chance of looking correct on the next load,
which is why "reload a few times and see" is disqualified as a loop. The response says this
outright, because the user's framing ("only sometimes") invites exactly the sampling approach.

**The named fallback is pre-refused.** If the environment can't be driven, the correct move is to
say so and stop — not to fall back on reading the code and reasoning about ordering. That fallback
is the precise failure the phase exists to prevent, wearing a fallback's clothes, so the reply
commits to stopping in advance rather than leaving the door open.

## What I deliberately did not route to

- **`debugging-and-error-recovery`** (Lineage A, 180–500 line checklist). Same territory, wrong
  character: encyclopedic on *what to consider*, weak on *what to do next*. Lineage A is reference
  you consult, not a workflow you execute. `diagnosing-bugs` is Lineage B — a workflow to follow
  literally — and this job needs the discipline, not the checklist. Consult a section of the
  Lineage A skill later if a specific error class needs background; do not run it as the workflow.
- **`test-driven-development` as the opening move.** Writing a test now means writing a test for a
  guess. The red-capable command comes out of Phase 1; TDD picks it up afterwards.
- **`interview-me` / `grilling`.** Not underspecified intent — a concrete bug with a concrete
  error string. Grilling works a design tree; there is no design decision here.
- **`spec` / `plan` / `build` and the `skills@ACMElabs` lifecycle.** Pure ceremony for a bug fix.
  Skipping a skill is a normal decision, not a violation.
- **`ship` / `review` / `code-review`.** Nothing has been changed yet; there is no diff to review.
- **`performance-optimization`.** Intermittent is not slow. No performance symptom was reported.
- **`ask-user-question`.** The questions in the reply are two plain factual asks needed to build
  the loop (how to run the page, what correlates with bad loads), not an `AskUserQuestion` call
  that is itself the deliverable, and not clarification of what the user wants.

## Note on the questions in the response

The two asks are inputs to constructing the loop — how to reach the page, and any observed
correlation that gives an axis to pin. They are not "what do you want me to do", and they do not
defer the work: the response commits to the loop-first approach unconditionally regardless of the
answers.
