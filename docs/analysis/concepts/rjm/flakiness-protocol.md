---
package: rjm
name: Flakiness Protocol
slug: flakiness-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Flakiness Protocol

## Definition — verbatim
(used, not defined)

> "#### Flakiness Protocol" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 115 | defined here | Architectural protocol establishing multi-run repetition and 40% flakiness block thresholds. |
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 24 | used here | Provenance note listing ADR-057 flakiness protocol as a volatile specification to monitor. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 108 | used here | Caveat warning against single-run verdicts and mandating use of the ADR-057 flakiness protocol. |
| scripts/eval/eval-e2e-delivery.py | 19 | used here | Docstring example citing the 3-run flakiness protocol for live end-to-end evaluation execution. |
| scripts/eval/eval-knowledge-integration.py | 465 | used here | Function docstring stating score aggregation across multiple runs per the flakiness protocol. |
| scripts/eval/eval-prompt-change.py | 6 | defined here | Module docstring citing implementation of the ADR-057 flakiness protocol. |

## Consumes
Scenario test suites, repeated evaluation execution runs, and pass/fail observations.

## Produces
Aggregated scenario scores, flakiness rate calculations, and pass/fail/flaky status classifications.

## When applied
Applied whenever evaluating non-security prompt changes or running empirical probe evaluations across LLMs.

## Sub-concepts
default-runs, flakiness-block-threshold

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
An empirical evaluation protocol in rjm designed to distinguish true behavioral changes from non-deterministic LLM variance. It mandates running each test scenario a minimum of 3 times, passing a scenario if it succeeds in at least 2 of 3 runs, and blocking the acceptance gate if the overall flakiness rate on any scenario exceeds 40%.
