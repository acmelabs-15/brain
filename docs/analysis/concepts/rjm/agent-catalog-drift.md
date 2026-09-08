---
package: rjm
name: Agent Catalog Drift
slug: agent-catalog-drift
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Agent Catalog Drift

## Definition — verbatim
> "Agent Catalog Drift" — scripts/validation/pre_pr_sequence.py:328

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 328 | defined here | Pre-PR gate verifying alignment between docs/agent-catalog.md and agent template definitions. |

## Consumes
Human-facing agent catalog documentation and agent templates under templates/agents/.

## Produces
Pass/fail gate verdict detecting documentation drift between templates and catalog entries.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Agent Catalog Drift is a documentation alignment gate (Issue #1904) comparing docs/agent-catalog.md against template definitions in templates/agents/. It ensures that newly created, deleted, or modified agents are promptly updated in catalog documentation.
