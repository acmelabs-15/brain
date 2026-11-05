# Install brain in Claude Code

Read [the prerequisites](prerequisites.md) first. Command help is checked with Claude
Code 2.1.318 on 2026-11-05. The earlier live result remains under Last run.

## Install

Choose one source. These shell commands install at user scope:

```bash
claude plugin marketplace add acmelabs-15/marketplace
claude plugin install brain@acmelabs --scope user
```

From the repository directly, without the ACMElabs marketplace:

```bash
claude plugin marketplace add https://github.com/acmelabs-15/brain.git
claude plugin install brain@brain --scope user
```

For development, from a local clone:

```bash
claude --plugin-dir /path/to/brain
```

For a shared project install, run the install command from that repository with
`--scope project`. Each collaborator installs the plugin on their machine. Use
`--scope local` for an unshared project setting. Keep the selector and scope for
maintenance. [Claude's scope contract](https://code.claude.com/docs/en/discover-plugins#install-a-plugin).

Start a new session, or run `/reload-plugins` in an open session. Run
`/brain:setup-brain` once per consumer repository and after Brain updates. Normal
setup leaves consumer AGENTS.md and CLAUDE.md unchanged. The plugin supplies
plain talk through its output style.

The plugin's `SessionStart` hook, in `scripts/hooks/claude-code.json`, runs whenever a session
starts: at startup, after `/clear`, after a compaction, and when you resume or fork a session.
Every event receives current protocol and router paths, the Brain CLI path, and
a computed workspace report. The router restores state from rows and records and
honors the current user request. It does not depend on an earlier transcript or
inject the retired status note. The hook runs `bun` from `PATH`.

## Verify

Type `/brain:` and inspect the catalog for `brain:using-brain`,
`brain:domain-modeling` and `brain:ask-user-question`.

| Source | Inspect |
|---|---|
| ACMElabs marketplace | `claude plugin details brain@acmelabs` |
| Brain repository marketplace | `claude plugin details brain@brain` |

Resume a known effort and compare the result with its saved rows and records.
For a local source checkout, `bun run validate` applies Brain's host-validation
policy. Its Claude result accepts only the exact approved root-CLAUDE warning and
reports **accepted with one approved warning**. This does not mean Claude's
unmodified strict validator passes.

## Update

Enable marketplace auto-update in `/plugin`, or use the matching command below.
Replace `user` with `project` or `local` for that installation scope:

| Source | Update |
|---|---|
| ACMElabs marketplace | `claude plugin update brain@acmelabs --scope user` |
| Brain repository marketplace | `claude plugin update brain@brain --scope user` |

Start a new session or run `/reload-plugins`, then repeat setup and verification.
[Claude's update contract](https://code.claude.com/docs/en/discover-plugins#keep-plugins-updated).

## Remove

Use the installed selector and scope. Uninstall defaults to user scope, so name
the scope explicitly:

| Source | Remove |
|---|---|
| ACMElabs marketplace | `claude plugin uninstall brain@acmelabs --scope user` |
| Brain repository marketplace | `claude plugin uninstall brain@brain --scope user` |

Replace `user` with `project` or `local` when appropriate. Start a new session and
verify that Brain is absent. Consumer workspace records remain.
[Claude's maintenance contract](https://code.claude.com/docs/en/discover-plugins#manage-plugins-from-your-shell).

## Last run

Historical result: 2026-09-19, Claude Code 2.1.278, from the acmelabs marketplace: `brain@acmelabs` 0.3.0
installed at user scope, 44 skills in `claude plugin details`. In the session that ran the
install, the active output style switched to `brain:talk-plain` without any setting, which is
`force-for-plugin` at work. `claude plugin validate . --strict` passed on that older tree.

The 2026-11-05 refresh checks source, official documentation and local CLI help.
A fresh managed install and native resume of the revised plugin remain unverified.
