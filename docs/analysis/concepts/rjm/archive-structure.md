---
package: rjm
name: Archive Structure
slug: archive-structure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Archive Structure

## Definition — verbatim
(used, not defined)

> "## Archive Structure" — .agents/governance/agent-consolidation-process.md:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 240 | defined here | Defines the directory layout under `.agents/archive/retired-agents/[agent-name]/` for storing retired agent definitions and migration records. |

## Consumes
Retired agent definition files, retirement rationale, and migration pointers.

## Produces
Standardized historical archive directory (`last-definition.md`, `retirement-date.txt`, `reason.md`, `migration-to.txt`).

## When applied
Applied when an agent completes Phase 4 Retirement.

## Sub-concepts
none

## Part of
agent-consolidation-process

## Implementation status
defects: missing-path

## Design notes
A filesystem organizational pattern preserving historical context for retired agents. It guarantees that deprecated capabilities, rationale, and previous agent definitions remain accessible for future reference or potential rollbacks without polluting active agent discovery directories.
