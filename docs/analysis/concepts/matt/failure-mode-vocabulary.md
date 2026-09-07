---
package: matt
name: failure-mode vocabulary
slug: failure-mode-vocabulary
kind: reference
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# failure-mode vocabulary

## Definition — verbatim
> "the failure-mode vocabulary as a diagnostic. When a document misbehaves, that vocabulary is also the repair kit: name the failure mode first, then fix that." — external/writing-for-agents.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 56 | defined here | Defined as a diagnostic and repair vocabulary for identifying and fixing misbehaving agent documents |

## Consumes
Observed agent misbehavior or prompt execution defects.

## Produces
Named failure modes directing targeted prompt repairs.

## When applied
When an agent fails to complete work accurately, misinterprets instructions, or produces bloated outputs.

## Sub-concepts
premature-completion, sediment, sprawl

## Part of
writing-for-agents

## Implementation status
defects: orphan, doc-drift

## Design notes
A precise diagnostic terminology for debugging agent document misbehavior. Rather than arbitrarily tweaking prose, authors identify the specific failure mode (e.g. lack of completion criteria, weak pointer wording, or model prior conflict) and apply the prescribed repair pattern.
