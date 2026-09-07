---
package: rjm
name: retry policy
slug: retry-policy
kind: pattern
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

# retry policy

## Definition — verbatim
> "The orchestrator is a deterministic router with a retry policy. It is not a" — .agents/architecture/ADR-065-orchestrator-as-router.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 58 | defined here | Mandates that sub-agent failure retries must be programmatic (N=3) in code rather than prompt-based, embedding failure feedback. |

## Consumes
Failed sub-agent evaluation output from success_criterion.

## Produces
Sub-agent reinvocation with embedded failure context or visible CI failure upon exhaustion.

## When applied
Triggered automatically when a sub-agent fails its declared success_criterion evaluation.

## Sub-concepts
none

## Part of
deterministic-router, orchestration-architecture

## Implementation status
defects: missing-path

## Design notes
ADR-065 Rule 4 mandates that retry behavior live in code rather than prompt text. By executing bounded programmatic retries (default N=3) and injecting the exact failure signal from success_criterion into the next turn's context, it prevents silent fallback to best-effort and makes retry exhaustion fail visibly.
