---
package: rjm
name: re-evaluation threshold
slug: re-evaluation-threshold
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# re-evaluation threshold

## Definition — verbatim
> "If the hybrid percentage exceeds 20%, re-evaluate the extraction boundary." — .agents/analysis/adr-045-inventory-audit.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 40 | defined here | Threshold rule (20% hybrid files) triggering architectural re-evaluation of extraction plans. |

## Consumes
Empirical classification audit results measuring percentage of hybrid artifacts across the repository.

## Produces
A gate decision requiring pausing planned extraction phases to revise effort estimates and boundary scopes.

## When applied
Triggered when an inventory audit reveals that the percentage of hybrid components exceeds 20%.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
The re-evaluation threshold operates as an architectural safety circuit-breaker in rjm, halting extraction plans when measured coupling indicates that refactoring costs would substantially exceed initial estimates.
