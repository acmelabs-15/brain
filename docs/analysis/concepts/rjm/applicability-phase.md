---
package: rjm
name: Applicability Phase
slug: applicability-phase
kind: phase
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Applicability Phase

## Definition — verbatim
> "3. **Applicability Phase**: Map integration points with ai-agents project" — .claude/commands/research.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 49 | defined here | Third phase in `/research`, connecting external discoveries directly to the codebase's specific architectural needs. |

## Consumes
Completed analysis document and codebase architecture specifications.

## Produces
Concrete mapping of integration points, affected components, and feasibility assessments.

## When applied
Executed after drafting the analysis document to ground general findings in project reality.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
A bridging phase that prevents research from remaining purely academic. It forces the investigating agent to evaluate exactly how the external knowledge applies to the host system, identifying concrete touchpoints, constraints, and prerequisites before any implementation work is proposed.
