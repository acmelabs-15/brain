---
package: matt
name: domain-vocabulary
slug: domain-vocabulary
kind: artifact
package_phase: matt:Productivity Skills
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# domain-vocabulary

## Definition — verbatim
(used, not defined)

> "You lose only the domain-vocabulary half." — external/wait-what.md:36

## Also called — verbatim
`ubiquitous language` — external/wait-what.md:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 36 | used here | Explains that without CONTEXT.md or CONTEXT-MAP.md, /wait-what still clarifies English but loses project-specific terminology. |

## Consumes
`CONTEXT.md` or `CONTEXT-MAP.md` defining project-specific naming conventions.

## Produces
Alignment of agent explanations with agreed project nouns and ubiquitous language.

## When applied
Leveraged during conversational re-pitching to replace invented agent jargon with standard project nouns.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean

## Design notes
Domain vocabulary represents the shared glossary of project concepts established during domain-modeling and recorded in `CONTEXT.md`. Grounding conversational repairs in this vocabulary prevents models from inventing ad-hoc abstractions and keeps explanations aligned with repo reality.
