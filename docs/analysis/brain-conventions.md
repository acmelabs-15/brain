# Brain Conventions

This document records the conventions established for the `brain` plugin on the `v2` branch prior to any implementation.

## Layout
The plugin structure uses the following directories:
- `agents/`: Agent definitions
- `commands/`: Slash commands
- `skills/`: Skills, with one directory for each skill
- `docs/`: Working memory of the lifecycle project (`analysis/`, `decisions/`, `plan/`)

## Toolchain
- **Runtime and test:** Bun only.
- **Commands:** `bun test` for testing, `bun run typecheck` (`tsc --noEmit`) for type checking.
- **CI Contract:** The CI workflow runs typecheck and tests on every pull request.

## Stated Intent
As quoted from `README.md`:
> A development lifecycle for Claude Code, delivered as one plugin.
> [...] The plugin is listed in the ACMElabs marketplace once `.claude-plugin/plugin.json` exists.

## Undecided Conventions
*Frontmatter shape, skill directory structure, naming style, invocation patterns, and test conventions for built artifacts are undecided and will be set by Phase 4–5 decisions.*
