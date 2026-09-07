---
package: rjm
name: Diversity
slug: diversity
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

# Diversity

## Definition — verbatim
> "Layers use different detection mechanisms. A single evasion technique should not bypass multiple layers. Mix signature-based, ML inference, behavioral analysis, reputation systems, and human intelligence." — .claude/skills/threat-modeling/references/security-defense-in-depth.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 29 | defined here | Architectural principle requiring diverse detection and prevention mechanisms across protection layers. |

## Consumes
Threat vectors and security control proposals.

## Produces
Heterogeneous security controls combining signatures, heuristics, machine learning, behavioral rules, and human review.

## When applied
During Phase 3 (Mitigation Strategy) to ensure layered mitigations do not duplicate homogeneous mechanisms vulnerable to identical evasion techniques.

## Sub-concepts
none

## Part of
- defense-in-depth

## Implementation status
defects: missing-path

## Design notes
An architectural principle dictating that defense layers must employ fundamentally different detection mechanisms rather than redundant copies of the same tool, neutralizing single-technique evasions.
