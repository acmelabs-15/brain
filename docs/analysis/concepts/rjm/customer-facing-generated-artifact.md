---
package: rjm
name: Customer-facing generated artifact
slug: customer-facing-generated-artifact
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Customer-facing generated artifact

## Definition — verbatim
> "Customer-facing generated artifact (plugin manifest, hook script, CLI config)" — docs/when-to-use.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 31 | defined here | Task shape for generated configs, manifests, or hooks installed by end-users, mandating runtime testing. |

## Consumes
Generated plugin manifests, configuration files, or hook distribution scripts.

## Produces
Mandatory runtime-contract verification and five-axis review before shipping.

## When applied
Applied when creating or updating artifacts that customers download, install, or run in their environments.

## Sub-concepts
none

## Part of
fitness-table

## Implementation status
clean

## Design notes
A critical task shape in rjm emphasizing that generated customer-facing artifacts require real runtime execution testing and review rather than static schema validation alone.
