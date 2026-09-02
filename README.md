# brain

A development lifecycle for Claude Code, delivered as one plugin.

## Layout

```
agents/       agent definitions
commands/     slash commands
skills/       skills, one directory each
docs/
  analysis/   source analysis and verification
  decisions/  decision log
  plan/       method, state, glossary, lifecycle specification
```

`agents/`, `commands/`, and `skills/` are populated as the lifecycle specification is implemented. The plugin is listed in the ACMElabs marketplace once `.claude-plugin/plugin.json` exists.

## Toolchain

Bun only. `bun install`, `bun test`, `bun run typecheck`. CI runs typecheck and tests on every pull request.

## Working on the lifecycle

See `docs/plan/METHOD.md`.
