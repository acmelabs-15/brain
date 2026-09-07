---
package: rjm
name: Summary as source
slug: summary-as-source
kind: pattern
package_phase: cross-phase
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

# Summary as source

## Definition — verbatim
> "A summary drops scope and rounds numbers" — .claude/skills/ai-agents-external-claims/SKILL.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 98 | defined here | Anti-pattern of treating condensed summaries or secondary digests as authoritative sources. |

## Consumes
Secondary digests, summaries, executive overviews, or paraphrased writeups.

## Produces
Distorted scope boundaries and lost contextual nuances in ingested documentation.

## When applied
Checked during Phase 1 claim identification and anti-pattern screening.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Summary as source` occurs when an agent treats an intermediate summary or aggregator as primary truth. Because summaries omit edge cases, round numbers, and drop scope constraints, rjm mandates following the citation chain back to the original source.
