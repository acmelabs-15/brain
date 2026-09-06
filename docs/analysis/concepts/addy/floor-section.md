---
package: addy
name: Floor section
slug: floor-section
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Floor section

## Definition — verbatim
> "at the repo root with a Floor section, enforced numbers, measured-only metrics with today's values, and an exceptions table with owners and expiry dates." — .gemini/commands/constraints.toml:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 18 | defined here | Specifies the Floor section as a required component of CONSTRAINTS.md. |

## Consumes
Five critical weakening moves (suppressions, skipped tests, disabled checks, stubs, reduced thresholds).

## Produces
A dedicated section in CONSTRAINTS.md defining non-negotiable floor rules.

## When applied
Drafted during constraint setup; checked by diff guards before commit and merge.

## Sub-concepts
none

## Part of
constraints-md

## Implementation status
clean

## Design notes
The foundational section of CONSTRAINTS.md that specifies baseline structural rules forbidding test deletions, suppression comments, and lowered thresholds.
