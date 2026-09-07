---
package: rjm
name: Runner Selection Policy
slug: runner-selection-policy
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Runner Selection Policy

## Definition — verbatim
(used, not defined)

> "### Runner Selection Policy" — .agents/architecture/ADR-024-github-actions-runner-selection.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 82 | defined here | Heading establishing default ARM selection, Windows exceptions, and required compliance comments. |

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
A structural subsection heading in ADR-024 defining CI/CD runner selection rules, functioning as a document organizer rather than an agent lifecycle concept.
