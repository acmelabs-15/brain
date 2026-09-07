---
package: rjm
name: Behavioral smoke test
slug: behavioral-smoke-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Behavioral smoke test

## Definition — verbatim
> "Behavioral smoke test, not load-time validation." — .claude/skills/software-engineering-library/references/release-it.md:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 191 | defined here | Defined as an empirical verification technique asserting that registered side effects actually fired at runtime rather than relying on load-time validation. |

## Consumes
Registered lifecycle hooks, event listeners, callbacks, and fire-and-forget integration points.

## Produces
Empirical assertions and automated test verifications confirming that side effects executed.

## When applied
Applied during integration testing, dependency upgrades, and lifecycle hook verification.

## Sub-concepts
none

## Part of
silent-api-migration-failures

## Implementation status
defects: missing-path

## Design notes
A testing technique in rjm that empirically verifies side effects occur rather than assuming correctness from successful module imports or schema validation. In hook infrastructure and event listeners, behavioral smoke tests prevent silent no-ops from going unnoticed.
