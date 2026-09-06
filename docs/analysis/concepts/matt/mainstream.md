---
package: matt
name: Mainstream
slug: mainstream
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Mainstream

## Definition — verbatim
> "\"Mainstream\" is a judgment call, not a numeric bar:" — .out-of-scope/mainstream-issue-trackers-only.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 9 | defined here | Defines the inclusion standard for first-class issue tracker support as a qualitative judgment call. |

## Consumes
Community adoption signals, tool maturity, and developer familiarity.

## Produces
Scope boundary decisions regarding whether an external integration should be built into core skills.

## When applied
When deciding whether to implement native CLI support for a new developer tool or issue tracker.

## Sub-concepts
none

## Part of
issue-trackers, out-of-scope

## Implementation status
clean

## Design notes
`Mainstream` functions as an architectural gating heuristic in `matt`. Rather than setting arbitrary metric cutoffs (such as GitHub stars or package downloads), the package defines mainstream tools by asking whether a typical professional engineer would recognize the tool and plausibly adopt it for their team, shielding core skills from niche tool maintenance churn.
