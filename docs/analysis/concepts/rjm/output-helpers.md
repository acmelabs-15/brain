---
package: rjm
name: output helpers
slug: output-helpers
kind: artifact
package_phase: cross-phase
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

# output helpers

## Definition — verbatim
> "- Output helpers live in `scripts/github_core/output.py` (Python, per ADR-042)" — .agents/architecture/ADR-056-skill-output-format-standardization.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 87 | defined here | Python helper functions in scripts/github_core/output.py implementing envelope wrapping. |

## Consumes
Execution results, error details, and metadata from calling scripts.

## Produces
Formatted output envelope structures written to stdout.

## When applied
In all Python skill scripts when emitting results or reporting failures.

## Sub-concepts
standard-envelope

## Part of
skill-output-format-standardization

## Implementation status
clean

## Design notes
A shared Python module (`scripts/github_core/output.py`) providing convenience helper functions to serialize responses into standardized JSON envelopes, eliminating parameter and formatting boilerplate across skills.
