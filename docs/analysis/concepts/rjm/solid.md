---
package: rjm
name: SOLID
slug: solid
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SOLID

## Definition — verbatim
(used, not defined)

> "- **SOLID/DRY/YAGNI reference**: Apply hierarchy of needs (qualities, principles, practices, patterns)" — .claude/agents/implementer.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 145 | used here | Cited under implementation quality standards alongside DRY and YAGNI. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 79 | defined here | Defined as foundational Tier 1 design standard across engineering complexity tiers. |
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 72 | used here | Cited as architectural design guidance for context structure and component boundaries. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 68 | used here | Referenced in CVA skill specification as foundational design principles. |
| .claude/skills/review/references/architect.md | 59 | used here | Listed in architect review checklist for evaluating subsystem extensibility and modularity. |
| templates/agents/implementer.shared.md | 153 | used here | Shared implementer template citing SOLID in quality standards. |

## Consumes
Class hierarchies, module designs, interface signatures, and component relationships.

## Produces
Modular, decoupled, and extensible software structures adhering to the 5 object-oriented design principles.

## When applied
Applied during class design, subsystem decomposition, and architectural review.

## Sub-concepts
open-closed, separation-of-concerns

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
SOLID represents the foundational five principles of object-oriented design. In rjm, SOLID principles are positioned at Level 2 of the Software Hierarchy of Needs, emerging naturally when foundational diagnostic qualities (cohesion and low coupling) are pursued.
