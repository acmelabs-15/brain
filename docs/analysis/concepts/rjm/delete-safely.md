---
package: rjm
name: Delete Safely
slug: delete-safely
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Delete Safely

## Definition — verbatim
> "Remove with comprehensive testing" — .claude/agents/janitor.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 77 | defined here | Second step of the execution strategy mandating test-backed deletion of unused code. |

## Consumes
Identified dead code elements and existing test suites.

## Produces
Safely removed code accompanied by passing test runs confirming the absence of regressions.

## When applied
During code pruning operations when removing functions, classes, or modules.

## Sub-concepts
none

## Part of
execution-strategy

## Implementation status
clean

## Design notes
Couples code deletion directly with test verification. By mandating that any removal must be supported by comprehensive testing before and after changes, it ensures that aggressive simplification does not break unspoken contracts, edge-case handling, or peripheral integrations.
