---
package: rjm
name: Scenario Adequacy
slug: scenario-adequacy
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scenario Adequacy

## Definition — verbatim
(used, not defined)

> "### Scenario Adequacy" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 134 | defined here | Section heading introducing minimum requirements for test scenario coverage per prompt. |

## Consumes
Prompt capability specifications, edge-case definitions, and negative test requirements.

## Produces
Validated scenario test suites meeting minimum test coverage criteria.

## When applied
Enforced during pull request reviews and scenario suite creation to verify test coverage completeness.

## Sub-concepts
scenarios

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: doc-drift

## Design notes
A quality checklist in rjm defining the minimum acceptable coverage standards for prompt evaluation scenario suites. It mandates at least 3 scenarios per prompt, at least one scenario per distinct capability or rule branch, at least one negative scenario asserting rejection or non-triggering, and specific coverage for each bug fixed or behavioral change introduced.
