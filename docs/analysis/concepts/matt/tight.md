---
package: matt
name: tight
slug: tight
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tight

## Definition — verbatim
> "It will not let the agent form a theory until a **tight** feedback loop exists: one named command, already run once, that goes red on *this* bug and green when it is fixed." — docs/engineering/diagnosing-bugs.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 5 | defined here | Defined as the essential quality of the Phase 1 feedback loop (fast, deterministic, sharp, unattended). |

## Consumes
A defect reproduction command or script.

## Produces
A fast, deterministic pass/fail signal that runs in seconds and halts speculation.

## When applied
When constructing feedback loops in Phase 1 of bug diagnosis before forming hypotheses.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in concept definition; associated with skill usability defects in docs/engineering/diagnosing-bugs.md:59 (over-triggering on low-activation models when attempting to build formal tight loops for simple questions)

## Design notes
A leading word and core operational criterion for feedback loops in Matt's lifecycle: feedback must be fast (seconds), deterministic (identical verdict every run), sharp (asserts exact symptom), and runnable by an agent unattended. It prevents agents from guessing before a true signal exists.
