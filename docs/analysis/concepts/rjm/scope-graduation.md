---
package: rjm
name: scope graduation
slug: scope-graduation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# scope graduation

## Definition — verbatim
> "**scope graduation**, the normal RFC 2119 shape of a broad SHOULD tightening" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 115 | defined here | Concept defining the natural tightening of general recommendations (SHOULD) to strict mandates (MUST) in specific sub-paths. |

## Consumes
Broad guidance rules and specific sub-scope constraints.

## Produces
Validated RFC 2119 constraint hierarchy where narrower scopes impose stricter requirements without contradiction.

## When applied
Applied during conflict audits when analyzing apparent discrepancies in normative strength between general and specialized instructions.

## Sub-concepts
none

## Part of
conflict-audit, rule-audit-procedure

## Implementation status
clean

## Design notes
A normative design pattern in prompt instruction architecture where a broad recommendation (SHOULD) appropriately tightens into an absolute requirement (MUST) in specialized or higher-risk sub-paths, avoiding false-positive conflict classifications during audits.
