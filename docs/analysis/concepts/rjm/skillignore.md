---
package: rjm
name: .skillignore
slug: skillignore
kind: artifact
package_phase: rjm:Phase 4: Packaging
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/package_skill.py, sha256: 15c5c247f958c4d329d4b440559b118ee80423c7a239dff7654ca753b0a324d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# .skillignore

## Definition — verbatim
> "Load .skillignore patterns from a skill directory." — .claude/skills/skillforge/scripts/package_skill.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/package_skill.py | 33 | defined here | Configuration file defining glob patterns for files and directories to exclude during skill packaging. |

## Consumes
Line-delimited ignore patterns and comments within a skill directory.

## Produces
Exclusion rules applied by `is_ignored()` to filter file paths during `.skill` packaging.

## When applied
Read by `load_skillignore()` during skill packaging to prevent unwanted development or sensitive files from entering archives.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, exit-code-mismatch

## Design notes
Configuration artifact defining glob-based exclusion patterns for skill archives. Analogous to `.gitignore`, it ensures private credentials, build artifacts, and test scratch directories are excluded from distributable `.skill` bundles.
