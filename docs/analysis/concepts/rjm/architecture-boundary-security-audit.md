---
package: rjm
name: Architecture & Boundary Security Audit
slug: architecture-boundary-security-audit
kind: technique
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

# Architecture & Boundary Security Audit

## Definition — verbatim
(used, not defined)

> "Architecture & Boundary Security Audit" — .claude/agents/security.md:340

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 340 | defined here | Capability analyzing privilege boundaries, mapping attack surfaces, identifying trust boundaries, and analyzing data flow. |
| templates/agents/security.shared.md | 311 | defined here | Shared template specification for privilege boundary analysis, trust boundaries, and attack surface mapping. |

## Consumes
System architecture designs, trust boundary specifications, and inter-component communication models.

## Produces
Privilege boundary maps, attack surface analysis, and data flow security evaluations.

## When applied
During architectural planning and security review of component boundaries.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
An architectural security evaluation technique that maps system attack surfaces, verifies trust boundaries between agents and subsystems, and traces sensitive data flows across privilege levels.
