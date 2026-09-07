---
package: rjm
name: Negative-Control Test Design
slug: negative-control-test-design
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Negative-Control Test Design

## Definition — verbatim
> "| You are writing a test for a generated artifact or contract | 6. Negative-control test design | `ai-agents-validation-and-qa` for the evidence bar |" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 33 | defines | Section heading detailing Recipe 6 and the runtime-contract test exemplar test_generate_hooks_runtime_contract.py. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 34 | defines | Recipe selector entry specifying test design discipline for generated artifacts and external contracts. |

## Consumes
Artifact generator functions, CLI hook contracts, and subprocess test fixtures.

## Produces
Robust test suites featuring negative controls and unanchored failure test cases.

## When applied
add a negative control or when authoring tests for code generators, hook contracts, and safety guards.

## Sub-concepts
negative-control, runtime-contract-exemplar

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
Recipe 6 of the empirical probe toolkit. It mandates that any test protecting an external interface or generated artifact include at least one negative control—an input or environment configuration deliberately broken to prove the test suite actually has the ability to fail.
