---
package: rjm
name: Definition-of-Ready
slug: definition-of-ready
kind: gate
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Definition-of-Ready

## Definition — verbatim
> "START: Definition of Ready" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 144 | used here | Cited regarding unverified questions required before moving ADR-072 from proposed to accepted |
| .claude/agents/architect.md | 208 | defined here | Five-criteria START checklist used by architect agent before making an architectural decision |
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 21 | defined here | Quality framework section detailing the START criteria gating decision making |
| templates/agents/architect.shared.md | 223 | defined here | Template specification of START definition of ready for architect agents |

## Consumes
Architectural context, identified stakeholders, and candidate alternatives.

## Produces
A verified readiness verdict authorizing formal decision making and ADR drafting.

## When applied
Applied before making an architectural decision to confirm the decision moment is ripe.

## Sub-concepts
none

## Part of
ad-quality-frameworks

## Implementation status
defects: missing-path

## Design notes
Definition-of-Ready (codified as the START framework: Stakeholders, Time, Alternatives, Requirements, Template) is an entry gate for architectural decision-making. It ensures that an architect agent does not rush into writing an ADR before the problem is sufficiently understood, alternatives are identified, and affected parties are known.
