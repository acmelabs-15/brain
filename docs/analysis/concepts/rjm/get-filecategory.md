---
package: rjm
name: Get-FileCategory
slug: get-filecategory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Get-FileCategory

## Definition — verbatim
(used, not defined)

> "- Duplicated classification logic (Get-FileCategory) creates drift risk" — .agents/critique/ADR-023-debate-log.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 52 | used here | Cited as an example of duplicated classification logic creating drift risk in prompt tests. |

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
defects: internal-contradiction

## Design notes
`Get-FileCategory` is a PowerShell function identifier cited in the ADR-023 debate log rather than an autonomous software development lifecycle concept, classified as `name-only` per D-023.
