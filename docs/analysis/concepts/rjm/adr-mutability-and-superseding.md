---
package: rjm
name: ADR Mutability and Superseding
slug: adr-mutability-and-superseding
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR Mutability and Superseding

## Definition — verbatim
> "The field splits three ways on whether an accepted ADR may be edited:" — .claude/skills/adr-generator/references/adr-best-practices.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 67 | used here | Cites documented repository policy governing when ADRs must be superseded rather than modified in place. |
| .claude/skills/adr-generator/references/adr-best-practices.md | 25 | defined here | Section heading analyzing architectural record mutability schools and establishing superseding rules. |

## Consumes
Architectural decision records, proposed decision changes, and implementation status metadata.

## Produces
Superseding architectural decision records and linked status updates on superseded records.

## When applied
When architectural designs evolve or require corrections after being accepted or implemented.

## Sub-concepts
gds-way-bounded-rule

## Part of
adr-generator

## Implementation status
defects: missing-path

## Design notes
Governance pattern establishing the boundary conditions under which accepted ADRs may be updated in place versus requiring a new superseding decision record once implementation has begun.
