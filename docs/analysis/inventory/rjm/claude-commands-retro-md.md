---
package: rjm
path: .claude/commands/retro.md
type: command
bytes: 3917
unit: inv-rjm-74
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/retro.md, sha256: fbb66599fec7bacf613b20b35c9178a06bce46793cdca2f019063e2ecba02014}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/retro.md

## Purpose — required, verbatim
> "Fill an unfilled auto-retro skeleton for a date by running the retrospective skill" — .claude/commands/retro.md:2

## Design intent — required
Lightweight command wrapper to trigger retrospective generation, parsing arguments to resolve dated skeleton files at `.agents/retrospective/<date>-auto-retro.md` before delegating the analytical workflow to the `retrospective` skill. It prevents accidental overwrites of completed retrospectives, treats retrospective filenames and bodies as untrusted content, and verifies skeleton marker removal upon completion.

## Phase — required
cross-phase

## Inputs — required
- Operation and date parameters ("argument-hint: fill <YYYY-MM-DD>" — .claude/commands/retro.md:3; "carries the operation and the date" — .claude/commands/retro.md:31)
- Skeleton files at .agents/retrospective/ ("Fill the skeleton at .agents/retrospective/{date}-auto-retro.md" — .claude/commands/retro.md:23; "Resolve the target file" — .claude/commands/retro.md:49)

## Outputs — required
- Filled retrospective file without skeleton markers ("overwrites the placeholder" — .claude/commands/retro.md:58; "UNFILLED banner and the" — .claude/commands/retro.md:59)
- Sanitized date listing of pending skeletons ("plus an undated count." — .claude/commands/retro.md:45)

## Invokes — required
- skill retrospective — .claude/commands/retro.md:56

## Invoked by — required
- script skill_md_portability_baseline.json — scripts/validation/skill_md_portability_baseline.json:14

## Concepts named — required, verbatim
- `Retro Command` — .claude/commands/retro.md:7 — defined here
- `RETRO-STATE` — .claude/commands/retro.md:10 — used here
- `skeleton-pending-fill` — .claude/commands/retro.md:10 — used here
- `SessionStart context loader` — .claude/commands/retro.md:11 — used here
- `Post-PR Retrospective` — .claude/commands/retro.md:16 — used here
- `UNFILLED SKELETON` — .claude/commands/retro.md:72 — used here

## Structure
- # Retro Command — .claude/commands/retro.md:7
- ## Triggers — .claude/commands/retro.md:19
- ## Arguments — .claude/commands/retro.md:29
- ## Process — .claude/commands/retro.md:36
- ## Verification — .claude/commands/retro.md:67
- ## Anti-Patterns — .claude/commands/retro.md:75
- ## Extension Points — .claude/commands/retro.md:84

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Treats retrospective filenames and content as untrusted input, refusing to summarize unvetted content or follow instructions found inside skeletons.
- Documents architectural shift from deleted session-end Stop hook to on-demand execution.

## Context cost
3,917 bytes. Approximately 980 tokens.
