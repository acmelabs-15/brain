---
package: rjm
name: entity adjudication
slug: entity-adjudication
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# entity adjudication

## Definition — verbatim
> "#### Step 0.5 entity adjudication" — .claude/commands/spec.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/spec.md | 112 | defined here | Step 0.5 classification triage categorizing discovered graph entities as in-scope, out-of-scope, or blast-radius. |

## Consumes
Entities and project names discovered during knowledge graph traversal that were not in Step 0 inputs.

## Produces
Adjudication records categorizing each discovered entity with an associated rationale and risk note.

## When applied
Applied during Step 0.5 of `/spec` whenever knowledge graph exploration discovers unreferenced system components.

## Sub-concepts
none

## Part of
spec

## Implementation status
defects: doc-drift

## Design notes
Entity adjudication prevents uncontrolled scope creep and unnoticed blast-radius expansion during specification generation. When automated graph exploration surfaces components related to the proposed change, this process forces explicit categorization into `in-scope`, `out-of-scope`, or `blast-radius`, ensuring architectural dependencies are managed intentionally.
