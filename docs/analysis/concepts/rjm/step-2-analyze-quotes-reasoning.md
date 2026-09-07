---
package: rjm
name: Step 2 - Analyze quotes (reasoning)
slug: step-2-analyze-quotes-reasoning
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 2 - Analyze quotes (reasoning)

## Definition — verbatim
> "**Step 2 - Analyze quotes (reasoning):**" — .claude/skills/research-and-incorporate/references/workflow.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 69 | defines | Second stage of two-step analysis evaluating principles, frameworks, and examples based solely on extracted quotes. |

## Consumes
Verbatim quotes extracted during Step 1.

## Produces
Identified principles, models, examples, and relationships.

## When applied
Executed after completing Step 1 quote extraction.

## Sub-concepts
none

## Part of
two-step-analysis

## Implementation status
defects: doc-drift

## Design notes
The second stage of two-step analysis where conclusions, principles, and models are derived strictly from the verbatim quotes extracted in Step 1.
