---
package: addy
name: skills CLI
slug: skills-cli
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/code-simplification.md, sha256: 91567ad5289ace67907b96afacbbf6f462f776f6f74cd5b9ffc87e02148bbabf}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills CLI

## Definition — verbatim
> "The open [skills CLI](https://github.com/vercel-labs/skills) installs into 70+ agents (Claude Code, Cursor, Codex, Copilot, Cline, and more):" — README.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/browser-testing-with-devtools.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/ci-cd-and-automation.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/code-review-and-quality.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/code-simplification.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/context-engineering.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/documentation-and-adrs.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/doubt-driven-development.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/frontend-ui-engineering.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/git-workflow-and-versioning.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/idea-refine.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/interview-me.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/observability-and-instrumentation.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/performance-optimization.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/planning-and-task-breakdown.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/security-and-hardening.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/shipping-and-launch.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/source-driven-development.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/spec-driven-development.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/test-driven-development.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| external/using-agent-skills.md | 6 | used here | Cited as the CLI mechanism to install the skill individually or as a pack. |
| README.md | 46 | used here | Introduced in Quick Start as the fastest installation method into 70+ agents. |

## Consumes
Skill packages from addyosmani/agent-skills.

## Produces
Installed skill files in agent configuration directories.

## When applied
When installing or browsing individual skills or the full pack.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The open-source CLI package (vercel-labs/skills) used to discover and install addy's agent skills into Claude Code, Cursor, Codex, and other supported AI coding agents.
