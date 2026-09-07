---
package: matt
name: human checkpoint
slug: human-checkpoint
kind: gate
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

# human checkpoint

## Definition — verbatim
> "Only Phase 3 has a human checkpoint: the ranked hypothesis list is shown to you before any is tested, and it proceeds on its own ranking if you are away." — external/diagnosing-bugs.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 57 | defined here | Explains the sole human checkpoint in diagnosing-bugs where the user is presented with ranked hypotheses before testing. |

## Consumes
A ranked hypothesis list generated during Phase 3.

## Produces
Human confirmation or re-ranking of hypotheses, or autonomous fallback if unattended.

## When applied
At the boundary between Phase 3 (hypothesis generation) and Phase 4 (hypothesis testing).

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-3

## Implementation status
clean

## Design notes
The human checkpoint provides an interactive review pause where an agent presents ranked hypotheses to the human operator before executing diagnostic probes. If the human is absent, the agent proceeds autonomously based on its own ranked predictions.
