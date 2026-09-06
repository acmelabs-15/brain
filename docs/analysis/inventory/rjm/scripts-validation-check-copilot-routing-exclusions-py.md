---
package: rjm
path: scripts/validation/check_copilot_routing_exclusions.py
type: script
bytes: 6846
unit: inv-rjm-278
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_copilot_routing_exclusions.py, sha256: d7fae2a3a71646d5de19396107aca1fb122a971001c0c1de52e0e6e995bd1336}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_copilot_routing_exclusions.py

## Purpose — required, verbatim
> "Validate that shipped Copilot skill surfaces do not route to excluded skills." — scripts/validation/check_copilot_routing_exclusions.py:2

## Design intent — required
Validates that generated Copilot CLI skill markdown surfaces (`src/copilot-cli/skills/**/*.md`) do not reference or instruct users to invoke skills that have been excluded from the public Copilot distribution via `templates/platforms/copilot-cli.yaml` (`artifacts.skills.excludeFilenames`). While canonical Claude Code skills can route to excluded skills (such as `merge-resolver`), shipped Copilot skills must not retain stale skill invocations or routing table references to non-shipping skills. However, references to an agent of the same name (e.g., `Agent: <name>` or `<name> agent`) remain permitted when that agent ships with Copilot. Without this validator, downstream Copilot CLI users would encounter dead-end skill routing instructions or broken cross-skill invocations pointing to skills excluded on their platform.

## Phase — required
rjm:test

## Inputs — required
- Configuration file `templates/platforms/copilot-cli.yaml` parsed via `yaml.safe_load` to extract `artifacts.skills.excludeFilenames` list and `artifacts.skills.sourceDir` (scripts/validation/check_copilot_routing_exclusions.py:45, 109)
- Canonical skill directory: `canonical_root` resolved from `artifacts.skills.sourceDir` (default `.claude/skills`) to verify whether excluded items are canonical skills via `_is_canonical_skill_name` (`<name>/SKILL.md`) (scripts/validation/check_copilot_routing_exclusions.py:52, 127)
- Shipped Copilot skill files: markdown files under `src/copilot-cli/skills/**/*.md` scanned for forbidden routing patterns (scripts/validation/check_copilot_routing_exclusions.py:71, 76)
- Optional CLI positional argument: `repo-root` path (defaulting to repository root relative to script file) (scripts/validation/check_copilot_routing_exclusions.py:195)

## Outputs — required
- Standard error: error message `[ERROR] <exc>` on `RoutingConfigError` (scripts/validation/check_copilot_routing_exclusions.py:86)
- Standard error: violation report listing violations (`Copilot routing exclusion violations detected:` followed by `- <rel_path>:<line_number>: <skill_name>: <line>` and remediation hint) (scripts/validation/check_copilot_routing_exclusions.py:93, 95, 98)
- Exit codes:
  - `0 - no violations found` — scripts/validation/check_copilot_routing_exclusions.py:10 (exited at line 197)
  - `1 - violations found` — scripts/validation/check_copilot_routing_exclusions.py:11 (exited at line 197)
  - `2 - configuration error` — scripts/validation/check_copilot_routing_exclusions.py:12 (exited at lines 194, 199)

## Invokes — required
none

## Invoked by — required
script scripts/validation/checks_copilot.py — scripts/validation/checks_copilot.py:8

## Concepts named — required, verbatim
- `RoutingConfigError` — scripts/validation/check_copilot_routing_exclusions.py:25 — defined here
- `RoutingViolation` — scripts/validation/check_copilot_routing_exclusions.py:30 — defined here
- `excludeFilenames` — scripts/validation/check_copilot_routing_exclusions.py:5 — used here
- `sourceDir` — scripts/validation/check_copilot_routing_exclusions.py:52 — used here
- `load_excluded_skill_names` — scripts/validation/check_copilot_routing_exclusions.py:43 — defined here
- `scan_copilot_skill_files` — scripts/validation/check_copilot_routing_exclusions.py:66 — defined here
- `validate_copilot_routing_exclusions` — scripts/validation/check_copilot_routing_exclusions.py:81 — defined here

## Structure
- Class: RoutingConfigError(ValueError) — scripts/validation/check_copilot_routing_exclusions.py:25
- Class: RoutingViolation — scripts/validation/check_copilot_routing_exclusions.py:29
- Method: RoutingViolation.format — scripts/validation/check_copilot_routing_exclusions.py:38
- Function: load_excluded_skill_names — scripts/validation/check_copilot_routing_exclusions.py:43
- Function: scan_copilot_skill_files — scripts/validation/check_copilot_routing_exclusions.py:66
- Function: validate_copilot_routing_exclusions — scripts/validation/check_copilot_routing_exclusions.py:81
- Function: _load_yaml_mapping — scripts/validation/check_copilot_routing_exclusions.py:105
- Function: _skills_stanza — scripts/validation/check_copilot_routing_exclusions.py:117
- Function: _is_canonical_skill_name — scripts/validation/check_copilot_routing_exclusions.py:127
- Function: _scan_file — scripts/validation/check_copilot_routing_exclusions.py:133
- Function: _routes_to_excluded_skill — scripts/validation/check_copilot_routing_exclusions.py:156
- Function: _contains_skill_name — scripts/validation/check_copilot_routing_exclusions.py:164
- Function: _contains_agent_reference — scripts/validation/check_copilot_routing_exclusions.py:168
- Function: _has_skill_invocation — scripts/validation/check_copilot_routing_exclusions.py:177
- Function: _has_routing_table_reference — scripts/validation/check_copilot_routing_exclusions.py:186
- Function: main — scripts/validation/check_copilot_routing_exclusions.py:190

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_copilot_routing_exclusions.py`
- language: Python
- lines: 204
- documented invocation:
  `Usage: check_copilot_routing_exclusions.py [repo-root]` — scripts/validation/check_copilot_routing_exclusions.py:193
- executed: yes
- actual command run: `uv run python scripts/validation/check_copilot_routing_exclusions.py`
- abridged stdout: (empty)
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented:
    - `0 - no violations found` — scripts/validation/check_copilot_routing_exclusions.py:10
    - `1 - violations found` — scripts/validation/check_copilot_routing_exclusions.py:11
    - `2 - configuration error` — scripts/validation/check_copilot_routing_exclusions.py:12
  - actual exit paths in code:
    - `scripts/validation/check_copilot_routing_exclusions.py:194`: `return 2` (when `len(args) > 1`)
    - `scripts/validation/check_copilot_routing_exclusions.py:197`: `return 0 if validate_copilot_routing_exclusions(repo_root) else 1`
    - `scripts/validation/check_copilot_routing_exclusions.py:199`: `return 2` (when `RoutingConfigError` raised)
    - `scripts/validation/check_copilot_routing_exclusions.py:203`: `sys.exit(main(sys.argv[1:]))`
- for validators/gates: can it exit non-zero? Yes (exits 1 on detected routing violations, exits 2 on config error or invalid arguments); does it fail on the source repo's own default branch? No, exits 0 cleanly.
- does the output match what the documentation claims? Yes, exits 0 with no stdout when clean, and outputs error diagnostics to stderr when failing.

## Defects — required
none

## Observations
- Code fence protection: lines 145-149 toggle `in_code_fence` upon encountering markdown backtick fences (` ``` `), skipping lines inside code blocks to prevent false positive triggers on illustrative documentation examples.
- Agent vs skill distinction: lines 168-175 permit references formatted as `Agent: <name>` or `<name> agent` even if `<name>` is in the excluded skills list, recognizing that Copilot may ship an agent even when the corresponding skill is excluded.
- Third-party dependency: imports `yaml` (line 22), requiring `uv run python` rather than bare system `python3` on environments lacking PyYAML.

## Context cost
6,846 bytes for `scripts/validation/check_copilot_routing_exclusions.py`. Loads `templates/platforms/copilot-cli.yaml` (4,586 bytes) and scans `src/copilot-cli/skills/**/*.md`. Total context cost ~15 KB, approximately 3,750 tokens.
