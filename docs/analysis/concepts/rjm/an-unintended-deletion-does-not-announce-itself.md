---
package: rjm
name: An unintended deletion does not announce itself
slug: an-unintended-deletion-does-not-announce-itself
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# An unintended deletion does not announce itself

## Definition — verbatim
> "## An unintended deletion does not announce itself" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 65 | defined here | Section heading and principle governing the detection of silent deletions in automated refactoring. |

## Consumes
Refactored code files, git diffs, AST structures.

## Produces
Structural verification invariants and deletion audit checks that catch lost code constructs.

## When applied
Applied during text edits, refactorings, and multi-file find-and-replace transformations.

## Sub-concepts
portability-gate

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
A code integrity principle emphasizing that automated find-and-replace operations can silently strip structural boundaries (such as function definitions or metadata markers) without failing basic diff checks.
