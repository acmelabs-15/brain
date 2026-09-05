---
package: rjm
path: .claude/commands/ship.md
type: command
bytes: 12394
unit: inv-rjm-74
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/ship.md

## Purpose — required, verbatim
> "Ship it. Pre-flight validation, CI check, and PR creation. Run after /review." — .claude/commands/ship.md:2

## Design intent — required
Final deployment phase in rjm's lifecycle pipeline, executing pre-flight validation, CI checks, and pull request generation. It dynamically branches execution based on detected VCS host (`github` vs. `ado`) and ownership mode (`owner` vs. `contributor`), executes four pre-flight checks (pipeline health, security posture, SHA-bound review verification via `validate_review_marker.py`, and test execution), and enforces non-mutation safeguards that prevent contributors from polluting shared branches with review marker commits.

## Phase — required
rjm:ship

## Inputs — required
- Optional target branch from argument ("argument-hint: target-branch" — .claude/commands/ship.md:4; "Default target is main unless specified. If $ARGUMENTS names a different branch, use that as the target." — .claude/commands/ship.md:11)
- Context file `@CLAUDE.md` (.claude/commands/ship.md:7)
- Origin remote URL ("remote_url=\"$(git remote get-url origin 2>/dev/null || true)\"" — .claude/commands/ship.md:22)
- Git status and current branch HEAD SHA ("First confirm" — .claude/commands/ship.md:80)
- Host PR queries via gh or az CLI tools ("Query the host:" — .claude/commands/ship.md:45)

## Outputs — required
- Ship report with host, mode, and verification results ("Ship report:" — .claude/commands/ship.md:135)
- Pull request opened on GitHub or Azure DevOps ("run /validate-pr-description to validate PR metadata, then run /push-pr to commit, push, and open the GitHub PR." — .claude/commands/ship.md:120)
- Review marker validation report ("The validator exits" — .claude/commands/ship.md:109)

## Invokes — required
- doc CLAUDE.md — .claude/commands/ship.md:7
- agent devops — .claude/commands/ship.md:60
- skill pipeline-validator — .claude/commands/ship.md:63
- skill security-scan — .claude/commands/ship.md:78
- script validate_review_marker.py — .claude/commands/ship.md:84
- command validate-pr-description — .claude/commands/ship.md:120
- command push-pr — .claude/commands/ship.md:120
- script get_pr_checks.py — .claude/commands/ship.md:123

## Invoked by — required
- script validate_review_marker.py — scripts/validation/validate_review_marker.py:52

## Concepts named — required, verbatim
- `Mode Detection` — .claude/commands/ship.md:13 — defined here
- `VCS host detection` — .claude/commands/ship.md:17 — defined here
- `PR ownership and existence detection` — .claude/commands/ship.md:40 — defined here
- `Branch ownership` — .claude/commands/ship.md:44 — defined here
- `mode=contributor` — .claude/commands/ship.md:51 — defined here
- `mode=owner` — .claude/commands/ship.md:52 — defined here
- `Pre-flight Checks` — .claude/commands/ship.md:58 — defined here
- `Pipeline health` — .claude/commands/ship.md:62 — defined here
- `Security posture` — .claude/commands/ship.md:78 — defined here
- `Reviewed on this SHA` — .claude/commands/ship.md:79 — defined here
- `marker commit` — .claude/commands/ship.md:80 — used here
- `Reviewed-By` — .claude/commands/ship.md:109 — used here
- `Tests passing` — .claude/commands/ship.md:111 — defined here
- `RESULT: VALIDATED` — .claude/commands/ship.md:122 — defined here

## Structure
- ## Mode Detection — .claude/commands/ship.md:13
- ### 1. VCS host detection — .claude/commands/ship.md:17
- ### 2. PR ownership and existence detection — .claude/commands/ship.md:40
- ## Pre-flight Checks — .claude/commands/ship.md:58
- ## Process — .claude/commands/ship.md:115
- ## Principles — .claude/commands/ship.md:126
- ## Output — .claude/commands/ship.md:133

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Rigorous dual-host branching (`github` vs. `ado`) and dual-mode permission model (`owner` vs. `contributor`).
- Protects shared branches in contributor mode by prohibiting the creation of review marker commits or direct PR creation.
- Solves circular dependency on initial PR creation via pipeline validation deferral (`pr=none` -> `DEFERRED->PASS`/`DEFERRED->FAIL`).

## Context cost
12,394 bytes. Approximately 3,100 tokens.
