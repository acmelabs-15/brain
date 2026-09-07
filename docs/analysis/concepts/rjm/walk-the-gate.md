---
package: rjm
name: Walk the gate
slug: walk-the-gate
kind: technique
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

# Walk the gate

## Definition — verbatim
> "- **Walk the gate.** Run the verification now (the fetch is typically under two minutes), then state the claim at the confidence the primary source supports, with the source cited inline." — .claude/skills/ai-agents-external-claims/SKILL.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 85 | defines | Defines the active verification option of Phase 4 requiring immediate primary source checks. |

## Consumes
An unverified external claim and the means to fetch or probe its authoritative primary source.

## Produces
Verified claim with inline primary source citation and documented confidence level.

## When applied
When an author chooses to verify an incoming external claim immediately rather than file conservative.

## Sub-concepts
none

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
One of two valid moves in the external-claims discipline: executing primary-source verification immediately (typically taking under two minutes) and stating the finding at the exact level of confidence supported by the primary source. This eliminates the anti-pattern of 'Reporting Without Acting'.
