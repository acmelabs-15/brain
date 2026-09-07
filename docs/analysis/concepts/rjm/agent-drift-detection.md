---
package: rjm
name: Agent Drift Detection
slug: agent-drift-detection
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/drift-detection.yml, sha256: 7967e29a891baf74a8bb2f7f9b4390663104cae39ab3baaa44b3fcda04f1cbdc}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Drift Detection

## Definition — verbatim
> "name: Agent Drift Detection" — .github/workflows/drift-detection.yml:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/drift-detection.yml | 10 | defined here | Workflow name for the scheduled weekly CI workflow detecting drift between agents and templates. |
| scripts/validation/pre_pr_sequence.py | 366 | defined here | Registered gate in the pre-PR verification sequence running validate_agent_drift. |

## Consumes
Claude agent definitions (`.claude/agents/`) and shared agent templates (`templates/agents/`).

## Produces
Drift validation verdict and automated GitHub issue reporting when drift is detected.

## When applied
Runs weekly on schedule via GitHub Actions cron, on manual workflow dispatch, and during pre-PR gate sequence validation.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Agent Drift Detection is an automated quality gate in rjm ensuring that deployed agent definitions remain in parity with their shared generative templates, preventing out-of-band manual edits from creating unmaintained divergence.
