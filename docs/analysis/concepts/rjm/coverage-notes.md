---
package: rjm
name: Coverage notes
slug: coverage-notes
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

# Coverage notes

## Definition — verbatim
> "### Coverage notes" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 22 | defined here | Defined as the third mandatory subsection of the Prior Art / Constraints block, recording search queries, result counts, confidence levels, and degradation notes. |

## Consumes
Search variant history, query result counts, and skill/MCP availability status.

## Produces
Audit notes documenting query coverage, confidence ratings (high/low), and environmental degradation justifications.

## When applied
Written during Step 0.5 Memory-First Gate and embedded into the PRD at Step 6; validated by Step 9 check 9d.

## Sub-concepts
none

## Part of
prior-art-constraints, priorartblock

## Implementation status
defects: missing-path, doc-drift

## Design notes
A mandatory audit subsection in the Prior Art / Constraints block that explicitly records the search thoroughness and confidence level, preventing silent empty searches from being mistaken for absence of constraints.
