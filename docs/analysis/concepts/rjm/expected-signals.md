---
package: rjm
name: expected_signals
slug: expected-signals
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# expected_signals

## Definition — verbatim
(used, not defined)

> "\"expected_signals\": [\"characterization\", \"tests before\", \"seam\"]," — scripts/eval/README.md:263

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 263 | defined here | JSON scenario schema field specifying expected behavioral signal tokens in evaluation scenario fixtures. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
`expected_signals` is a JSON schema field identifier in evaluation scenario fixtures specifying required signal tokens rather than an SDLC lifecycle concept.
