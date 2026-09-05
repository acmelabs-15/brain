---
package: rjm
path: .claude/commands/sync.md
type: command
bytes: 4971
unit: inv-rjm-75
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/sync.md

## Purpose — required, verbatim
> "Detect Spec to Code drift. Scan REQ/DESIGN/TASK specs for references to code that no longer exists, then report drift for review. Run after a hand-edit that moved or deleted code." — .claude/commands/sync.md:2

## Design intent — required
Closes the reverse lifecycle loop by providing automated detection of specification-to-code drift after manual code edits (such as hotfixes, refactorings, or deletions) that bypassed the forward lifecycle path (`/spec` -> `/plan` -> `/build`). Instead of allowing specifications to silently rot until PR review, `/sync` scans REQ, DESIGN, and TASK markdown files for backticked path references to code and tests, resolving each against the working tree. It enforces a strict "propose, do not auto-apply" principle, giving authors a structured triage workflow (code moved, code deleted, intentional forward reference, unsafe reference) while preserving the specification as a reliable source of truth.

## Phase — required
cross-phase

## Inputs — required
- Command argument specifying spec tier or empty via `$ARGUMENTS` (.claude/commands/sync.md:4, 9).
- Specification tiers scanned: `.agents/specs/requirements`, `.agents/specs/design`, `.agents/specs/tasks` (.claude/commands/sync.md:35).
- Working tree files resolved against backticked code and artifact path references (`scripts/...`, `build/scripts/...`, `.claude/skills/...`, `.claude/commands/...`, `templates/...`, `tests/...`, `src/...`) (.claude/commands/sync.md:35).

## Outputs — required
- Drift detector stdout report with `VERDICT` line (`PASS` or `DRIFT`) and list of `spec_file:line -> path absent on disk` findings (.claude/commands/sync.md:47, 68).
- Triage decisions per finding (moved, deleted, intentional forward reference, unsafe reference) (.claude/commands/sync.md:47-53, 69).
- Updated specification files or manual edits recorded in the PR description, with planned sync logs under `.agents/specs/sync-log/` (.claude/commands/sync.md:58, 70, 91).

## Invokes — required
- script scripts/sync/detect_spec_drift.py — .claude/commands/sync.md:32
- agent spec-generator — .claude/commands/sync.md:58

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Spec to Code drift` — .claude/commands/sync.md:2 — defined here
- `reverse path` — .claude/commands/sync.md:11 — used here
- `specification tier` — .claude/commands/sync.md:29 — used here
- `drift detector` — .claude/commands/sync.md:29 — defined here
- `Triage` — .claude/commands/sync.md:45 — defined here
- `Code moved` — .claude/commands/sync.md:49 — defined here
- `Code deleted` — .claude/commands/sync.md:50 — defined here
- `Intentional forward reference` — .claude/commands/sync.md:51 — defined here
- `Unsafe reference` — .claude/commands/sync.md:52 — defined here
- `spec patches` — .claude/commands/sync.md:56 — defined here
- `Sync log` — .claude/commands/sync.md:91 — used here

## Structure
- ## What this slice does — .claude/commands/sync.md:13
- ## Triggers — .claude/commands/sync.md:17
- ## Process — .claude/commands/sync.md:25
- ### Step 1: Detect drift — .claude/commands/sync.md:27
- ### Step 2: Triage the findings — .claude/commands/sync.md:45
- ### Step 3: Propose spec patches (follow-up, not in this slice) — .claude/commands/sync.md:56
- ## Principles — .claude/commands/sync.md:60
- ## Output — .claude/commands/sync.md:66
- ## Verification — .claude/commands/sync.md:72
- ## Anti-Patterns — .claude/commands/sync.md:79
- ## Extension Points — .claude/commands/sync.md:87

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .claude/commands/sync.md:1 — command is not listed in README.md, docs/workflow-commands.md, or invoked by any lifecycle command or hook; it was introduced as a standalone detection slice (issue #1997).
- missing-path · .agents/specs/sync-log/ — .claude/commands/sync.md:58 — directory .agents/specs/sync-log/ referenced for future sync log records does not exist on disk.

## Observations
- Closes the reverse lifecycle loop by scanning REQ/DESIGN/TASK specifications for stale code references that become broken after manual edits or refactorings.
- Implements a strict triage workflow (moved, deleted, intentional forward reference, unsafe reference) and mandates that humans confirm changes rather than auto-applying edits.
- Supports `<!-- sync-drift-ignore -->` comment markers to exempt planned forward references from false-positive drift warnings.

## Context cost
4971 bytes (approx. 1240 tokens).
