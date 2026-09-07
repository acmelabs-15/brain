---
package: rjm
name: DEFAULT_BASELINE_NAME
slug: default-baseline-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DEFAULT_BASELINE_NAME

## Definition — verbatim
(used, not defined)

> "DEFAULT_BASELINE_NAME = \"agent_skill_discriminator_baseline.json\"" — scripts/validation/agent_skill_discriminator_baseline.py:37

## Also called — verbatim
> "_DEFAULT_BASELINE_NAME = \"skill_md_exec_portability_baseline.json\"" — scripts/validation/check_skill_md_exec_portability.py:82
> "_DEFAULT_BASELINE_NAME = \"skill_portability_baseline.json\"" — scripts/validation/check_skill_portability.py:106

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 37 | defined here | Constant defining the default baseline file name for agent-skill discriminator scoring. |
| scripts/validation/check_rule_activation_coverage.py | 82 | defined here | Constant defining the default baseline JSON file name for rule activation coverage. |
| scripts/validation/check_skill_md_exec_portability.py | 82 | defined here | Constant defining the default baseline JSON file name for SKILL.md execution portability. |
| scripts/validation/check_skill_portability.py | 106 | defined here | Constant defining the default baseline JSON file name for skill portability checks. |

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
clean in scripts/validation/check_rule_activation_coverage.py; defects: missing-path in scripts/validation/agent_skill_discriminator_baseline.py; defects: other in scripts/validation/check_skill_md_exec_portability.py; defects: doc-drift, orphan in scripts/validation/check_skill_portability.py

## Design notes
`DEFAULT_BASELINE_NAME` (and `_DEFAULT_BASELINE_NAME`) is a configuration constant specifying default JSON baseline file names across validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
