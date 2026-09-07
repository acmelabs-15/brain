---
package: rjm
name: Gate 3: Reject product coupling
slug: gate-3-reject-product-coupling
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/external-skill-source-adaptation.md, sha256: d1bfe692aa70bcf7515f3849cc45814365dbd7e23605c0b1058dbb125f43ec79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gate 3: Reject product coupling

## Definition — verbatim
> "### Gate 3: Reject product coupling" — .claude/skills/skillforge/references/external-skill-source-adaptation.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/external-skill-source-adaptation.md | 42 | defined here | Defines Gate 3 rejecting product-specific operations and stripping vendor nouns to preserve catalog portability. |

## Consumes
External skill workflows and instructions.

## Produces
Filtered generic workflow or rejection of vendor-coupled operations.

## When applied
Executed as Gate 3 in the external skill adaptation workflow.

## Sub-concepts
none

## Part of
external-skill-source-adaptation

## Implementation status
clean

## Design notes
A portability gate that systematically rejects skills tied to specific products or pipelines, stripping proprietary vendor nouns to retain only transferable, generalized lifecycle workflows.
