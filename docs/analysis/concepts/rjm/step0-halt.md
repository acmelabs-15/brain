---
package: rjm
name: step0-halt
slug: step0-halt
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step0-halt

## Definition — verbatim
> "(machine-readable; every halt MUST emit a fenced code block with info-string `step0-halt` containing five `key: value` lines):" — .claude/skills/spec-generator/references/spec-step0-gates.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 137 | used here | Cited as the structural precedent for Step 0.5 halt blocks. |
| .claude/skills/spec-generator/references/spec-step0-gates.md | 79 | defined here | Defined with exact 5-line fenced code block format (`trigger`, `question`, `answer`, `test_failed`, `deferral`). |

## Consumes
Fired halt trigger (H1–H5) from Step 0 First Principles Gate.

## Produces
Structured fenced code block halt output stopping `/spec` execution.

## When applied
When Step 0 validation fails on demand reality, status quo, or specificity criteria.

## Sub-concepts
none

## Part of
first-principles-gate, step-0

## Implementation status
defects: missing-path, doc-drift

## Design notes
A machine-readable halt block emitted when the First Principles Gate fails, enforcing clean halts before planning starts.
