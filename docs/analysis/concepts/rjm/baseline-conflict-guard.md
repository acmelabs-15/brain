---
package: rjm
name: baseline-conflict guard
slug: baseline-conflict-guard
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# baseline-conflict guard

## Definition — verbatim
> "baseline-conflict guard (issue #4195). When only .md inputs " — scripts/validation/check_skill_md_portability.py:749

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 749 | defined here | Safety gate preventing PR branches from masking regressions by silently regenerating the baseline alongside input changes. |

## Consumes
Git diff against base ref, working tree markdown files, scanner source files, and on-disk baseline file.

## Produces
Exit code 0 on clean state or exit code 1 on semantic baseline conflict.

## When applied
Applied during pull request validation runs when `--base-ref` is specified.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A pull request validation gate preventing branches from laundering newly introduced non-portable references by regenerating baseline files concurrently with modifications to measured markdown inputs.
