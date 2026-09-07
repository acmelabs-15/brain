---
package: matt
name: Claude Code
slug: claude-code
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: scripts/link-skills.sh, sha256: f1ffdc620769e7703d4d6365b05b981e01175bfabd92e0f8e17b05301805cabe}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Code

## Definition — verbatim
(used, not defined)

> "Claude Code already resolves conflicts pretty well on its own. Why does this need a skill?" — external/resolving-merge-conflicts.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 35 | used here | Discussed in FAQ explaining why Claude Code benefits from structured conflict resolution skills. |
| scripts/link-skills.sh | 10 | used here | Identifies the local harness destination directory `~/.claude/skills` for Claude Code. |
| skills/productivity/README.md | 7 | used here | Explains skill configuration in Claude Code using `disable-model-invocation: true`. |

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
defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30)

## Design notes
An external AI coding assistant and agent harness developed by Anthropic, classified as name-only because it is a host runtime environment rather than an authored development lifecycle concept.
