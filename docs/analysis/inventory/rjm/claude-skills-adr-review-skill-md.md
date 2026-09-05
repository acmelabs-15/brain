---
package: rjm
path: .claude/skills/adr-review/SKILL.md
type: skill
bytes: 12171
unit: inv-rjm-78
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/SKILL.md

## Purpose — required, verbatim
> "Multi-agent debate pattern for rigorous ADR validation. Orchestrates 6 specialized agents through structured review rounds until consensus or 10 rounds maximum." — .claude/skills/adr-review/SKILL.md:24

## Design intent — required
Orchestrates a structured, adversarial multi-agent debate among six specialized roles (architect, critic, independent-thinker, security, analyst, high-level-advisor) to rigorously evaluate Architecture Decision Records (ADRs) before they are accepted, updated, or deleted. Without this skill, architectural decisions would rely on unvetted single-agent or developer approvals, risking unexamined blind spots, security oversights, path dependence, second-system traps, and uncoordinated deletions. It couples automated detection hooks with a strict consensus gate (6/6 Accept or Disagree-and-Commit) and requires cryptographic/debate-log evidence before any ADR status can transition to accepted.

## Phase — required
cross-phase

## Inputs — required
- Parameters from metadata:
  - `adr-file-path` — .claude/skills/adr-review/SKILL.md:9
  - `change-type` — .claude/skills/adr-review/SKILL.md:9
- Manual and automatic triggers:
  - "review this ADR" — .claude/skills/adr-review/SKILL.md:30
  - "validate ADR-005" — .claude/skills/adr-review/SKILL.md:31
  - "review this decision record" — .claude/skills/adr-review/SKILL.md:32
  - "delete ADR-NNN" — .claude/skills/adr-review/SKILL.md:33
  - "ADR file created, modified, or deleted" — .claude/skills/adr-review/SKILL.md:34
- Monitored ADR file locations:
  - `.agents/architecture/` — .claude/skills/adr-review/SKILL.md:58
  - `docs/adr/` — .claude/skills/adr-review/SKILL.md:59
  - `docs/architecture/` — .claude/skills/adr-review/SKILL.md:60
  - `docs/decisions/` — .claude/skills/adr-review/SKILL.md:61
  - `architecture/decisions/` — .claude/skills/adr-review/SKILL.md:62
- Prior context and review guidance:
  - Issues and pull requests researched in Phase 0 (.claude/skills/adr-review/SKILL.md:94)
  - Zimmermann 7-question checklist in `references/zimmermann-review-guidance.md` (.claude/skills/adr-review/SKILL.md:95)

## Outputs — required
- `debate-log` — .claude/skills/adr-review/SKILL.md:10, saved to `.agents/critique/ADR-NNN-debate-log.md` (.claude/skills/adr-review/SKILL.md:219)
- `updated-adr` — .claude/skills/adr-review/SKILL.md:10, updated with validated frontmatter status enum (`proposed | accepted | rejected | deprecated | superseded` — .claude/skills/adr-review/SKILL.md:222)
- `recommendations` — .claude/skills/adr-review/SKILL.md:10
- Strategic Review Verdict: `[APPROVED | CONCERNS | REJECTED]` (.claude/skills/adr-review/SKILL.md:162)
- Categorized blocking issues:
  - P0: "Must resolve" — .claude/skills/adr-review/SKILL.md:119
  - P1: "Resolve OR defer with issue" — .claude/skills/adr-review/SKILL.md:120
  - P2: "Document" — .claude/skills/adr-review/SKILL.md:121

## Invokes — required
- script detect_adr_changes.py — .claude/skills/adr-review/SKILL.md:64
- reference zimmermann-review-guidance.md — .claude/skills/adr-review/SKILL.md:95
- reference debate-protocol.md — .claude/skills/adr-review/SKILL.md:102
- reference deletion-workflow.md — .claude/skills/adr-review/SKILL.md:113
- reference issue-resolution.md — .claude/skills/adr-review/SKILL.md:123
- reference artifacts.md — .claude/skills/adr-review/SKILL.md:269
- reference agent-prompts.md — .claude/skills/adr-review/SKILL.md:270
- agent architect — .claude/skills/adr-review/SKILL.md:83
- agent critic — .claude/skills/adr-review/SKILL.md:84
- agent independent-thinker — .claude/skills/adr-review/SKILL.md:85
- agent security — .claude/skills/adr-review/SKILL.md:86
- agent analyst — .claude/skills/adr-review/SKILL.md:87
- agent high-level-advisor — .claude/skills/adr-review/SKILL.md:88
- skill adr-generator — .claude/skills/adr-review/SKILL.md:4

## Invoked by — required
- agent architect — .claude/agents/architect.md:641
- doc AGENTS.md — AGENTS.md:45

## Concepts named — required, verbatim
- `adr-review` — .claude/skills/adr-review/SKILL.md:2 — defined here
- `adr-generator` — .claude/skills/adr-review/SKILL.md:4 — used here
- `Multi-agent debate` — .claude/skills/adr-review/SKILL.md:24 — defined here
- `architect` — .claude/skills/adr-review/SKILL.md:83 — used here
- `critic` — .claude/skills/adr-review/SKILL.md:84 — used here
- `independent-thinker` — .claude/skills/adr-review/SKILL.md:85 — used here
- `security` — .claude/skills/adr-review/SKILL.md:86 — used here
- `analyst` — .claude/skills/adr-review/SKILL.md:87 — used here
- `high-level-advisor` — .claude/skills/adr-review/SKILL.md:88 — used here
- `Phase 0` — .claude/skills/adr-review/SKILL.md:94 — defined here
- `Phase 1` — .claude/skills/adr-review/SKILL.md:95 — defined here
- `Zimmermann 7-question checklist` — .claude/skills/adr-review/SKILL.md:95 — used here
- `Phase 2` — .claude/skills/adr-review/SKILL.md:96 — defined here
- `Phase 3` — .claude/skills/adr-review/SKILL.md:97 — defined here
- `Phase 4` — .claude/skills/adr-review/SKILL.md:98 — defined here
- `Disagree-and-Commit` — .claude/skills/adr-review/SKILL.md:100 — used here
- `D1` — .claude/skills/adr-review/SKILL.md:108 — defined here
- `D2` — .claude/skills/adr-review/SKILL.md:109 — defined here
- `D3` — .claude/skills/adr-review/SKILL.md:110 — defined here
- `D4` — .claude/skills/adr-review/SKILL.md:111 — defined here
- `P0` — .claude/skills/adr-review/SKILL.md:119 — defined here
- `P1` — .claude/skills/adr-review/SKILL.md:120 — defined here
- `P2` — .claude/skills/adr-review/SKILL.md:121 — defined here
- `Strategic Validation Checklist` — .claude/skills/adr-review/SKILL.md:129 — defined here
- `Chesterton's Fence` — .claude/skills/adr-review/SKILL.md:131 — used here
- `Path Dependence` — .claude/skills/adr-review/SKILL.md:138 — used here
- `Core vs Context` — .claude/skills/adr-review/SKILL.md:146 — used here
- `Second-System Effect` — .claude/skills/adr-review/SKILL.md:153 — used here
- `Strategic Review Verdict` — .claude/skills/adr-review/SKILL.md:160 — defined here
- `proposed` — .claude/skills/adr-review/SKILL.md:222 — used here
- `accepted` — .claude/skills/adr-review/SKILL.md:222 — used here
- `rejected` — .claude/skills/adr-review/SKILL.md:222 — used here
- `deprecated` — .claude/skills/adr-review/SKILL.md:222 — used here
- `superseded` — .claude/skills/adr-review/SKILL.md:222 — used here
- `ADR-073` — .claude/skills/adr-review/SKILL.md:222 — used here
- `Pass Through` — .claude/skills/adr-review/SKILL.md:252 — used here
- `Copy Edit` — .claude/skills/adr-review/SKILL.md:253 — used here
- `Siding/Dead End` — .claude/skills/adr-review/SKILL.md:254 — used here
- `Self Promotion` — .claude/skills/adr-review/SKILL.md:255 — used here
- `Power Game` — .claude/skills/adr-review/SKILL.md:256 — used here
- `Offended Reaction` — .claude/skills/adr-review/SKILL.md:257 — used here
- `Groundhog Day` — .claude/skills/adr-review/SKILL.md:258 — used here

## Structure
- frontmatter — .claude/skills/adr-review/SKILL.md:1
- # ADR Review — .claude/skills/adr-review/SKILL.md:22
- ## Triggers — .claude/skills/adr-review/SKILL.md:26
- ## Quick Start — .claude/skills/adr-review/SKILL.md:38
- ## File Triggers — .claude/skills/adr-review/SKILL.md:54
- ## When to Use — .claude/skills/adr-review/SKILL.md:66
- ## Agent Roles — .claude/skills/adr-review/SKILL.md:79
- ## Process — .claude/skills/adr-review/SKILL.md:90
- ## Deletion Workflow — .claude/skills/adr-review/SKILL.md:104
- ## Issue Resolution — .claude/skills/adr-review/SKILL.md:115
- ## Phase 4: Strategic Review (Principal-Level Validation) — .claude/skills/adr-review/SKILL.md:125
- ### Strategic Validation Checklist — .claude/skills/adr-review/SKILL.md:129
- #### Chesterton's Fence (Change Justification) — .claude/skills/adr-review/SKILL.md:131
- #### Path Dependence (Irreversibility Recognition) — .claude/skills/adr-review/SKILL.md:138
- #### Core vs Context (Investment Prioritization) — .claude/skills/adr-review/SKILL.md:146
- #### Second-System Effect (Over-Engineering Detection) — .claude/skills/adr-review/SKILL.md:153
- ### Strategic Review Verdict — .claude/skills/adr-review/SKILL.md:160
- ## Scripts — .claude/skills/adr-review/SKILL.md:174
- ## Verification Checklist — .claude/skills/adr-review/SKILL.md:205
- ## Anti-Patterns — .claude/skills/adr-review/SKILL.md:234
- ### Process Anti-Patterns — .claude/skills/adr-review/SKILL.md:236
- ### Review Anti-Patterns (Zimmermann) — .claude/skills/adr-review/SKILL.md:246
- ## References — .claude/skills/adr-review/SKILL.md:262

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/adr-review/scripts/detect_adr_changes.py`, language: Python 3, lines: 501
- documented invocation:
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py" — .claude/skills/adr-review/SKILL.md:183
  - "python3 scripts/detect_adr_changes.py --base-path ../../.." — .claude/skills/adr-review/SKILL.md:187
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --since-commit abc123" — .claude/skills/adr-review/SKILL.md:191
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --include-untracked" — .claude/skills/adr-review/SKILL.md:194
  - "uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --include-untracked" — .claude/skills/adr-review/SKILL.md:210
- **executed:** yes
- actual command run: `uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --include-untracked`
  abridged stdout:
  ```json
  {
    "Created": [],
    "Modified": [],
    "ModifiedFrontmatterOnly": [],
    "Deleted": [],
    "DeletedDetails": [],
    "HasChanges": false,
    "RecommendedAction": "none",
    "Timestamp": "2026-09-05T11:19:38.298261+00:00",
    "SinceCommit": "HEAD~1"
  }
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "must be 0; non-zero means git error or I/O failure" — .claude/skills/adr-review/SKILL.md:211
  Actual exit paths in script:
  - `return 0` (.claude/skills/adr-review/scripts/detect_adr_changes.py:484) on clean detection output.
  - `return 1` (.claude/skills/adr-review/scripts/detect_adr_changes.py:381, 494) when `.git` is missing or on unexpected error.
  - `return 2` (.claude/skills/adr-review/scripts/detect_adr_changes.py:488) on `FileNotFoundError`.
  - `return 3` (.claude/skills/adr-review/scripts/detect_adr_changes.py:403, 491) on `git diff` failure or `OSError`.
- for validators/gates: can it exit non-zero? yes, exits 1 on missing `.git` or unexpected error, 2 on FileNotFoundError, and 3 on git failure or OSError. Does it fail on the source repo's own default branch? No, exits 0 with `HasChanges: false`.
- does the output match what the documentation claims? Yes, returns JSON output with `HasChanges: false` and exit code 0 on the clean default branch.

## Defects — required
- `doc-drift` · .claude/skills/adr-review/SKILL.md:187 · Invocation example `python3 scripts/detect_adr_changes.py --base-path ../../..` lacks the `uv run` wrapper, failing with `ModuleNotFoundError: No module named 'yaml'` in standard Python 3 environments.
- `missing-path` · .claude/skills/adr-review/SKILL.md:179 · References `src/copilot-cli/skills/adr-review/scripts/detect_adr_changes.py`, which is part of the excluded Copilot CLI mirror outside the rjm lifecycle scope.

## Observations
- Multi-agent debate orchestration with strict 6-role separation: enforces distinct analytical foci (structural, critical, contrarian, security, feasibility, strategic) to ensure all dimensions of architectural decisions are surfaced.
- Consensus requirement: mandates that all 6 agents vote `Accept` or `Disagree-and-Commit`, capped at 10 debate rounds to prevent indefinite stalling while preserving dissent recording.
- Cryptographic evidence requirement for accepted status: per ADR-073, transitioning status to `accepted` requires a corresponding debate-log artifact at `.agents/critique/ADR-NNN-debate-log.md` to prevent unvetted status changes.
- Codifies Zimmermann 2023 review practices: explicitly incorporates the Zimmermann 7-question checklist and flags 7 review anti-patterns during Phase 2 consolidation.

## Context cost
12171 bytes (~3042 tokens) for `SKILL.md`. Full skill bundle across all 6 references, script, and prompt templates is ~69760 bytes (~17440 tokens).
