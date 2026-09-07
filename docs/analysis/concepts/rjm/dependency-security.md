---
package: rjm
name: Dependency Security
slug: dependency-security
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/architecture-security-template.md, sha256: 05ed96c8675d7c953c030e2eca5d3546182f60ec9e873ef7e55f9e2c6a231c5c}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dependency Security

## Definition — verbatim
(used, not defined)

> "### 3. Dependency Security" — .claude/skills/review/references/security.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 182 | defines | Section auditing third-party dependencies and tabulating risk levels via a risk matrix. |
| .claude/skills/review/references/security.md | 92 | defines | PR review analysis focus area checking new dependencies, known vulnerable packages, and outdated libraries. |

## Consumes
Package configuration files, lockfiles, dependency manifests, vulnerability databases.

## Produces
Third-party dependency inventories, vulnerability assessments, and dependency risk ratings.

## When applied
Applied during pull request code reviews and architecture security reviews whenever dependencies are added, updated, or evaluated.

## Sub-concepts
dependency-risk-matrix

## Part of
security

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A security review domain and checklist that scrutinizes third-party libraries and packages for known CVEs, outdated versions, and unvetted additions to protect against supply chain vulnerabilities.
