---
package: rjm
name: --dry-run
slug: dry-run
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
  - {path: scripts/migrations/req003_inline_plugin_root_bootstrap.py, sha256: 4a43689e9d9d33639adc7633b1d2b64661a05d5f7ff3fa1145306f30718612b3}
  - {path: scripts/normalize_line_endings.py, sha256: 3d66a3ba4fefcb0c7308eb253b3e9432968e507b169a042ab0e45437e454059f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# --dry-run

## Definition — verbatim
(used, not defined)

> "`--dry-run` validates inputs and makes no API calls" — .claude/skills/ai-agents-research-methodology/SKILL.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 83 | used here | Explains that `--dry-run` validates inputs with zero API spend before paid runs. |
| scripts/ci/artifact_write_summary.py | 10 | used here | Documented in script docstring as flag for verifying artifact operations without writes. |
| scripts/eval/eval-e2e-delivery.py | 159 | defined here | Defined in argparse CLI flags to run end-to-end evaluation without issuing LLM queries. |
| scripts/eval/eval-knowledge-integration.py | 515 | defined here | Defined in argparse CLI options to validate knowledge prompts without invoking models. |
| scripts/eval/eval-prompt-change.py | 793 | defined here | Defined in CLI argument parser as zero-spend fixture and prompt validation option. |
| scripts/eval/eval-suite.py | 26 | used here | Cited in docstring describing how the suite forwards dry-run execution to sub-evals. |
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 84 | defined here | Defined in migration script parser to preview file changes without disk writes. |
| scripts/normalize_line_endings.py | 71 | defined here \| used here | Defined in argument parser and used to preview line ending normalizations. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`--dry-run` is a standard command-line argument flag implemented across evaluation harnesses, migration utilities, and maintenance scripts rather than an independent lifecycle concept. It provides zero-spend validation and non-destructive previews across rjm tooling by ensuring scenarios, prompt templates, and input paths are verified before executing live API requests or disk modifications.
