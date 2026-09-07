---
package: rjm
name: Compilability
slug: compilability
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

# Compilability

## Definition — verbatim
> "Phase 3: Compilability - verify code example symbols exist in codebase" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 9 | defined here | Third phase of doc-accuracy scanning verifying that symbols referenced in code examples exist in the codebase. |

## Consumes
`assessment.json` source symbol index and `claims.json` extracted claims.

## Produces
`compilability-findings.json` containing detected compilability and symbol resolution defects.

## When applied
Third phase of doc-accuracy pipeline validating code snippets before behavioral analysis.

## Sub-concepts
unresolved-symbol, phantom-parameter

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
Compilability is Phase 3 of the doc-accuracy workflow. It statically verifies that code example symbols and invocation parameters presented in documentation actually exist in the codebase symbol index, catching dead APIs and hallucinated parameters cheaply before invoking costly LLM analysis.
