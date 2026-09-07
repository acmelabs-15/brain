---
package: rjm
name: production
slug: production
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# production

## Definition — verbatim
> "production" — .claude/skills/code-qualities-assessment/scripts/assess.py:380

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 380 | defined here | CLI context option specifying production code context and enforcing default strict quality thresholds. |

## Consumes
Source files intended for deployment to production environments.

## Produces
Enforcement of default baseline quality thresholds (e.g. cohesion 7, coupling 7, encapsulation 7, non-redundancy 8).

## When applied
Default evaluation context applied to all standard application source files during code qualities assessment.

## Sub-concepts
none

## Part of
quality-scoring

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
`production` defines the operational context for runtime code destined for deployment in production environments. Within rjm's code qualities assessment tool, the `production` context sets the strictest baseline thresholds for maintainability, requiring full cohesion, tight encapsulation, and low coupling. Differentiating `production` from `test` and `generated` contexts ensures that production assets maintain high engineering standards while test scaffolding can remain flexible.
