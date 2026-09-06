---
package: rjm
path: scripts/init_project.py
type: script
bytes: 19076
unit: inv-rjm-247
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/init_project.py, sha256: df74d89faf34d0976361c0bcf2d5ab18f630e8605857e8a4506087059752e6eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/init_project.py

## Purpose — required, verbatim
> "Initialize ai-agents project scaffolding for a new repository." — scripts/init_project.py:2

## Design intent — required
Scaffolds the ai-agents multi-agent configuration and directory structure for a new or existing repository. It provisions directories under `.agents/` (`architecture`, `governance`, `sessions`, `planning`, `memory`), cross-platform instruction files (`AGENTS.md`, `CLAUDE.md`), an initial agent team roster (`.agents/team.yaml`), GitHub Copilot instructions (`.github/copilot-instructions.md`), user onboarding documentation (`GETTING-STARTED.md`), version tracking (`.claude/.ai-agents-version.json`), and updates `.gitignore` to exclude session logs. It also supports querying installed commands, agents, and skills (`list` subcommand) and re-scaffolding updates (`update` subcommand).

## Phase — required
none

## Inputs — required
- CLI arguments via argparse:
  - Subcommands: `init`, `list` (with optional `filter_type` positional argument), `update`
  - `--target-dir DIR` (default: current working directory)
  - `--minimal` flag
  - `--force` flag
  - `--dry-run` flag
  - `--only CATEGORIES` (`commands`, `agents`, `skills`)
- Existing filesystem state:
  - Target project directory path and permissions
  - Version file `.claude/.ai-agents-version.json`
  - `.gitignore` in target directory
  - Subdirectories `.claude/commands`, `.claude/agents`, `.claude/skills` in target directory for listing

## Outputs — required
- Directories created under target directory:
  - `.agents/architecture`
  - `.agents/governance` (omitted if `--minimal`)
  - `.agents/sessions`
  - `.agents/planning` (omitted if `--minimal`)
  - `.agents/memory` (omitted if `--minimal`)
- Files created or updated in target directory:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `.agents/team.yaml` (omitted if `--minimal`)
  - `.github/copilot-instructions.md` (omitted if `--minimal`)
  - `GETTING-STARTED.md`
  - `.gitignore` (appends `.agents/sessions/*.json`)
  - `.claude/.ai-agents-version.json`
- Console output:
  - Action log (`CREATE`, `SKIP`, `WOULD CREATE`, `UPDATE`)
  - Operation summary with count of created files, created directories, and skipped files
  - Vendored asset listing by category for `list` subcommand

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-042` — scripts/init_project.py:18 — used here
`_AGENTS_DIRS` — scripts/init_project.py:39 — defined here
`_AGENTS_DIRS_MINIMAL` — scripts/init_project.py:48 — defined here
`_CLAUDE_MD_TEMPLATE` — scripts/init_project.py:53 — defined here
`_AGENTS_MD_TEMPLATE` — scripts/init_project.py:59 — defined here
`_GITIGNORE_ENTRIES` — scripts/init_project.py:80 — defined here
`_TEAM_YAML_TEMPLATE` — scripts/init_project.py:85 — defined here
`_COPILOT_INSTRUCTIONS_TEMPLATE` — scripts/init_project.py:110 — defined here
`_GETTING_STARTED_TEMPLATE` — scripts/init_project.py:116 — defined here
`_VERSION_FILE` — scripts/init_project.py:148 — defined here
`_VALID_ONLY_CATEGORIES` — scripts/init_project.py:150 — defined here
`_read_version_file` — scripts/init_project.py:153 — defined here
`_write_version_file` — scripts/init_project.py:163 — defined here
`_scan_directory` — scripts/init_project.py:175 — defined here
`_extract_description` — scripts/init_project.py:188 — defined here
`ProjectInitializer` — scripts/init_project.py:214 — defined here
`validate_target` — scripts/init_project.py:239 — defined here
`scaffold_agents_dirs` — scripts/init_project.py:290 — defined here
`scaffold_agents_md` — scripts/init_project.py:300 — defined here
`scaffold_claude_md` — scripts/init_project.py:307 — defined here
`scaffold_team_manifest` — scripts/init_project.py:314 — defined here
`scaffold_copilot_instructions` — scripts/init_project.py:323 — defined here
`scaffold_getting_started` — scripts/init_project.py:332 — defined here
`update_gitignore` — scripts/init_project.py:339 — defined here
`_print_summary` — scripts/init_project.py:402 — defined here
`_add_init_args` — scripts/init_project.py:419 — defined here
`_parse_only` — scripts/init_project.py:450 — defined here
`_run_init` — scripts/init_project.py:465 — defined here
`_run_list` — scripts/init_project.py:481 — defined here
`_run_update` — scripts/init_project.py:517 — defined here
`main` — scripts/init_project.py:544 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/init_project.py`, language: Python 3, lines: 614
- documented invocation: `"python3 scripts/init_project.py init [--target-dir DIR] [--minimal] [--force]" — scripts/init_project.py:8`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/init_project.py init --dry-run`, abridged stdout: `[DRY RUN] Initializing ai-agents (full) in /Users/peterkloss/Dev/ACMElabs/brain-v2\n  WOULD CREATE .agents/architecture/\n  WOULD CREATE .agents/governance/\n  WOULD CREATE .agents/sessions/\n  WOULD CREATE .agents/planning/\n  WOULD CREATE .agents/memory/\n  SKIP AGENTS.md (exists, use --force to overwrite)\n  WOULD CREATE CLAUDE.md\n  WOULD CREATE .agents/team.yaml\n  WOULD CREATE .github/copilot-instructions.md\n  WOULD CREATE GETTING-STARTED.md\n  WOULD UPDATE .gitignore\n\nDry run complete. 4 files and 5 directories would be created.`, **actual exit code**: 0
- documented exit codes:
  `"0: Success" — scripts/init_project.py:14`
  `"1: Logic error (e.g., files already exist without --force)" — scripts/init_project.py:15`
  `"2: Configuration error (e.g., invalid target directory)" — scripts/init_project.py:16`
  vs. actual exit paths:
  `scripts/init_project.py:370` (`return 2` if validate_target fails)
  `scripts/init_project.py:393` (`return 1` if a scaffolding step returns False)
  `scripts/init_project.py:400` (`return 0` on completion)
  `scripts/init_project.py:469` (`return 2` if invalid `--only` categories passed)
  `scripts/init_project.py:512` (`return 1` if no content found in `list`)
  `scripts/init_project.py:514` (`return 0` on `list` success)
  `scripts/init_project.py:527` (`return 2` if no version file found in `update`)
  `scripts/init_project.py:599` (`return 0` on `--help` or no subcommand)
  `scripts/init_project.py:609` (`return 0` default exit from main)
  dispatched via `sys.exit(main())` at `scripts/init_project.py:613`
- for validators/gates: not a validation gate; repository scaffolding utility
- does the output match what the documentation claims? yes, dry-run previews creation and skip behavior

## Defects — required
- `doc-drift` · `scripts/init_project.py:15` · Docstring claims exit 1 occurs when files already exist without --force, but `ProjectInitializer._write_file` skips existing files and returns True, resulting in exit code 0.
- `orphan` · `scripts/init_project.py:1` · Not directly invoked by any in-scope lifecycle command or skill.

## Observations
Scaffolds default agent team containing 8 roles: orchestrator, implementer, analyst, architect, qa, security, devops, critic. Scaffolding templates are embedded as string constants rather than loaded from external files.

## Context cost
19076 bytes, approximately 4700 tokens.
