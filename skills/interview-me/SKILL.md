---
name: interview-me
description: Extracts what the user actually wants, or stress-tests a plan, design or decision that already exists, through a one-question-at-a-time interview with a recommendation attached to every question. Use when an ask is underspecified ("build me X" without "for whom" or "why now"), when an artifact needs interrogating before work starts on it, when the user invokes it ("interview me", "grill me", "grill this plan", "are we sure?", "stress-test my thinking"), or when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists.
allowed-tools: Bash(cat:*)
---

Call the Skill tool for `brain:ask-user-question` now, before anything else: every question this skill asks is composed and delivered through it, one question at a time.

!`cat "${CLAUDE_PLUGIN_ROOT}/references/read-the-glossary.md"`

# Interview Me

## Overview

What people ask for and what they actually want are different things. They ask for "a dashboard" because that's what one asks for, not because a dashboard solves their problem. And a plan that already exists can carry the same gap inside it: decisions nobody surfaced, branches nobody visited.

The cheapest moment to find the gap is before building starts. This skill closes it with one discipline — one question at a time, your recommendation attached, through `brain:ask-user-question` — in two modes.

## The workflow

1. Determine the mode:

   **No artifact yet — the ask itself is the fog?** → Read [references/intent-mode.md](references/intent-mode.md) and follow it: hypothesis with a confidence number, one question at a time with your guess attached, the want-vs-should-want probe, the restate, the explicit yes.

   **An artifact exists — a plan, spec, design or decision to interrogate?** → Read [references/artifact-mode.md](references/artifact-mode.md) and follow it: the design tree, the frontier in dependency order, facts by subagents, done when nothing is silently assumed.

2. When the user wants terms and decisions recorded as they settle, also call the Skill tool for `domain-modeling` and record inline as decisions land — in either mode.

3. In both modes, every question goes through `brain:ask-user-question`, one at a time, your recommendation attached. No exceptions.

## Two moves, both modes

- **The prototype move.** When the live question is "how should it look?" or "how should it behave?", stop asking: build the cheapest reactable artifact — an outline, a rough take, a stub, throwaway UI — and put it in front of the user. Their reaction resolves the question; the artifact's completeness never does.
- **The fog-or-ticket test.** Ask only what you can state precisely now — the test is whether you can phrase the question sharply, not whether you can answer it. What you cannot yet phrase goes on a **Not yet specified** list instead of becoming a mushy question; show that list with the restate so the user sees where the fog still is.

## Loading constraints

This skill needs a live, responsive user. In a non-interactive context (CI, scheduled runs, `/loop`, autonomous runs), do not invoke it — flag the underspecified ask as a blocker instead of guessing.

## Output

- **Intent mode:** a **confirmed statement of intent** — the Step 4 restate with an explicit yes. Specs, plans and task lists are downstream; they consume it. If the intent should persist (multi-session work, a handoff), offer to save it to `docs/intent/[topic].md`; save only on confirmation.
- **Artifact mode:** the settled decisions, restated against the tree; where `domain-modeling` was engaged, `CONTEXT.md` and the ADRs already carry them.

## Interaction with other skills

- **`idea-refine`**: downstream. When the confirmed intent is "I want X but I don't know how to scope it," hand off — it generates variations against the now-explicit intent.
- **`spec-driven-development`**: downstream. When the intent is concrete, hand off to write the requirements down.
- **`doubt-driven-development`**: the other end of the timeline — post-decision artifact review; this skill is pre-decision.
- **`wayfinder`**: when the artifact is bigger than one session can hold, chart a map there instead; its decision tickets call back into this skill's artifact mode.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "The ask is clear enough" | If you can't write the desired outcome in one sentence right now, it isn't. Run Step 1 before deciding. |
| "Asking questions wastes their time" | 4–6 targeted questions are cheap. Building the wrong thing is enormous, and the user bears that cost. |
| "I'll figure it out as I build" | Switching costs after code exists are 10x what they are now. Discovery during implementation is rework. |
| "They said 'whatever you think'" | Delegation, not decision. Re-ask with two concrete options as a choice. |
| "If I attach my guess, I'm leading them" | Leading is the point; reacting beats generating. The risk is sycophancy — mitigate by being visibly willing to be wrong. |
| "Asking the whole frontier at once saves a round trip" | A batch locks in the wrong framing and buries the hypotheses the user should react to. One at a time is the discipline, not a preference. |
| "The user said yes, we're done" | If the yes followed a vague restate, it's hollow. Restate concretely and re-confirm. |

## Red Flags

- Two or more questions in a single message — batching, in either mode
- A question without your recommendation attached — surveying, not committing
- A question composed outside `brain:ask-user-question`
- Accepting "whatever you think is best" as a terminal answer
- Producing a spec, plan, or task list before the explicit confirmation
- Asking the user for a fact a subagent could fetch
- A frontier question whose prerequisite is still open — it belongs to a later turn
- A confidence number below ~70% with no reason attached
- Answering your own questions when a ticket or wrapper invoked this skill — the human speaks for themselves
- Skipping the "Out of scope" line, or the "Not yet specified" list when fog remains

## Verification

- [ ] An explicit hypothesis with a confidence number opened intent mode (with its reason when below ~70%)
- [ ] Every question went through `brain:ask-user-question`, one at a time, recommendation attached
- [ ] At least one "what would you actually want?" probe ran when the user gave a convention-signaling answer
- [ ] Artifact mode's frontier was worked in dependency order and recomputed after each answer
- [ ] Facts came from subagents, never from the user
- [ ] The restate carried Outcome / User / Why now / Success / Constraint / Out of scope — and the Not-yet-specified list where fog remained
- [ ] The user confirmed with an explicit yes
- [ ] Any handoff was framed in terms of the confirmed intent, not the original ask

## Keeping the domain model current

When a term is resolved or a decision recorded while this skill runs, call the Skill tool for `domain-modeling` and update `CONTEXT.md` right there — it creates the file lazily and keeps it a glossary, not a spec. Do not batch terms for the end.
