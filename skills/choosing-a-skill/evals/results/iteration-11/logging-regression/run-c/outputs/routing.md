# Routing

## Decision

**Invoke `observability-and-instrumentation` (Lineage A) as reference, consulted — not executed end to end. Nothing else, yet.**

Held conditional, stated as such in the reply: **`diagnosing-bugs`** if reconnaissance surfaces a lead worth driving at rather than a blind spot worth lighting up.

That's one commitment plus one conditional, not a numbered chain of five. The rest genuinely depends on what the first look shows.

## The fork this task turns on

The request has two readings and they route differently:

1. *"Add logging"* — an instrumentation deliverable. Routes to `observability-and-instrumentation`, whose description names this exactly: "adding logging, metrics, tracing" and "production issues are reported but you can't tell what happened from the available data." The second clause is a near-verbatim match for "no idea why."
2. *"Checkout keeps failing"* — a production bug with an unknown cause. Routing table: "Something is broken and you don't know why → `diagnosing-bugs`."

Both are real. Resolving this by picking the closest-named skill and moving on is the failure the routing file warns about ("diagnosing a slow or broken symptom to the right workflow rather than the closest-named skill"), and it cuts both ways here — reaching for `diagnosing-bugs` purely because the words "keeps failing" appear would be the same error in the opposite direction.

## Why instrumentation wins the primary slot

`diagnosing-bugs` Phase 1 *is* the skill: build a tight loop that goes **red** on this specific bug, and the completion criterion is a command already run at least once — red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.

Here there is no such command and no path to one yet. The failure is in production, affects an unknown subset of users, and the reporter cannot characterise it. There is nothing to make go red because there is nothing to observe. The routing file is explicit about the honest move when the environment can't be driven: say so and stop, rather than falling back on reading code and reasoning about ordering.

But "stop" isn't the end of the story here, because there is a real intervention available that isn't code-reading-and-guessing: make the system observable so a loop becomes constructible later. That is precisely the instrumentation skill's job. So the two skills aren't competing — they're sequential, and the prerequisite for the second one is the output of the first.

## Why the diagnosis discipline still shapes the instrumentation

The `diagnosing-bugs` reasoning discipline applies even though its workflow doesn't run yet, and the reply carries it visibly:

- **No hypothesis ordering.** The reply does not open with "this is almost always a race" or a ranked list of four likely causes. The routing file calls that out specifically: naming a probable mechanism up front means every later observation is read through it, and here it would be worse — the instrumentation itself would get placed to confirm the theory, baking the bias into the evidence-gathering apparatus.
- **Instrumentation placed to *discriminate*, not to *cover*.** State-transition events across the whole flow let the trace stop somewhere and tell you where. That's the loop-building instinct applied to a system you can only watch, not drive.
- **The rate is treated as a rate.** "Some users" gets converted into a funnel number to watch. The routing file's point that a one-in-five failure is a rate to drive to certainty, not evidence for a mechanism, is why the reply asks for clustering and frequency rather than reasoning from a single hypothesised cause.

## Skills considered and not routed to

- **`diagnosing-bugs`** — held conditional, not dropped. Named in the reply with the trigger stated (a strong signal in the reconnaissance: one payment method, a deploy boundary). Invoking it now would produce a Phase 1 that cannot complete.
- **`debugging-and-error-recovery`** (Lineage A) — a near-name collision with the actual need. Encyclopedic checklist; `diagnosing-bugs` (Lineage B) is the executable workflow and is the one worth following literally. Not the primary anyway, per above.
- **`security-and-hardening`** — not invoked, but its PII/payment-data section is the one relevant chunk, pulled inline rather than read end to end (the routing file's stated way to use Lineage A). This is why the reply commits to no card data, CVVs, tokens or full addresses in logs. Checkout logging is exactly where a well-intentioned instrumentation pass creates a compliance incident, so this couldn't be silently deferred.
- **`test-driven-development`** — no. There is no known behaviour to pin.
- **`spec-driven-development` / `planning-and-task-breakdown` / `/ship`** — ceremony. The routing file: skipping a skill is a normal decision, and the failure mode of this collection is a spec and a five-axis review on work that needed an afternoon.
- **`incremental-implementation`** — reasonable if the instrumentation turns out to span many services, but not worth naming up front. Would be a mid-course decision, not a routing one.
- **`shipping-and-launch`** — no launch here.

## Order

1. `observability-and-instrumentation` — consulted, with a reconnaissance step first (existing error tracker, gateway logs, support reports) to decide *where* the instrumentation has to discriminate.
2. Pull the PII section of `security-and-hardening` before writing any log line that touches payment or address data.
3. **Then branch:** if the traces localise the failure to a transition, `diagnosing-bugs` with a now-constructible tight loop. If reconnaissance surfaces a lead before that (single payment method, deploy boundary), `diagnosing-bugs` immediately and skip the broad instrumentation.

## Question asked, and why that's not a violation

The reply ends with one question (error tracker/APM availability; staging with a sandbox provider). It is not a clarifying question about what the user wants — it asks for access to evidence and for whether the environment can be driven at all. That second half is the `diagnosing-bugs` gate asked in advance: it determines whether a red loop is reachable, which is the branch point for the whole route. Asking it costs one round trip and could save a deploy cycle of misplaced logging.
