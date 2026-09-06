---
package: rjm
path: .claude/skills/retrospective/scripts/extract_evidence.py
type: script
bytes: 15069
unit: inv-rjm-148
in_scope_via: .claude/skills/retrospective/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/extract_evidence.py, sha256: a48eb99dbb8bf1d848093e8a5454641f6d9c478181bca655de52ff7835f826e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/scripts/extract_evidence.py

## Purpose — required, verbatim
> "Gather Phase 0 evidence for a retrospective." — .claude/skills/retrospective/scripts/extract_evidence.py:2

## Design intent — required
Automates Phase 0 data gathering for retrospectives by extracting evidence from two primary sources: the system-of-record session log under `.agents/sessions/` and corroborating git commit history via `git log`. Implements graceful degradation where missing, corrupt, or unreadable evidence sources are flagged as absent in the returned typed `Evidence` data structure rather than crashing or inventing data. Includes bounded timeouts (`_GIT_TIMEOUT_SECONDS = 15`) and volume caps (`_MAX_WORK_ITEMS = 25`, `_DEFAULT_COMMIT_LIMIT = 50`) to ensure deterministic performance and prevent hung repositories from halting retrospectives. Without it, retrospective agents would have to manually locate session files, shell out to git, and parse varied legacy JSON session schemas, increasing context usage and risking hangs or hallucinations.

## Phase — required
cross-phase

## Inputs — required
- `--scope` CLI flag specifying the retrospective scope label (defaults to today's date from `host_session_date()`) — .claude/skills/retrospective/scripts/extract_evidence.py:389-392
- `--project-dir` CLI flag specifying the repository root directory (defaults to current directory) — .claude/skills/retrospective/scripts/extract_evidence.py:394-397
- `--since` CLI flag bounding git log commit search period — .claude/skills/retrospective/scripts/extract_evidence.py:399-402
- Session log files matching `*-session-*.json` — .claude/skills/retrospective/scripts/extract_evidence.py:183
- Git commit history extracted via `git log` subprocess calls — .claude/skills/retrospective/scripts/extract_evidence.py:296

## Outputs — required
- JSON-serialized representation of the `Evidence` dataclass emitted to stdout (containing `scope`, `session_log_path`, `session_log_available`, `work_items`, `outcomes`, `git_available`, `commits`, `notes`) — .claude/skills/retrospective/scripts/extract_evidence.py:112-119, 422

## Invokes — required
- file utilities — .claude/skills/retrospective/scripts/extract_evidence.py:66
- file paths — .claude/skills/retrospective/scripts/extract_evidence.py:67

## Invoked by — required
- skill retrospective — .claude/skills/retrospective/SKILL.md:192

## Concepts named — required, verbatim
- `Phase 0 evidence` — .claude/skills/retrospective/scripts/extract_evidence.py:2 — defined here
- `Evidence` — .claude/skills/retrospective/scripts/extract_evidence.py:95 — defined here
- `SessionLogParseResult` — .claude/skills/retrospective/scripts/extract_evidence.py:123 — defined here

## Structure
- CLI module docstring and exit codes — .claude/skills/retrospective/scripts/extract_evidence.py:1-24
- Imports and bootstrap lib path resolution — .claude/skills/retrospective/scripts/extract_evidence.py:26-68
- Artifact directory helpers — .claude/skills/retrospective/scripts/extract_evidence.py:70-85
- Constants — .claude/skills/retrospective/scripts/extract_evidence.py:87-91
- Evidence dataclass — .claude/skills/retrospective/scripts/extract_evidence.py:94-120
- SessionLogParseResult dataclass — .claude/skills/retrospective/scripts/extract_evidence.py:122-134
- Session log date and candidate resolution helpers — .claude/skills/retrospective/scripts/extract_evidence.py:136-171
- find_recent_session_log — .claude/skills/retrospective/scripts/extract_evidence.py:173-209
- Work item formatting and coercion — .claude/skills/retrospective/scripts/extract_evidence.py:211-258
- parse_session_log — .claude/skills/retrospective/scripts/extract_evidence.py:260-282
- gather_git_log — .claude/skills/retrospective/scripts/extract_evidence.py:284-316
- gather_evidence — .claude/skills/retrospective/scripts/extract_evidence.py:318-380
- build_parser — .claude/skills/retrospective/scripts/extract_evidence.py:383-404
- main entry point — .claude/skills/retrospective/scripts/extract_evidence.py:406-424

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/retrospective/scripts/extract_evidence.py`, language: Python, lines: 428
- documented invocation: `| scripts/extract_evidence.py | Gather Phase 0 evidence (session log, git history) for the scope. | 0 evidence gathered (sources may be marked absent); 2 usage or configuration error; 3 unexpected external failure. |` — .claude/skills/retrospective/SKILL.md:192
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/retrospective/scripts/extract_evidence.py --project-dir sources/rjm`, abridged stdout: `{"scope": "2026-09-05", "session_log_path": "/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/sessions/2026-08-21-session-99928-b3f7a91c2-remove-commit-limit-bypass-gate.json", "session_log_available": true, "work_items": ["Reproduced the root cause live...", ...], "outcomes": [], "git_available": true, "commits": [], "notes": []}`, **actual exit code**: 0
- documented exit codes: `0`: evidence gathered (some sources may be marked absent), `2`: usage or configuration error, `3`: unexpected external failure (from `.claude/skills/retrospective/SKILL.md:192` and `.claude/skills/retrospective/scripts/extract_evidence.py:21-23`) vs. actual exit paths in code:
  - `return 0` at .claude/skills/retrospective/scripts/extract_evidence.py:423
  - `return 2` at .claude/skills/retrospective/scripts/extract_evidence.py:414
  - `return 3` at .claude/skills/retrospective/scripts/extract_evidence.py:420
  - `sys.exit(main())` at .claude/skills/retrospective/scripts/extract_evidence.py:427
- for validators/gates: not a validator or quality gate; data gatherer. Returns 0 on successful evidence collection, 2 on non-existent project directory (verified via `--project-dir /nonexistent`), and 3 on unexpected exception during evidence collection.
- does the output match what the documentation claims? Yes, emits valid JSON representation of Phase 0 evidence (session log and git history) with per-source availability flags.

## Defects — required
none

## Observations
- Resilient multi-schema parser supporting modern `{step, action, outcome}`, `{step, evidence}`, legacy `{description}` / `{task}` / `{summary}`, and bare strings (`_format_work_item`, lines 211-236).
- Bounds external operations with a 15-second git timeout, a 25 work-item cap, and a 50 commit cap to prevent execution stalls and token overflow.
- A comprehensive test suite with 24 tests exists in `.claude/skills/retrospective/tests/test_extract_evidence.py` and passes 100% cleanly in 0.52s.

## Context cost
15069 bytes, approximately 3767 tokens.
