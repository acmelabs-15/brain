---
package: rjm
name: round-number tells
slug: round-number-tells
kind: pattern
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

# round-number tells

## Definition — verbatim
(used, not defined)

> "Covers stake-holding sources, round-number tells, citation-chain drift, and the walk-the-gate-or-file-conservative discipline." — .claude/skills/ai-agents-external-claims/SKILL.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 5 | defines | Identified in the skill description frontmatter as a primary verification concern for external claims. |

## Consumes
External metrics, vendor marketing materials, benchmark reports, and third-party claims.

## Produces
Verification alert identifying suspicious rhetorical rounding in numerical statistics.

## When applied
check a vendor number or whenever external statistics ending in round numbers (100, 1000) are encountered.

## Sub-concepts
numerical-headline-claim

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A heuristic pattern for evaluating external claims: round numbers (such as '1000+ stars' or '50% improvement') frequently indicate rhetorical rounding or vendor inflation rather than precise empirical measurements, signaling the need for primary source verification.
