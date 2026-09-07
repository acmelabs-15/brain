---
package: rjm
name: Copilot CLI plugin-root env contract
slug: copilot-cli-plugin-root-env-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Copilot CLI plugin-root env contract

## Definition — verbatim
> "SETTLED EMPIRICALLY (CLI 1.0.57, probe + env dump): `COPILOT_PLUGIN_ROOT`, `CLAUDE_PLUGIN_ROOT`, and bare `PLUGIN_ROOT` are all set, though the public docs list none of them." — .claude/skills/ai-agents-failure-archaeology/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 65 | defined here | Settled Battles List entry defining the empirical environment variable contract for Copilot CLI plugin roots. |

## Consumes
Copilot CLI hook execution environments and plugin installation directories.

## Produces
Resilient script anchor paths using `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT}}` across hook definitions.

## When applied
Applied when generating hook scripts and configuring command paths for Copilot CLI.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
The `Copilot CLI plugin-root env contract` defines the discovered environment variables that point to a plugin's installation directory in GitHub Copilot CLI. Although omitted from public documentation, empirical probing revealed `COPILOT_PLUGIN_ROOT`, `CLAUDE_PLUGIN_ROOT`, and `PLUGIN_ROOT`, establishing the canonical fallback expression used across rjm hooks.
