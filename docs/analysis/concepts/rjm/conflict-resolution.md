---
package: rjm
name: conflict resolution
slug: conflict-resolution
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conflict resolution

## Definition — verbatim
> "Conflict Resolution" — .agents/critique/ADR-023-debate-log.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 27 | used here | Identified as a missing capability in sequential workflows where human intervention was required when agents disagreed. |
| .agents/critique/ADR-023-debate-log.md | 81 | defined here | Section heading and structured adjudication protocol resolving multi-agent debate conflicts. |
| .claude/skills/adr-review/references/agent-prompts.md | 383 | defined here | Phase 2 consolidation prompt directing high-level-advisor to break ties and deliver binding conflict resolution verdicts. |

## Consumes
Divergent agent positions, conflicting recommendations, debate arguments, and evidentiary reviews.

## Produces
Binding resolution decisions, tie-breaking verdicts, and consolidated consensus points.

## When applied
Applied during multi-agent reviews and architectural debates when specialist agents reach contradictory conclusions.

## Sub-concepts
vote, escalate

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights); internal-contradiction · .agents/critique/ADR-023-debate-log.md:93, 125 (refers to ADR-021 instead of ADR-023). Clean in .claude/skills/adr-review/references/agent-prompts.md.

## Design notes
A core governance and multi-agent coordination technique enabling the ai-agents system to reconcile divergent specialist perspectives into a single authoritative decision. In ADR-009, consensus protocols systematically handle disagreements via weighted voting and escalation; in ADR-023 debate logs and adr-review prompts, high-level-advisor is dispatched to break ties and deliver binding verdicts on architectural tradeoffs.
