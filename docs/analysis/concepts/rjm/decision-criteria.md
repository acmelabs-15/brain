---
package: rjm
name: Decision Criteria
slug: decision-criteria
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision Criteria

## Definition — verbatim
> "### Decision Criteria" — .agents/governance/agent-consolidation-process.md:106

## Also called — verbatim
"decision-criteria" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:183

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 106 | defined here | Checklist defining prerequisites required before an agent consolidation can proceed. |
| .agents/governance/steering-committee-charter.md | 49 | defined here | Gating criteria governing steering committee review and approval of new agent proposals. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 183 | defined here | XML specification element defining weighted strategic, operational, and risk evaluation dimensions. |

## Consumes
Architectural proposals, overlap analyses, and strategic procurement options.

## Produces
Explicit pass/fail decisions or weighted comparative scores determining architectural path forward.

## When applied
Evaluated during steering committee reviews, consolidation decisions, and buy-vs-build strategic evaluations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A formal governance gate establishing objective, explicit rules for architectural decisions in rjm. It prevents arbitrary agent proliferation, unvetted consolidations, or biased sourcing selections by mandating evaluation against documented strategic, operational, and risk criteria.
