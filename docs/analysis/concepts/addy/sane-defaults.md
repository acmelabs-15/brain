---
package: addy
name: Sane Defaults
slug: sane-defaults
kind: technique
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Sane Defaults

## Definition — verbatim
> "When the user has no opinion, use these. They're chosen to be met by most codebases on day one." — skills/constraint-driven-development/SKILL.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 234 | defined here | Section heading introducing standard default thresholds for unconfigured constraints |

## Consumes
User indecision or lack of established thresholds during the constraint intake process.

## Produces
Baseline threshold configurations (80% diff coverage, 2500ms LCP, 90-day exceptions, 0.5% ratchet tolerance).

## When applied
Used whenever a user lacks specific numbers for a constraint dimension during setup.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
A curated set of baseline constraint values designed to be immediately achievable by most codebases without breaking existing builds. By bundling default numbers with explicit rationales, it eliminates setup paralysis while ensuring thresholds are durable and understandable.
