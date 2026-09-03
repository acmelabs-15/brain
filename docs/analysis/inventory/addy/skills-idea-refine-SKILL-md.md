---
package: addy
path: skills/idea-refine/SKILL.md
type: skill
bytes: 8111
unit: inv-addy-12
---

# skills/idea-refine/SKILL.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking." — skills/idea-refine/SKILL.md:8

## Design intent — required
Provides the primary ideation and concept refinement skill in the Addy toolkit, bridging raw user intent and downstream specification. It guides users and coding agents through a disciplined three-phase dialogue (divergent expansion, convergent stress-testing, and scoping/shipping), preventing premature engineering commitment to unvalidated or poorly differentiated concepts. It ensures ideas are grounded in real user pain, technical feasibility, and codebase constraints while mandating an explicit "Not Doing" list before advancing to planning or development.

## Phase — required
addy:Define

## Inputs — required
- User idea prompt (`$ARGUMENTS`) — skills/idea-refine/SKILL.md:54
- User answers to sharpening questions gathered via `AskUserQuestion` — skills/idea-refine/SKILL.md:62, 69
- User feedback and direction selection in Phase 2 — skills/idea-refine/SKILL.md:88
- Codebase inspection data (`Glob`, `Grep`, `Read`) — skills/idea-refine/SKILL.md:82
- Optional initialization script `skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- Ideation frameworks from `frameworks.md` — skills/idea-refine/SKILL.md:84
- Evaluation rubric from `refinement-criteria.md` — skills/idea-refine/SKILL.md:97
- Example sessions from `examples.md` — skills/idea-refine/SKILL.md:156

## Outputs — required
- Markdown one-pager saved to `docs/ideas/[idea-name].md` upon user confirmation — skills/idea-refine/SKILL.md:32, 110-140

## Invokes — required
- reference `frameworks.md` — skills/idea-refine/SKILL.md:84
- reference `refinement-criteria.md` — skills/idea-refine/SKILL.md:97
- reference `examples.md` — skills/idea-refine/SKILL.md:156
- script `skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- tool `AskUserQuestion` — skills/idea-refine/SKILL.md:69
- tool `Glob` — skills/idea-refine/SKILL.md:82
- tool `Grep` — skills/idea-refine/SKILL.md:82
- tool `Read` — skills/idea-refine/SKILL.md:82

## Invoked by — required
- doc `README.md` — README.md:354
- doc `CLAUDE.md` — CLAUDE.md:21
- skill `skills/interview-me/SKILL.md` — skills/interview-me/SKILL.md:14, 182, 225
- skill `skills/using-agent-skills/SKILL.md` — skills/using-agent-skills/SKILL.md:20, 137, 147, 171
- config `evals/cases/idea-refine.json` — evals/cases/idea-refine.json:2
- external-doc `sources/addy-external/idea-refine.md` — sources/addy-external/idea-refine.md:5

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
- `Key Assumptions to Validate` — skills/idea-refine/SKILL.md:35, 121 — defined here
- `MVP Scope` — skills/idea-refine/SKILL.md:36, 126 — defined here
- `Not Doing list` — skills/idea-refine/SKILL.md:37, 129, 138 — defined here
- `Open Questions` — skills/idea-refine/SKILL.md:134 — defined here
- `How Might We` — skills/idea-refine/SKILL.md:60, 116, 172 — used here
- `Sharpening questions` — skills/idea-refine/SKILL.md:62 — defined here
- `AskUserQuestion` — skills/idea-refine/SKILL.md:69 — used here
- `Inversion` — skills/idea-refine/SKILL.md:72 — defined here
- `Constraint removal` — skills/idea-refine/SKILL.md:73 — defined here
- `Audience shift` — skills/idea-refine/SKILL.md:74 — defined here
- `Combination` — skills/idea-refine/SKILL.md:75 — defined here
- `Simplification` — skills/idea-refine/SKILL.md:76 — defined here
- `10x version` — skills/idea-refine/SKILL.md:77 — defined here
- `Expert lens` — skills/idea-refine/SKILL.md:78 — defined here
- `Codebase scanning` — skills/idea-refine/SKILL.md:82 — defined here
- `Direction clustering` — skills/idea-refine/SKILL.md:90 — defined here
- `Stress-testing` — skills/idea-refine/SKILL.md:92 — defined here
- `User value` — skills/idea-refine/SKILL.md:93 — used here
- `Feasibility` — skills/idea-refine/SKILL.md:94 — used here
- `Differentiation` — skills/idea-refine/SKILL.md:95 — used here
- `Hidden assumptions` — skills/idea-refine/SKILL.md:99, 147, 162, 175 — defined here
- `Anti-patterns` — skills/idea-refine/SKILL.md:142 — defined here
- `Red Flags` — skills/idea-refine/SKILL.md:158 — defined here
- `Verification checklist` — skills/idea-refine/SKILL.md:168 — defined here

## Structure
- `# Idea Refine` (line 6)
- `## How It Works` (lines 10-14)
- `## Usage` (lines 16-29)
- `## Output` (lines 30-38)
- `## Detailed Instructions` (lines 39-156)
  - `### Philosophy` (lines 43-51)
  - `### Process` (lines 52-141)
    - `#### Phase 1: Understand & Expand (Divergent)` (lines 56-85)
    - `#### Phase 2: Evaluate & Converge` (lines 86-107)
    - `#### Phase 3: Sharpen & Ship` (lines 108-141)
  - `### Anti-patterns to Avoid` (lines 142-151)
  - `### Tone` (lines 153-156)
- `## Red Flags` (lines 158-166)
- `## Verification` (lines 168-179)

## Scripts — required if type is script or the skill ships scripts
- path: `skills/idea-refine/scripts/idea-refine.sh`, language: bash, lines: 16
- documented invocation: `bash skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- executed: yes
- actual command run: `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh`
- abridged stdout: `{"status": "ready", "directory": "docs/ideas"}`
- actual exit code: 0
- documented exit codes: `exit 0` (implicit upon successful completion under `set -e`) — skills/idea-refine/scripts/idea-refine.sh:2,15
- actual exit paths in code: implicit 0 exit on line 16; will only exit non-zero if `mkdir -p` fails under `set -e` on line 9
- for validators/gates: not a failing gate; functions as an idempotent bootstrap script and always exits 0 under normal filesystem operations
- does the output match what the documentation claims? yes; creates the directory if missing and outputs status JSON

## Defects — required
- `doc-drift` — skills/idea-refine/SKILL.md:10, 16, 43, 142, 153 — uses legacy section structure (`How It Works`, `Usage`, `Philosophy`, `Anti-patterns to Avoid`, `Tone`) instead of the standardized 6-part anatomy mandated in `docs/skill-anatomy.md`, requiring explicit exemption in `scripts/lib/skill-lint.js:59`.
- `doc-drift` — skills/idea-refine/SKILL.md:69 — explicitly references `AskUserQuestion` tool by name, tying the skill to a specific interactive runtime prompt tool.

## Observations
- Emphasizes anti-sycophancy: "Be honest, not supportive. If an idea is weak, say so with kindness. A good ideation partner is not a yes-machine. Push back on complexity, question real value, and point out when the emperor has no clothes" (lines 106-107).
- Integrates seamlessly with codebase inspection tools (`Glob`, `Grep`, `Read`) to anchor divergent variations in existing code architecture (line 82).

## Context cost
Total loaded bundle (`SKILL.md` 8,111 B + `frameworks.md` 5,404 B + `refinement-criteria.md` 5,738 B + `examples.md` 20,284 B + `scripts/idea-refine.sh` 342 B) = 39,879 bytes (~9,970 tokens). Alone: 8,111 bytes (~2,028 tokens).
