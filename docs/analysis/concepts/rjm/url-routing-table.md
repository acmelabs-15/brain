---
package: rjm
name: URL Routing Table
slug: url-routing-table
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# URL Routing Table

## Definition — verbatim
(used, not defined)

> "## URL Routing Table" — .claude/skills/github-url-intercept/SKILL.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/SKILL.md | 161 | defined here | Section heading introducing the tabular specification of URL patterns, target scripts, and CLI parameters. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
github-url-intercept

## Implementation status
defects: doc-drift, missing-path

## Design notes
Section heading designating the lookup table mapping URL patterns to script invocations and fallback gh commands; classified as name-only per D-023 because it is a document heading rather than an independent lifecycle concept.
