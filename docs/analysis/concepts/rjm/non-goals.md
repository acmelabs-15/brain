---
package: rjm
name: Non-Goals
slug: non-goals
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Non-Goals

## Definition — verbatim
> "What the system intentionally does not do. Reviewers cite this when feature creep appears." — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 15 | defined here | Subsection cataloging features and responsibilities the system deliberately declines to implement. |

## Consumes
Out-of-scope feature requests, potential scope creep areas, and boundary trade-offs.

## Produces
Explicit list of rejected or deferred capabilities cited during architectural review.

## When applied
Defined during system specification and referenced whenever new feature requests arise.

## Sub-concepts
scope-boundary

## Part of
goals-and-non-goals, architecture

## Implementation status
clean

## Design notes
Non-Goals defines explicit boundaries by documenting what a system intentionally does not do. Serving as a crucial defensive barrier against feature creep, it gives code reviewers and architects an unambiguous citation to reject tangential additions that compromise system focus or architectural simplicity.
