---
package: rjm
name: Remove
slug: remove
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Remove

## Definition — verbatim
> "- **Remove**: the comment restates the code without adding information, references a state that no longer exists, or repeats a name that the function already carries." — .claude/agents/comment-analyzer.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/comment-analyzer.md | 40 | defines | Specification of the triage bucket for redundant, obsolete, or low-value comments. |
| templates/agents/comment-analyzer.shared.md | 51 | defines | Shared template definition of the Remove triage category for non-informative comments. |

## Consumes
Redundant, restating, or obsolete comments.

## Produces
Recommendation to delete the comment.

## When applied
When a comment provides no information beyond what the code conveys or refers to obsolete states.

## Sub-concepts
none

## Part of
triage-categories

## Implementation status
defects: doc-drift

## Design notes
A comment triage category targeting non-informative, redundant, or obsolete comments for removal to reduce visual noise and documentation debt.
