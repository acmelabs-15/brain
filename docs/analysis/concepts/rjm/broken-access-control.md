---
package: rjm
name: Broken Access Control
slug: broken-access-control
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Broken Access Control

## Definition — verbatim
> "| A01 | Broken Access Control | Users access functions/data beyond permissions |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-least-privilege.md | 142 | used here | Cross-referenced as the primary OWASP vulnerability category mitigated by least privilege. |
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 15 | defined here | Defined in OWASP Top 10 reference table as vulnerability category A01 with code examples and mitigations. |

## Consumes
Authorization schemas, route definitions, and data access controllers.

## Produces
Access control constraints, resource ownership verifications, and deny-by-default permission policies.

## When applied
Evaluated during Phase 2 (Threat Identification) when analyzing trust boundary crossings and authorization rules.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
In rjm, Broken Access Control (OWASP A01) represents failures to enforce permissions allowing unauthorized data access or functional escalation; mitigated by applying least privilege, ownership checks, and deny-by-default policies.
