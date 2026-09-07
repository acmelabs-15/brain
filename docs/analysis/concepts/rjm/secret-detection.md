---
package: rjm
name: Secret Detection
slug: secret-detection
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Secret Detection

## Definition — verbatim
> "### 2. Secret Detection" — .claude/skills/review/references/security.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 82 | defined here | Focus area in security review scanning PR diffs for exposed credentials, API keys, tokens, and environment leaks. |

## Consumes
Pull request diffs, committed files, and repository changesets.

## Produces
Security review findings identifying exposed API keys, credentials, or tokens.

## When applied
Executed during security review when analyzing changes for credential leaks.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: internal-contradiction

## Design notes
Secret Detection is an analysis focus area in rjm's security review rubric that inspects pull request diffs for regex-matched secrets including AWS keys, GitHub tokens, and generic passwords to prevent credential leakage into git history.
