---
package: rjm
name: Copilot Plugin Runtime Fields
slug: copilot-plugin-runtime-fields
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Copilot Plugin Runtime Fields

## Definition — verbatim
> "Current official hook docs define `cwd` relative to the repository root or as an absolute path. Do not assume the plugin directory from `cwd`." — .claude/skills/agent-harness-reference/SKILL.md:177-178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 175 | defines | Documents runtime environment variables and execution working directories provided by Copilot CLI. |

## Consumes
Host process execution environment, process working directory (`cwd`), and exported plugin environment variables.

## Produces
Resolved absolute file paths for plugin scripts, shared libraries, and configuration files.

## When applied
Applied when resolving script paths and loading shared libraries within Copilot CLI hooks.

## Sub-concepts
stale-plugin-root-wedges-a-running-session

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
A technical reference in rjm documenting how environment variables (`PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT`) and `cwd` are populated by Copilot CLI during hook invocation. Misunderstanding these fields leads to broken path lookups and failed launcher scripts when executing outside repository roots.
