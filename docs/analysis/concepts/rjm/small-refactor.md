---
package: rjm
name: Small refactor
slug: small-refactor
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Small refactor

## Definition — verbatim
> "| Small refactor | Separate PR, same sprint | Extract method from 40-line function |" — .claude/skills/analyze/references/quality-boy-scout-rule.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 55 | defined here | Classified in the scope table as a contained refactoring requiring a separate PR within the same sprint (e.g. extracting a method from a 40-line function). |

## Consumes
Localized code duplication or complex routines identified during analysis or development.

## Produces
A focused, independent PR in the same sprint that simplifies the routine without altering behavior.

## When applied
Applied when an improvement is valuable but exceeds the scope of a trivial inline fix, warranting isolation into its own PR.

## Sub-concepts
none

## Part of
quality-boy-scout-rule

## Implementation status
defects: missing-path

## Design notes
Small refactor is the second tier in rjm's improvement scope taxonomy, directing agents to decouple localized cleanups into independent pull requests within the current sprint to avoid polluting primary feature or bugfix changes.
