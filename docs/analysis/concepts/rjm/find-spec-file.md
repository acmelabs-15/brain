---
package: rjm
name: find_spec_file
slug: find-spec-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_spec_file

## Definition — verbatim
(used, not defined)

> "def find_spec_file(spec_id: str, base_path: Path) -> Path | None:" — scripts/traceability/spec_utils.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 43 | defined here | Function searching for the markdown file corresponding to a given specification identifier under a base directory. |
| scripts/traceability/update_spec_references.py | 30 | used here | Imported to resolve specification markdown file paths before editing YAML frontmatter. |

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
defects: script-bug, missing-path, orphan

## Design notes
A file resolution function in `spec_utils.py` locating on-disk specification files by identifier, classified as `name-only` per D-023.
