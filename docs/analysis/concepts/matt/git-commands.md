---
package: matt
name: git commands
slug: git-commands
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git commands

## Definition — verbatim
(used, not defined)

> "Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, etc.) before they execute." — skills/misc/README.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 5 | used here | Describes dangerous command-line Git operations intercepted and blocked by Claude Code hooks before execution. |

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
Command-line Git instructions subject to hook-based interception and validation, representing external VCS tool invocations rather than a core development lifecycle concept.
