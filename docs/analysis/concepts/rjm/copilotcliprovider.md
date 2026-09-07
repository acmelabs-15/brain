---
package: rjm
name: _CopilotCLIProvider
slug: copilotcliprovider
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _CopilotCLIProvider

## Definition — verbatim
(used, not defined)

> "__all__ = [\"_CopilotCLIProvider\"]" — scripts/eval/_copilot_cli.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 213 | used here | Cited as the provider implementation class that folds system instructions into user prompts due to Copilot CLI lacking a system channel. |
| scripts/eval/_copilot_cli.py | 39 | defined here | Exported class implementing evaluation transport over the GitHub Copilot CLI executable. |

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
`_CopilotCLIProvider` is a Python class identifier implementing the evaluation transport provider that executes prompts against GitHub Copilot CLI session subprocesses, classified as `kind: name-only` per D-023.
