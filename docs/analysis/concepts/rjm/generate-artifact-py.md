---
package: rjm
name: generate_<artifact>.py
slug: generate-artifact-py
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

# generate_<artifact>.py

## Definition — verbatim
> "The build system shall expose `build/scripts/generate_<artifact>.py` per artifact type (`agents`, `skills`, `commands`, `rules`, `hooks`)." — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 173 | defined here | Specified under REQ-003-001 as the standardized CLI script naming pattern for artifact generators. |

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
`generate_<artifact>.py` is a generator script file naming pattern and interface template (`build/scripts/generate_<artifact>.py`) specified in REQ-003 rather than an independent software lifecycle concept, classified as `name-only` per D-023.
