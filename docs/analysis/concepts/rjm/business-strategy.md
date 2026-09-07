---
package: rjm
name: business-strategy
slug: business-strategy
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# business-strategy

## Definition — verbatim
> "# Business Strategy" — .claude/skills/business-strategy/SKILL.md:13

## Also called — verbatim
`Business Strategy` — .claude/skills/business-strategy/SKILL.md:13

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 2 | defined here | Frontmatter skill identifier declaring the business strategy routing engine. |
| .claude/skills/business-strategy/SKILL.md | 13 | defined here | Document title introducing the progressive-disclosure strategy router. |

## Consumes
Concrete numeric symptoms describing business friction across customer discovery, pricing, sales, or growth.

## Produces
Directed routing to a single self-contained reference distillation with a scored checklist.

## When applied
Invoked when a founder faces a business symptom and needs to determine which strategic framework applies.

## Sub-concepts
spin-selling, storybrand-messaging, bullseye-channel-selection, decision-tree, scored-checklist

## Part of
none

## Implementation status
defects: missing-path

## Design notes
business-strategy acts as the front-door router for rjm's 14-book business strategy pack. By implementing progressive disclosure, it forces founders to state a concrete numeric symptom and walk upstream to root causes, loading only the single relevant 6–7KB reference rather than polluting context with dozens of competing frameworks.
