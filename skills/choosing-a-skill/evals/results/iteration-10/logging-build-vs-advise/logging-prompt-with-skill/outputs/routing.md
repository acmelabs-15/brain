# Routing decision

## The fork

The request contains two jobs, and they route differently:

1. **"Checkout keeps failing for some users and we have no idea why"** — a diagnosis. Routing table: *"Something is broken and you don't know why" → `diagnosing-bugs`*.
2. **"Add proper logging so we can see what's happening in production"** — instrumentation. That is `observability-and-instrumentation`, whose description explicitly claims both "adding logging" and "production issues are reported but you can't tell what happened from the available data".

This is a genuine collision, not a coincidence — the same structure as the performance-regression case the routing skill calls out, where a symptom-shaped complaint has a plausible Lineage A checklist sitting next to the right workflow. Resolving it by grabbing whichever skill's description matches the most nouns lands on the wrong side without noticing there was a fork.

## What I decided

**Primary: `observability-and-instrumentation`, used as reference, scoped by the diagnostic questions. `diagnosing-bugs` named as the conditional next step.**

Reasoning:

- The user asked for a build, not an answer. They did not ask me to find the bug; they asked for the ability to see. Overriding a stated deliverable in favour of "actually you want diagnosis" is the ceremony failure the routing skill warns about — and here it would also be wrong, because they have identified a real capability gap ("basically no logging in that flow") that exists independently of this particular bug.
- The observability skill's own **NOT for** block draws the same line: it points at the debugging skill for "diagnosing a failure happening right now", and describes itself as "what makes that skill fast next time". Adding logging to a flow that has none is squarely its territory.
- But `diagnosing-bugs` still governs the *epistemics* even though it isn't the primary route. Its Phase 1 discipline — no hypothesis before a red loop, and an intermittent failure is a **rate to drive to certainty**, not evidence for a mechanism — is exactly what stops instrumentation from degenerating into "log everything around the part I suspect". So I carried that constraint into the reply rather than routing to the skill wholesale.

## Skills invoked, in order

1. **`choosing-a-skill`** (this file) — resolve the build-vs-diagnose fork.
2. **`observability-and-instrumentation`** — Lineage A, so **consulted, not executed**. Pull the sections that apply: step 1 (write the on-call questions before instrumenting), step 3 (structured events over interpolated strings), the PII/secrets hard rule, and the cardinality rule for metric labels. Not read end to end — that would be a poor trade on a 203-line checklist.
3. **`diagnosing-bugs`** — **conditional, not committed.** Fires if the instrumented data does not name the cause once production traffic lands, or immediately if the user says the bleed is bad enough that waiting is unacceptable. If it fires, Phase 1 is a tight loop that goes red on the actual failure, and the logging added in step 2 is what makes that loop cheap.

Everything else is conditional on what step 2 turns up, which is why the reply commits to one skill plus a named branch rather than listing four.

## Deliberately not routed to

- **`security-and-hardening`** — the one section that matters (never log secrets/tokens/PII, allowlist fields) is already quoted inside the observability skill as a hard rule. Loading a second Lineage A checklist to re-derive a constraint I already have is ceremony. If the checkout flow turns out to handle card data directly rather than via a tokenising provider, that changes and I'd pull its section.
- **`debugging-and-error-recovery`** — the Lineage A neighbour of `diagnosing-bugs`. It is a checklist of debugging advice; `diagnosing-bugs` is the Lineage B workflow with the red-loop gate. For an intermittent production failure the workflow is what's needed, so if diagnosis fires it goes to the Lineage B one.
- **`performance-optimization`** — nothing here says slow. Failing, not slow.
- **`test-driven-development`** — the routing table offers it for "a contained change you already understand", and I do not yet understand this flow. It becomes relevant if the diagnosis produces a fix worth pinning with a regression test.
- **`spec` / `plan` / `interview-me` / `grilling`** — adding logging to one flow is not a feature. Running an interview and a spec here is the exact ceremony failure the routing table exists to prevent.
- **`/ship`, `shipping-and-launch`** — not launching anything.

## What I surfaced in the reply rather than only in notes

Per the skill's instruction that a route's demands must be visible to the user, not just reasoned about internally:

- The fork itself, named explicitly, with the fact that it's a choice about their situation rather than a sequence.
- The rate-not-mechanism point about "some users", stated in the reply.
- The questions-before-instrumenting step, stated as the first concrete action, with the actual draft questions.
- The PII and cardinality constraints, stated as commitments.
- **What I have not checked** — the code, the logging library, whether the log destination can query structured fields, and whether a correlation-ID convention already exists. That last one materially changes the design, so it's flagged rather than assumed.
- One commitment plus a marked-conditional branch, not a numbered list of five skills.

## Anti-patterns avoided

- **Blanket logging.** The instinctive read of "add proper logging" is to instrument every function in the flow. That produces volume and no answers, and it's the "log everything and learn nothing" failure the observability skill names in step 1. Scoping the instrumentation to named diagnostic questions is the whole difference.
- **Hypothesis-first instrumentation.** Opening with "checkout failures are usually payment provider timeouts" and logging heavily around that would be the diagnosing-bugs Phase 1 violation in instrumentation's clothing — the telemetry then exists to confirm a theory rather than to find one. The reply names the candidate stages as things the logging should *discriminate between*, not as a likelihood ordering.
- **Silently substituting the job.** Not answering "you don't want logging, you want a debugging session" — but also not pretending the diagnosis question went away.
