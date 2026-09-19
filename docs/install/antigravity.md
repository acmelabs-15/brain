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

The plugin reads the root `plugin.json`, the `skills/` folder, the `agents/` folder and the
`rules/` folder. `rules/talk-plain.md` carries the plain-talk text with `trigger: always_on`,
so the agent talks plain in every workspace while brain is installed; no `AGENTS.md` step.
The `commands/*.toml` files are reported as converted to skills; on some releases the
converted wrappers do not appear in the slash-command list (agent-skills issue #445).
Use the skills directly: `/brain:spec-driven-development` and so on.

## Verify

```bash
agy plugin validate .
agy plugin list
```

In a session, type `/brain:` and the skill catalogue appears, including
`/brain:domain-modeling`. Ask `which rules are installed?` and the reply lists the brain
plugin rule.

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
