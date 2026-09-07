---
package: rjm
name: Skill-PR-Review-002
slug: skill-pr-review-002
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill-PR-Review-002

## Definition — verbatim
(used, not defined)

> "Skill-PR-Review-002 | Reply AND resolve conversations properly" — .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 64 | used here | Retrospective violation entry identifying the PR review rule requiring replying to conversations before resolving them. |

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
defects: missing-path

## Design notes
`Skill-PR-Review-002` is an internal rule identifier from rjm's PR review skill memory requiring agents to reply substantively to review comments before resolving threads, classified as `kind: name-only` per D-023.
