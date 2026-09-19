# Plan: setup

Spec: `spec/SPEC-setup.md` (approved 2026-09-19). Depends on plain-talk, built: the block is `plain-talk/AGENTS-block.md`.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | `scripts/setup/write.ts` and its tests: the block into `AGENTS.md`, imports into `CLAUDE.md` and `GEMINI.md`, `docs/agents/domain.md`, `--dry-run`, idempotent | — | replacing between markers must never eat text outside them |
| 2 | The skill: `skills/setup-brain/SKILL.md`, its `agents/openai.yaml`, and `skills/setup-brain/domain.md`, the consumer-rules template adapted from matt's | 1 | a user-invoked skill needs both host flags, Claude's and Codex's |
| 3 | Wiring: the `setup:write` package script, and the validators still pass with 30 skills | 1, 2 | none |

Sequential 1 to 3.

## Verification checkpoints

- After 1: tests pass with no network; a second run on every fixture is byte-identical.
- After 3: `bun run check` and `bun run validate` pass.
- Manual, later: spec success criterion 3, a Codex session in a set-up repo answers with one line of context first, run by Peter and recorded on the Codex install page.

## Not in this plan

The conversation quality of the skill, which `evals` owns, and any tracker choice, which `lifecycle` owns.
