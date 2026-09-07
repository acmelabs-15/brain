---
package: rjm
name: session log schema
slug: session-log-schema
kind: name-only
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

# session log schema

## Definition — verbatim
(used, not defined)

> "The session log schema is governed by ADR-014 (read-only contract on HANDOFF.md)" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 30 | used here | Reference to the JSON schema governing session log structure, backward compatibility, and additive field evolution |

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
defects: missing-path, doc-drift, internal-contradiction

## Design notes
session log schema is a JSON structure definition governing session audit logs rather than an architectural lifecycle concept.
