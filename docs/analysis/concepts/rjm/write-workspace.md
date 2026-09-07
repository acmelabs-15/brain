---
package: rjm
name: write_workspace
slug: write-workspace
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# write_workspace

## Definition — verbatim
(used, not defined)

> "def write_workspace(result: ExportResult, output_dir: Path, dry_run: bool = False) -> int:" — scripts/openclaw_bridge.py:308

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 308 | defined here | Function that writes generated AGENTS.md and agent skill files to disk, supporting dry-run execution. |

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
`write_workspace` is a Python function identifier in `openclaw_bridge.py` persisting generated OpenClaw workspace artifacts to disk rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
