---
package: rjm
path: .claude/skills/chaos-experiment/scripts/generate_experiment.py
type: script
bytes: 8678
unit: inv-rjm-98
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/generate_experiment.py, sha256: 73b8a865a5fda70135d588b957fadcea836fc97f915b8e10accd54420010934e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/chaos-experiment/scripts/generate_experiment.py

## Purpose — required, verbatim
> "Generate a chaos experiment document from the template." — .claude/skills/chaos-experiment/scripts/generate_experiment.py:3

## Design intent — required
Automates the creation of standardized chaos engineering experiment markdown documents by populating `templates/experiment-template.md` with experiment metadata (name, unique experiment ID, timestamps, owner, target system, region). Generates unique experiment IDs (`chaos-YYYYMMDD-<slug>`), enforces path safety against traversal (CWE-22), and writes artifacts to the resolved artifact directory (`.agents/chaos/` or configured artifact root) or prints them to stdout via dry-run or JSON mode.

## Phase — required
rjm:review

## Inputs — required
Command-line arguments parsed via `argparse`:
- `--name` (required): Name of the chaos experiment
- `--system`: System under test (default: `TBD`)
- `--owner`: Experiment owner (default: `TBD`)
- `--region`: Target region/zone (default: `TBD`)
- `--target-date`: Target execution date (default: `TBD`)
- `--output`: Output directory (defaults to artifact root `chaos/` subdir via `paths.resolve_artifact_root`)
- `--json`: Output result as JSON
- `--dry-run`: Print document without saving
Template file:
- `.claude/skills/chaos-experiment/templates/experiment-template.md`

## Outputs — required
- Markdown document saved to `<output_dir>/YYYY-MM-DD-<slug>.md`
- Structured JSON output to stdout if `--json` is specified
- Rendered experiment document to stdout if `--dry-run` is specified

## Invokes — required
- script paths — .claude/skills/chaos-experiment/scripts/generate_experiment.py:45
- script hook_utilities.path_safety — .claude/skills/chaos-experiment/scripts/generate_experiment.py:49
- template experiment-template.md — .claude/skills/chaos-experiment/scripts/generate_experiment.py:75

## Invoked by — required
- script .claude/skills/chaos-experiment/SKILL.md:266

## Concepts named — required, verbatim
- `Result` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:56 — defined here
- `generate_experiment_id` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:65 — defined here
- `load_template` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:72 — defined here
- `generate_document` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:83 — defined here
- `save_document` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:120 — defined here
- `main` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:136 — defined here
- `validate_path_no_traversal` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:49 — used here
- `resolve_artifact_root` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:221 — used here

## Structure
- def _resolve_paths_lib_dir — .claude/skills/chaos-experiment/scripts/generate_experiment.py:20
- class Result — .claude/skills/chaos-experiment/scripts/generate_experiment.py:56
- def generate_experiment_id — .claude/skills/chaos-experiment/scripts/generate_experiment.py:65
- def load_template — .claude/skills/chaos-experiment/scripts/generate_experiment.py:72
- def generate_document — .claude/skills/chaos-experiment/scripts/generate_experiment.py:83
- def save_document — .claude/skills/chaos-experiment/scripts/generate_experiment.py:120
- def main — .claude/skills/chaos-experiment/scripts/generate_experiment.py:136

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.claude/skills/chaos-experiment/scripts/generate_experiment.py`, Python 3, 299 lines
- documented invocation: "python generate_experiment.py --name \"API Gateway Resilience\"" — .claude/skills/chaos-experiment/scripts/generate_experiment.py:6
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/generate_experiment.py --name "API Gateway Resilience" --dry-run`
- abridged stdout: `# Chaos Experiment: API Gateway Resilience\n\n## Metadata\n\n| Field | Value |\n|-------|-------|\n| **Experiment ID** | chaos-20260905-api-gateway-resilience |...`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none in script docstring (SKILL.md:270-277 documents exit codes 0, 1, 2, 10 under `## Scripts`)
  - Actual exit paths:
    - `sys.exit(0 if result.success else 1)` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:298 (returns 0 on success, 1 on caught `FileNotFoundError` or general `Exception`)
    - Argparse exit code 2 on invalid arguments or missing required options via `parser.parse_args()` — .claude/skills/chaos-experiment/scripts/generate_experiment.py:194
- for validators/gates: not a validator/gate (generator utility)
- does the output match what the documentation claims: yes, populates the template placeholders with values and outputs the formatted markdown document

## Defects — required
- `doc-drift` · .claude/skills/chaos-experiment/scripts/generate_experiment.py:6 · Docstring documents `python generate_experiment.py ...` which only works from `scripts/`, whereas SKILL.md:266 documents `python scripts/generate_experiment.py ...`.
- `doc-drift` · .claude/skills/chaos-experiment/scripts/generate_experiment.py:298 · SKILL.md:276 lists exit code 10 for validation failure under the skill's scripts table, but `generate_experiment.py` only exits 0 or 1 (or 2 via argparse).

## Observations
- Implements ADR-047 dynamic library resolution (`_resolve_paths_lib_dir`) to allow running both within plugin environments (`COPILOT_PLUGIN_ROOT`, `CLAUDE_PLUGIN_ROOT`) and direct checkouts.
- Integrates with `paths.resolve_artifact_root("chaos")` (addressing Issue #2050) to store documents in project-local artifact directories rather than hardcoded locations.
- Path traversal prevention is enforced via `validate_path_no_traversal(output_dir, "output directory")`.

## Context cost
8678 bytes. Approximately 2100 tokens.
