---
package: rjm
name: **R**epudiation
slug: r-epudiation
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# **R**epudiation

## Definition — verbatim
> "| **R**epudiation | Denying an action | Processes | Can users deny performing actions? |" — .claude/skills/threat-modeling/SKILL.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 167 | defined here | STRIDE threat category defined as denying an action, applying to processes. |

## Consumes
Transaction workflows, state change events, and user interaction histories.

## Produces
Repudiation risk scenarios and non-repudiation controls (tamper-evident audit logs, digital signatures).

## When applied
Applied during Phase 2 (Threat Identification) to application processes where users perform stateful transactions.

## Sub-concepts
none

## Part of
stride, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`**R**epudiation` is the STRIDE threat category concerning a user's ability to falsely deny performing an action, mitigated by non-repudiation mechanisms such as append-only signed audit trails and timestamping.
