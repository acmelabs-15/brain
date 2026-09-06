---
package: rjm
path: .claude/skills/slo-designer/scripts/generate_slo_document.py
type: script
bytes: 13258
unit: inv-rjm-168
in_scope_via: .claude/skills/slo-designer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slo-designer/scripts/generate_slo_document.py, sha256: 6cfedee270c2143f72cb05e1d5d1984bd31db0761caa9f91c1d71d621d547e80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slo-designer/scripts/generate_slo_document.py

## Purpose — required, verbatim
> "Generate SLO document from configuration." — .claude/skills/slo-designer/scripts/generate_slo_document.py:2

## Design intent — required
Parses a YAML service configuration detailing user journeys, Service Level Indicators, Service Level Objectives, and burn rate alerting rules, and generates a standardized Markdown SLO specification document containing PromQL metric queries, error budget calculations, alerting policies, governance rules, and implementation checklists. Integrates path safety validation (`validate_path_no_traversal`) to prevent directory traversal attacks (CWE-22) when writing output documents or reading configurations. Without this script, engineers would need to hand-craft error budget math, PromQL blocks, and governance sections, resulting in inconsistent documentation structures across services.

## Phase — required
rjm:spec

## Inputs — required
- CLI arguments: `--config <Path>` (path to YAML configuration file), `--output <Path>` (optional output path for generated document), `--sample-config` (optional flag to emit sample YAML config)
- YAML configuration file on disk specifying service metadata, user journeys, SLIs, SLOs, and alert rules
- Environment variables: `COPILOT_PLUGIN_ROOT` or `CLAUDE_PLUGIN_ROOT` (optional, for resolving library paths)

## Outputs — required
- Complete Markdown formatted SLO specification document printed to stdout or written to destination file at `--output <Path>`
- Sample configuration template printed to stdout when `--sample-config` is provided
- Status messages on stdout (`Generated: <path>`) and diagnostic errors on stderr
- Process exit codes: 0 on success, 1 on missing configuration file, 2 on YAML parsing or missing dependency errors, 3 on generation failure, 2 on argparse error

## Invokes — required
- script path_safety — .claude/skills/slo-designer/scripts/generate_slo_document.py:36

## Invoked by — required
- skill slo-designer — .claude/skills/slo-designer/SKILL.md:156

## Concepts named — required, verbatim
- `SLI` — .claude/skills/slo-designer/scripts/generate_slo_document.py:47 — defined here
- `SLO` — .claude/skills/slo-designer/scripts/generate_slo_document.py:59 — defined here
- `AlertConfig` — .claude/skills/slo-designer/scripts/generate_slo_document.py:69 — defined here
- `SLOConfig` — .claude/skills/slo-designer/scripts/generate_slo_document.py:79 — defined here
- `calculate_error_budget_minutes` — .claude/skills/slo-designer/scripts/generate_slo_document.py:92 — defined here
- `format_downtime` — .claude/skills/slo-designer/scripts/generate_slo_document.py:99 — defined here
- `parse_yaml_config` — .claude/skills/slo-designer/scripts/generate_slo_document.py:111 — defined here
- `generate_sli_section` — .claude/skills/slo-designer/scripts/generate_slo_document.py:169 — defined here
- `generate_slo_section` — .claude/skills/slo-designer/scripts/generate_slo_document.py:194 — defined here
- `generate_error_budget_section` — .claude/skills/slo-designer/scripts/generate_slo_document.py:213 — defined here
- `generate_alerting_section` — .claude/skills/slo-designer/scripts/generate_slo_document.py:236 — defined here
- `generate_default_alerting_section` — .claude/skills/slo-designer/scripts/generate_slo_document.py:257 — defined here
- `generate_slo_document` — .claude/skills/slo-designer/scripts/generate_slo_document.py:285 — defined here
- `create_sample_config` — .claude/skills/slo-designer/scripts/generate_slo_document.py:364 — defined here
- `main` — .claude/skills/slo-designer/scripts/generate_slo_document.py:429 — defined here

## Structure
none (python script; classes and functions: SLI, SLO, AlertConfig, SLOConfig, calculate_error_budget_minutes, format_downtime, parse_yaml_config, generate_sli_section, generate_slo_section, generate_error_budget_section, generate_alerting_section, generate_default_alerting_section, generate_slo_document, create_sample_config, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/slo-designer/scripts/generate_slo_document.py`, language: Python 3, lines: 504
- documented invocation:
  - "uv run python .claude/skills/slo-designer/scripts/generate_slo_document.py \\" — .claude/skills/slo-designer/SKILL.md:156
  - "%(prog)s --config slo-config.yaml --output docs/slo-user-api.md" — .claude/skills/slo-designer/scripts/generate_slo_document.py:436
  - "%(prog)s --sample-config > slo-config.yaml" — .claude/skills/slo-designer/scripts/generate_slo_document.py:437
- **executed:** yes
- actual command run (sample-config): `python3 sources/rjm/.claude/skills/slo-designer/scripts/generate_slo_document.py --sample-config`
  abridged stdout:
  ```yaml
  # SLO Configuration Example
  # Use this as a template for your service

  service:
    name: User API
    owner: Platform Team
    description: Core user management API for authentication and profile operations
    criticality: High

  user_journeys:
    - User can log in within 2 seconds
    - User can view their profile without errors
    - User can update their settings and see changes immediately
  ```
  **actual exit code:** 0
- actual command run (generate document): `sources/rjm/.venv/bin/python sources/rjm/.claude/skills/slo-designer/scripts/generate_slo_document.py --config sources/rjm/.claude/skills/slo-designer/templates/slo-config-template.yaml`
  abridged stdout:
  ```markdown
  # SLO Document: Your Service Name

  > Generated: 2026-09-05

  ## Service Overview

  - **Name**: Your Service Name
  - **Owner**: Team Name
  - **Description**: Brief description of what the service does
  - **Business Criticality**: High

  ## Critical User Journeys

  1. User can complete primary action within X seconds
  2. User can view their data without errors
  3. User can perform secondary action reliably

  ## Service Level Indicators

  ### SLI 1: Availability
  - **Definition**: Percentage of successful HTTP requests (non-5xx)
  - **Measurement**: `sum(rate(http_requests_total{service="your-service",status!~"5.."}[5m])) / sum(rate(http_requests_total{service="your-service"}[5m]))`
  ```
  **actual exit code:** 0
- documented exit codes:
  - "0: Success" — .claude/skills/slo-designer/scripts/generate_slo_document.py:7
  - "1: Invalid arguments" — .claude/skills/slo-designer/scripts/generate_slo_document.py:8
  - "2: Configuration error" — .claude/skills/slo-designer/scripts/generate_slo_document.py:9
  - "3: Generation error" — .claude/skills/slo-designer/scripts/generate_slo_document.py:10
  vs. actual exit paths in code:
  - exit 0: `return 0` at lines 465 and 495 (propagated via `sys.exit(main())` at line 503)
  - exit 1: `return 1` at line 472 (when config file does not exist)
  - exit 2: `return 2` at lines 478 and 481 (on `ImportError` for PyYAML or config parse `Exception`)
  - exit 2: `parser.error()` at line 468 (when `--config` is omitted without `--sample-config`), and argparse CLI errors exit with code 2, conflicting with docstring claim that invalid arguments exit with code 1
  - exit 3: `return 3` at line 499 (on document generation exception)
- for validators/gates:
  - Can it exit non-zero? Yes, exits 1 on nonexistent config file, exits 2 on missing/invalid arguments or YAML parse errors, exits 3 on document generation errors.
  - Does it fail on the source repo's own default branch? Exits 0 with valid configuration files; passes all 90 unit tests in `tests/test_slo_designer_scripts.py`.
- does the output match what the documentation claims? Mostly, but error budget calculation in `generate_error_budget_section` assumes target is an availability rate (`100 - target`), which produces incorrect results for error rate targets (e.g. `target: 0.1` results in `error_budget: 99.9%` and 719 hours allowed downtime).

## Defects — required
- internal-contradiction · .claude/skills/slo-designer/scripts/generate_slo_document.py:223 · Error budget calculation in `generate_error_budget_section` assumes targets represent availability percentages (`100 - slo.target`); when passed error rate targets like 0.1%, it erroneously calculates a 99.9% error budget allowance.
- exit-code-mismatch · .claude/skills/slo-designer/scripts/generate_slo_document.py:8 · Docstring documents exit code 1 for invalid arguments, but argparse and `parser.error` at line 468 exit with code 2.

## Observations
- Demonstrates strong defensive coding against directory traversal (CWE-22) via `validate_path_no_traversal`.
- Falls back to `generate_default_alerting_section()` when the configuration file defines no custom alert thresholds.

## Context cost
13,258 bytes + lib/hook_utilities/path_safety.py (~4,800 bytes) = approximately 18,058 bytes, ~4,514 tokens.
