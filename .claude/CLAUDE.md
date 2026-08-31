# sessions — the plugin repo

The Claude Code plugin that keeps a session log: one skill (`/session`), five typed-only aliases
in `commands/`, and the Bun tool the skill runs. `README.md` is the human-facing description;
`skills/session/CLAUDE.md` loads when you work inside the skill and carries what editing it needs.

## Checks before finishing

- `bun test`, `bun run typecheck`, `bun run validate` (`claude plugin validate . --strict`).
- plugin-kit's validator over the skill: `bun ~/Dev/ACMElabs/plugin-kit/shared/validate/validate.ts --target-type skill skills/session --extended --with-environment`.
- A change to `SKILL.md` or an alias also needs one real render in a scratch repo:
  `claude --plugin-dir . -p "/sessions:session start" --allowedTools Skill` — the injected state
  lines and the grants that let them run are the two things reading cannot verify.

## Conventions this repo does not share with its neighbours

- Plugin name `sessions`, skill name `session`: the namespaced command is `/sessions:session …`,
  the bare `/session …` works interactively. Headless (`claude -p`) resolves only the namespaced form.
- `commands/` is a legacy plugin layout kept on purpose (one skill plus a commands folder); write a
  new alias there, not as a sixth skill.
- This file lives under `.claude/` because `claude plugin validate --strict` rejects a root `CLAUDE.md`.
- The installed copy (`~/.claude/plugins/cache/ACMElabs/sessions/<version>/`) is a snapshot: after
  a change, `claude plugin uninstall sessions@ACMElabs && claude plugin install sessions@ACMElabs`
  or bump `version` — `plugin update` reports "already at the latest version" otherwise.
