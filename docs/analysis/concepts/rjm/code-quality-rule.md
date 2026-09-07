---
package: rjm
name: code-quality rule
slug: code-quality-rule
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# code-quality rule

## Definition — verbatim
(used, not defined)

> "If none of these holds, you are working in well-tested code. Use the normal code-quality rule and skip the techniques below." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 18 | used here | Cited as the baseline guideline for code modifications when files have adequate test coverage and no legacy risk factors. |

## Consumes
Well-tested source files, existing automated test suites, and routine feature modification requests.

## Produces
Standard code edits, idiomatic refactorings, and routine pull request contributions.

## When applied
Applied during standard development when files satisfy coverage floors and lack legacy risks.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
The baseline standard in rjm for modifying well-tested software that satisfies repository coverage floors. It directs developers to follow standard coding practices and skip specialized legacy techniques when working within safe, well-covered codebases.
