---
package: rjm
path: .codeql/scripts/test_codeql_config.py
type: script
bytes: 10140
unit: inv-rjm-181
in_scope_via: .claude/skills/codeql-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codeql/scripts/test_codeql_config.py

## Purpose — required, verbatim
> "Validate CodeQL configuration file syntax and content." — .codeql/scripts/test_codeql_config.py:2

## Design intent — required
Provides syntax and schema verification for CodeQL YAML configuration files (`codeql-config.yml`), ensuring required keys (e.g. `name`, `packs` or `queries`, valid `severity`) and referenced paths are present prior to initiating heavy database creation and query evaluation. Without it, misconfigured or syntactically invalid CodeQL configurations would fail deep inside long-running CodeQL CLI invocations, wasting developer time and CI runner resources.

## Phase — required
rjm:verify

## Inputs — required
- CLI arguments parsed via `build_parser()` (.codeql/scripts/test_codeql_config.py:33):
  - `--config-path` (default: environment variable `CODEQL_CONFIG_PATH` or `.github/codeql/codeql-config.yml`) (.codeql/scripts/test_codeql_config.py:38-43)
  - `--ci` (CI mode with non-interactive behavior) (.codeql/scripts/test_codeql_config.py:44-47)
  - `--format` (`console`, `json`, default: `console`) (.codeql/scripts/test_codeql_config.py:48-52)
- Environment variables: `CODEQL_CONFIG_PATH`
- Files and paths on disk:
  - Target CodeQL configuration YAML at `--config-path` (.codeql/scripts/test_codeql_config.py:58)
  - Target paths declared under the `paths:` section of the YAML file (.codeql/scripts/test_codeql_config.py:168-182)

## Outputs — required
- Validation results output in console text or JSON format with `valid`, `errors`, and `warnings` keys (.codeql/scripts/test_codeql_config.py:216, 272)
- Process exit codes (0 for valid configuration, 1 for invalid configuration, 2 for configuration file not found, 3 for external dependency error) (.codeql/scripts/test_codeql_config.py:10-15)

## Invokes — required
- config .github/codeql/codeql-config.yml — .codeql/scripts/test_codeql_config.py:40

## Invoked by — required
- script .codeql/scripts/test_codeql_rollout.py — .codeql/scripts/test_codeql_rollout.py:162
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:367
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:17

## Concepts named — required, verbatim
- `CodeQL` — .codeql/scripts/test_codeql_config.py:2 — used here
- `ADR-035` — .codeql/scripts/test_codeql_config.py:10 — used here
- `YAML` — .codeql/scripts/test_codeql_config.py:5 — used here
- `Query pack` — .codeql/scripts/test_codeql_config.py:7 — used here
- `CodeQL CLI` — .codeql/scripts/test_codeql_config.py:14 — used here
- `CI mode` — .codeql/scripts/test_codeql_config.py:46 — used here
- `PyYAML` — .codeql/scripts/test_codeql_config.py:70 — used here
- `severity` — .codeql/scripts/test_codeql_config.py:101 — used here

## Structure
- build_parser() -> argparse.ArgumentParser
- validate_yaml_syntax(config_path: str) -> dict[str, Any]
- validate_config_schema(content: str) -> dict[str, Any]
- validate_query_packs(codeql_path: str, packs: list[str], ci: bool) -> list[dict]
- validate_paths_exist(paths: list[str], repo_root: str) -> list[dict]
- find_codeql_executable() -> str | None
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- path: `.codeql/scripts/test_codeql_config.py`
  - language: Python
  - lines: 294
  - documented invocation:
    - "python3 .codeql/scripts/test_codeql_config.py --ci" — docs/codeql-architecture.md:475
    - "python3 .codeql/scripts/test_codeql_config.py --format json --ci" — docs/codeql-integration.md:131
    - "python3 .codeql/scripts/test_codeql_config.py --config-path .github/codeql/codeql-config.yml --ci" — docs/codeql-rollout-checklist.md:92
  - executed: yes
  - actual command run, abridged stdout, actual exit code:
    - Command: `python3 .codeql/scripts/test_codeql_config.py --help`
    - Stdout: `usage: test_codeql_config.py [-h] [--config-path CONFIG_PATH] [--ci] [--format {console,json}]`
    - Exit code: 0
    - Command: `python3 .codeql/scripts/test_codeql_config.py`
    - Stdout: `Validating CodeQL configuration... [PASS] YAML syntax valid [PASS] Schema validation passed [PASS] Configuration is valid`
    - Exit code: 0
    - Command: `python3 .codeql/scripts/test_codeql_config.py --config-path nonexistent.yml`
    - Stderr: `[FAIL] Config file not found: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/nonexistent.yml`
    - Exit code: 2
  - documented exit codes vs. actual exit paths:
    - Documented (.codeql/scripts/test_codeql_config.py:10-15):
      - 0: Valid configuration
      - 1: Invalid configuration (validation errors)
      - 2: Configuration file not found
      - 3: External dependency error (CodeQL CLI not found)
    - Actual exit paths in code:
      - `return 2` in `main()` when config file does not exist (.codeql/scripts/test_codeql_config.py:210)
      - `return 0 if validation["valid"] else 1` in `main()` (.codeql/scripts/test_codeql_config.py:289)
      - `raise SystemExit(main())` (.codeql/scripts/test_codeql_config.py:293)
      - Note: Documented exit code 3 for missing CodeQL CLI is not implemented; line 253 only appends a warning and allows execution to continue with exit 0.
  - for validators/gates: can it exit non-zero? yes (exits 1 on invalid schema/yaml errors, 2 on missing file). Does it fail on the source repo default branch? No, exits 0 with warnings.
  - does output match documentation claims? Matches schema and syntax validation claims; fails to exit 3 when CodeQL CLI is missing (adds warning instead).

## Defects — required
- `script-bug` · .codeql/scripts/test_codeql_config.py:258 · repository root calculation `repo_root = str(Path(config_path).parent.parent)` resolves to `.github/` instead of repository root when using default path `.github/codeql/codeql-config.yml`, causing all relative path existence checks to check `.github/<path>` and falsely emit path-not-found warnings.
- `exit-code-mismatch` · .codeql/scripts/test_codeql_config.py:14, 253-255 · docstring documents exit code 3 for "External dependency error (CodeQL CLI not found)", but when `codeql_path` is None the script only appends a warning to `validation["warnings"]` and exits 0.

## Observations
Includes a zero-dependency regex fallback validator (.codeql/scripts/test_codeql_config.py:69-87) when PyYAML is not installed in the environment, checking tab indentation, key-value mappings, and schema fields.

## Context cost
10,140 bytes; ~2,500 tokens.
