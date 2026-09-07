---
package: rjm
name: Completeness Verification
slug: completeness-verification
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Completeness Verification

## Definition — verbatim
> "Before reporting validation results, verify completeness independently. Format checks alone do not verify scope." — .claude/agents/qa.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 85 | defined here | Mandates comparing promised deliverables against actual workspace deliverables using a structured reconciliation block. |
| .claude/skills/skillforge/references/regression-questions.md | 103 | defined here | Defines the Category 5 regression questioning checklist ensuring all analytical frameworks and domains are applied. |
| templates/agents/qa.shared.md | 75 | defined here | Mandates comparing promised deliverables against actual workspace deliverables using a structured reconciliation block. |

## Consumes
Original task delegation / issue specifications, workspace file listings, deliverable artifacts.

## Produces
Explicit Promised/Delivered/Gap reconciliation report with PASS/FAIL verdict.

## When applied
Executed prior to reporting validation results or finalizing QA verification.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
Completeness Verification enforces independent scope auditing alongside correctness checks. Spurred by past failures where automated format validators reported success on partially completed batches, this technique requires explicit Promised vs Delivered reconciliation, preventing false completion claims when deliverables are missing.
