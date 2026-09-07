---
package: rjm
name: Portable Script Invocations
slug: portable-script-invocations
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Portable Script Invocations

## Definition — verbatim
> "## Portable Script Invocations (Required)" — docs/SKILL-AUTHORING.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 140 | used here | References the authoring guide rule for portable script invocations to ensure generated slash commands resolve script paths properly. |
| docs/SKILL-AUTHORING.md | 200 | defined here | Section heading introducing the mandatory requirement to resolve script roots via plugin-root environment variables. |

## Consumes
Script invocations and executable paths within skills and slash commands.

## Produces
Environment-variable-backed script execution commands resolving `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}`.

## When applied
Whenever a skill or slash command executes an external script located in a repository `scripts/` directory.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
Portable Script Invocations guarantee cross-harness execution compatibility across upstream repository checkouts, Claude Code plugins, and GitHub Copilot CLI installs by avoiding bare relative paths in favor of fallback environment variable resolutions.
