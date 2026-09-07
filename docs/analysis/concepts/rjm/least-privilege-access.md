---
package: rjm
name: Least privilege access
slug: least-privilege-access
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Least privilege access

## Definition — verbatim
> "2. **Least privilege access**: Limit access with just-in-time/just-enough-access (JIT/JEA)." — .claude/skills/threat-modeling/references/security-zero-trust.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 24 | defined here | Defined as the second foundational principle of Zero Trust focusing on dynamic access limitation. |

## Consumes
Requested operational scope, task duration parameters, and caller identity.

## Produces
Just-in-time (JIT) and just-enough-access (JEA) scoped access policies limiting blast radius.

## When applied
When designing permission allocation and elevation workflows across service components.

## Sub-concepts
none

## Part of
- zero-trust

## Implementation status
defects: missing-path

## Design notes
A core Zero Trust principle mandating that access rights are constrained dynamically through just-in-time and just-enough-access mechanisms, ensuring components hold only the exact permissions needed for their immediate task.
