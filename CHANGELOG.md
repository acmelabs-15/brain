# @acmelabs/brain

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
