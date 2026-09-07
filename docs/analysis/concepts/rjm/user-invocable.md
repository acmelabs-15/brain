---
package: rjm
name: user-invocable
slug: user-invocable
kind: pattern
package_phase: cross-phase
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

# user-invocable

## Definition — verbatim
> "skill (`.claude/skills/<name>/SKILL.md` with `user-invocable: true`) fires as" — .agents/architecture/ADR-064-commands-to-skills-migration.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 33 | defined here | Defined as the frontmatter attribute enabling skills to be invoked natively as slash commands across harnesses. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 83 | used here | Specified in build decision D7 as the bridging mechanism transforming Claude commands into Copilot-compatible skills. |

## Consumes
Skill frontmatter configuration (`SKILL.md`).

## Produces
Native slash-command registration (`/<name>`) visible to users across both Claude Code and Copilot CLI harnesses.

## When applied
Configured in skill definitions that are intended to be directly triggered by human users rather than purely internal agent tools.

## Sub-concepts
none

## Part of
command-to-skill, cross-harness-parity

## Implementation status
defects: missing-path, doc-drift

## Design notes
`user-invocable` is a key metadata bridge in rjm's cross-harness architecture. While Claude Code historically distinguished between commands (`.claude/commands/`) and skills (`.claude/skills/`), GitHub Copilot CLI lacks native custom slash commands and instead exposes user-invocable skills. Adding `user-invocable: true` to a skill's frontmatter allows a single canonical skill authoring surface to generate working user-facing slash commands across all supported platforms.
