---
package: rjm
name: JSON
slug: json
kind: name-only
package_phase: none
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

# JSON

## Definition — verbatim
(used, not defined)

> "2. **Scripts MUST accept `-OutputFormat`** parameter with values `JSON`, `Human`, `Auto` (default: `Auto`)" — .agents/architecture/ADR-056-skill-output-format-standardization.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 49 | defined here | Output format enum option directing scripts to emit machine-readable JSON envelopes. |
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 93 | defined here | Standardized lowercase format argument option in Python skill scripts. |

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
An output format mode identifier directing scripts to emit machine-readable JSON envelopes to stdout per D-023.
