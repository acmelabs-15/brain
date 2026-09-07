---
package: matt
name: Phase 2
slug: phase-2
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

# Phase 2

## Definition — verbatim
> "Into Phase 2</td><td>A named command, already run and pasted with its output, that can go red on this bug" — external/diagnosing-bugs.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 49 | defined here | Specifies the gate requirements and entry criteria for Phase 2 (minimization). |

## Consumes
A validated, red-capable command from Phase 1.

## Produces
A minimised reproduction case where every remaining element is verified as load-bearing.

## When applied
Immediately after constructing and confirming a tight, automated pass/fail reproduction in Phase 1.

## Sub-concepts
load-bearing

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Phase 2 is the minimization stage of bug diagnosis. It demands stripping away all extraneous code, flags, and data until only the strictly load-bearing components of the defect remain, preventing wasted effort on incidental complexity.
