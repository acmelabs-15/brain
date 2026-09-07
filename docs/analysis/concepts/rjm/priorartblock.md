---
package: rjm
name: PriorArtBlock
slug: priorartblock
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PriorArtBlock

## Definition — verbatim
> "#### Step 0.5 PriorArtBlock output schema" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 110 | used here | Cited in trigger H10 rules requiring prior-art citations when changing shared infrastructure. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 1 | defined here | Heading defining the formal output schema and structure for Step 0.5. |

## Consumes
Direct prior art, graph exploration results, and coverage notes.

## Produces
Structured markdown block formatted according to the schema specifications.

## When applied
Generated during Step 0.5 execution and validated in Step 9.

## Sub-concepts
prior-art-constraints

## Part of
step-0-5, prd

## Implementation status
defects: missing-path, doc-drift

## Design notes
The formal camel-case schema identifier for the Step 0.5 Prior Art block documenting required fields, subsections, and formatting rules.
