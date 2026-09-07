---
package: rjm
name: matcher_pattern
slug: matcher-pattern
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

# matcher_pattern

## Definition — verbatim
(used, not defined)

> "mandates that each `(hook_event, matcher_pattern)` pair in `.claude/settings.json`" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 67 | used here | Identifier for the tool matcher pattern filter in Claude settings configuration |

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
matcher_pattern is a configuration property and variable identifier representing tool matching patterns in hook configurations, classified as name-only per D-023.
