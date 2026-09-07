---
package: rjm
name: PASS (Standards Met)
slug: pass-standards-met
kind: gate
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

# PASS (Standards Met)

## Definition — verbatim
> "### PASS (Standards Met)" — .claude/skills/review/references/security.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 194 | defined here | Verdict threshold section defining conditions required for passing security review standards. |

## Consumes
Verification that pull request has no sensitive data, passes all security checks, uses only placeholder credentials, and handles secrets properly.

## Produces
A PASS verdict clearing the PR on the security axis and enabling creation of a SHA-bound review marker.

## When applied
Emitted when all security checks pass cleanly or when a docs-only pull request contains no sensitive information.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: internal-contradiction

## Design notes
A security review verdict threshold certifying that a pull request meets all repository security standards and contains no detectable vulnerabilities or exposed secrets.
