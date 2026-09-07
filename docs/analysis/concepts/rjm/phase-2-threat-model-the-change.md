---
package: rjm
name: "Phase 2: Threat-Model the Change"
slug: phase-2-threat-model-the-change
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 2: Threat-Model the Change

## Definition — verbatim
> "### Phase 2: Threat-Model the Change" — .claude/skills/security-review/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 74 | defined here | Second phase of security review reasoning through attack surface, threat actor, and concrete impact for suspected vulnerabilities before scoring risk. |

## Consumes
Entry points and trust boundaries identified during Phase 1.

## Produces
Structured threat-model reasoning answering the three core questions (attack surface, threat actor, impact) and mapped CWE classifications.

## When applied
Applied after scoping the attack surface to evaluate each suspected vulnerability against concrete threat scenarios.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
The core analytical phase of security review. Phase 2 requires step-by-step reasoning across three mandatory questions (surface, actor, impact) before any numeric CVSS score or severity label can be assigned, ensuring findings reflect realistic exploitation vectors rather than speculative alerts.
