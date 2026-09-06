---
package: matt
name: decision ticket
slug: decision-ticket
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# decision ticket

## Definition — verbatim
> "A `wayfinder` unit: a child **Issue** of a `wayfinder:map` holding a *question* whose resolution is a decision, not a slice of a build to execute." — CONTEXT.md:16

## Also called — verbatim
`ticket` — CONTEXT.md:13

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 82 | defined here | Introduces the term to distinguish wayfinder units from ordinary implementation tickets. |
| CONTEXT.md | 15 | defined here | Formally defines decision ticket in the repository's ubiquitous language glossary. |

## Consumes
An unexplored architectural or design question surfaced during wayfinder mapping.

## Produces
A resolution comment on the issue settling the question, followed by issue closure and map updates.

## When applied
During wayfinder charting and exploration workflows when mapping unresolved questions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other (in CONTEXT.md); missing-path, doc-drift (in CHANGELOG.md)

## Design notes
A decision ticket is a tracking issue whose deliverable is a decision resolving an open question rather than a slice of executable code, keeping architectural exploration structured and explicit before implementation begins.
