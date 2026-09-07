---
package: rjm
name: Primary source
slug: primary-source
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Primary source

## Definition — verbatim
> "The primary source is the origin, not a summary of the origin:" — .claude/skills/ai-agents-external-claims/SKILL.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 50 | defines | Defines the primary source as the authoritative origin rather than a secondary summary. |

## Consumes
An external factual assertion, version behavior claim, or quantitative metric.

## Produces
Authoritative raw data, package registry responses, original research papers, or direct statements.

## When applied
Activated during Phase 1 claim identification and Phase 2 comparison of external claims.

## Sub-concepts
none

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
The authoritative origin of a factual assertion (such as a registry API, original academic paper, or direct empirical measurement) as opposed to secondary summaries or blog posts. In this repository, vendor documentation alone is not considered a primary source for runtime tool behavior, which requires empirical probes.
