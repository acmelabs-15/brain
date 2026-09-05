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
verified: 2026-09-05 quote-check+coverage
---

# skills/idea-refine/SKILL.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking." — skills/idea-refine/SKILL.md:8

## Design intent — required
Acts as a critical, conversational thinking partner that takes rough, unformed concepts and systematically shapes them into validated, minimal proposals. It moves through three distinct phases: divergent exploration (crisp HMW framing, 3-5 sharpening questions, 5-8 variation lenses, codebase grounding), convergent evaluation (clustering, value/feasibility/differentiation stress-testing, surfacing assumptions), and concrete artifact production (markdown one-pager with mandatory "Not Doing" list).

## Phase — required
addy:Define

## Inputs — required
- User idea prompt (`$ARGUMENTS` — skills/idea-refine/SKILL.md:54)
- User responses to sharpening questions gathered via `AskUserQuestion` (skills/idea-refine/SKILL.md:62, 69)
- Codebase context scanned via tools `Glob`, `Grep`, `Read` (skills/idea-refine/SKILL.md:82)
- User direction preferences and feedback (skills/idea-refine/SKILL.md:88)
- User confirmation before saving file (skills/idea-refine/SKILL.md:140, 178)

## Outputs — required
- Directory created at `docs/ideas/` via setup script (skills/idea-refine/SKILL.md:22)
- Markdown one-pager saved to `docs/ideas/[idea-name].md` (skills/idea-refine/SKILL.md:32, 140)

## Invokes — required
- script skills/idea-refine/scripts/idea-refine.sh — skills/idea-refine/SKILL.md:22
- file frameworks.md — skills/idea-refine/SKILL.md:84
- file refinement-criteria.md — skills/idea-refine/SKILL.md:97
- file examples.md — skills/idea-refine/SKILL.md:156

## Invoked by — required
- skill interview-me — skills/interview-me/SKILL.md:14
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:20
- doc README.md — README.md:235
- doc CLAUDE.md — CLAUDE.md:21

## Concepts named — required, verbatim
`Understand & Expand` — skills/idea-refine/SKILL.md:12, 56 — defined here
`Divergent` — skills/idea-refine/SKILL.md:12, 56 — defined here
`Evaluate & Converge` — skills/idea-refine/SKILL.md:13, 86 — defined here
`Sharpen & Ship` — skills/idea-refine/SKILL.md:14, 108 — defined here
`one-pager` — skills/idea-refine/SKILL.md:14, 32, 110, 177 — defined here
`How Might We` — skills/idea-refine/SKILL.md:60, 116, 172 — defined here
`AskUserQuestion` — skills/idea-refine/SKILL.md:69 — used here
`Inversion` — skills/idea-refine/SKILL.md:72 — defined here
`Constraint removal` — skills/idea-refine/SKILL.md:73 — defined here
`Audience shift` — skills/idea-refine/SKILL.md:74 — defined here
`Combination` — skills/idea-refine/SKILL.md:75 — defined here
`Simplification` — skills/idea-refine/SKILL.md:76 — defined here
`10x version` — skills/idea-refine/SKILL.md:77 — defined here
`Expert lens` — skills/idea-refine/SKILL.md:78 — defined here
`Glob` — skills/idea-refine/SKILL.md:82 — used here
`Grep` — skills/idea-refine/SKILL.md:82 — used here
`Read` — skills/idea-refine/SKILL.md:82 — used here
`User value` — skills/idea-refine/SKILL.md:93 — defined here
`painkiller` — skills/idea-refine/SKILL.md:93 — defined here
`vitamin` — skills/idea-refine/SKILL.md:93 — defined here
`Feasibility` — skills/idea-refine/SKILL.md:94 — defined here
`Differentiation` — skills/idea-refine/SKILL.md:95 — defined here
`hidden assumptions` — skills/idea-refine/SKILL.md:99, 175 — defined here
`Problem Statement` — skills/idea-refine/SKILL.md:33, 115 — defined here
`Recommended Direction` — skills/idea-refine/SKILL.md:34, 118 — defined here
`Key Assumptions` — skills/idea-refine/SKILL.md:35, 121 — defined here
`MVP Scope` — skills/idea-refine/SKILL.md:36, 126 — defined here
`Not Doing` — skills/idea-refine/SKILL.md:37, 129, 138, 164, 176 — defined here
`Open Questions` — skills/idea-refine/SKILL.md:134 — defined here

## Structure
- `## How It Works` — skills/idea-refine/SKILL.md:10
- `## Usage` — skills/idea-refine/SKILL.md:16
- `## Output` — skills/idea-refine/SKILL.md:30
- `## Detailed Instructions` — skills/idea-refine/SKILL.md:39
- `### Philosophy` — skills/idea-refine/SKILL.md:43
- `### Process` — skills/idea-refine/SKILL.md:52
- `#### Phase 1: Understand & Expand (Divergent)` — skills/idea-refine/SKILL.md:56
- `#### Phase 2: Evaluate & Converge` — skills/idea-refine/SKILL.md:86
- `#### Phase 3: Sharpen & Ship` — skills/idea-refine/SKILL.md:108
- `### Anti-patterns to Avoid` — skills/idea-refine/SKILL.md:142
- `### Tone` — skills/idea-refine/SKILL.md:152
- `## Red Flags` — skills/idea-refine/SKILL.md:158
- `## Verification` — skills/idea-refine/SKILL.md:168

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/idea-refine/scripts/idea-refine.sh`, bash, 16 lines
- documented invocation: "bash skills/idea-refine/scripts/idea-refine.sh" — skills/idea-refine/SKILL.md:22
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `bash skills/idea-refine/scripts/idea-refine.sh` (run in `sources/addy`)
  Stdout: `{"status": "ready", "directory": "docs/ideas"}`
  Stderr: `Directory already exists: docs/ideas`
  Exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented exit codes: none in `SKILL.md`. Actual exit paths: exits 0 on success; exits non-zero if `mkdir -p` fails under `set -e` (skills/idea-refine/scripts/idea-refine.sh:2).
- for validators/gates: not a validator or gate (initialization utility).
- does the output match what the documentation claims? Yes, initializes `docs/ideas`.

## Defects — required
none

## Observations
Legacy structure noted in `scripts/lib/skill-lint.js:59` ("Legacy structure predating skill-anatomy.md — uses How-It-Works/Usage/Anti-patterns instead of standard headings"). Highlights the critical importance of boundary-setting: "is arguably the most valuable part" — skills/idea-refine/SKILL.md:138.

## Context cost
8111 bytes for SKILL.md. Total skill package (including examples.md 20284 bytes, frameworks.md 5404 bytes, refinement-criteria.md 5738 bytes, idea-refine.sh 342 bytes): 39879 bytes, approximately 9500 tokens.
