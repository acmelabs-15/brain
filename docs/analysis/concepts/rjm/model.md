---
package: rjm
name: model
slug: model
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# model

## Definition — verbatim
> "MODEL = \"claude-sonnet-4-6\"" — scripts/eval/eval_skill_router.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 36 | used here | Analyzed as a frontmatter field affected by Copilot CLI 0.0.398+ validation regressions. |
| scripts/eval/eval_skill_router.py | 73 | defined here | Constant binding the specific LLM model version used for evaluation tests. |
| scripts/eval/panels/owner-copilot-cli.json | 20 | defined here | JSON configuration field specifying the target evaluation model for the copilot-cli panel. |

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
defects: missing-path, doc-drift, orphan

## Design notes
A frontmatter and configuration parameter designating the underlying large language model identifier for an agent or eval panel rather than an agent lifecycle concept per D-023.
