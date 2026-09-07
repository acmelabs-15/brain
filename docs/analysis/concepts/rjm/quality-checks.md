---
package: rjm
name: Quality Checks
slug: quality-checks
kind: phase
package_phase: rjm:session-end
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Checks

## Definition — verbatim
(used, not defined)

> "| End-2 | Quality Checks | REQUIRED | Lint passes |" — .agents/architecture/ADR-011-session-state-mcp.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 41 | used here | Listed as Phase End-2 in the session protocol phase table requiring linter execution. |

## Consumes
Updated files, documentation, and codebase changes from the current session.

## Produces
Validation evidence that code and documentation adhere to repository lint standards.

## When applied
Applied at session conclusion following documentation updates and prior to QA validation and git commit.

## Sub-concepts
markdownlint

## Part of
session-protocol

## Implementation status
not-implemented

## Design notes
Phase End-2 of the rjm session protocol that executes automated linters and code style checks (such as markdownlint) before code or docs are committed. It serves as an automated quality gate preventing formatting defects and syntax errors from entering the repository.
