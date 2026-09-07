---
package: rjm
name: leverage/extend
slug: leverage-extend
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# leverage/extend

## Definition — verbatim
(used, not defined)

> "Search internal prior-art first (leverage/extend), then external" — .claude/skills/programming-advisor/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 21 | defined here | Trigger table action directing queries about existing repository code to search internal prior-art first under the leverage/extend reuse model. |

## Consumes
Internal repository code, symbol searches, existing package dependencies, and feature requirements.

## Produces
Reuse recommendations categorizing internal solutions into direct adoption (leverage) or adaptation (extend).

## When applied
Triggered when evaluating new feature requirements or answering inquiries about whether similar code already exists in the repository.

## Sub-concepts
leverage

## Part of
none

## Implementation status
clean

## Design notes
`leverage/extend` is the internal reuse decision framework within `programming-advisor`. It establishes that the cheapest and most maintainable code is code already present in the organization, prescribing that existing assets should be evaluated for as-is consumption (leverage) or modification (extend) before any external package or custom implementation is considered.
