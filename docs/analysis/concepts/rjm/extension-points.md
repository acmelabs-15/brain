---
package: rjm
name: Extension Points
slug: extension-points
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Extension Points

## Definition — verbatim
> "<location>Where the skill can be extended</location>" — .claude/skills/skillforge/references/specification-template.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 316 | defines | Section identifying extension procedures for incorporating new host events, payload fields, or loading surfaces. |
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 61 | defines | Architecture template section documenting where and how external consumers extend the system. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 221 | references | Validation rule ensuring core architecture axes are treated as first-class abstractions rather than deferred to extension points. |
| .claude/skills/pipeline-validator/SKILL.md | 456 | defines | Specifies extension points for customizing pipeline validation rules for non-default projects. |
| .claude/skills/research-and-incorporate/SKILL.md | 174 | defines | Defines extension points for adding domain-specific research MCP tools and analysis templates. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 72 | defines | Template section prompting skill authors to declare modular extension points. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 267 | defines | XML schema tag mandating at least two declared extension points per skill specification. |
| .claude/skills/skillforge/references/specification-template.md | 193 | defines | Reference specification defining location and purpose tags for skill extension points. |

## Consumes
System architectural designs, skill definitions, and extensibility specifications.

## Produces
Documented extension interfaces, plug-in boundaries, and customizable hook locations.

## When applied
Applied when designing architectural documentation and authoring extensible skill specifications.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path, internal-contradiction, orphan

## Design notes
Extension Points establish designated interfaces and architectural boundaries where skills, pipelines, and frameworks can be adapted without modifying core logic. By requiring explicit declaration of extension points in specifications, rjm promotes modularity and prevents arbitrary monkey-patching across the codebase.
