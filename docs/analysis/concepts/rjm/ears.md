---
package: rjm
name: EARS
slug: ears
kind: technique
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EARS

## Definition — verbatim
> "EARS (Easy Approach to Requirements Syntax) is a structured syntax for writing testable, unambiguous requirements." — .agents/governance/ears-format.md:15

## Also called — verbatim
> "Easy Approach to Requirements Syntax" — .agents/governance/ears-format.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 43 | defined here | Adopts EARS format as the project standard for all formal requirements. |
| .agents/governance/ears-format.md | 15 | defined here | Defines EARS syntax, components, patterns, and grammar rules for requirement documents. |
| .claude/commands/spec.md | 168 | used here | Mandates numbered EARS syntax for all acceptance criteria in generated specifications. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 205 | used here | Requires emitted requirements to use EARS syntax for testable acceptance criteria. |
| scripts/eval/eval-agents.py | 407 | used here | Validates agent output expectations against EARS format requirements during evaluation runs. |

## Consumes
Feature requests, user stories, problem statements, and architectural constraints.

## Produces
Testable, unambiguous requirement statements adhering to one of six EARS patterns with mandatory SO THAT rationale clauses.

## When applied
> "Adopt the EARS (Easy Approach to Requirements Syntax) format as the standard for all formal requirements in the ai-agents project." — .agents/architecture/ADR-032-ears-requirements-syntax.md:43

## Sub-concepts
ubiquitous, event-driven, state-driven, optional, unwanted, complex, so-that

## Part of
none

## Implementation status
clean

## Design notes
EARS (Easy Approach to Requirements Syntax) is the foundational requirement grammar adopted in rjm under ADR-032. It replaces ambiguous natural language prose with constrained sentence patterns that make system behavior directly testable by downstream critic agents and automated test generators. By providing clear pre-conditions, triggers, and mandatory business rationale (`SO THAT`), EARS prevents specification drift and ensures objective acceptance criteria across the specification layer.
