---
package: rjm
name: Related Decisions
slug: related-decisions
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Related Decisions

## Definition — verbatim
> "## Related Decisions" — .claude/skills/adr-generator/references/adr-template.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 128 | defined here | Section in the canonical ADR template linking to predecessor, dependent, or related architectural decision records. |

## Consumes
Cross-references and identifiers of related architecture records.

## Produces
An interconnected architectural decision graph linking dependent decisions across time.

## When applied
Completed during Phase G3 ADR authoring whenever the decision interacts with, extends, or impacts other ADRs.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
A structural section in rjm's canonical ADR template establishing traceability across decisions. By linking related ADRs, it weaves isolated decision records into a cohesive architectural graph, enabling engineers and agents to navigate dependencies, historical precedents, and downstream impacts.
