---
package: rjm
name: Recursive Failure
slug: recursive-failure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Recursive Failure

## Definition — verbatim
> "## Incident 4: #1989 Recursive Failure (the fix reproduced the disease)" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 133 | defined here | Chronicled as Incident 4, where tooling mitigations reproduced the exact behavioral failure modes they were created to solve. |

## Consumes
Retrospective action items proposing tooling fixes for behavioral lapses.

## Produces
Complex, uncalibrated, and self-defeating guard implementations.

## When applied
Analyzed when formulating corrective actions, guard specifications, and process governance rules.

## Sub-concepts
threshold-based-detectors

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
`Recursive Failure` names the phenomenon where an engineering team or autonomous agent builds mitigations for a failure mode, but executes the mitigation with the very same behavioral anti-patterns, reproducing the failure. It established rjm's requirement for guard self-application, source verification, and detector calibration.
