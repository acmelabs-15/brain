---
package: rjm
name: fitness guide
slug: fitness-guide
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fitness guide

## Definition — verbatim
> "This is a fitness guide. It maps task shapes to the lifecycle commands" — docs/when-to-use.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 3 | defined here | Characterizes the document's role in mapping task shapes to lifecycle phases. |

## Consumes
Task descriptions, risk factors, and development requests.

## Produces
Calibrated selection of lifecycle commands to execute for a given task.

## When applied
Consulted before task routing and execution to determine which lifecycle phases are necessary.

## Sub-concepts
task-shapes, fitness-table

## Part of
none

## Implementation status
clean

## Design notes
A meta-governance reference in rjm that prevents process overhead by guiding engineers and agents to execute only the lifecycle phases that add value for a specific task shape.
