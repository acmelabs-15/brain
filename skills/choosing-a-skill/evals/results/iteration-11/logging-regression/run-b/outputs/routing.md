# Routing

## Decision

**`diagnosing-bugs` first (Lineage B, executed as a workflow). `observability-and-instrumentation` second, conditionally — consulted as reference, only after the loop localises the failure.**

Order: `diagnosing-bugs` → *(loop goes red)* → `observability-and-instrumentation`.

Only the first is a commitment. The second is conditional on what the loop shows, and I said so in the reply rather than presenting a numbered plan of skills.

## The collision, resolved rather than dismissed

The request has two honest readings, and they route differently:

1. **"Add logging to checkout"** — a standalone instrumentation job. `observability-and-instrumentation` matches on its face; its description explicitly names "adding logging" and "production issues are reported but you can't tell what happened from the available data". This is a real match, not a coincidence.
2. **"Checkout keeps failing for some users and we have no idea why"** — a bug with an unknown mechanism. Routing table: *"Something is broken and you don't know why → `diagnosing-bugs`."*

The user phrased (1), but (1) exists only in service of (2). Nobody wants logs; they want to know why checkout fails.

This is structurally the performance-regression collision the skill file works through. There, "slow since the last deploy" genuinely matches `performance-optimization` — and the resolution is that the Lineage A skill is *"a checklist to consult once you know where the time goes, not a workflow to run at a symptom"*, and reaching for it first *"produces a list of things that are commonly slow, which is hypothesis-first reasoning wearing a checklist for cover."*

Same failure mode here. `observability-and-instrumentation` run at the symptom yields a list of places one usually logs in a checkout flow. That is guessing about the failure mechanism, dressed as an instrumentation checklist. If the failure sits outside the guessed set, the logs ship, come back clean, and a deploy cycle buys nothing.

So: route to `diagnosing-bugs`, let the instrumentation be **how the loop gets built** rather than the deliverable, and consult the Lineage A checklist afterwards for the permanent instrumentation — which is exactly the "consult the checklist after the loop localises the problem" instruction.

## Why `diagnosing-bugs` specifically

- Lineage B, so it is *"a workflow you execute, step by step"* — the ones worth following literally — rather than reference to pull a section from.
- Phase 1 **is** the skill: a **tight loop** that goes **red** on this specific bug, and the completion criterion is a command already run at least once. Logging is instrumental to that.
- **"Some users" is a rate, not a mechanism.** The skill is explicit that an intermittent bug makes this sharper, not looser: a low failure rate is *"a rate to drive to certainty"*, and a fix that looks right on a one-in-five bug has an 80% chance of appearing to work anyway. Hence the reply asks for the rate and its shape, and commits to driving it up (the skill's 50%-workable / 1%-not-workable line) rather than catching one failure and reasoning from the single capture.
- **The gate is on the hypothesis, not the fix.** This is why the reply names no ranked list of likely causes — no "probably a payment gateway timeout", no four-candidate ordering. That would make the loop a device for confirming a theory rather than finding one, and would colour every later log line. Candidate mechanisms appear only as things the loop should *force*: which stage the flow dies in, whether failing users share an attribute, whether the failure is ours or at an external boundary.
- **The escape hatch is named up front.** If production is unobservable and unreproducible, the skill says to state that and stop, rather than fall back on reading the code and reasoning about ordering — *"the failure the phase exists to prevent wearing a fallback's clothes."* The reply asks where the output can be watched and commits to stopping if the answer is nowhere.

## Where `observability-and-instrumentation` does earn its place

Second, as Lineage A reference — *"pull the one relevant section, apply it, move on."* Once the loop localises the failure, the permanent checkout instrumentation needs the things a checklist is genuinely good for: structured fields, level discipline, sampling, retention, correlation-id conventions, alerting thresholds. That is the right use of the artifact; it just is not the entry point.

## Skills considered and skipped

| Candidate | Why not |
| --- | --- |
| `observability-and-instrumentation` **first** | The core misroute. Lineage A checklist at a symptom = hypothesis-first reasoning with cover. Correct second, not first. |
| `debugging-and-error-recovery` | Lineage A's overlapping debugging reference. `diagnosing-bugs` is the Lineage B workflow with the actual loop discipline; prefer it for a live symptom. |
| `shipping-and-launch` / `/ship` | Its monitoring section is adjacent, but the job is not a launch, and `/ship` fans out to three review personas for a GO/NO-GO. Pure ceremony here. |
| `grilling` → `to-spec` → `to-tickets` | The feature chain. This is a diagnosis, not an unclear feature. *"Skipping a skill is a normal decision, not a violation."* |
| `test-driven-development` | Right once the mechanism is known and a fix is being written. Premature now — there is nothing yet to write a failing test against, which is what Phase 1 is for. |
| `security-and-hardening` | Not a routing target, but checkout logging touches payment data and PII. Handled as a one-line constraint in the reply (log identifiers and outcomes, never payloads) rather than by loading a skill. |
| `interview-me` / `ask-user-question` | The two questions asked are loop prerequisites, not a requirements interview, and the `AskUserQuestion` call is not the deliverable. Plain prose questions suffice. |

## Vocabulary carried into the reply

Per Lineage B, the terms are used verbatim in the user-facing text, not just in these notes: **tight loop**, **red**. And per the skill's opening rule, what the route demands is visible in the reply itself — the rate-before-mechanism discipline, the refusal to open with a ranked cause list, and the stop-if-unobservable commitment all appear in `response.md`, not only here.
