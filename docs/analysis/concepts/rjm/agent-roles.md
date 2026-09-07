---
package: rjm
name: Agent Roles
slug: agent-roles
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Roles

## Definition — verbatim
(used, not defined)

> "Each agent template carries a `role:` field in its frontmatter describing what the agent does, not where it sits in a ranking." — .agents/AGENT-SYSTEM.md:829-830

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 827 | defined here | Section heading defining the four descriptive metadata role values (strategic, coordinator, executor, support). |
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 872 | defined here | Section heading mapping agent personas to specific focus areas in multi-agent ADR review debates. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
- strategic
- coordinator
- executor
- support

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift (from .agents/AGENT-SYSTEM.md relative path errors, ADR-098 migration drift, and SKILL-STANDARDS-RECONCILED.md inconsistencies)

## Design notes
A structural section heading and taxonomy label in AGENT-SYSTEM.md and SKILL-STANDARDS-RECONCILED.md denoting the descriptive four-value role metadata scheme (strategic, coordinator, executor, support) established by ADR-098 to replace hierarchical tier rankings rather than an independent lifecycle concept.
