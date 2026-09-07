---
package: rjm
name: Naming a gate you did not walk
slug: naming-a-gate-you-did-not-walk
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

# Naming a gate you did not walk

## Definition — verbatim
> "Ships a TODO disguised as a verified finding" — .claude/skills/ai-agents-external-claims/SKILL.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 101 | defined here | Anti-pattern of explicitly citing an unexecuted verification check as an informational caveat. |

## Consumes
Unrun verification commands or deferred checks.

## Produces
Deceptive confidence signals and deferred maintenance debt in committed deliverables.

## When applied
Prevented during Phase 4 gate verification in external claims review.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Naming a gate you did not walk` captures the practice of documenting unperformed verification checks ("could verify with X") as caveats in deliverables. This gives a false impression of thoroughness while burdening readers with unperformed tasks; rjm requires either running the gate immediately or omitting mention of it entirely.
