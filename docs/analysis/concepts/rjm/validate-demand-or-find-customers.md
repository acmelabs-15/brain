---
package: rjm
name: validate demand or find customers
slug: validate-demand-or-find-customers
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate demand or find customers

## Definition — verbatim
> "| `validate demand or find customers` | Start with mom-test; use four-steps only after interview evidence names a repeatable buyer |" — .claude/skills/business-strategy/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 36 | defined here | User trigger phrase routing founders to customer interview and demand validation methodologies. |

## Consumes
Early product concepts, unvalidated value propositions, or initial customer search queries.

## Produces
Sequential routing to The Mom Test protocol followed conditionally by Customer Discovery.

## When applied
Invoked during pre-product or early discovery phases when customer demand is unproven.

## Sub-concepts
none

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
validate-demand-or-find-customers is a specialized routing trigger in rjm's business strategy router. It enforces a disciplined sequencing rule: founders must first extract unbiased evidence of past customer behavior via The Mom Test before attempting structured customer acquisition models like The Four Steps to the Epiphany.
