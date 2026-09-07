---
package: rjm
name: Step 0.5 halt block format
slug: step-0-5-halt-block-format
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 0.5 halt block format

## Definition — verbatim
> "#### Step 0.5 halt block format" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 45 | defined here | Defines the five-field machine-readable fenced code block (`step0_5-halt`) emitted when a Step 0.5 halt trigger fires. |

## Consumes
Trigger ID (H6-H11), AC check ID, evidence text, rule violated, and deferral instruction.

## Produces
A fenced code block with info-string `step0_5-halt` containing `trigger`, `check`, `evidence`, `test_failed`, and `deferral` keys.

## When applied
Emitted whenever any Step 0.5 halt criterion fires before Step 1.

## Sub-concepts
redaction-pre-emit

## Part of
step-0-5-halt-criteria

## Implementation status
defects: missing-path, doc-drift

## Design notes
Specifies the standardized, machine-readable format for Step 0.5 halt outputs so downstream orchestrators, review agents, and CI tooling can parse failure reasons and required remediations deterministically.
