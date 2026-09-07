---
package: matt
name: deepening opportunities
slug: deepening-opportunities
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deepening opportunities

## Definition — verbatim
> "`improve-codebase-architecture` surveys a codebase for **deepening opportunities**: places where a shallow module (an interface nearly as complex as the thing it hides) could become a deep one." — docs/engineering/improve-codebase-architecture.md:3

## Also called — verbatim
deepening candidates — external/improve-codebase-architecture.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 3 | defined here | Defines deepening opportunities as places where shallow modules can be refactored into deep modules. |
| external/improve-codebase-architecture.md | 25 | defined here | Describes surveying codebases to locate high-leverage deepening opportunities. |
| skills/engineering/ask-matt/SKILL.md | 52 | defined here | Directs users wanting to find deepening opportunities to run improve-codebase-architecture. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 9 | defined here | Sets instructions for scanning source files to locate deepening opportunities. |

## Consumes
A surveyed codebase, commit history, and identified module interfaces.

## Produces
A ranked catalog of architectural refactoring candidates presented in an interactive HTML report.

## When applied
During architectural maintenance, brownfield audits, or before embarking on large feature additions.

## Sub-concepts
shallow-module, deep-one, strong, worth-exploring, speculative

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
Deepening opportunities identify high-value architectural interventions where complex, leaky abstractions can be collapsed into simpler, deeper interfaces. Filtering candidates through the deletion test ensures the team only tackles refactorings that actively concentrate complexity rather than moving it around.
