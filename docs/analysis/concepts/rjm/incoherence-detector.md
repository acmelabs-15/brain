---
package: rjm
name: Incoherence Detector
slug: incoherence-detector
kind: technique
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Incoherence Detector

## Definition — verbatim
> "Incoherence Detector - Step-based incoherence detection workflow" — scripts/incoherence.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 3 | defined here | Title and definition of the step-based workflow script. |

## Consumes
Codebase files (README, CLAUDE.md, docs/, src/, configs, tests) and step arguments `--step-number`, `--total-steps`, and `--thoughts`.

## Produces
Console workflow guidance prompts, an Incoherence Report markdown file, and reconciled codebase files.

## When applied
Applied when auditing doc-vs-code drift and cross-reference integrity across documentation and implementation code.

## Sub-concepts
detection-phase, reconciliation-phase, abstract-dimension-catalog, get-step-guidance

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
A multi-step, multi-agent protocol coordinating parent orchestrators and sub-agents (broad sweep explorers, deep-dive verifiers, and reconciliation agents) to discover and resolve contradictions between specifications, documentation, and implementation.
