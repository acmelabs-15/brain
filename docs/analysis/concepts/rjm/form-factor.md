---
package: rjm
name: form-factor
slug: form-factor
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# form-factor

## Definition — verbatim
> "That is a **form-factor** comparison and requires a separate methodology with a third variant `skill` (parent reads `SKILL.md`, reasons inline, scored against the same fixtures)." — .agents/architecture/ADR-058-agent-eval-discipline.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 119 | defined here | Contrasts prompt content evaluation with form-factor comparisons between autonomous subagents and inline skills |

## Consumes
Evaluation content (prompts, instructions) and delivery vehicle definitions (agent vs skill vs command).

## Produces
Architectural choice between subagent dispatch and inline skill execution based on comparative evaluation.

## When applied
Applied when determining whether specialized instructions should be packaged as an autonomous subagent or an inline skill.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Form-factor distinguishes the structural packaging of prompt instructions (e.g. subagent dispatch with isolated context vs. inline skill read into the parent session) from the prompt content itself. In rjm's architecture, isolating form-factor from content efficacy ensures that teams do not incur subagent latency and isolation overhead when an inline skill would achieve equal recall at lower operational cost.
