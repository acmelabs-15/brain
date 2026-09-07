---
package: rjm
name: Desperate Specificity drift
slug: desperate-specificity-drift
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

# Desperate Specificity drift

## Definition — verbatim
> "**Check 9b (Desperate Specificity drift)**:" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:132

## Also called — verbatim
> "- **Check 9b, Desperate Specificity drift**:" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:304

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 132 | defined here | Defined as Check 9b in REQ-016-09 ensuring PRD user stories or acceptance criteria maintain the Q3-named entity as the primary unblocking target. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 304 | defined here | Encoded as Check 9b in the critic pre-mortem specification pipeline verifying audience stability against Step 0 Q3. |

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
A pre-mortem verification gate that detects audience drift in specifications. It verifies that user stories and acceptance criteria continue to treat the specific blocked entity identified during Step 0 Question 3 as the primary beneficiary, preventing features from pivoting into generic abstractions or catering to unintended audiences.
