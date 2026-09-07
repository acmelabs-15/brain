---
package: rjm
name: Common Violations to Detect
slug: common-violations-to-detect
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Common Violations to Detect

## Definition — verbatim
(used, not defined)

> "## Common Violations to Detect" — .claude/skills/analyze/references/design-tell-dont-ask.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 39 | defined here | Section grouping code smells that violate the Tell, Don't Ask design principle. |

## Consumes
Source code AST or method implementations exhibiting object interactions.

## Produces
Flagged code smell findings (Feature Envy, Getter Chains).

## When applied
During code quality evaluation and smell detection in analyze workflows.

## Sub-concepts
feature-envy, getter-chains

## Part of
tell-dont-ask

## Implementation status
defects: missing-path

## Design notes
A diagnostic checklist category in rjm's Tell Don't Ask guidance that catalogs anti-patterns violating encapsulation boundaries, specifically grouping Feature Envy and Law of Demeter violations into structured detection targets during code quality audits.
