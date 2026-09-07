---
package: rjm
name: Demand Reality drift
slug: demand-reality-drift
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Demand Reality drift

## Definition — verbatim
> "**Check 9a (Demand Reality drift)**:" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:128

## Also called — verbatim
> "- **Check 9a, Demand Reality drift**:" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:301

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 128 | defined here | Defined as Check 9a in REQ-016-09 requiring PRD acceptance criteria, user stories, or metrics to reference at least one entity named in Step 0 Q1. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 301 | defined here | Encoded as Check 9a in the critic pre-mortem specification pipeline validating forward-looking demand reality before PRD approval. |

## Consumes
prd

## Produces
verdict

## When applied
> "WHEN Step 9 (critic pre-mortem) runs" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:124

## Sub-concepts
none

## Part of
critic-pre-mortem

## Implementation status
defects: doc-drift, missing-path

## Design notes
An automated binary drift check performed by the critic agent in Step 9 of the specification workflow. It ensures that the final PRD directly serves the verified demand established in Step 0 Question 1 by checking that at least one named person, team, system, metric, or ticket cited in Q1 appears explicitly within the acceptance criteria, user stories, or success metrics.
