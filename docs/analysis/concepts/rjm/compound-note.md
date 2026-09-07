---
package: rjm
name: compound_note
slug: compound-note
kind: name-only
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# compound_note

## Definition — verbatim
(used, not defined)

> "compound_note: str | None = None" — .claude/skills/cynefin-classifier/scripts/classify.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/scripts/classify.py | 64 | defined here | Dataclass field on `ClassificationResult` allocated to store decomposition notes for multi-domain compound problems. |

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
defects: unimplemented-feature

## Design notes
`compound_note` is a Python dataclass field identifier in `classify.py` reserved for multi-domain problem decomposition notes rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
