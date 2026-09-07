---
package: rjm
name: Data Store
slug: data-store
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Data Store

## Definition — verbatim
(used, not defined)

> "| C004 | Database | Data Store | PostgreSQL database | DBA Team |" — .claude/skills/threat-modeling/templates/threat-model-template.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 69 | used here | Component classification type identifying persistent storage resources such as relational databases. |

## Consumes
Database instances, disk volumes, object storage buckets, and persistent memory caches.

## Produces
Cataloged storage component entry in threat model component tables subject to tampering, disclosure, and DoS threats.

## When applied
Applied when populating component inventory tables during architectural threat decomposition.

## Sub-concepts
none

## Part of
threat-model-template

## Implementation status
clean

## Design notes
`Data Store` is a component inventory classification in `rjm` designating systems responsible for data persistence, directing threat analysis toward storage encryption, access controls, and backup integrity.
