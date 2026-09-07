---
package: rjm
name: narrative checklist
slug: narrative-checklist
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# narrative checklist

## Definition — verbatim
(used, not defined)

> "PR #1887 introduced a /pr-review completion gate as a narrative checklist:" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 24 | used here | Describes the legacy PR review gate pattern where agents asserted criteria completion via subjective prose |

## Consumes
PR review output and agent prose narrative.

## Produces
Self-asserted completion claims inline without automated tool verification.

## When applied
Legacy practice used in PR review before replacement by the automated completion gate dispatcher.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
Narrative checklist is an anti-pattern pattern in PR review where an agent asserts compliance criteria through unverified prose narrative rather than executable tool verification. In rjm's design evolution, it was explicitly replaced by the completion gate dispatcher to prevent false-positive PR approvals.
