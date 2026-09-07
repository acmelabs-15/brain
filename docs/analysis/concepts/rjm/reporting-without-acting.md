---
package: rjm
name: Reporting Without Acting
slug: reporting-without-acting
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reporting Without Acting

## Definition — verbatim
> "The anti-pattern this closes is \"Reporting Without Acting\": writing \"would be N if X corroborates\" or \"likely Y pending source Z\" into an artifact instead of running X or Z." — .claude/skills/ai-agents-external-claims/SKILL.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 88 | defined here | Anti-pattern of writing speculative caveat statements into artifacts instead of executing primary verification. |

## Consumes
Unverified external assertions, statistics, or third-party claims.

## Produces
Defective artifacts containing conditional caveats and unrun verification tasks disguised as analytical findings.

## When applied
Identified and prohibited during Phase 4 of external claim validation.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Reporting Without Acting` is an anti-pattern where agents document conditional caveats ("would be N if X") instead of actually executing verification or filing conservative statements. In rjm's architecture, this hands downstream readers deferred work disguised as analytical findings, undermining repository reliability and decision quality.
