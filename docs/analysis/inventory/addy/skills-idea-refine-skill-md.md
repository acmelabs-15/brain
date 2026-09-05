---
package: addy
path: skills/idea-refine/SKILL.md
type: skill
bytes: 8111
unit: inv-addy-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/idea-refine/SKILL.md, sha256: 79e773058963adc7646b0115b4f8a4afc974c5ff95843e4ef1cafff3cb51899e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/SKILL.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking." — skills/idea-refine/SKILL.md:8

## Design intent — required
Conducts structured ideation dialogues to transform vague, early-stage ideas into concrete, validated concept proposals. It pairs divergent expansion (sharpening questions, thinking lenses, codebase scanning) with convergent filtering (clustering, value/feasibility/differentiation stress-testing, assumption surfacing) to produce a concise markdown one-pager anchored by an explicit "Not Doing" list and clear validation checkpoints.

## Phase — required
addy:Define

## Inputs — required
- User invocation arguments `$ARGUMENTS` containing an initial raw idea or concept (skills/idea-refine/SKILL.md:54)
- User responses to sharpening questions gathered via `AskUserQuestion` (skills/idea-refine/SKILL.md:69)
- Existing codebase context scanned using `Glob`, `Grep`, and `Read` (skills/idea-refine/SKILL.md:82)
- Reference files: `frameworks.md` (skills/idea-refine/SKILL.md:84), `refinement-criteria.md` (skills/idea-refine/SKILL.md:97), and `examples.md` (skills/idea-refine/SKILL.md:156)

## Outputs — required
- Markdown one-pager saved to `docs/ideas/[idea-name].md` upon user confirmation (skills/idea-refine/SKILL.md:32, 113-136, 140)
- Directory `docs/ideas/` initialized via `skills/idea-refine/scripts/idea-refine.sh` (skills/idea-refine/SKILL.md:22)

## Invokes — required
- script skills/idea-refine/scripts/idea-refine.sh — skills/idea-refine/SKILL.md:22
- reference frameworks.md — skills/idea-refine/SKILL.md:84
- reference refinement-criteria.md — skills/idea-refine/SKILL.md:97
- reference examples.md — skills/idea-refine/SKILL.md:156

## Invoked by — required
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:20
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:182

## Concepts named — required, verbatim
- `Understand & Expand` — skills/idea-refine/SKILL.md:12 — defined here
- `Evaluate & Converge` — skills/idea-refine/SKILL.md:13 — defined here
- `Sharpen & Ship` — skills/idea-refine/SKILL.md:14 — defined here
- `How Might We` — skills/idea-refine/SKILL.md:60 — used here
- `Inversion` — skills/idea-refine/SKILL.md:72 — defined here
- `Constraint removal` — skills/idea-refine/SKILL.md:73 — defined here
- `Audience shift` — skills/idea-refine/SKILL.md:74 — defined here
- `Combination` — skills/idea-refine/SKILL.md:75 — defined here
- `Simplification` — skills/idea-refine/SKILL.md:76 — defined here
- `10x version` — skills/idea-refine/SKILL.md:77 — defined here
- `Expert lens` — skills/idea-refine/SKILL.md:78 — defined here
- `User value` — skills/idea-refine/SKILL.md:93 — used here
- `Feasibility` — skills/idea-refine/SKILL.md:94 — used here
- `Differentiation` — skills/idea-refine/SKILL.md:95 — used here
- `Problem Statement` — skills/idea-refine/SKILL.md:115 — defined here
- `Recommended Direction` — skills/idea-refine/SKILL.md:118 — defined here
- `Key Assumptions to Validate` — skills/idea-refine/SKILL.md:121 — defined here
- `MVP Scope` — skills/idea-refine/SKILL.md:126 — defined here
- `Not Doing` — skills/idea-refine/SKILL.md:129 — defined here
- `Open Questions` — skills/idea-refine/SKILL.md:134 — defined here

## Structure
- `# Idea Refine`
- `## How It Works`
- `## Usage`
- `## Output`
- `## Detailed Instructions`
- `### Philosophy`
- `### Process`
- `#### Phase 1: Understand & Expand (Divergent)`
- `#### Phase 2: Evaluate & Converge`
- `#### Phase 3: Sharpen & Ship`
- `### Anti-patterns to Avoid`
- `### Tone`
- `## Red Flags`
- `## Verification`

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/idea-refine/scripts/idea-refine.sh`, Bash, 16 lines
- documented invocation: `bash skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bash skills/idea-refine/scripts/idea-refine.sh` in `sources/addy`, stdout `{"status": "ready", "directory": "docs/ideas"}`, actual exit code: 0
- documented exit codes vs. actual exit paths in code: none documented; code contains no explicit `exit` calls, using `set -e` and implicit 0 exit on normal completion.
- for validators/gates: not a validator or gate (filesystem setup utility).
- does the output match what the documentation claims? Yes, initializes `docs/ideas` directory and returns JSON readiness payload.

## Defects — required
- `doc-drift` · `scripts/lib/skill-lint.js:59` · Uses legacy structure predating `docs/skill-anatomy.md` (`How It Works`, `Usage`, `Output`, `Anti-patterns to Avoid` instead of standard anatomy headings `When to Use`, `Workflow`, `Red Flags`, `Verification`), explicitly tracked as an exception in `scripts/lib/skill-lint.js:59`.

## Observations
Incorporates an explicit philosophical doctrine in lines 43-51 ("Simplicity is the ultimate sophistication", "Say no to 1,000 things") and mandates an adversarial posture that refuses to act as a "yes-machine", pushing back against feature bloat and premature complexity.

## Context cost
8111 bytes (~2,028 tokens). Full skill invocation with its three reference files (`frameworks.md`: 5404 bytes, `refinement-criteria.md`: 5738 bytes, `examples.md`: 20284 bytes) and setup script (342 bytes) totals 39879 bytes (~9,970 tokens).
