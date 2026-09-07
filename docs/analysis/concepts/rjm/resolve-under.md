---
package: rjm
name: _resolve_under
slug: resolve-under
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics_writer.py, sha256: 7a9d4b92bf72b4f8881fbb900d4586a83289d0055caf7f50b556927e6fdafed1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _resolve_under

## Definition — verbatim
> "def _resolve_under(target: Path, base: Path) -> Path:" — scripts/metrics_writer.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 119 | defined here | Helper function confirming a resolved target path remains strictly within an allowed base directory against CWE-23 traversal. |

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
clean

## Design notes
`_resolve_under` is a helper function in `scripts/metrics_writer.py` validating that a resolved target path remains confined beneath a designated base directory rather than a lifecycle concept, classified as `name-only` per D-023.
