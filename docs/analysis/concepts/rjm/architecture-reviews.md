---
package: rjm
name: architecture reviews
slug: architecture-reviews
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# architecture reviews

## Definition — verbatim
> "Covers architecture reviews, security assessments, and code quality evaluations through guided exploration, investigation planning, and synthesis." — .claude/skills/analyze/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 4 | defined here | Key analytical focus area covering structural relationships, dependencies, and layering. |

## Consumes
System architecture diagrams, package structures, module boundaries, and dependency declarations.

## Produces
Architectural evaluations, layer dependency violations, bounded context assessments, and structural remediation proposals.

## When applied
Invoked when prompt requests an architecture review, requiring a minimum of 6 analysis steps.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`architecture reviews` is one of the primary investigation tracks within `analyze`. It focuses specifically on structural cohesion, dependency direction, module boundaries, and architectural layering, deferring to `software-engineering-library` for bounded context and coupling principles.
