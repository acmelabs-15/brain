# Before installing or refreshing Brain

Read this before the host-specific install steps. Installing the plugin and preparing
a consumer repository are separate steps.

## Bun and the host environment

Brain's scripts require the Bun range declared in [package.json](../../package.json).
The current range is `~1.4.0`: Bun 1.4.x, starting at 1.4.0. The package declaration
is authoritative when a later release changes that range.

```bash
bun --version
```

Run this in the environment that starts the host. Bun must be on that process's
`PATH` before Claude's startup hook runs. If needed, follow the
[official Bun installation guide](https://bun.sh/docs/installation), then restart
the host so it receives the updated environment. A failed hook does not load
Brain's startup instructions.

## Prepare each consumer repository

Run setup-brain once in each repository, and again after a Brain update. Each host
guide gives its invocation. Claude's router also reaches setup when the selected
work needs missing or older workspace guidance.

Setup previews its changes. It prepares workspace, domain and capabilities guidance
under `docs/agents/`. It preserves existing workspace settings and reviews
repo-owned capabilities before changing them. Migration and root-instruction cleanup
have separate, explicit scopes. A missing glossary is valid until the first term
needs a definition.

Normal Claude setup leaves the consumer's AGENTS.md and CLAUDE.md unchanged. Brain's
own root instruction files are for maintaining Brain. Codex's marked instruction
blocks are a separate adapter that setup writes only at the selected scope.

## Verify behavior separately from files

After installation or refresh, start a new host session and use the host guide's
checks. Inspect the installed version or source and the expected skills. When saved
work exists, ask Brain to resume it and compare the answer with its rows and
records. A catalog listing or successful file validator does not prove that a
model loaded the complete instructions or restored the correct state.
