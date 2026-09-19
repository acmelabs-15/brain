# Plan: context scope

Amends `spec/SPEC-plain-talk.md` and `spec/SPEC-setup.md` on 2026-09-19, after two decisions by Peter: the plain-talk text follows the install's scope on every host, and brain carries its own `AGENTS.md` with the block. Evidence in the specs' amendment notes.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | `scripts/plain-talk/block.ts`, the marker replace shared by render and setup; render gains the Antigravity rule target `rules/talk-plain.md` and the in-place block target `AGENTS.md` | — | the rule frontmatter is read from a third-party test, not from Google's docs; the Antigravity install run confirms it |
| 2 | brain's own `AGENTS.md`, `CLAUDE.md` (`@AGENTS.md`) and `.gemini/settings.json` | 1 | none |
| 3 | `scripts/setup/write.ts`: no repo `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` edits; the block goes to `$CODEX_HOME/AGENTS.md` when that directory exists; `--codex-home`, `--no-codex` | 1 | a symlinked `~/.codex/AGENTS.md` must stay a symlink; tested |
| 4 | `skills/setup-brain/SKILL.md`, the setup eval cases, the specs, the capability map, the intent doc, the README and the install pages | 3 | none |

1 → 2 and 3 in parallel → 4.

## Verification checkpoints

- After 1: `bun run plain-talk:render -- --check` exits 0 on a clean tree; `bun test scripts/plain-talk`.
- After 3: `bun test scripts/setup`; a dry run on the brain repo lists no repo context file.
- After 4: `bun run check`, `bun run validate`; the Antigravity install run shows the rule active.

Done 2026-09-19. Task 1 confirmation of the Antigravity rule is on the install page after the host run.
