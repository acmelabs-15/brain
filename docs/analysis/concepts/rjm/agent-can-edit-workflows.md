---
package: rjm
name: agent-can-edit-workflows
slug: agent-can-edit-workflows
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent-can-edit-workflows

## Definition — verbatim
(used, not defined)

> "`agent-can-edit-workflows` is not on issue #1855. Per the repo's bot safety" — docs/design/external-signal-gating.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/design/external-signal-gating.md | 81 | used here | GitHub label cited as the bot safety guardrail controlling whether automated agents can modify workflows. |

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
A GitHub issue and PR label governing bot authorization to edit workflow files rather than an operational lifecycle concept.
