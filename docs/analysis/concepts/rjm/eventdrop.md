---
package: rjm
name: eventDrop
slug: eventdrop
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eventDrop

## Definition — verbatim
(used, not defined)

> "eventDrop: []" — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 249 | defined here | Specified in hooks build configuration as the list of events excluded from Copilot CLI generation. |

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
defects: missing-path, doc-drift

## Design notes
`eventDrop` is a configuration key in REQ-003 build settings listing unsupported hook events dropped during multi-tool translation rather than an independent software lifecycle concept, classified as `name-only` per D-023.
