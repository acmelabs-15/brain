---
package: rjm
name: Update
slug: update
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

# Update

## Definition — verbatim
> "- **Update**: the comment mismatches the current code at the cited file:line. State the mismatch verbatim. Propose the minimum edit." — .claude/agents/comment-analyzer.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/comment-analyzer.md | 39 | defines | Specification of the triage bucket for comments drifting from code, requiring minimal corrective edits. |
| templates/agents/comment-analyzer.shared.md | 50 | defines | Shared template definition of the Update triage category and mismatch reporting requirements. |

## Consumes
Outdated or drifting comments whose description conflicts with code state.

## Produces
Finding citing verbatim mismatch and specifying the minimal corrective edit.

## When applied
When an informative comment no longer matches code reality due to implementation changes.

## Sub-concepts
none

## Part of
triage-categories

## Implementation status
defects: doc-drift

## Design notes
A comment triage category identifying drifted comments and prescribing the minimal edit required to restore factual alignment with the code.
