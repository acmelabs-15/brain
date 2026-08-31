# Routing

## Decision

**Build it. Do not run a workflow skill. Consult two Lineage A references while writing.**

| Order | Skill | Lineage | How it is used |
| --- | --- | --- | --- |
| 1 | `observability-and-instrumentation` | A | **Consulted, not executed.** Pull the structured-logging / correlation-ID / log-level sections; apply; move on. |
| 2 | `security-and-hardening` | A | **Consulted, not executed.** One section only — what must never be written to a log in a payment flow. |
| — | `diagnosing-bugs` | B | **Named as conditional, not invoked now.** Held for after the logs produce signal. |

## Why

**The ask is a contained change the user has already scoped.** They named the
deliverable (logging in the checkout flow) and the reason (production
visibility). The routing table's top row — "a contained change you already
understand" — routes to doing the work, and the standing failure mode of this
collection is ceremony: an interview, a spec, a ticket breakdown and a five-axis
review on something that needed an afternoon. There is no spec to write here and
nothing to grill: the design questions in my reply are *facts about their
production environment*, not decisions I'd be asking them to make. Adding
logging is not a feature.

**`observability-and-instrumentation` is the obvious skill and it is Lineage A.**
Its description matches this request almost word for word ("production issues are
reported but you can't tell what happened from the available data"). But Lineage
A skills are encyclopedic checklists — strong on what to consider, weak on what
to do next — and the correct use is to pull the relevant section and apply it,
not to read 300+ lines end to end before touching a file. So it appears in this
plan as reference, not as a step the user waits through.

**`security-and-hardening` is not gold-plating here, it is the domain.** Its
description explicitly triggers on features that handle personal data and payment
integrations. Checkout is exactly that. Consulting one section on what may not be
logged is a good trade; reading all 499 lines is not. This is why the constraint
appears in my reply as something I apply unasked rather than a question — it is
not a preference to negotiate.

## The collision I resolved, and the one I refused

**The real fork is build-vs-diagnose, not which skill.** The user has framed
logging as the cure for an unknown production failure. That framing points at
`diagnosing-bugs` — something is broken and they don't know why, which is a
routing-table row. But `diagnosing-bugs` Phase 1 *is* the skill: build a tight
loop that goes red on this specific bug, and no red-capable command means no
Phase 2. Right now there is no signal at all in that flow, so the loop cannot be
built. Routing to `diagnosing-bugs` first would mean opening with a ranked list
of likely causes — a race, a timeout, a provider webhook — and that is
hypothesis-first reasoning wearing a workflow for cover. The instrumentation is
the honest prerequisite.

So: build the logging **now**, and name the diagnosis as the conditional next
step whose shape depends on what the logs show. That is one commitment plus a
dependency, not a five-item plan. My reply says this explicitly rather than
leaving it in these notes — it states that logging alone won't diagnose the
failure, and it names the tight loop as the thing step 1 exists to make
possible.

**I did not route to `debugging-and-error-recovery`.** It is the Lineage A
neighbour of `diagnosing-bugs` and its name is closer to the user's words. Naming
both in full: `debugging-and-error-recovery` (local, Lineage A, reference) versus
`diagnosing-bugs` (local, Lineage B, executable workflow). Neither is the answer
today, but if a diagnosis phase happens it is the Lineage B one — comparing
`observability-and-instrumentation` only against its same-lineage neighbours
would have resolved an easier question than the one in front of me.

**No plugin collision applies.** `observability-and-instrumentation` and
`security-and-hardening` have no plugin twins in the installed set, so the
name-collision table is not engaged. Nothing here needs disambiguating before
invocation.

## Skills deliberately skipped

- `grilling` / `interview-me` / `spec-driven-development` / `to-tickets` —
  ceremony. Skipping is a normal decision. Four factual questions in the reply
  are not an interview.
- `test-driven-development` — logging assertions are low-value, and there is no
  behaviour change to prove. Worth revisiting if a redaction helper gets written,
  since "never emits a PAN" is a genuine invariant worth a test.
- `/ship`, `/review`, `/build auto` — no spec, no clean-status precondition
  established, and the persona fan-out is disproportionate to an instrumentation
  pass.
- `performance-optimization` — no performance claim was made. Not triggered.
