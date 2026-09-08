---
package: rjm
name: Tree coverage
slug: tree-coverage
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tree coverage

## Definition — verbatim
> "Tree coverage asks whether the scan saw everything it was supposed to see." — scripts/validation/portability_baseline.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline.py | 3 | used here | Contrasted against artifact comparison to explain the separation between scanning and baseline verification. |

## Consumes
Repository file trees and directory enumeration rules.

## Produces
Verification that all relevant paths and directories were evaluated by a validator.

## When applied
Applied during repository validation passes to guarantee scan completeness.

## Sub-concepts
none

## Part of
portability-validation

## Implementation status
clean

## Design notes
Tree coverage provides the guarantee that a validation scan did not omit files or directories, preventing blind spots where portability violations or debt could hide unexamined.
