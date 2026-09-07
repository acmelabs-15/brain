---
package: rjm
name: .config/wt.toml
slug: config-wt-toml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# .config/wt.toml

## Definition — verbatim
(used, not defined)

> ".config/wt.toml" — scripts/test_selection/runtime_read_patterns.txt:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 9 | defined here | Pattern entry triggering a full-suite test run whenever worktree configuration is modified. |

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
`.config/wt.toml` is a configuration file path in `scripts/test_selection/runtime_read_patterns.txt` governing worktree settings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
