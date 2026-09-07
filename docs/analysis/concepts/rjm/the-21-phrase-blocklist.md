---
package: rjm
name: The 21-phrase blocklist
slug: the-21-phrase-blocklist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/spec-quality/hedge-phrases.md, sha256: 6c4f3bb4682ea4dd9beb248236205588a15cff8ed663225de1b26fea8127b8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The 21-phrase blocklist

## Definition — verbatim
(used, not defined)

> "## The 21-phrase blocklist" — docs/spec-quality/hedge-phrases.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/spec-quality/hedge-phrases.md | 39 | defined here | Section heading introducing the tabular list of 21 banned speculative phrases and their rationale. |

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
clean

## Design notes
The 21-phrase blocklist is a documentation section heading in `docs/spec-quality/hedge-phrases.md` introducing the blocklist table rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
