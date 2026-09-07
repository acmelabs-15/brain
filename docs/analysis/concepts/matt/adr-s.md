---
package: matt
name: ADR's
slug: adr-s
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR's

## Definition — verbatim
(used, not defined)

> "A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go." — skills/engineering/grill-with-docs/SKILL.md:3

## Also called — verbatim
`ADR` — skills/engineering/domain-modeling/SKILL.md:3
`ADRs` — skills/engineering/domain-modeling/ADR-FORMAT.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/grill-with-docs/SKILL.md | 3 | used here | Colloquial plural/possessive acronym variant referring to Architecture Decision Records generated during grilling. |

## Consumes
Plan or design decisions challenged and resolved during an engineering interrogation.

## Produces
Sequentially numbered decision records written to `docs/adr/`.

## When applied
When using the `grill-with-docs` skill to capture architectural choices emerging from the interview.

## Sub-concepts
none

## Part of
grill-with-docs

## Implementation status
clean

## Design notes
A colloquial plural acronym variant for Architecture Decision Records (ADRs) used in the skill description of `grill-with-docs` to denote decisions documented as part of the relentless interview process.
