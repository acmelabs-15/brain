---
package: rjm
name: escalate_to_human
slug: escalate-to-human
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# escalate_to_human

## Definition — verbatim
> "    escalate_to_human: true" — .claude/skills/skillforge/references/configuration.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/configuration.md | 18 | defined here | Configuration flag enabling human intervention fallback when synthesis panel review fails to reach consensus within maximum iterations. |

## Consumes
Unresolved synthesis panel deadlocks or iteration limits reached without unanimous approval.

## Produces
Escalation alert requesting manual human review and resolution.

## When applied
Triggered when synthesis panel iterations exceed the configured maximum (5) without unanimous approval.

## Sub-concepts
none

## Part of
skillforge-configuration

## Implementation status
defects: doc-drift

## Design notes
`escalate_to_human` is a safety gate in SkillForge that pauses autonomous execution and routes conflicting architectural verdicts or deadlocked synthesis reviews to a human operator after five unsuccessful iterative revision cycles.
