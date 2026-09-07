---
package: rjm
name: Technical Writer
slug: technical-writer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# Technical Writer

## Definition — verbatim
(used, not defined)

> "Documentation changes → Technical Writer" — scripts/incoherence.py:569

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 569 | used here | Agent role selected to execute documentation and markdown modifications during reconciliation. |

## Consumes
Target documentation file paths, inconsistency analyses, and user resolution decisions.

## Produces
Updated markdown documentation, restructured guides, and corrected prose specifications.

## When applied
Dispatched during reconciliation waves when inconsistencies require updates to documentation files or docstrings.

## Sub-concepts
none

## Part of
incoherence

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
`Technical Writer` is a specialized agent persona in `incoherence.py` responsible for applying user-specified resolutions to documentation and guide files, preventing documentation drift without risking unwanted code changes.
