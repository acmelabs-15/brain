---
package: rjm
name: --security-critical
slug: security-critical
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --security-critical

## Definition — verbatim
(used, not defined)

> "- MUST: Run each scenario a minimum of 5 times. Enforced by `--security-critical` flag in eval-prompt-change.py." — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 111 | defined here | Specification citing the CLI flag enforcing 5 runs and 100% pass rate on security evaluations. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 95 | used here | Recipe step instructing execution of security prompt comparisons with the `--security-critical` flag. |
| scripts/eval/eval-suite.py | 51 | defined here | Script constant and routing configuration mapping security paths to the 5-run, 100% pass threshold. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
security-critical-prompt-tier

## Implementation status
defects: missing-path

## Design notes
`--security-critical` is a command-line interface flag used by evaluation scripts (`eval-prompt-change.py`, `eval-suite.py`) to trigger strict 5-run repetition and 100% pass rate gating, classified as `name-only` per D-023.
