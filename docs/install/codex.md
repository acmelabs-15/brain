# Install brain in Codex CLI

Checked against Codex CLI 0.154.0. Needs 0.122 or later.

## Install

```bash
codex plugin marketplace add acmelabs-15/brain
codex plugin add brain@brain
```

From a local clone:

```bash
codex plugin marketplace add /path/to/brain
codex plugin add brain@brain
```

Start a new Codex session after the install so the skills are discovered.

## Set up, once per machine

Codex reads no context from a plugin, so the plain-talk text goes into your global
`~/.codex/AGENTS.md`. In any repo, run `$setup-brain` once; it writes the block between
two markers and keeps the rest of the file, a symlink included. Later runs in other repos
report the file unchanged.

For plain talk in one repo only, choose the project scope when `setup-brain` asks: the block
then goes into that repo's `AGENTS.md` and the global file stays as it is. brain's skills are
in every repo either way, because a Codex plugin install is global.

## Verify

`/skills` lists the brain skills, including `domain-modeling` and `ask-user-question`.
Invoke one with `$domain-modeling`. From a repo root,
`codex --ask-for-approval never "Summarize the current instructions."` echoes the plain-talk
block from the global file.

Codex has no slash commands for plugins, so the skills are the entry points. Codex reads
`.codex-plugin/plugin.json` and the `skills/` folder; it ignores `.claude/commands/`.

## Update

```bash
codex plugin marketplace upgrade brain
```

## Remove

```bash
codex plugin remove brain@brain
```

## Last run

Not yet run. Peter holds the Codex install for now, so the once-per-machine `setup-brain` step
and the Codex check are open.
