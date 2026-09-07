---
package: rjm
name: UPSTREAM_PATTERNS
slug: upstream-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UPSTREAM_PATTERNS

## Definition — verbatim
(used, not defined)

> "UPSTREAM_PATTERNS: tuple[re.Pattern[str], ...] = (" — scripts/validation/check_skill_md_portability.py:239

## Also called — verbatim
`UPSTREAM_PATTERNS: tuple[re.Pattern[str], ...] = (` — scripts/validation/check_skill_portability.py:77

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 239 | defined here | Tuple of compiled regular expressions matching banned upstream path references in Markdown prose. |
| scripts/validation/check_skill_portability.py | 77 | defined here | Tuple of compiled regular expressions detecting upstream-only path prefixes in skill scripts. |

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
`UPSTREAM_PATTERNS` is a Python constant identifier storing regex patterns for upstream path detection rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
