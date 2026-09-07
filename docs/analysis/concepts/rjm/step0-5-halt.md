---
package: rjm
name: step0_5-halt
slug: step0-5-halt
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step0_5-halt

## Definition — verbatim
> "Every halt MUST emit a fenced code block with info-string `step0_5-halt` containing exactly five `key: value` lines." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 34 | defined here | Defined as the machine-readable halt-block schema with triggers H6 through H11. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 47 | defined here | Specified with exact 5-line fenced code block format and worked examples for H6 and H11. |

## Consumes
Halt trigger firings (H6–H11) from Step 0.5 Memory-First Gate evaluation.

## Produces
Structured fenced code block (`trigger`, `check`, `evidence`, `test_failed`, `deferral`) emitted to stdout.

## When applied
When Step 0.5 Memory-First Gate fails on missing prior art, lack of citations, or blast-radius threshold violations.

## Sub-concepts
none

## Part of
step-0-5, first-principles-gate

## Implementation status
defects: missing-path, doc-drift

## Design notes
A structured machine-readable halt block emitted when the Memory-First Gate fails, halting pipeline execution and providing actionable instructions for prior-art remediation.
