---
package: rjm
name: _find_mcporter
slug: find-mcporter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
