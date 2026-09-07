---
package: rjm
name: walk-the-gate-or-file-conservative
slug: walk-the-gate-or-file-conservative
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

# walk-the-gate-or-file-conservative

## Definition — verbatim
(used, not defined)

> "Covers stake-holding sources, round-number tells, citation-chain drift, and the walk-the-gate-or-file-conservative discipline." — .claude/skills/ai-agents-external-claims/SKILL.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 5 | defines | Identified in the skill description frontmatter as the load-bearing discipline for managing unverified external claims. |

## Consumes
An external claim, statistic, or attribution destined for a durable repository artifact.

## Produces
Either a verified assertion backed by an inline primary citation, or a conservatively scoped statement without unverified numbers.

## When applied
When ingesting third-party or external claims into documentation, architectural records, or pull requests.

## Sub-concepts
walk-the-gate

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A dual-path discipline for incorporating external claims: either 'walk the gate' by immediately performing primary-source verification, or 'file conservative' by stripping unverified assertions down to what can be defended without them, eliminating speculative caveat-ridden statements.
