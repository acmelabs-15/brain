---
package: rjm
name: Traceability Metrics
slug: traceability-metrics
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Traceability Metrics

## Definition — verbatim
> "### Traceability Metrics" — .claude/skills/retrospective/references/diagnosis-and-actions.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 24 | defined here | Section specifying the metrics and validation script for assessing specification layer coherence. |
| templates/agents/retrospective.shared.md | 488 | defined here | Retrospective agent specification declaring the evaluation of specification layer coherence metrics. |

## Consumes
Specification artifacts (requirements, designs, tasks) and traceability graph script outputs.

## Produces
Traceability Health report capturing metric counts, blocking errors, and non-blocking warnings.

## When applied
When the session involves specification artifacts (requirements, designs, tasks), evaluate spec layer health.

## Sub-concepts
valid-chains, orphaned-reqs, orphaned-designs, broken-references, untraced-tasks

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Traceability Metrics provides quantitative measurements of specification-layer integrity—tracking whether requirements link to designs and designs link to tasks—to detect specification drift, broken references, or unlinked execution tasks during retrospective analysis.
