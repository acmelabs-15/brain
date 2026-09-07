---
package: rjm
name: backward compatibility
slug: backward-compatibility
kind: pattern
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

# backward compatibility

## Definition — verbatim
(used, not defined)

> "documented defaults, and backward compatibility (old readers must not break on new" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 33 | used here | Cited as requiring that old readers do not break on new fields and old logs continue to validate |

## Consumes
Prior schemas, existing reader implementations, historical data logs.

## Produces
Guarantees that newer schema changes do not break legacy data consumers.

## When applied
Applied whenever modifying data formats, session logs, or API payloads.

## Sub-concepts
none

## Part of
schema-evolution

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Backward compatibility ensures that existing data consumers and historical records remain fully operational when schemas evolve. In rjm, it guarantees that adding fields such as rework warning evidence to session logs does not invalidate existing session log archives or crash earlier versions of analysis and validation tooling.
