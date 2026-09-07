---
package: rjm
name: _HTML_COMMENT_PATTERN
slug: html-comment-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _HTML_COMMENT_PATTERN

## Definition — verbatim
(used, not defined)

> "_HTML_COMMENT_PATTERN = re.compile(" — scripts/validation/check_skill_md_drift.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 45 | defined here | Regex matching HTML comments excluding vendor-portability markers so they can be stripped. |

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
A compiled regular expression constant matching non-portability HTML comments in `scripts/validation/check_skill_md_drift.py`, classified as `name-only` per D-023.
