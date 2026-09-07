---
package: rjm
name: Direct prior art from memory
slug: direct-prior-art-from-memory
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

# Direct prior art from memory

## Definition — verbatim
> "### Direct prior art from memory" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 10 | defined here | Defined as the first mandatory subsection of the Prior Art / Constraints block in the PRD, recording ADRs, episodes, and chestertons-fence recommendations. |

## Consumes
Memory point search results, historical ADRs, session episodes, and chestertons-fence recommendations.

## Produces
Structured subsection of PriorArtBlock summarizing relevant historical decisions and whether to honor, adapt, or propose amending them.

## When applied
Populated during Step 0.5 Memory-First Gate and embedded into the PRD at Step 6.

## Sub-concepts
adr, chestertons-fence

## Part of
prior-art-constraints, priorartblock

## Implementation status
defects: missing-path, doc-drift

## Design notes
One of the three required subsections of the Prior Art / Constraints block in rjm PRDs, ensuring explicit examination of past decisions and lessons learned before designing new specifications.
