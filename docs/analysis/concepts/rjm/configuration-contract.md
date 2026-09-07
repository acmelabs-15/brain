---
package: rjm
name: Configuration contract
slug: configuration-contract
kind: reference
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

# Configuration contract

## Definition — verbatim
> "### Configuration contract" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 44 | defined here | Subsection header tabulating official file paths, formats, wrappers, and fields for hook configuration. |

## Consumes
Platform hook definitions, JSON schemas, environment variables, and settings files.

## Produces
Authoritative mapping of hook configuration files across repository, user, plugin, and policy levels.

## When applied
Applied when configuring, generating, or validating hook registration files for Copilot CLI and Claude Code.

## Sub-concepts
plugin-root-variables

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The formal structural specification governing where and how hook manifests, file wrappers, command fields, and settings are defined across development environments in rjm.
