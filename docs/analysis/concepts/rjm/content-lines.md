---
package: rjm
name: _content_lines
slug: content-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _content_lines

## Definition — verbatim
(used, not defined)

> "def _content_lines(body: str) -> list[str]:" — scripts/validation/check_agent_skill_discriminator.py:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 258 | defined here | Filters out blank lines and code block interiors to isolate lines contributing to c2 scoring. |

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
defects: missing-path, other

## Design notes
_content_lines is a Python helper function identifier extracting countable content lines from markdown bodies, classified as name-only per D-023.
