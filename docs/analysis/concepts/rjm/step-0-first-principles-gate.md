---
package: rjm
name: Step 0 First Principles Gate
slug: step-0-first-principles-gate
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: docs/spec-quality/hedge-phrases.md, sha256: 6c4f3bb4682ea4dd9beb248236205588a15cff8ed663225de1b26fea8127b8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 0 First Principles Gate

## Definition — verbatim
> "# REQ-016: Add Step 0 First Principles Gate to spec pipeline" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 22 | defines | Formal requirements specification defining the six-question demand validation gate. |
| docs/spec-quality/hedge-phrases.md | 3 | uses | Documentation describing the gate's hedge-phrase blocklist and validation rules. |

## Consumes
Proposer's answers to the six forcing questions.

## Produces
Structured Step 0 block for PRDs or gate halt with diagnostic error.

## When applied
Invoked as the mandatory first step when `/spec` runs, prior to any requirement elicitation.

## Sub-concepts
demand-reality, status-quo, desperate-specificity, narrowest-wedge, observation, future-fit, hedge-phrase-list, speculative, aspirational

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A blocking pre-specification gate that forces authors to demonstrate concrete, real-world demand and specific blocked users through six forcing questions before allowing clarification or drafting work to begin.
