---
package: rjm
name: MUST-9
slug: must-9
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
---

# MUST-9

## Definition — verbatim
> "``.claude/rules/ci-scripts.md`` MUST-9: \"A ratchet baseline is a claim" — scripts/validation/agent_skill_discriminator_baseline.py:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 160 | used here | Cited as the governance rule prohibiting ratchet baseline measurements from reading untracked working tree state. |

## Consumes
CI scripts and measurement tools generating or verifying ratchet baselines.

## Produces
Policy enforcement ensuring that ratchet baseline measurements read exclusively from committed git refs rather than on-disk directory walks.

## When applied
During the implementation and execution of any CI script or validator computing a ratchet baseline across repository artifacts.

## Sub-concepts
none

## Part of
ci-scripts-rules

## Implementation status
defects: missing-path

## Design notes
A governance rule (MUST-9) in `.claude/rules/ci-scripts.md` requiring ratchet baselines to measure committed ref state rather than untracked working tree files, preventing baseline pollution and ensuring reproducible checks across environments.
