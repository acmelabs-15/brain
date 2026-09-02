---
package: addy
path: .opencode/skills
type: file
bytes: 864
unit: inv-addy-4
---

# .opencode/skills

## Purpose — required, verbatim
> `(no explicit purpose statement)` — Symbolic link exposing `../skills/` at `.opencode/skills` for OpenCode integration.

## Design intent — required
Enables OpenCode agent/CLI to auto-discover and load the repository's skills from standard OpenCode path `.opencode/skills` without copying or duplicating directory contents.

## Phase — required
`none`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- directory skills/ — .opencode/skills:1 (via symlink target `../skills/`)

## Invoked by — required
- docs/opencode-setup.md:41, 60, 67, 103, 108, 144, 254
- README.md:156

## Concepts named — required, verbatim
- `OpenCode skills integration` — .opencode/skills:1 — defined here

## Structure
none (symlink: `skills -> ../skills/`)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — `docs/analysis/manifest/addy.md:94` lists `.opencode/skills` as a regular file with 864 bytes, but on filesystem it is a symbolic link (`skills -> ../skills/`) pointing to directory `../skills/` (whose directory inode entry reports 864 bytes on macOS stat).

## Observations
- Standard compatibility shim for OpenCode tool discovery.

## Context cost
- File size: 10 bytes (symlink target string `../skills/`).
