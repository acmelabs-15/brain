---
package: rjm
name: Script/Automation
slug: script-automation
kind: role
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script/Automation

## Definition — verbatim
> "| **Script/Automation** | Agentic capability, verification, quality | Scripts follow patterns, self-verify, documented | When scripts present |" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 14 | defined here | Conditional synthesis panel agent evaluating script agentic capability, self-verification, and implementation quality. |

## Consumes
Skill scripts directory, script execution documentation in SKILL.md, and test fixtures.

## Produces
Script automation score (1-10), pattern compliance findings, and self-verification evaluations.

## When applied
Activated conditionally during Phase 4 synthesis panel evaluation when a skill includes scripts.

## Sub-concepts
pattern-compliance, agentic-capability, script-agent-scoring

## Part of
panel-composition

## Implementation status
clean

## Design notes
A specialized synthesis panel role activated whenever candidate skills package executable scripts, auditing automation quality, self-verification, and unattended execution capabilities.
