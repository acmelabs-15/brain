---
package: rjm
path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py
type: script
bytes: 3836
unit: inv-rjm-167
in_scope_via: .claude/skills/slashcommandcreator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slashcommandcreator/scripts/new_slash_command.py

## Purpose — required, verbatim
> "Create new slash command with frontmatter template." — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:2

The script header further clarifies its purpose:
"Automates slash command file creation with proper frontmatter structure." — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:4
"Generates a template file that passes initial validation." — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:5

## Design intent — required
Automates scaffolding of new Claude Code slash command definition files (`.claude/commands/[namespace]/[name].md` or `.claude/commands/[name].md`) with compliant YAML frontmatter and template Markdown sections. Enforces input sanitization via regex on command names and namespaces to prevent directory traversal vulnerabilities (CWE-22), creates intermediate parent directories as needed, ensures existing command files are not inadvertently overwritten, and prints actionable next steps referencing `validate_slash_command.py`. Without this script, command authors would have to manually format frontmatter keys (`description`, `argument-hint`, `allowed-tools`) and command argument placeholders, increasing the risk of validation errors or path-traversal bugs.

## Phase — required
none

## Inputs — required
- CLI flag `--name` (required): "Command name (e.g., security-audit)" — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:31
- CLI flag `--namespace` (optional): "Optional namespace (e.g., git, memory)" — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:36

## Outputs — required
- Command markdown file: `.claude/commands/{namespace}/{name}.md` or `.claude/commands/{name}.md` populated with frontmatter template and argument skeleton — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:67-69
- Standard output: Creation confirmation message `[PASS] Created: {file_path}` and step-by-step next instructions — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:127
- Standard error: Diagnostic error messages for invalid character names, existing files, or OS filesystem failures — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:49, 73, 82, 120

## Invokes — required
none

## Invoked by — required
- doc .claude/skills/slashcommandcreator/SKILL.md — .claude/skills/slashcommandcreator/SKILL.md:124
- doc .claude/skills/slashcommandcreator/SKILL.md — .claude/skills/slashcommandcreator/SKILL.md:256

## Concepts named — required, verbatim
- `slash command` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:2 — defined here | used here
- `frontmatter` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:2 — used here
- `ADR-035` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:7 — used here
- `CWE-22` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:22 — used here
- `_validate_name` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:21 — defined here
- `build_parser` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:26 — defined here
- `main` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:41 — defined here
- `description` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:91 — used here
- `argument-hint` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:92 — used here
- `allowed-tools` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:93 — used here
- `$ARGUMENTS` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:102 — used here
- `validate_slash_command.py` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:132 — used here

## Structure
- Script docstring and ADR-035 exit specification — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:2
- Input name sanitizer `_validate_name` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:21
- Command-line argument parser `build_parser` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:26
- Main execution flow and file generation `main` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:41
- Frontmatter and prompt body template definition — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:89
- Execution entrypoint invocation — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:144

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/slashcommandcreator/scripts/new_slash_command.py`
- language: Python (python3)
- lines: 146
- documented invocation:
  - `python3 "$SCRIPTS_DIR/new_slash_command.py" --name <name> --description <desc>` — .claude/skills/slashcommandcreator/SKILL.md:256
- executed: yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py --name test-cmd` (executed in a temporary directory)
- abridged stdout:
  ```text
  [PASS] Created: .claude/commands/test-cmd.md

  Next steps:
    1. Edit frontmatter (description, argument-hint, allowed-tools)
    2. Write prompt body
    3. Run: python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py --path .claude/commands/test-cmd.md
    4. Test: /test-cmd [arguments]
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - Documented in header (.claude/skills/slashcommandcreator/scripts/new_slash_command.py:7-10):
    - `0 - Success: Command file created` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:8
    - `1 - Error: Invalid input, file exists, or creation failed` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:9
  - Actual exit paths in code:
    - `return 0` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:141 (successful creation)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:54 (invalid name character check)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:62 (invalid namespace character check)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:74 (file already exists)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:86 (directory creation failure)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:118 (file existence verification failure after write)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:125 (file write OSError)
    - `SystemExit(2)` via `argparse` when CLI arguments are missing or unrecognized flags are passed
- for validators/gates: not a validator or gate (template generator); exits non-zero (1 on input/OS errors, 2 on argparse error).
- does the output match what the documentation claims: yes for the file template and next step instructions, but documented invocation in `SKILL.md:256` documents `--description <desc>` which fails with exit code 2 because `--description` is not a recognized CLI argument.

## Defects — required
- `doc-drift`: In .claude/skills/slashcommandcreator/SKILL.md:256, documented invocation specifies `python3 "$SCRIPTS_DIR/new_slash_command.py" --name <name> --description <desc>`, but `new_slash_command.py` does not accept a `--description` parameter and fails with exit code 2 (`error: unrecognized arguments: --description`).
- `exit-code-mismatch`: Header docstring lines 7-10 specifies exit codes 0 and 1 under ADR-035, but argparse exits with code 2 on missing or unrecognized arguments.

## Observations
- Assumes execution from repository root or working directory containing `.claude` due to hardcoded base directory `Path(".claude/commands")` (.claude/skills/slashcommandcreator/scripts/new_slash_command.py:65).
- Prevents CWE-22 path traversal by enforcing regex `^[a-zA-Z0-9_-]+$` on both `name` and `namespace` arguments (.claude/skills/slashcommandcreator/scripts/new_slash_command.py:21-23).
- Resolves absolute filesystem path to `validate_slash_command.py` via `Path(__file__).resolve().parent` when formatting printed next steps (.claude/skills/slashcommandcreator/scripts/new_slash_command.py:131-133).

## Context cost
3836 bytes, 146 lines. Only imports Python standard library modules (`argparse`, `re`, `shlex`, `sys`, `pathlib`). Approximately 960 tokens.
