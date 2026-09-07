---
package: rjm
name: Build
slug: build
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Build

## Definition — verbatim
> "  DEFINE          PLAN           BUILD          VERIFY         REVIEW          SHIP" — README.md:306

## Also called — verbatim
> "2. **Build** generates platform-specific agent files from templates" — docs/architecture.md:10
> "| **Build** | Core capability + team capacity + favorable TCO. No viable vendors OR vendor lock-in unacceptable. Strategic capability development desired. |" — .claude/skills/buy-vs-build-framework/SKILL.md:183

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 15 | defined here | Decision matrix output option for core capabilities where building custom software is recommended. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 215 | defined here | Decision option definition in specification describing conditions favorable to internal development. |
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 117 | used here | Option key in score_decision.py calculating weighted scoring for custom development. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 183 | defined here | Recommendation table entry detailing conditions favoring in-house software creation. |
| docs/architecture.md | 10 | defined here | Architectural stage generating platform-specific agent definitions from markdown templates. |
| README.md | 306 | defined here | Third phase in rjm's primary six-phase software development lifecycle. |
| README.md | 311 | defined here | Slash command `/build` mapped to the Code/Impl lifecycle execution phase. |
| scripts/sync/detect_spec_drift.py | 4 | used here | Describes the forward development lifecycle path (`/spec` -> `/plan` -> `/build`). |

## Consumes
Approved specification, implementation plan, task breakdown, or sourcing decision.

## Produces
Working source code, unit tests, platform runtime artifacts, or internal capabilities.

## When applied
Executed during the development phase of the lifecycle via `/build`, or chosen when an evaluation recommends internal construction.

## Sub-concepts
slash-build

## Part of
lifecycle-pipeline

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A foundational concept in rjm with dual significance: it represents the primary code implementation phase (command `/build`) turning specifications into software, as well as the deliberate strategic decision outcome in the buy-vs-build framework to engineer a capability internally.
