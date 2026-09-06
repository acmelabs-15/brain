---
package: addy
name: Description sync check
slug: description-sync-check
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

# Description sync check

## Definition — verbatim
> "Description sync check" — scripts/validate-commands.js:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands.js | 139 | defines | Section header and validation phase verifying description text equality across equivalent command twins. |

## Consumes
Parsed description strings from matching command definitions across `.claude/commands/`, `.gemini/commands/`, and `commands/`.

## Produces
Verification verdict and exit code 0 when descriptions match byte-for-byte, or exit code 1 with diff output on description drift.

## When applied
Executed in CI to guarantee that slash-command descriptions remain synchronized and identical across platforms.

## Sub-concepts
none

## Part of
command-parity

## Implementation status
clean

## Design notes
Automated CI quality gate enforcing that equivalent command twins across Claude Code, Gemini CLI, and Antigravity CLI present identical descriptions to users, preventing documentation drift.
