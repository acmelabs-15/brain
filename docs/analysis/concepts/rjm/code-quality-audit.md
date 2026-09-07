---
package: rjm
name: Code Quality Audit
slug: code-quality-audit
kind: technique
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

# Code Quality Audit

## Definition — verbatim
(used, not defined)

> "Code Quality Audit (Security Perspective)" — .claude/agents/security.md:333

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 333 | defined here | Capability auditing code quality from a security perspective, flagging oversized files, complex functions, and coupling. |
| templates/agents/security.shared.md | 304 | defined here | Shared template specification for auditing code quality and module boundaries from a security perspective. |

## Consumes
Source files and architectural module boundaries.

## Produces
Identification of oversized files (>500 lines), complex functions, and boundary violations increasing security audit burden.

## When applied
During security agent code review and post-implementation verification.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
A code quality evaluation performed specifically through a security lens, focusing on structural risk factors such as oversized files (>500 lines) and overly complex functions that hinder security auditing and increase bug density.
