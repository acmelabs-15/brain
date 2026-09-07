---
package: rjm
name: MalformedAgentFileError
slug: malformedagentfileerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MalformedAgentFileError

## Definition — verbatim
(used, not defined)

> "class MalformedAgentFileError(Exception):" — scripts/validation/agent_registry.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_registry.py | 96 | defined here | Exception class raised when a markdown file in the agent directory is not a usable agent definition. |

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
`MalformedAgentFileError` is a custom Python exception class raised when an agent markdown file fails parsing or schema validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
