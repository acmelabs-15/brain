---
package: rjm
path: .claude/commands/push-pr.md
type: command
bytes: 3836
unit: inv-rjm-74
in_scope_via: .claude/commands/ship.md
aliases: []
memo_inputs:
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/push-pr.md

## Purpose — required, verbatim
> "Commit, push, and open a PR" — .claude/commands/push-pr.md:2

## Design intent — required
Automates git branching, staging, conventional commit creation, remote push, PR template adaptation, and pull request opening on GitHub. It uses an identity-hardened python invocation (`python3 -I`) with a secure scratch path allocator (`.agents/scratch/pr-body-*.md`), enforces acceptance criteria checklist conventions required by the downstream Validate Spec Coverage CI job, and requires execution within a single tool-use turn.

## Phase — required
cross-phase

## Inputs — required
- Current git status ("Current git status: !`git status`" — .claude/commands/push-pr.md:14)
- Current git diff ("Current git diff (staged and unstaged changes): !`git diff HEAD`" — .claude/commands/push-pr.md:15)
- Current branch ("Current branch: !`git branch --show-current`" — .claude/commands/push-pr.md:16)
- PR template file ("Read @.github/PULL_REQUEST_TEMPLATE.md" — .claude/commands/push-pr.md:25)

## Outputs — required
- New git branch pushed to origin ("Push the branch to origin" — .claude/commands/push-pr.md:24)
- PR body scratch file at `.agents/scratch/pr-body-*.md` ("Edit is scoped to .agents/scratch/pr-body-*.md" — .claude/commands/push-pr.md:5)
- Open GitHub pull request created via script ("Create a pull request using the new_pr skill script:" — .claude/commands/push-pr.md:43)

## Invokes — required
- template PULL_REQUEST_TEMPLATE.md — .claude/commands/push-pr.md:25
- script new_pr.py — .claude/commands/push-pr.md:29

## Invoked by — required
- command /push-pr — .claude/commands/ship.md:120

## Concepts named — required, verbatim
- `Push PR Command` — .claude/commands/push-pr.md:10 — defined here
- `conventional commit` — .claude/commands/push-pr.md:23 — used here
- `secure path allocator` — .claude/commands/push-pr.md:26 — defined here
- `Acceptance criteria` — .claude/commands/push-pr.md:42 — used here
- `Validate Spec Coverage` — .claude/commands/push-pr.md:42 — used here
- `vendor-portability` — .claude/commands/push-pr.md:45 — defined here

## Structure
- # Push PR Command — .claude/commands/push-pr.md:10
- ## Context — .claude/commands/push-pr.md:12
- ## Your task — .claude/commands/push-pr.md:18

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Security hardening: uses `python3 -I` (isolated mode) to prevent sys.path injection and scopes file edits to `.agents/scratch/pr-body-*.md`.
- Requires the entire sequence (branching, pushing, template adaptation, and PR creation) to execute in a single response turn.

## Context cost
3,836 bytes. Approximately 960 tokens.
