---
package: rjm
name: Architecture change
slug: architecture-change
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Architecture change

## Definition — verbatim
> "| Architecture change | ADR required | Change data flow pattern |" — .claude/skills/analyze/references/quality-boy-scout-rule.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 57 | defined here | Defined in scope classification table as the highest tier change requiring an Architecture Decision Record (ADR) (e.g. changing data flow pattern). |

## Consumes
Substantial architectural proposals, system-wide topology modifications, or core contract changes.

## Produces
Architecture Decision Record (ADR) and formal architecture review process.

## When applied
Applied when proposed modifications alter data flow patterns, component responsibilities, or cross-cutting paradigms.

## Sub-concepts
none

## Part of
quality-boy-scout-rule

## Implementation status
defects: missing-path

## Design notes
Architecture change is the highest scope classification tier in rjm's quality governance, enforcing that fundamental design modifications cannot occur without formal documentation via an ADR and explicit architectural consensus.
