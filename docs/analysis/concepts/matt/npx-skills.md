---
package: matt
name: npx skills
slug: npx-skills
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# npx skills

## Definition — verbatim
(used, not defined)

> "npx skills" — .changeset/fix-yaml-frontmatter-colons.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Cited as the CLI command used to list and install published skills. |
| skills/in-progress/README.md | 8 | used here | Documents the direct install command for beta and in-progress skills. |

## Consumes
A target repository and published skill package name.

## Produces
Installation of specified skill files into the local agent harness.

## When applied
When a developer installs individual skills or beta capabilities into their agent environment.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The CLI execution mechanism used by developers to discover, add, and manage skills within their coding environment (`npx skills@latest add ...`), enabling modular distribution and installation of agent capabilities.
