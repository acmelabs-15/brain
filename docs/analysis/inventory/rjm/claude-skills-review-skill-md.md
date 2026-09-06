---
package: rjm
path: .claude/skills/review/SKILL.md
type: skill
bytes: 24362
unit: inv-rjm-154
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/SKILL.md

## Purpose — required, verbatim
> "Review before merge. Stage-1 spec-compliance gate, then risk-selected Stage-2 review axes from the canonical set. analyst always runs, callers can pin extra always-on axes, and explicit deep review runs the full 15-axis set. Run after /test. Do NOT invoke code-qualities-assessment, golden-principles, or taste-lints directly for a full review; review can select them when requested or when deep review is explicit." — .claude/skills/review/SKILL.md:4

## Design intent — required
Provides the comprehensive, gated pre-merge review lifecycle phase in rjm (the sixth lifecycle phase, running after `/test` and before `/ship`). Instead of uncalibrated, blind fan-out or ad-hoc local reviews, it executes a rigorous two-stage review pipeline: Stage 1 runs a mandatory `spec-compliance` gate that short-circuits on `CRITICAL_FAIL` (while non-blocking `UNKNOWN`/`WARN` are preserved without suppressing downstream checks), followed by Stage 2 which evaluates change risk to dynamically select applicable review axes from a discovered canonical set (plus optional local quality skills and caller-pinned axes), and supports explicit full-suite deep reviews. It enforces a strict 3-round self-audit cap to prevent runaway autonomous fix loops, validates findings against the actual PR diff to prevent pre-existing code from blocking merges, merges multi-axis verdicts into a deterministic final verdict token, and generates a SHA-bound empty git marker commit (`Reviewed-By`) required by `/ship`.

## Phase — required
rjm:review

## Inputs — required
- Argument `$ARGUMENTS` containing branch name or PR number ("Review: $ARGUMENTS" — .claude/skills/review/SKILL.md:13; "If no argument, review the current branch diff against the base branch. Detect the base branch from `gh pr view --json baseRefName` or fall back to `main`." — .claude/skills/review/SKILL.md:15)
- Three-dot git diff ("Read the diff with three-dot range syntax" — .claude/skills/review/SKILL.md:69)
- Linked specifications and acceptance criteria ("linked REQ/DESIGN/TASK docs or PR-body acceptance criteria" — .claude/skills/review/SKILL.md:70)
- Context mode parameter ("CONTEXT_MODE" — .claude/skills/review/SKILL.md:70) with values `full`, `summary`, or `partial`
- Canonical axis prompt definitions:
  - `${CLAUDE_SKILL_DIR}/references/` — .claude/skills/review/SKILL.md:44
  - `.claude/skills/review/references/` — .claude/skills/review/SKILL.md:45
  - `skills/review/references/` — .claude/skills/review/SKILL.md:46
- Stage-1 spec-compliance prompt file ("references/spec-compliance.md" — .claude/skills/review/SKILL.md:193)
- Complexity tiers reference:
  - `.claude/skills/analyze/references/engineering-complexity-tiers.md` — .claude/skills/review/SKILL.md:51
  - `skills/analyze/references/engineering-complexity-tiers.md` — .claude/skills/review/SKILL.md:52
- Common verdict module:
  - `.claude/lib/ai_review_common/verdict.py` — .claude/skills/review/SKILL.md:48
  - `lib/ai_review_common/verdict.py` — .claude/skills/review/SKILL.md:49
- Chained-skill scripts:
  - `.claude/skills/{skill}/scripts/{script}` — .claude/skills/review/SKILL.md:54
  - `skills/{skill}/scripts/{script}` — .claude/skills/review/SKILL.md:55
  - `golden-principles/scripts/scan_principles.py` — .claude/skills/review/SKILL.md:53
  - `taste-lints/scripts/taste_lints.py` — .claude/skills/review/SKILL.md:53
- Current reviewed HEAD commit SHA ("REVIEWED_TIP=$(git rev-parse HEAD)" — .claude/skills/review/SKILL.md:171)

## Outputs — required
- Findings table with one row per axis ("Findings table with one row per axis:" — .claude/skills/review/SKILL.md:120)
- Merged final verdict token (`FINAL VERDICT` — .claude/skills/review/SKILL.md:140)
- Structured per-axis findings detail including `severity` (.claude/skills/review/SKILL.md:144), `category` (.claude/skills/review/SKILL.md:145), `location` (.claude/skills/review/SKILL.md:146), and `recommendation` (.claude/skills/review/SKILL.md:147)
- Scope validation adjusted findings output labeling out-of-scope files (`pre-existing - not in this PR diff` — .claude/skills/review/SKILL.md:96)
- SHA-bound empty git marker commit with `Reviewed-By` trailer on PASS verdict ("review: /review PASS marker" — .claude/skills/review/SKILL.md:174; "Reviewed-By" — .claude/skills/review/SKILL.md:160)
- Escalation to operator when round 3 yields WARN, CRITICAL_FAIL, or UNKNOWN ("escalates to the operator with every open finding (axis, verdict, location, recommendation)" — .claude/skills/review/SKILL.md:33)

## Invokes — required
- reference spec-compliance.md — .claude/skills/review/SKILL.md:193
- reference engineering-complexity-tiers.md — .claude/skills/review/SKILL.md:50
- agent general-purpose — .claude/skills/review/SKILL.md:72
- agent analyst — .claude/skills/review/SKILL.md:76
- agent architect — .claude/skills/review/SKILL.md:85
- agent qa — .claude/skills/review/SKILL.md:86
- agent security — .claude/skills/review/SKILL.md:87
- agent devops — .claude/skills/review/SKILL.md:88
- agent roadmap — .claude/skills/review/SKILL.md:89
- script validate_review_marker.py — .claude/skills/review/SKILL.md:63
- script validate_findings_scope.py — .claude/skills/review/SKILL.md:96
- script verdict.py — .claude/skills/review/SKILL.md:48
- script scan_principles.py — .claude/skills/review/SKILL.md:53
- script taste_lints.py — .claude/skills/review/SKILL.md:53
- skill code-qualities-assessment — .claude/skills/review/SKILL.md:99
- skill golden-principles — .claude/skills/review/SKILL.md:100
- skill taste-lints — .claude/skills/review/SKILL.md:101

## Invoked by — required
- command ship — .claude/commands/ship.md:2
- doc workflow-commands.md — docs/workflow-commands.md:24
- doc when-to-use.md — docs/when-to-use.md:4
- doc getting-started.md — docs/getting-started.md:78
- doc README.md — README.md:320
- script validate_review_marker.py — scripts/validation/validate_review_marker.py:51

## Concepts named — required, verbatim
- `review` — .claude/skills/review/SKILL.md:2 — defined here
- `Stage-1 spec-compliance gate` — .claude/skills/review/SKILL.md:4 — defined here
- `Stage-2 review axes` — .claude/skills/review/SKILL.md:4 — defined here
- `canonical set` — .claude/skills/review/SKILL.md:4 — defined here
- `analyst` — .claude/skills/review/SKILL.md:4 — used here
- `always-on axes` — .claude/skills/review/SKILL.md:4 — defined here
- `deep review` — .claude/skills/review/SKILL.md:4 — defined here
- `15-axis set` — .claude/skills/review/SKILL.md:4 — defined here
- `/test` — .claude/skills/review/SKILL.md:4 — used here
- `code-qualities-assessment` — .claude/skills/review/SKILL.md:4 — used here
- `golden-principles` — .claude/skills/review/SKILL.md:4 — used here
- `taste-lints` — .claude/skills/review/SKILL.md:4 — used here
- `/review` — .claude/skills/review/SKILL.md:21 — defined here
- `review before merge` — .claude/skills/review/SKILL.md:23 — defined here
- `Convergence contract` — .claude/skills/review/SKILL.md:25 — defined here
- `REQ-008-04` — .claude/skills/review/SKILL.md:25 — defined here
- `canonical axis prompts` — .claude/skills/review/SKILL.md:27 — defined here
- `spec-compliance` — .claude/skills/review/SKILL.md:29 — used here
- `architect` — .claude/skills/review/SKILL.md:29 — used here
- `qa` — .claude/skills/review/SKILL.md:29 — used here
- `security` — .claude/skills/review/SKILL.md:29 — used here
- `devops` — .claude/skills/review/SKILL.md:29 — used here
- `roadmap` — .claude/skills/review/SKILL.md:29 — used here
- `reliability` — .claude/skills/review/SKILL.md:29 — used here
- `observability` — .claude/skills/review/SKILL.md:29 — used here
- `agent-safety` — .claude/skills/review/SKILL.md:29 — used here
- `decision-rigor` — .claude/skills/review/SKILL.md:29 — used here
- `code-quality` — .claude/skills/review/SKILL.md:29 — used here
- `CRITICAL_FAIL` — .claude/skills/review/SKILL.md:29 — used here
- `UNKNOWN` — .claude/skills/review/SKILL.md:29 — used here
- `INCONCLUSIVE` — .claude/skills/review/SKILL.md:29 — used here
- `local-only skill axes` — .claude/skills/review/SKILL.md:31 — defined here
- `Self-audit round cap` — .claude/skills/review/SKILL.md:33 — defined here
- `hard stop` — .claude/skills/review/SKILL.md:33 — defined here
- `PASS` — .claude/skills/review/SKILL.md:33 — used here
- `WARN` — .claude/skills/review/SKILL.md:33 — used here
- `_DEFAULT_MAX_ROUNDS` — .claude/skills/review/SKILL.md:35 — used here
- `_DEFAULT_MAX_HOURS` — .claude/skills/review/SKILL.md:35 — used here
- `ACT` — .claude/skills/review/SKILL.md:37 — used here
- `ESCALATE` — .claude/skills/review/SKILL.md:37 — used here
- `Path resolution` — .claude/skills/review/SKILL.md:39 — defined here
- `Verdict library` — .claude/skills/review/SKILL.md:47 — defined here
- `merge_verdicts` — .claude/skills/review/SKILL.md:47 — used here
- `extract_verdict` — .claude/skills/review/SKILL.md:47 — used here
- `get_verdict_emoji` — .claude/skills/review/SKILL.md:47 — used here
- `FAIL_VERDICTS` — .claude/skills/review/SKILL.md:47 — used here
- `Complexity tiers reference` — .claude/skills/review/SKILL.md:50 — defined here
- `Chained-skill scripts` — .claude/skills/review/SKILL.md:53 — defined here
- `Reviewed-By` — .claude/skills/review/SKILL.md:63 — used here
- `/ship` — .claude/skills/review/SKILL.md:63 — used here
- `verdict token` — .claude/skills/review/SKILL.md:67 — defined here
- `structured findings` — .claude/skills/review/SKILL.md:67 — defined here
- `merged verdict` — .claude/skills/review/SKILL.md:67 — defined here
- `three-dot range syntax` — .claude/skills/review/SKILL.md:69 — used here
- `CONTEXT_MODE` — .claude/skills/review/SKILL.md:70 — defined here
- `general-purpose` — .claude/skills/review/SKILL.md:72 — used here
- `short-circuit` — .claude/skills/review/SKILL.md:73 — defined here
- `SKIPPED` — .claude/skills/review/SKILL.md:73 — used here
- `FINAL VERDICT` — .claude/skills/review/SKILL.md:73 — defined here
- `Tier 1-5` — .claude/skills/review/SKILL.md:76 — used here
- `When This Axis Applies` — .claude/skills/review/SKILL.md:80 — used here
- `Analysis Focus Areas` — .claude/skills/review/SKILL.md:80 — used here
- `Output Schema` — .claude/skills/review/SKILL.md:83 — used here
- `validate_findings_scope.py` — .claude/skills/review/SKILL.md:96 — defined here
- `pre-existing - not in this PR diff` — .claude/skills/review/SKILL.md:96 — defined here
- `GP-001` — .claude/skills/review/SKILL.md:100 — used here
- `GP-002` — .claude/skills/review/SKILL.md:100 — used here
- `GP-003` — .claude/skills/review/SKILL.md:100 — used here
- `GP-004` — .claude/skills/review/SKILL.md:100 — used here
- `GP-005` — .claude/skills/review/SKILL.md:100 — used here
- `GP-006` — .claude/skills/review/SKILL.md:100 — used here
- `GP-007` — .claude/skills/review/SKILL.md:100 — used here
- `GP-008` — .claude/skills/review/SKILL.md:100 — used here
- `REJECTED` — .claude/skills/review/SKILL.md:103 — used here
- `NEEDS_REVIEW` — .claude/skills/review/SKILL.md:103 — used here
- `NON_COMPLIANT` — .claude/skills/review/SKILL.md:103 — used here
- `COMPLIANT` — .claude/skills/review/SKILL.md:103 — used here
- `FAIL` — .claude/skills/review/SKILL.md:104 — used here
- `PARTIAL` — .claude/skills/review/SKILL.md:104 — used here
- `Vendored install` — .claude/skills/review/SKILL.md:107 — defined here
- `REQ-008-06` — .claude/skills/review/SKILL.md:107 — defined here
- `UNKNOWN handling` — .claude/skills/review/SKILL.md:111 — defined here
- `CRITICAL` — .claude/skills/review/SKILL.md:144 — defined here
- `IMPORTANT` — .claude/skills/review/SKILL.md:144 — defined here
- `SUGGESTION` — .claude/skills/review/SKILL.md:144 — defined here
- `SHA-bound PASS marker` — .claude/skills/review/SKILL.md:151 — defined here
- `MARKER_TRAILER_KEY` — .claude/skills/review/SKILL.md:160 — used here
- `marker commit` — .claude/skills/review/SKILL.md:169 — defined here
- `Deep review is the strict superset of CI` — .claude/skills/review/SKILL.md:186 — defined here
- `Drift fails closed` — .claude/skills/review/SKILL.md:187 — defined here
- `UNKNOWN is information` — .claude/skills/review/SKILL.md:188 — defined here
- `Vendored survival` — .claude/skills/review/SKILL.md:189 — defined here

## Structure
- # Review — .claude/skills/review/SKILL.md:11
- ## Triggers — .claude/skills/review/SKILL.md:17
- ## Convergence contract (REQ-008-04) — .claude/skills/review/SKILL.md:25
- ## Path resolution (harness-agnostic) — .claude/skills/review/SKILL.md:39
- ## Scripts — .claude/skills/review/SKILL.md:59
- ## Process — .claude/skills/review/SKILL.md:65
- ## Vendored install (REQ-008-06) — .claude/skills/review/SKILL.md:107
- ## UNKNOWN handling — .claude/skills/review/SKILL.md:111
- ## Output — .claude/skills/review/SKILL.md:118
- ## Write the SHA-bound PASS marker (Issue #1938) — .claude/skills/review/SKILL.md:151
- ## Principles — .claude/skills/review/SKILL.md:184
- ## Verification — .claude/skills/review/SKILL.md:191
- ## Refs — .claude/skills/review/SKILL.md:201

## Scripts — required if type is script or the skill ships scripts
For `.claude/skills/review/scripts/validate_review_marker.py`:
- path: `.claude/skills/review/scripts/validate_review_marker.py`, language: Python 3, lines: 438
- documented invocation:
  - "scripts/validate_review_marker.py" — .claude/skills/review/SKILL.md:63
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --repo-root sources/rjm`
  abridged stdout:
  ```
  [FAIL] HEAD (2abef31dc681) changes files; a review marker must be an empty commit whose Reviewed-By trailer names its parent. Re-run /review after the code tip is ready.
  ```
- **actual exit code:** 1
- documented exit codes:
  - "`0` valid marker, `1` missing or stale marker, `2` config error" — .claude/skills/review/SKILL.md:63
- actual exit paths in code:
  - "exit_code=2" — .claude/skills/review/scripts/validate_review_marker.py:233
  - "exit_code=2" — .claude/skills/review/scripts/validate_review_marker.py:240
  - "exit_code=2" — .claude/skills/review/scripts/validate_review_marker.py:257
  - "exit_code=1" — .claude/skills/review/scripts/validate_review_marker.py:264
  - "exit_code=1" — .claude/skills/review/scripts/validate_review_marker.py:285
  - "exit_code=2" — .claude/skills/review/scripts/validate_review_marker.py:299
  - "exit_code=1" — .claude/skills/review/scripts/validate_review_marker.py:309
  - "exit_code=2" — .claude/skills/review/scripts/validate_review_marker.py:337
  - "exit_code=2" — .claude/skills/review/scripts/validate_review_marker.py:356
  - "exit_code=1" — .claude/skills/review/scripts/validate_review_marker.py:363
  - "exit_code=1" — .claude/skills/review/scripts/validate_review_marker.py:374
  - "exit_code=0" — .claude/skills/review/scripts/validate_review_marker.py:384
  - "return 2" — .claude/skills/review/scripts/validate_review_marker.py:427
- for validators/gates: can it exit non-zero? yes (exits 1 on non-marker commit, exits 2 on config/git error). Does it fail on the source repo's own default branch? yes (exits 1 because HEAD is a code commit, not an empty review marker commit).
- does the output match what the documentation claims? Yes, validates the presence and SHA-binding of empty marker commit trailers.

For `.claude/skills/review/scripts/validate_findings_scope.py`:
- path: `.claude/skills/review/scripts/validate_findings_scope.py`, language: Python 3, lines: 322
- documented invocation:
  - "python3 <validate_findings_scope.py> --worktree <WORKTREE_PATH> --base-branch <BASE_BRANCH> --text <AXIS_TEXT> --emit-adjusted-text" — .claude/skills/review/SKILL.md:96
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/review/scripts/validate_findings_scope.py --worktree sources/rjm --base-branch HEAD~1 --text "location: non_existent_file.py:10\nFinal Verdict: CRITICAL_FAIL" --emit-adjusted-text`
  abridged stdout:
  ```
  OUT-OF-SCOPE (2 location(s) not in PR diff):
    non_existent_file.py
    non_existent_file.py:10\nFinal
  location: non_existent_file.py:10\nFinal Verdict: CRITICAL_FAIL [pre-existing - not in this PR diff]
  ```
- **actual exit code:** 1
- documented exit codes:
  - "When the script exits 1 (out-of-scope locations found)" — .claude/skills/review/SKILL.md:96
  - "When the script exits 0 (all in scope, or diff empty/unavailable)" — .claude/skills/review/SKILL.md:96
- actual exit paths in code:
  - "return 0" — .claude/skills/review/scripts/validate_findings_scope.py:301
  - "return 1" — .claude/skills/review/scripts/validate_findings_scope.py:315
  - "return 0" — .claude/skills/review/scripts/validate_findings_scope.py:317
- for validators/gates: can it exit non-zero? yes (exits 1 when findings reference files outside the diff). Does it fail on the source repo's own default branch? On default branch with empty diff it exits 0 (graceful degradation by design); when evaluated against a commit range with out-of-scope findings it exits 1.
- does the output match what the documentation claims? Yes, annotates out-of-scope findings with `[pre-existing - not in this PR diff]` and exits 1.

## Defects — required
- missing-path · .claude/skills/review/SKILL.md:48 · Candidate verdict module path `.claude/lib/ai_review_common/verdict.py` does not exist on disk (exists at `scripts/ai_review_common/verdict.py` and `src/copilot-cli/lib/ai_review_common/verdict.py`).
- missing-path · .claude/skills/review/SKILL.md:51 · Candidate complexity reference `.claude/skills/analyze/references/engineering-complexity-tiers.md` does not exist on disk (exists only under `src/copilot-cli/skills/analyze/references/engineering-complexity-tiers.md`).
- missing-path · .claude/skills/review/SKILL.md:54 · Chained-skill script paths under `.claude/skills/{skill}/scripts/{script}` do not exist on disk for `golden-principles` and `taste-lints` (exist only under `src/copilot-cli/skills/`).
- missing-path · .claude/skills/review/SKILL.md:35 · Canonical round cap script `.claude/skills/github/scripts/pr/check_pr_round_cap.py` does not exist on disk (exists only under `src/copilot-cli/skills/github/scripts/pr/check_pr_round_cap.py`).
- missing-path · .claude/skills/review/SKILL.md:205 · Skill chain paths `.claude/skills/{code-qualities-assessment,golden-principles,taste-lints}/` do not exist on disk (exist only under `src/copilot-cli/skills/`).
- doc-drift · .claude/skills/review/SKILL.md:4 · README.md:320 and docs/getting-started.md:78 document `/review` as a 5-axis review ("Five-axis review: architecture, security, quality, tests, standards"), whereas SKILL.md:4 defines a 15-axis review architecture (Stage-1 spec-compliance gate, 11 Stage-2 canonical axes, and 3 local skill axes).

## Observations
- **Discovered vs. Hardcoded Axes**: `/review` uses a directory-discovery model (`references/*.md`) allowing new review axes to be added without modifying the skill body.
- **Fail-Safe UNKNOWN Handling**: Unlike traditional gates where an unparseable or crashed check fails the entire pipeline or is silently ignored, `/review` distinguishes `CRITICAL_FAIL` from `UNKNOWN`/`WARN`, allowing Stage 2 to proceed if Stage 1 spec criteria cannot be located so real downstream issues (security, qa) are not suppressed.
- **Diff Scoping & Anti-Regression Protection**: Uses `validate_findings_scope.py` to downgrade blocking findings on pre-existing code to `WARN`, preventing out-of-scope code from blocking a PR merge while preserving the findings as suggestions.
- **Git-Native Trailer Verification**: Implements empty marker commits with `Reviewed-By` trailers binding directly to parent commit SHAs, solving the circular hash dilemma without needing external or proprietary database state.
- **Harness Portability vs. Layout Drift**: The file explicitly documents portability between Claude Code (`.claude/`) and vendored plugin installs (`src/copilot-cli/`), but in this repo clone the `.claude/` implementations of several referenced helper skills/scripts are missing, relying on the vendored fallback.

## Context cost
24,362 bytes for the skill itself; 201,726 bytes total including the 12 canonical reference prompts, the 2 shipped validator scripts, and helper modules. Approximately 50,400 tokens in full deep-review mode, or ~12,500 tokens in single-axis mode.
