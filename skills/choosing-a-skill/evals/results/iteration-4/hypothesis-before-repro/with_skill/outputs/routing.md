# Routing

## Decision

**`diagnosing-bugs` — alone, now. Nothing else is committed to.**

## Order

1. **`diagnosing-bugs`** (Lineage B, workflow to execute literally, six phases).
   Phase 1 *is* the skill: build a tight loop that goes red on this specific bug.
   Completion criterion is one command already run at least once — red-capable,
   deterministic, fast, agent-runnable. No red-capable command, no Phase 2.

2. *Conditional, not committed:* once the loop localises the fault, a contained fix
   may route to `test-driven-development` — the loop becomes the failing test, and the
   fix is proven by driving it green across many runs, not one. I am not naming that
   as a step in the reply, because it is downstream of a result I do not have.

Nothing else. No spec, no ticket breakdown, no five-axis review. Routing table row 1
and the ceremony warning both apply: this is a bug of unknown cause, not a feature.

## Why this route

**Routing table match.** "Something is broken and you don't know why" → `diagnosing-bugs`.
Unambiguous. The user reports a symptom (a TypeError on the login page) with no cause
identified. No competing row fits: it is not a contained change already understood
(row 2 — the cause is unknown, which is the whole problem), and it is nowhere near
feature-sized.

**The intermittency sharpens the route rather than loosening it.** The skill file is
explicit that a one-in-five failure is a *rate to drive to certainty*, not evidence for a
mechanism. Two consequences I built the reply around:

- A fix that looks right has an ~80% chance of appearing to work on the next load. So
  "reproduce once, patch, reload, looks fine" is not a diagnosis — it is a coin flip
  dressed as one. The rate must be driven up until the loop is debuggable (50% workable,
  1% not) before anything is concluded.
- Catching a single failure and reasoning from that one capture is the failure mode, not
  the goal.

**The gate is on the hypothesis, not the fix.** This is the trap this scenario is built
around and the one I had to keep out of the *first sentence to the user*, not just out of
my notes. The tempting opening — "this is almost always a race condition; here are the
four likely causes ranked" — has already lost Phase 1 even if the patch is deferred,
because the loop then exists to confirm a theory rather than to find one, and every later
observation is read through it. So in the reply, candidate mechanisms (late response,
session/user read before populated, cache-state difference) appear only as **things the
loop should force** — knobs whose effect on the failure *rate* is the evidence — never as
a likelihood ordering, and never as a diagnosis.

**Visible in the reply, not only here.** The skill requires the route's demand — a red
loop before a cause — to be stated to the user. The reply says the rate is not a clue,
says why a hypothesis now would poison the loop, and asks for the one thing needed to
build the loop (a scriptable way to load the page).

**Stop condition stated up front.** If the environment cannot be driven, I say so and stop,
rather than falling back on reading the code and reasoning about ordering. The skill file
calls that fallback out by name: it is the exact failure Phase 1 exists to prevent, wearing
a fallback's clothes. The reply commits to that in advance so the fallback is closed off
before it becomes tempting.

**One commitment, not a list.** Per the skill: five numbered skills read as five
commitments; one skill plus "next steps depend on what this shows" is a plan. The reply
ends on exactly that.

## Considered and rejected

| Candidate | Why not |
| --- | --- |
| `debugging-and-error-recovery` (Lineage A) | Real name collision with `diagnosing-bugs` — its description ("behavior doesn't match expectations", "any unexpected error") matches this ask on the surface. Lineage A is an encyclopedic checklist to *consult*, not a workflow to *execute*. Reaching for it at a symptom yields a list of things that commonly cause undefined reads — hypothesis-first reasoning with a checklist for cover. Same shape as the documented `performance-optimization` mis-route. Consult after localisation, if at all. |
| `test-driven-development` | Right skill, wrong moment. TDD needs a known behaviour to write a failing test for; here the failing condition is exactly what is unknown. It is the natural *successor* once the loop is red and the fault is localised — the loop is already the failing test. |
| `browser-testing-with-devtools` / `chrome-devtools-mcp:*` | These are the likely *instruments* for building and observing the loop (console capture, network timing, forcing cache/throttle states), not the route. `diagnosing-bugs` governs; DevTools is how Phase 1 gets executed once there is a driveable environment. Naming them as the route would be picking a tool before knowing there is a loop to run it in. |
| `frontend-ui-engineering` | Name-adjacency only ("login page"). Builds UI; does not diagnose. |
| `security-and-hardening` | "Login" is not "auth vulnerability". A TypeError is a correctness bug. Pure keyword pull. |
| `/build`, `/spec`, `/plan`, `grilling` → `to-spec` → `to-tickets` | Ceremony. A bug of unknown cause has no spec to write and no tickets to cut until the cause is known. Skipping is a normal decision. |
| `doubt-driven-development` | Adds an adversarial review layer over decisions; there are no decisions yet, only an unknown. Would add a pass over hypotheses — the opposite of what Phase 1 needs. |
| `skills:*` (ACMElabs plugin lifecycle) | The heavyweight parallel track — PRD, ANALYSIS, gates, Brain graph, JIRA. Pick one track per project; this is a bug, and the local track is the lighter one. Nothing here calls for it. |

## Vocabulary carried into the reply

Lineage B terms used verbatim, per the skill: **tight loop**, **red**. The rate framing
("a rate to drive to certainty", 50% workable / 1% not) and "force the mechanism rather
than rank it" carry the Phase 1 discipline in the user-facing text, not only here.
