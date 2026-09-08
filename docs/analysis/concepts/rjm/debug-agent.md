---
package: rjm
name: Debug Agent
slug: debug-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Debug Agent

## Definition — verbatim
> "**Systematic Bug Hunter** for identifying, analyzing, and resolving application bugs. Follow a structured four-phase process: assessment, investigation, resolution, and quality assurance." — templates/agents/debug.shared.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/debug.shared.md | 17 | defines | Executor agent role definition for systematic root-cause analysis and defect resolution. |

## Consumes
Bug descriptions, error traces, failure logs, and unexpected behavior reports.

## Produces
Diagnosed root causes, minimal verified code fixes, regression tests, and handoff reports.

## When applied
Invoked when bugs, test failures, or runtime regressions occur and require systematic investigation and resolution.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A specialized executor agent role that follows an evidence-based four-phase debugging protocol to isolate, reproduce, fix, and verify software defects.
