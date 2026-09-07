---
package: rjm
name: Boundaries
slug: boundaries
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Boundaries

## Definition — verbatim
(used, not defined)

> "## Boundaries" — AGENTS.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 26 | defined here | Section heading in quality reference delineating acceptable opportunistic improvements versus unrelated scope creep. |
| .claude/skills/codebase-documenter/SKILL.md | 41 | defined here | Section heading defining what the codebase-documenter skill will and will not generate. |
| AGENTS.md | 21 | defined here | Top-level section heading defining mandatory rules, blocking verifications, and autonomy guardrails for all agents. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Boundaries is a structural heading used across skills and top-level agent instructions (AGENTS.md, codebase-documenter, quality-boy-scout-rule) to demarcate operational scope limits and autonomy guardrails rather than a standalone lifecycle concept, classified as name-only per D-023.
