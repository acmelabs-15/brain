---
package: rjm
name: Catch Block Specificity
slug: catch-block-specificity
kind: pattern
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

# Catch Block Specificity

## Definition — verbatim
> "**Catch Block Specificity:**" — .claude/agents/silent-failure-hunter.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 62 | defined here | Review axis verifying catch blocks handle only anticipated exception types. |
| templates/agents/silent-failure-hunter.shared.md | 72 | defined here | Shared template review axis defining catch block specificity requirements. |

## Consumes
Try-catch blocks, exception clauses, and error-handling code structures.

## Produces
Audit findings identifying broad exception handlers that accidentally swallow unrelated errors.

## When applied
Applied when reviewing catch blocks to determine whether multiple specific handlers are required instead of a generic catch-all.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
Catch Block Specificity is a core principle and review axis requiring exception handling to target only narrow, expected exception types, preventing broad catch-all blocks from accidentally suppressing unrelated runtime failures.
