---
package: rjm
path: scripts/validation/validate_copilot_agent_frontmatter.py
type: script
bytes: 7609
unit: inv-rjm-308
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_copilot_agent_frontmatter.py, sha256: e4b2a8f78737f7a264ad60ab2fe96757f850f658704bec47695d2d5fc4e42e76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_copilot_agent_frontmatter.py

## Purpose — required, verbatim
> "Validate that every Copilot custom-agent file has parseable YAML frontmatter." — scripts/validation/validate_copilot_agent_frontmatter.py:2

## Design intent — required
Guarantees that custom GitHub Copilot agent definitions in `.github/agents/*.agent.md` parse cleanly as YAML and declare required agent metadata. In GitHub Copilot CLI, agents are loaded by parsing frontmatter; if an agent's description contains unquoted colon-bearing text (e.g., `Context:`, `user:`, XML tags), YAML parsers interpret the colons as mapping keys and abort with syntax errors ("mapping values are not allowed in this context"). Six agents previously shipped broken and were silently omitted from Copilot. Furthermore, the gate enforces that each agent specifies non-empty string values for `name`, `description`, and `role`, and verifies that `role` belongs to the closed set (`strategic`, `coordinator`, `executor`, `support`) to avoid downstream bridge misclassifications during OpenClaw export.

## Phase — required
rjm:Verification

## Inputs — required
- Command-line arguments: `--agents-dir` (default: `.github/agents`) — scripts/validation/validate_copilot_agent_frontmatter.py:155
- Agent markdown files: `.github/agents/*.agent.md` — scripts/validation/validate_copilot_agent_frontmatter.py:4

## Outputs — required
- Standard output: violation diagnostic reporting path and parser error, or pass confirmation — scripts/validation/validate_copilot_agent_frontmatter.py:176, 187
- Standard error: directory resolution or existence errors — scripts/validation/validate_copilot_agent_frontmatter.py:166, 169
- Exit code 0: All Copilot agent files have valid YAML frontmatter — scripts/validation/validate_copilot_agent_frontmatter.py:16, 188
- Exit code 1: One or more files have malformed frontmatter — scripts/validation/validate_copilot_agent_frontmatter.py:17, 185
- Exit code 2: Config error (agents directory missing or escapes repository root) — scripts/validation/validate_copilot_agent_frontmatter.py:18, 167, 170

## Invokes — required
- script _parse_yaml_frontmatter — scripts/validation/yaml_utils.py:18

## Invoked by — required
- script validate_copilot_agent_frontmatter — scripts/validation/pre_pr_sequence.py:67
- script validate_copilot_agent_frontmatter — scripts/validation/checks_plugin.py:67

## Concepts named — required, verbatim
- `Copilot custom-agent` — scripts/validation/validate_copilot_agent_frontmatter.py:2 — used here
- `ADR-035` — scripts/validation/validate_copilot_agent_frontmatter.py:15 — used here
- `_REQUIRED_STRING_FIELDS` — scripts/validation/validate_copilot_agent_frontmatter.py:38 — defined here
- `_KNOWN_ROLES` — scripts/validation/validate_copilot_agent_frontmatter.py:43 — defined here
- `parse_frontmatter` — scripts/validation/validate_copilot_agent_frontmatter.py:52 — defined here
- `find_malformed` — scripts/validation/validate_copilot_agent_frontmatter.py:121 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_copilot_agent_frontmatter.py`, language: python3, lines: 193
- documented invocation:
  `python3 scripts/validation/validate_copilot_agent_frontmatter.py` (CLI entry point; default flags scan `.github/agents`)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `uv run python3 scripts/validation/validate_copilot_agent_frontmatter.py`, stdout: `[PASS] All 31 Copilot agent file(s) have valid YAML frontmatter.`, actual exit code: 0
  - Command without dependencies: `python3 scripts/validation/validate_copilot_agent_frontmatter.py`, stderr: `ModuleNotFoundError: No module named 'yaml'`, actual exit code: 1
- documented exit codes vs. actual exit paths in code:
  - Documented:
    ```
        0 - All Copilot agent files have valid YAML frontmatter
        1 - One or more files have malformed frontmatter
        2 - Config error (agents directory missing)
    ```
  - Actual exit paths:
    - `scripts/validation/validate_copilot_agent_frontmatter.py:167`: `return 2` (directory escapes repository root)
    - `scripts/validation/validate_copilot_agent_frontmatter.py:170`: `return 2` (agents directory not found)
    - `scripts/validation/validate_copilot_agent_frontmatter.py:185`: `return 1` (malformed frontmatter found)
    - `scripts/validation/validate_copilot_agent_frontmatter.py:188`: `return 0` (all valid)
    - `scripts/validation/validate_copilot_agent_frontmatter.py:192`: `raise SystemExit(main())`
- for validators/gates: can exit non-zero (exits 1 on malformed files, 2 on configuration error); passes with exit 0 on clean repository checkout (validating 31 agent files)
- does the output match what the documentation claims: yes, validates frontmatter of all 31 Copilot agent files and exits with code 0

## Defects — required
none

## Observations
Includes repository root containment enforcement in `_resolve_agents_dir` (lines 114-118), preventing traversal outside the repository tree.

## Context cost
7609 bytes, approximately 1900 tokens.
