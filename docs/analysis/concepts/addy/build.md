---
package: addy
name: /build
slug: build
kind: phase
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /build

## Definition — verbatim
> "- `/build` — implement the next pending task, then stop (careful, one slice at a time)." — .gemini/commands/build.toml:8

## Also called — verbatim
> "Build" — CLAUDE.md:23
> "BUILD" — AGENTS.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 8 | defined here | Defines the single-task execution mode of the build slash command. |
| AGENTS.md | 42 | defined here | Maps the BUILD lifecycle phase to incremental-implementation and test-driven-development. |
| CLAUDE.md | 23 | defined here | Lists skills composed under the Build lifecycle phase. |
| docs/comparison.md | 11 | used here | Lists /build as one of the six lifecycle slash commands. |
| docs/opencode-setup.md | 170 | used here | Explains how OpenCode invokes skills corresponding to the /build command. |
| external/api-and-interface-design.md | 12 | used here | Links to /build in the sidebar card for the Build phase. |
| external/context-engineering.md | 5 | used here | Cites /build as the command for the Build phase. |
| external/context-engineering.md | 12 | used here | Sidebar link to /build command in external documentation. |
| external/doubt-driven-development.md | 12 | used here | Sidebar link to /build command in external documentation. |
| external/frontend-ui-engineering.md | 12 | used here | Sidebar link to /build command in external documentation. |
| external/source-driven-development.md | 12 | used here | Sidebar link to /build command in external documentation. |
| external/test-driven-development.md | 12 | used here | Sidebar link to /build command in external documentation. |
| README.md | 12 | defined here | Overview lifecycle diagram showing /build under BUILD phase. |
| README.md | 17 | defined here | Lifecycle command sequence table mapping /build to Code Impl. |
| skills/ci-cd-and-automation/SKILL.md | 39 | defined here | References Build as the implementation phase preceding Verify, Review, and Ship. |
| skills/constraint-driven-development/SKILL.md | 192 | used here | Explains placing fast constraint checks in the /build edit loop. |
| skills/constraint-driven-development/SKILL.md | 192 | used here | Second occurrence discussing integration of constraints into the build loop. |

## Consumes
Decomposed task plan with explicit acceptance criteria from the Plan phase.

## Produces
Working code, passing test suites, and atomic per-task git commits.

## When applied
During the Build phase when implementing planned tasks.

## Sub-concepts
build-auto, autonomous-mode, single-task-mode, clean-rollback, clean-rollback-guarantee, human-gate

## Part of
none

## Implementation status
clean

## Design notes
The central construction phase and slash command in Addy's lifecycle, combining incremental implementation with test-driven development to execute tasks one verified slice at a time.
