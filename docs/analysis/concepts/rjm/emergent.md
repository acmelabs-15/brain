---
package: rjm
name: Emergent
slug: emergent
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Emergent

## Definition — verbatim
> "| **Emergent** | Starting from tests | Start with testability, refactor toward open-closed, work up the hierarchy |" — .claude/agents/implementer.md:278

## Also called — verbatim
> "| **Emergent** | Starting from tests | Start with testability, refactor toward open-closed, work up the hierarchy |" — templates/agents/implementer.shared.md:286

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 278 | defined here | Table row defining the emergent design strategy starting from testability and refactoring toward open-closed. |
| templates/agents/implementer.shared.md | 286 | defined here | Table row defining emergent design workflow in the shared implementer template. |

## Consumes
Unit tests, user requirements, and evolving code structures.

## Produces
Refactored modular code adhering to the Open-Closed Principle through incremental discovery.

## When applied
When the optimal architectural pattern is not obvious up front and design emerges from testability and refactoring.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Emergent design guides bottom-up architectural discovery in rjm. By starting with testable units and refactoring toward the Open-Closed Principle as patterns emerge, it avoids premature abstraction when domain requirements are evolving.
