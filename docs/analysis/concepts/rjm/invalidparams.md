---
package: rjm
name: InvalidParams
slug: invalidparams
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# InvalidParams

## Definition — verbatim
(used, not defined)

> "InvalidParams" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 104 | defined here | Enumerated as a valid `Error.Type` value for invalid, missing, or malformed CLI arguments. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
valid-error-types

## Implementation status
defects: missing-path

## Design notes
An error type identifier within `VALID_ERROR_TYPES` indicating that parameters provided to a script or function were invalid or unparseable, not an independent lifecycle concept.
