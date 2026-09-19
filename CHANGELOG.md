# @acmelabs/brain

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
