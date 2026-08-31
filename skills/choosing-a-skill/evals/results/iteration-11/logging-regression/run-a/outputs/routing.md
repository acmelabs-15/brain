# Routing — "checkout keeps failing, add logging"

## Decision

**`diagnosing-bugs` (Lineage B, workflow — execute it), starting at Phase 1.**
`observability-and-instrumentation` (Lineage A, reference — consult it) is pulled from
later, and only for the sections that apply once we know what we're watching for.

Nothing else. No spec, no ticket breakdown, no review chain — this is a live bug plus a
targeted instrumentation gap, not a feature.

## The collision, resolved rather than dismissed

The user's literal ask is "add logging," which matches
`observability-and-instrumentation` head-on: its description explicitly lists
*"production issues are reported but you can't tell what happened from the available
data."* That is this situation, word for word. This is a real fork, not a coincidence to
wave away, so it gets named on both sides before picking.

What the user actually reports, though, is: something is broken, it's intermittent
("some users"), and the cause is unknown. That is the `diagnosing-bugs` row in the
routing table — *"Something is broken and you don't know why."*

This is structurally the same collision the skill file works through for performance
regressions. There, "slow since the last deploy" genuinely matches
`performance-optimization`, and the resolution is that Lineage A skills are checklists to
consult **once you know where the problem is**, not workflows to run **at a symptom**.
Reaching for one first yields a list of things that are commonly wrong, which is
hypothesis-first reasoning wearing a checklist for cover.

The instrumentation case is the same shape with an extra edge: adding logging blind
requires guessing where the failure lives, so the guess *is* the hypothesis, and the
logging is built to confirm it. Everything the logs later show gets read through that
choice — including the silence where I didn't instrument.

**Where this case differs from the performance one, and why the answer isn't a clean
"defer the Lineage A skill":** the user named a standing gap that is real independent of
this bug. A checkout flow with no logging should be instrumented regardless of outcome. So
`observability-and-instrumentation` isn't misrouted, it's **mis-sequenced** — the loop
shapes what gets instrumented, rather than replacing the instrumentation.

## Phase 1 is the gate, and the gate is on the hypothesis

`diagnosing-bugs` Phase 1 *is* the skill: produce a **tight loop** that goes **red** on
this specific bug — one command, already run at least once, red-capable, deterministic,
fast, agent-runnable. No red-capable command, no Phase 2.

Two traps the skill file names explicitly, both of which I avoided in the reply:

1. **Don't open with a ranked list of likely causes.** Deferring only the patch while
   leading with "this is almost always a payment-gateway timeout" plus four candidates has
   already lost the phase. The response names no candidate mechanisms as a likelihood
   ordering — the only mechanisms mentioned (concurrency, slow dependency, payment path,
   cart shape) appear as **knobs to drive the failure rate up**, i.e. things the loop
   should force, not a ranking.

2. **Intermittency tightens this, it doesn't loosen it.** "Some users" is a **rate to
   drive to certainty**, not evidence for a mechanism. `diagnosing-bugs` treats ~50% as
   workable and ~1% as not. The reply asks for the current rate and for what raises it,
   rather than proposing to catch one failure and reason from the single capture.

## The conditional branch, stated as conditional

The reply commits to one skill and marks the rest contingent, per the skill file's rule
about five numbered skills reading as five commitments.

- **If the environment can be driven** (repro or amplification in staging/local) — that's
  the loop. Instrumentation follows the localisation and is narrow.
- **If it genuinely cannot be driven** — the skill file says to *say so and stop* rather
  than fall back on reading the code and reasoning about ordering, which is the exact
  failure Phase 1 exists to prevent. Here the honest statement is that production is the
  only available instrument, so instrumentation *becomes* the loop: correlation IDs,
  structured state-transition and external-call events, causes preserved on errors — with
  the red signal defined as a query over those events. That's a stated stop-and-reroute,
  not a silent slide back into code-reading.

Either way the logging that lands is aimed by the loop, not guessed.

## What `observability-and-instrumentation` is used for

Pulled sections only, applied and moved on — never read end to end. Relevant here:
correlation/trace context, structured event design, error capture with causes, and
critically the **PII and retention** guidance, since checkout carries payment and address
data. Reading the whole skill before touching the flow is the poor trade the lineage note
warns about.

## Explicitly not routed

| Candidate | Why not |
| --- | --- |
| `observability-and-instrumentation` **first** | Lineage A reference at a symptom; makes the instrumentation the hypothesis. Consulted later, not led with. |
| `debugging-and-error-recovery` | Lineage A restatement of the same territory; `diagnosing-bugs` is the Lineage B workflow that actually runs. |
| `test-driven-development` | Table row is "a contained change you already understand." The cause is unknown. A red test may well fall out of Phase 1 — that's the loop, arrived at from the diagnosis. |
| `grilling` → `to-spec` → `to-tickets` | Feature chain. Ceremony on a live bug. |
| `spec-driven-development` / `/spec`, `/plan` | Same. |
| `shipping-and-launch`, `/ship` | Nothing to ship yet; premature. Monitoring/alerting is a possible tail once a fix exists. |
| `security-and-hardening` | Only if the loop implicates auth/session/payment handling. Not assumed up front. |
| `performance-optimization` | Only if the loop localises to a timeout or latency cause. Not assumed. |
| `skills:*` (ACMElabs plugin lifecycle) | Heavyweight parallel track — PRD, Brain graph, JIRA, formal gates. Wrong ceremony level, and picking one track per project means staying on the lighter local one. |
| `interview-me` | The missing information is environmental (repro-ability, failure rate, available telemetry), not intent. Asked directly in the reply rather than through an interview loop. |

## Order

1. `diagnosing-bugs` — Phase 1 only for now; gate on a red-capable loop.
2. **Conditional**, decided by what Phase 1 finds:
   - loop achievable → Phases 2-6, then aimed instrumentation on the way out;
   - loop not achievable in any non-production environment → say so explicitly, then
     `observability-and-instrumentation` (pulled sections) to build production-side
     instrumentation *as* the loop.
3. Fix under `test-driven-development` once a mechanism is named — the red loop from
   Phase 1 is the test.
