---
package: addy
name: context-engineering
slug: context-engineering
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/context-engineering.json, sha256: 38dd00d2f108fe1cb703d5a01dbb2310d6f3719cf32950bc2f9adbeabfb9c617}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# context-engineering

## Definition — verbatim
> "Context engineering is the practice of deliberately curating what the agent sees, when it sees it, and how it's structured." — skills/context-engineering/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/context-engineering.json | 2 | used here | Target skill identifier in evaluation test cases. |
| external/api-and-interface-design.md | 12 | used here | Related skill card in the Build phase on external web catalog. |
| external/context-engineering.md | 5 | defined here | Summary defining context-engineering on external web catalog. |
| external/doubt-driven-development.md | 12 | used here | Related skill card in the Build phase on external web catalog. |
| external/frontend-ui-engineering.md | 12 | used here | Related skill card in the Build phase on external web catalog. |
| external/source-driven-development.md | 12 | used here | Related skill card in the Build phase on external web catalog. |
| external/test-driven-development.md | 12 | used here | Related skill card in the Build phase on external web catalog. |
| README.md | 251 | used here | Catalogs skill scope and triggers under the Build lifecycle phase. |
| skills/context-engineering/SKILL.md | 6 | defined here | Defines the five-level context hierarchy, packing strategies, and trust tiers. |
| skills/spec-driven-development/SKILL.md | 202 | used here | Cross-references context-engineering for loading relevant context sections during implementation. |

## Consumes
Repository source files, architecture specifications, error logs, IDE rules files, and conversation history.

## Produces
Structured context configurations, tiered context inclusions, and rules files tailored for agent tasks.

## When applied
When starting a new session, switching between tasks, or when agent output quality degrades due to context starvation or token flooding.

## Sub-concepts
none

## Part of
addy:Build

## Implementation status
defects: doc-drift, orphan

## Design notes
context-engineering treats context window curation as a disciplined engineering practice. Rather than flooding an LLM with whole repositories or starving it with minimal prompts, context engineering establishes a five-level hierarchy and strict trust tiers, ensuring agents receive focused, relevant information that maximizes output quality and eliminates hallucinations.
