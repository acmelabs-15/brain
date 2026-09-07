---
package: rjm
name: Connected context from exploring-knowledge-graph
slug: connected-context-from-exploring-knowledge-graph
kind: artifact
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

# Connected context from exploring-knowledge-graph

## Definition — verbatim
> "### Connected context from exploring-knowledge-graph" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 16 | defined here | Defined as the second mandatory subsection of the Prior Art / Constraints block in the PRD, recording connected entities, linked projects, and blast-radius adjudications. |

## Consumes
Knowledge graph traversal results from exploring-knowledge-graph, entity relationships, and linked project metadata.

## Produces
Structured subsection in PriorArtBlock classifying connected entities as in-scope, out-of-scope, or blast-radius.

## When applied
Populated during Step 0.5 Memory-First Gate traversal and embedded into the PRD at Step 6.

## Sub-concepts
none

## Part of
prior-art-constraints, priorartblock

## Implementation status
defects: missing-path, doc-drift

## Design notes
A required subsection in the PRD's Prior Art / Constraints block that documents relational context and entity blast-radius discovered via graph traversal, ensuring dependencies and ripple effects are acknowledged early.
