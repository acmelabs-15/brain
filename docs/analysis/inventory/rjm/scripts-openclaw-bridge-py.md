---
package: rjm
path: scripts/openclaw_bridge.py
type: script
bytes: 13093
unit: inv-rjm-255
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/openclaw_bridge.py

## Purpose — required, verbatim
> "Export ai-agents definitions to OpenClaw-compatible workspace format." — scripts/openclaw_bridge.py:2

## Design intent — required
Converts agent definitions from `src/claude/*.md` into OpenClaw workspace layout (`AGENTS.md` routing table and `skills/<agent>/SKILL.md` skill stubs), mapping models (e.g. `opus` to `anthropic/claude-opus-4-6`) and standardizing roles (`strategic`, `coordinator`, `executor`, `support`). Without this bridge, ai-agents definitions could not be exported to or executed within OpenClaw environments.

## Phase — required
none

## Inputs — required
- Command-line arguments (`--agents-dir`, `--output-dir`, `--dry-run`, `--format`) parsed by `parse_args` — scripts/openclaw_bridge.py:403
- Markdown files with YAML frontmatter loaded via `glob` — scripts/openclaw_bridge.py:197

## Outputs — required
- When format is workspace: creates workspace `AGENTS.md` and `SKILL.md` files via `write_workspace` — scripts/openclaw_bridge.py:421
- When format is json: emits JSON string via `export_json` — scripts/openclaw_bridge.py:417

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `_validate_path_component` — scripts/openclaw_bridge.py:39 — defined here
- `_KNOWN_ROLES` — scripts/openclaw_bridge.py:61 — defined here
- `_DEFAULT_ROLE` — scripts/openclaw_bridge.py:68 — defined here
- `_MODEL_MAP` — scripts/openclaw_bridge.py:71 — defined here
- `AgentDefinition` — scripts/openclaw_bridge.py:79 — defined here
- `ExportResult` — scripts/openclaw_bridge.py:92 — defined here
- `parse_agent_file` — scripts/openclaw_bridge.py:101 — defined here
- `_read_declared_role` — scripts/openclaw_bridge.py:136 — defined here
- `_resolve_role` — scripts/openclaw_bridge.py:163 — defined here
- `load_agents` — scripts/openclaw_bridge.py:187 — defined here
- `generate_agents_md` — scripts/openclaw_bridge.py:206 — defined here
- `generate_skill_md` — scripts/openclaw_bridge.py:249 — defined here
- `export_agents` — scripts/openclaw_bridge.py:285 — defined here
- `write_workspace` — scripts/openclaw_bridge.py:308 — defined here
- `export_json` — scripts/openclaw_bridge.py:345 — defined here
- `main` — scripts/openclaw_bridge.py:367 — defined here

## Structure
- def _validate_path_component(name: str, base_dir: Path) -> Path: — scripts/openclaw_bridge.py:39
- class AgentDefinition: — scripts/openclaw_bridge.py:79
- class ExportResult: — scripts/openclaw_bridge.py:92
- def parse_agent_file(path: Path) -> AgentDefinition | None: — scripts/openclaw_bridge.py:101
- def _read_declared_role(metadata: dict[str, Any]) -> object | None: — scripts/openclaw_bridge.py:136
- def _resolve_role(metadata: dict[str, Any], path: Path) -> str: — scripts/openclaw_bridge.py:163
- def load_agents(agents_dir: Path) -> list[AgentDefinition]: — scripts/openclaw_bridge.py:187
- def generate_agents_md(agents: list[AgentDefinition]) -> str: — scripts/openclaw_bridge.py:206
- def generate_skill_md(agent: AgentDefinition) -> str: — scripts/openclaw_bridge.py:249
- def export_agents(agents: list[AgentDefinition]) -> ExportResult: — scripts/openclaw_bridge.py:285
- def write_workspace(result: ExportResult, output_dir: Path, dry_run: bool = False) -> int: — scripts/openclaw_bridge.py:308
- def export_json(agents: list[AgentDefinition]) -> str: — scripts/openclaw_bridge.py:345
- def main(argv: list[str] | None = None) -> int: — scripts/openclaw_bridge.py:367

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/openclaw_bridge.py`, language: Python, lines: 430
- documented invocation: `"uv run python scripts/openclaw_bridge.py --dry-run" — scripts/openclaw_bridge.py:11`
- **executed:** yes
- actual command run: `uv run python scripts/openclaw_bridge.py --dry-run`, abridged stdout: `Found 31 agent definitions\n  WOULD CREATE openclaw-workspace/AGENTS.md\n  WOULD CREATE openclaw-workspace/skills/analyst/SKILL.md\n  ...\nWould create 32 files for 31 agents`, **actual exit code**: 0
- documented exit codes: `"0: Success" — scripts/openclaw_bridge.py:15`, `"1: Logic error" — scripts/openclaw_bridge.py:16`, `"2: Configuration error (invalid paths)" — scripts/openclaw_bridge.py:17` vs. actual exit paths: `return 0` (scripts/openclaw_bridge.py:418, 425), `return 1` (scripts/openclaw_bridge.py:412), `return 2` (scripts/openclaw_bridge.py:407), dispatched via `sys.exit(main())` (scripts/openclaw_bridge.py:429)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, discovers 31 agents from `src/claude` and simulates writing workspace files

## Defects — required
- `doc-drift` · scripts/openclaw_bridge.py:6 · Module docstring claims generation of "per-agent SOUL.md skill stubs", but write_workspace creates `skills/<name>/SKILL.md` (scripts/openclaw_bridge.py:333).
- `orphan` · scripts/openclaw_bridge.py:1 · Standalone CLI export tool not invoked by any workflow command or lifecycle pipeline.

## Observations
- Handles both top-level (`role:`) and nested (`metadata.role`) frontmatter shapes to support historical migration from Claude-specific configurations.
- Sanitizes agent names with `_validate_path_component` to prevent directory traversal attacks when writing workspace files.

## Context cost
13093 bytes, approximately 3300 tokens.
