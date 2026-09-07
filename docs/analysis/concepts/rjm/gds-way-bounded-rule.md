---
package: rjm
name: GDS Way bounded rule
slug: gds-way-bounded-rule
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

# GDS Way bounded rule

## Definition — verbatim
> "This project adopts the **GDS Way bounded rule**, because it is the only published rule with an objective boundary (implementation status):" — .claude/skills/adr-generator/references/adr-best-practices.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 67 | used here | Cites the rule prohibiting decision changes after any implementation without creating a superseding ADR. |
| .claude/skills/adr-generator/references/adr-best-practices.md | 35 | defined here | Defines the four-part mutability boundary governing clarifications, consequences, and superseding. |

## Consumes
ADR edit proposals and repository implementation state.

## Produces
Clear decisions on whether to edit an ADR in place (clarifications, consequences) or author a new superseding ADR (decision change after implementation).

## When applied
When reviewing or authoring revisions to existing architectural decision records.

## Sub-concepts
none

## Part of
adr-mutability-and-superseding

## Implementation status
defects: missing-path

## Design notes
The specific four-tier mutability rule adapted from the UK Government Digital Service, using implementation status as an objective boundary to prevent historical rewriting of implemented decisions while permitting clarifying edits.
