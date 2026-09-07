---
package: rjm
name: Post-Implementation QR
slug: post-implementation-qr
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-Implementation QR

## Definition — verbatim
> "Step 4: Post-Implementation QR" — .claude/skills/planner/SKILL.md:214

## Also called — verbatim
> "Step 4: Post-Implementation QR (quality review)" — .claude/skills/planner/scripts/executor.py:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 9 | defined here | Enumerated as Step 4 in the execution workflow triggering quality review after code implementation. |
| .claude/skills/planner/SKILL.md | 214 | defined here | Review gate following milestone execution in the plan execution workflow. |

## Consumes
Completed code implementations, test outputs, and milestone requirements.

## Produces
Quality review findings, pass/fail verdicts, and identified defects requiring resolution.

## When applied
Applied immediately after all milestone implementations are completed prior to documentation.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch, doc-drift

## Design notes
Post-Implementation QR is a quality review gate in rjm that validates completed code against design and quality standards before documentation and retrospective steps. If defects or quality issues are discovered, execution branches to issue resolution rather than advancing.
