---
package: rjm
name: Discovery
slug: discovery
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Discovery

## Definition — verbatim
> "### Phase 1: Discovery" — .claude/agents/quality-auditor.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 57 | defines | Phase 1 of quality auditor workflow discovering domains, inventorying files, and reading past reports. |
| .claude/skills/business-strategy/SKILL.md | 9 | references | First stage in Jobs-to-be-Done (JTBD) customer lifecycle workflow. |
| .claude/skills/skillforge/scripts/discover_skills.py | 316 | defines | Script section heading implementing automated repository skill and tool discovery. |
| .claude/skills/slo-designer/SKILL.md | 107 | defines | Step 1 of SLO design process identifying critical user journeys and service dependencies. |

## Consumes
Target repository, file trees, domain definitions, and customer/system problem spaces.

## Produces
Inventory of discovered domains, skills, user journeys, or market opportunities.

## When applied
Initiated at the start of quality auditing, skill cataloging, or strategy formation.

## Sub-concepts
none

## Part of
quality-auditor

## Implementation status
clean

## Design notes
The initial reconnaissance phase utilized across multiple domains in rjm (including quality auditing, skill forging, strategy definition, and SLO design). It gathers raw facts, locates existing artifacts, and inventories assets before analytical grading, synthesis, or execution begins.
