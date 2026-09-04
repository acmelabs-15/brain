---
package: addy
path: skills/idea-refine/SKILL.md
type: skill
bytes: 8111
unit: inv-addy-38
memo_inputs:
  - {path: skills/idea-refine/SKILL.md, sha256: 79e773058963adc7646b0115b4f8a4afc974c5ff95843e4ef1cafff3cb51899e}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/SKILL.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Use when an idea is still vague, when you need to stress-test assumptions before committing to a plan, or when you want to expand options before converging on one. Triggers on \"ideate\", \"refine this idea\", or \"stress-test my plan\"." — skills/idea-refine/SKILL.md:3

## Design intent — required
Provides a structured ideation workflow to refine early-stage or ambiguous product concepts into actionable definitions before planning or implementation begin. It guides developers through a 3-phase dialogue: divergent exploration using creative lenses (inversion, constraint removal, 10x version, etc.), convergent stress-testing against value/feasibility/differentiation rubrics with an explicit assumption audit, and synthesis into a markdown one-pager featuring a mandatory "Not Doing" list. Without it, development efforts frequently commit prematurely to flawed, unvalidated, or overly broad solutions without exploring lateral alternatives or confronting fatal assumptions.

## Phase — required
addy:Define

## Inputs — required
- Raw idea concept or trigger phrase provided via user prompt (`skills/idea-refine/SKILL.md:3, 25-28, 54`)
- User answers to diagnostic sharpening questions gathered via `AskUserQuestion` (`skills/idea-refine/SKILL.md:62-69`)
- Existing codebase context scanned via `Glob`, `Grep`, and `Read` (`skills/idea-refine/SKILL.md:82`)
- Reference frameworks from `frameworks.md` (`skills/idea-refine/SKILL.md:84`)
- Reference evaluation criteria from `refinement-criteria.md` (`skills/idea-refine/SKILL.md:97`)
- Reference session examples from `examples.md` (`skills/idea-refine/SKILL.md:156`)

## Outputs — required
- Markdown one-pager document saved to `docs/ideas/[idea-name].md` (after user confirmation) — skills/idea-refine/SKILL.md:32, 140
- Structured problem statement framed as "How Might We" — skills/idea-refine/SKILL.md:60, 116
- Validated directions and explicit assumptions list — skills/idea-refine/SKILL.md:90-103, 121-125
- MVP scope definition and explicit trade-off "Not Doing" list — skills/idea-refine/SKILL.md:126-133

## Invokes — required
- reference frameworks.md — skills/idea-refine/SKILL.md:84
- reference refinement-criteria.md — skills/idea-refine/SKILL.md:97
- reference examples.md — skills/idea-refine/SKILL.md:156
- script skills/idea-refine/scripts/idea-refine.sh — skills/idea-refine/SKILL.md:22

## Invoked by — required
- doc README.md — README.md:235
- doc CLAUDE.md — CLAUDE.md:21
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:14
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:20
- config evals/cases/idea-refine.json — evals/cases/idea-refine.json:2
- doc external/idea-refine.md — external/idea-refine.md:5

## Concepts named — required, verbatim
- `idea-refine` — skills/idea-refine/SKILL.md:2 — defined here
- `Divergent and convergent thinking` — skills/idea-refine/SKILL.md:3, 8 — defined here
- `Understand & Expand (Divergent)` — skills/idea-refine/SKILL.md:12, 56 — defined here
- `Evaluate & Converge` — skills/idea-refine/SKILL.md:13, 86 — defined here
- `Sharpen & Ship` — skills/idea-refine/SKILL.md:14, 108 — defined here
- `markdown one-pager` — skills/idea-refine/SKILL.md:14, 32, 110 — defined here
- `docs/ideas/[idea-name].md` — skills/idea-refine/SKILL.md:32, 140 — defined here
- `Problem Statement` — skills/idea-refine/SKILL.md:33, 115 — defined here
- `Recommended Direction` — skills/idea-refine/SKILL.md:34, 118 — defined here
- `Key Assumptions` — skills/idea-refine/SKILL.md:35 — defined here
- `Key Assumptions to Validate` — skills/idea-refine/SKILL.md:121 — defined here
- `MVP Scope` — skills/idea-refine/SKILL.md:36, 126 — defined here
- `Not Doing list` — skills/idea-refine/SKILL.md:37 — defined here
- `Not Doing (and Why)` — skills/idea-refine/SKILL.md:129 — defined here
- `"Not Doing" list` — skills/idea-refine/SKILL.md:138 — defined here
- `Open Questions` — skills/idea-refine/SKILL.md:134 — defined here
- `How Might We` — skills/idea-refine/SKILL.md:60, 116, 172 — defined here
- `Sharpening questions` — skills/idea-refine/SKILL.md:62 — defined here
- `AskUserQuestion` — skills/idea-refine/SKILL.md:69 — used here
- `Inversion` — skills/idea-refine/SKILL.md:72 — defined here
- `Constraint removal` — skills/idea-refine/SKILL.md:73 — defined here
- `Audience shift` — skills/idea-refine/SKILL.md:74 — defined here
- `Combination` — skills/idea-refine/SKILL.md:75 — defined here
- `Simplification` — skills/idea-refine/SKILL.md:76 — defined here
- `10x version` — skills/idea-refine/SKILL.md:77 — defined here
- `Expert lens` — skills/idea-refine/SKILL.md:78 — defined here
- `Glob` — skills/idea-refine/SKILL.md:82 — used here
- `Grep` — skills/idea-refine/SKILL.md:82 — used here
- `Read` — skills/idea-refine/SKILL.md:82 — used here
- `Cluster` — skills/idea-refine/SKILL.md:90 — defined here
- `Stress-test` — skills/idea-refine/SKILL.md:92 — defined here
- `User value` — skills/idea-refine/SKILL.md:93 — defined here
- `Feasibility` — skills/idea-refine/SKILL.md:94 — defined here
- `Differentiation` — skills/idea-refine/SKILL.md:95 — defined here
- `Hidden assumptions` — skills/idea-refine/SKILL.md:99, 175 — defined here
- `Anti-patterns` — skills/idea-refine/SKILL.md:142 — defined here
- `Red Flags` — skills/idea-refine/SKILL.md:158 — defined here
- `Verification` — skills/idea-refine/SKILL.md:168 — defined here

## Structure
- `# Idea Refine` (line 6)
- `## How It Works` (lines 10-15)
- `## Usage` (lines 16-29)
- `## Output` (lines 30-38)
- `## Detailed Instructions` (lines 39-156)
  - `### Philosophy` (lines 43-51)
  - `### Process` (lines 52-141)
    - `#### Phase 1: Understand & Expand (Divergent)` (lines 56-85)
    - `#### Phase 2: Evaluate & Converge` (lines 86-107)
    - `#### Phase 3: Sharpen & Ship` (lines 108-141)
  - `### Anti-patterns to Avoid` (lines 142-151)
  - `### Tone` (lines 152-156)
- `## Red Flags` (lines 158-167)
- `## Verification` (lines 168-179)

## Scripts — required if type is script or the skill ships scripts
- path: `skills/idea-refine/scripts/idea-refine.sh`, language: bash, lines: 16
- documented invocation: `bash skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- executed: yes
- actual command run: `bash sources/addy/skills/idea-refine/scripts/idea-refine.sh`
- abridged stdout: `{"status": "ready", "directory": "docs/ideas"}`
- actual exit code: 0
- documented exit codes: implicit exit 0 upon completion under `set -e`
- actual exit paths in code: implicit exit 0 on line 16; exits non-zero only if `mkdir -p` fails on line 9 under `set -e`
- for validators/gates: not a validation gate; idempotent directory bootstrapper that always exits 0 under standard filesystem permissions
- does the output match what the documentation claims? yes; creates the directory if missing and outputs status JSON

## Defects — required
- doc-drift · skills/idea-refine/SKILL.md:10, 16, 43, 142, 153: skill body uses non-standard anatomy headings (How It Works, Usage, Philosophy, Anti-patterns to Avoid, Tone) rather than standard skill anatomy (Overview, When to Use, Process, Common Rationalizations, Red Flags, Verification), acknowledged in scripts/lib/skill-lint.js:59 as legacy structure.
- doc-drift · skills/idea-refine/SKILL.md:69: invokes Claude Code tool AskUserQuestion which is not part of standard toolsets across all agent environments.

## Observations
- In `scripts/lib/skill-lint.js:59`, this skill is explicitly exempted from standard anatomy checks: `'idea-refine': 'Legacy structure predating skill-anatomy.md — uses How-It-Works/Usage/Anti-patterns instead of standard headings. Tracked for conformance in https://github.com/addyosmani/agent-skills/issues'`.
- Strong anti-sycophancy stance: instructs agent to "Be honest, not supportive. If an idea is weak, say so with kindness. A good ideation partner is not a yes-machine" (`skills/idea-refine/SKILL.md:106`).

## Context cost
8,111 bytes (~2,028 tokens). Supporting files in skill directory (`examples.md`, `frameworks.md`, `refinement-criteria.md`, `scripts/idea-refine.sh`) total 31,768 bytes, bringing full skill package to 39,879 bytes (~9,970 tokens).
