---
package: rjm
name: Success
slug: success
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Success

## Definition — verbatim
(used, not defined)

> "1. **All skill scripts MUST wrap output in a standard envelope** with `Success`, `Data`, `Error`, and `Metadata` fields" — .agents/architecture/ADR-056-skill-output-format-standardization.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 48 | defined here | Top-level boolean property in the standard output envelope indicating execution outcome. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
standard-envelope

## Implementation status
clean

## Design notes
A boolean property identifier in the standard skill output envelope signaling whether execution succeeded per D-023.
