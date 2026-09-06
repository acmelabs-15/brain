---
package: addy
name: command parity
slug: command-parity
kind: gate
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
  - {path: scripts/validate-artifact-paths.js, sha256: 689a1c9b12391bdfe92b0102fb0f09278f5e4f07b2340a694f443b139d20c0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# command parity

## Definition — verbatim
(used, not defined)
> "A PR that arrives green through Tier 1 + Tier 2 + command parity is reviewable" — docs/developer-onboarding.md:74

## Also called — verbatim
- `validate-commands.js` — docs/developer-onboarding.md:59

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 74 | used here | Required pre-PR verification gate ensuring command availability and descriptions match across command directories. |
| scripts/validate-artifact-paths.js | 12 | used here | Cited to explain that command parity only compares command descriptions across targets. |

## Consumes
Command definitions across `.claude/commands/`, `.gemini/commands/`, and `commands/`.

## Produces
Validation reports verifying identical command presence and description sync across supported target environments.

## When applied
Run in CI and locally via `node scripts/validate-commands.js` before submitting pull requests.

## Sub-concepts
none

## Part of
- `verification-loop`

## Implementation status
clean

## Design notes
Command parity enforces synchronization across all supported agent environments (Claude Code, Gemini CLI, Antigravity). By requiring every command to exist with matching descriptions in all three target command directories, it prevents platform drift and ensures users have identical capabilities regardless of their host AI tool.
