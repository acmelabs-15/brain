---
package: rjm
name: Boy Scout Rule
slug: boy-scout-rule
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Boy Scout Rule

## Definition — verbatim
> "# Boy Scout Rule" — .claude/skills/analyze/references/quality-boy-scout-rule.md:7

## Also called — verbatim
> "### Boy Scout Rule Application" — .claude/agents/implementer.md:470

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 470 | used here | Section heading specifying that the rule applies only to code directly touched for the task. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 77 | defined here | Mapped to Tier 2 under Legacy Systems as an incremental maintainability technique. |
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 7 | defined here | Document title for the core mental model on continuous incremental codebase cleanliness. |
| .claude/skills/analyze/SKILL.md | 68 | used here | Reference list link guiding scoping of improvement recommendations by size. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 8 | defined here | Document title for the decision-critic mental model guide on incremental improvements. |
| .claude/skills/decision-critic/SKILL.md | 102 | used here | Reference list link establishing scope boundaries for incremental improvement decisions. |
| .claude/skills/review/references/code-quality.md | 5 | used here | PR review focus description evaluating code cleanliness and maintainability touched by diffs. |
| templates/agents/implementer.shared.md | 459 | used here | Section heading outlining bounded application of the rule in shared implementer templates. |

## Consumes
Code actively touched during bug fixes, feature additions, or reviews.

## Produces
Incremental micro-improvements (renamed variables, extracted methods, updated comments) alongside task work.

## When applied
Continuously while modifying code for an assigned task, strictly scoped to touched files and lines.

## Sub-concepts
none

## Part of
refactoring-boundaries

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift, other

## Design notes
Boy Scout Rule advocates leaving touched code cleaner than you found it across rjm. Crucially, rjm constrains Uncle Bob's maxim to code actively touched for the task at hand, balancing continuous debt reduction against PR bloat and review drift.
