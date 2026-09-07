---
package: rjm
name: Five Whys
slug: five-whys
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md, sha256: 3b68e11d9db7b25daccc5b46f4c2ec9ee5595e1d9161815396d0217d5050a76f}
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Five Whys

## Definition — verbatim
> "Mandatory for all failures. Ask \"Why?\" until you reach root cause." — .claude/skills/retrospective/references/frameworks.md:128

## Also called — verbatim
- `Five-Whys` — .claude/skills/ai-agents-research-methodology/SKILL.md:215

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 651 | used here | Listed under retrospective agent specializations alongside Fishbone analysis and skill extraction. |
| .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md | 62 | used here | Applied as the root-cause analysis framework in the post-incident review for plugin manifest schema failures. |
| .claude/agents/analyst.md | 239 | used here | Tabulated as a core analysis framework for incident root cause analysis. |
| .claude/agents/retrospective.md | 80 | used here | Outlined in the retrospective framework execution flow under the Generate Insights activity. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 113 | used here | Documented as an essential artifact section required in retrospective files. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 215 | used here | Cited as an evidence requirement for diagnosing defect propagation and tool failures. |
| .claude/skills/retrospective/references/frameworks.md | 126 | defined here | Defined as a mandatory root cause analysis activity for all failures, iterating "Why?" up to five levels. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 10 | used here | Documented in the retrospective runner script as an interpretive phase authored by the agent. |
| .claude/skills/retrospective/SKILL.md | 4 | used here | Referenced in the retrospective skill description as a key diagnostic activity. |
| docs/agent-catalog.md | 40 | used here | Cataloged as a primary methodology employed by the retrospective agent to extract learnings. |
| scripts/eval/eval-agents.py | 455 | used here | Specified as an evaluation expectation for the retrospective agent during recurring issue analysis. |
| src/claude/analyst.md | 239 | used here | Listed in the analyst frameworks table for incident root cause analysis. |
| templates/agents/analyst.shared.md | 230 | used here | Documented in shared analyst prompt template as a root cause analysis framework for incidents. |
| templates/agents/retrospective.shared.md | 3 | used here | Highlighted in the shared retrospective agent prompt description for diagnosing error patterns. |
| templates/agents/retrospective.shared.md | 255 | defined here | Defined as an insight-generation activity mandating recursive "Why?" questioning for failure analysis. |

## Consumes
Failure reports, post-incident reviews, session logs, or defect observations.

## Produces
A root-cause diagnosis identifying actionable, underlying conditions contributing to a defect.

## When applied
> "Mandatory for all failures. Ask \"Why?\" until you reach root cause." — .claude/skills/retrospective/references/frameworks.md:128

## Sub-concepts
none

## Part of
- retrospective
- analyst

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Five Whys provides a structured iterative interrogation technique across rjm's retrospective and analysis workflows. By repeatedly asking why an failure occurred, agents bypass surface symptoms to discover fixable systemic causes—such as missing checklist items, ambiguous instructions, or unanchored assumptions. Without Five Whys, retrospectives would stagnate at superficial symptom patching rather than producing durable institutional improvements.
