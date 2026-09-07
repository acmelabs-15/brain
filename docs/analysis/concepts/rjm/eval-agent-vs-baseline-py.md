---
package: rjm
name: eval-agent-vs-baseline.py
slug: eval-agent-vs-baseline-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-agent-vs-baseline.py

## Definition — verbatim
(used, not defined)

> "The harness supports this via `scripts/eval/eval-agent-vs-baseline.py --include-skill --skill-path <SKILL.md>` (issue #1875)." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 47 | used here | Cited as the execution CLI supporting three-variant evaluation. |
| scripts/eval/eval-model-panel.py | 5 | used here | Invoked by model panel sweep CLI once per unit and tier. |
| scripts/eval/eval-model-sweep.py | 11 | used here | Subprocess runner invoked by model sweep orchestrator. |
| scripts/eval/variance-control.py | 45 | used here | Referenced for mirroring output shape suffix contract. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction, missing-path, doc-drift

## Design notes
A script file name and CLI harness path used throughout rjm's evaluation toolchain to execute comparative agent evaluations against baselines.
