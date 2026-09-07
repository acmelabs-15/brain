---
package: rjm
name: _REDUCERS
slug: reducers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _REDUCERS

## Definition — verbatim
> "_REDUCERS: dict[str, Callable[[list[float]], float]] = {" — scripts/eval/_optimizer_adapters.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 47 | defined here | Dictionary mapping aggregation strategy names (mean, min, max, median) to statistical callables. |

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
defects: other

## Design notes
`_REDUCERS` is an internal dictionary mapping reduction function names to statistical aggregation callables in `_optimizer_adapters.py`, classified as `name-only` per D-023.
