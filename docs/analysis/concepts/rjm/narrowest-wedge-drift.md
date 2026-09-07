---
package: rjm
name: Narrowest Wedge drift
slug: narrowest-wedge-drift
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

# Narrowest Wedge drift

## Definition — verbatim
> "**Check 9c (Narrowest Wedge drift)**:" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:136

## Also called — verbatim
> "- **Check 9c, Narrowest Wedge drift**:" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:307

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 136 | defined here | Defined as Check 9c in REQ-016-09 requiring all PRD scope and acceptance criteria to remain bounded by the Step 0 Q4 wedge. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 307 | defined here | Encoded as Check 9c in the critic pre-mortem pipeline to prevent unapproved scope expansion beyond the Q4 wedge. |

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
A scope-control verification gate executed during Step 9 critic review. It enforces strict boundary discipline by verifying that every requirement and acceptance criterion traces directly to or narrows the minimal solution wedge defined in Step 0 Question 4, blocking scope creep unless the wedge has been formally widened in an approved revision.
