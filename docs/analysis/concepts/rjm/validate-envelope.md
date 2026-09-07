---
package: rjm
name: validate_envelope
slug: validate-envelope
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_envelope

## Definition — verbatim
> "Validate the output envelope against ADR-056 schema, as corrected by ADR-103." — scripts/validate_skill_output.py:265

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 25 | used here | Explains validation rules, missing callers, and enforcement scope. |
| scripts/validate_skill_output.py | 264 | defined here | Defines the sergeant validation method delegating envelope field checks. |

## Consumes
Deserialized JSON object from a candidate skill output envelope.

## Produces
A list of validation error strings detailing any schema or type violations (empty if compliant).

## When applied
During standalone skill output verification and contract regression testing.

## Sub-concepts
valid-error-types

## Part of
skill-output-format-standardization

## Implementation status
defects: missing-path, doc-drift

## Design notes
Procedural Python validation function in `scripts/validate_skill_output.py` that verifies output envelopes against standardized schema rules, checking the shape, field presence, and types for `Success`, `Data`, `Error`, and `Metadata`.
