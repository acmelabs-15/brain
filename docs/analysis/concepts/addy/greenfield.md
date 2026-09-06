---
package: addy
name: Greenfield
slug: greenfield
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Greenfield

## Definition — verbatim
> "| Signal | Greenfield | Brownfield |" — docs/adoption-guide.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 11 | defines | Categorizes newly formed codebases where the full development lifecycle can be adopted immediately. |

## Consumes
New repository, zero legacy code, and completely controllable test coverage.

## Produces
Immediate day-one adoption of the full lifecycle (`/spec → /plan → /build → /review → /ship`).

## When applied
Selected when codebase age is days to weeks and risk of breaking existing behavior is low.

## Sub-concepts
full-lifecycle-immediately

## Part of
adoption-guide

## Implementation status
clean

## Design notes
Greenfield adoption represents the ideal deployment context for agent skills, where the complete sequence of lifecycle gates can be instituted from commit zero. Because there is no existing code or undocumented behavior to protect, rigorous quality gates prevent technical debt from accumulating.
