---
package: rjm
name: Delta Triage
slug: delta-triage
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Delta Triage

## Definition — verbatim
> "Process Delta items to capture actionable improvements." — .claude/skills/retrospective/references/frameworks.md:378

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 117 | defined here | Phase 6 sub-activity triaging Delta items into actionable backlog items or issues. |
| .claude/skills/retrospective/references/frameworks.md | 376 | defined here | Comprehensive guide for Delta Triage workflow, criteria, and destination routing. |
| .claude/skills/retrospective/references/learning-template.md | 120 | used here | Output template section capturing triaged delta items with priority and owner. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 317 | defined here | Embedded in script template defining Delta Triage markdown table structure. |
| templates/agents/retrospective.shared.md | 1205 | defined here | Shared template defining Delta Triage process and routing rules. |

## Consumes
Raw Delta items generated during +/Delta self-assessment.

## Produces
Priority-scored, actionable work items routed to GitHub issues (P0/P1) or backlog memory (P2/P3).

## When applied
Executed immediately following +/Delta during Phase 6 of the retrospective.

## Sub-concepts
none

## Part of
close-the-retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Delta Triage closes the loop on process criticism by ensuring that identified flaws are not merely vented but systematically evaluated, prioritized, and converted into tracked backlog items or GitHub issues. Without Delta Triage, retrospective feedback remains inert sentiment rather than driving tangible workflow modifications.
