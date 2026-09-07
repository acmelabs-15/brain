---
package: rjm
name: Invariant Usefulness
slug: invariant-usefulness
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Invariant Usefulness

## Definition — verbatim
> "- **Invariant Usefulness**: X/10  (sub-criteria met: N/4)" — .claude/agents/type-design-analyzer.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 83 | defined here | Evaluated as one of four core review dimensions rating whether invariants prevent real bugs and align with business needs. |
| templates/agents/type-design-analyzer.shared.md | 92 | defined here | Defined in shared template output schema as an evaluated 1-10 rating dimension for invariant utility. |

## Consumes
Type definitions, domain logic constraints, and business domain requirements.

## Produces
A 1-10 numerical rating (sub-criteria met count N/4) and qualitative justification of practical bug prevention.

## When applied
When reviewing types to determine if invariants prevent genuine defects without imposing unnecessary conceptual overhead.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
Invariant Usefulness provides a pragmatic reality check on type design, ensuring that encapsulated invariants solve actual domain problems and prevent realistic bugs rather than encoding pedantic, unhelpful restrictions. In rjm's review framework, it guards against both overly restrictive types that hinder usability and overly permissive types that fail to protect critical business rules.
