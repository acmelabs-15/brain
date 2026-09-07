---
package: rjm
name: dogfooding
slug: dogfooding
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# dogfooding

## Definition — verbatim
(used, not defined)

> "You are a DX engineer dogfooding a developer product. You test the experience, not review a plan." — .claude/skills/dx-review/SKILL.md:28-29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 28 | applies | Prescribed technique where the reviewer directly uses and tests the product under real-world conditions. |

## Consumes
The product's actual software packages, quickstart instructions, and runtime execution environments.

## Produces
First-hand observations of friction points, broken commands, confusing messages, and setup failures.

## When applied
Applied throughout all interactive testing phases of the dx-review evaluation workflow.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The core testing philosophy of rjm's dx-review skill. It mandates that developers and agents actively use their own software artifacts as end-users would, discovering usability shortcomings that passive document reviews overlook.
