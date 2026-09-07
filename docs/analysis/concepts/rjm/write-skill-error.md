---
package: rjm
name: write_skill_error
slug: write-skill-error
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: scripts/github_core/output.py, sha256: d440cb852e8bebf189d17d130b5715593516e4ce0a2d71bc303d7cf8357efead}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_skill_error

## Definition — verbatim
> "Provides write_skill_output, write_skill_error, and get_output_format functions for consistent skill script output formatting. All skill scripts should use these helpers to produce either JSON or human-readable output." — scripts/github_core/output.py:3-5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 22 | used here | References helper implementation guarantees and required `Error.Type` formatting. |
| scripts/github_core/output.py | 3 | defined here | Module docstring defining standard skill error and output formatting helpers. |

## Consumes
Error message, integer exit code, and error type from `VALID_ERROR_TYPES`.

## Produces
Standardized JSON error envelope with `Success: false`, `Data: null`, and populated `Error` object containing `Message`, `Code`, and `Type`.

## When applied
When a skill script encounters an operational failure, validation error, or exception.

## Sub-concepts
valid-error-types

## Part of
skill-output-format-standardization

## Implementation status
defects: missing-path

## Design notes
Standard library helper function in `scripts/github_core/output.py` that formats and emits compliant JSON error envelopes with structured error codes and required error types for consumption by agent harnesses and caller scripts.
