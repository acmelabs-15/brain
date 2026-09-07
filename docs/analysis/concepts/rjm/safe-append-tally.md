---
package: rjm
name: safe_append_tally
slug: safe-append-tally
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

# safe_append_tally

## Definition — verbatim
> "def safe_append_tally(" — scripts/metrics_writer.py:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics_writer.py | 135 | defined here | Core utility function appending one record line to a tally file under exclusive lock with symlink and traversal protections. |

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
`safe_append_tally` is a Python utility function in `scripts/metrics_writer.py` providing secure atomic append operations to metrics tally files rather than a lifecycle concept, classified as `name-only` per D-023.
