---
package: addy
name: command twins
slug: command-twins
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# command twins

## Definition — verbatim
(used, not defined)
> "test('passes matching command twins and maps plan to planning', () => {" — scripts/validate-commands-test.js:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands-test.js | 61 | references | Test name asserting that matching command equivalents across harnesses pass parity and description validation. |

## Consumes
Equivalent slash-command definitions authored across multiple tool directories (`.claude/commands/`, `.gemini/commands/`, `commands/`).

## Produces
Synchronized multi-platform slash-command definitions with identical user-facing descriptions.

## When applied
Applied when authoring and validating slash commands intended for seamless interoperation across Claude Code, Gemini CLI, and Antigravity CLI.

## Sub-concepts
none

## Part of
command-parity

## Implementation status
clean

## Design notes
Cross-platform command synchronization pattern where each lifecycle command in Claude Code (.md) maintains identical functional equivalents in Gemini CLI and Antigravity CLI (.toml) with matching user-facing descriptions.
