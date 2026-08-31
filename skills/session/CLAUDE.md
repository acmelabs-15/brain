# skills/session — editing the skill

## Where a meaning lives (one place each)

- The procedure: `SKILL.md`. Its body is paid for on every invocation — keep it under 5,000 tokens
  (`tiktoken`, not lines) and its `description` under 1,024 characters, measured before committing.
- The rules of the record: `references/session-log.md`. Rules only; it quotes no document.
- Every document the tool writes (session file, the two directory READMEs, the `CONTEXT.md`
  section): `scripts/templates.ts`. `session template <name>` prints it; `init` and `new` write it.
  A shape shown anywhere else is a pointer to that command, not a copy.
- Parsing, session selection, the gate's counting, plan matching: `scripts/session-lib.ts`, tested
  in `scripts/__tests__/`. The tool itself: `scripts/session.ts`; repo and path resolution: `scripts/paths.ts`.
- The three aliases: `../../commands/session-{start,log,close}.md`, each delegating one act with
  `skill: brain:session` and that act's arguments.

## Gotchas when editing SKILL.md

- The three injected state lines are `!`-markers the harness runs at load time. A marker is
  recognised only at line start or after a space; nothing in prose may spell one out, and each must
  be a single bare command that a rule in `allowed-tools` matches — a pipe or an env-prefix is a
  segment the permission checker evaluates on its own and aborts on.
- `${CLAUDE_SKILL_DIR}` is substituted in the body and in `allowed-tools`, for a plugin skill and for a
  project-skill install alike (which is how plugin-kit's harness runs it); the tool is invoked by that
  path, quoted, and nowhere else. `${CLAUDE_PLUGIN_ROOT}` would resolve only inside the plugin.
- `allowed-tools` costs every headless run: `claude -p` must pass `--allowedTools Skill` or the skill
  never loads.
- `git add` and `git commit` are left out of `allowed-tools` on purpose: every commit the ritual
  makes is a permission checkpoint for the user. Adding them removes two prompts per act; that is
  the trade; Peter decided it on 2026-08-31: keep the prompts — a `Bash(git add:*)` grant would also pass
  `git add -A`, the command that once swept a stray session file into a commit.

## Evals

- `evals/README.md` says what each iteration measured. Results are committed; fixture repositories
  (`**/repo/`) are not — they carry their own `.git`.
- The next iteration is 5; keep the baseline at `evals/results/skill-snapshot/` so the numbers compare.
- The trigger set is measured on Haiku and Sonnet (`evals/results/trigger/tiers-2/`): 2/10 and 5/10
  should-fire, 13/13 hard negatives declined. A description change is measured there before it is kept.
