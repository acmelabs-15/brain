---
package: rjm
name: External Reviewer
slug: external-reviewer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# External Reviewer

## Definition — verbatim
(used, not defined)

> "**External Reviewer**: {fn.external_reviewer}" — scripts/security/invoke_security_retrospective.py:485

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/invoke_security_retrospective.py | 485 | used here | Metadata field in generated retrospective report header identifying the source of external review feedback. |

## Consumes
Pull request code changes, GitHub review comments, and security vulnerability reports.

## Produces
Independent security review assessments, vulnerability findings, and feedback.

## When applied
Applied during pull request review when third-party human auditors or external automated reviewers (such as Gemini) critique code.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
An external review entity (human reviewer, auditor, or external automated model like Gemini) operating outside the repository's local agent suite, whose findings serve as a benchmark to detect security agent false negatives.
