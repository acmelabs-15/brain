---
package: rjm
path: scripts/eval/examples/example-scenarios.json
type: script
bytes: 2178
unit: inv-rjm-234
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/examples/example-scenarios.json

## Purpose — required, verbatim
> "Budget exhausted stops execution" — scripts/eval/examples/example-scenarios.json:6
(no explicit purpose statement; working template for eval scenario files as documented in scripts/eval/README.md:1319 and CONTRIBUTING.md:377)

## Design intent — required
Provides a reference template and test dataset for prompt and rule activation scenario evaluations. It illustrates the expected JSON schema consumed by scenario evaluation runners (such as `eval-rule-activation.py` and `eval-prompt-change.py`), defining positive test cases (e.g. `stop-on-budget-exhaustion`, `stop-on-all-phases-complete`, `fallback-to-memory-search`) and negative test cases (`skip-rule-not-applicable`). It details the convention for restraint testing where negative cases trigger the restraint pool rubric to verify that instructions do not activate when unrelated tasks are provided. Without this template, authors creating behavioral eval scenarios would lack a standardized structural guide for scenario schemas, expected gate labels, and negative test conventions.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc scripts/eval/README.md — scripts/eval/README.md:1319
- doc CONTRIBUTING.md — CONTRIBUTING.md:377

## Concepts named — required, verbatim
- `rule_id` — scripts/eval/examples/example-scenarios.json:2 — defined here
- `scenarios` — scripts/eval/examples/example-scenarios.json:3 — defined here
- `expected_gate` — scripts/eval/examples/example-scenarios.json:8 — defined here
- `expected_verdict` — scripts/eval/examples/example-scenarios.json:9 — defined here
- `expected_reason_contains` — scripts/eval/examples/example-scenarios.json:10 — defined here
- `rationale` — scripts/eval/examples/example-scenarios.json:11 — defined here
- `skip-rule-not-applicable` — scripts/eval/examples/example-scenarios.json:35 — defined here
- `restraint pool` — scripts/eval/examples/example-scenarios.json:38 — used here
- `negative judge rubric` — scripts/eval/examples/example-scenarios.json:38 — used here

## Structure
- `rule_id` — scripts/eval/examples/example-scenarios.json:2
- `scenarios` — scripts/eval/examples/example-scenarios.json:3
  - `S1` — scripts/eval/examples/example-scenarios.json:5
  - `S2` — scripts/eval/examples/example-scenarios.json:14
  - `S3` — scripts/eval/examples/example-scenarios.json:23
  - `S4` — scripts/eval/examples/example-scenarios.json:32

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/examples/example-scenarios.json`, language: JSON / test fixture template, lines: 42
- documented invocation:
  - "See `examples/example-scenarios.json` for a working template." — scripts/eval/README.md:1319
- **executed:** yes
- actual command run: `python3 -m json.tool scripts/eval/examples/example-scenarios.json > /dev/null`
  abridged stdout: (valid JSON, no stdout)
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: none (template JSON data file)
  - actual exit paths: none (data file)
- for validators/gates: serves as the structural template and reference fixture for scenario-based evaluators; verified valid JSON syntax.
- does the output match what the documentation claims? yes, conforms to the scenario schema documented in `scripts/eval/README.md:1321-1330`.

## Defects — required
none

## Observations
Details the convention for negative scenario testing where `expected_gate: "skip-rule-not-applicable"` routes the scenario to the restraint pool and negative judge rubric.

## Context cost
2,178 bytes (~545 tokens).
