---
package: rjm
name: get_step_guidance
slug: get-step-guidance
kind: name-only
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# get_step_guidance

## Definition — verbatim
(used, not defined)

> "def get_step_guidance(step_number, total_steps, script_path=None):" — scripts/incoherence.py:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 122 | defined here | Function returning step-specific required actions and next step transitions for the incoherence workflow. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
A Python function identifier returning action dictionaries for workflow steps rather than an agent lifecycle concept.
