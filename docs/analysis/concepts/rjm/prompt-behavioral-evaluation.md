---
package: rjm
name: prompt behavioral evaluation
slug: prompt-behavioral-evaluation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prompt behavioral evaluation

## Definition — verbatim
(used, not defined)

> "- ADR-057 (prompt behavioral evaluation): adjacent. Evaluations test whether" — .agents/architecture/ADR-065-orchestrator-as-router.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 110 | used here | Cited in Prior Art as the evaluation methodology testing whether prompts behave as claimed. |

## Consumes
Agent prompt templates, task definitions, and fixed scenario suites.

## Produces
Empirical evaluation metrics and regression detection scores across prompt revisions.

## When applied
Applied during evaluation sweeps and CI gating when updating agent prompts or system instructions.

## Sub-concepts
none

## Part of
eval-harness

## Implementation status
defects: missing-path

## Design notes
An evaluation technique established in ADR-057 and referenced in ADR-065 that tests whether prompts reliably induce claimed behaviors across repeated runs and model versions, preventing behavioral regressions in multi-agent workflows.
