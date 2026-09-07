---
package: rjm
name: PR Type Detection
slug: pr-type-detection
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR Type Detection

## Definition — verbatim
> "Categorize PRs before evaluation (DOCS, CODE, WORKFLOW, CONFIG, MIXED)" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 20 | defined here | Defined as the foundational solution mechanism to categorize PRs before evaluating quality gates to prevent false failures. |
| .claude/skills/review/references/qa.md | 50 | defined here | Mandated as the first step of QA review, classifying changed files into CODE, WORKFLOW, CONFIG, DOCS, or MIXED. |
| .claude/skills/review/references/security.md | 43 | defined here | Mandated as the initial step of security review to scale security scrutiny according to file category. |

## Consumes
Pull request diffs, changed file path lists, and file extensions.

## Produces
PR type classification (CODE, WORKFLOW, CONFIG, DOCS, or MIXED) and calibrated review standards.

## When applied
Executed as the mandatory first step before applying QA, security, or DevOps review evaluation rules.

## Sub-concepts
none

## Part of
code-review-protocol

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); internal-contradiction (.claude/skills/review/references/security.md:104); clean in .claude/skills/review/references/qa.md

## Design notes
`PR Type Detection` prevents review gate misclassifications and false-positive failures by categorizing pull requests by file type upfront, allowing documentation-only and configuration changes to bypass irrelevant executable code test requirements.
