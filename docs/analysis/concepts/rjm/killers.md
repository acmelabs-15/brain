---
package: rjm
name: killers
slug: killers
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# killers

## Definition — verbatim
> "Sort features into leaders (drive the purchase, worth a premium), fillers (nice to have, low pull), and killers (erode WTP when bundled in)." — .claude/skills/business-strategy/references/monetizing-innovation.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 23 | defines | Classification category for features that actively degrade customer willingness-to-pay when bundled into a product package. |

## Consumes
Customer objection data, WTP surveys, and segment friction reports.

## Produces
Identification of features to eliminate, unbundle, or isolate into specialized enterprise tiers.

## When applied
Applied when designing product tiers and identifying features that frighten, confuse, or devalue packages for key segments.

## Sub-concepts
none

## Part of
willingness-to-pay

## Implementation status
clean

## Design notes
Killers are features that actively diminish a customer's willingness-to-pay when bundled in, often because they introduce complexity, risk, or perceived unnecessary cost. Identifying killers in rjm prevents teams from accidentally ruining an otherwise compelling package by bundling unwanted features.
