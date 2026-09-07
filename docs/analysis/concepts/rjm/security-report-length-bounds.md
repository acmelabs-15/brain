---
package: rjm
name: Security Report Length Bounds
slug: security-report-length-bounds
kind: pattern
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

# Security Report Length Bounds

## Definition — verbatim
> "Reports are dense, not exhaustive. Apply these caps:" — .claude/agents/security.md:723

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 721 | defined here | Structural rule capping findings per report to at most 10, 1 sentence descriptions, and at most 5 recommendations. |
| templates/agents/security.shared.md | 688 | defined here | Shared template specification capping security report length and enforcing density over exhaustive volume. |

## Consumes
Draft security findings and audit output.

## Produces
Concise, bounded security reports adhering to finding caps and single-sentence descriptions.

## When applied
Applied whenever formatting security reports (`SR-NNN-[scope].md`) before output delivery.

## Sub-concepts
none

## Part of
security-report-format

## Implementation status
clean

## Design notes
A strict verbosity constraint capping findings at at most 10 per report, single-sentence descriptions/remediations, and at most 5 recommendations to prevent context bloat and ensure actionable remediation focus.
