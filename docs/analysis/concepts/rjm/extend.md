---
package: rjm
name: Extend
slug: extend
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

# Extend

## Definition — verbatim
> "If an internal implementation exists, recommend **Leverage** (use as-is) or **Extend** (adapt it) before proposing a build or an external buy." — .claude/skills/programming-advisor/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 49 | defined here | Recommends adapting an existing internal implementation rather than proposing custom development or external purchase. |

## Consumes
Internal repository or organization codebase containing prior art that partially satisfies requirements.

## Produces
An adapted or extended internal capability meeting requirements while retaining existing codebase conventions.

## When applied
Applied during internal prior-art review when an existing codebase component covers significant requirements (>=80%) and the capability is not security-sensitive.

## Sub-concepts
none

## Part of
programming-advisor

## Implementation status
clean

## Design notes
Extend represents the tactical option in rjm's specification phase to modify and build upon existing internal code rather than creating a greenfield custom solution or adopting a new third-party dependency. It enforces internal reuse hierarchy to control codebase sprawl and token burn while ensuring developers only own the delta.
