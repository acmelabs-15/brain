---
package: rjm
name: consensus protocol
slug: consensus-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# consensus protocol

## Definition — verbatim
> "The consensus protocol, also quoted verbatim from ADR-009:" — .agents/AGENT-SYSTEM.md:812

## Also called — verbatim
- `Consensus Protocol` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:60

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 812 | defined here | Quoted from ADR-009 as the 4-step execution algorithm for resolving conflict across parallel agents. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 54 | used here | Referenced in decision context clarifying that vote weighting in consensus does not confer hierarchical rank. |
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 60 | defined here | Defined in skill synthesis deep dive as the review panel evaluation decision gate (all approved vs issues). |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 41 | used here | Documented in skillforge transformation notes as part of the phase 4 reference restructuring. |

## Consumes
Independent agent execution outputs, review panel evaluation verdicts, or conflict reports.

## Produces
Final deterministic resolution: merged output, weighted vote selection, or escalation to high-level-advisor.

## When applied
> "3. Orchestrator checks for conflicts:" — .agents/AGENT-SYSTEM.md:817

## Sub-concepts
none

## Part of
- aggregation-and-escalation
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
The consensus protocol operationalizes conflict resolution during parallel multi-agent execution in rjm. By distinguishing between non-conflicting results (merge), soft disagreements (weighted vote preferring architectural roles), and hard deadlocks (mandatory escalation to high-level-advisor), the protocol ensures automated resolution when safe while routing intractable trade-offs to definitive executive decision-making.
