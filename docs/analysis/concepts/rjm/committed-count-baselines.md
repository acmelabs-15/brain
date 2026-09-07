---
package: rjm
name: committed count baselines
slug: committed-count-baselines
kind: artifact
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

# committed count baselines

## Definition — verbatim
> "**Accept the post-merge auto-bump bot for `plugin.json` and the committed count baselines.**" — .agents/architecture/ADR-091-post-merge-version-bot.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 120 | defines | Architectural decision managing committed baseline files (taste_count_baseline.txt and ruff_count_baseline.txt) via post-merge automation. |

## Consumes
Linter output metrics measuring taste and ruff violations.

## Produces
Tracked text files recording violation thresholds in git.

## When applied
Enforced on all PR builds and ratcheted down when code quality improves.

## Sub-concepts
committed-baseline

## Part of
ci-ratchets

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Version-controlled baseline files storing upper bounds on acceptable lint defects, ensuring that existing debt can be tolerated while strictly forbidding new regressions.
