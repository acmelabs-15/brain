---
package: rjm
name: Principle of Least Privilege
slug: principle-of-least-privilege
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Principle of Least Privilege

## Definition — verbatim
> "Every program and user should operate using the minimum set of privileges necessary to complete their task." — .claude/skills/threat-modeling/references/security-least-privilege.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-least-privilege.md | 7 | defined here | Reference document defining the Saltzer (1974) security design principle and domain applications. |

## Consumes
Component roles, credential definitions, database permissions, API token scopes, and operational requirements.

## Produces
Scoped access policies, restricted privilege configurations, and mitigation recommendations limiting blast radius.

## When applied
During Phase 2 (Threat Identification) to identify over-privileged components and Phase 3 (Mitigation Strategy) to scope permissions.

## Sub-concepts
- service-accounts
- database-access
- api-scopes
- azure-managed-identity

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The Saltzer (1974) principle requiring every system identity and process to operate with minimal necessary permissions, containing blast radius and preventing lateral movement upon compromise.
