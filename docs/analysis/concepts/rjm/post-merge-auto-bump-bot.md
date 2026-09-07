---
package: rjm
name: Post-merge auto-bump bot
slug: post-merge-auto-bump-bot
kind: role
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-merge auto-bump bot

## Definition — verbatim
> "**Accept the post-merge auto-bump bot for `plugin.json` and the committed count baselines.**" — .agents/architecture/ADR-091-post-merge-version-bot.md:120

## Also called — verbatim
"Post-Merge Bot" — .agents/architecture/ADR-091-post-merge-version-bot.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 102 | used here | Rejected alternative due to introducing a torn-main window and complex branch-protection carve-outs. |
| .agents/architecture/ADR-091-post-merge-version-bot.md | 120 | defined here | Adopted as automated post-merge workflow bumping manifest versions and baseline counts directly on main. |

## Consumes
Pushes to the default branch (`main`) that modify packaged plugin sources or baseline counts.

## Produces
Automated commits directly onto `main` incrementing version counters or updating baselines.

## When applied
Triggered post-merge via GitHub Actions on push to `main`.

## Sub-concepts
none

## Part of
release-automation

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The post-merge auto-bump bot was conceived to eliminate pull request serialization and manual version conflict resolution by taking ownership of manifest versions post-merge. However, automated post-merge bumping introduced severe failure modes including torn `main` windows, ruleset permission blocks, and CI recursion loops, leading to its rapid decommissioning and replacement by version omission (ADR-092).
