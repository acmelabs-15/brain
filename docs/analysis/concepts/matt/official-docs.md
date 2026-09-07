---
package: matt
name: official docs
slug: official-docs
kind: reference
package_phase: matt:Explore
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# official docs

## Definition — verbatim
(used, not defined)

> "1. Investigate the question against **primary sources** (official docs, source code, specs, first-party APIs), not a secondary write-up of them. Follow every claim back to the source that owns it." — skills/engineering/research/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/research/SKILL.md | 10 | used here | Listed as an authoritative primary source category to investigate when researching technical questions. |

## Consumes
A technical question or API topic requiring factual investigation.

## Produces
Authoritative, verified factual claims cited directly in research findings.

## When applied
During the research skill when investigating technical questions against first-party documentation.

## Sub-concepts
none

## Part of
research

## Implementation status
defects: other

## Design notes
A primary source category consisting of first-party vendor and framework documentation, privileged over secondary tutorials to ensure factual accuracy in delegated agent research.
