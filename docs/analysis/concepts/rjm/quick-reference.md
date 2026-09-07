---
package: rjm
name: Quick Reference
slug: quick-reference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quick Reference

## Definition — verbatim
(used, not defined)

> "## Quick Reference" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:402

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 402 | defined here | Summary section heading mapping low quality scores to corresponding refactoring remediation patterns. |
| .claude/skills/github-url-intercept/SKILL.md | 27 | defined here | Section heading providing immediate copy-paste CLI commands for GitHub URL routing. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 31 | defined here | Boilerplate markdown section heading for generated skill reference tables. |
| .claude/skills/skillforge/references/script-patterns-catalog.md | 812 | defined here | Summary section heading cataloging Python script design patterns and associated stdlib imports. |

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
defects: doc-drift, missing-path, orphan

## Design notes
Quick Reference is a recurring markdown section heading used across documentation and templates to provide condensed lookup tables or commands rather than a lifecycle concept.
