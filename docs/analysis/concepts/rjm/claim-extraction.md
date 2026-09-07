---
package: rjm
name: Claim Extraction
slug: claim-extraction
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Claim Extraction

## Definition — verbatim
> "Phase 2: Claim Extraction - parse markdown for verifiable claims" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 8 | defined here | Second phase of doc-accuracy scanning parsing markdown files to extract structured, verifiable claims. |

## Consumes
Documentation Markdown files and Phase 1 assessment symbol metadata.

## Produces
`claims.json` capturing code examples, method signatures, behavioral claims, and quantitative statements.

## When applied
Second phase of doc-accuracy scan following Phase 1 assessment.

## Sub-concepts
claim, code-example, method-signature, behavioral, quantitative

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
Claim Extraction is Phase 2 of the doc-accuracy pipeline. It parses documentation text into discrete, verifiable claim structures categorized by type (code examples, method signatures, behavioral assertions, and quantitative bounds), decoupling text parsing from downstream symbol validation and LLM evaluation.
