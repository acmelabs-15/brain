---
package: addy
path: skills/interview-me/SKILL.md
type: skill
bytes: 14359
unit: inv-addy-18
---

# skills/interview-me/SKILL.md

## Purpose — required, verbatim
> "Extracts what the user actually wants instead of what they think they should want. Achieves this through one-question-at-a-time interview until ~95% confidence about the underlying intent. Use when an ask is underspecified (\"build me X\" without \"for whom\" or \"why now\"), when the user explicitly invokes (\"interview me\", \"grill me\", \"are we sure?\", \"stress-test my thinking\"), or when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists." — skills/interview-me/SKILL.md:3

## Design intent — required
Extracts the user's authentic underlying objective when requests are underspecified or couched in conventional software jargon, operating strictly prior to any plan, specification, or code generation—the earliest and cheapest moment in the lifecycle. By enforcing single-question conversational turns paired with explicit hypotheses, quantifying confidence with required justifications below 70%, probing root intent beyond best-practice buzzwords ("If you didn't have to justify this to anyone, what would you actually want?"), and requiring an explicit human confirmation of a structured intent summary including what is out of scope, it prevents agents from making silent assumptions and building elaborate solutions to the wrong problems. Without it, agents jump prematurely into technical solutioning, locking users into mismatched architectures that incur severe rework and switching costs.

## Phase — required
addy:Define

## Inputs — required
- Underspecified user ask or vision (e.g., "build me X" without "for whom" or "why now", "make it faster" without a number to hit) — skills/interview-me/SKILL.md:3, 10, 20-23
- Explicit user interview invocations: "interview me", "grill me", "before we start, are we sure?", "stress-test my thinking" — skills/interview-me/SKILL.md:3, 24
- User answers, pushback, and reactions to incremental single questions and agent hypotheses — skills/interview-me/SKILL.md:53-78, 161-176
- User line-by-line corrections and refinements to the restated intent summary — skills/interview-me/SKILL.md:94-123
- Explicit confirmation ("yes") from a live, responsive human engineer — skills/interview-me/SKILL.md:36, 113-123

## Outputs — required
- Initial hypothesis in one sentence with quantified confidence rating (0–100%) and unresolved gap explanation if below ~70% — skills/interview-me/SKILL.md:40-52, 158-160
- Single focused questions with attached reasoned hypotheses (`Q:` / `GUESS:`) — skills/interview-me/SKILL.md:53-78, 161-175
- Root-intent probe targeting sophistication-signaling or conventional buzzwords (`"If you didn't have to justify this to anyone, what would you actually want?"`) — skills/interview-me/SKILL.md:88-92, 221
- Structured 6-field intent restatement: `Outcome`, `User`, `Why now`, `Success`, `Constraint`, and mandatory `Out of scope` — skills/interview-me/SKILL.md:94-112
- Confirmed statement of intent validated by an explicit human "yes" gate — skills/interview-me/SKILL.md:113-123, 136
- Optional persistent intent document saved to `docs/intent/[topic].md` upon human confirmation — skills/interview-me/SKILL.md:138
- Handoff context to downstream Define skills (`idea-refine`, `spec-driven-development`) framed around confirmed intent rather than the initial vague ask — skills/interview-me/SKILL.md:180-187, 225

## Invokes — required
- skill idea-refine — skills/interview-me/SKILL.md:14, 182, 225
- skill spec-driven-development — skills/interview-me/SKILL.md:14, 183, 225
- skill doubt-driven-development — skills/interview-me/SKILL.md:14, 185
- skill planning-and-task-breakdown — skills/interview-me/SKILL.md:184
- skill source-driven-development — skills/interview-me/SKILL.md:186

## Invoked by — required
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:59, 306
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:19, 146, 170
- doc README.md — README.md:57, 234, 353
- doc CLAUDE.md — CLAUDE.md:21
- doc docs/comparison.md — docs/comparison.md:92, 100
- doc docs/cursor-setup.md — docs/cursor-setup.md:155
- doc docs/commandcode-setup.md — docs/commandcode-setup.md:33
- config evals/cases/interview-me.json — evals/cases/interview-me.json:2
- config evals/cases/incremental-implementation.json — evals/cases/incremental-implementation.json:25
- script scripts/validate-skills.js — scripts/validate-skills.js:68, 77
- external-doc sources/addy-external/interview-me.md — sources/addy-external/interview-me.md:1, 5, 8, 10, 11
- inventory-entry docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md — docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md:36, 83
- inventory-entry docs/analysis/inventory/addy/evals-cases-interview-me-json.md — docs/analysis/inventory/addy/evals-cases-interview-me-json.md:31, 37
- inventory-entry docs/analysis/inventory/addy/docs-comparison-md.md — docs/analysis/inventory/addy/docs-comparison-md.md:43, 136
- inventory-entry docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md — docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md:48
- inventory-entry docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md — docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md:46
- inventory-entry docs/analysis/inventory/addy/evals-cases-incremental-implementation-json.md — docs/analysis/inventory/addy/evals-cases-incremental-implementation-json.md:37, 47
- inventory-entry docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md — docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md:39
- inventory-entry docs/analysis/inventory/addy/docs-cursor-setup-md.md — docs/analysis/inventory/addy/docs-cursor-setup-md.md:42, 91
- inventory-entry docs/analysis/inventory/addy/docs-commandcode-setup-md.md — docs/analysis/inventory/addy/docs-commandcode-setup-md.md:23, 32, 46
- inventory-entry docs/analysis/inventory/addy/readme-md.md — docs/analysis/inventory/addy/readme-md.md:43

## Concepts named — required, verbatim
- `interview-me` — skills/interview-me/SKILL.md:2 — defined here
- `one-question-at-a-time interview` — skills/interview-me/SKILL.md:3 — defined here
- `~95% confidence` — skills/interview-me/SKILL.md:3, 124 — defined here
- `grill me` — skills/interview-me/SKILL.md:3, 24 — defined here
- `stress-test my thinking` — skills/interview-me/SKILL.md:3, 24 — defined here
- `switching costs` — skills/interview-me/SKILL.md:12 — defined here
- `Define-phase` — skills/interview-me/SKILL.md:14 — used here
- `idea-refine` — skills/interview-me/SKILL.md:14, 182, 225 — used here
- `spec-driven-development` — skills/interview-me/SKILL.md:14, 183, 225 — used here
- `doubt-driven-development` — skills/interview-me/SKILL.md:14, 185 — used here
- `best guess attached` — skills/interview-me/SKILL.md:14, 53 — defined here
- `binding constraint` — skills/interview-me/SKILL.md:20, 105 — defined here
- `interview me` — skills/interview-me/SKILL.md:24 — defined here
- `are we sure?` — skills/interview-me/SKILL.md:24 — defined here
- `≥95% confidence` — skills/interview-me/SKILL.md:32 — defined here
- `stop condition` — skills/interview-me/SKILL.md:32, 124 — defined here
- `live, responsive user` — skills/interview-me/SKILL.md:36 — defined here
- `non-interactive contexts` — skills/interview-me/SKILL.md:36 — defined here
- `/loop` — skills/interview-me/SKILL.md:36 — used here
- `autonomous-loop` — skills/interview-me/SKILL.md:36 — used here
- `Step 1: Hypothesize, with a confidence number` — skills/interview-me/SKILL.md:40 — defined here
- `HYPOTHESIS` — skills/interview-me/SKILL.md:45, 159 — defined here
- `CONFIDENCE` — skills/interview-me/SKILL.md:46, 160 — defined here
- `confidence level` — skills/interview-me/SKILL.md:49 — defined here
- `confidence is below ~70%` — skills/interview-me/SKILL.md:51, 210, 219 — defined here
- `Step 2: Ask one question at a time, each with a guess attached` — skills/interview-me/SKILL.md:53 — defined here
- `Q:` — skills/interview-me/SKILL.md:58, 162, 170 — defined here
- `GUESS:` — skills/interview-me/SKILL.md:59, 163, 171 — defined here
- `Step 3: Listen for "want vs. should want"` — skills/interview-me/SKILL.md:79 — defined here
- `want vs. should want` — skills/interview-me/SKILL.md:79 — defined here
- `If you didn't have to justify this to anyone, what would you actually want?` — skills/interview-me/SKILL.md:90, 221 — defined here
- `Step 4: Restate intent in the user's own words` — skills/interview-me/SKILL.md:94 — defined here
- `Restate intent` — skills/interview-me/SKILL.md:94, 96, 136, 222 — defined here
- `Outcome` — skills/interview-me/SKILL.md:101, 222 — defined here
- `User` — skills/interview-me/SKILL.md:102, 222 — defined here
- `Why now` — skills/interview-me/SKILL.md:103, 222 — defined here
- `Success` — skills/interview-me/SKILL.md:104, 222 — defined here
- `Constraint` — skills/interview-me/SKILL.md:105, 222 — defined here
- `Out of scope` — skills/interview-me/SKILL.md:106, 111, 212, 222 — defined here
- `Yes / no / refine?` — skills/interview-me/SKILL.md:108 — defined here
- `Step 5: Confirm — explicit yes, not "whatever you think"` — skills/interview-me/SKILL.md:113 — defined here
- `explicit yes` — skills/interview-me/SKILL.md:113, 115, 122, 136, 223 — defined here
- `The 95% Confidence Stop` — skills/interview-me/SKILL.md:124 — defined here
- `Can I predict the user's reaction to the next three questions I would ask?` — skills/interview-me/SKILL.md:128, 198, 224 — defined here
- `step back` — skills/interview-me/SKILL.md:132, 209 — defined here
- `confirmed statement of intent` — skills/interview-me/SKILL.md:136 — defined here
- `docs/intent/[topic].md` — skills/interview-me/SKILL.md:138 — defined here
- `planning-and-task-breakdown` — skills/interview-me/SKILL.md:184 — used here
- `source-driven-development` — skills/interview-me/SKILL.md:186 — used here
- `SDD` — skills/interview-me/SKILL.md:186 — used here
- `Common Rationalizations` — skills/interview-me/SKILL.md:188 — defined here
- `Red Flags` — skills/interview-me/SKILL.md:201 — defined here
- `Verification` — skills/interview-me/SKILL.md:214 — defined here

## Structure
- `# Interview Me` — skills/interview-me/SKILL.md:6
- `## Overview` — skills/interview-me/SKILL.md:8
- `## When to Use` — skills/interview-me/SKILL.md:16
- `## Loading Constraints` — skills/interview-me/SKILL.md:34
- `## The Process` — skills/interview-me/SKILL.md:38
  - `### Step 1: Hypothesize, with a confidence number` — skills/interview-me/SKILL.md:40
  - `### Step 2: Ask one question at a time, each with a guess attached` — skills/interview-me/SKILL.md:53
  - `### Step 3: Listen for "want vs. should want"` — skills/interview-me/SKILL.md:79
  - `### Step 4: Restate intent in the user's own words` — skills/interview-me/SKILL.md:94
  - `### Step 5: Confirm — explicit yes, not "whatever you think"` — skills/interview-me/SKILL.md:113
  - `### The 95% Confidence Stop` — skills/interview-me/SKILL.md:124
- `## Output` — skills/interview-me/SKILL.md:134
- `## Example` — skills/interview-me/SKILL.md:140
- `## Interaction with Other Skills` — skills/interview-me/SKILL.md:180
- `## Common Rationalizations` — skills/interview-me/SKILL.md:188
- `## Red Flags` — skills/interview-me/SKILL.md:201
- `## Verification` — skills/interview-me/SKILL.md:214

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/interview-me/SKILL.md:138 · References saving intent to `docs/intent/[topic].md`, but `docs/intent/` directory does not exist in `sources/addy/` and no template exists in the repository.
- doc-drift · docs/comparison.md:92 vs skills/interview-me/SKILL.md · `docs/comparison.md` claims that `interview-me` is "gaining an opt-in collaborative mode", but no collaborative mode flag, option, or mention exists in `SKILL.md`.
- doc-drift · sources/addy-external/interview-me.md:12 vs skills/interview-me/SKILL.md · The external website presentation for `interview-me` displays `Command: /spec` in the sidebar panel for the Define phase, implying `/spec` invokes or relates directly to `interview-me`, whereas `interview-me` has no slash command (`/spec` belongs strictly to `spec-driven-development`).
- doc-drift · scripts/validate-artifact-paths.js:35-40 vs skills/interview-me/SKILL.md:138 · The artifact path allowlist in `validate-artifact-paths.js` recognizes only `SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`, omitting the `docs/intent/[topic].md` artifact specified by `interview-me`.
- doc-drift · skills/interview-me/SKILL.md:36 vs repo command infrastructure · Mentions non-interactive execution contexts `/loop` and `autonomous-loop`, but neither command nor configuration exists in `sources/addy` (they are external agent execution concepts not defined in the repository).

## Observations
- Pre-decision intent extraction: `interview-me` occupies a unique chronological position in Addy's Define phase, situated strictly prior to `idea-refine` (ideation), `spec-driven-development` (specification), and `doubt-driven-development` (post-decision plan review).
- Asymmetric friction mitigation: Formulating questions with an attached hypothesis/guess (`GUESS:`) dramatically reduces cognitive load on the human engineer because reacting to a concrete (even wrong) hypothesis is significantly faster and easier than generating answers from a blank slate, while simultaneously exposing agent bias.
- Anti-sycophancy and convention unmasking: Specifically targets polite user delegation ("whatever you think is best") and corporate buzzwords ("scalable", "clean architecture") using the diagnostic probe: *"If you didn't have to justify this to anyone, what would you actually want?"*
- Checkable stop condition: Replaces subjective intuition with an operationalized criterion: *"Can I predict the user's reaction to the next three questions I would ask?"* combined with a calibrated floor requiring explanation when confidence is below 70%.
- Strict interactivity requirement: Explicitly forbids invocation in autonomous loops or CI, guarding against agent hallucinations in headless environments.

## Context cost
File alone: 14,359 bytes (~3,590 tokens). Transitive dependencies: 0 additional files loaded at runtime (isolated interactive prompt). Total immediate invocation footprint = 14,359 bytes (~3,590 tokens). Downstream handoff ecosystem (`idea-refine` 8,111 B, `spec-driven-development` 12,163 B, `doubt-driven-development` 16,499 B, `planning-and-task-breakdown` 10,564 B, `source-driven-development` 9,949 B) totals 71,645 bytes (~17,911 tokens).
