---
package: rjm
name: DDIA rule
slug: ddia-rule
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DDIA rule

## Definition — verbatim
(used, not defined)

> "- DDIA rule: the new field is additive, optional, and carries no schema version" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 91 | used here | Cited as the architectural rule establishing that additive optional fields require no schema version bump |

## Consumes
Data-intensive application principles from Martin Kleppmann's DDIA book.

## Produces
Schema design guidelines mandating additive optional fields and backward/forward compatibility.

## When applied
Applied when designing and modifying persistent schemas, session logs, and message formats.

## Sub-concepts
schema-evolution, backward-compatibility

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The DDIA rule in rjm encapsulates architectural guidance derived from Martin Kleppmann's Designing Data-Intensive Applications. It establishes that all schema modifications to session logs and communication structures must be additive and optional, ensuring that unupgraded validators and readers do not fail when encountering new fields.
