---
package: rjm
path: .claude/skills/merge-resolver/SKILL.md
type: skill
bytes: 16520
unit: inv-rjm-126
in_scope_via: .claude/agents/merge-resolver.md
aliases: []
memo_inputs:
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/merge-resolver/SKILL.md

## Purpose — required, verbatim
> "Resolve merge conflicts by analyzing git history and commit intent." — .claude/skills/merge-resolver/SKILL.md:17

## Design intent — required
Automates and standardizes git merge conflict resolution for autonomous agent workflows, combining automated resolution for non-semantic file classes (lockfiles, generated platform agent definitions, Serena memories, and command/skill definitions where base branch is authoritative) with an intent-based priority hierarchy (Security > Bugfix > Feature/Refactor > Style) for manual semantic resolution. It specifically prevents catastrophic evidence destruction on append-only session and retrospective artifacts by mandating rename rather than content-merging (avoiding historical log corruption as occurred in PR #4856), and blocks execution upfront via Phase 0 if shell capabilities are absent so agents do not output misleading pseudo-resolutions.

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases: `resolve merge conflicts` — .claude/skills/merge-resolver/SKILL.md:35, `fix conflicts on this branch` — .claude/skills/merge-resolver/SKILL.md:36, `PR has conflicts with main` — .claude/skills/merge-resolver/SKILL.md:37, `can't merge due to conflicts` — .claude/skills/merge-resolver/SKILL.md:38, `resolve PR conflicts` — .claude/skills/merge-resolver/SKILL.md:39.
- CLI options and flags for `resolve_pr_conflicts.py`: `--pr-number`, `--branch-name`, `--target-branch`, `--worktree-base-path`, and `--dry-run` (lines 23-28, 172-174).
- CLI options and flags for `verify_no_conflict_markers.py`: `--cwd` and `--json` (line 204).
- GitHub PR metadata fetched via `gh pr view` (line 60).
- Git repository state, working tree status, commit history, and diffs via `git branch --show-current`, `git merge --no-commit`, `git diff --name-only --diff-filter=U`, `git blame`, `git diff --cached --check MERGE_HEAD`, `git diff HEAD --check`, and `git status --porcelain` (lines 61-63, 71, 73, 207, 238, 247).
- Conflicted file contents on both base (`--theirs`) and head (`--ours`) branches across auto-resolvable patterns, append-only evidence artifacts, and plugin manifests `*/.claude-plugin/plugin.json` (lines 117-120, 128-144, 148-163).
- Staged or explicitly supplied session logs (`.agents/sessions/<log>.json`) validated via session protocol (lines 291-298).

## Outputs — required
- Staged, cleanly resolved conflict files via `git add` (lines 70, 73, 246).
- Preserved separate valid evidence records for append-only artifacts (`.agents/sessions/*`, `.agents/qa/*`, `.agents/retrospective/*`): base version accepted at original filename and head version restored under a renamed path with distinguishing suffix (lines 117-120, 128, 222-223, 248).
- Updated cross-references in indexes, QA reports, retrospectives, or per-issue handoffs (`HANDOFF.md` or `.agents/handoffs/`) (lines 120, 226, 249, 308).
- Resolved plugin manifest `*/.claude-plugin/plugin.json` adhering to ADR-092 (omitting `version` field if absent on either side, or bumping patch version if both carry semver) (lines 148-160).
- Merge resolution commit created via `git commit` with recorded commit SHA (lines 82, 251).
- Pushed branch updates to remote repository via `git push` (lines 83, 252).
- Verification verdicts from `verify_no_conflict_markers.py` (exit codes 0/1/2/3, JSON report with `clean`, `unmerged_files`, `leftover_markers`) (lines 79, 210-217) and structured JSON summary from `resolve_pr_conflicts.py` (`success`, `message`, `files_resolved`, `files_blocked`) (lines 188-195).
- Halting status: immediate `[BLOCKED]` status returned without resolution plan if shell execution capabilities are unavailable (lines 50-52).

## Invokes — required
- skill git-advanced-workflows — .claude/skills/merge-resolver/SKILL.md:4
- script .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py — .claude/skills/merge-resolver/SKILL.md:23
- script .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py — .claude/skills/merge-resolver/SKILL.md:79
- script validate_session_json.py — .claude/skills/merge-resolver/SKILL.md:80
- reference .agents/retrospective/2026-08-10-pr-4856-session-log-collision.md — .claude/skills/merge-resolver/SKILL.md:120
- reference references/strategies.md — .claude/skills/merge-resolver/SKILL.md:122
- script validate_plugin_version_bump.py — .claude/skills/merge-resolver/SKILL.md:153
- doc .claude/rules/session-logs.md — .claude/skills/merge-resolver/SKILL.md:282
- reference strategies.md — .claude/skills/merge-resolver/SKILL.md:283
- script scripts/validate_session_json.py — .claude/skills/merge-resolver/SKILL.md:298

## Invoked by — required
- agent .claude/agents/merge-resolver.md — .claude/agents/merge-resolver.md:42
- agent .claude/agents/merge-resolver.md — .claude/agents/merge-resolver.md:235
- doc .agents/AGENT-SYSTEM.md — .agents/AGENT-SYSTEM.md:307
- doc README.md — README.md:417
- doc docs/agent-catalog.md — docs/agent-catalog.md:32
- doc AGENTS.md — AGENTS.md:37
- doc docs/skill-reference.md — docs/skill-reference.md:196
- doc docs/autonomous-pr-monitor.md — docs/autonomous-pr-monitor.md:673
- doc docs/autonomous-pr-monitor.md — docs/autonomous-pr-monitor.md:736
- doc docs/autonomous-pr-monitor.md — docs/autonomous-pr-monitor.md:903

## Concepts named — required, verbatim
- `merge-resolver` — .claude/skills/merge-resolver/SKILL.md:2 — defined here
- `git-advanced-workflows` — .claude/skills/merge-resolver/SKILL.md:4 — used here
- `Merge Resolver` — .claude/skills/merge-resolver/SKILL.md:15 — defined here
- `Phase 0: Execution Capability Precondition` — .claude/skills/merge-resolver/SKILL.md:43 — defined here
- `Completion rule` — .claude/skills/merge-resolver/SKILL.md:54 — defined here
- `Phase 1: Context Gathering` — .claude/skills/merge-resolver/SKILL.md:56 — defined here
- `Phase 2: Analysis and Resolution` — .claude/skills/merge-resolver/SKILL.md:65 — defined here
- `Phase 3: Validation` — .claude/skills/merge-resolver/SKILL.md:75 — defined here
- `Intent Classification` — .claude/skills/merge-resolver/SKILL.md:85 — defined here
- `strict priority hierarchy` — .claude/skills/merge-resolver/SKILL.md:97 — defined here
- `PRIMARY sort key` — .claude/skills/merge-resolver/SKILL.md:97 — defined here
- `Decision Framework` — .claude/skills/merge-resolver/SKILL.md:99 — defined here
- `Session File Rules` — .claude/skills/merge-resolver/SKILL.md:111 — defined here
- `Rename, never content-merge` — .claude/skills/merge-resolver/SKILL.md:120 — defined here
- `append-only evidence artifact` — .claude/skills/merge-resolver/SKILL.md:120 — used here
- `Auto-Resolvable Patterns` — .claude/skills/merge-resolver/SKILL.md:124 — defined here
- `Add/add caveat` — .claude/skills/merge-resolver/SKILL.md:128 — defined here
- `Plugin Manifests` — .claude/skills/merge-resolver/SKILL.md:146 — defined here
- `ADR-092` — .claude/skills/merge-resolver/SKILL.md:151 — used here
- `version-field gate` — .claude/skills/merge-resolver/SKILL.md:152 — used here
- `Anti-Patterns` — .claude/skills/merge-resolver/SKILL.md:218 — defined here
- `HANDOFF.md` — .claude/skills/merge-resolver/SKILL.md:226 — used here
- `Success Criteria` — .claude/skills/merge-resolver/SKILL.md:234 — defined here
- `Completion Checklist` — .claude/skills/merge-resolver/SKILL.md:244 — defined here
- `Serena memory` — .claude/skills/merge-resolver/SKILL.md:250 — used here
- `Session Protocol Validation Details` — .claude/skills/merge-resolver/SKILL.md:287 — defined here
- `Session End Checklist` — .claude/skills/merge-resolver/SKILL.md:301 — defined here
- `qa` — .claude/skills/merge-resolver/SKILL.md:307 — used here
- `Common Failures` — .claude/skills/merge-resolver/SKILL.md:310 — defined here

## Structure
- frontmatter — .claude/skills/merge-resolver/SKILL.md:1
- # Merge Resolver — .claude/skills/merge-resolver/SKILL.md:15
- ## Quick Start — .claude/skills/merge-resolver/SKILL.md:19
- ## Triggers — .claude/skills/merge-resolver/SKILL.md:31
- ## Process — .claude/skills/merge-resolver/SKILL.md:41
- ### Phase 0: Execution Capability Precondition (BLOCKING) — .claude/skills/merge-resolver/SKILL.md:43
- ### Phase 1: Context Gathering — .claude/skills/merge-resolver/SKILL.md:56
- ### Phase 2: Analysis and Resolution — .claude/skills/merge-resolver/SKILL.md:65
- ### Phase 3: Validation (BLOCKING) — .claude/skills/merge-resolver/SKILL.md:75
- ## Intent Classification — .claude/skills/merge-resolver/SKILL.md:85
- ## Decision Framework — .claude/skills/merge-resolver/SKILL.md:99
- ## Session File Rules — .claude/skills/merge-resolver/SKILL.md:111
- ## Auto-Resolvable Patterns — .claude/skills/merge-resolver/SKILL.md:124
- ### Plugin Manifests (Special Rule) — .claude/skills/merge-resolver/SKILL.md:146
- ## Scripts — .claude/skills/merge-resolver/SKILL.md:165
- ### resolve_pr_conflicts.py — .claude/skills/merge-resolver/SKILL.md:167
- ### verify_no_conflict_markers.py — .claude/skills/merge-resolver/SKILL.md:199
- ## Anti-Patterns — .claude/skills/merge-resolver/SKILL.md:218
- ## Verification — .claude/skills/merge-resolver/SKILL.md:232
- ### Success Criteria — .claude/skills/merge-resolver/SKILL.md:234
- ### Completion Checklist — .claude/skills/merge-resolver/SKILL.md:244
- ## Extension Points — .claude/skills/merge-resolver/SKILL.md:254
- ### Custom Auto-Resolvable Patterns — .claude/skills/merge-resolver/SKILL.md:256
- ### Custom Resolution Strategies — .claude/skills/merge-resolver/SKILL.md:260
- ### CI/CD Integration — .claude/skills/merge-resolver/SKILL.md:264
- ## Related — .claude/skills/merge-resolver/SKILL.md:279
- ### Why This Matters — .claude/skills/merge-resolver/SKILL.md:289
- ### Validation Commands — .claude/skills/merge-resolver/SKILL.md:294
- ### Session End Checklist — .claude/skills/merge-resolver/SKILL.md:301
- ### Common Failures — .claude/skills/merge-resolver/SKILL.md:310

## Scripts — required if type is script or the skill ships scripts
### Script 1: `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py`
- path: `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py`, Python 3, 789 lines
- documented invocation: "python3 .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py \" — .claude/skills/merge-resolver/SKILL.md:23
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py --pr-number 123 --branch-name "fix/test" --dry-run`
- abridged stdout: `{"success": true, "message": "[DryRun] Would create worktree at /Users/peterkloss/Dev/ACMElabs/brain-pr-123 and resolve conflicts for PR #123", "files_resolved": [], "files_blocked": []}`
- actual exit code: 0
- documented exit codes: `0` (conflicts resolved successfully / dry run; .claude/skills/merge-resolver/SKILL.md:181), `1` (non-auto-resolvable conflicts remain; .claude/skills/merge-resolver/SKILL.md:182) vs. actual exit paths in code:
  - `sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:204` (`sys.exit(2)` on config error / missing plugin lib dir per ADR-035)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:772` (`return 1` on repository info lookup failure)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:785` (`return 0 if result["success"] else 1`)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:789` (`raise SystemExit(main())`)
- for validators/gates: not a standalone gate; auto-resolution orchestration script. Exits non-zero (1) on non-resolvable conflicts or repo lookup error, and (2) on config failure.
- does the output match what the documentation claims? Yes, dry-run produces expected JSON structure with `success`, `message`, `files_resolved`, and `files_blocked`.

### Script 2: `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`
- path: `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`, Python 3, 259 lines
- documented invocation: "python3 .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py" — .claude/skills/merge-resolver/SKILL.md:79
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py --cwd sources/rjm`
- abridged stdout: `[ok] no unmerged files and no leftover conflict markers`
- actual exit code: 0
- actual command run (JSON): `python3 sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py --cwd sources/rjm --json`
- abridged stdout (JSON): `{"leftover_markers": [], "ok": true, "unmerged_files": []}`
- actual exit code: 0
- documented exit codes: `0` (clean), `1` (resolution incomplete), `2` (usage error), `3` (external error; .claude/skills/merge-resolver/SKILL.md:212-216) vs. actual exit paths in code:
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:174` (`return 2, report` if not in git repo)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:180` (`return 3, ...` if git command fails with RuntimeError)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:183` (`return 0, ...` if clean)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:185` (`return 1, ...` if unmerged files or leftover markers exist)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:248` (`return 2` on OSError)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:255` (`return exit_code`)
  - `sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:259` (`sys.exit(main())`)
- for validators/gates: validator gate; can exit non-zero (1, 2, or 3). Passes (exits 0) on default branch when working tree is clean.
- does the output match what the documentation claims? Yes, human-readable text and JSON schema match documentation exactly.

## Defects — required
- `missing-path` · `validate_session_json.py` — .claude/skills/merge-resolver/SKILL.md:80 — Cites script as bare `validate_session_json.py` rather than repository path `scripts/validate_session_json.py` (which is properly cited on line 298).
- `missing-path` · `validate_plugin_version_bump.py` — .claude/skills/merge-resolver/SKILL.md:153 — Cites script as bare `validate_plugin_version_bump.py` rather than full repository path `build/scripts/validate_plugin_version_bump.py`.
- `doc-drift` · `Exit codes:` — .claude/skills/merge-resolver/SKILL.md:177 — Table documents only exit codes 0 and 1 for `resolve_pr_conflicts.py`, omitting exit code 2 which is explicitly raised on line 204 (`sys.exit(2)`) for ADR-035 config errors when the plugin lib directory is missing.
- `internal-contradiction` · `.agents/*` — .claude/skills/merge-resolver/SKILL.md:133 — Lists `.agents/*` as auto-resolvable by accepting target branch, but lines 117-128 warn that `.agents/sessions/*`, `.agents/qa/*`, and `.agents/retrospective/*` must never be accepted via `--theirs` alone because doing so silently discards head branch records.

## Observations
- Contains a vendor-portability declaration in an HTML comment on line 320 explicitly acknowledging its coupling to the consumer's `.agents/` evidence tree (session immutability, QA reports, retrospectives, `HANDOFF.md`, and staging).
- Implements strict append-only evidence preservation rules derived from historical incident PR #4856 (`.agents/retrospective/2026-08-10-pr-4856-session-log-collision.md`) and references tracking issue #4751.
- Enforces a hard blocking Phase 0 check (`Phase 0: Execution Capability Precondition (BLOCKING)`) that halts execution immediately with `[BLOCKED]` if shell/Bash execution capability is unavailable, preventing hallucinated resolution plans from masquerading as actual code merges (issue #2646).
- Special plugin manifest resolution rules for `*/.claude-plugin/plugin.json` enforce ADR-092 compliance (stripping the `version` field if omitted on either side, or bumping patch version if both carry semver).
- Employs a strict priority hierarchy for intent classification: Security (1) > Bugfix (2) > Feature/Refactor (3) > Style (4), where Security is never dropped and recency/test coverage serve solely as tiebreakers within the same tier.

## Context cost
16520 bytes (approx. 4130 tokens) for `SKILL.md`. Invocation of referenced documentation `references/strategies.md` adds 9557 bytes (~2390 tokens), for a combined reference context of 26077 bytes (~6520 tokens). Including helper scripts `resolve_pr_conflicts.py` (28752 bytes) and `verify_no_conflict_markers.py` (9202 bytes), total skill package footprint is 64031 bytes (~16008 tokens).
