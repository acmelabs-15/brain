---
package: rjm
name: Generator
slug: generator
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Generator

## Definition — verbatim
> "Generator: a Python function or script that reads a canonical tree and writes a derived (generated) tree." — .claude/skills/ai-agents-generation-and-release/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 15 | defined here | Defined in jargon as a Python script or function that reads canonical sources and emits derived artifacts. |
| .claude/skills/skillforge/references/architecture-patterns.md | 9 | defined here | Defined as an architectural skill pattern for creating artifacts via an Input → Transform → Output pipeline. |

## Consumes
Canonical source trees, templates, configuration schemas.

## Produces
Generated multi-platform agent definitions, documentation catalogs, and runtime shims.

## When applied
When translating canonical definitions into platform-specific targets, or when designing a skill whose primary purpose is artifact creation.

## Sub-concepts
none

## Part of
ai-agents-generation-and-release

## Implementation status
clean

## Design notes
In rjm, a Generator represents both an architectural pattern (Input → Transform → Output) and concrete Python scripts (like `build_all.py` and `generate_agents.py`) that consume single-source canonical trees to produce derived platform artifacts. This separates human authoring surfaces from multi-platform deployment targets, eliminating manual duplication across environments.
