---
package: rjm
name: Verification Protocol
slug: verification-protocol
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verification Protocol

## Definition — verbatim
> "Before providing answers:" — .claude/agents/independent-thinker.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 130 | defines | Three-step pre-answer gate mandating fact-checking, source citation, and uncertainty declaration. |
| .claude/skills/skillforge/references/specification-template.md | 260 | defines | XML schema element defining structural, content, and evolution checks for skill specifications. |

## Consumes
Proposed answers, analysis outputs, or generated skill specification files.

## Produces
Validated, source-cited conclusions or schema-compliant specification documents.

## When applied
Enforced prior to emitting conclusions in independent analysis, or prior to publishing skill specs in SkillForge.

## Sub-concepts
none

## Part of
independent-thinker, skillforge

## Implementation status
defects: missing-path

## Design notes
Enforces a strict validation gate before answers or specifications leave an agent. In independent analysis it requires fact-checking, source citation, and uncertainty declarations; in SkillForge it enforces structural YAML and content completeness checks.
