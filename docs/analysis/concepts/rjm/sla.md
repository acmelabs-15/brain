---
package: rjm
name: SLA
slug: sla
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SLA

## Definition — verbatim
> "Service Level Agreement. Contract with consequences." — .claude/skills/slo-designer/SKILL.md:48

## Also called — verbatim
> "Service Level Agreement" — .claude/skills/slo-designer/SKILL.md:48

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 48 | defined here | Core concept table defining SLA as a contract with consequences. |

## Consumes
Internal Service Level Objectives (SLOs) and legal/business customer commitments.

## Produces
Formal customer contracts specifying uptime commitments and remediation consequences.

## When applied
Referenced during service design to guarantee internal SLOs are set strictly tighter than external SLAs.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
A Service Level Agreement establishes a binding external contract with customers carrying direct penalties (such as service credits). In rjm's `slo-designer`, SLAs are contrasted with SLOs to ensure internal operational targets remain stricter than external contractual commitments.
