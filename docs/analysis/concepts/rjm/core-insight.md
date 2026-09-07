---
package: rjm
name: Core Insight
slug: core-insight
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core Insight

## Definition — verbatim
(used, not defined)

> "## Core Insight" — .claude/skills/analyze/references/design-tell-dont-ask.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 13 | defined here | Heading introducing the essential takeaway of the Tell, Don't Ask design pattern. |
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 13 | defined here | Heading introducing the essential takeaway of the Boy Scout Rule. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 14 | defined here | Heading introducing the essential takeaway of the Boy Scout Rule in decision criticism. |
| .claude/skills/threat-modeling/references/security-least-privilege.md | 13 | defined here | Heading introducing the essential takeaway of the Principle of Least Privilege. |

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
defects: missing-path

## Design notes
A recurring markdown section heading used across reference documentation files to summarize a principle's primary thesis rather than an independent operational lifecycle concept.
