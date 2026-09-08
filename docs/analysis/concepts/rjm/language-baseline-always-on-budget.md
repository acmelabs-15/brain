---
package: rjm
name: language-baseline always-on budget
slug: language-baseline-always-on-budget
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# language-baseline always-on budget

## Definition — verbatim
> "This validator computes the *language-baseline always-on budget*: the summed bytes of instruction files whose ``applyTo`` includes a language-universal pattern (``**``, ``**/*``, or ``**/*.<ext>``) for a representative extension." — scripts/validation/instruction_budget.py:12-14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/instruction_budget.py | 12 | defines | Defined in module docstring as the metric calculating cumulative bytes of instruction files matching universal language patterns. |

## Consumes
Instruction files matching `*.instructions.md` located under `.github/instructions/`.

## Produces
Cumulative byte measurements, token estimates, and ceiling compliance evaluations per language extension.

## When applied
Evaluated in validation pipelines and CI checks to gate instruction corpus expansion.

## Sub-concepts
none

## Part of
instruction-budget

## Implementation status
clean

## Design notes
The language-baseline always-on budget measures the baseline token and byte overhead introduced whenever editing source files of a given language. Because language-universal instructions are unconditionally loaded into agent context, untracked additions degrade model reasoning capacity and induce instruction omission. This budget provides an auditable, reproducible threshold to arrest context bloat.
