---
package: rjm
name: Critic Validation
slug: critic-validation
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critic Validation

## Definition — verbatim
> "Critic MUST review before implementation when:" — .agents/AGENT-SYSTEM.md:1645

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1643 | defines | Pre-implementation quality gate defining mandatory review conditions, validation checklist, and approval outcomes. |

## Consumes
Implementation plans, architecture proposals, task specifications, and requirements acceptance criteria.

## Produces
A review verdict: APPROVED, REJECTED, or NEEDS WORK.

## When applied
> "Critic MUST review before implementation when:" — .agents/AGENT-SYSTEM.md:1645

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A mandatory pre-implementation quality gate invoked whenever changes introduce new architectural patterns, modify more than 5 files, affect security-sensitive paths, or alter public APIs. The critic agent evaluates requirements alignment, dependency identification, risk documentation, testability of acceptance criteria, and estimation reasonableness before implementation begins.
