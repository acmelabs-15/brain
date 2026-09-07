---
package: rjm
name: process_bundled_file
slug: process-bundled-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# process_bundled_file

## Definition — verbatim
(used, not defined)

> "def process_bundled_file(file_path: Path, output_dir: Path, dry_run: bool) -> int:" — scripts/split_bundled_skills.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/split_bundled_skills.py | 64 | defined here | Parses a bundled memory markdown file and writes extracted individual skill files. |

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
defects: exit-code-mismatch, orphan

## Design notes
`process_bundled_file` is a Python function identifier extracting individual skill markdown files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
