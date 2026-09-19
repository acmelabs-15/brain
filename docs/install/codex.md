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

## Verify

`/skills` lists the brain skills, including `domain-modeling` and `ask-user-question`.
Invoke one with `$domain-modeling`.

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

Not yet run from the public repository.
