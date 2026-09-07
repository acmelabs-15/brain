---
package: rjm
name: Simple Argparse
slug: simple-argparse
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

# Simple Argparse

## Definition — verbatim
> "For single-purpose scripts." — .claude/skills/skillforge/references/script-patterns-catalog.md:247

## Also called — verbatim
> "### Pattern 4: Simple Argparse" — .claude/skills/skillforge/references/script-patterns-catalog.md:245

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 245 | defines | Establishes the minimal argparse CLI pattern for focused, single-purpose scripts. |

## Consumes
Positional arguments (e.g. target path) and optional flags (`--verbose`, `--strict`, `--json`).

## Produces
Parsed CLI namespace for executing single-purpose validation, generation, or transformation tasks.

## When applied
When designing single-purpose scripts that perform one specific task and require minimal configuration.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Keeps CLI interfaces lightweight and consistent across single-purpose scripts, using standard positional arguments and common flags (`--json`, `--verbose`) without over-engineering subparsers.
