---
package: rjm
name: Spec Linkage
slug: spec-linkage
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

# Spec Linkage

## Definition — verbatim
> "### 1. Spec Linkage" — .claude/skills/review/references/spec-compliance.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 65 | defined here | Analysis focus area 1 verifying linkage from PR body, commit trailer, or staged files to a spec artifact. |

## Consumes
PR description, git commit trailers, staged files, or issue text.

## Produces
Identification and citation of the linked specification document (`REQ-*`, `DESIGN-*`, `TASK-*`) or an `UNKNOWN` verdict if unlinked.

## When applied
Applied at the beginning of Stage-1 spec compliance evaluation to establish the authoritative requirements contract.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: internal-contradiction

## Design notes
Spec Linkage is the foundational analysis focus area of rjm's spec-compliance review, requiring explicit citation of the governing requirement, design, or task artifact before grading pull request changes.
