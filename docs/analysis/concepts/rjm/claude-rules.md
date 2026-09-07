---
package: rjm
name: .claude/rules/**
slug: claude-rules
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# .claude/rules/**

## Definition — verbatim
(used, not defined)

> ".claude/rules/**" — scripts/test_selection/runtime_read_patterns.txt:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 1 | defined here | Pattern entry triggering full-suite test execution whenever Claude rules files are modified. |

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
`.claude/rules/**` is a glob path pattern in `scripts/test_selection/runtime_read_patterns.txt` designating agent rule files that force full test runs when changed rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
