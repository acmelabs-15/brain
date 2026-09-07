---
package: rjm
name: Second-System Effect
slug: second-system-effect
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Second-System Effect

## Definition — verbatim
> "### Second-System Effect (Avoiding Over-Engineering)" — templates/agents/architect.shared.md:582

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 153 | used here | Subsection header in Strategic Validation Checklist for detecting over-engineering in replacement systems. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 77 | defined here \| used here | Tabulated under Legacy Systems problem domain for Tier 5 (Principal) complexity analysis. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 35 | used here | Decision red flag table identifying 'Let's start fresh' as a prime Second System Effect risk. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 16 | used here | Identifies performance rewrite regressions as the cousin of Fred Brooks' second-system effect. |
| templates/agents/architect.shared.md | 55 | used here | Secondary strategic knowledge topic under Legacy & Risk guiding the architect agent to avoid over-engineering. |
| templates/agents/architect.shared.md | 582 | defined here | Section header defining the principle of avoiding over-engineering when replacing existing systems. |

## Consumes
System replacement proposals, rewrite justifications, and expanded feature lists.

## Produces
Scope boundary enforcement, feature pruning justifications, and regression risk assessments.

## When applied
Applied whenever a proposal aims to rewrite, replace, or build a successor to an existing working component.

## Sub-concepts
none

## Part of
strategic-validation-checklist

## Implementation status
defects: missing-path

## Design notes
Fred Brooks' classic software engineering pitfall codified across rjm's critique and architecture frameworks, warning agents against succumbing to feature bloat and unrestrained ambition when replacing an existing system.
