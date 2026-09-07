---
package: rjm
name: src/copilot-cli/instructions/**
slug: src-copilot-cli-instructions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# src/copilot-cli/instructions/**

## Definition — verbatim
(used, not defined)

> "src/copilot-cli/instructions/**" — scripts/test_selection/runtime_read_patterns.txt:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 3 | defined here | Pattern entry triggering full-suite test execution whenever Copilot CLI instruction files are modified. |

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
`src/copilot-cli/instructions/**` is a glob path pattern in `scripts/test_selection/runtime_read_patterns.txt` designating Copilot CLI instruction files that force full-suite test runs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
