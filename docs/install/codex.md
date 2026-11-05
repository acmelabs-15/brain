# Install brain in Codex CLI

Read [the prerequisites](prerequisites.md) first. Command help is checked with Codex
CLI 0.154.0 on 2026-11-05. This check does not establish an older minimum version.

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

## Set up each repository

Run `$setup-brain` once per repository and after Brain updates. Select its Codex
adapter. At global scope, plain talk and the protocol go into `AGENTS.md` in
`CODEX_HOME`, or `~/.codex/AGENTS.md` by default. Setup shows the two marked blocks
before writing, and preserves other text and existing symlinks. Each repository
still needs its own workspace, domain and capabilities guidance.

For plain talk and the protocol in one repo only, choose the project scope when
`setup-brain` asks: the blocks then go into that repo's `AGENTS.md` and the global file
stays as it is. Explain the scope before writing: project blocks can reach teammates
who do not have Brain installed.

Marked blocks are Brain's current delivery choice. Codex supports plugin-bundled
session hooks and additional context, but Brain's Codex manifest declares skills
only. A Codex home on a machine does not cause another host's setup to configure it.
[Official hook support](https://learn.chatgpt.com/docs/hooks).

## Verify

`/skills` lists the brain skills, including `domain-modeling` and `ask-user-question`.
Invoke `$using-brain` to resume a known effort. Compare the answer with its saved
rows and records. A model summary of its instructions alone is not a reliable
context-loading check.

Brain's Codex entry points are its skills. Codex reads
`.codex-plugin/plugin.json` and the `skills/` folder; it ignores `.claude/commands/`.

## Update

```bash
codex plugin marketplace upgrade brain
```

This refreshes the configured Git marketplace snapshot. Start a new session,
inspect the installed source and skill content, then repeat setup and verification.
The exact snapshot-to-loaded-cache behavior has not been tested here; successful
upgrade output alone does not prove that the current session loaded the update.

## Remove

```bash
codex plugin remove brain@brain
```

This removes the plugin and its cache, not the instruction blocks written by
setup. Inspect the global or project AGENTS.md chosen during setup. Remove only
the complete blocks bounded by these marker pairs:

```text
<!-- brain:plain-talk:start -->
<!-- brain:plain-talk:end -->

<!-- brain:protocol:start -->
<!-- brain:protocol:end -->
```

Keep every other instruction and preserve a symlink's target. Resolve incomplete
or duplicate markers before editing. Inspect both scopes if you previously changed
scope; remove only Brain blocks you intend to retire. Consumer workspace records
remain. Start a new session and verify that Brain and its retired blocks no longer load.

## Last run

No live installation or context-loading test is recorded. The 2026-11-05 refresh
checks the manifest, revised setup source, official hooks documentation and CLI
help. Installation, loaded-cache refresh and native resume remain unverified.
