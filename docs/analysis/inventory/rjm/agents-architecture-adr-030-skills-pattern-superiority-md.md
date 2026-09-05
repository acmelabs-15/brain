---
package: rjm
path: .agents/architecture/ADR-030-skills-pattern-superiority.md
type: agent
bytes: 7871
unit: inv-rjm-11
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-030-skills-pattern-superiority.md, sha256: 2b4476fb3d8bdabdef259ffe5e1758e9ae519b3575b1d85b21319793202765bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-030-skills-pattern-superiority.md

## Purpose — required, verbatim
> "Instead of delegating to subagents, **skills provide direct MCP tool access** within the current context." — .agents/architecture/ADR-030-skills-pattern-superiority.md:31

## Design intent — required
Proposes a pivot from subagent delegation (ADR-027 Option D) to a skills pattern ("Option E") where skills directly expose MCP tools in-context via `allowed-tools: mcp__<server>__*`. Highlights 63-78% latency reduction (eliminating 100-200ms subagent spawn overhead), ~10,000 token savings by loading 40+ MCP tools on demand, and simpler orchestration based on superpowers-chrome browsing skill patterns. The record is formally `rejected` as Option E was not built; instead, `.claude/skills/github/SKILL.md` was implemented wrapping Python scripts.

## Phase — required
none

## Inputs — required
Architectural discovery from `obra/superpowers-chrome` (`skills/browsing`), latency and token overhead metrics of subagent delegation vs skill loading, and GitHub MCP server toolset inventory.

## Outputs — required
Specification for Option E (GitHub skill with direct MCP tool bindings via `allowed-tools: mcp__github__*`), tool mapping table, four-phase migration plan, and issue triage recommendations (superseding issue #286 and #287).

## Invokes — required
- doc ADR-027 — .agents/architecture/ADR-030-skills-pattern-superiority.md:17
- doc .claude/skills/github/SKILL.md — .agents/architecture/ADR-030-skills-pattern-superiority.md:20
- doc ADR-005 — .agents/architecture/ADR-030-skills-pattern-superiority.md:248

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:216

## Concepts named — required, verbatim
- `Option E` — .agents/architecture/ADR-030-skills-pattern-superiority.md:19 — defined here
- `superpowers-chrome` — .agents/architecture/ADR-030-skills-pattern-superiority.md:27 — used here
- `skills pattern` — .agents/architecture/ADR-030-skills-pattern-superiority.md:29 — defined here
- `allowed-tools` — .agents/architecture/ADR-030-skills-pattern-superiority.md:39 — used here

## Structure
- `# ADR-030: Skills Pattern Superiority` — .agents/architecture/ADR-030-skills-pattern-superiority.md:12
- `## Critical Discovery: Skills > Subagents for MCP Access` — .agents/architecture/ADR-030-skills-pattern-superiority.md:25
- `### The Skills Pattern` — .agents/architecture/ADR-030-skills-pattern-superiority.md:29
- `### Skills vs Subagents Comparison` — .agents/architecture/ADR-030-skills-pattern-superiority.md:44
- `### Example: browsing Skill` — .agents/architecture/ADR-030-skills-pattern-superiority.md:55
- `### Applying This to GitHub` — .agents/architecture/ADR-030-skills-pattern-superiority.md:89
- `## Performance` — .agents/architecture/ADR-030-skills-pattern-superiority.md:144
- `## Updated Recommendation` — .agents/architecture/ADR-030-skills-pattern-superiority.md:151
- `### Architecture` — .agents/architecture/ADR-030-skills-pattern-superiority.md:155
- `### Performance Profile` — .agents/architecture/ADR-030-skills-pattern-superiority.md:172
- `### Context Efficiency` — .agents/architecture/ADR-030-skills-pattern-superiority.md:186
- `### Maintainability` — .agents/architecture/ADR-030-skills-pattern-superiority.md:192
- `### Coverage Analysis` — .agents/architecture/ADR-030-skills-pattern-superiority.md:199
- `## Issues Supersession` — .agents/architecture/ADR-030-skills-pattern-superiority.md:215
- `### Migration Path` — .agents/architecture/ADR-030-skills-pattern-superiority.md:226
- `## Confidence Level: 85%` — .agents/architecture/ADR-030-skills-pattern-superiority.md:253
- `## Recommendation: PIVOT TO SKILLS PATTERN` — .agents/architecture/ADR-030-skills-pattern-superiority.md:266

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — .agents/architecture/ADR-030-skills-pattern-superiority.md:19 — Proposes Option E as the recommended architecture, but Option E was rejected and not implemented; `.claude/skills/github/SKILL.md` wraps Python scripts rather than declaring allowed-tools.
- internal-contradiction — .agents/architecture/ADR-030-skills-pattern-superiority.md:3 — Frontmatter status is rejected while body text proclaims "Updated Recommendation" and "PIVOT TO SKILLS PATTERN", reconciled only by the 2026-08-25 record note.

## Observations
- Influential architectural analysis contrasting subagent delegation (100-200ms overhead, context duplication) with skill-based direct tool binding (1-2ms invocation).
- Anticipates tool isolation via allowed-tools frontmatter in skills, saving ~10,000 tokens of tool catalog overhead.

## Context cost
7871 bytes, ~2000 tokens.
