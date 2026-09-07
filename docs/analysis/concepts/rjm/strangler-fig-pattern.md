---
package: rjm
name: Strangler Fig Pattern
slug: strangler-fig-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strangler Fig Pattern

## Definition — verbatim
> "Gradually replace legacy systems by building new functionality around existing systems until old can be decommissioned." — templates/agents/architect.shared.md:613

## Also called — verbatim
"strangler-fig-pattern" — templates/agents/architect.shared.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 62 | defined here | Referenced under Related Concepts as an incremental migration approach for larger changes. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 56 | used here | Cited as an incremental migration pattern that respects existing system behavior. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 58 | used here | Listed in Related Concepts as an incremental migration alternative for larger modifications. |
| templates/agents/architect.shared.md | 50 | used here | Listed in architect pattern catalog for legacy modernization. |
| templates/agents/architect.shared.md | 611 | defined here | Heading and complete pattern definition specifying process, when to use, and ADR considerations. |

## Consumes
Legacy system, defined migration seams, routing facade or reverse proxy.

## Produces
Phased modernization roadmap, microservice or modern module replacements, and safe decommissioning of legacy components.

## When applied
Applied when modernizing large monolithic systems where business continuity is critical and big-bang rewrites are prohibited.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Strangler Fig Pattern provides the formal architectural framework in rjm for incrementally migrating monoliths by intercepting calls via a routing facade and replacing functionality slice-by-slice, ensuring continuous delivery and risk containment.
