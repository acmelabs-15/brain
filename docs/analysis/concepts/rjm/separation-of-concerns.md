---
package: rjm
name: Separation of Concerns
slug: separation-of-concerns
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Separation of Concerns

## Definition — verbatim
> "Decompose a system into distinct sections, each addressing a separate concern. Attribution: Edsger W. Dijkstra, "On the role of scientific thought" (1974)." — .claude/skills/golden-principles/references/design-separation-of-concerns.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 171 | used here | Listed under Level 2 Principles in the Software Hierarchy of Needs. |
| .claude/commands/spec.md | 152 | used here | Spec generation principle requiring that each requirement address exactly one concern. |
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 58 | used here | Explains that separating workflow from implementation achieves clean separation of concerns. |
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 7 | defined here | Reference document detailing decomposition at method, class, layer, and service levels. |
| .claude/skills/golden-principles/SKILL.md | 133 | used here | Index entry for the separation of concerns design reference. |
| .claude/skills/quality-grades/references/code-qualities.md | 26 | used here | Quality rubric noting separation of concerns as a primary benefit of Programming by Intention. |
| .claude/skills/skillforge/references/specification-template.md | 9 | used here | Template standard separating analysis artifacts from execution instructions. |
| templates/agents/implementer.shared.md | 179 | used here | Shared implementer template listing separation of concerns under Level 2 Principles. |

## Consumes
System architectures, multi-step operations, requirements, and mixed responsibilities.

## Produces
Decomposed sections, modules, and layers that each isolate and address exactly one concern.

## When applied
Applied at method, class, module, and specification boundaries to prevent entanglement of responsibilities.

## Sub-concepts
programming-by-intention, separate-use-from-creation

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Separation of Concerns decomposes software into distinct components that each manage a single aspect of the system. In rjm, this principle operates across specifications (separating analysis from execution) and code (separating workflow from implementation), isolating the impact of changes.
