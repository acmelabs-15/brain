---
package: rjm
path: scripts/eval/eval-suite.py
type: script
bytes: 20446
unit: inv-rjm-234
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-suite.py

## Purpose — required, verbatim
> "Eval Suite: Unified test orchestrator for prompt, skill, and command changes." — scripts/eval/eval-suite.py:2

## Design intent — required
Serves as the centralized test orchestrator and dispatcher for all evaluation harnesses across prompt, agent, and skill definitions in the repository. Rather than requiring developers or CI workflows to manually determine which evaluator to invoke, it inspects git diffs against a base ref (e.g. `main`), classifies changed files by category (prompts, agents, skills, scenarios, structural test targets), and dispatches each to its specialized evaluation runner: Pester structural tests for quality gate prompts (ADR-023), `eval-prompt-change.py` for behavioral prompt regressions (ADR-057), `eval-agents.py` for agent quality assessments, and `eval-knowledge-integration.py` for skill knowledge integration. It provides dry-run capability for previewing classified changes without API costs, structured JSON reporting, and unified exit codes (0 for OK, 1 for logic failure, 2 for configuration/diff error, 3 for external dependency/API failure). Without this tool, evaluating changes across disparate agent and prompt subsystems would require ad-hoc, error-prone manual scripting with fragmented reporting.

## Phase — required
none

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `--base-ref BASE_REF` (Git ref to compare against, default: `main`) — scripts/eval/eval-suite.py:534
  - `--scope {prompts,agents,skills,all}` (Limit to specific scope, default: `all`) — scripts/eval/eval-suite.py:537
  - `--model MODEL` (Model for LLM-based assessments, default: `DEFAULT_MODEL`) — scripts/eval/eval-suite.py:539
  - `--dry-run` (Detect and classify only, no API calls) — scripts/eval/eval-suite.py:541
  - `--output OUTPUT` (Write results to file) — scripts/eval/eval-suite.py:542
- Git repository diffs via subprocess execution of git diff against base ref and staged index (`detect_changed_files` — scripts/eval/eval-suite.py:68)
- Test and scenario files on disk:
  - Pester test file `QualityGatePrompts.Tests.ps1` — scripts/eval/eval-suite.py:232
  - Scenario directory candidate `.agents/security/benchmarks/` — scripts/eval/eval-suite.py:146

## Outputs — required
- Structured JSON evaluation report printed to stdout or written to `--output` path containing suite version, base ref, model, scope, changed files count, classification dict, per-evaluator results, elapsed time, and passed verdict — scripts/eval/eval-suite.py:554-569
- Formatted summary table printed to stderr with per-category pass/fail/skip counts and overall verdict — scripts/eval/eval-suite.py:505-526

## Invokes — required
- script _anthropic_api — scripts/eval/eval-suite.py:42
- script eval-prompt-change.py — scripts/eval/eval-suite.py:274
- script eval-agents.py — scripts/eval/eval-suite.py:325
- script eval-knowledge-integration.py — scripts/eval/eval-suite.py:379
- script QualityGatePrompts.Tests.ps1 — scripts/eval/eval-suite.py:232

## Invoked by — required
- doc scripts/eval/README.md — scripts/eval/README.md:88
- doc CONTRIBUTING.md — CONTRIBUTING.md:359
- script scripts/eval/eval-agents.py — scripts/eval/eval-agents.py:7
- script scripts/eval/eval-knowledge-integration.py — scripts/eval/eval-knowledge-integration.py:7

## Concepts named — required, verbatim
- `Eval Suite` — scripts/eval/eval-suite.py:2 — defined here
- `git diff` — scripts/eval/eval-suite.py:4 — used here
- `Pester tests` — scripts/eval/eval-suite.py:8 — used here
- `ADR-023` — scripts/eval/eval-suite.py:8 — used here
- `ADR-057` — scripts/eval/eval-suite.py:9 — used here
- `dry-run` — scripts/eval/eval-suite.py:26 — used here
- `security-critical` — scripts/eval/eval-suite.py:51 — defined here
- `structural tests` — scripts/eval/eval-suite.py:231 — defined here
- `behavioral comparison` — scripts/eval/eval-suite.py:272 — defined here
- `agent quality assessment` — scripts/eval/eval-suite.py:319 — defined here
- `skill knowledge integration` — scripts/eval/eval-suite.py:365 — defined here

## Structure
- `Change detection` — scripts/eval/eval-suite.py:61
- `Change classification` — scripts/eval/eval-suite.py:124
- `Individual eval runners` — scripts/eval/eval-suite.py:227
- `Main orchestrator` — scripts/eval/eval-suite.py:417

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval-suite.py`, language: Python, lines: 581
- documented invocation:
  - `python3 scripts/eval/eval-suite.py` — scripts/eval/eval-suite.py:15
  - `python3 scripts/eval/eval-suite.py --base-ref origin/main` — scripts/eval/eval-suite.py:18
  - `python3 scripts/eval/eval-suite.py --scope prompts` — scripts/eval/eval-suite.py:21
  - `python3 scripts/eval/eval-suite.py --scope agents` — scripts/eval/eval-suite.py:22
  - `python3 scripts/eval/eval-suite.py --scope skills` — scripts/eval/eval-suite.py:23
  - `python3 scripts/eval/eval-suite.py --dry-run` — scripts/eval/eval-suite.py:26
  - `python3 scripts/eval/eval-suite.py --output eval-results.json` — scripts/eval/eval-suite.py:29
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-suite.py --dry-run`
  abridged stdout:
  ```json
  {
    "suite_version": "1.0.0",
    "base_ref": "main",
    "model": "claude-sonnet-4-6",
    "scope": "all",
    "changed_files": 1,
    "classification": {
      "other": [
        ".agents/analysis/line-endings-before.txt"
      ]
    },
    "results": {},
    "elapsed_seconds": 0.1,
    "passed": true
  }
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    `EXIT_OK = 0` — scripts/eval/eval-suite.py:46
    `EXIT_LOGIC = 1` — scripts/eval/eval-suite.py:47
    `EXIT_CONFIG = 2` — scripts/eval/eval-suite.py:48
    `EXIT_EXTERNAL = 3` — scripts/eval/eval-suite.py:49
  - actual exit paths:
    `sys.exit(0)` — scripts/eval/eval-suite.py:429 (clean exit when no changes detected)
    `sys.exit(EXIT_CONFIG)` — scripts/eval/eval-suite.py:550 (git diff failure during change detection)
    `sys.exit(EXIT_OK)` — scripts/eval/eval-suite.py:575 (all routed evaluators passed)
    `sys.exit(EXIT_EXTERNAL if _contains_external_failure(results) else EXIT_LOGIC)` — scripts/eval/eval-suite.py:576 (evaluator failures)
- for validators/gates: can exit non-zero (exits 1 on evaluation logic failure, 2 on config/git error, 3 on external API/parsing error); when executed on the current branch vs main with `--dry-run`, exits 0 because no failing changes were detected in the repo.
- does the output match what the documentation claims? yes, stdout outputs structured JSON and stderr outputs execution header and summary status table.

## Defects — required
- missing-path · scripts/eval/eval-suite.py:232 — `tests/QualityGatePrompts.Tests.ps1` referenced as the Pester test file does not exist on disk, causing structural tests to always return `skipped: True` with reason `Test file not found`.

## Observations
Provides a clean, modular architecture for routing different artifact categories to specialized evaluators while maintaining a unified exit contract (0/1/2/3) and structured JSON output schema.

## Context cost
20,446 bytes (~5,110 tokens) for this file. Loads `_anthropic_api.py` and dispatches subprocess evaluators (`eval-prompt-change.py`, `eval-agents.py`, `eval-knowledge-integration.py`).
