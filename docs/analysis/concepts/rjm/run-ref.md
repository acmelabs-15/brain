---
package: rjm
name: RUN_REF
slug: run-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RUN_REF

## Definition — verbatim
(used, not defined)

> "RUN_REF = re.compile(" — scripts/validation/stale_script_refs.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/stale_script_refs.py | 32 | defined here | Regular expression pattern matching script references prefixed with 'run:' in markdown or yaml files. |

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
defects: missing-path, doc-drift

## Design notes
A compiled regular expression identifier in `stale_script_refs.py` used to detect run-prefixed script invocations, classified as name-only per D-023.
