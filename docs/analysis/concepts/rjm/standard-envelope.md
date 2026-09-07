---
package: rjm
name: standard envelope
slug: standard-envelope
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# standard envelope

## Definition — verbatim
> "1. **All skill scripts MUST wrap output in a standard envelope** with `Success`, `Data`, `Error`, and `Metadata` fields" — .agents/architecture/ADR-056-skill-output-format-standardization.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 48 | defined here | Mandated universal wrapper schema for all skill script execution outputs. |
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 91 | defined here | Reaffirmed as standard schema wrapper for Python skill script outputs. |

## Consumes
Output payload, execution status, error details, and execution metadata.

## Produces
Standardized JSON dictionary with Success, Data, Error, and Metadata keys.

## When applied
Whenever any skill script produces output in JSON mode.

## Sub-concepts
success, data, error

## Part of
skill-output-format-standardization

## Implementation status
clean

## Design notes
The canonical output payload envelope schema across all skills in rjm, providing consistent top-level fields (`Success`, `Data`, `Error`, `Metadata`) to enable reliable parsing by consuming agents and CI tools.
