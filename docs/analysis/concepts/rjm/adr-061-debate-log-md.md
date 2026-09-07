---
package: rjm
name: ADR-061-debate-log.md
slug: adr-061-debate-log-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-061-debate-log.md

## Definition — verbatim
(used, not defined)

> "The debate log at `.agents/critique/ADR-061-debate-log.md` records the full positions." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 44 | used here | Cited as the persisted critique document recording the full 6-agent debate positions |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
ADR-061-debate-log.md is the filename of the critique log documenting the 6-agent review debate on ADR-061, classified as name-only per D-023.
