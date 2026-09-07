---
package: rjm
name: Scoped Command Pattern
slug: scoped-command-pattern
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scoped Command Pattern

## Definition — verbatim
> "Replace repository-wide tool invocations with git-scoped patterns:" — .agents/architecture/ADR-043-scoped-tool-execution.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 43 | defined here | Pattern replacing repo-wide commands with git diff piping into tool invocations. |

## Consumes
git diff commands filtering by file extension and change status.

## Produces
Deterministic shell commands passing only changed files to tools via xargs or flags.

## When applied
Invoked by agents executing markdownlint, prettier, or other formatters in session protocol.

## Sub-concepts
no-globs

## Part of
scoped-tool-execution

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Scoped Command Pattern standardizes how shell commands dynamically filter target files using git diff pipelines, ensuring linters process only changed files.
