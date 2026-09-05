---
package: rjm
path: .agents/guides/python-cicd-patterns.md
type: agent
bytes: 8125
unit: inv-rjm-55
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/guides/python-cicd-patterns.md

## Purpose — required, verbatim
> "This guide documents patterns for integrating Python modules into GitHub Actions workflows, following ADR-006 (thin workflows, testable modules)." — .agents/guides/python-cicd-patterns.md:11 (no explicit purpose statement)

## Design intent — required
Provides standardized implementation patterns, invocation conventions, error handling protocols, and testing strategies for migrating CI/CD workflow scripts to Python. It implements ADR-006's "thin workflows, testable modules" principle by restricting GitHub Actions YAML files to orchestration while shifting business logic to testable Python modules. It defines standard exit codes (0 for success, 1 for validation failure, 2 for fatal exceptions per ADR-035), requires stderr redirection for error output to prevent GitHub Actions output parsing corruption, standardizes CLI argument parsing with `argparse`, and establishes unit and integration test structures with `pytest`. Without it, workflow automation would suffer from unmaintainable, untestable inline YAML scripts, slow feedback loops, and inconsistent error reporting.

## Phase — required
cross-phase

## Inputs — required
- GitHub Actions workflow execution context: "Accessing GitHub Context" (.agents/guides/python-cicd-patterns.md:212), environment variables (`INPUT_<name>`, `GITHUB_TOKEN`, `GITHUB_REPOSITORY`, `PR_NUMBER` per lines 237-239 and 332).
- Command-line arguments parsed via argparse: `args = parse_args()` — .agents/guides/python-cicd-patterns.md:122
- Architecture decision guidance: ADR-006, ADR-035, and ADR-042.

## Outputs — required
- GitHub Actions step output key-value pairs written to `$GITHUB_OUTPUT` or stdout: `write_output("result", json.dumps(result))` — .agents/guides/python-cicd-patterns.md:318
- Standardized exit codes: 0 (Success), 1 (Validation/business logic failure), 2 (Unexpected error/exception) (.agents/guides/python-cicd-patterns.md:70-72).
- Error messages redirected to stderr: `print("Error: file not found", file=sys.stderr)` — .agents/guides/python-cicd-patterns.md:85

## Invokes — required
- doc ADR-042-python-migration-strategy.md — .agents/guides/python-cicd-patterns.md:361
- doc ADR-006-thin-workflows.md — .agents/guides/python-cicd-patterns.md:362
- doc ADR-035-exit-code-standardization.md — .agents/guides/python-cicd-patterns.md:363

## Invoked by — required
- doc python-for-powershell-developers.md — .agents/guides/python-for-powershell-developers.md:511

## Concepts named — required, verbatim
- `Python CI/CD Migration Patterns` — .agents/guides/python-cicd-patterns.md:1 — defined here
- `Module Invocation` — .agents/guides/python-cicd-patterns.md:17 — defined here
- `Script Invocation` — .agents/guides/python-cicd-patterns.md:30 — defined here
- `Exit Codes` — .agents/guides/python-cicd-patterns.md:45 — defined here
- `Logging to stderr` — .agents/guides/python-cicd-patterns.md:74 — defined here
- `Parameter Handling` — .agents/guides/python-cicd-patterns.md:92 — defined here
- `ADR-006 Compliance` — .agents/guides/python-cicd-patterns.md:143 — defined here
- `Environment Variables` — .agents/guides/python-cicd-patterns.md:210 — defined here
- `Structured Output for Workflow Consumption` — .agents/guides/python-cicd-patterns.md:297 — defined here
- `Reading Workflow Inputs` — .agents/guides/python-cicd-patterns.md:322 — defined here
- `Migration Checklist` — .agents/guides/python-cicd-patterns.md:343 — defined here
- `thin workflows, testable modules` — .agents/guides/python-cicd-patterns.md:11 — used here

## Structure
- Python CI/CD Migration Patterns
- Overview
- Invoking Python from GitHub Actions
- Pattern 1: Module Invocation (Preferred)
- Pattern 2: Script Invocation
- Error Handling
- Exit Codes
- Logging to stderr
- Parameter Handling
- Using argparse
- Workflow Integration
- ADR-006 Compliance
- WRONG: Logic in Workflow
- CORRECT: Logic in Python Module
- Environment Variables
- Accessing GitHub Context
- Workflow Configuration
- Testing Python CI Scripts
- Unit Tests with pytest
- Integration Tests
- Common Patterns
- Structured Output for Workflow Consumption
- Reading Workflow Inputs
- Migration Checklist
- References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/guides/python-cicd-patterns.md:362 · Reference link `[ADR-006: Thin Workflows](../architecture/ADR-006-thin-workflows.md)` references a non-existent file; the actual file in .agents/architecture/ is `ADR-006-thin-workflows-testable-modules.md`.

## Observations
- Thin workflows implementation: Provides concrete code recipes implementing ADR-006, ensuring GitHub Actions YAML only performs orchestration while business logic and file syntax validations are isolated in Python modules tested via pytest.
- Output parsing protection: Enforces stderr logging for errors to avoid corrupting `$GITHUB_OUTPUT` parsing in GitHub Actions workflows.
- Dual-mode workflow outputs: Demonstrates backward-compatible workflow outputs using `$GITHUB_OUTPUT` with fallback to `::set-output` command for local test environments.

## Context cost
8125 bytes, ~2030 tokens. References 3 architecture decision records.
