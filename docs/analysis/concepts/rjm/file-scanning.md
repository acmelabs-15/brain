---
package: rjm
name: File Scanning
slug: file-scanning
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

# File Scanning

## Definition — verbatim
> "3. File Scanning" — .claude/skills/style-enforcement/SKILL.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/SKILL.md | 168 | defined here | Step 3 of the style enforcement process checking each file against rules, detecting violations, and filtering suppressions. |

## Consumes
Target source files on disk or in git staged changes, and compiled per-file rule sets.

## Produces
Detected style violation records with file, line number, rule identifier, and suppression status.

## When applied
Executed after rule compilation to scan source files before generating reports.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, missing-path

## Design notes
File Scanning is the primary evaluation technique in style enforcement that iterates through target code files to detect formatting and naming violations while respecting in-file suppression comments.
