# Routing

## Decision

**`diagnosing-bugs` — and only that, for now.**

## Order

1. **`diagnosing-bugs`** (Lineage B, workflow — execute literally). Start at Phase 1 and treat it as the whole of the first step: build a tight loop that goes red on this specific slowness. Its completion criterion is one command already run at least once — red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.
2. **Conditional, after the loop localises the problem:** consult `performance-optimization` as a reference — the relevant section only, not end to end.

Nothing else is committed. What comes after step 1 depends on what the loop shows; a fix that turns out to be contained would go through `test-driven-development` and a commit, but that is a downstream possibility, not a plan.

## Why

**The collision is real and has to be resolved, not dismissed.** `performance-optimization` explicitly lists "you suspect performance regressions" as a trigger, so this genuinely matches two skills. Resolving it: `performance-optimization` is Lineage A — an encyclopedic checklist to consult once you know where the time goes, not a workflow to run at a symptom. Reaching for it first yields a list of things that are commonly slow, which is hypothesis-first reasoning wearing a checklist for cover. `diagnosing-bugs` covers performance regressions explicitly and is the workflow for "something is wrong and I don't know why".

**The deploy boundary is a bisection axis, not a cause.** "After the last deploy" is the strongest available lead precisely because it gives a bisectable boundary. Treating it as the answer ("the deploy introduced X") skips the loop.

**The gate is on the hypothesis, not the fix.** Deferring only the patch while opening with a ranked list of likely culprits has already lost Phase 1 — the loop then exists to confirm a theory rather than find one. So the reply names no candidate mechanism at all, and says why.

**Intermittency is a rate, not evidence.** If the slowness is only some loads, that rate gets driven up toward certainty before any mechanism is named. A 50% flake is workable; 1% is not.

**Where the environment cannot be driven, say so and stop.** The reply commits to that explicitly rather than leaving a code-reading fallback available — reading the diff and reasoning about what looks expensive is the exact failure Phase 1 prevents, and it is most dangerous when it arrives dressed as a fallback.

## Explicitly not routed

- **`performance-optimization` first** — the collision above; reference, later, conditional.
- **`/webperf` / `web-performance-auditor`** — the persona runs Deep mode only with a Lighthouse or CrUX artifact and Quick mode otherwise, labelling findings "potential impact". Unmeasured potential-impact findings are the opposite of what this needs, and there is no measurement yet. Could earn a place later as a source of measurement, not as the diagnosis.
- **`grilling` → `to-spec` → `to-tickets`** — ceremony. This is a regression, not a feature with an unclear spec.
- **`/ship`, `code-review` (either)** — nothing is being merged or released.
- **`observability-and-instrumentation`** — Lineage A reference; may become relevant if the loop cannot be built without instrumentation, but not the route.

## Visible-in-the-reply check

The skill requires that what the route demands appears in the reply to the user, not only in the notes. The response states the loop-before-cause commitment in its first sentence, names no candidate mechanism, marks the `performance-optimization` consult as conditional and later, states the intermittency-as-rate rule, and states the stop-if-undrivable condition. One committed skill plus "what comes next depends on what this shows" — not a numbered list of five commitments.
