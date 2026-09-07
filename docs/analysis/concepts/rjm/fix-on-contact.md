---
package: rjm
name: Fix on contact
slug: fix-on-contact
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fix on contact

## Definition — verbatim
> "| A doc you touched is stale | Fix on contact (Phase 7) | Broken-windows rule |" — .claude/skills/ai-agents-docs-of-record/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 45 | defined here | Defined as the practice of immediately repairing stale documentation encountered while modifying code. |

## Consumes
Stale documentation, outdated comments, or drifted docstrings encountered during development.

## Produces
Updated, synchronized documentation committed alongside the primary code change.

## When applied
Applied whenever an agent or engineer touches or reads a document or comment that has drifted from current codebase reality.

## Sub-concepts
broken-windows-rule

## Part of
ai-agents-docs-of-record

## Implementation status
defects: missing-path, doc-drift

## Design notes
A maintenance policy enforcing prompt documentation hygiene. When an engineer or agent encounters a stale document, comment, or specification during a task, they are required to correct it immediately rather than deferring the cleanup to an unfiled future issue.
