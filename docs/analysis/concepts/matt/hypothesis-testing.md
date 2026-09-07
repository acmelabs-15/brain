---
package: matt
name: hypothesis-testing
slug: hypothesis-testing
kind: technique
package_phase: matt:Upkeep
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

# hypothesis-testing

## Definition — verbatim
(used, not defined)
> "Everything after it (bisection, hypothesis-testing, instrumentation) is mechanical once the signal exists." — external/diagnosing-bugs.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 26 | used here | Identified as one of the downstream mechanical phases unlocked only after a tight red feedback loop exists. |

## Consumes
A deterministic, automated red-green reproduction loop (tight feedback loop).

## Produces
Ranked list of 3–5 falsifiable hypotheses with explicit predictions tested via targeted probes and instrumentation.

## When applied
Only after Phase 1 has established an automated red-capable feedback command:
> "Everything after it (bisection, hypothesis-testing, instrumentation) is mechanical once the signal exists." — external/diagnosing-bugs.md:26

## Sub-concepts
six-phase-diagnosis, feedback-loop

## Part of
diagnosing-bugs

## Implementation status
defects: doc-drift

## Design notes
A structured inquiry technique in diagnosing-bugs where the agent generates 3–5 ranked, falsifiable explanations for a defect only after an automated reproduction command exists. Hypotheses make explicit predictions tested through minimal probes and temporary instrumentation, preventing speculative code changes until root causes are confirmed.
