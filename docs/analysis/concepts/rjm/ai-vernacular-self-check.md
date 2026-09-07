---
package: rjm
name: AI-vernacular self-check
slug: ai-vernacular-self-check
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI-vernacular self-check

## Definition — verbatim
> "description: Pre-emit AI-vernacular self-check an agent runs on its OWN prose" — .claude/skills/prose-self-check/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 4 | defined here | Skill frontmatter description defining the pre-emission prose audit technique. |

## Consumes
Draft prose emitted by agents (PRDs, explainers, spec narratives, retrospectives, ADR context sections, PR descriptions).

## Produces
Refined prose with mechanical, structural, and semantic AI tells eliminated before artifact emission.

## When applied
Run before writing or emitting any prose artifact, or when triggered by prompts like "prose self-check" or "audit my writing for AI tells".

## Sub-concepts
four-layers, emptiness-gate, flat-rhythm

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
A disciplined self-audit technique performed by AI agents on their own generated prose to detect and remove linguistic and structural tells before saving artifacts.
