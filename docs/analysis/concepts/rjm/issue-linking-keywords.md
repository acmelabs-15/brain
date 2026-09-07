---
package: rjm
name: Issue Linking Keywords
slug: issue-linking-keywords
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/validate-pr-description.md, sha256: a77b04b081da3955117fae000dcf4f7db5ce391b2d050bd272e2b50e777ee9f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Issue Linking Keywords

## Definition — verbatim
> "These keywords auto-close the linked issue when the PR merges on platforms that support them (GitHub, GitLab). On other platforms (Azure DevOps, Bitbucket), they serve as traceability markers." — .claude/commands/validate-pr-description.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/validate-pr-description.md | 27 | defined here | Second validation standard requiring PR descriptions to contain issue linking keywords for automated closure and traceability. |

## Consumes
Pull request body markdown text, backlog issue numbers and references.

## Produces
Automated issue closure events upon merge and durable cross-platform traceability links between pull requests and tracking issues.

## When applied
Checked during pre-submission PR validation in `/validate-pr-description` and `/ship`.

## Sub-concepts
none

## Part of
validate-pr-description

## Implementation status
defects: doc-drift, other

## Design notes
Issue Linking Keywords (`Closes #N`, `Fixes #N`, `Resolves #N`) establish explicit, automated linkages between code changes and parent issues. Beyond enabling automatic issue closure upon PR merge in GitHub and GitLab, they maintain audit trails across project management backends, ensuring every merged change traces back to an authorized requirement or defect ticket.
