# Install brain in Claude Code

Checked against Claude Code 2.1.268.

## Install

```
/plugin marketplace add acmelabs-15/marketplace
/plugin install brain@acmelabs
```

From the repository directly, without the ACMElabs marketplace:

```
/plugin marketplace add https://github.com/acmelabs-15/brain.git
/plugin install brain@brain
```

For development, from a local clone:

```bash
claude --plugin-dir /path/to/brain
```

The plugin's output style, `talk-plain`, applies at the scope the plugin was installed in:
`--scope user` for every project, `--scope project` for one repo. Nothing is written to a
`CLAUDE.md`.

## Verify

Type `/brain:` and the skill list appears. It includes `brain:domain-modeling` and
`brain:ask-user-question`. `claude plugin details brain@acmelabs` shows the version
that `package.json` carries.

## Update

Enable auto-update for the marketplace in `/plugin`, or run:

```
claude plugin update brain@acmelabs
```

## Remove

```
claude plugin uninstall brain@acmelabs
```

## Last run

Not yet run from the public repository. `claude plugin validate . --strict` passes on
the tree on 2026-09-19.
