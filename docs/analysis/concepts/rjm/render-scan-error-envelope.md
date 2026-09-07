---
package: rjm
name: render_scan_error_envelope
slug: render-scan-error-envelope
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# render_scan_error_envelope

## Definition — verbatim
> "def render_scan_error_envelope(result: ScanResult, message: str, output: str) -> str:" — .claude/skills/orphan-ref-validator/scripts/envelope.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 192 | defined here | Primary definition of `render_scan_error_envelope` within envelope.py. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (render_scan_error_envelope) utilized within the rjm ecosystem to ensure consistency and systematic execution.
