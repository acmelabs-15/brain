---
package: rjm
name: Agent Templates
slug: agent-templates
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Templates

## Definition — verbatim
(used, not defined)

> "| **Agent Templates** | 18 | 0 | 0 | 18 | 0% | 0% | 100% |" — .agents/analysis/adr-045-inventory-audit.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 17 | used here | Row heading in audit summary table categorizing 18 shared agent markdown template files. |

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
defects: internal-contradiction, missing-path

## Design notes
Audit category table heading grouping shared agent definition files under evaluation, not an independent lifecycle concept.
