---
package: rjm
name: context-gather
slug: context-gather
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# context-gather

## Definition — verbatim
> "name: context-gather" — .claude/skills/context-gather/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-gather/SKILL.md | 2 | defined here | Frontmatter name defining the multi-tier context gathering skill. |
| .claude/skills/context-optimizer/SKILL.md | 4 | used here | Contrasted in description as the pre-task knowledge gathering skill rather than skill token compression. |
| .claude/skills/research-and-incorporate/SKILL.md | 9 | used here | Differentiated in description as the tool for exploratory knowledge gathering before task planning. |

## Consumes
Search queries, active task parameters, and knowledge tier access (Forgetful Memory, Context7, DeepWiki, web).

## Produces
Distilled context summaries, TIER_QUERIED: telemetry markers, and CONTEXT_LOADED: skip detection sentinels.

## When applied
Invoked prior to planning or implementation when an agent needs comprehensive background information across repository and external sources.

## Sub-concepts
tier-queried, context-loaded

## Part of
plan

## Implementation status
clean

## Design notes
A structured pre-planning technique in rjm that systematically searches multiple internal and external knowledge repositories, compiling a consolidated briefing while outputting parseable markers to prevent duplicate lookups.
