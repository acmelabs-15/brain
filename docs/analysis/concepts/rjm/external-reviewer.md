---
package: rjm
name: External Reviewer
slug: external-reviewer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
