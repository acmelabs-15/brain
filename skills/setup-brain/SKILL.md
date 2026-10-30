---
name: setup-brain
description: "Prepare a repo for brain: the workspace layout, the STATUS.md handoff note, the domain docs rules and capabilities.md (toolchain checks, library skills and servers), and for Codex the plain-talk and protocol blocks. Run once per repo before the other brain skills, again after a brain update, with --check to report drift, to migrate a repo on layout 1, brain 0.9 and earlier (SPEC.md or spec/, tasks/plan.md, docs/intent/, numbered ADRs) into the workspace, also when brain status says to migrate, or when a hand-written AGENTS.md or CLAUDE.md repeats rules that brain now carries."
---

# Setup brain

Write what the other brain skills assume is in a repo:

- **`docs/agents/workspace.md`**, the workspace layout: the folders for ideas, decisions, research and specs, and their naming rules. Every brain skill and `brain` read it.
- **`docs/agents/domain.md`**, the rules for reading the glossary, `GLOSSARY.md`, and the decision records.
- **`docs/STATUS.md`**, the handoff note, seeded with "No active work. Start with interview-me." The agent rewrites it at the end of each task, so setup-brain writes it only when it is absent.
- **`docs/agents/capabilities.md`**, what work in this repo needs beyond brain: toolchain checks, library skills and MCP servers. The capability check in brain's protocol reads it. setup-brain proposes it from the repo's files and writes it only after the user's yes; from then on it is the repo's file.
- **For Codex, the plain-talk block and the protocol block**, in the Codex global `AGENTS.md` once per machine, or in this repo's `AGENTS.md` at project scope. Codex is the one host where the plugin cannot carry the text. Claude Code, Gemini CLI and Antigravity get both from the plugin itself.

The repo's `CLAUDE.md` and `GEMINI.md` are never written: where they repeat brain's rules, step 7 reports it only. The repo's `AGENTS.md` is written in two cases, each after the user's explicit yes: the Codex blocks at project scope, when the user picks that scope in step 4, and the removal of the sections the user picks in step 7, as a commit of its own.

Every file change goes through a script: `write.ts` for the install files and, with `--migrate`, for the move from layout 1, `capabilities.ts` for `capabilities.md`, `overlap.ts` for the sections removed from `AGENTS.md`. The steps below decide and explain; the scripts write.

## Find the plugin folder

The script and the templates live in the brain plugin folder. This skill file is `skills/setup-brain/SKILL.md` inside it, so the plugin folder is two folders above this file. On Claude Code, `${CLAUDE_PLUGIN_ROOT}` in this text is that folder: Claude Code fills it in when it loads this skill. On another host, put the plugin folder in place of `${CLAUDE_PLUGIN_ROOT}` in each command below. Other brain skills "resolve the plugin folder as setup-brain does": this rule is what they mean.

## 1. Check for bun

```
bun --version
```

brain's scripts run with bun: this skill's script, and `brain status`, `brain new-doc` and `brain check`. When the command fails, tell the user plainly that brain needs bun, give the install page, https://bun.sh/docs/installation, and stop. The step is done when the command prints a version.

## 2. Explore

Read what exists. Facts are your job; never ask the user for one you can look up.

- `docs/agents/workspace.md`, `docs/agents/domain.md` and `docs/STATUS.md`: which exist. A re-run keeps the folder paths and `max_parallel` that an existing `workspace.md` sets, and leaves an existing `STATUS.md` as it is.
- `GLOSSARY.md`, `GLOSSARY-MAP.md` and `docs/decisions/`: which exist. Also the old glossary names at the root, `CONTEXT.md` and `CONTEXT-MAP.md`.
- Monorepo signals: `pnpm-workspace.yaml`, a `workspaces` field in `package.json`, or `packages/*` folders that each hold their own `src/`. Their absence means single-context, which is almost every repo.
- The Codex home: `$CODEX_HOME`, else `~/.codex`. Whether the directory exists, and whether its `AGENTS.md` already holds the blocks between `<!-- brain:plain-talk:start -->` and `<!-- brain:plain-talk:end -->`, and between `<!-- brain:protocol:start -->` and `<!-- brain:protocol:end -->`.
- Layout 1 (brain 0.9 and earlier): a root `SPEC.md`, Markdown files in `spec/` or `docs/intent/`, `tasks/plan.md`, `tasks/todo.md`, `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`, an ADR named `0001-<slug>.md` in `docs/decisions/`, a DEC or RES file with no frontmatter, and an ADR folder of another tool, such as adr-tools' `doc/adr/` or the folder a root `.adr-dir` names. When any of them exists and `workspace.md` does not record `layout: 2`, do "Migrate a repo on layout 1" below before step 3. `layout: 2` means the repo is migrated: a layout 1 file still there is one the user kept.

## 3. Decide the small things, and say so

- Single-context is the default. Write it without a question.
- `workspace.md` and the `STATUS.md` seed take no question: every repo gets the same layout.
- At global scope the Codex file is written when the Codex home exists and skipped when it does not. Text outside the markers is kept, and a symlink there stays a symlink.

State each decision in one sentence before you go on.

## 4. Ask the questions that are the user's, one per call

Every question goes through the host's user-question tool, composed with the ask-user-question skill: the facts you found in the question, the recommended option first with its reason, the cost of each option in its description.

- **The layout, only when the exploration found monorepo signals.** Single-context, one `GLOSSARY.md` at the root, or multi-context, a `GLOSSARY-MAP.md` at the root that points to one `GLOSSARY.md` per context. Recommend single-context when the signals are weak.
- **The glossary rename, only when a root `CONTEXT.md` or `CONTEXT-MAP.md` exists without its new name beside it, and the migration did not ask it in this run.** Move it with `git mv` to `GLOSSARY.md` or `GLOSSARY-MAP.md`, or leave it. Recommend the move: it keeps the file's history, and Matt's skills now read only the new names. Leaving it costs a reminder in every session, and brain reads the old name for one release only. Only the root files move: a per-context file that `CONTEXT-MAP.md` lists stays where it is, and the user moves it by hand.
- **The Codex scope, only when a Codex home exists on this machine.** Global, both blocks in `~/.codex/AGENTS.md` for every repo, or project, both blocks in this repo's `AGENTS.md` only. Recommend global: a Codex plugin install is global, so brain's skills are in every repo, and the Codex docs put communication style in the global file. Project writes this repo's `AGENTS.md`, so say so in the option: the blocks reach teammates who lack brain, and plain talk and the protocol reach Codex in this repo only.

Nothing else forks before the write. `capabilities.md` gets its own question in step 6. When no Codex home exists, say so and pass `--no-codex`.

## 5. Show, then write

Run the script in dry-run mode and show its output, one line per file:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --dry-run
```

Add `--layout multi`, `--codex-scope project` or `--rename-glossary` when the user chose that option, and `--no-codex` when no Codex home exists.

When the Codex file is in the list, show the blocks as they will appear there. When the user agrees, run the same command without `--dry-run`.

## 6. Propose `capabilities.md`

1. **Collect the skill names.** Write down every skill your host lists to you, spelled as the host spells it (`plugin:skill`, or a bare name):

   | Host | Where the names are |
   |---|---|
   | Claude Code | The skill list in your context. A skill with `disable-model-invocation: true` is not in it. |
   | Codex | The skill list in your context. With many skills installed, Codex shortens that list and can leave skills out; the user sees every skill with `/skills`. |
   | Gemini CLI | The skill list in your system prompt; `gemini skills list --all` prints it too. |
   | Antigravity | The skill list you see when the conversation starts. |

   Sources, checked 2026-10-29: https://code.claude.com/docs/en/skills#control-who-invokes-a-skill, https://developers.openai.com/codex/skills, https://geminicli.com/docs/cli/skills/, https://antigravity.google/docs/skills.

2. **Run the dry run**, with the names comma-separated:

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/capabilities.ts" --root . --skills "<name>,<name>" --dry-run
   ```

   It proposes a toolchain check from `packageManager` and from each runtime in `engines` in `package.json`, and from each check that the repo's `AGENTS.md` names with its version (`` `bun --version` (1.4.4 or later) ``), so that step 7 counts that line as moved. It proposes a library's skills when an installed plugin is named after a dependency (`tanstack-react-router:*` for `@tanstack/react-router`). It proposes each MCP server in the files the hosts read from a repo: `.mcp.json`, `.codex/config.toml`, `.gemini/settings.json` and `.agents/mcp_config.json`. A server in the user's own host config is not a repo fact, so it does not show.

3. **Ask one question** through the host's user-question tool, composed with the ask-user-question skill, with the proposed rows in the question:
   - Write it as proposed. Recommend this: every row comes from the repo's own files.
   - Write it without the entries the user names: pass `--omit <name>` once for each library, server or tool (`node`, `bun`).
   - Write it with no rows, to fill in by hand: pass `--omit` for every entry.

   When the dry run proposes no row, ask whether to write the file with empty tables. Recommend yes: the protocol reads this file at session start, and without it every session reminds the user to run setup-brain.
4. **Write on a yes:** the same command without `--dry-run`, with each `--omit`. With no question tool on this host, write nothing, and name the command in step 8.

The step is done when `capabilities.md` holds the rows the user said yes to, or the user said no.

On a re-run, the script keeps an existing `capabilities.md` as it is: it is the repo's file now. It prints each proposed row the file does not name yet, as `not named <section>: <row>`. Offer those rows in one question. On a yes, add each row to the table under its section's heading.

## 7. Report what brain now carries

A repo that used brain before the plugin carried its protocol often has a hand-written `AGENTS.md` or `CLAUDE.md` with the same rules: how a session starts, the capability check, sub-agent briefs, how a task ends. The plugin now carries those rules on every host, and `capabilities.md` holds the repo's toolchain checks, library skills and servers. This step shows that overlap, and removes it from `AGENTS.md` only for the sections the user picks. It runs after step 6, so the repo facts are in `capabilities.md` first.

1. **Run the report.** It writes nothing.

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/overlap.ts" --root .
   ```

   It reads `AGENTS.md`, `CLAUDE.md`, `.claude/CLAUDE.md` and `GEMINI.md`, and the protocol from the plugin. It lists each section by its heading, and each line in it as one of three kinds:

   | Kind | Meaning |
   |---|---|
   | `covered` | A section of brain's protocol says it. The line after `=` is the protocol's closest line. |
   | `moved` | `capabilities.md` holds it. The line after `=` is the row. |
   | `orphan` | Neither. An orphan line stays in `AGENTS.md`. |

   An `offered` section of `AGENTS.md` can go: its covered and moved lines leave, and its orphan lines stay under its heading. A section of `CLAUDE.md` or `GEMINI.md` that brain covers shows `overlap`; setup-brain never edits those files. The last line names the other authors in the git history: everyone but the user and bot accounts. Text between brain's own markers is not in the report.

   When `AGENTS.md` has no offered section, name each `overlap` section for the user to edit by hand, or say in one line that nothing overlaps, and go to step 8.

2. **Check the report.** Read each covered line beside its protocol line. When a covered line says something that the protocol line does not, tell the user: removing its section loses that line.

3. **Ask one multi-select question**, only when `AGENTS.md` has an offered section, through the host's user-question tool, composed with the ask-user-question skill. The question asks which offered sections to remove. Give one option per offered section; its description names what replaces it (`protocol: Session start`, `capabilities.md: Toolchain`) and the orphan lines that stay. When the host takes fewer options than the report offers, give the sections with the most covered and moved lines, and name the others in the question text. Picking no section, or answering "none", keeps `AGENTS.md` as it is: report-only. The question also names each `overlap` section of `CLAUDE.md` and `GEMINI.md`, for the user to edit by hand.
   - Recommend removing every offered section: the plugin carries the covered lines, `capabilities.md` holds the moved lines, and the orphan lines stay.
   - When the report names other authors, recommend report-only instead. Say in the question that teammates without brain read `AGENTS.md`, and that they lose these rules when the sections go.

   With no question tool on this host, remove nothing, and name the command in step 8.

4. **Remove the picked sections**, one `--remove` per section, with the heading as the report prints it after the `#` marks. Add `--dry-run` to show the sections as the removal leaves them.

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/overlap.ts" --root . --remove "Session start" --remove "Task end"
   ```

   The script writes one commit that holds `AGENTS.md` alone, and prints `committed <sha>`; give the user that SHA. It exits 1 and writes nothing when git does not track `AGENTS.md`, or when `AGENTS.md` has uncommitted changes, such as the Codex blocks of step 5 at project scope. Show its message: the user commits `AGENTS.md`, then runs this step again. Exit 2 means a heading names no offered section; the message lists the offered ones.

The step is done when the user has picked: `AGENTS.md` holds the removal commit, or the user chose report-only.

## 8. Say what changed

One line per file: created, updated, unchanged, skipped or moved, with the reason the script prints beside a skipped file. Then what reads these files now:

- every brain skill and `brain` read `docs/agents/workspace.md` for the folders and the naming rules;
- the capability check in brain's protocol reads `docs/agents/capabilities.md`: it runs the toolchain checks, loads the library skills and proves each server;
- every brain lifecycle skill reads `docs/agents/domain.md` and, through it, `GLOSSARY.md`; the domain-modeling skill writes `GLOSSARY.md` and the decision records;
- `brain status` reads `docs/STATUS.md`, and on Claude Code the session-start text carries both;
- Codex reads the blocks in its `AGENTS.md` at the start of every session.

Then give the next step: start with interview-me, which charts the first idea.

## Check for drift

When the user asks for `--check`, or asks whether the setup is current, run the script with `--check` and the flags step 5 would use:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --check
```

It writes nothing. It lists each file, then ends with "every file is in place" (exit 0), with how many files differ (exit 1), or on a repo on layout 1 (brain 0.9 and earlier) with what the migrate mode still has to move (exit 1). Show the lines. A normal run, after the user's yes, brings each file that differs in line. A skipped file counts as a file that differs: the user fixes it by hand first, as its note says. A Codex file skipped because no Codex home exists does not count.

`--check` covers the files of step 5. For `capabilities.md`, run step 6's dry run: it says whether the file exists and lists each row it does not name yet.

Running this skill again is safe: the scripts change nothing when everything is in place, keep the repo's workspace settings, and never rewrite `docs/STATUS.md` or an existing `capabilities.md`.

## Migrate a repo on layout 1

A repo on layout 1 (brain 0.9 and earlier) keeps its specs in a root `SPEC.md` or in `spec/`, one plan in `tasks/plan.md` and `tasks/todo.md`, its intent docs in `docs/intent/`, its glossary in `CONTEXT.md`, the old name of `GLOSSARY.md`, its ADRs as `docs/decisions/0001-<slug>.md`, and the tracker files setup-brain wrote in `docs/agents/`. The script's migrate mode moves each file into the workspace with `git mv`, so its history follows it, and adds frontmatter to it. No byte below the frontmatter changes. The tracker files are the one exception: they go with `git rm`, and only on the user's yes. The run writes one commit of its own.

That commit also creates `docs/agents/workspace.md`, which records `layout: 2`. The marker says that the repo is migrated: a later run of setup-brain skips this section, and the migrate mode then changes nothing. Until the marker is there, the install step leaves `workspace.md` out, and `--check` exits 1.

| Layout 1 file | Where the migrate mode puts it |
|---|---|
| `CONTEXT.md`, `CONTEXT-MAP.md` at the root, after the user's yes | `GLOSSARY.md`, `GLOSSARY-MAP.md`, the same move as the glossary rename of step 4. |
| `SPEC.md`, `spec/SPEC.md`, `spec/SPEC-<module>.md` | `docs/specs/SPEC-NNN-<slug>/spec.md`. The slug is the module id, else the title in the spec's H1. |
| `tasks/plan.md`, `tasks/todo.md` | The `tasks/` folder of the spec they belong to. |
| The capability map in `spec/`, whose H1 opens with "Capability Map" | `docs/decisions/DEC-NNN-<slug>.md`. An approved map is the user's decision. |
| `docs/decisions/0001-<slug>.md`, an ADR that brain wrote on layout 1 | `docs/decisions/DEC-NNN-<slug>.md`, with `kind: architecture`: an ADR is an architecture decision. |
| Each `0001-<slug>.md` in an ADR folder of another tool, after the user's yes | `docs/decisions/DEC-NNN-<slug>.md`, with `kind: architecture`. A kept folder stays as read-only history, and `domain.md` points to it. |
| A DEC or RES file with no frontmatter | Its own place, with frontmatter added. |
| `docs/intent/<name>.md`, each one the user picks | `docs/ideas/IDEA-NNN-<name>.md`, with its ID and `migrated: 0.8`. It gets no status: only the user knows whether the idea is still in define. |
| `docs/agents/issue-tracker.md`, `docs/agents/triage-labels.md` | Removed with `git rm` after the user's yes. brain's tracker skills are removed, so no brain skill reads these files now. |

Every other file in `spec/` and in an ADR folder stays where it is. So do an intent doc the user does not pick, a tracker file the user keeps, and a file that git does not track or that has uncommitted changes. The script prints the reason beside each file it skips. A file that waits for a commit also holds back `workspace.md`, so that the next run can still move that file.

1. **Ask which spec the plan belongs to, only when `tasks/plan.md` or `tasks/todo.md` exists beside two or more specs.** With one spec, the files settle it: ask nothing. Put one question through the host's user-question tool, composed with the ask-user-question skill. Give one option per spec, by its layout 1 path, and a last option, none, which leaves the plan and the todo in `tasks/`. Recommend the spec that the plan names: a layout 1 plan names its spec near the top (`Spec: spec/SPEC-billing.md`). The step is done when you hold the answer: a spec's path, or none.
2. **Ask, for each Markdown file in `docs/intent/`, whether it becomes an idea.** One question per call, one doc per question, so the question fits every host's option limit. Compose each with the ask-user-question skill, and put the doc's path, its H1 and its first lines in the question. Options: yes, it becomes an idea in `docs/ideas/`; no, it stays in `docs/intent/` as it is. Recommend yes for an intent doc: as an idea it sits in the workspace, where interview-me and `brain status` find it. Recommend no for a file that is no intent doc, such as an index. The step is done when every doc has an answer. The answer for the script is the paths that got a yes, comma-separated, or `none`.
3. **Ask whether to remove the tracker files, only when `docs/agents/issue-tracker.md` or `docs/agents/triage-labels.md` exists.** One question for both, composed with the ask-user-question skill. Say what they are: setup-brain wrote them on layout 1 for an issue tracker, and no brain skill reads them now. Options: remove them with `git rm`, inside the run's one commit; keep them as they are. Recommend remove, unless another tool in the repo still reads them, such as Matt Pocock's skills installed on their own; git history keeps the old text either way. Only an explicit yes removes them. The answer for the script is `remove` or `keep`.
4. **Ask the glossary rename of step 4 here, to `GLOSSARY.md`, only when a root `CONTEXT.md` or `CONTEXT-MAP.md` exists without its new name beside it.** The same question, with the same recommendation, so that the move goes into the run's one commit. The answer for the script is `--rename-glossary` on a yes, and no flag on a no.
5. **Ask whether to move the ADR folder, only when the repo has an ADR folder of another tool.** One question for the repo, covering every such folder, composed with the ask-user-question skill. Put each folder's path, its number of ADRs and two of their titles in the question. Options: move each ADR into `docs/decisions/` as a DEC file with `kind: architecture`, inside the run's one commit; keep the folder as read-only history, which `domain.md` points to, while each new decision still gets a DEC file. Recommend move: then every decision lives in one folder, which `brain check` and the brain skills read. Recommend keep when another tool still writes ADRs into the folder. The answer for the script is `move` or `keep`.
6. **Show the dry run.** Leave out each flag whose question steps 1 to 5 did not ask. Quote a value that holds a space.

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --migrate --plan-spec <answer> --ideas <answer> --tracker-files <answer> --adr-folder <answer> --rename-glossary --dry-run
   ```

   Show every line: `moved <old> -> <new>`, `updated <file>`, `created <file>`, `removed <file>`, or `skipped <file>` with its reason. When a reason ends with "commit it first" or "commit them first", tell the user which file waits: the user commits it, and you show the dry run again. Exit 2 means the script needs an answer that steps 1 to 5 did not give, or an answer names no file it found; its message names each flag and the files it found. The step is done when the user has seen every line.
7. **Write, after the user's yes:** the same command without `--dry-run`. It prints `committed <sha>`; give the user that SHA. When a move, a removal, a write or the commit fails, the script puts every file back as it was and exits 1; show its message. When the user says no, go on with step 3 of the setup: the install leaves `workspace.md` out, so the next run of setup-brain offers the migration again.
8. **Check the migrated repo** with `brain check`:

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" check
   ```

   Show its output. A line "N migrated decisions have no kind" is information, not a finding: the decisions from layout 1 carry no `kind`, and the migration does not guess one. Name each finding in step 8 of the setup. The step is done when the command exits 0, or the user has seen each finding. Then go on with step 3 of the setup.
