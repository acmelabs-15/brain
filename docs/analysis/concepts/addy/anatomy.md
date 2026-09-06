---
package: addy
name: anatomy
slug: anatomy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# anatomy

## Definition — verbatim
> "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/browser-testing-with-devtools.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 10 | defined here | Defines the 6-part anatomy list for the skill workflow. |
| external/browser-testing-with-devtools.md | 9 | defined here | Declares that every skill follows the same executable anatomy. |
| external/documentation-and-adrs.md | 9 | defined here | Declares that every skill follows the same executable anatomy. |
| external/frontend-ui-engineering.md | 9 | defined here | Declares that every skill follows the same executable anatomy. |
| external/git-workflow-and-versioning.md | 9 | defined here | Declares that every skill follows the same executable anatomy. |
| external/performance-optimization.md | 9 | used here | References the standardized anatomy structure. |
| external/planning-and-task-breakdown.md | 9 | used here | References the standardized anatomy structure. |
| external/shipping-and-launch.md | 9 | defined here | Declares that every skill follows the same executable anatomy. |
| external/source-driven-development.md | 9 | defined here | Declares that every skill follows the same executable anatomy. |

## Consumes
Standardized skill sections (Overview, When to Use, Process, Rationalizations, Red Flags, Verification).

## Produces
Predictable agent execution structure across all skills.

## When applied
When authoring or executing any skill in the package.

## Sub-concepts
rationalizations

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The standardized six-part anatomical schema for addy's skills designed as an executable workflow for agents rather than static reading documentation.
