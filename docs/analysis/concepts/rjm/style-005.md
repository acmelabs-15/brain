---
package: rjm
name: STYLE-005
slug: style-005
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
  - {path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md, sha256: 3b2ca37580d82af070bb89f7afeba53b0d1890f1652f9d0cf14ddd4e7b1f6106}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STYLE-005

## Definition — verbatim
> "Rule: STYLE-005" — .claude/skills/style-enforcement/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 113 | used here | Mapped to the newline at EOF standard in the style enforcement integration table. |
| .claude/skills/style-enforcement/scripts/check_style.py | 369 | defined here | Implemented in check_final_newline to flag files missing a terminal newline character. |
| .claude/skills/style-enforcement/SKILL.md | 136 | defined here | Defined as an info-level rule detecting missing final newlines when insert_final_newline is set. |

## Consumes
Target file content and `.editorconfig` `insert_final_newline` configuration.

## Produces
Style violation diagnostics for files missing a terminal newline character.

## When applied
During file scanning in style-enforcement execution or pre-submission gates in the build phase.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
STYLE-005 enforces terminal newline insertion at end-of-file, preventing noisy diffs on file append operations and ensuring compliance with POSIX text file standards.
