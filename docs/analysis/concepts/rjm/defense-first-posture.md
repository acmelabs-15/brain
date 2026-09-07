---
package: rjm
name: Defense-First Posture
slug: defense-first-posture
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

# Defense-First Posture

## Definition — verbatim
> "When in doubt about an external action (disclosure, secret rotation, blocking deploys, vendor contact), surface the recommendation and wait for approval. Internal analysis and evidence gathering is not gated." — .claude/agents/security.md:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 185 | defined here | Operational doctrine requiring agents to pause and obtain approval before taking high-impact external security actions. |
| templates/agents/security.shared.md | 156 | defined here | Defined in the shared security agent template as the core operational posture. |

## Consumes
Security incidents, external action options (disclosure, secret rotation, vendor contact, deploy blocking).

## Produces
Gated escalation recommendations separating ungated internal analysis from gated external actions.

## When applied
Applied continuously by the Security Agent when deciding whether to execute external or disruptive operations.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
Defense-First Posture establishes the behavioral stance of the Security Agent in rjm. Drawing a sharp line between unbounded internal investigation and gated external actions (such as rotating credentials, contacting vendors, or halting production deployments), it ensures deep diagnostic freedom while guarding against disruptive unilateral automated actions.
