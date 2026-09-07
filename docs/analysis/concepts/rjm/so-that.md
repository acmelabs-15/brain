---
package: rjm
name: SO THAT
slug: so-that
kind: pattern
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SO THAT

## Definition — verbatim
> "All requirements MUST include a \"SO THAT [rationale]\" clause to document business value." — .agents/architecture/ADR-032-ears-requirements-syntax.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 56 | defined here | Mandates the SO THAT rationale clause on all formal requirements to capture business value. |
| .agents/governance/ears-format.md | 45 | defined here | Defines SO THAT component as capturing business rationale in requirement syntax. |

## Consumes
Business justification, user goal, or design rationale.

## Produces
A rationale clause grounding the requirement in explicit business value.

## When applied
> "All requirements MUST include a \"SO THAT [rationale]\" clause to document business value." — .agents/architecture/ADR-032-ears-requirements-syntax.md:56

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
The mandatory justification clause appended to every EARS requirement in rjm. By forcing writers to specify "SO THAT [rationale]", rjm prevents untraceable and arbitrary technical specifications, ensuring that critic agents and reviewers can evaluate whether the required behavior actually accomplishes its intended business objective.
