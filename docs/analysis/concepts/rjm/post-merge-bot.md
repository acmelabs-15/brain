---
package: rjm
name: Post-Merge Bot
slug: post-merge-bot
kind: role
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

# Post-Merge Bot

## Definition — verbatim
> "# ADR-091: Post-Merge Bot Owns Plugin Version and Count Baselines" — .agents/architecture/ADR-091-post-merge-version-bot.md:12

## Also called — verbatim
> "post-merge auto-bump bot" — .agents/architecture/ADR-091-post-merge-version-bot.md:120

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 12 | defines | Architectural decision assigning exclusive ownership of plugin manifest versions and quality baselines to an automated post-merge GitHub Actions workflow. |

## Consumes
Push events to main branch modifying plugin contents under `.claude/` or `src/copilot-cli/` or improving quality baselines.

## Produces
Automated atomic commits to main incrementing patch versions in parity manifests and ratcheting down quality count baselines with `[skip ci]`.

## When applied
Triggered automatically upon merge/push to main when plugin contents or count baselines have changed.

## Sub-concepts
committed-count-baselines, no-manual-bump-enforcement

## Part of
ci-automation

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Automated maintenance role introduced in ADR-091 to take ownership of scalar counter increments off developer pull requests, eliminating O(N^2) merge conflict serialization across open PRs. Although superseded by ADR-092 due to GitHub Actions bot permissions and torn-main CI bypass failure modes, the concept represents a key architectural attempt to decouple contributor workflows from centralized counter ownership.
