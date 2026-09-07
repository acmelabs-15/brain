---
package: rjm
name: Plugin-root env contract
slug: plugin-root-env-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plugin-root env contract

## Definition — verbatim
(used, not defined)

> "| Plugin-root env contract, Copilot CLI 1.0.57 |" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 12 | defined here | Documented in the provenance table as the environment variable fallback convention supporting Copilot and Claude runtimes. |

## Consumes
Environment variables `COPILOT_PLUGIN_ROOT` and `CLAUDE_PLUGIN_ROOT`.

## Produces
Normalized plugin root path string `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}`.

## When applied
Applied across all hook scripts, tool invocations, and documentation referencing skill paths.

## Sub-concepts
none

## Part of
ai-agents-empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
An environment resolution convention ensuring scripts and tools locate plugin assets consistently across Claude and Copilot CLI runtimes by standardizing on the `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` fallback pattern.
