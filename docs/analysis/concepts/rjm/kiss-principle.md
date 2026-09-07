---
package: rjm
name: KISS Principle
slug: kiss-principle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KISS Principle

## Definition — verbatim
> "Most systems work best if kept simple rather than made complicated." — .claude/skills/quality-grades/references/kiss-principle.md:9

## Also called — verbatim
> "Keep It Simple, Stupid" — .claude/skills/quality-grades/references/kiss-principle.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/kiss-principle.md | 7 | defined here | Document title and concept definition in the quality grades reference catalog. |

## Consumes
Architectural design proposals, code implementations, library dependencies.

## Produces
Simple, readable, maintainable software architectures free of unnecessary abstraction layers.

## When applied
Applied throughout software architecture design, feature implementation, and code quality audits.

## Sub-concepts
principles-of-simplicity, kiss-in-practice

## Part of
quality-grades

## Implementation status
defects: missing-path

## Design notes
Foundational design principle in rjm's quality reference catalog stating that systems work best when kept simple rather than complicated, preventing premature abstraction, framework bloat, and excessive cognitive overhead.
