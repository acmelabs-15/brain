---
package: rjm
name: copilot-model
slug: copilot-model
kind: name-only
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# copilot-model

## Definition — verbatim
(used, not defined)

> "- Governance guardrails (explicit copilot-model requirement)" — .agents/architecture/ADR-021-model-routing-strategy.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 166 | used here | Cited as a required governance parameter for explicit model declaration in workflow actions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
tiered-model-routing-strategy

## Implementation status
defects: missing-path

## Design notes
An input parameter and configuration property in GitHub Actions workflows designating the execution model for Copilot CLI calls, not an internal lifecycle concept.
