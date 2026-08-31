# brain — the plugin repo

The Claude Code plugin that keeps a session log: one skill (`/brain:session`), three typed-only
commands in `commands/`, and the Bun tool the skill runs — and the docs system of record for that
work (`docs/`). `README.md` is the human-facing description; `skills/session/CLAUDE.md` loads when
you work inside the skill and carries what editing it needs.

## Checks before finishing

- `bun test`, `bun run typecheck`, `bun run validate` (`claude plugin validate . --strict`).
- plugin-kit's validator over the skill: `bun ~/Dev/ACMElabs/plugin-kit/shared/validate/validate.ts --target-type skill skills/session --extended --with-environment`.
- A change to `SKILL.md` or a command also needs one real render in a scratch repo after
  `session init`: `claude --plugin-dir . -p "/brain:session start <description>" --allowedTools Skill`
  — the injected state lines and the grants that let them run are the two things reading cannot verify.
- This repo keeps its own log: every commit here gets its entry through `/brain:session log`
  before the `docs(session)` commit, and `session check --session SES-NNN` is the gate. The merged-in
  history of acmelabs-15/sessions is accounted for by the archived log under `docs/sessions/archive/`.

## Conventions this repo does not share with its neighbours

- Plugin name `brain`, skill name `session`: **every form is namespaced**, interactively and
  headless — `/brain:session start | log | close`, and the commands as `/brain:session-start`,
  `/brain:session-log`, `/brain:session-close`. Bare `/session` and bare `/session-start` both fail
  (measured 2026-08-31 on CLI 2.1.251: `/session isn't available in this environment.`,
  `Unknown command: /session-start`), so no document here promises a bare form (ADR-003).
- `commands/` is a legacy plugin layout kept on purpose: it is the typed surface, one file per
  act, and `~/.claude/commands` joins it at PLAN-001 Part 5. A command buys a `/` menu slot, not
  brevity — `/brain:session-log` is longer than `/brain:session log`.
- This file lives under `.claude/` because `claude plugin validate --strict` rejects a root `CLAUDE.md`.
- The installed copy (`~/.claude/plugins/cache/ACMElabs/brain/<version>/`) is a snapshot: after a
  change, regenerate the marketplace (PLAN-001 § State names the command), then
  `claude plugin uninstall brain@ACMElabs && claude plugin install brain@ACMElabs`, or bump
  `version` — `plugin update` reports "already at the latest version" otherwise.
- Merge PRs with merge commits (a squash replaces every sha the entries cite); stage by named
  file, never `git add -A`.
