---
package: rjm
name: No rule
slug: no-rule
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# No rule

## Definition — verbatim
> "| No rule | Nygard never says" — .claude/skills/adr-generator/references/adr-best-practices.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 32 | defined here | Compared in ADR mutability table as the baseline school lacking explicit immutability rules. |

## Consumes
none

## Produces
Architectural records treated as freely mutable documents with updating revision dates.

## When applied
Evaluated during architectural governance setup when reviewing unconstrained decision authoring practices.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
An ADR mutability philosophy evaluated in rjm reflecting the informal practice of Nygard's original paper and MADR default usage. In this approach, no formal immutability rule is imposed: dates reflect the latest update and fields are editable without restriction, prioritizing document convenience over strict auditability.
