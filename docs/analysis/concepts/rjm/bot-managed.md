---
package: rjm
name: bot_managed
slug: bot-managed
kind: name-only
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

# bot_managed

## Definition — verbatim
(used, not defined)

> "this ADR marked both manifests `bot_managed`, so a manual bump failed a required check" — .agents/architecture/ADR-091-post-merge-version-bot.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 16 | used here | Configuration attribute marking plugin manifests as managed exclusively by automation, blocking manual version modifications. |

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
defects: missing-path, internal-contradiction

## Design notes
Manifest configuration property and gate check label indicating that version numbers are managed by CI automation rather than an independent lifecycle concept.
