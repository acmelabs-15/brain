---
package: addy
name: DETECT → FETCH → IMPLEMENT → CITE
slug: detect-fetch-implement-cite
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DETECT → FETCH → IMPLEMENT → CITE

## Definition — verbatim
(used, not defined)
> "DETECT → FETCH → IMPLEMENT → CITE" — hooks/SDD-CACHE.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/SDD-CACHE.md | 79 | used here | Four-step workflow sequence governing the source-driven-development skill. |

## Consumes
Task prompt requiring framework or library implementation.

## Produces
Working code backed by authoritative, byte-exact documentation citations.

## When applied
Applied during the Build phase when implementing framework-specific or API-specific features.

## Sub-concepts
none

## Part of
source-driven-development

## Implementation status
clean

## Design notes
The core operational sequence of the source-driven-development skill, requiring agents to detect framework dependencies, fetch authoritative documentation, implement against verified APIs, and cite source references for every technical decision.
