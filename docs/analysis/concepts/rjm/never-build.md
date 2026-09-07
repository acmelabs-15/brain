---
package: rjm
name: Never Build
slug: never-build
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Never Build

## Definition — verbatim
> "<output>Red line criteria (Never Build / Never Buy)</output>" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 100 | defined here | Red line category ruling out custom development when mature commodity solutions exist. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 98 | defined here | Boundary criterion short-circuiting custom build proposals for non-differentiating context capabilities. |

## Consumes
Commodity capability requests, commodity SaaS availability data, and team maintenance capacity.

## Produces
Immediate disqualification of internal development options, mandating purchase or partner paths.

## When applied
Applied during Phase 1 classification when a capability is purely context and readily available in the market.

## Sub-concepts
none

## Part of
red-line-criteria

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path

## Design notes
An essential guardrail against engineering's Not-Invented-Here syndrome in rjm. Never Build establishes a hard rule that non-differentiating commodity utilities (such as billing systems, authentication protocols, or generic CRM) must never be built in-house, preserving finite engineering capital for core customer value.
