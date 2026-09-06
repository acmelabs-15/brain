---
package: addy
name: slash-command directories
slug: slash-command-directories
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands.js, sha256: c49934f8c78b393ba38da33fb00a625bdd6efe0c164c306582e762328083a080}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# slash-command directories

## Definition — verbatim
> "Guards against silent drift across the three slash-command directories:" — scripts/validate-commands.js:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands.js | 5 | references | Comment describing the three tool-specific directory roots checked for command parity and description sync. |

## Consumes
Configured root folders for tool-specific slash commands (`.claude/commands/`, `.gemini/commands/`, `commands/`).

## Produces
Consistent multi-platform slash-command structure across Claude Code, Gemini CLI, and Antigravity CLI.

## When applied
Applied when organizing and maintaining slash commands across multiple host platform installations.

## Sub-concepts
none

## Part of
command-parity

## Implementation status
clean

## Design notes
Multi-platform organizational pattern that distributes tool-specific command implementations across designated root directories (.claude/commands/, .gemini/commands/, commands/) while maintaining strict functional parity and description synchronization.
