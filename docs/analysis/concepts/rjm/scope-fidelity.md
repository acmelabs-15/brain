---
package: rjm
name: Scope Fidelity
slug: scope-fidelity
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope Fidelity

## Definition — verbatim
> "### 3. Scope Fidelity" — .claude/skills/review/references/spec-compliance.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 78 | defined here | Analysis focus area 3 verifying that the diff delivers the exact slice described by the spec, flagging under-delivery and over-delivery. |

## Consumes
Linked spec scope boundaries and pull request diff changesets.

## Produces
Findings flagging missing requirements (under-delivery) or unrequested behavior changes that risk specification intent (over-delivery).

## When applied
Executed during Stage-1 spec compliance review to ensure pull requests maintain precise alignment with task boundaries.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: internal-contradiction

## Design notes
Scope Fidelity is an analytical technique and focus area in rjm's spec-compliance review that prevents scope creep and partial delivery by verifying that code changes deliver the exact bounded slice requested.
