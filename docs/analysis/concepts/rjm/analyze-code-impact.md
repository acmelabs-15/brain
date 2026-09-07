---
package: rjm
name: Analyze Code Impact
slug: analyze-code-impact
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analyze Code Impact

## Definition — verbatim
> "### Analyze Code Impact" — .claude/agents/implementer.md:358

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 358 | defined here | Sub-section checklist outlining impact analysis steps when requested by milestone-planner. |

## Consumes
A proposed task or feature request and the existing codebase repository.

## Produces
An impact analysis checklist mapping files requiring changes, existing patterns, tests to add, and risks.

## When applied
When milestone-planner requests an impact evaluation prior to code implementation.

## Sub-concepts
none

## Part of
implementation-process

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Analyze Code Impact establishes a pre-coding analysis protocol for implementer agents in rjm. By systematically identifying affected files, reusable helpers, and potential breaking changes before writing code, it prevents scope creep and unexpected downstream breakages.
