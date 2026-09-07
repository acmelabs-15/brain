---
package: matt
name: Consequences
slug: consequences
kind: template
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consequences

## Definition — verbatim
> "- **Consequences**: only when non-obvious downstream effects need to be called out" — skills/engineering/domain-modeling/ADR-FORMAT.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/ADR-FORMAT.md | 23 | defined here | Defined as an optional ADR section for documenting non-obvious downstream effects of a decision. |

## Consumes
Identified secondary impacts, trade-offs, or downstream effects of a decision.

## Produces
An explicit callout of downstream architectural or operational consequences in an ADR.

## When applied
When an architectural decision carries non-obvious downstream effects that future maintainers must anticipate.

## Sub-concepts
none

## Part of
adr-format

## Implementation status
clean

## Design notes
An optional section in matt's minimalist ADR format reserved for highlighting non-obvious downstream effects of an architectural choice, avoiding generic boilerplate while capturing critical structural consequences.
