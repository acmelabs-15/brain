---
package: rjm
name: _strip_html_comments
slug: strip-html-comments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _strip_html_comments

## Definition — verbatim
(used, not defined)

> "def _strip_html_comments(text: str) -> str:" — scripts/validation/check_skill_md_drift.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 51 | defined here | Removes HTML comments from documentation while preserving vendor-portability markers. |

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
defects: doc-drift

## Design notes
A string sanitization helper function in `scripts/validation/check_skill_md_drift.py`, classified as `name-only` per D-023.
