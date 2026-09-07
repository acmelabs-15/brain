---
package: rjm
name: .github/instructions/**
slug: github-instructions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# .github/instructions/**

## Definition — verbatim
(used, not defined)

> ".github/instructions/**" — scripts/test_selection/runtime_read_patterns.txt:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 2 | defined here | Pattern entry triggering full-suite test execution whenever GitHub instructions files are modified. |

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
clean

## Design notes
`.github/instructions/**` is a glob path pattern in `scripts/test_selection/runtime_read_patterns.txt` designating GitHub instruction files that trigger full-suite test execution rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
