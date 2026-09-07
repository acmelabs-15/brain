---
package: rjm
name: Context-Aware CRITICAL_FAIL
slug: context-aware-critical-fail
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context-Aware CRITICAL_FAIL

## Definition — verbatim
> "Different thresholds by PR type (DOCS exempt from most triggers)" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 22 | defined here | Defined as a prompt refinement establishing varying CRITICAL_FAIL thresholds across PR types, exempting documentation-only PRs from code-level failure triggers. |

## Consumes
PR type classification, detected defects, and quality gate triggers.

## Produces
Context-calibrated merge-blocking failure verdicts or exemptions.

## When applied
Evaluated during AI PR Quality Gate runs when deciding whether an identified issue warrants blocking the pull request.

## Sub-concepts
none

## Part of
quality-gate-refinement

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104)

## Design notes
`Context-Aware CRITICAL_FAIL` tailors merge-blocking failure criteria to the operational context of a change, ensuring that rigid verification gates do not block harmless documentation or minor configuration pull requests.
