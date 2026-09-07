---
package: rjm
name: boundary layer
slug: boundary-layer
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# boundary layer

## Definition — verbatim
(used, not defined)

> "3. Does the company have an explicit boundary layer?" — .claude/skills/world-model-diagnostic/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 20 | used here | Key diagnostic question evaluating whether an explicit interface separates information routing from automated judgment. |

## Consumes
Raw data streams, operational events, and incoming knowledge artifacts.

## Produces
Inspected, validated, and classified data streams with explicit permissions for automated action.

## When applied
Maintained as a non-negotiable rule throughout diagnostic analysis; database choice is considered downstream of boundary clarity.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
The pivotal structural concept in rjm's diagnostic framework. A boundary layer—implemented either architecturally via deterministic validation or operationally via expert human review—ensures that automated systems act only on verified, unambiguous inputs, preventing bad interpretations from propagating into production actions.
