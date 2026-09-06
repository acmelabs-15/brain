---
package: addy
name: Parity check
slug: parity-check
kind: gate
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

# Parity check

## Definition — verbatim
> "Parity check" — scripts/validate-commands.js:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands.js | 113 | defines | Section header and validation phase verifying that every command exists in Claude, Gemini, and Antigravity directories. |

## Consumes
Discovered command files across `.claude/commands/`, `.gemini/commands/`, and `commands/`.

## Produces
Verification verdict and exit code 0 on complete multi-platform command symmetry, or exit code 1 blocking CI on any missing command twin.

## When applied
Executed in CI to guarantee that any command provided on one platform is fully available on all supported platforms.

## Sub-concepts
none

## Part of
command-parity

## Implementation status
clean

## Design notes
Automated CI quality gate enforcing that every slash command present in one platform directory exists across all three supported tool environments, preventing platform-specific capability fragmentation.
