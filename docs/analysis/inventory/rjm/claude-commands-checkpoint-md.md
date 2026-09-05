---
package: rjm
path: .claude/commands/checkpoint.md
type: command
bytes: 7411
unit: inv-rjm-74
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/checkpoint.md

## Purpose — required, verbatim
> "Write a timestamped mid-session checkpoint snapshot of decisions, progress, and next actions to .agents/checkpoints/, then link it from the active session log." — .claude/commands/checkpoint.md:2

## Design intent — required
Provides a human-triggered mid-session state capture mechanism that writes a durable, timestamped markdown snapshot of decisions, completed work, pending tasks, open questions, and next actions to `.agents/checkpoints/`. It enforces mandatory secret redaction prior to write and links the resulting snapshot from the active session log JSON via validate-first mutation, preventing context loss across long sessions without mutating git commits.

## Phase — required
cross-phase

## Inputs — required
- Optional short label from argument ("argument-hint: optional-short-label" — .claude/commands/checkpoint.md:3; "Optional label for this checkpoint: $ARGUMENTS" — .claude/commands/checkpoint.md:14)
- Current branch via git ("git branch --show-current" — .claude/commands/checkpoint.md:54)
- Current UTC timestamp via date ("date -u +%Y%m%d-%H%M%S" — .claude/commands/checkpoint.md:46)
- Active session log candidates ("files and sort by filename descending." — .claude/commands/checkpoint.md:55)
- Redaction script ("python3 scripts/redact_secrets.py" — .claude/commands/checkpoint.md:123)

## Outputs — required
- Redacted markdown checkpoint file `CHECKPOINT-YYYYMMDD-HHMMSS-<slug>.md` at `.agents/checkpoints/` ("CHECKPOINT-YYYYMMDD-HHMMSS-<slug>.md" — .claude/commands/checkpoint.md:71)
- Updated session log JSON with appended `checkpoints` array metadata ("checkpoints" — .claude/commands/checkpoint.md:135)

## Invokes — required
- script redact_secrets.py — .claude/commands/checkpoint.md:4

## Invoked by — required
- script skill_md_portability_baseline.json — scripts/validation/skill_md_portability_baseline.json:4

## Concepts named — required, verbatim
- `Checkpoint Command` — .claude/commands/checkpoint.md:7 — defined here
- `ISO 8601 UTC` — .claude/commands/checkpoint.md:49 — used here
- `active session log` — .claude/commands/checkpoint.md:52 — used here
- `session.branch` — .claude/commands/checkpoint.md:59 — used here
- `session.objective` — .claude/commands/checkpoint.md:63 — used here
- `filename slug` — .claude/commands/checkpoint.md:66 — defined here
- `collision loop` — .claude/commands/checkpoint.md:75 — defined here
- `Redact secrets` — .claude/commands/checkpoint.md:121 — defined here
- `validate-first` — .claude/commands/checkpoint.md:144 — defined here

## Structure
- # Checkpoint Command — .claude/commands/checkpoint.md:7
- ## Triggers — .claude/commands/checkpoint.md:16
- ## Process — .claude/commands/checkpoint.md:23
- ### Phase 1: Build checkpoint path — .claude/commands/checkpoint.md:25
- ### Phase 2: Build and redact checkpoint — .claude/commands/checkpoint.md:30
- ### Phase 3: Persist and link — .claude/commands/checkpoint.md:35
- ## Steps — .claude/commands/checkpoint.md:41
- ## Verification — .claude/commands/checkpoint.md:153
- ## Anti-Patterns — .claude/commands/checkpoint.md:161
- ## Extension Points — .claude/commands/checkpoint.md:169

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces secret redaction via `scripts/redact_secrets.py` prior to writing durable files; fails fast if the redactor is unavailable.
- Session log mutations use a strict validate-first step with `python3 -m json.tool` from stdin before writing.

## Context cost
7,411 bytes. Approximately 1,850 tokens.
