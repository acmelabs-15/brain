---
package: rjm
name: File conservative
slug: file-conservative
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

# File conservative

## Definition — verbatim
> "State only what you can defend without the unrun verification, drop the unverifiable number or attribution, and do not name the gate you skipped inside the artifact." — .claude/skills/ai-agents-external-claims/SKILL.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 86 | defined here | Core fallback discipline when an external claim is unverified: state only defendable facts and drop unverified figures. |

## Consumes
An external claim, statistic, or attribution lacking primary source verification.

## Produces
A conservative assertion in the deliverable with unverifiable attributions, numbers, or unrun gate references omitted.

## When applied
Applied during Phase 4 of external claim validation when an unverified claim cannot be immediately verified against primary sources.

## Sub-concepts
none

## Part of
claim-verification-before-ingest

## Implementation status
defects: missing-path

## Design notes
`File conservative` provides an honest, defensible fallback when an external claim cannot be immediately verified against primary sources. Rather than inserting conditional caveat language or deferred TODOs ("would be N if X corroborates") that pollute artifacts with unverified claims, this discipline requires agents to omit unverified assertions entirely and report only what can be defended.
