---
package: matt
name: Phase 3
slug: phase-3
kind: phase
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3

## Definition — verbatim
> "Into Phase 3</td><td>The repro is reproduced <em class="ah-prose-em">and</em> minimised: every remaining element is load-bearing" — external/diagnosing-bugs.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 49 | defined here | Specifies the gate requirements and entry criteria for Phase 3 (minimisation and hypothesis generation). |

## Consumes
A confirmed reproducible defect signal and a red-capable command from Phase 2.

## Produces
A minimised reproduction where every remaining element is verified as load-bearing, and a ranked list of 3–5 falsifiable hypotheses.

## When applied
During bug diagnosis immediately after establishing a reliable, automated pass/fail reproducer in Phase 2.

## Sub-concepts
load-bearing, human-checkpoint

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Phase 3 isolates the core mechanics of a defect by minimizing the reproduction until every remaining line, argument, or input is strictly load-bearing. It requires formulating 3 to 5 ranked, falsifiable hypotheses presented to the user at a human checkpoint before any diagnostic probes or fixes are attempted.
