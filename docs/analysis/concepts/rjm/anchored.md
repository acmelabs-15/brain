---
package: rjm
name: _anchored
slug: anchored
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _anchored

## Definition — verbatim
(used, not defined)

> "def _anchored(recorded: str, base: Path) -> Path | None:" — scripts/maintenance/_gc_stale.py:389

## Also called — verbatim
`ANCHORED` — scripts/validation/check_skill_resolver_anchoring.py:60

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 389 | defined here | Path resolution helper resolving relative gitdir paths against the marker file rather than the current working directory. |
| scripts/validation/check_skill_resolver_anchoring.py | 60 | defined here | Regular expression pattern verifying that shell resolvers anchor paths using git rev-parse --show-toplevel. |

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
`_anchored` is an internal function and regular expression pattern identifier in maintenance and validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
