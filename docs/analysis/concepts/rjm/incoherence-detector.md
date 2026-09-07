---
package: rjm
name: Incoherence Detector
slug: incoherence-detector
kind: technique
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
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
