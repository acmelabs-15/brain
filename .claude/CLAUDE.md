# session — the plugin repo

One skill, `skills/session/` (`SKILL.md` is the procedure `start [PLAN-NNN] · entry · end · close`;
its own `CLAUDE.md` says what each subdirectory is and which files must change together), four
typed-only aliases in `commands/` (`/session-start` … `/session-close`, a deliberate legacy layout
kept by choice), and the tool behind them, `skills/session/scripts/session.ts` — documented for
people in `README.md` and for the model in `skills/session/references/tool.md`. This file lives
under `.claude/` because `claude plugin validate --strict` rejects a root `CLAUDE.md`; Claude Code
loads it all the same.

Before finishing a change: `bun run typecheck`, `bun test`, `bun run validate`, and plugin-kit's
skill validator over `skills/session` (`--extended --with-environment`); a change to a command
alias or the skill body also wants a real render (`claude --plugin-dir . -p "/session start"` with
`--allowedTools Skill` in a scratch repo) — the injected state lines and the permission grants
that let them run are the two things reading cannot verify.
