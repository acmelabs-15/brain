---
package: rjm
name: No silent failures
slug: no-silent-failures
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# No silent failures

## Definition — verbatim
> "**No silent failures**: Every error path must either throw, log, or return explicit failure." — .claude/agents/implementer.md:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 233 | defined here | Core error handling rule requiring every error path to throw, log, or return explicit failure. |

## Consumes
Error handling blocks, try-catch statements, and conditional error branches.

## Produces
Explicit error notifications, logged diagnostics, or propagated exceptions on all failure paths.

## When applied
Across all exception handling logic, catch clauses, and failure conditions in implementation code.

## Sub-concepts
none

## Part of
code-quality-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
No silent failures eliminates swallowed exceptions and unrecorded errors in rjm. By requiring that every failure path either raises an exception, logs diagnostics, or returns an explicit result type, it guarantees full system observability and prevents masking latent bugs.
