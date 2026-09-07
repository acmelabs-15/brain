---
package: rjm
name: Classification Dimensions
slug: classification-dimensions
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

# Classification Dimensions

## Definition — verbatim
> "Every task is classified across three dimensions: 1. **Task Type**: What kind of work is this? 2. **Complexity Level**: How many steps/domains are involved? 3. **Risk Level**: What's the potential impact of errors?" — docs/task-classification-guide.md:9-13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 7 | defined here | Framework defining the three orthogonal axes used to categorize incoming work for agent routing. |

## Consumes
Software engineering task requests, affected codebase components, and defect descriptions.

## Produces
Three-dimensional classification vectors that dictate agent sequence selection and validation requirements.

## When applied
At the start of task ingestion before determining whether single-agent execution or multi-agent orchestration is needed.

## Sub-concepts
task-type, complexity-level

## Part of
task-classification-guide

## Implementation status
clean

## Design notes
The multi-dimensional classification schema in rjm that prevents one-size-fits-all agent routing by evaluating work across orthogonal axes of functional domain, structural complexity, and operational risk.
