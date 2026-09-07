---
package: rjm
name: Stake-holding author
slug: stake-holding-author
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Stake-holding author

## Definition — verbatim
> "- **Stake-holding author**: vendor self-promotion, a founder pitch, an advocacy post quoting a competitor's unfavorable stat. The author benefits from the framing, so the framing is suspect until the primary source confirms it." — .claude/skills/ai-agents-external-claims/SKILL.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 40 | defines | Defines the trigger condition for claims sourced from interested parties or competitive advocacy. |

## Consumes
Claims originating from commercial vendors, founder pitches, or advocacy publications.

## Produces
Heightened verification scrutiny and mandatory disclosure of authorial stake in repo artifacts.

## When applied
Activated when evaluating claims from sources that benefit financially or rhetorically from the narrative.

## Sub-concepts
ownership-see-something-say-something

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
Identifies situations where the author of a claim has a material or commercial interest in the outcome. Because stake-holding authors frequently select, frame, and round numbers favorably, their assertions remain suspect until confirmed by independent primary sources.
