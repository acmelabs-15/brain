---
package: rjm
name: TESTING-RIGOR.md
slug: testing-rigor-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TESTING-RIGOR.md

## Definition — verbatim
(used, not defined)

> "`TESTING-RIGOR.md` already requires positive, negative, and edge tests for new functions." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 24 | used here | Cites governance standard requiring positive, negative, and edge tests for new functions. |
| .claude/agents/qa.md | 81 | used here | Designated as the single source of truth for canonical test coverage tool invocations. |
| templates/agents/qa.shared.md | 71 | used here | Shared agent template citing governance standard for stack-specific coverage tool commands. |

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
defects: missing-path, doc-drift

## Design notes
A governance documentation file name referenced as the canonical authority for test coverage tool commands and testing rigor rules rather than an independent development lifecycle concept.
