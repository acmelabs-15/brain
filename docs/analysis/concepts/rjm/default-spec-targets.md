---
package: rjm
name: DEFAULT_SPEC_TARGETS
slug: default-spec-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DEFAULT_SPEC_TARGETS

## Definition — verbatim
(used, not defined)

> "DEFAULT_SPEC_TARGETS: tuple[str, ...] = (" — scripts/sync/detect_spec_drift.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 65 | defined here | Constant defining the default specification tier directories (.agents/specs/requirements, .agents/specs/design, .agents/specs/tasks) scanned for drift. |

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
`DEFAULT_SPEC_TARGETS` is a Python configuration constant specifying default target directories for spec drift scanning rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
