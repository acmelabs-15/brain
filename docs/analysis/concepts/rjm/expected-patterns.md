---
package: rjm
name: Expected Patterns
slug: expected-patterns
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Expected Patterns

## Definition — verbatim
> "Document acceptable patterns that should NOT trigger warnings" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 21 | defined here | Defined as an applied prompt pattern establishing acceptable implementation patterns to eliminate false warnings. |
| .claude/skills/review/references/devops.md | 60 | defined here | Enumerates standard DevOps patterns (ubuntu-latest, empty permissions, unpinned small jobs) that must not trigger review warnings. |
| .claude/skills/review/references/qa.md | 65 | defined here | Details normal code patterns (generated files, test files, type definitions, vendor files) that do not require tests. |

## Consumes
Pull request diffs, code constructs, and workflow definitions.

## Produces
False-positive suppression and exemptions for benign, standard architectural patterns.

## When applied
Consulted during automated or agent-driven code, QA, and DevOps reviews when evaluating potential issues.

## Sub-concepts
none

## Part of
review-guidelines

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/review/references/devops.md and references/qa.md

## Design notes
`Expected Patterns` prevents reviewer noise and alert fatigue by explicitly documenting acceptable architectural edge cases (such as generated code, test files, and benign workflow structures) that automated reviewers should recognize as valid.
