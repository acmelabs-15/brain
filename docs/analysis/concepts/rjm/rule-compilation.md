---
package: rjm
name: Rule Compilation
slug: rule-compilation
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

# Rule Compilation

## Definition — verbatim
> "2. Rule Compilation" — .claude/skills/style-enforcement/SKILL.md:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/SKILL.md | 163 | defined here | Step 2 of the style enforcement process matching globs to file extensions and building per-file rule sets. |

## Consumes
Discovered configuration hierarchy, glob patterns, and target file extensions.

## Produces
Resolved per-file active rule sets with merged inherited properties.

## When applied
Executed after configuration discovery to prepare applicable rules before scanning files.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, missing-path

## Design notes
Rule Compilation is a preprocessing technique in style enforcement that resolves glob patterns against target file paths and merges cascading configuration properties into a unified rule set per file.
