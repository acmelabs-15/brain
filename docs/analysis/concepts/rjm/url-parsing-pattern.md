---
package: rjm
name: URL Parsing Pattern
slug: url-parsing-pattern
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

# URL Parsing Pattern

## Definition — verbatim
(used, not defined)

> "## URL Parsing Pattern" — .claude/skills/github-url-intercept/SKILL.md:198

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/SKILL.md | 198 | defined here | Section heading detailing URL structure formats and fragment extraction rules. |

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
Section heading defining the decomposition of GitHub URLs into owner, repo, ref, and fragment components; classified as name-only per D-023 because it is a documentation heading rather than an independent lifecycle concept.
