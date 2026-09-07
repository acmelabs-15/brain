---
package: rjm
name: Agent Skills
slug: agent-skills
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Skills

## Definition — verbatim
> "2. **Agent Skills** (`.agents/skills/`): Learned patterns with evidence, organized by category" — .agents/architecture/ADR-012-skill-catalog-mcp.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 27 | used here | Defined in context as learned architectural patterns with evidence organized under .agents/skills/. |
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 191 | used here | Listed in platform capability matrix as supported via skills folder across Claude Code, Copilot CLI, and VS Code. |

## Consumes
Retrospective insights, failure analysis, and empirical software development evidence.

## Produces
Documented behavioral patterns, linting guidelines, documentation standards, and workflow heuristics.

## When applied
Consulted by agents during planning, implementation, and review to apply verified patterns and prevent recurring defects.

## Sub-concepts
none

## Part of
skill-catalog-mcp, skills-pattern

## Implementation status
clean

## Design notes
Agent Skills represent markdown-based pattern artifacts housed in `.agents/skills/` that capture empirical lessons learned across development sessions. Unlike executable scripts, they serve as cognitive guidance and behavioral guardrails for agents operating across multiple platforms.
