---
package: rjm
name: generated trees
slug: generated-trees
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# generated trees

## Definition — verbatim
> "Special case, generated trees. `src/vs-code-agents/` and `src/copilot-cli/agents/` are generated from `templates/agents/*.shared.md`." — .claude/skills/ai-agents-change-control/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 56 | defined here | Policy section detailing generated directories and strictly forbidding hand-editing. |

## Consumes
Canonical source files and templates.

## Produces
Derived directory structures including src/vs-code-agents/ and src/copilot-cli/.

## When applied
Consulted before modifying any file located in generated directories.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
Generated trees are read-only directory hierarchies produced by automated build scripts. Change control strictly forbids hand-editing them, requiring all modifications to occur in canonical source files.
