---
package: rjm
name: Data Transfer Objects
slug: data-transfer-objects
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Data Transfer Objects

## Definition — verbatim
> "Data Transfer Objects (DTOs): pure data containers" — .claude/skills/analyze/references/design-tell-dont-ask.md:75

## Also called — verbatim
"DTOs" — .claude/skills/analyze/references/design-tell-dont-ask.md:75

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 75 | defined here | Cited as an explicit exception to Tell Don't Ask since DTOs are pure data containers. |

## Consumes
Serialization schemas, remote API contracts, cross-boundary data representations.

## Produces
Stateless data container structures carrying payload data across process boundaries.

## When applied
Excluded from Tell Don't Ask encapsulation enforcement when crossing service or module boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
In rjm's design guidelines, Data Transfer Objects (DTOs) represent pure data containers without domain behavior. The framework explicitly identifies DTOs as a legitimate boundary exception where the Tell Don't Ask principle does not apply.
