---
package: rjm
name: Machine-checkable
slug: machine-checkable
kind: gate
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

# Machine-checkable

## Definition — verbatim
> "**Machine-checkable.** A schema, regex, named test, exit code, or" — .agents/architecture/ADR-065-orchestrator-as-router.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 70 | defined here | Defines the preferred success_criterion form that evaluates sub-agent completion via automated signals without LLM judgment. |

## Consumes
Sub-agent output, schema definitions, test suites, or command exit codes.

## Produces
Deterministic boolean verification signal.

## When applied
Applied during sub-agent evaluation whenever an objective machine signal (regex, schema, exit code, test) can verify task completion.

## Sub-concepts
none

## Part of
success_criterion

## Implementation status
defects: missing-path

## Design notes
A primary category of sub-agent completion criteria in ADR-065. Machine-checkable criteria evaluate task success through objective signals (schemas, regular expressions, exit codes, test passes) rather than subjective LLM appraisal, ensuring verification is reproducible and falsifiable.
