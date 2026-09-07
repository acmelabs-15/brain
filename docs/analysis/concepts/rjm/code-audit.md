---
package: rjm
name: code-audit
slug: code-audit
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# code-audit

## Definition — verbatim
(used, not defined)

> "| `code-audit` | 30+ checks: SQL injection, CSRF, N+1, credential leaks |" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 50 | used here | Listed in the static analysis drift detection table as the tool performing 30+ security and performance checks. |

## Consumes
Repository source code and AST pattern rule sets.

## Produces
Static audit reports highlighting security vulnerabilities (SQL injection, CSRF, credential leaks) and performance flaws (N+1 queries).

## When applied
Applied prior to PR creation or during CI checks as a rapid security and quality gate.

## Sub-concepts
none

## Part of
drift-detection-via-static-analysis

## Implementation status
clean

## Design notes
A high-speed static analysis utility in rjm executing over 30 targeted checks to detect common security vulnerabilities and architectural defects before code review.
