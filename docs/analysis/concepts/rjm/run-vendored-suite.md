---
package: rjm
name: _run_vendored_suite
slug: run-vendored-suite
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics/check_vendored_install.py, sha256: 8086464e6162330cf2fd6d5f848b550de245841f06ce4ec0f4000f52c36ccc45}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _run_vendored_suite

## Definition — verbatim
> "def _run_vendored_suite() -> subprocess.CompletedProcess[str]:" — scripts/metrics/check_vendored_install.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/check_vendored_install.py | 44 | defined here | Helper function invoking pytest on the vendored-install integration test file via subprocess. |

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
defects: script-bug

## Design notes
`_run_vendored_suite` is a helper function in `scripts/metrics/check_vendored_install.py` executing the pytest suite for vendored installation validation rather than a lifecycle concept, classified as `name-only` per D-023.
