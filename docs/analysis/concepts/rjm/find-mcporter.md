---
package: rjm
name: _find_mcporter
slug: find-mcporter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/mcp_cli/wrapper.py, sha256: e26e2aaec24230446e7e9c5bfe06ae1888d4272a50de3ca8c93295dd002715e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _find_mcporter

## Definition — verbatim
> "def _find_mcporter() -> list[str]:" — scripts/mcp_cli/wrapper.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/wrapper.py | 64 | defined here | Helper function determining executable command prefix for mcporter, preferring local binary or falling back to npx. |

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
`_find_mcporter` is a helper function in `scripts/mcp_cli/wrapper.py` resolving the executable command prefix for mcporter rather than a lifecycle concept, classified as `name-only` per D-023.
