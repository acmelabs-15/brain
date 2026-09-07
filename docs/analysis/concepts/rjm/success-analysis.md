---
package: rjm
name: Success Analysis
slug: success-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Success Analysis

## Definition — verbatim
> "Strategies that contributed to outcomes" — .claude/skills/retrospective/references/diagnosis-and-actions.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 88 | defined here | Diagnostic category evaluating strategies that contributed to successful outcomes. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 18 | defined here | Priority 2 diagnostic category focusing on high-value patterns to replicate. |

## Consumes
Successful execution traces, high-quality test completions, and effective prompting strategies.

## Produces
Replicable procedural strategies and positive patterns formulated for skillbook storage.

## When applied
Evaluated as second priority in Phase 2 of retrospective diagnosis.

## Sub-concepts
none

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Success Analysis ensures that retrospectives do not solely focus on negative debugging. By diagnosing what went exceptionally well and extracting the underlying mechanisms, it turns accidental wins into repeatable institutional strategies.
