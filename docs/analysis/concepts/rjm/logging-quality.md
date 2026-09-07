---
package: rjm
name: Logging Quality
slug: logging-quality
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Logging Quality

## Definition — verbatim
> "**Logging Quality:**" — .claude/agents/silent-failure-hunter.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 47 | defined here | Review axis evaluating log severity, context, stable error IDs, and secrets omission. |
| templates/agents/silent-failure-hunter.shared.md | 57 | defined here | Shared template review axis defining logging quality criteria for error handlers. |

## Consumes
Error handling code blocks, logging statements, exception catch blocks.

## Produces
Audit feedback and diagnostic quality evaluations on logging severity, contextual IDs, and secrets prevention.

## When applied
Applied when scrutinizing each error handler during silent failure code review.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
Logging Quality is a specialized review checklist axis ensuring that errors are logged with severity matching production impact, sufficient contextual IDs and state, stable error identifiers, and strict exclusion of credentials or private user data.
