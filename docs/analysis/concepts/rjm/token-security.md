---
package: rjm
name: Token Security
slug: token-security
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Token Security

## Definition — verbatim
(used, not defined)

> "- R4: Add Task 1.5 - Token Security (2 hours to implement)" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 72 | used here | Recommended as task R4/1.5 to replace BOT_PAT with github.token, add secret masking, and document token scopes. |

## Consumes
GitHub tokens, PAT credentials, workflow secrets, and execution environments.

## Produces
Scoped credentials, masked secret output (`::add-mask::`), and explicit permission specifications.

## When applied
When authoring or auditing CI/CD workflows and automated scripts requiring GitHub API authentication.

## Sub-concepts
none

## Part of
security-review

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Token Security` encapsulates the principle of least privilege for automated bot and workflow tokens, requiring secret masking in log streams and avoiding broad administrative tokens when localized repository tokens suffice.
