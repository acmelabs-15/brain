---
package: rjm
name: Prose
slug: prose
kind: gate
package_phase: cross-phase
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

# Prose

## Definition — verbatim
(used, not defined)

> "| Prose                    | markdownlint, link checker, broken-anchor scan             |" — docs/design/external-signal-gating.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/design/external-signal-gating.md | 37 | used here | Quality gate in external signals table evaluated via markdownlint, link checkers, and broken-anchor scanners. |

## Consumes
Documentation files, markdown content, hyperlinks, and cross-reference anchors.

## Produces
Linter results and link verification reports identifying broken anchors or malformed markdown.

## When applied
Applied during pull request evaluation and documentation checks across all lifecycle phases.

## Sub-concepts
none

## Part of
external-signal-gating

## Implementation status
defects: missing-path

## Design notes
Prose is a quality gate in rjm's external-signal gating taxonomy that verifies written documentation and markdown files using deterministic tools (markdownlint, link checkers, and broken-anchor scanners), ensuring documentation health without subjective model drift.
