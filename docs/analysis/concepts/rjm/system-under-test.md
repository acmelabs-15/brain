---
package: rjm
name: System Under Test
slug: system-under-test
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/templates/experiment-template.md, sha256: 78330ff18cbd4a561b86cf638bfd91ee3fc83ffa3328d20379fb14fcb3341377}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# System Under Test

## Definition — verbatim
(used, not defined)

> "## System Under Test" — .claude/skills/chaos-experiment/templates/experiment-template.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/templates/experiment-template.md | 13 | defined here | Markdown section heading cataloging target service name, environment, zone, and instance count. |

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
clean

## Design notes
`System Under Test` is a markdown section header in `experiment-template.md` designated for recording target system boundaries and architecture context, classified as `name-only` per D-023.
