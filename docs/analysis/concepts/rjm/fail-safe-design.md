---
package: rjm
name: Fail-Safe Design
slug: fail-safe-design
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fail-Safe Design

## Definition — verbatim
> "Missing defensive patterns | No fallbacks, unhandled edge cases" — .claude/skills/retrospective/references/diagnosis-and-actions.md:256

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 256 | defined here | Standard root cause category defined as missing defensive patterns such as lack of fallbacks and unhandled edge cases. |

## Consumes
Diagnostic post-mortem analysis of failures caused by missing defenses or unhandled edge cases.

## Produces
Root cause entity classification (`rootcause-fail-safe-design-{nnn}`) driving the authoring of defensive prevention skills.

## When applied
Applied during Root Cause Pattern Management in retrospective analysis following Five Whys investigation.

## Sub-concepts
none

## Part of
root-cause-categories, root-cause-pattern-management

## Implementation status
clean

## Design notes
Fail-Safe Design is a standardized root cause failure category in retrospective analysis designating defects where components lack defensive fallbacks, degrade catastrophically on unexpected inputs, or fail to handle boundary conditions safely.
