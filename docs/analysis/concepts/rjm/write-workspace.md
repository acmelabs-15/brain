---
package: rjm
name: write_workspace
slug: write-workspace
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
