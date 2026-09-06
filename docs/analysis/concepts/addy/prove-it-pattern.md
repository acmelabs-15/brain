---
package: addy
name: Prove-It pattern
slug: prove-it-pattern
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Prove-It pattern

## Definition — verbatim
> "### 3. Follow the Prove-It Pattern for Bugs" — agents/test-engineer.md:30

## Also called — verbatim
`Prove-It pattern` — commands/test.toml:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/test.toml | 1 | defines | Prescribed in Gemini CLI test command description for bug fixing workflows. |
| agents/test-engineer.md | 30 | defines | Mandated as step-by-step bug reproduction protocol for the test-engineer persona. |
| commands/test.toml | 1 | defines | Stated in Claude Code test command description as mandatory protocol for bugs. |
| docs/agents.md | 9 | references | Documented as core operating discipline of the test-engineer agent persona. |
| docs/copilot-setup.md | 58 | references | Highlighted in Copilot environment configuration as testing standard. |

## Consumes
Bug reports, error traces, failing reproduction steps, and existing test suites

## Produces
A failing automated reproduction test confirming the defect, followed by verified code remediation

## When applied
Applied whenever diagnosing and repairing any reported software bug or regression.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
clean

## Design notes
The Prove-It pattern enforces discipline in defect remediation. By requiring a failing test that reproduces the bug before code modification begins, it ensures agents understand the defect, provides verifiable proof of the fix, and guards against regression.
