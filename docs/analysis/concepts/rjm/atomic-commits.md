---
package: rjm
name: Atomic Commits
slug: atomic-commits
kind: technique
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Atomic Commits

## Definition — verbatim
> "Implements changes in thin vertical slices with TDD and atomic commits." — docs/workflow-commands.md:92

## Also called — verbatim
Commit Discipline: Atomic Commits — .agents/analysis/002-project-constraints-consolidation.md:308

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 308 | used here | Defined as a SHOULD constraint requiring one logical change per commit and a maximum of 5 files. |
| .claude/commands/build.md | 2 | used here | Included in slash command description requiring incremental implementation with TDD and atomic commits. |
| docs/workflow-commands.md | 92 | defined here | Documented in command reference as the core execution discipline for the /build workflow. |

## Consumes
Decomposed task plan slices and verified test passes.

## Produces
Discrete, reversible git commits containing a single logical change.

## When applied
Applied continuously during the /build phase after each successful test-driven vertical slice.

## Sub-concepts
commit-msg-hook

## Part of
dev-lifecycle

## Implementation status
defects: doc-drift, missing-path

## Design notes
Atomic Commits is a disciplined development technique restricting each git commit to a single logical modification, bounded by a small file count (maximum 5 files) or focused subject. In rjm, atomic commits prevent tangled PR diffs, simplify code review, ensure clean rollbacks, and enable effective git bisect debugging.
