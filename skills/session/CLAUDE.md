# skills/session — editing the skill

## Where a meaning lives (one place each)

- The procedure and the rules of the record: `SKILL.md`, and nothing else the model reads — no
  `references/` (the one it had was read in 0 of the measured runs, so its rules moved into the
  body: the status-line table, the no-entry table, the entry examples, what is never rewritten).
  The body is paid for on every invocation — keep it under 500 lines and its `description` under
  1,024 characters, measured before committing.
- The model behind the tool — paths, the session file's header and template, which session a run
  acts on, the gate's counting, the entry skeleton (`render`), and every document `init` writes
  (`session template <name>` prints it): `scripts/session-log.ts`, tested in
  `scripts/__tests__/session-log.test.ts`. A shape shown anywhere else is a pointer to that
  command or a filled specimen of it (the entry template in `SKILL.md`, pinned by a test), not a
  second copy.
- The tool itself, the CLI over that model: `scripts/session.ts`, tested end to end in a throwaway
  repo by `scripts/__tests__/session.test.ts`. It runs on import, which is why the model is a
  separate file.
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
