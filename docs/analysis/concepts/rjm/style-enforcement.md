---
package: rjm
name: style-enforcement
slug: style-enforcement
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# style-enforcement

## Definition — verbatim
> "Validate code files against configured style rules from project configuration files." — .claude/skills/style-enforcement/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 262 | references | Listed as a complementary skill responsible for code style and formatting checks. |
| .claude/skills/prose-self-check/SKILL.md | 9 | references | Cited in scope exclusions as the designated tool for code formatting rather than prose audits. |
| .claude/skills/style-enforcement/scripts/check_style.py | 38 | defines | Regular expression pattern for recognizing `# style-enforcement: ignore` inline suppression comments. |
| .claude/skills/style-enforcement/SKILL.md | 2 | defines | Defines the automated code style validation skill, ruleset compiler, and enforcement gate. |
| .claude/skills/validation-authority/SKILL.md | 137 | applies | Linked as a related skill enforcing code style rules under validation authority governance. |

## Consumes
Code files across repository paths, `.editorconfig` rules, and staging area metadata.

## Produces
Console violation reports, structured `violations.json` summaries, SARIF security scan artifacts, and exit code verdicts.

## When applied
Applied during the build phase prior to commit submission, in pre-commit hooks, and in CI pull request pipelines.

## Sub-concepts
none

## Part of
rjm:build

## Implementation status
defects: doc-drift, missing-path, exit-code-mismatch, script-bug

## Design notes
An automated verification gate and skill in rjm that enforces uniform coding conventions (indentation, line endings, charset, trailing whitespace, and C# naming rules) derived from `.editorconfig`. It blocks non-compliant code before PR review, eliminating repetitive human reviewer feedback on style.
