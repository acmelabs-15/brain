---
package: rjm
name: ExportResult
slug: exportresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ExportResult

## Definition — verbatim
(used, not defined)

> "class ExportResult:" — scripts/openclaw_bridge.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 92 | defined here | Dataclass tracking generated AGENTS.md routing content, skill files, agent count, and errors. |

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
defects: doc-drift, orphan

## Design notes
`ExportResult` is a Python dataclass identifier encapsulating generated workspace files and metadata produced by the OpenClaw exporter rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
