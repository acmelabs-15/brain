---
package: rjm
name: GitHub Models
slug: github-models
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub Models

## Definition — verbatim
(used, not defined)

> "Anthropic remained rate-capped, so the run routed through GitHub Models" — .agents/architecture/ADR-087-held-out-validated-improvement.md:805

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 805 | used here | Used as the alternative model provider during live rule-path validation when Anthropic was rate-capped. |

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
clean (citing inventory card records defects: missing-path, doc-drift, internal-contradiction)

## Design notes
GitHub Models is an external cloud AI model hosting service used as a secondary inference provider for LLM evaluation runs; it is an external service platform rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
