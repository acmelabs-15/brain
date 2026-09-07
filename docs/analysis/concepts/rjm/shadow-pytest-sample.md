---
package: rjm
name: shadow-pytest-sample
slug: shadow-pytest-sample
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/resolve_pytest_signal.py, sha256: e4152823bcb9632e32537455c786e7c5fcd242267ac13eee834ee65d19f96811}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shadow-pytest-sample

## Definition — verbatim
(used, not defined)

> "SAMPLE_MARKER = \"shadow-pytest-sample\"" — scripts/quality_gate/resolve_pytest_signal.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 76 | defined here | Defined as the constant log marker token emitted in GitHub Actions notices for greppable shadow evaluation telemetry. |

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
defects: orphan

## Design notes
shadow-pytest-sample is a string literal log marker token defined in resolve_pytest_signal.py to enable telemetry counting rather than an autonomous lifecycle concept.
