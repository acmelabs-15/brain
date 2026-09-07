---
package: rjm
name: Blast radius
slug: blast-radius
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Blast radius

## Definition — verbatim
> "**Blast radius**: the set of components a single failure can affect. Smaller is better." — .claude/skills/software-engineering-library/references/release-it.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 17 | defined here | Defined in core vocabulary as the set of components a single failure can affect. |
| .claude/skills/threat-modeling/references/security-least-privilege.md | 15 | used here | Used to illustrate how scoping permissions under least privilege limits damage upon compromise. |

## Consumes
System topologies, trust boundaries, resource partitions, and permission configurations.

## Produces
Bulkhead partition sizes, failure domain boundaries, and scoped credential allocations.

## When applied
Evaluated during architectural design, threat modeling, and code reviews to constrain the reach of individual component failures or security breaches.

## Sub-concepts
none

## Part of
- release-it
- security-least-privilege

## Implementation status
defects: missing-path

## Design notes
Blast radius measures the potential extent of damage or operational disruption caused by the failure or compromise of a single system element. In rjm, minimizing blast radius through bulkheads, timeouts, and least privilege prevents localized issues from degrading the wider agent platform.
