---
package: rjm
name: Anti-Pattern: Unreconciled Estimate Drift
slug: anti-pattern-unreconciled-estimate-drift
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anti-Pattern: Unreconciled Estimate Drift

## Definition — verbatim
> "### Anti-Pattern: Unreconciled Estimate Drift" — templates/agents/task-decomposer.shared.md:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/task-decomposer.shared.md | 254 | defined here | Anti-pattern definition illustrating silent effort expansion without explicit reconciliation. |

## Consumes
Divergent task estimates presented without reconciliation documentation.

## Produces
Recognition of planning defect and instruction to apply explicit reconciliation blocks.

## When applied
Referenced during task decomposition to guard against silent effort inflation.

## Sub-concepts
none

## Part of
task-decomposer-agent

## Implementation status
clean

## Design notes
An explicit planning anti-pattern warning against letting task breakdown totals exceed source epic estimates without documented justification or formal reconciliation.
