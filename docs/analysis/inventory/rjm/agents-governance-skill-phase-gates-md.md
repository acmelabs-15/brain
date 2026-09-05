---
package: rjm
path: .agents/governance/SKILL-PHASE-GATES.md
type: agent
bytes: 6783
unit: inv-rjm-55
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/SKILL-PHASE-GATES.md

## Purpose — required, verbatim
> "Phase gates are explicit checkpoints within skills that **force structured re-evaluation** at critical points. They prevent protocol bypasses by blocking progression until conditions are verified." — .agents/governance/SKILL-PHASE-GATES.md:5

## Design intent — required
Defines architectural patterns, taxonomies, and enforcement mechanisms for phase gates within multi-step skills. It introduces four gate types (Evidence, Verification, Review, Documentation) and three implementation patterns (Script-Enforced, Documentation-Enforced, and Hybrid) to force structured re-evaluation at critical transition points while preserving LLM contextual judgment for evaluating conditions. Without it, skills executing complex, multi-step tasks would suffer frequent protocol bypasses, skip evidence gathering before reaching conclusions, apply unverified state mutations without rollback planning, or lose intermediate artifacts.

## Phase — required
cross-phase

## Inputs — required
- High-risk transition conditions: conclusions/decisions, state modifications, final output delivery, and intermediate artifact production.
- Model reasoning tokens: "Include in --thoughts: \"Evidence gate: [N] sources from [locations]\"" (.agents/governance/SKILL-PHASE-GATES.md:29) and "Include in --thoughts: \"Verification gate: [current] -> [expected]\"" (.agents/governance/SKILL-PHASE-GATES.md:52).
- Prior phase artifacts and review verdicts: "Review verdict: PASS or PASS_WITH_CONCERNS" — .agents/governance/SKILL-PHASE-GATES.md:73

## Outputs — required
- Standardized structured gate status output block:
```text
GATE_STATUS:
  evidence_gate: PASSED | sources: [count]
  verification_gate: PASSED | state: [description]
```
quoted at .agents/governance/SKILL-PHASE-GATES.md:177-180.
- Script termination or blocking messages: `sys.exit(1)` (.agents/governance/SKILL-PHASE-GATES.md:142).

## Invokes — required
- doc ADR-033-routing-level-enforcement-gates.md — .agents/governance/SKILL-PHASE-GATES.md:245
- doc SKILL-CREATION-CRITERIA.md — .agents/governance/SKILL-PHASE-GATES.md:246
- doc agent-design-principles.md — .agents/governance/SKILL-PHASE-GATES.md:247

## Invoked by — required
- doc SKILL-CREATION-CRITERIA.md — .agents/governance/SKILL-CREATION-CRITERIA.md:77
- doc ADR-033-routing-level-enforcement-gates.md — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:467

## Concepts named — required, verbatim
- `Skill Phase Gates` — .agents/governance/SKILL-PHASE-GATES.md:1 — defined here
- `Phase gates` — .agents/governance/SKILL-PHASE-GATES.md:5 — defined here
- `Evidence Gate` — .agents/governance/SKILL-PHASE-GATES.md:13 — defined here
- `Verification Gate` — .agents/governance/SKILL-PHASE-GATES.md:36 — defined here
- `Review Gate` — .agents/governance/SKILL-PHASE-GATES.md:59 — defined here
- `Documentation Gate` — .agents/governance/SKILL-PHASE-GATES.md:82 — defined here
- `Gate Placement Guidelines` — .agents/governance/SKILL-PHASE-GATES.md:105 — defined here
- `Script-Enforced Gates` — .agents/governance/SKILL-PHASE-GATES.md:129 — defined here
- `Documentation-Enforced Gates` — .agents/governance/SKILL-PHASE-GATES.md:148 — defined here
- `Hybrid Enforcement` — .agents/governance/SKILL-PHASE-GATES.md:167 — defined here
- `GATE_STATUS` — .agents/governance/SKILL-PHASE-GATES.md:177 — defined here
- `Compliance Checklist` — .agents/governance/SKILL-PHASE-GATES.md:205 — defined here
- `Skill Gate Matrix` — .agents/governance/SKILL-PHASE-GATES.md:219 — defined here

## Structure
- Skill Phase Gates
- Purpose
- Gate Types
- 1. Evidence Gate
- 2. Verification Gate
- 3. Review Gate
- 4. Documentation Gate
- Gate Placement Guidelines
- When to Add Gates
- When NOT to Add Gates
- Implementation Patterns
- Pattern A: Script-Enforced Gates
- Pattern B: Documentation-Enforced Gates
- Pattern C: Hybrid Enforcement
- Reference Implementation: Planner Skill
- Compliance Checklist
- Skill Gate Matrix
- Metrics
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/governance/SKILL-PHASE-GATES.md:201 · References `.claude/skills/milestone-planner/SKILL.md` as reference implementation, but milestone-planner is an agent located at `.claude/agents/milestone-planner.md` and no such skill path exists.
- internal-contradiction · .agents/governance/SKILL-PHASE-GATES.md:223 · The Skill Gate Matrix lists `milestone-planner` under "Skill", but it is architecturally categorized as an agent in the repository.

## Observations
- Enforcement philosophy: Distinguishes between determinism and forced iteration, arguing that the primary value of phase gates is forcing structured re-evaluation at phase boundaries while preserving LLM judgment for evaluating the gate criteria.
- Historical evolution with ADR-033: Originally conceived alongside ADR-032 as skill-internal gates, ADR-033 relocated primary enforcement to the routing layer (PreToolUse hooks) while retaining this document as governance for skill authoring.
- Measurable compliance metrics: Targets reducing gate bypass rates to <5%, dropping protocol violations from 60% to <10%, and cutting rework cycles by 50%.

## Context cost
6783 bytes, ~1700 tokens. References 3 governance and architecture documents.
