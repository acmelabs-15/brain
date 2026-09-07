---
package: rjm
name: Pre-Planning Review
slug: pre-planning-review
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Planning Review

## Definition — verbatim
(used, not defined)

> "- [ ] Assess feature fit against existing modules" — .claude/agents/architect.md:508

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 505 | defined here | Upfront architecture review checklist assessing feature fit, architectural risks, and pattern alignment before planning begins. |
| templates/agents/architect.shared.md | 674 | defined here | Upfront architecture review checklist assessing feature fit, architectural risks, and pattern alignment before planning begins. |

## Consumes
Initial feature proposals, issue descriptions, and existing module boundaries.

## Produces
Architectural risk assessment, technical debt implications, and pattern alignment verification.

## When applied
Conducted at the start of the development lifecycle before task decomposition or plan creation.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Pre-Planning Review provides an upfront architectural sanity check. By evaluating feature fit against existing modules, identifying structural risks, verifying pattern alignment, and flagging technical debt implications before a detailed plan is constructed, it prevents the planning of features that fundamentally clash with existing system architecture.
