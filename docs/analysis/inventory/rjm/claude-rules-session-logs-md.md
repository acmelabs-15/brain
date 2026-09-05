---
package: rjm
path: .claude/rules/session-logs.md
type: doc
bytes: 4480
unit: inv-rjm-75
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/rules/session-logs.md, sha256: a4592aa8702246ac5770c118f5e5e3e4c31699ce9fede52273a865384d87208e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/rules/session-logs.md

## Purpose — required, verbatim
> "This rule covers the mechanics that still apply to a log that already exists on your branch (carried over from before this change, or cherry-picked from an older one)." — .claude/rules/session-logs.md:13-15

## Design intent — required
Establishes operating rules and maintenance constraints for legacy session logs (`.agents/sessions/*.json`). Following the formal discontinuation of new session log creation, existing logs remain in the repository as immutable historical records read by retrospectives, memory extraction, and compaction hooks. This rule prevents contributors from creating redundant session logs while providing precise procedural guardrails for branches that still carry a legacy log—specifically forbidding `git commit --amend` and mandating follow-up commits for `endingCommit` to avoid orphaning commit SHAs and tripping costly pre-push CI test suites.

## Phase — required
cross-phase

## Inputs — required
- Staged or existing session logs under `.agents/sessions/*.json` (.claude/rules/session-logs.md:11, 29).
- Schema definition `.agents/schemas/session-log.schema.json` (.claude/rules/session-logs.md:8, 73).
- Git hook policy script `scripts/validation/git_hook_policy.py session` (.claude/rules/session-logs.md:32, 74).
- Session log validator `scripts/validate_session_json.py` (.claude/rules/session-logs.md:38, 76).

## Outputs — required
- Follow-up commits populating `endingCommit` with valid reachability (.claude/rules/session-logs.md:37-41, 60-69).
- Regenerated session episodes via `extract_session_episode.py <log> --preserve` (.claude/rules/session-logs.md:57-58).
- Clean validation verdicts from `session-policy` pre-commit hooks and pre-push ratchets (.claude/rules/session-logs.md:31-35, 52-56).

## Invokes — required
- doc .agents/schemas/session-log.schema.json — .claude/rules/session-logs.md:8
- skill retrospective — .claude/rules/session-logs.md:12
- script scripts/validation/instruction_budget.py — .claude/rules/session-logs.md:19
- script scripts/validation/git_hook_policy.py — .claude/rules/session-logs.md:32
- script validate_session_json.py — .claude/rules/session-logs.md:38
- script session_scope.py — .claude/rules/session-logs.md:42
- script extract_session_episode.py — .claude/rules/session-logs.md:58

## Invoked by — required
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:2413
- doc autonomous-issue-development — docs/autonomous-issue-development.md:457
- doc technical-guardrails — docs/technical-guardrails.md:277

## Concepts named — required, verbatim
- `Session Log Mechanics` — .claude/rules/session-logs.md:6 — defined here
- `Do not create a new session log` — .claude/rules/session-logs.md:27 — defined here
- `session-policy` — .claude/rules/session-logs.md:31 — used here
- `validate-if-present gate` — .claude/rules/session-logs.md:32 — defined here
- `endingCommit` — .claude/rules/session-logs.md:37 — defined here
- `episode extractor` — .claude/rules/session-logs.md:46 — used here
- `episode-store` — .claude/rules/session-logs.md:51 — used here

## Structure
- # Session Log Mechanics — .claude/rules/session-logs.md:6
- ## MUST — .claude/rules/session-logs.md:25
- ## References — .claude/rules/session-logs.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/rules/session-logs.md:21-23 — documents that generator currently ships this rule to the plugin with applyTo: '**' rather than .agents/** due to issue #4317 filtering .agents/** as internal-only.
- missing-path · scripts/extract_session_episode.py — .claude/rules/session-logs.md:58 — references extract_session_episode.py as a bare script path, but no standalone script exists under scripts/ (lives at tests/skills/memory/test_extract_session_episode.py).

## Observations
- Scoped to `.agents/**` files with under 500 bytes of instruction headroom against `instruction_budget.py`.
- Formulates strict hygiene rules for branches carrying legacy session logs: `endingCommit` must be recorded in a follow-up commit (not an amended commit) and re-pointed after rebasing to prevent expensive CI failures (~18 minute pre-push test suites).
- Explicitly states session logs are historical artifacts that are no longer created for commits, pushes, or PRs.

## Context cost
4480 bytes (approx. 1120 tokens).
