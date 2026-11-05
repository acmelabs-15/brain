# Install brain in Antigravity CLI

Read [the prerequisites](prerequisites.md) first. Command help and official
documentation are checked with Antigravity CLI 1.5.1 on 2026-11-05.

## Install

```bash
agy plugin install https://github.com/acmelabs-15/brain.git
```

From a local clone:

```bash
agy plugin install /path/to/brain
```

The plugin uses the root `plugin.json`, the `skills/` folder, the `agents/` folder and the
`rules/` folder. `rules/talk-plain.md` carries the plain-talk text with `trigger: always_on`,
making it available while Brain is enabled; no `AGENTS.md` step is needed.
`rules/protocol.md` carries the brain protocol the same way.
The `commands/*.toml` files are reported as converted to skills; on some releases the
converted wrappers do not appear in the slash-command list (agent-skills issue #445).
Use the installed skills directly when a command wrapper is absent; inspect the
catalog for its actual invocation name. The earlier wrapper-discovery issue is
not proof that every current release has the same behavior.

Start a new session after installation. In each consumer repository, ask the agent
to use Brain's setup-brain skill. Repeat setup after Brain updates. Normal
Antigravity setup leaves consumer root instructions and Codex configuration alone.

## Verify

```bash
agy plugin validate /path/to/brain
agy plugin list --json
```

Inspect every warning as well as the exit code. Antigravity 1.5.1 can exit 0 while
warning that a skill body is truncated at 24,000 bytes. Brain's lifecycle check
rejects larger bodies, but a validator pass still does not prove complete runtime
loading of a skill and its references.

The current root manifest has no version. Its Marketplace-listing warning is
separate from direct Git/local installation; it does not by itself prove that
direct installation fails. [Manifest and validation contract](https://antigravity.google/docs/build-plugins).

In a new session, inspect the skill catalog and installed rules. Use using-brain
to resume a known effort, then compare the answer with saved rows and records.
A model's unsourced claim that a rule is installed is not enough.

## Refresh a direct installation

`agy update` updates the CLI. Version 1.5.1 exposes no separate plugin-update
subcommand. The official plugin guide documents installation and removal, but
does not establish that repeating install safely preserves plugin-local data.

For an explicit replacement, prepare the desired Brain source and validate it
first. Record the installed source, path and enabled state from plugin list.
Copy any plugin-local edits or data to a backup outside the installed plugin
directory before removing it. Then use the documented operations separately:

```bash
agy plugin uninstall brain
```

```bash
agy plugin install /path/to/desired/brain
```

Start a new session, restore the intended enabled state if needed, and repeat
setup and verification. Removal and installation are not an atomic update. This
replacement sequence uses documented commands; an end-to-end refresh on 1.5.1 is
**unverified** here. [Plugin management contract](https://antigravity.google/docs/plugins#cli-shell-subcommands-agy-plugin).

Official settings also document workspace plugins under `.agents/plugins/<name>`.
An isolated fixture was not reported by plugin list or the read-only agent loader
in this check. That does not establish that workspace plugins fail in a model
session, but it does not verify a workspace refresh route either.
[Workspace locations](https://antigravity.google/docs/settings#setting-up-preferences).

## Remove

```bash
agy plugin uninstall brain
```

Start a new session and confirm the plugin is absent. Consumer workspace records
remain. Preserve plugin-local data before removal if you added any.

## Last run

Historical result: 2026-09-19, Antigravity CLI 1.2.0, from the public repository: 35 skills, 4 agents and 9
commands processed. The plugin is staged under `~/.gemini/config/plugins/brain/`. A print-mode
session asked "which rules are installed?" listed `rules/talk-plain.md` from that path with the
first sentence of the text, so the always-on rule is active.

The historical counts describe that install only. The 2026-11-05 checks use CLI
help, source validation and an isolated workspace discovery fixture. They do not
install or replace a user plugin, send a model prompt, or prove native skill loading.
