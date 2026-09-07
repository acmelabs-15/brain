---
package: matt
name: Glossaries
slug: glossaries
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Glossaries

## Definition — verbatim
> "Glossaries, in particular, are an essential reference. Once one is created, it should be adhered to in every lesson." — skills/productivity/teach/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 134 | defined here | Essential reference document type codifying domain nomenclature to maintain terminological consistency across lessons. |

## Consumes
Domain-specific terminology and nomenclature encountered during topic research.

## Produces
Term-and-definition reference documents (e.g. following `GLOSSARY-FORMAT.md`).

## When applied
Whenever learning a domain that possesses specialized terminology, vocabulary, or naming conventions.

## Sub-concepts
none

## Part of
reference-documents

## Implementation status
defects: doc-drift, other

## Design notes
Enforces consistent domain vocabulary across educational lessons. By codifying nomenclature into a central reference early, the tutor ensures semantic drift does not confuse the learner across multi-session curricula.
