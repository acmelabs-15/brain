---
package: rjm
name: First Principles Gate
slug: first-principles-gate
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# First Principles Gate

## Definition — verbatim
> "### Step 0: First Principles Gate (blocking, runs before Step 1)" — .claude/commands/spec.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 25 | used here | Contrasted with Step 0.5 as the forward-looking demand validation gate running prior to Step 1. |
| .claude/commands/spec.md | 16 | defined here | Defined as the mandatory blocking initial step in the spec pipeline that forces six questions upfront. |

## Consumes
Problem statement or issue input provided to `/spec`.

## Produces
`## Step 0 First Principles` block containing answers to Q1 through Q6, or a `step0-halt` block on failure.

## When applied
At the very beginning of the `/spec` command pipeline before Step 1 clarification work begins.

## Sub-concepts
step-0, step0-halt, step-0-metrics-md

## Part of
rjm:spec

## Implementation status
defects: doc-drift (docs/workflow-commands.md omits Step 0)

## Design notes
A mandatory blocking gate in `/spec` that forces authors to answer six forcing questions proving real user demand and specificity upfront, halting projects before expensive clarification or implementation begins.
