---
package: addy
name: Vertical
slug: vertical
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Vertical

## Definition — verbatim
> "| **Vertical** | Break into smaller full-stack slices of the feature | Feature work |" — skills/code-review-and-quality/SKILL.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 124 | defined here | Change splitting strategy breaking large features into end-to-end full-stack vertical slices |

## Consumes
Large feature requirements with multiple user actions or endpoints.

## Produces
Self-contained vertical slices linking frontend, backend, and data persistence for single sub-actions.

## When applied
When developing substantial user-facing features that can be partitioned into thin, functional end-to-end paths.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Vertical is a splitting technique that cuts through the entire software stack to deliver a thin, fully-functional slice of a feature. Rather than building all backend endpoints followed by all frontend screens, vertical slices keep changes small, integrated, and testable end-to-end.
