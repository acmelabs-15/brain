---
package: rjm
name: roll-FORWARD
slug: roll-forward
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# roll-FORWARD

## Definition — verbatim
> "Rollback is roll-FORWARD: npm unpublish is restricted; fix, bump patch, retag" — .claude/skills/ai-agents-generation-and-release/SKILL.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 177 | used here | Rollback procedure policy mandating forward patch releases rather than unpublishing npm packages. |

## Consumes
Identified release regression or defective npm package artifact.

## Produces
Incremented patch release with corrective commit and git tag.

## When applied
Applied during incident response or release rollback scenarios where npm unpublishing is restricted.

## Sub-concepts
none

## Part of
phase-5-npm-release-path

## Implementation status
defects: doc-drift, unfailable-gate

## Design notes
Operational deployment pattern governing npm release remediations. Because registry immutability restrictions prevent unpublishing or reusing released version tags, any defects discovered in production must be fixed via an immediate forward patch increment and new release tag.
