---
package: rjm
name: PIV Report Template
slug: piv-report-template
kind: template
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PIV Report Template

## Definition — verbatim
(used, not defined)

> "Save to: `.agents/security/PIV-[feature].md`" — .claude/agents/security.md:504

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 502 | defined here | Structural template for authoring durable post-implementation verification reports. |
| templates/agents/security.shared.md | 470 | defined here | Shared template specification for post-implementation verification reports. |

## Consumes
PIV checklist results, discovered vulnerabilities, CI test results, and plan deviations.

## Produces
A markdown report artifact (`.agents/security/PIV-[feature].md`) containing verification results, new findings, verification tests, plan deviations, recommendation verdict, and signature.

## When applied
Authored upon completion of the post-implementation verification audit.

## Sub-concepts
none

## Part of
post-implementation-verification-piv-protocol

## Implementation status
clean

## Design notes
A standardized report structure recording post-implementation security findings, verification test coverage, deviations from initial plans, and final gating verdicts (APPROVED, CONDITIONAL, BLOCKED) in a durable file artifact.
