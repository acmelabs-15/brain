---
package: rjm
name: START
slug: start
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# START

## Definition — verbatim
> "START: Definition of Ready" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 21 | defines | Section heading introducing the START mnemonic (Stakeholders, Time, Alternatives, Requirements, Template) as the Definition of Ready gating architectural decisions. |
| AGENTS.md | 16 | defines | Defines the Start lifecycle gate checklist requiring Serena initialization, issue handoff reading, resume check, memory search, and git verification. |

## Consumes
Candidate decision drivers, stakeholder identification, problem statement, and repository session context.

## Produces
Readiness gate verdict authorizing the commencement of architectural decision authoring or agent execution sessions.

## When applied
Checked prior to beginning an ADR drafting workflow (or at the initiation of an agent session) to ensure foundational prerequisites are satisfied.

## Sub-concepts
start-checklist, most-responsible-moment

## Part of
ad-quality-frameworks, gates

## Implementation status
clean

## Design notes
START serves as an essential readiness gate in rjm's architectural and operational lifecycle. For architectural decisions, it enforces the Definition of Ready by ensuring stakeholders, timing (Most Responsible Moment), viable alternatives, requirement drivers, and a designated template exist before drafting starts. In agent runtime operations, it ensures memory context, git status, and issue handoffs are verified before actions are executed, preventing wasted effort on unready tasks.
