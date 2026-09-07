---
package: rjm
name: baseline-conflict guard
slug: baseline-conflict-guard
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
