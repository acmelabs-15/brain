---
package: rjm
name: unattended mode
slug: unattended-mode
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# unattended mode

## Definition — verbatim
> "Create \"unattended mode\" protocol with stricter requirements" — .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 139 | defined here | Remediation action item mandating the design of a specialized execution protocol with heightened validation for autonomous agent sessions. |

## Consumes
Task requirements and user delegation to run autonomously for extended durations.

## Produces
Mandatory multi-agent reviews (critic + QA) and automated verification logs before any irreversible action.

## When applied
Triggered when an agent is instructed to execute tasks without real-time human oversight.

## Sub-concepts
none

## Part of
autonomous-execution-protocol

## Implementation status
defects: missing-path

## Design notes
`unattended mode` is a specialized execution protocol proposed in rjm to govern autonomous agent sessions operating without continuous human supervision. Rather than relaxing rules during autonomous runs, unattended mode imposes strictly heightened requirements, including mandatory multi-agent critic and QA reviews and automated merge blockers, ensuring agents cannot make unilateral dismissals or merge untested code.
