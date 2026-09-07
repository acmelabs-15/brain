---
package: rjm
name: Systematic Bug Hunter
slug: systematic-bug-hunter
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Systematic Bug Hunter

## Definition — verbatim
> "**Systematic Bug Hunter** for identifying, analyzing, and resolving application bugs. Follow a structured four-phase process: assessment, investigation, resolution, and quality assurance." — .claude/agents/debug.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 30 | defined here | Core identity statement defining the debug agent persona and four-phase methodology. |
| templates/agents/debug.shared.md | 38 | defined here | Core identity statement defining the debug agent across shared platform templates. |

## Consumes
Defect reports, stack traces, and application execution logs.

## Produces
Structured root cause determinations, test-verified bug fixes, and regression prevention reports.

## When applied
When an agent assumes the debug persona to investigate and resolve application defects.

## Sub-concepts
problem-assessment, investigation, resolution, quality-assurance

## Part of
debug

## Implementation status
clean

## Design notes
The core persona title and operational posture of the debug agent in rjm. It emphasizes method-driven diagnostic discipline over guesswork, requiring explicit progression through problem assessment, hypothesis-driven investigation, targeted resolution, and regression quality assurance.
