---
package: rjm
path: scripts/eval/examples/e2e-delivery-fixtures.json
type: script
bytes: 6899
unit: inv-rjm-234
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/examples/e2e-delivery-fixtures.json, sha256: b4cfa4a94ba048652e53a1e8b9fc021f704c4e43273e9a40ec5723dfc8afd874}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/examples/e2e-delivery-fixtures.json

## Purpose — required, verbatim
> "End-to-end delivery eval fixtures (issue #2859). Each germ is a deliberately vague, under-specified prompt. hidden_criteria are NOT shown to the agent. For F1-F4 the criteria are ground-truthed to a real merged PR (independent of the agent prompts under test); provenance carries the PR url. Ambiguity and coordination probes are synthetic: their ground truth is a process expectation (stop-and-ask, or multi-domain decomposition), not a single external PR, and are labeled as such. This is a starter set; add more PR-grounded fixtures as real issues land." — scripts/eval/examples/e2e-delivery-fixtures.json:3

## Design intent — required
Provides a set of realistic, ground-truthed evaluation fixtures for assessing end-to-end agent planning and delivery capability (tracking issue #2859). The fixtures test whether an agent can correctly identify requirements from deliberately vague or underspecified prompts without being spoon-fed acceptance criteria. Fixtures F1 through F4 derive from real merged pull requests from the `moq.analyzers` repository (with real PR URLs in provenance), while fixtures A1, A2, and M1 serve as synthetic probes testing ambiguity handling (stopping to ask clarifying questions rather than guessing) and cross-domain migration coordination (handling multi-service builds, CI deployments, and security review gates). Evaluators score against hidden criteria containing expected behaviors, required tests, required docs, and gates. Without these fixtures, evaluation of agent planning and task execution would rely on synthetic, ungrounded prompts that fail to reflect real software engineering challenges and ambiguity.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts/eval/eval-e2e-delivery.py — scripts/eval/eval-e2e-delivery.py:17
- doc scripts/eval/README.md — scripts/eval/README.md:156
- script tests/eval/test_eval_e2e_delivery.py — tests/eval/test_eval_e2e_delivery.py:19

## Concepts named — required, verbatim
- `schemaVersion` — scripts/eval/examples/e2e-delivery-fixtures.json:2 — defined here
- `End-to-end delivery eval fixtures` — scripts/eval/examples/e2e-delivery-fixtures.json:3 — defined here
- `hidden_criteria` — scripts/eval/examples/e2e-delivery-fixtures.json:3 — defined here
- `provenance` — scripts/eval/examples/e2e-delivery-fixtures.json:3 — defined here
- `required_tests` — scripts/eval/examples/e2e-delivery-fixtures.json:12 — defined here
- `required_docs` — scripts/eval/examples/e2e-delivery-fixtures.json:13 — defined here
- `required_gates` — scripts/eval/examples/e2e-delivery-fixtures.json:14 — defined here
- `ambiguous_stop_expected` — scripts/eval/examples/e2e-delivery-fixtures.json:15 — defined here

## Structure
- `schemaVersion` — scripts/eval/examples/e2e-delivery-fixtures.json:2
- `fixtures` — scripts/eval/examples/e2e-delivery-fixtures.json:4
- `F1-wrapped-setup` — scripts/eval/examples/e2e-delivery-fixtures.json:6
- `F2-simple-lambda` — scripts/eval/examples/e2e-delivery-fixtures.json:19
- `F3-null-guard` — scripts/eval/examples/e2e-delivery-fixtures.json:32
- `F4-codefix-null-guard` — scripts/eval/examples/e2e-delivery-fixtures.json:45
- `A1-vague-retry` — scripts/eval/examples/e2e-delivery-fixtures.json:58
- `A2-vague-faster` — scripts/eval/examples/e2e-delivery-fixtures.json:71
- `M1-multi-domain-migration` — scripts/eval/examples/e2e-delivery-fixtures.json:84

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/examples/e2e-delivery-fixtures.json`, language: JSON / test fixture data, lines: 98
- documented invocation:
  - `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run` (documented in `scripts/eval/eval-e2e-delivery.py:17` and `scripts/eval/README.md:156`)
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run`
  abridged stdout:
  ```json
  {
    "dry_run": true,
    "caveat": "PROXY EVAL: scores plan quality, not delivered code. Criteria come from real merged PRs (independent of the agent prompts) but are single-author curated, so absolute scores are directional; trust deltas that clear the run-to-run noise band. Same-family judge. See issue #2859.",
    "max_score": 11,
    "fixtures": [
      "F1-wrapped-setup",
      "F2-simple-lambda",
      "F3-null-guard",
      "F4-codefix-null-guard",
      "A1-vague-retry",
      "A2-vague-faster",
      "M1-multi-domain-migration"
    ],
    "agents": [
      "orchestrator",
      "autoplan"
    ],
    "runs_per_cell": 3,
    "planned_api_calls": 84,
    "model": "claude-sonnet-4-6"
  }
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: none (data fixture file)
  - actual exit paths: none (data file)
- for validators/gates: test fixture file; consumer script `eval-e2e-delivery.py` validates fixtures and resolves prompts cleanly without error.
- does the output match what the documentation claims? yes, 7 test fixtures loaded and parsed as expected.

## Defects — required
none

## Observations
Separates prompt germ from hidden verification criteria, grounding feature/bug fixtures (F1-F4) in real merged pull requests (`https://github.com/rjmurillo/moq.analyzers/pull/1086`, `1042`, `1027`, `1004`), and using synthetic probes (A1, A2, M1) for testing stop-and-ask clarification behavior and multi-service migration coordination.

## Context cost
6,899 bytes (~1,725 tokens).
