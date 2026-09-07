---
package: rjm
name: Feature
slug: feature
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Feature

## Definition — verbatim
> "| Feature | New capability, new module, or ambiguous requirements | /spec then /plan then the Standard chain |" — .claude/skills/autoplan/SKILL.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 107 | defined here | Defines the full-depth pipeline requiring /spec and /plan before invoking the Standard chain. |

## Consumes
New capability request, new module introduction, or ambiguous specifications.

## Produces
Formal specification and plan artifacts followed by standard build, test, review, and shipping.

## When applied
When work introduces new capabilities, architectural modules, or ambiguous requirements.

## Sub-concepts
none

## Part of
size

## Implementation status
clean

## Design notes
Feature is autoplan's highest-discipline sizing tier. When a request introduces novel capabilities, creates new system modules, or presents ambiguous requirements, the agent cannot jump directly to coding. Instead, it must first execute specification (/spec) and planning (/plan) gates before entering the standard build and review chain, ensuring architectural alignment and preventing costly mid-implementation rework.
