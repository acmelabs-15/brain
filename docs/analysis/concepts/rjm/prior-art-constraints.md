---
package: rjm
name: Prior Art / Constraints
slug: prior-art-constraints
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

# Prior Art / Constraints

## Definition — verbatim
> "The gate emits a Markdown block embedded into the PRD as its first section, named `## Prior Art / Constraints`." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 100 | defined here | Defined as the resulting block from three layered skills that Step 6 carries into the PRD. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 5 | defined here | Specified with exact h2 heading requirements, required subsections, and PRD embedding rules. |

## Consumes
Memory point search results, chestertons-fence recommendations, and graph traversal entities.

## Produces
Formatted `## Prior Art / Constraints` section with subsections for direct prior art, connected context, and coverage notes.

## When applied
Formatted at Step 0.5 and inserted into the PRD at Step 6; checked by Step 9 check 9d.

## Sub-concepts
none

## Part of
prd, step-0-5

## Implementation status
defects: missing-path, doc-drift

## Design notes
The formal h2 section embedded into every PRD that documents prior art, historical rationale, and blast-radius entities, verified by downstream pre-mortem checks.
