---
package: addy
name: Sandbox Mode
slug: sandbox-mode
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Sandbox Mode

## Definition — verbatim
> "If you want to run skills or scripts with limited terminal permissions (for safety when running third-party validation tests), launch the CLI with:" — docs/antigravity-setup.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/antigravity-setup.md | 109 | defines | Restricted execution mode in Antigravity CLI limiting terminal permissions for untrusted script execution |

## Consumes
CLI startup flag --sandbox.

## Produces
Restricted execution sandbox enforcing safety boundaries during agent tool operations.

## When applied
When running third-party tests, unvetted scripts, or untrusted code in an agent session.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Sandbox mode enforces platform-level permission restrictions on agent shell execution, providing safety guardrails against accidental or malicious system damage during automated runs.
