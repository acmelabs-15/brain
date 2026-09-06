---
package: addy
name: Rule of 500
slug: rule-of-500
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/code-simplification.md, sha256: 91567ad5289ace67907b96afacbbf6f462f776f6f74cd5b9ffc87e02148bbabf}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rule of 500

## Definition — verbatim
> "**The Rule of 500:** If a refactoring would touch more than 500 lines, invest in automation (codemods, sed scripts, AST transforms) rather than making the changes by hand." — skills/code-simplification/SKILL.md:171

## Also called — verbatim
> "the rule of 500" — external/code-review-and-quality.md:12
> "the Rule of 500" — external/code-simplification.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 12 | used here | Listed in code-simplification related skill card |
| external/code-simplification.md | 5 | used here | Summarized on landing page as a core principle for reducing complexity |
| external/performance-optimization.md | 12 | used here | Cited in code-simplification card in the Review phase grid |
| external/security-and-hardening.md | 12 | used here | Referenced under code-simplification in related skills |
| skills/code-simplification/SKILL.md | 171 | defined here | Defined in Step 3 of the simplification process |

## Consumes
Scope assessments for refactoring, codebase diff estimates.

## Produces
Decision to build automated tooling (codemods, AST transformations) rather than performing manual edits.

## When applied
When any refactoring or codebase simplification is projected to modify more than 500 lines.

## Sub-concepts
none

## Part of
`code-simplification`

## Implementation status
clean

## Design notes
The Rule of 500 sets a pragmatic threshold for automation: manual code refactorings exceeding 500 lines become exhausting to review and prone to human or agent error, necessitating programmatic transforms for safety and consistency.
