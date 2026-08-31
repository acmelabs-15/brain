# Routing

## Decision

**Invoke: `diagnosing-bugs` (Lineage B). One skill, now. Everything else is conditional.**

## The collision I had to resolve first

This request genuinely matches two skills, and the near-miss is the whole test:

- `performance-optimization` (Lineage A) — its description literally lists "when you suspect performance regressions" as a trigger. It is not a coincidental match; it is the obvious one.
- `diagnosing-bugs` (Lineage B) — "Diagnosis loop for hard bugs **and performance regressions**. Use when the user reports something broken/throwing/failing/**slow**."

Resolved in favour of `diagnosing-bugs`. A performance regression is a diagnosis, not an optimisation. `performance-optimization` is a Lineage A encyclopedic checklist — reference you consult once you know where the time goes, not a workflow you execute at a symptom. Reaching for it first produces a list of things that are commonly slow, which is hypothesis-first reasoning wearing a checklist for cover.

## Order

1. **`diagnosing-bugs`** — now. Phase 1 is the skill: a **tight loop** that goes **red** on this specific slowness. Completion criterion is one command I have already run at least once — red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.
2. **`performance-optimization`** — conditional, *after* the loop localises the bottleneck. Consulted as a section, not read end to end.

Nothing else. In particular:
- **Not `/webperf`** — it fans out to the `web-performance-auditor` persona and, with no Lighthouse/CrUX artifact, would run in Quick mode and hand back findings labelled `potential impact`. Unmeasured findings are exactly what I'm trying not to produce here. It becomes a reasonable *instrument* for building the red loop (a scripted trace) once I know which view is slow, not a first move.
- **Not `interview-me` / `grilling`** — the missing facts (which view, which interaction, which environment) are two questions inside the diagnosis, not a design tree that needs working in rounds.
- **Not the `skills@ACMElabs` heavyweight track** (`/research` → `/decisions` → `/spec`) — ceremony for an unlocated regression.
- **Not `/review` or `code-review*`** — reading the deploy diff for suspicious-looking code *is* the hypothesis-first failure mode, just sourced from a diff instead of from memory.

## Gate discipline made visible in the reply

The skill's warning is that an unaided agent states the rule where it reasons and then breaks it in the first sentence to the user. So `response.md` deliberately:

- **Names no candidate mechanism and gives no ranked list of likely causes.** The gate is on the hypothesis, not on the fix — deferring only the patch while opening with "it's probably the bundle size" has already lost the phase.
- **Treats the deploy boundary as the thing to bisect against**, explicitly not as the assumed cause, and notes the informative case where the loop is red before the deploy too.
- **Handles intermittency as a rate to drive to certainty** — a one-in-five symptom gives a plausible fix an 80% chance of appearing to work — rather than catching one slow load and reasoning from the single capture.
- **States the stop condition.** If the environment can't be driven to produce a red loop, I say so and stop, rather than falling back on reading code and reasoning about what looks expensive — the failure the phase exists to prevent, wearing a fallback's clothes.
- **Commits to one skill plus "the next steps depend on what this shows"**, rather than a numbered list of five skills, which would read as five commitments.

## Vocabulary

Used verbatim per Lineage B: **tight loop**, **red**. Deliberately avoided generic substitutes ("repro harness", "failing test") that would blur the concept.
