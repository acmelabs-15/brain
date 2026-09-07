---
package: rjm
name: Silent sovereignty
slug: silent-sovereignty
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Silent sovereignty

## Definition — verbatim
> "- **Silent sovereignty.** Auto-deciding architecture, ADRs, breaking changes," — .claude/skills/autoplan/SKILL.md:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 205 | defined here | Anti-pattern warning against auto-deciding architecture, ADRs, breaking changes, or security posture under task momentum. |

## Consumes
High-momentum execution encountering high-impact architectural or security decisions.

## Produces
Unauthorized architectural mutations, unvetted ADRs, and security policy drift.

## When applied
Cataloged as a critical anti-pattern whenever an agent makes unilateral decisions on sovereign domains.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Silent sovereignty is the hazardous counterpart to asking mechanical questions. It occurs when an agent, carried along by task momentum, unilaterally decides architectural structures, introduces ADRs, alters security postures, or makes breaking API changes without consulting the user. In rjm, silent sovereignty is strictly prohibited: whenever a sovereignty boundary is touched, the agent must pause and present options.
