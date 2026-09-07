---
package: rjm
name: Argparse with Subcommands
slug: argparse-with-subcommands
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Argparse with Subcommands

## Definition — verbatim
> "Modular CLI interface for multi-operation scripts." — .claude/skills/skillforge/references/script-patterns-catalog.md:173

## Also called — verbatim
> "subparsers = parser.add_subparsers(dest=\"command\", help=\"Available commands\")" — .claude/skills/skillforge/references/script-patterns-catalog.md:206

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 171 | defines | Documents the CLI design pattern using argparse subparsers for multi-operation scripts. |

## Consumes
Command-line arguments, subparser definitions, and command handler functions.

## Produces
Modular command routing and standardized help text for multi-operation scripts.

## When applied
When scripts provide multiple distinct operations such as state tracking, lifecycle transitions, or management commands.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Organizes complex scripts with multiple operations into clean CLI subcommands (like `init`, `run`, `status`), each with dedicated arguments and isolated handler functions.
