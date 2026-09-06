---
package: rjm
path: scripts/validation/agent_registry.py
type: script
bytes: 9761
unit: inv-rjm-272
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/agent_registry.py, sha256: 1fc80c4c6f8e47f82c460cad6e02d91f2fe6766ffea24e7c70f9e5f5b7f07e1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/agent_registry.py

## Purpose — required, verbatim
> "Parse and validate agent definitions from src/claude/*.md." — scripts/validation/agent_registry.py:2

## Design intent — required
Provides an automated validation tool and registry parser for agent markdown definitions in `src/claude/`. It extracts and parses YAML frontmatter using a dynamic build helper (`build/generate_agents_common.py`), strictly verifying that each agent markdown file contains a non-empty name, description, and valid model (`opus`, `sonnet`, or `haiku`), while forbidding duplicate agent names and duplicate top-level frontmatter keys. By exiting non-zero when agent files lose frontmatter or carry malformed YAML (avoiding silent drops), and by excluding non-agent files (`AGENTS.md`, `claude-instructions.template.md`), it ensures that the agent inventory remains reliable, consistent, and consumable by downstream build generation and runtime tooling.

## Phase — required
none

## Inputs — required
- Command-line arguments via `argparse`:
  - `--agent-dir`: Directory containing agent markdown files (default: `src/claude`) — scripts/validation/agent_registry.py:231, 234
  - `--json`: Output results as JSON — scripts/validation/agent_registry.py:237, 240
- Agent markdown definition files matching `*.md` in `agent_dir` — scripts/validation/agent_registry.py:173
- Frontmatter text extracted from agent markdown files — scripts/validation/agent_registry.py:147

## Outputs — required
- Standard output: human-readable agent parse summary and error/warning report (scripts/validation/agent_registry.py:268), or JSON object with `agents_parsed`, `errors`, `warnings`, and `ok` (scripts/validation/agent_registry.py:257)
- Exit codes:
  - 0: all agents valid — scripts/validation/agent_registry.py:8, 278
  - 1: logic error / validation failures detected — scripts/validation/agent_registry.py:9, 278
  - 2: config error / missing paths or bad configuration — scripts/validation/agent_registry.py:10, 245

## Invokes — required
- script generate_agents_common.py — scripts/validation/agent_registry.py:32

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/agent_registry.py:7 — used here
- `read_yaml_frontmatter` — scripts/validation/agent_registry.py:61 — used here
- `_EXCLUDED_FILES` — scripts/validation/agent_registry.py:64 — defined here
- `_REQUIRED_FIELDS` — scripts/validation/agent_registry.py:67 — defined here
- `_VALID_MODELS` — scripts/validation/agent_registry.py:70 — defined here
- `AgentDefinition` — scripts/validation/agent_registry.py:74 — defined here
- `ValidationResult` — scripts/validation/agent_registry.py:85 — defined here
- `MalformedAgentFileError` — scripts/validation/agent_registry.py:96 — defined here
- `argument-hint` — scripts/validation/agent_registry.py:151 — used here

## Structure
- `_build_utility_path` — scripts/validation/agent_registry.py:30
- `_load_read_yaml_frontmatter` — scripts/validation/agent_registry.py:35
- `AgentDefinition` — scripts/validation/agent_registry.py:74
- `ValidationResult` — scripts/validation/agent_registry.py:85
- `MalformedAgentFileError` — scripts/validation/agent_registry.py:96
- `_parse_frontmatter` — scripts/validation/agent_registry.py:100
- `_text_field` — scripts/validation/agent_registry.py:127
- `parse_agent_file` — scripts/validation/agent_registry.py:132
- `parse_agent_files` — scripts/validation/agent_registry.py:165
- `validate` — scripts/validation/agent_registry.py:187
- `main` — scripts/validation/agent_registry.py:225

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/agent_registry.py`, language: Python, lines: 283
- documented invocation:
  - `"Parse and validate agent definitions in src/claude/."` — scripts/validation/agent_registry.py:228
- executed: yes
- actual command run:
  `uv run python scripts/validation/agent_registry.py`
  abridged stdout:
  ```
  Parsed 31 agents
  Validation passed
  ```
  actual exit code: 0
- JSON command execution:
  `uv run python scripts/validation/agent_registry.py --json`
  abridged stdout:
  ```json
  {
    "agents_parsed": 31,
    "errors": [],
    "warnings": [],
    "ok": true
  }
  ```
  actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - Success: all agents valid" — scripts/validation/agent_registry.py:8
    - "1 - Logic error: validation failures detected" — scripts/validation/agent_registry.py:9
    - "2 - Config error: missing paths or bad configuration" — scripts/validation/agent_registry.py:10
  - Actual exit paths:
    - `return 2` at scripts/validation/agent_registry.py:245 when agent directory not found
    - `return 0 if result.ok else 1` at scripts/validation/agent_registry.py:278
    - `raise SystemExit(main())` at scripts/validation/agent_registry.py:282
- for validators/gates: can it exit non-zero? Yes, exits 1 on validation errors or empty agent directory (`scripts/validation/agent_registry.py:278`), and exits 2 on non-existent directory (`scripts/validation/agent_registry.py:245`). Does it fail on the source repo's own default branch? No, passes with 31 agents parsed and exit code 0.
- does output match what documentation claims? Yes, validates all agents in `src/claude/` and exits 0 on success.

## Defects — required
- orphan · scripts/validation/agent_registry.py:1 · Not invoked by any in-scope lifecycle file; only referenced by excluded build scripts (build/generate_agents_common.py, build/model_pin_manifest.py) and test suites.

## Observations
Imports `read_yaml_frontmatter` dynamically at import time from `build/generate_agents_common.py` using `importlib.util.spec_from_file_location` without modifying `sys.path`. If `build/generate_agents_common.py` is absent or unreadable, importing the module raises an `ImportError`. Also contains strict YAML frontmatter validation that rejects duplicate top-level keys and non-scalar mapping keys.

## Context cost
File size: 9761 bytes, 283 lines, ~2400 tokens. Dynamically imports `build/generate_agents_common.py` (25158 bytes), totaling ~34919 bytes (~8700 tokens).
