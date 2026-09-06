---
package: addy
name: source-driven-development
slug: source-driven-development
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/source-driven-development.json, sha256: df9c000800d1c7e3f46012ee7b6de07b67d1af8e98917921130cc3accc072464}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# source-driven-development

## Definition — verbatim
> "Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3

## Also called — verbatim
SDD — hooks/SDD-CACHE.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/source-driven-development.json | 2 | applies | Identifies the skill under evaluation for verifying framework-grounded implementations. |
| external/context-engineering.md | 12 | references | Linked in external documentation sidebar as a related lifecycle development skill. |
| external/source-driven-development.md | 1 | defines | Primary title and documentation page defining the source-driven development web reference. |
| external/test-driven-development.md | 12 | references | Referenced as a complementary implementation skill in external test documentation. |
| hooks/SDD-CACHE.md | 3 | applies | Documents cross-session citation caching specifically for the source-driven-development skill. |
| README.md | 252 | references | Summarizes the skill in the pack catalog as grounding framework decisions in official documentation. |
| skills/doubt-driven-development/SKILL.md | 226 | references | Explains relationship to doubt-driven development, distinguishing verification of framework facts from code claims. |
| skills/interview-me/SKILL.md | 186 | references | Clarifies orthogonal relationship to interview-me, noting SDD verifies framework facts while interview-me clarifies user intent. |
| skills/source-driven-development/SKILL.md | 6 | defines | Canonical skill heading and specification file detailing source discovery, citation, and verification workflows. |

## Consumes
Framework or library documentation, official guides, release notes, and API references.

## Produces
Source-verified implementation code with explicit documentation citations.

## When applied
When writing framework-specific logic, building boilerplates, or using unfamiliar library APIs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Source-driven development ensures agents consult and cite official documentation rather than generating code from potentially outdated or hallucinated model memory.
