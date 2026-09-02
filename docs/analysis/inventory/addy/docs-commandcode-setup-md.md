---
package: addy
path: docs/commandcode-setup.md
type: doc
bytes: 2437
unit: inv-addy-5
---

# docs/commandcode-setup.md

## Purpose — required, verbatim
> "[Command Code](https://commandcode.ai) has a native skills system. The built-in `cmd skills` command clones a GitHub repo, recursively discovers every `SKILL.md`, and installs the ones you pick." — docs/commandcode-setup.md:3

## Design intent — required
Integration guide documenting how Command Code's native skill management CLI (`cmd skills`) discovers, installs, updates, and executes skills from `addyosmani/agent-skills` across project (`.commandcode/skills/`) and user/global (`~/.commandcode/skills/`) scopes, as well as cross-compatibility with `.agents/skills/`. Solves the distribution and discovery problem by mapping installed skills directly to TUI slash menu items (`/[skill]`).

## Phase — required
`none`

## Inputs — required
- GitHub repository `addyosmani/agent-skills` — docs/commandcode-setup.md:12, 20, 26, 32, 33, 34
- `skills/spec-driven-development` — docs/commandcode-setup.md:20, 41, 42, 52
- `skills/interview-me` — docs/commandcode-setup.md:33

## Outputs — required
- Project skills directory `.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:9, 63, 68
- User/global skills directory `~/.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:23, 65, 68
- TUI slash commands (e.g. `/spec-driven-development`, `/skills`) — docs/commandcode-setup.md:49-55

## Invokes — required
- skill spec-driven-development — docs/commandcode-setup.md:20, 41, 42, 52
- skill interview-me — docs/commandcode-setup.md:33

## Invoked by — required
- README.md:199

## Concepts named — required, verbatim
- `Command Code` — docs/commandcode-setup.md:1, 3, 5, 59 — used here
- `cmd skills` — docs/commandcode-setup.md:3, 12, 20, 26, 32, 33, 34, 40, 41, 42, 68 — defined here | used here
- `cmd` — docs/commandcode-setup.md:5 — defined here
- `cmdc` — docs/commandcode-setup.md:5 — defined here
- `command-code` — docs/commandcode-setup.md:5 — defined here
- `Project scope` — docs/commandcode-setup.md:9 — defined here
- `User scope` — docs/commandcode-setup.md:23 — defined here
- `spec-driven-development` — docs/commandcode-setup.md:20, 41, 42, 52 — used here
- `interview-me` — docs/commandcode-setup.md:33 — used here
- `TUI slash menu` — docs/commandcode-setup.md:49 — defined here
- `[skill]` — docs/commandcode-setup.md:49, 52 — defined here
- `/skills` — docs/commandcode-setup.md:55 — defined here
- `agents-compat` — docs/commandcode-setup.md:64, 66 — defined here

## Structure
- `# Using agent-skills with Command Code` — docs/commandcode-setup.md:1
- `## Install` — docs/commandcode-setup.md:7
- `## Manage` — docs/commandcode-setup.md:37
- `## Usage` — docs/commandcode-setup.md:47
- `## Where skills live` — docs/commandcode-setup.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Accurately references the 25 skills in `addyosmani/agent-skills` available for multi-select installation (docs/commandcode-setup.md:15).
- Documents explicit support for cross-harness discovery paths (`.agents/skills/<name>/SKILL.md` and `~/.agents/skills/<name>/SKILL.md`) (docs/commandcode-setup.md:64, 66).
- Supports path-based targeting (`addyosmani/agent-skills/skills/interview-me`), branch pins (`@main`), and update semantics via `--force` (docs/commandcode-setup.md:32-34, 45).
- Every installed skill is mapped automatically to an interactive TUI slash command tagged `[skill]` (docs/commandcode-setup.md:49-53).

## Context cost
- File size: 2,437 bytes (~610 tokens).
- Transitive context cost: On-demand per-command execution model ensures zero static prompt overhead; skills are loaded only when invoked via `/skill-name`.
