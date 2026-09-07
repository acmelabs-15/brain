---
package: rjm
name: Review Scope Enumeration
slug: review-scope-enumeration
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Review Scope Enumeration

## Definition — verbatim
> "### Review Scope Enumeration (required)" — .claude/agents/security.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 105 | defined here | Mandatory protocol requiring reviewers to record the complete file changeset before assessing security implications. |
| templates/agents/security.shared.md | 76 | defined here | Defined in the shared security agent template as a mandatory prerequisite to security review. |

## Consumes
Git diffs, PR file lists, commit ranges, and repository working trees.

## Produces
A recorded manifest of every file path, line range, and asset examined during the security review.

## When applied
Mandatory first step performed before conducting security analysis or rendering a review verdict.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
Review Scope Enumeration establishes the boundary of analysis before a security assessment begins. In multi-agent autonomous environments where file contents can shift during concurrent execution, recording the exact changeset reviewed ensures that a security verdict is explicitly bound to a proven, immutable scope rather than an unverified assumption.
