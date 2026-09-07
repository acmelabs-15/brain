---
package: rjm
name: investigation plan
slug: investigation-plan
kind: artifact
package_phase: rjm:Investigation Planning
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# investigation plan

## Definition — verbatim
> "Execute the investigation plan. Read files, collect evidence with file:line references and quoted code. Trace root causes across files." — .claude/skills/analyze/SKILL.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 117 | defined here | Contract committing to specific files, questions, and hypotheses per focus area created in Phase 3. |

## Consumes
Focus area selections, priority assignments (P1-P3), and initial exploration findings.

## Produces
A committed contract of target files, investigative questions, and testable hypotheses to be verified in Step 5.

## When applied
Constructed during Step 3 (Investigation Planning) and executed across Steps 4 through N-2.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`investigation plan` establishes a verifiable contract at Step 3 of the analysis workflow, binding the agent to inspect specific files and answer explicit questions before concluding.
