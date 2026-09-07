---
package: rjm
name: Step 0.5 halt criteria
slug: step-0-5-halt-criteria
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 0.5 halt criteria

## Definition — verbatim
> "#### Step 0.5 halt criteria" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 30 | defined here | Defines the blocking criteria H6-H11 evaluated before PriorArtBlock emission, halting the /spec pipeline if triggered. |

## Consumes
Proposed spec changes, prior art search results, and blast-radius entity counts.

## Produces
Gate pass decision to proceed to Step 1 or blocking halt emitting a `step0_5-halt` block.

## When applied
Evaluated before PriorArtBlock is emitted to the PRD in Step 0.5 of the /spec pipeline.

## Sub-concepts
step-0-5-halt-block-format

## Part of
step-0-5

## Implementation status
defects: missing-path, doc-drift

## Design notes
Defines the blocking trigger rules (H6-H11) that halt the specification process when high-risk operations—such as removing ADR constraints, bypassing protocols, large deletions, or excessive blast radius—are attempted without verified memory hits.
