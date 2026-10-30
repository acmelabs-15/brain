# @acmelabs/brain

## 0.12.1

### Patch Changes

- [#23](https://github.com/acmelabs-15/brain/pull/23) [`b625d38`](https://github.com/acmelabs-15/brain/commit/b625d38c4f9227d04c7626b4bd62e20a03597b81) - setup-brain's first install, the run that creates `docs/agents/workspace.md`, now keeps `docs/specs/` as the specs folder when that folder already holds a spec (`SPEC-NNN-<slug>/`), as `brain new-doc SPEC` wrote it on 0.10.0 and 0.11.0 in a repo with no `workspace.md`. Nothing moves. When the root `specs/` holds other files, such as API specs or test specs, setup-brain asks where brain's specs go instead of mixing them in: `docs/specs/` (recommended), a folder you name, or `specs/` anyway. The setup writer takes the answer as `--specs-folder <folder>`.

## 0.12.0

### Minor Changes

- [#20](https://github.com/acmelabs-15/brain/pull/20) [`3e4cc59`](https://github.com/acmelabs-15/brain/commit/3e4cc59083ddccd33e496992643b68e11a4eff47) - The default spec folder is now `specs/SPEC-NNN-<slug>/` at the repo's root, not `docs/specs/SPEC-NNN-<slug>/`. A new install and a migration from layout 1 get `specs/`. A repo that already has `docs/agents/workspace.md` keeps the spec folder that file names: a re-run of setup-brain changes no path, so a workspace from 0.10.0 or 0.11.0 keeps `docs/specs/`, and nothing moves.

## 0.11.0

### Breaking Changes

- [#18](https://github.com/acmelabs-15/brain/pull/18) [`0a500c6`](https://github.com/acmelabs-15/brain/commit/0a500c668de3d29374c340c723b1013fea9cd810) - brain no longer reads `CONTEXT.md` in place of `GLOSSARY.md`, as 0.9.0 announced. A repo that keeps its glossary only in a root `CONTEXT.md` or `CONTEXT-MAP.md` now has no glossary that brain's skills read. To keep it, run setup-brain and say yes to the glossary rename: its `--rename-glossary` moves the file to `GLOSSARY.md` or `GLOSSARY-MAP.md` with `git mv`, so the file keeps its history. The same run rewrites `docs/agents/domain.md`, which no longer names `CONTEXT.md` in place of `GLOSSARY.md`.

## 0.10.0

### Breaking Changes

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`6d9133c`](https://github.com/acmelabs-15/brain/commit/6d9133cc87fb17ba95ebf341f2fe019c24224f5f) - a decision is now a `DEC-NNN-<slug>.md` file in `docs/decisions/`, created with `brain new-doc DEC <slug>`. domain-modeling no longer writes `0001-<slug>.md` ADRs. A repo with such ADRs must move them first: run setup-brain to migrate, which turns each one into a DEC file in the same commit as the rest of the move.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`359eba9`](https://github.com/acmelabs-15/brain/commit/359eba94ce0f499e93534ab69778e224a7f68833) - wayfinder is removed. Its job moved into interview-me, which now keeps a multi-session map in docs/ideas/. Maps on an issue tracker are not migrated. **Breaking:** triage is removed; re-seed it from mattpocock/skills if you need it. **Breaking:** setup-brain no longer writes `docs/agents/issue-tracker.md` or `docs/agents/triage-labels.md`, and its script no longer takes `--tracker` or `--repo`.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`6d9133c`](https://github.com/acmelabs-15/brain/commit/6d9133cc87fb17ba95ebf341f2fe019c24224f5f) - `/spec`, `/plan` and `/build` now read and write a spec folder, `docs/specs/SPEC-NNN-<slug>/`, with `spec.md`, `tasks/plan.md` and `tasks/todo.md` in it. They no longer use `SPEC.md`, `spec/` or `tasks/` at the repo root. A repo on layout 1 (brain 0.9 and earlier) must move its files first: run setup-brain to migrate. Until then, `brain status` says so.

### Minor Changes

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`6d9133c`](https://github.com/acmelabs-15/brain/commit/6d9133cc87fb17ba95ebf341f2fe019c24224f5f) - New: the `brain` CLI, which skills and sessions run with bun. `brain new-doc` creates the next numbered file (IDEA, DEC, RES or SPEC), `brain check` checks the workspace against its rules, `brain status` reports the stage, the last step and the next step, and `brain plan` prints what can run at once in a spec's plan. The `status` skill gives the same report from inside a session.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`94fef6d`](https://github.com/acmelabs-15/brain/commit/94fef6de847891c99e46cfaa4f8d4b65153bae20) - brain now carries its protocol into every session: how a session starts, checks its skills and servers, briefs sub-agents and ends a task. Gemini CLI gets it in the extension's `GEMINI.md`, after the plain-talk text. Antigravity CLI gets it as the always-on rule `rules/protocol.md`.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`6d9133c`](https://github.com/acmelabs-15/brain/commit/6d9133cc87fb17ba95ebf341f2fe019c24224f5f) - New: `/build auto` starts every task that is ready at once, each in a worktree of its own, up to `max_parallel` in `docs/agents/workspace.md` (8 by default; `BRAIN_MAX_PARALLEL` overrides it). The main session merges the tasks one at a time and stops at each checkpoint for your review.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`d21d9e2`](https://github.com/acmelabs-15/brain/commit/d21d9e2a86ac42fd3e9bfcfe260e256871218f16) - On Claude Code, a `SessionStart` hook gives each session the brain protocol, the full path of the `brain` CLI, and the `brain status` report with the text of `docs/STATUS.md`. It runs whenever a session starts: at startup, after `/clear`, after a compaction, and when you resume or fork a session. It needs `bun` on `PATH`. On resume and on a fork it gives the path and a new report only, since the session already holds the protocol.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`6d9133c`](https://github.com/acmelabs-15/brain/commit/6d9133cc87fb17ba95ebf341f2fe019c24224f5f) - New: interview-me keeps its map in an idea file, `docs/ideas/IDEA-NNN-<slug>.md`, and resumes from that file alone, so one interview can run over any number of sessions.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`c119e17`](https://github.com/acmelabs-15/brain/commit/c119e17b1311cd903d8fee48ccc58c5b4eb0198b) - setup-brain now proposes `docs/agents/capabilities.md`, the file the protocol's capability check reads, and writes it after your yes. It proposes toolchain checks from `packageManager` and `engines` in `package.json`, a library's skills when an installed plugin is named after a dependency, and the MCP servers in the repo's config files for Claude Code, Codex, Gemini CLI and Antigravity. An existing `capabilities.md` is kept as it is; a re-run lists each proposed row it does not name yet.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`03f2d3e`](https://github.com/acmelabs-15/brain/commit/03f2d3e49a66f868ef3ebce0aec254f771b9cd9e) - setup-brain now prepares a repo for the brain workspace. It checks for bun first, and writes `docs/agents/workspace.md` and a `docs/STATUS.md` seed beside `docs/agents/domain.md`. For Codex it writes the brain protocol block beside the plain-talk block. A re-run keeps the repo's folder paths and `max_parallel`, and never rewrites `docs/STATUS.md`. `setup-brain --check` reports drift and writes nothing.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`6322ef9`](https://github.com/acmelabs-15/brain/commit/6322ef9deb70774d48df42a6fa332eebd276ed0d) - setup-brain's migrate mode turns the intent docs of a repo on layout 1 (brain 0.9 and earlier) into ideas. setup-brain asks, one doc per question, which files in `docs/intent/` become ideas; each one it picks moves with `git mv` to `docs/ideas/IDEA-NNN-<name>.md` and gains frontmatter only. It also asks whether to remove setup-brain 0.8's `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`, and removes them with `git rm` only after a yes.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`cb74f69`](https://github.com/acmelabs-15/brain/commit/cb74f69cb624594a3f9c3c3eb4183d5d2129e4e9) - setup-brain's migrate mode finishes the move from layout 1 (brain 0.9 and earlier) in one commit. Each ADR that brain wrote on layout 1, `docs/decisions/0001-<slug>.md`, becomes a decision record with `kind: architecture`. setup-brain asks once per repo whether to move an ADR folder of another tool, such as adr-tools' `doc/adr/`, into `docs/decisions/` the same way; a kept folder stays as read-only history, and `docs/agents/domain.md` points to it. The glossary move to `GLOSSARY.md` goes into the same commit, and so does `docs/agents/workspace.md`, whose `layout: 2` marks the repo as migrated: a later run moves nothing and asks nothing again. Until then, setup-brain writes no `workspace.md` on a repo on the 0.8 layout, and `--check` exits 1. After the migration, setup-brain runs `brain check` on the repo.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`91d910b`](https://github.com/acmelabs-15/brain/commit/91d910bf53909aa5a47da5f48b5748e39dd72240) - setup-brain's migrate mode moves the specs of a repo on layout 1 (brain 0.9 and earlier) into the workspace. Each spec in `SPEC.md` or `spec/` moves with `git mv` to `docs/specs/SPEC-NNN-<slug>/spec.md`, and `tasks/plan.md` and `tasks/todo.md` move into the `tasks/` folder of the spec they belong to. The capability map becomes a decision record. Each moved file gains frontmatter only, so its history follows it. When a plan sits beside several specs, setup-brain asks which spec it belongs to.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`27e8713`](https://github.com/acmelabs-15/brain/commit/27e8713bdb1b3537979a75d24f16a19fcf4cd698) - setup-brain now reports where a hand-written `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` repeats the rules that brain's protocol carries, or the facts that `docs/agents/capabilities.md` holds. It lists each line as covered, moved or orphan. It removes only the `AGENTS.md` sections you pick, keeps their orphan lines, and writes that change as a commit of its own. When other people commit to the repo, it recommends report-only. It never edits `CLAUDE.md` or `GEMINI.md`. `capabilities.md` also takes a toolchain check that `AGENTS.md` names with its version, such as `` `bun --version` (1.4.4 or later) ``.

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`791a7f1`](https://github.com/acmelabs-15/brain/commit/791a7f17cc3f54682ced47d2a9eb7d69634ceec0) - using-brain now tells an agent to load a skill when there is even a 1% chance that it applies, and names three thoughts that mean a skill is about to be skipped. It routes to the stateful interview, the status skill and DEC files. Its stage boundaries say that the files carry the work, so a session may end between two rows of a map or after any completed task.

### Patch Changes

- [#15](https://github.com/acmelabs-15/brain/pull/15) [`3941fce`](https://github.com/acmelabs-15/brain/commit/3941fcea111f5462ad93ac7a0401c2cde8264870) - A question in plain text, for a session with no question tool, keeps the tool's layout: one option per line with what happens and what it costs, and one option whose label ends in "(Recommended)", with its reason. The question and its options end the reply. interview-me names a later row in an option only as a cost of that option. When the debugging skill cannot build a loop, it recommends one of its three asks and ends the reply with the question.

## 0.9.0

### Minor Changes

- [#13](https://github.com/acmelabs-15/brain/pull/13) [`392fc5f`](https://github.com/acmelabs-15/brain/commit/392fc5f429ecbc41010b2a95280eadcf737483d7) - The glossary is now `GLOSSARY.md`, and `GLOSSARY-MAP.md` for a repo with several contexts. Matt Pocock's skills read these names since mattpocock/skills [#1120](https://github.com/acmelabs-15/brain/issues/1120). Until version 0.11.0, brain still reads an old `CONTEXT.md` when no `GLOSSARY.md` exists, and reminds you once to run `setup-brain`. setup-brain offers to move the file with `git mv`, so it keeps its history. brain also gets a `GLOSSARY.md` of its own.

## 0.8.0

### Minor Changes

- [#11](https://github.com/acmelabs-15/brain/pull/11) [`e283c83`](https://github.com/acmelabs-15/brain/commit/e283c8322d01f25b5efc195d1b261826f3bf5ee9) - The agent can now load `setup-brain` on its own, in Claude Code and in Codex; `/setup-brain` still works. `wayfinder` gets a reworded opening paragraph and tighter list spacing; it stays a command the user types, and it still plans and never builds.

## 0.7.0

### Minor Changes

- [#8](https://github.com/acmelabs-15/brain/pull/8) [`023d94f`](https://github.com/acmelabs-15/brain/commit/023d94f3a456f117ac0bfc6627391063862e8f46) - `ask-user-question` is now the skill from acmelabs-15/ask-user-question at `62d3b79`: `SKILL.md` and the three host references. Two parts differ from upstream. The frontmatter `metadata` names brain and carries brain's version, which `version:sync` keeps current. The text above the host table says to check which tool the session offers, then read that tool's reference. brain's rewrite, its Codex `agents/openai.yaml` and the `question:check` gate are gone.

- [#9](https://github.com/acmelabs-15/brain/pull/9) [`1f74106`](https://github.com/acmelabs-15/brain/commit/1f74106106e93fed2235c849e4e520f80b3c6e5f) - The agent now loads `wait-what` on its own when the user shows confusion about its last message, for example "what are you talking about", "I don't get it" or "that makes no sense". `/wait-what` still works. An error message the user finds confusing stays a debugging task. `wait-what` is now seeded from matt's pack, so brain owns its text; the body is unchanged.

## 0.6.0

### Minor Changes

- [#5](https://github.com/acmelabs-15/brain/pull/5) [`d199426`](https://github.com/acmelabs-15/brain/commit/d199426e731dea6d2df5b7b3c791c8fdcbab6edf) - The ADR folder is `docs/decisions/`, the folder agent-skills uses, instead of `docs/adr/`. `setup-brain` writes it into `docs/agents/domain.md`, and `domain-modeling` and `interview-me` name it. A repo that already keeps its ADRs in another folder keeps using that folder. `domain-modeling` is now seeded from matt's pack, so brain owns its text.

## 0.5.0

### Minor Changes

- [`15245dc`](https://github.com/acmelabs-15/brain/commit/15245dc45636202620f0265876252975ff8e88c1) - Every sub-agent brain dispatches gets the plain-talk block at the top of its prompt: the build tasks under `build auto`, the three ship personas, the webperf auditor and the five review axes. Output styles never reach a sub-agent, so the text travels with the prompt. A build sub-agent returns a decision it cannot settle as one question.

### Patch Changes

- [`16b4c6c`](https://github.com/acmelabs-15/brain/commit/16b4c6cea153ac1b0f98c6a258b08a1ff50e0ace) - The evals gate defaults to 0.85 instead of 1.0, so one judge miss in three runs does not fail the weekly run.

## 0.4.0

### Minor Changes

- [`493121a`](https://github.com/acmelabs-15/brain/commit/493121adefcfcb5dcf61c57bbbf01d44621d9a3e) - `setup-brain` gains a Codex scope: global, the default, writes the plain-talk block into `~/.codex/AGENTS.md`; project writes it into this repo's `AGENTS.md` instead. The skill asks once, only on a machine that has Codex.

### Patch Changes

- [`d7cdb97`](https://github.com/acmelabs-15/brain/commit/d7cdb976716518e79a4f4f889073dd63a2ab4664) - The plain-talk rule for the first line now reads: open with one line that names the subject, what this reply is about and where things stand, before any detail. The first eval run showed replies that opened on content instead.

## 0.3.0

### Minor Changes

- [`502c25f`](https://github.com/acmelabs-15/brain/commit/502c25febc75a784be6d0d5d2662517f68995c9a) - The plain-talk text follows the install's scope. Antigravity gets it as an always-on plugin rule, `rules/talk-plain.md`. `setup-brain` writes the block into the Codex global `AGENTS.md` once per machine and no longer touches a repo's `AGENTS.md`, `CLAUDE.md` or `GEMINI.md`. brain carries its own `AGENTS.md` with the repo rules and the block, imported from `.claude/CLAUDE.md` and listed for Gemini in `.gemini/settings.json`.

## 0.2.0

### Minor Changes

- [`74029d3`](https://github.com/acmelabs-15/brain/commit/74029d3780264324c72396c9e0ea29eb2b9fb55b) - First release: agent-skills, three of mattpocock's skills and ask-user-question vendored by pinned commit, with the sync script, one version across four host manifests, and the install pages.
