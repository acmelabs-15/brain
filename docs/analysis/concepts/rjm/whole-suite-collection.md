---
package: rjm
name: whole-suite collection
slug: whole-suite-collection
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# whole-suite collection

## Definition — verbatim
> "The whole-suite run becomes a whole-suite collection." — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:249-250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 250 | defined here | Defined in Placement Rule 5 as a fast surrogate for full test runs that verifies import and syntax integrity. |

## Consumes
Test suites and repository modules subject to pytest collection.

## Produces
Quick collection verdicts catching syntax errors and import failures without executing full test assertions.

## When applied
Used in pre-push hooks when whole-suite execution would violate tier latency targets, deferring full assertion runs to CI.

## Sub-concepts
none

## Part of
gate-tier-placement

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Whole-suite collection (`pytest --collect-only`) is a surrogate verification technique that replaces slow full-suite test execution in local pre-push gates. In rjm (ADR-104), running collection across the entire repository takes ~15 seconds instead of ~500 seconds while reliably catching broken imports, syntax errors, and missing modules before code is pushed to remote CI.
