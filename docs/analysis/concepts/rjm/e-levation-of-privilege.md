---
package: rjm
name: **E**levation of Privilege
slug: e-levation-of-privilege
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

# **E**levation of Privilege

## Definition — verbatim
> "| **E**levation of Privilege | Gaining unauthorized access | Processes | Can users escalate privileges? |" — .claude/skills/threat-modeling/SKILL.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 170 | defined here | STRIDE threat category defined as gaining unauthorized access, applying to processes. |

## Consumes
Role-based access controls, authorization middleware, session contexts, and user privilege tiers.

## Produces
Privilege escalation threat scenarios and authorization controls (RBAC, object-level checks, least privilege).

## When applied
Applied during Phase 2 (Threat Identification) across all process boundaries and authenticated endpoints.

## Sub-concepts
none

## Part of
stride, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`**E**levation of Privilege` is the STRIDE threat category representing unauthorized gain of elevated administrative or horizontal user permissions, mitigated through centralized authorization gates and least-privilege scoping.
