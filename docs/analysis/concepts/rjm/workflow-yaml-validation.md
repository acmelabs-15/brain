---
package: rjm
name: Workflow YAML Validation
slug: workflow-yaml-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Workflow YAML Validation

## Definition — verbatim
> "Workflow YAML Validation" — scripts/validation/pre_pr_sequence.py:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 252 | defined here | Pre-PR validation gate verifying the syntax, action references, and structural schemas of GitHub Actions workflow files. |

## Consumes
GitHub Actions workflow definitions located under .github/workflows/*.yml.

## Produces
Validation pass/fail verdict on workflow schema validity and action syntax.

## When applied
Executed during the pre-PR validation sequence before committing or pushing workflow changes.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Workflow YAML Validation provides local, shift-left verification of GitHub Actions workflow files under .github/workflows/. By validating YAML syntax, schema structures, and action action step definitions locally, it prevents broken workflow configurations from triggering immediate CI syntax failures on push.
