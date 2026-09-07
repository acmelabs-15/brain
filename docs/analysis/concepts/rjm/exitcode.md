---
package: rjm
name: ExitCode
slug: exitcode
kind: name-only
package_phase: cross-phase
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

# ExitCode

## Definition — verbatim
(used, not defined)

> "class ExitCode(IntEnum):" — .claude/skills/skillforge/references/script-patterns-catalog.md:451

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 451 | defined here | Defines the Python IntEnum class enumerating standard exit codes for skill scripts. |

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
ExitCode is a Python IntEnum class identifier establishing integer constants for script process termination rather than an independent lifecycle concept.
