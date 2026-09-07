---
package: rjm
name: [skip-drift-check]
slug: skip-drift-check
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# [skip-drift-check]

## Definition — verbatim
> "Add `[skip-drift-check]` to a commit message in your PR" — CONTRIBUTING.md:532

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 21 | used here | Provenance table row mapping the bypass contract in agent-drift-detection.yml. |
| .claude/skills/ai-agents-change-control/SKILL.md | 71 | used here | Details requirements for using the commit message marker and consequences of unverified usage. |
| .claude/skills/ai-agents-config-catalog/SKILL.md | 76 | used here | Configuration catalog entry describing marker behavior, CI obligations checklist, and code-owner approval requirements. |
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 88 | used here | Debugging guidance noting that escape hatches require documented justification in the PR. |
| CONTRIBUTING.md | 532 | defined here | Contributing guide step-by-step instructions for bypassing drift detection with proper documentation and sign-off. |

## Consumes
Commit message marker [skip-drift-check], documented justification, updated templates/README.md.

## Produces
Exemption from CI agent drift detection, accompanied by mandatory obligations checklist and required human code-owner approval.

## When applied
Applied when an intentional difference between canonical templates and generated code must be merged temporarily.

## Sub-concepts
none

## Part of
drift-gate

## Implementation status
clean

## Design notes
[skip-drift-check] is a commit message marker that bypasses automated drift detection in CI. Governed under post-incident escape hatch rules, its use is treated as an incident report that triggers mandatory documentation and human approval.
