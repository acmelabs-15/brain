---
package: rjm
name: redundancy in defense, diversity in mechanism
slug: redundancy-in-defense-diversity-in-mechanism
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# redundancy in defense, diversity in mechanism

## Definition — verbatim
> "Core principle: **redundancy in defense, diversity in mechanism**." — .claude/skills/threat-modeling/references/security-defense-in-depth.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 11 | defined here | Defined as the foundational core principle of defense in depth. |

## Consumes
Threat model findings and candidate mitigation strategies.

## Produces
Multi-layered defensive architectures combining diverse inspection mechanisms.

## When applied
During Phase 3 (Mitigation Strategy) when formulating mitigations for Critical and High threats.

## Sub-concepts
- independence
- diversity

## Part of
- defense-in-depth

## Implementation status
defects: missing-path

## Design notes
The foundational architectural guideline for defense in depth in rjm, requiring not only multiple protective barriers, but varied detection and prevention mechanisms across those layers.
