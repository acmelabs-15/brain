# Detailed Exploration Report: `sources/addy/skills/interview-me/SKILL.md`

**Work Unit**: inv-addy-18  
**Investigator**: Explorer 1 (`teamwork_preview_explorer`)  
**Target File**: `sources/addy/skills/interview-me/SKILL.md` (14,359 bytes, 226 lines)  
**Parent Orchestrator**: `d33b522a-5b61-4615-8dfd-7e95f45ad187`  

---

## Part 1: METHOD.md §4 Checklist Analysis

### 1. Existence
Every path referenced in `sources/addy/skills/interview-me/SKILL.md` was checked on disk:
- `idea-refine` (`skills/interview-me/SKILL.md:14, 182, 225`): **EXISTS** at `sources/addy/skills/idea-refine/SKILL.md`.
- `spec-driven-development` (`skills/interview-me/SKILL.md:14, 183, 225`): **EXISTS** at `sources/addy/skills/spec-driven-development/SKILL.md`.
- `doubt-driven-development` (`skills/interview-me/SKILL.md:14, 185`): **EXISTS** at `sources/addy/skills/doubt-driven-development/SKILL.md`.
- `planning-and-task-breakdown` (`skills/interview-me/SKILL.md:184`): **EXISTS** at `sources/addy/skills/planning-and-task-breakdown/SKILL.md`.
- `source-driven-development` (`skills/interview-me/SKILL.md:186`): **EXISTS** at `sources/addy/skills/source-driven-development/SKILL.md`.
- `/loop` (`skills/interview-me/SKILL.md:36`): **DOES NOT EXIST** as a command file or script in `sources/addy` (it represents an external non-interactive execution paradigm).
- `autonomous-loop` (`skills/interview-me/SKILL.md:36`): **DOES NOT EXIST** as a file or script in `sources/addy` (external autonomous execution paradigm).
- `docs/intent/[topic].md` (`skills/interview-me/SKILL.md:138`): **DOES NOT EXIST** in `sources/addy/`. No `docs/intent/` directory exists in the repository, nor is any template provided. (Defect: `missing-path`).

### 2. Execution
- `sources/addy/skills/interview-me/` contains no scripts or code files (pure markdown skill file).
- The skill is validated by `sources/addy/scripts/validate-skills.js`. Command executed:
  `bun sources/addy/scripts/validate-skills.js`
  - Output: `✓  interview-me` (25 skills checked — 0 error(s), 0 warning(s) — PASSED)
  - Exit code: `0`
- Evals suite: `sources/addy/evals/cases/interview-me.json` defines a dialogue eval (`id: 1`, `kind: "dialogue"`).
  - Validated by test runner: `bun test ./sources/addy/scripts/run-evals-test.js`
  - Exit code: `0` (15 passed, 0 failed, confirms fixtureless dialogue evals are supported).

### 3. Documentation Drift
- **Collaborative mode drift**: `sources/addy/docs/comparison.md:92` asserts that "agent-skills' `interview-me` is close in spirit and gaining an opt-in collaborative mode." However, `sources/addy/skills/interview-me/SKILL.md` contains no mention, parameter, or implementation of any "collaborative mode" (Defect: `doc-drift`).
- **External presentation command drift**: In `sources/addy-external/interview-me.md:12` (the published website snapshot from `skills.addy.ie`), the sidebar for the Define phase displays `Command: /spec`, which visually implies that `/spec` invokes or maps to `interview-me`. In reality, `interview-me` has no slash command in either `.claude/commands/` or `commands/`, and `/spec` exclusively invokes `spec-driven-development` (Defect: `doc-drift`).
- **Artifact path validation omission**: `sources/addy/scripts/validate-artifact-paths.js:35-40` specifies an `ARTIFACT_ALLOWLIST` containing only `SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`. The optional intent persistence path `docs/intent/[topic].md` defined in `skills/interview-me/SKILL.md:138` is omitted from the validator (Defect: `doc-drift`).
- **Trigger naming consistency**: `README.md:234` notes triggers: `"The ask is underspecified, or the user invokes 'interview me' / 'grill me'"`. This aligns with `SKILL.md:3, 24` and `evals/cases/interview-me.json:10`, confirming that "grill me" is an intentional trigger alias borrowed from Matt Pocock's nomenclature.

### 4. Internal Consistency
The file demonstrates exceptional internal consistency:
- Sequential progression: Steps 1 through 5 and the stop condition follow a strict linear progression (Hypothesize with confidence → Ask 1 question with guess → Listen for want vs. should want → Restate intent with out of scope → Confirm with explicit yes → 95% Confidence Stop).
- Calibrated thresholds: Confidence tracking begins in Step 1 (0–100%). Any score below ~70% mandates an attached unresolved reason (`skills/interview-me/SKILL.md:51`), which is reinforced in Red Flags (`:210`) and Verification (`:219`). Stopping requires predicting reactions to the next 3 questions (`:128, 198, 224`).
- Guardrails: 8 Common Rationalizations (`:188-200`) and 10 Red Flags (`:201-213`) directly cross-reference every operational rule in the process steps.

### 5. Cross-File Consistency
- **Upstream / intake alignment**: In `sources/addy/skills/using-agent-skills/SKILL.md:19, 146, 170`, `interview-me` is positioned as the very first entry point in the Define phase ("Don't know what you want yet? → interview-me", "Surface what the user actually wants before any plan, spec, or code exists").
- **Constraint discipline borrowing**: In `sources/addy/skills/constraint-driven-development/SKILL.md:59, 306`, the intake borrows "the one-question-at-a-time discipline from `interview-me`".
- **Downstream handoff asymmetry**: `interview-me/SKILL.md:182-185` explicitly defines downstream handoffs to `idea-refine`, `spec-driven-development`, and `planning-and-task-breakdown`. However, neither `idea-refine/SKILL.md` nor `spec-driven-development/SKILL.md` mentions `interview-me` in their intake sections.

### 6. Composition
- **Invokes**:
  - `idea-refine` (`skills/interview-me/SKILL.md:14, 182, 225`)
  - `spec-driven-development` (`skills/interview-me/SKILL.md:14, 183, 225`)
  - `doubt-driven-development` (`skills/interview-me/SKILL.md:14, 185`)
  - `planning-and-task-breakdown` (`skills/interview-me/SKILL.md:184`)
  - `source-driven-development` (`skills/interview-me/SKILL.md:186`)
- **Invoked By**:
  - `skills/constraint-driven-development/SKILL.md:59, 306`
  - `skills/using-agent-skills/SKILL.md:19, 146, 170`
  - `README.md:57, 234, 353`
  - `CLAUDE.md:21`
  - `docs/comparison.md:92, 100`
  - `docs/cursor-setup.md:155`
  - `docs/commandcode-setup.md:33`
  - `evals/cases/interview-me.json:2`
  - `evals/cases/incremental-implementation.json:25`
  - `scripts/validate-skills.js:68, 77`
  - `sources/addy-external/interview-me.md:1, 5, 8, 10, 11`
- **Consumes**: Underspecified user prompts, explicit interview triggers ("grill me", "interview me"), user answers and reactions to sequential questions, user corrections.
- **Produces**: Structured hypothesis and confidence ratings, single questions with guesses attached, structured 6-element intent restatement, confirmed intent validation gate ("yes"), optional persistent file at `docs/intent/[topic].md`.

### 7. Context Cost
- Target file `skills/interview-me/SKILL.md`: 14,359 bytes (~3,590 tokens).
- Transitive references (standalone runtime without auto-loading dependencies): 14,359 bytes.
- Downstream handoff ecosystem:
  - `idea-refine/SKILL.md`: 8,111 bytes (~2,028 tokens)
  - `spec-driven-development/SKILL.md`: 12,163 bytes (~3,041 tokens)
  - `doubt-driven-development/SKILL.md`: 16,499 bytes (~4,125 tokens)
  - `planning-and-task-breakdown/SKILL.md`: 10,564 bytes (~2,641 tokens)
  - `source-driven-development/SKILL.md`: 9,949 bytes (~2,487 tokens)

### 8. Design Intent
Extracts the user's authentic underlying objective when requests are underspecified or couched in conventional software jargon, operating strictly prior to any plan, specification, or code generation—the earliest and cheapest moment in the lifecycle. By enforcing single-question conversational turns paired with explicit hypotheses, quantifying confidence with required justifications below 70%, probing root intent beyond best-practice buzzwords ("If you didn't have to justify this to anyone, what would you actually want?"), and requiring an explicit human confirmation of a structured intent summary including what is out of scope, it prevents agents from making silent assumptions and building elaborate solutions to the wrong problems. Without it, agents jump prematurely into technical solutioning, locking users into mismatched architectures that incur severe rework and switching costs.

---

## Part 2: Complete Draft of Inventory Entry

Below is the complete, publication-ready draft for `docs/analysis/inventory/addy/skills-interview-me-skill-md.md` adhering strictly to `docs/plan/templates/inventory-entry.md`.

```markdown
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
- Underspecified user ask or vision (e.g., "build me X" without "for whom" or "why now", "make it faster" without a number to hit) (`skills/interview-me/SKILL.md:3, 10, 20-23`)
- Explicit user interview invocations: "interview me", "grill me", "before we start, are we sure?", "stress-test my thinking" (`skills/interview-me/SKILL.md:3, 24`)
- User answers, pushback, and reactions to incremental single questions and agent hypotheses (`skills/interview-me/SKILL.md:53-78, 161-176`)
- User line-by-line corrections and refinements to the restated intent summary (`skills/interview-me/SKILL.md:94-123`)
- Explicit confirmation ("yes") from a live, responsive human engineer (`skills/interview-me/SKILL.md:36, 113-123`)

## Outputs — required
- Initial hypothesis in one sentence with quantified confidence rating (0–100%) and unresolved gap explanation if below ~70% (`skills/interview-me/SKILL.md:40-52, 158-160`)
- Single focused questions with attached reasoned hypotheses (`Q:` / `GUESS:`) (`skills/interview-me/SKILL.md:53-78, 161-175`)
- Root-intent probe targeting sophistication-signaling or conventional buzzwords (`"If you didn't have to justify this to anyone, what would you actually want?"`) (`skills/interview-me/SKILL.md:88-92, 221`)
- Structured 6-field intent restatement: `Outcome`, `User`, `Why now`, `Success`, `Constraint`, and mandatory `Out of scope` (`skills/interview-me/SKILL.md:94-112`)
- Confirmed statement of intent validated by an explicit human "yes" gate (`skills/interview-me/SKILL.md:113-123, 136`)
- Optional persistent intent document saved to `docs/intent/[topic].md` upon human confirmation (`skills/interview-me/SKILL.md:138`)
- Handoff context to downstream Define skills (`idea-refine`, `spec-driven-development`) framed around confirmed intent rather than the initial vague ask (`skills/interview-me/SKILL.md:180-187, 225`)

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
- `step back` — skills/interview-me/SKILL.md:133, 209 — defined here
- `confirmed statement of intent` — skills/interview-me/SKILL.md:136 — defined here
- `docs/intent/[topic].md` — skills/interview-me/SKILL.md:138 — defined here
- `planning-and-task-breakdown` — skills/interview-me/SKILL.md:184 — used here
- `source-driven-development` — skills/interview-me/SKILL.md:186 — used here
- `SDD` — skills/interview-me/SKILL.md:186 — used here
- `Common Rationalizations` — skills/interview-me/SKILL.md:188 — defined here
- `Red Flags` — skills/interview-me/SKILL.md:201 — defined here
- `Verification` — skills/interview-me/SKILL.md:214 — defined here

## Structure
- Interview Me (line 6)
- Overview (line 8)
- When to Use (line 16)
- Loading Constraints (line 34)
- The Process (line 38)
  - Step 1: Hypothesize, with a confidence number (line 40)
  - Step 2: Ask one question at a time, each with a guess attached (line 53)
  - Step 3: Listen for "want vs. should want" (line 79)
  - Step 4: Restate intent in the user's own words (line 94)
  - Step 5: Confirm — explicit yes, not "whatever you think" (line 113)
  - The 95% Confidence Stop (line 124)
- Output (line 134)
- Example (line 140)
- Interaction with Other Skills (line 180)
- Common Rationalizations (line 188)
- Red Flags (line 201)
- Verification (line 214)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — skills/interview-me/SKILL.md:138 — References saving intent to `docs/intent/[topic].md`, but `docs/intent/` directory does not exist in `sources/addy/` and no template exists in the repository.
- doc-drift — docs/comparison.md:92 vs skills/interview-me/SKILL.md — `docs/comparison.md` claims that `interview-me` is "gaining an opt-in collaborative mode", but no collaborative mode flag, option, or mention exists in `SKILL.md`.
- doc-drift — sources/addy-external/interview-me.md:12 vs skills/interview-me/SKILL.md — The external website presentation for `interview-me` displays `Command: /spec` in the sidebar panel for the Define phase, implying `/spec` invokes or relates directly to `interview-me`, whereas `interview-me` has no slash command (`/spec` belongs strictly to `spec-driven-development`).
- doc-drift — scripts/validate-artifact-paths.js:35-40 vs skills/interview-me/SKILL.md:138 — The artifact path allowlist in `validate-artifact-paths.js` recognizes only `SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`, omitting the `docs/intent/[topic].md` artifact specified by `interview-me`.
- doc-drift — skills/interview-me/SKILL.md:36 vs repo command infrastructure — Mentions non-interactive execution contexts `/loop` and `autonomous-loop`, but neither command nor configuration exists in `sources/addy` (they are external agent execution concepts not defined in the repository).

## Observations
- Pre-decision intent extraction: `interview-me` occupies a unique chronological position in Addy's Define phase, situated strictly prior to `idea-refine` (ideation), `spec-driven-development` (specification), and `doubt-driven-development` (post-decision plan review).
- Asymmetric friction mitigation: Formulating questions with an attached hypothesis/guess (`GUESS:`) dramatically reduces cognitive load on the human engineer because reacting to a concrete (even wrong) hypothesis is significantly faster and easier than generating answers from a blank slate, while simultaneously exposing agent bias.
- Anti-sycophancy and convention unmasking: Specifically targets polite user delegation ("whatever you think is best") and corporate buzzwords ("scalable", "clean architecture") using the diagnostic probe: *"If you didn't have to justify this to anyone, what would you actually want?"*
- Checkable stop condition: Replaces subjective intuition with an operationalized criterion: *"Can I predict the user's reaction to the next three questions I would ask?"* combined with a calibrated floor requiring explanation when confidence is below 70%.
- Strict interactivity requirement: Explicitly forbids invocation in autonomous loops or CI, guarding against agent hallucinations in headless environments.

## Context cost
File alone: 14,359 bytes (~3,590 tokens). Transitive dependencies: 0 additional files loaded at runtime (isolated interactive prompt). Total immediate invocation footprint = 14,359 bytes (~3,590 tokens).
```
