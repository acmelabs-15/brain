---
package: rjm
name: Success Criteria
slug: success-criteria
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Success Criteria

## Definition — verbatim
> "## Success Criteria" — docs/codeql-rollout-checklist.md:298

## Also called — verbatim
"success_criteria" — .claude/skills/skillforge/references/specification-template.md:239

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/devops/arm-runner-migration-analysis.md | 224 | used here | Checklist gating successful completion of the runner migration without architecture failures. |
| .claude/skills/merge-resolver/SKILL.md | 234 | defined here | Verification table defining the required evidence and commands for verifying clean merge conflict resolution. |
| .claude/skills/skillforge/references/specification-template.md | 239 | defined here | XML specification element defining prioritized functional, quality, and evolution acceptance criteria. |
| docs/codeql-rollout-checklist.md | 298 | defined here | Rollout gate defining functional, performance, adoption, and quality criteria for production CodeQL integration. |

## Consumes
Execution outputs, verification reports, test results, and metric measurements.

## Produces
Pass/fail verification verdicts determining whether a task, rollout, or resolution is complete.

## When applied
Evaluated at completion of a workflow, rollout phase, skill specification, or merge resolution before finalizing changes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, always-failing-gate

## Design notes
A foundational quality and verification gate across rjm that operationalizes completion definitions. By requiring explicit, measurable functional and performance criteria with concrete verification methods before declaring work finished, it prevents false completion declarations and unverified deliverables.
