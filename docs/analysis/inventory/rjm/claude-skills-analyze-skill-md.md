---
package: rjm
path: .claude/skills/analyze/SKILL.md
type: skill
bytes: 7180
unit: inv-rjm-89
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/SKILL.md

## Purpose — required, verbatim
> "Systematic multi-step codebase analysis producing prioritized findings with file-line evidence. Covers architecture reviews, security assessments, and code quality evaluations through guided exploration, investigation planning, and synthesis." — .claude/skills/analyze/SKILL.md:4
> "When this skill activates, IMMEDIATELY invoke the script. The script IS the workflow. Do NOT explore the codebase first." — .claude/skills/analyze/SKILL.md:17

## Design intent — required
Agents tend to perform arbitrary, unstructured repository explorations that burn context or fail to produce verifiable evidence. The `analyze` skill enforces a disciplined multi-step state machine driven entirely by `scripts/analyze.py`. It requires delegating initial broad codebase survey to parallel Explore subagents, selecting focus areas across architecture, security, and quality dimensions, formalizing an investigation contract with explicit file-level hypotheses, executing deep analysis with cited file:line code evidence, auditing completeness in a dedicated verification step, and synthesizing findings into prioritized recommendations by severity. This guarantees structured, repeatable, and falsifiable codebase audits without relying on unguided agent intuition.

## Phase — required
cross-phase

## Inputs — required
- User trigger phrases: `"analyze this codebase"` (.claude/skills/analyze/SKILL.md:21), `"review code quality"` (.claude/skills/analyze/SKILL.md:22), `"run security assessment"` (.claude/skills/analyze/SKILL.md:23), `"architecture review of this system"` (.claude/skills/analyze/SKILL.md:24), `"find code smells"` (.claude/skills/analyze/SKILL.md:25).
- Workflow script CLI parameters for `scripts/analyze.py`:
  - `--step-number`: Current step index (starts at 1) (.claude/skills/analyze/SKILL.md:93).
  - `--total-steps`: Minimum 6; calibrated per investigation scope (.claude/skills/analyze/SKILL.md:94).
  - `--thoughts`: Accumulated state, findings, and file references carried forward across invocations (.claude/skills/analyze/SKILL.md:95).
- Codebase files inspected through `Read`, `Grep`, `Glob`, `Bash` tools (.claude/skills/analyze/SKILL.md:8-12).
- Explore subagent reports documenting directory structure, tech stack, entry points, and observed architectural patterns (.claude/skills/analyze/SKILL.md:105, 138).
- Domain reference materials from `software-engineering-library` triggered upon encountering book-depth conditions (.claude/skills/analyze/SKILL.md:119).

## Outputs — required
- Script guidance output providing `REQUIRED ACTIONS` and step transitions (.claude/skills/analyze/SKILL.md:101).
- Investigation commitments linking specific files, questions, and hypotheses (Phase 3 contract) (.claude/skills/analyze/SKILL.md:112-113).
- Prioritized findings with file:line evidence, quoted code, and severity ratings (`critical`, `high`, `medium`, `low`) (.claude/skills/analyze/SKILL.md:53, 117, 127).
- Synthesized action plan with prioritized recommendations (.claude/skills/analyze/SKILL.md:127, 170).

## Invokes — required
- reference references/design-legacy-code.md — .claude/skills/analyze/SKILL.md:65
- reference references/strategy-ooda-loop.md — .claude/skills/analyze/SKILL.md:66
- reference references/design-tell-dont-ask.md — .claude/skills/analyze/SKILL.md:67
- reference references/quality-boy-scout-rule.md — .claude/skills/analyze/SKILL.md:68
- reference references/reliability-observability-pillars.md — .claude/skills/analyze/SKILL.md:69
- reference references/engineering-complexity-tiers.md — .claude/skills/analyze/SKILL.md:70
- reference references/agent-architecture-patterns.md — .claude/skills/analyze/SKILL.md:71
- reference references/context-budget-management.md — .claude/skills/analyze/SKILL.md:72
- script scripts/analyze.py — .claude/skills/analyze/SKILL.md:80
- skill code-qualities-assessment — .claude/skills/analyze/SKILL.md:4
- skill security-scan — .claude/skills/analyze/SKILL.md:4
- skill software-engineering-library — .claude/skills/analyze/SKILL.md:119
- agent Explore — .claude/skills/analyze/SKILL.md:105

## Invoked by — required
- command build — .claude/commands/build.md:28
- skill autoplan — .claude/skills/autoplan/SKILL.md:118
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:261
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:412

## Concepts named — required, verbatim
- `analyze` — .claude/skills/analyze/SKILL.md:2 — defined here
- `Systematic multi-step codebase analysis` — .claude/skills/analyze/SKILL.md:4 — defined here
- `architecture reviews` — .claude/skills/analyze/SKILL.md:4 — defined here
- `security assessments` — .claude/skills/analyze/SKILL.md:4 — defined here
- `code quality evaluations` — .claude/skills/analyze/SKILL.md:4 — defined here
- `guided exploration` — .claude/skills/analyze/SKILL.md:4 — defined here
- `investigation planning` — .claude/skills/analyze/SKILL.md:4 — defined here
- `synthesis` — .claude/skills/analyze/SKILL.md:4 — defined here
- `code-qualities-assessment` — .claude/skills/analyze/SKILL.md:4 — used here
- `CWE-78` — .claude/skills/analyze/SKILL.md:4 — used here
- `security-scan` — .claude/skills/analyze/SKILL.md:4 — used here
- `Command Injection Prevention` — .claude/skills/analyze/SKILL.md:40 — used here
- `Working with Legacy Code` — .claude/skills/analyze/SKILL.md:65 — used here
- `Software Hierarchy of Needs` — .claude/skills/analyze/SKILL.md:65 — used here
- `OODA Loop` — .claude/skills/analyze/SKILL.md:66 — used here
- `Tell, Don't Ask` — .claude/skills/analyze/SKILL.md:67 — used here
- `feature envy` — .claude/skills/analyze/SKILL.md:67 — used here
- `getter chain` — .claude/skills/analyze/SKILL.md:67 — used here
- `Boy Scout Rule` — .claude/skills/analyze/SKILL.md:68 — used here
- `Observability Pillars` — .claude/skills/analyze/SKILL.md:69 — used here
- `Engineering Complexity Tiers` — .claude/skills/analyze/SKILL.md:70 — used here
- `Agent Architecture Patterns` — .claude/skills/analyze/SKILL.md:71 — used here
- `Skill budget rule` — .claude/skills/analyze/SKILL.md:71 — used here
- `structured prompt design` — .claude/skills/analyze/SKILL.md:71 — used here
- `diagnostic signals` — .claude/skills/analyze/SKILL.md:71 — used here
- `Context Budget Management` — .claude/skills/analyze/SKILL.md:72 — used here
- `Context flood prevention` — .claude/skills/analyze/SKILL.md:72 — used here
- `Think in Code principle` — .claude/skills/analyze/SKILL.md:72 — used here
- `hook architecture` — .claude/skills/analyze/SKILL.md:72 — used here
- `REQUIRED ACTIONS` — .claude/skills/analyze/SKILL.md:101 — defined here
- `Exploration` — .claude/skills/analyze/SKILL.md:103 — defined here
- `Explore agent` — .claude/skills/analyze/SKILL.md:105 — used here
- `Focus Selection` — .claude/skills/analyze/SKILL.md:107 — defined here
- `Investigation Planning` — .claude/skills/analyze/SKILL.md:111 — defined here
- `investigation plan` — .claude/skills/analyze/SKILL.md:117 — defined here
- `Deep Analysis` — .claude/skills/analyze/SKILL.md:115 — defined here
- `book-depth conditions` — .claude/skills/analyze/SKILL.md:119 — defined here
- `software-engineering-library` — .claude/skills/analyze/SKILL.md:119 — used here
- `Verification` — .claude/skills/analyze/SKILL.md:121 — defined here
- `Synthesis` — .claude/skills/analyze/SKILL.md:125 — defined here
- `action plan` — .claude/skills/analyze/SKILL.md:127 — defined here

## Structure
- `# Analyze Skill` — .claude/skills/analyze/SKILL.md:15
- `## Triggers` — .claude/skills/analyze/SKILL.md:19
- `## Quick Reference` — .claude/skills/analyze/SKILL.md:27
- `## Security` — .claude/skills/analyze/SKILL.md:38
- `## When to Use` — .claude/skills/analyze/SKILL.md:47
- `## References` — .claude/skills/analyze/SKILL.md:63
- `## Scripts` — .claude/skills/analyze/SKILL.md:76
- `### Invocation` — .claude/skills/analyze/SKILL.md:82
- `## Process` — .claude/skills/analyze/SKILL.md:99
- `### Phase 1: Exploration (Step 1)` — .claude/skills/analyze/SKILL.md:103
- `### Phase 2: Focus Selection (Step 2)` — .claude/skills/analyze/SKILL.md:107
- `### Phase 3: Investigation Planning (Step 3)` — .claude/skills/analyze/SKILL.md:111
- `### Phase 4: Deep Analysis (Steps 4 to N-2)` — .claude/skills/analyze/SKILL.md:115
- `### Phase 5: Verification (Step N-1)` — .claude/skills/analyze/SKILL.md:121
- `### Phase 6: Synthesis (Step N)` — .claude/skills/analyze/SKILL.md:125
- `## Example Sequence` — .claude/skills/analyze/SKILL.md:131
- `## Anti-Patterns` — .claude/skills/analyze/SKILL.md:151
- `## Verification` — .claude/skills/analyze/SKILL.md:163

## Scripts — required if type is script or the skill ships scripts
For script `scripts/analyze.py`:
- path: `.claude/skills/analyze/scripts/analyze.py`, language: Python, lines: 662
- documented invocation:
  "python3 scripts/analyze.py" — .claude/skills/analyze/SKILL.md:85
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 6 --thoughts "Starting analysis. User request: test codebase"`
  Abridged stdout:
  ```
  ======================================================================
  ANALYZE - Step 1/6: Process Exploration Results
  Phase: EXPLORATION
  ======================================================================

  STATUS: in_progress

  YOUR ACCUMULATED STATE:
  Starting analysis. User request: test codebase

  REQUIRED ACTIONS:
    STOP. Before proceeding, verify you have Explore agent results.
  ...
  NEXT:
  Invoke step 2 with your processed exploration summary. Include all structure, tech stack, and initial observations in --thoughts.
  ======================================================================
  ```
  actual exit code: 0
- documented exit codes:
  "0=success, 1=invalid input" — .claude/skills/analyze/SKILL.md:80
  vs. actual exit paths in code:
  `sys.exit(1)` when `args.step_number < 1` (.claude/skills/analyze/scripts/analyze.py:643)
  `sys.exit(1)` when `args.total_steps < 6` (.claude/skills/analyze/scripts/analyze.py:647)
  `sys.exit(1)` when `args.total_steps < args.step_number` (.claude/skills/analyze/scripts/analyze.py:651)
  Implicit exit 0 on normal completion (.claude/skills/analyze/scripts/analyze.py:657)
- for validators/gates: not a gate/validator script; input validation exits non-zero (1) on invalid numeric step arguments.
- does the output match what the documentation claims? Yes, produces formatted step guidance, accumulated state reflections, REQUIRED ACTIONS, and NEXT invocation guidance.

## Defects — required
- missing-path · .claude/skills/analyze/SKILL.md:63 · Skill directory contains `references/DEVELOPMENT.md` on disk but this reference is omitted from the `## References` section.
- missing-path · .claude/skills/analyze/SKILL.md:105 · Skill instructs delegating to `Explore agent(s)`, but there is no repository-defined agent file `.claude/agents/explore.md` in `sources/rjm/.claude/agents/`, relying instead on Claude Code's built-in subagent type.
- doc-drift · .claude/skills/analyze/SKILL.md:80 · Documentation lists exit codes as `0=success, 1=invalid input`, but standard `argparse` parsing failures (e.g. missing required `--thoughts` or invalid argument types) exit with code 2 in Python.

## Observations
- Strict workflow enforcement: Line 17 explicitly mandates: "When this skill activates, IMMEDIATELY invoke the script. The script IS the workflow. Do NOT explore the codebase first." This forces the agent to obey the external script's state machine rather than hallucinating unstructured file inspections.
- Calibrated workflow depth: The Quick Reference table specifies minimum step counts (6 to 12) calibrated to the investigation focus (architecture review: 6, security assessment: 7-9, code quality: 6-7, broad investigation: 9-12).
- Deferred reference loading: Line 119 specifies deferring heavy guidance from `software-engineering-library` until concrete "book-depth conditions" are detected in the evidence, preventing context consumption when not needed.
- Subagent parallelism: Outlines concrete exploration patterns delegating across logical subsystem boundaries (frontend/backend, services, modules) or across multiple repositories in parallel.

## Context cost
- File size: 7,180 bytes (~1,800 tokens).
- Script `scripts/analyze.py`: 26,407 bytes (~6,600 tokens).
- Eight referenced markdown guides: 20,890 bytes total (~5,200 tokens).
- Total direct context cost if all references and script are loaded: 54,477 bytes (~13,600 tokens). Deferred references in `software-engineering-library` add additional context only if invoked.
