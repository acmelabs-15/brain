---
package: rjm
name: Assume breach
slug: assume-breach
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Assume breach

## Definition — verbatim
> "3. **Assume breach**: Minimize blast radius, segment access, verify end-to-end encryption." — .claude/skills/threat-modeling/references/security-zero-trust.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 55 | used here | Core identity philosophy guiding vulnerability assessment and defense-in-depth reviews. |
| .claude/skills/threat-modeling/references/security-zero-trust.md | 25 | defined here | Core Zero Trust architectural principle mandating minimized blast radius, access segmentation, and end-to-end encryption. |

## Consumes
System architecture models, access boundaries, and credential stores.

## Produces
Defense-in-depth safeguards, blast-radius limits, and segmented access controls.

## When applied
Applied during threat modeling, architecture design, and code review across all development phases.

## Sub-concepts
none

## Part of
zero-trust

## Implementation status
defects: missing-path

## Design notes
A foundational security pattern across rjm architecture and review. Under Assume breach, systems are designed assuming internal components, networks, or credentials may be compromised, mandating continuous verification, least privilege, and blast-radius minimization to contain failures.
