---
package: addy
name: code-as-liability
slug: code-as-liability
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# code-as-liability

## Definition — verbatim
> "code-as-liability, compulsory vs. advisory deprecation, and zombie-code removal give you a disciplined way to shrink the legacy surface instead of just wrapping it." — docs/adoption-guide.md:104

## Also called — verbatim
> "A code-as-liability mindset" — external/deprecation-and-migration.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 104 | defines | Describes deprecation-and-migration mindset where code is treated as an ongoing maintenance cost |
| external/ci-cd-and-automation.md | 12 | references | Sidebar navigation references deprecation-and-migration embodying code-as-liability |
| external/deprecation-and-migration.md | 5 | references | Web page description introduces code-as-liability mindset for sunsetting code |

## Consumes
Codebase surface area, legacy features, and maintenance overhead.

## Produces
Decisions to sunset, delete, or simplify existing code rather than maintaining unnecessary abstractions.

## When applied
When reviewing codebases for deprecation, simplification, or maintenance cost reduction.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean in docs/adoption-guide.md; defects: doc-drift, orphan in external documentation

## Design notes
Code-as-liability counters the sunk-cost fallacy and additive bias of developers and AI agents, asserting that code has negative asset value due to maintenance costs and should be removed whenever possible.
