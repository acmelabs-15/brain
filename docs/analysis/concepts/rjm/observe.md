---
package: rjm
name: observe
slug: observe
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# observe

## Definition — verbatim
> "Observe | Gather information | What's happening? What data do we have?" — .claude/skills/analyze/references/strategy-ooda-loop.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 409 | defined here | Hook dispatcher mode running every registered shim and logging non-zero exits without halting siblings |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 319 | defined here | Build requirement specifying observe mode for consolidatable event shims |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 17 | defined here | Initial phase of the OODA loop focused on gathering factual information |
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 16 | defined here | Step 4 of chaos engineering principles comparing actual versus expected behavior |
| .claude/skills/planner/references/strategy-ooda-loop.md | 17 | defined here | Information-gathering stage in strategy OODA loop reference |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 17 | defined here | Situational observation step during pre-mortem analysis |
| .claude/skills/retrospective/references/frameworks.md | 20 | defined here | First retrospective phase capturing raw facts, tool calls, and outputs |

## Consumes
System telemetry, tool outputs, execution logs, and environment state.

## Produces
Empirical observations, collected telemetry, and objective evidence for analysis.

## When applied
Triggered during problem orientation (OODA loop), post-experiment observation, retrospective analysis, or post-tool execution monitoring.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
In rjm, observe operates as both a cognitive discipline (gathering empirical facts before forming interpretations in OODA and retrospective loops) and an architectural execution mode (non-blocking hook shims executing to collect diagnostic telemetry without interrupting execution).
