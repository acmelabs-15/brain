---
package: rjm
name: upgrade-assistant
slug: upgrade-assistant
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md, sha256: 3b2ca37580d82af070bb89f7afeba53b0d1890f1652f9d0cf14ddd4e7b1f6106}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# upgrade-assistant

## Definition — verbatim
(used, not defined)

> "dotnet tool install -g upgrade-assistant" — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 89 | used here | Cited as the .NET CLI tool used to automate migration of legacy project files to SDK style. |

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
clean

## Design notes
upgrade-assistant is an external Microsoft CLI tool identifier for upgrading legacy project files rather than an internal lifecycle concept.
