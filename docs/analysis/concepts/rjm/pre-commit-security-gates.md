---
package: rjm
name: pre-commit security gates
slug: pre-commit-security-gates
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-commit security gates

## Definition — verbatim
(used, not defined)

> "- Integrating pre-commit security gates" — .claude/skills/security-scan/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 42 | used here | Listed under When to Use as an integration scenario for proactive security checks. |

## Consumes
Staged source files, security scanner scripts, and pre-commit hook configurations.

## Produces
Pass or block decision preventing vulnerable commits from entering git history.

## When applied
Applied locally before git commit creation or prior to pull request submission.

## Sub-concepts
none

## Part of
security-scan

## Implementation status
defects: doc-drift, orphan

## Design notes
A blocking verification gate executed via pre-commit hooks (such as lefthook) that halts local commit operations when command injection patterns or vulnerabilities are detected.
