---
package: rjm
name: Task Type
slug: task-type
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task Type

## Definition — verbatim
> "1. **Task Type**: What kind of work is this?" — docs/task-classification-guide.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 11 | defined here | Defined as the first classification dimension identifying the functional domain of the task across 9 standard categories. |

## Consumes
Incoming prompts, issue descriptions, codebase diffs, and developer change requests.

## Produces
Assignment of a task to one of 9 functional categories and selection of the base agent pipeline.

## When applied
During the initial triage stage when categorizing the functional nature of requested engineering work.

## Sub-concepts
bug-fix, infrastructure, strategic-planning, research-investigation, ideation

## Part of
classification-dimensions

## Implementation status
clean

## Design notes
The primary functional dimension in rjm's routing taxonomy, mapping task intent to predefined agent sequences tailored to specific domains like bug fixing, infrastructure updates, or strategic planning.
