---
package: rjm
name: Claude Opus 5
slug: claude-opus-5
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Claude Opus 5

## Definition — verbatim
(used, not defined)

> "### Claude Opus 5" — .claude/skills/context-optimizer/references/model-context-doctrine.md:150

## Also called — verbatim
`claude-opus-5` — scripts/eval/panels/owner-copilot-cli.json:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 150 | used here | Section heading discussing model-specific prompt minimization levers for Claude Opus 5. |
| scripts/eval/panels/owner-copilot-cli.json | 20 | defined here | Specified as the reference evaluation tier model identifier under Copilot CLI. |

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
An external foundation model identifier designating Anthropic's Claude Opus 5 model, evaluated in Copilot CLI panels and referenced for prompt minimization behavior, rather than an internal lifecycle concept.
