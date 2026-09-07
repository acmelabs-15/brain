---
package: rjm
name: Skipping verification
slug: skipping-verification
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skipping verification

## Definition — verbatim
> "Quality gates exist for a reason" — .claude/skills/research-and-incorporate/SKILL.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 156 | defined here | Tabulated as an anti-pattern warning that skipping quality gate verification across workflow phases risks propagating unverified outputs. |

## Consumes
Unverified phase deliverables progressing through workflow transitions.

## Produces
Mandatory requirement to verify each phase against quality gates before proceeding to subsequent workflow steps.

## When applied
Checked at each phase gate of research-and-incorporate.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
Skipping verification is an operational anti-pattern where agents advance through workflow stages without validating that deliverables satisfy quality criteria, allowing defective outputs to compound downstream.
