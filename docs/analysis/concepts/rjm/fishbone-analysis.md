---
package: rjm
name: Fishbone Analysis
slug: fishbone-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fishbone Analysis

## Definition — verbatim
> "**Purpose:** Look past symptoms to identify root causes across categories." — .claude/skills/retrospective/references/frameworks.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 651 | used here | Listed under retrospective agent specializations alongside Five Whys and skill extraction. |
| .claude/agents/retrospective.md | 81 | used here | Included in the retrospective framework execution flow under the Generate Insights activity. |
| .claude/skills/retrospective/references/frameworks.md | 190 | defined here | Defined as an insight-generation activity analyzing root causes across six agent-specific categories. |
| .claude/skills/retrospective/SKILL.md | 100 | used here | Prescribed for complex failures with multiple contributing factors in the skill framework guide. |
| templates/agents/retrospective.shared.md | 319 | defined here | Defined in shared retrospective template with categories for Prompt, Tools, Context, Dependencies, Sequence, and State. |

## Consumes
Complex failure observations, multi-factor defect logs, or ambiguous incident reports.

## Produces
Categorized cause-and-effect breakdown across Prompt, Tools, Context, Dependencies, Sequence, and State.

## When applied
> "Use for complex failures with multiple contributing factors." — .claude/skills/retrospective/references/frameworks.md:192

## Sub-concepts
none

## Part of
- retrospective

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Fishbone analysis provides a multi-dimensional diagnostic framework for investigating compound failures across the agent system. By decomposing defects into six agent-specific causal categories (Prompt, Tools, Context, Dependencies, Sequence, State), it prevents oversimplified single-cause attributions and surfaces subtle interactions such as context pollution or tool sequence failures. Without Fishbone analysis, complex failures involving multiple agents or cascading tool errors would resist systematic remediation.
