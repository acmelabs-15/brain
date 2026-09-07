---
package: rjm
name: method_signature
slug: method-signature
kind: name-only
package_phase: none
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

# method_signature

## Definition — verbatim
(used, not defined)

> "    claim_type: str  # code_example, method_signature, behavioral, quantitative" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 87 | defined here | Claim type category designating API method signatures documented in prose or tables. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
`method_signature` is a claim type category identifier in doc_accuracy.py representing documented function signatures rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
