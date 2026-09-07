---
package: rjm
name: vendored-hook ROI review
slug: vendored-hook-roi-review
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vendored-hook ROI review

## Definition — verbatim
(used, not defined)

> "Driven by issue #3295 (dead-hook purge) and issue #3197 (vendored-hook ROI review)." — .agents/architecture/ADR-041-codeql-integration.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 23 | used here | Cited as the governing review behind the amendment retiring Tier 3 CodeQL scanning. |
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 17 | used here | Cited as the context for establishing ROI bars for vendored hooks. |
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 18 | used here | Cited in context for addressing cross-harness permission surface asymmetry. |

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
defects: doc-drift, missing-path

## Design notes
A governance initiative title tracking issue #3197 to assess the maintenance cost and performance value of vendored hooks, classified as name-only per D-023.
