---
package: rjm
name: _EXCLUDED_FILES
slug: excluded-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _EXCLUDED_FILES

## Definition — verbatim
(used, not defined)

> "_EXCLUDED_FILES = frozenset({\"AGENTS.md\", \"claude-instructions.template.md\"})" — scripts/validation/agent_registry.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_registry.py | 64 | defined here | Constant frozenset defining non-agent markdown files in src/claude/. |

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
`_EXCLUDED_FILES` is a private constant frozenset in `scripts/validation/agent_registry.py` specifying files in `src/claude/` that are not agent definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
