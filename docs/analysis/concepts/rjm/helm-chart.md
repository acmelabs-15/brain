---
package: rjm
name: Helm chart
slug: helm-chart
kind: reference
package_phase: none
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

# Helm chart

## Definition — verbatim
(used, not defined)

> "- **Helm chart `Chart.yaml` version**: typically auto-bumped by CI on merge to release" — .agents/architecture/ADR-091-post-merge-version-bot.md:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 211 | used here | Industry packaging pattern cited as prior art for CI-driven post-merge version bumping. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
External packaging pattern reference cited in ADR-091 demonstrating established industry practice of automating version bumps on merge to release branches.
