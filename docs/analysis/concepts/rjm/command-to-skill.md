---
package: rjm
name: command-to-skill
slug: command-to-skill
kind: technique
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# command-to-skill

## Definition — verbatim
> "transform: \"command-to-skill\"" — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 69 | used here | Cited as the build transformation rule declared in copilot-cli.yaml bridging Claude commands to Copilot skills. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 212 | defined here | Specified in build artifact configuration as the transformation converting slash command files into skills. |

## Consumes
Claude Code command markdown files (`.claude/commands/*.md`).

## Produces
Copilot CLI compatible skill markdown files (`src/copilot-cli/skills/<name>/SKILL.md`) with `user-invocable: true`.

## When applied
Executed by build generators during artifact synchronization and cross-harness package publishing.

## Sub-concepts
user-invocable

## Part of
multi-tool-artifact-build

## Implementation status
defects: missing-path, doc-drift

## Design notes
`command-to-skill` is an automated build transform in rjm's multi-tool build pipeline. Because Claude Code supports custom slash commands via markdown files in `.claude/commands/` while Copilot CLI requires skills in directory structures, this transform translates command files into fully compliant user-invocable skill structures, enabling cross-platform invocation from a single authored source.
