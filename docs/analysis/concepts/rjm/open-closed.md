---
package: rjm
name: Open-Closed
slug: open-closed
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
  - {path: scripts/eval/_providers.py, sha256: 2b5fd7d1b39ad5792826f1c4d8ca4f17f8aa5a0fdc07213df29167eba2ee2f5d}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Open-Closed

## Definition — verbatim
> "| Open-Closed (OCP) | Open for extension, closed for modification |" — .claude/skills/quality-grades/references/solid-principles.md:16

## Also called — verbatim
> "| Open-Closed (OCP) | Open for extension, closed for modification |" — .claude/skills/quality-grades/references/solid-principles.md:16

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 171 | used here | Cited under Level 2 Principles in the Software Hierarchy of Needs. |
| .claude/skills/quality-grades/references/solid-principles.md | 16 | defined here | Summarized in SOLID principles overview as open for extension, closed for modification. |
| scripts/eval/_providers.py | 10 | used here | Architecture docstring citing Open/Closed design: new provider requires new class and single registry row. |
| templates/agents/implementer.shared.md | 179 | used here | Shared implementer template citing Open-Closed under Level 2 Principles. |

## Consumes
Software entities, extensible modules, provider registries, and rule engines.

## Produces
Extensibility seams that permit adding new behaviors without altering existing, verified source code.

## When applied
Applied when designing subsystems that anticipate new variants, drivers, or algorithmic strategies.

## Sub-concepts
none

## Part of
solid, software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
The Open-Closed Principle dictates that software artifacts should be open for extension but closed for modification. In rjm, this principle enables modular evolution—such as adding evaluation providers or lint rules—via additive classes and registry rows rather than risky edits to central dispatch loops.
