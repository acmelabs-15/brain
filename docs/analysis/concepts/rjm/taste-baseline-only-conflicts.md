---
package: rjm
name: taste-baseline-only conflicts
slug: taste-baseline-only-conflicts
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# taste-baseline-only conflicts

## Definition — verbatim
> "shows the current count is **11 manifest-only conflicts** and **2 taste-baseline-only conflicts** out of 24 DIRTY PRs total" — .agents/architecture/ADR-091-post-merge-version-bot.md:20

## Also called — verbatim
> "Taste-baseline-only" — .agents/architecture/ADR-091-post-merge-version-bot.md:33

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 20 | defines | Identifies empirical merge conflict class where PR branches conflict solely on committed quality baseline counts in taste_count_baseline.txt. |

## Consumes
Multiple concurrent PRs that each ratchet down the taste lint violation counter.

## Produces
Git merge conflicts localized exclusively to `scripts/ci/taste_count_baseline.txt`.

## When applied
Observed during multi-PR merge triage when quality improvements conflict on the baseline counter.

## Sub-concepts
none

## Part of
measured-conflict-classes

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Merge conflict pattern where independent pull requests improving code quality block each other from merging because both update the same committed baseline count file. ADR-091 proposed automating baseline ratcheting post-merge to eliminate this friction.
