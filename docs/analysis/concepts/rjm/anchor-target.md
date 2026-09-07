---
package: rjm
name: _anchor_target
slug: anchor-target
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

# _anchor_target

## Definition — verbatim
> "def _anchor_target(" — scripts/metrics_writer.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 98 | defined here | Helper function anchoring relative target paths to the project directory or custom base directory. |

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
`_anchor_target` is a helper function in `scripts/metrics_writer.py` resolving and anchoring file paths under a designated base directory rather than a lifecycle concept, classified as `name-only` per D-023.
