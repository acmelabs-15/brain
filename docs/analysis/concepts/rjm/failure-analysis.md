---
package: rjm
name: Failure Analysis
slug: failure-analysis
kind: technique
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
  - {path: docs/copilot-cli-setup.md, sha256: 59024c233a64c24d142b282be6874ab91ab23cc063663ad1c4331c54973a9519}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Failure Analysis

## Definition — verbatim
> "Proactively identify failure modes." — .claude/skills/skillforge/references/regression-questions.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 57 | defined here | Category 3 questioning targeting catastrophic, silent, adoption, evolution, and technical debt failures. |
| docs/copilot-cli-setup.md | 88 | used here | Section header in CLI troubleshooting diagnostic summary identifying Copilot silent exit causes. |

## Consumes
Candidate workflow or failing diagnostic outputs.

## Produces
Risk assessment (likelihood/impact) and mitigations feeding the anti-patterns specification.

## When applied
Applied during Phase 1 deep analysis and during troubleshooting diagnostics.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
defects: orphan

## Design notes
A proactive risk identification technique in SkillForge that interrogates potential failure modes (silent failures, catastrophic breakdowns, ecosystem conflicts) to engineer upfront mitigations and anti-patterns.
