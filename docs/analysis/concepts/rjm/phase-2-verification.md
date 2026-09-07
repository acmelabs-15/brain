---
package: rjm
name: Phase 2 Verification
slug: phase-2-verification
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 2 Verification

## Definition — verbatim
> "### Phase 2 Verification" — .claude/skills/research-and-incorporate/references/workflow.md:208

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 208 | defines | Quality gate checking word count, concrete examples, specific failure modes, and explicit relationships. |
| templates/agents/qa.shared.md | 598 | defines | QA agent test execution phase generating test report following implementation. |

## Consumes
Draft deep analysis document or implemented feature code.

## Produces
Verification pass/fail decision or post-implementation QA test report.

## When applied
Applied upon completing Phase 2 analysis document or following code implementation in QA workflow.

## Sub-concepts
none

## Part of
research-and-incorporate-workflow

## Implementation status
defects: doc-drift, missing-path

## Design notes
A quality verification checkpoint and QA stage ensuring deep analysis artifacts satisfy depth and concreteness thresholds and implemented features undergo thorough test validation.
