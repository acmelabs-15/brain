---
package: rjm
name: Plugin-root variables
slug: plugin-root-variables
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plugin-root variables

## Definition — verbatim
> "### Plugin-root variables" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:304

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 304 | defined here | Subsection header documenting PLUGIN_ROOT, COPILOT_PLUGIN_ROOT, and CLAUDE_PLUGIN_ROOT environment variables. |

## Consumes
Plugin installation directories and harness runtime environment injection.

## Produces
Stable, environment-independent filesystem paths to plugin-internal scripts and resources.

## When applied
Referenced in hook scripts and command templates to locate files regardless of the caller's working directory.

## Sub-concepts
none

## Part of
configuration-contract

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Environment variables (PLUGIN_ROOT, COPILOT_PLUGIN_ROOT, CLAUDE_PLUGIN_ROOT) exported by modern harnesses to allow hook commands to resolve internal scripts reliably when executed from foreign working directories.
