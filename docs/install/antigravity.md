# Install brain in Antigravity CLI

Checked against Antigravity CLI 1.2.0.

## Install

```bash
agy plugin install https://github.com/acmelabs-15/brain.git
```

From a local clone:

```bash
agy plugin install /path/to/brain
```

The plugin reads the root `plugin.json`, the `skills/` folder and the `agents/` folder.
The `commands/*.toml` files are reported as converted to skills; on some releases the
converted wrappers do not appear in the slash-command list (agent-skills issue #445).
Use the skills directly: `/brain:spec-driven-development` and so on.

## Verify

```bash
agy plugin validate .
agy plugin list
```

In a session, type `/brain:` and the skill catalogue appears, including
`/brain:domain-modeling`.

## Update

```bash
agy update
```

## Remove

```bash
agy plugin uninstall brain
```

## Last run

Not yet run from the public repository. `agy plugin validate .` passes on the tree on
2026-09-19: 29 skills, 4 agents, 9 commands processed.
