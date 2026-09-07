---
package: rjm
name: Pass Handoff
slug: pass-handoff
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pass Handoff

## Definition — verbatim
> "### Pass Handoff (to orchestrator)" — .claude/agents/qa.md:810

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 810 | defines | Handoff message format delivered from QA back to orchestrator when all gates pass with APPROVED verdict. |
| templates/agents/qa.shared.md | 740 | defines | Shared template definition for the APPROVED pass handoff structure returned to the orchestrator. |

## Consumes
Pre-PR Validation Report with APPROVED verdict and high confidence score.

## Produces
Structured handoff communication instructing orchestrator to proceed with PR creation or deployment.

## When applied
Dispatched by QA to orchestrator upon successful validation of all quality gates.

## Sub-concepts
none

## Part of
qa

## Implementation status
clean

## Design notes
The communication contract used by the QA agent to signal successful validation back to the orchestrator. It returns an APPROVED verdict along with test metrics, enabling the orchestrator to advance the workflow to pull request creation with explicit verification backing.
