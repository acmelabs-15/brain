---
package: rjm
name: Research/Investigation
slug: research-investigation
kind: pattern
package_phase: rjm:plan
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

# Research/Investigation

## Definition — verbatim
> "### Research/Investigation" — docs/task-classification-guide.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 76 | defined here | Task type category for exploratory research, root-cause investigations, and technology evaluations, routed to standalone analyst agents. |

## Consumes
Diagnostic questions, unexpected runtime behaviors, library evaluations, or technical discovery prompts.

## Produces
Investigative analysis reports, evidence-backed findings, and root-cause explanations without code modifications.

## When applied
When tasks seek to understand how or why systems behave in specific ways without immediately committing to code changes.

## Sub-concepts
none

## Part of
task-type

## Implementation status
clean

## Design notes
An investigative task category in rjm establishing that research and problem diagnosis can proceed as lightweight standalone analysis before triggering heavier implementation and review pipelines.
