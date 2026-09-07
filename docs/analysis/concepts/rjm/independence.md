---
package: rjm
name: Independence
slug: independence
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

# Independence

## Definition — verbatim
> "Each layer must function independently. If one layer is evaded, others still detect." — .claude/skills/threat-modeling/references/security-defense-in-depth.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 25 | defined here | Architectural principle requiring failure independence between defensive layers. |

## Consumes
Candidate mitigation architectures and defensive controls.

## Produces
Decoupled defense layers that remain operational even when other controls fail or are bypassed.

## When applied
During Phase 3 (Mitigation Strategy) when validating that proposed mitigations do not share common failure modes.

## Sub-concepts
none

## Part of
- defense-in-depth

## Implementation status
defects: missing-path

## Design notes
An architectural design principle of defense in depth stipulating that protective layers must operate autonomously without shared dependencies or failure modes, ensuring downstream controls remain effective if an upstream layer is evaded.
