---
package: rjm
name: Rename, never content-merge
slug: rename-never-content-merge
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
  - {path: .claude/skills/merge-resolver/references/strategies.md, sha256: 27835b54b377f6fa64b4d76ef60eb12370d0c95c40c9a7c39924ed7dc7a4b008}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rename, never content-merge

## Definition — verbatim
> "**Rename, never content-merge.** Keep both files: accept the base branch version at the original name, rename the head branch version with a distinguishing suffix, and update any index or report that references the renamed file. Never merge the two contents into one file." — .claude/skills/merge-resolver/references/strategies.md:277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 105 | defined here | Subsection heading defining the immutable artifact handling rule for add/add collisions. |
| .claude/skills/merge-resolver/references/strategies.md | 277 | defined here | Core rule definition prohibiting content-merging of session logs, QA reports, and retrospectives. |
| .claude/skills/merge-resolver/SKILL.md | 120 | defined here | Mandatory instruction in skill documentation enforcing suffix renaming over content merging. |

## Consumes
Add/add collisions on append-only evidence artifacts (session logs, QA reports, retrospective documents).

## Produces
Preserved base branch artifact at original name, head branch artifact renamed with topic/issue suffix, and updated pointer references.

## When applied
Triggered whenever two branches add distinct records under the same filename (e.g. duplicate session log numbers).

## Sub-concepts
none

## Part of
conflict-classification

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A critical audit integrity rule established following PR #4856 (`2026-08-10-pr-4856-session-log-collision.md`). When two branches generate evidence files with the same name, merging their prose into one file destroys two true records to fabricate a false one. Instead, the rule requires keeping both files intact: retaining base branch version under original name and renaming incoming version with an informative suffix.
