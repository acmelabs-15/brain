---
package: rjm
name: Configuration Discovery
slug: configuration-discovery
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Configuration Discovery

## Definition — verbatim
> "1. Configuration Discovery" — .claude/skills/style-enforcement/SKILL.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/SKILL.md | 157 | defined here | Step 1 of the style enforcement process walking up from target to find root and parse configuration files. |

## Consumes
Target directory or file path and filesystem hierarchy.

## Produces
Discovered and parsed configuration file hierarchy (.editorconfig, and nominally .stylecop.json, Directory.Build.props).

## When applied
Executed as the initial step of style enforcement before rule compilation and scanning.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, missing-path

## Design notes
Configuration Discovery is a preparatory technique in style enforcement that traverses directory trees upward from a target file or folder to find root boundary declarations and assemble the active configuration hierarchy.
