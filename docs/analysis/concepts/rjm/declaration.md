---
package: rjm
name: DECLARATION
slug: declaration
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DECLARATION

## Definition — verbatim
(used, not defined)

> "DECLARATION = \"doc-interpreter-portability:\"" — scripts/validation/check_doc_interpreter_portability.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 186 | defined here | String constant matching line-scoped opt-out comment declarations for interpreter portability. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 345 | defined here | Regular expression matching vendor-portability HTML comment declarations in frontmatter. |

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
A Python constant representing suppression comment patterns across portability validation scripts, classified as name-only per D-023.
