---
package: rjm
name: contract tests
slug: contract-tests
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# contract tests

## Definition — verbatim
(used, not defined)

> "Empirically settled contract tests: `tests/build_scripts/test_generate_hooks_runtime_contract.py` pins the hook anchoring contract under foreign cwd/env with a negative control, plus `scripts/validation/validate_hook_anchoring.py`." — .claude/skills/ai-agents-research-frontier/SKILL.md:160-163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 160 | used here | Cited as the empirical test methodology pinning hook anchoring behavior under foreign environments with negative controls. |

## Consumes
Harness runtime contract specifications, foreign working directories, and platform execution parameters.

## Produces
Pass/fail test results verifying that hook anchoring and payload delivery behave identically across host harnesses.

## When applied
During multi-target build validation and CI regression testing to certify cross-harness plugin conformance.

## Sub-concepts
none

## Part of
cross-harness-abstraction

## Implementation status
defects: missing-path

## Design notes
Contract tests are empirically validated test suites that pin plugin runtime contracts (such as hook execution, cwd resolution, and environment variable propagation) under realistic and foreign host environments. In rjm, contract tests with explicit negative controls ensure that multi-target harness generators do not silently diverge or rely on vendor documentation that has historically proven incomplete or inaccurate.
