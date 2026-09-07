---
package: rjm
name: structured output
slug: structured-output
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# structured output

## Definition — verbatim
> "## Structured Output" — .claude/skills/requirements-interview/SKILL.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 241 | used here | Concluded as the only durable solution for LLM evaluations over handwritten regex parsers. |
| .claude/skills/requirements-interview/SKILL.md | 94 | defined here | Section heading defining the mandatory Markdown structure for requirements interview handoffs. |
| .claude/skills/skillforge/references/script-integration-framework.md | 227 | defined here | Section heading defining JSON structured output patterns for automation scripts. |

## Consumes
Raw outputs, model schemas, script results.

## Produces
Predictable machine-readable JSON or standardized Markdown payloads.

## When applied
Applied when passing data between agents, scripts, and evaluation pipelines to avoid parsing ambiguities.

## Sub-concepts
none

## Part of
skillforge, requirements-interview, context-optimizer

## Implementation status
defects: doc-drift

## Design notes
A cross-cutting architectural pattern requiring models and scripts to return machine-readable structured formats (such as schema-constrained JSON or standardized markdown headers) to eliminate fragile regex parsing.
