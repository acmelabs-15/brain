---
package: rjm
name: Measurable
slug: measurable
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Measurable

## Definition — verbatim
> "Has evidence, can be validated | Has execution reference" — .claude/skills/retrospective/references/diagnosis-and-actions.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 153 | defined here | SMART validation criterion requiring that a candidate skill has evidence, can be validated, and has an execution reference. |

## Consumes
Candidate skill statements and execution evidence traces.

## Produces
Validation check determining whether candidate statements cite concrete execution evidence and can be verified.

## When applied
Applied during Phase 3 (SMART Validation) before accepting a learning statement for storage.

## Sub-concepts
none

## Part of
smart-validation, decide-what-to-do

## Implementation status
clean

## Design notes
Measurable is a SMART validation criterion ensuring every retrospective learning is grounded in concrete execution evidence and can be verified rather than relying on unsubstantiated assertions.
