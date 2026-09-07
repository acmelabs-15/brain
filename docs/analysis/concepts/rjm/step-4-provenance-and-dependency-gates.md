---
package: rjm
name: Step 4 provenance and dependency gates
slug: step-4-provenance-and-dependency-gates
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

# Step 4 provenance and dependency gates

## Definition — verbatim
> "#### Step 4 provenance and dependency gates" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 184 | defined here | Defines the sequence of gates bracketing buy-vs-build: ownership first via analysis-provenance, followed by dependency scrutiny via programming-advisor. |

## Consumes
Proposed component modifications, codebase search results, and external dependency proposals.

## Produces
Validated component ownership blocks, buy-vs-build verdicts, and dependency assessments carried into PRD artifacts.

## When applied
Executed during Step 4 before generating formal REQ/DESIGN/TASK artifacts.

## Sub-concepts
ownership-first, dependency-scrutiny, buy-vs-build-gate

## Part of
step-4

## Implementation status
defects: missing-path, doc-drift

## Design notes
A gated protocol that brackets buy-vs-build decisions by establishing component ownership before deciding whether to build or buy, and scrutinizing external library risks immediately after.
