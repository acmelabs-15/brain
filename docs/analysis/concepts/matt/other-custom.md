---
package: matt
name: other/custom
slug: other-custom
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

# other/custom

## Definition — verbatim
> "- `other/custom` for users who want to wire something up themselves." — .out-of-scope/mainstream-issue-trackers-only.md:19

## Also called — verbatim
`Other` — docs/engineering/setup-matt-pocock-skills.md:45

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 19 | defined here | Escape hatch option for users integrating custom issue tracker workflows without core skill changes. |

## Consumes
User-provided prose describing the tracking workflow.

## Produces
Custom issue tracker configuration documented in `docs/agents/issue-tracker.md`.

## When applied
When an engineering team uses an issue tracker other than GitHub, GitLab, or local markdown.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The other/custom pattern allows setup-matt-pocock-skills to accommodate arbitrary issue trackers (like Jira or Linear) by capturing freeform prose workflow instructions in docs/agents/issue-tracker.md for downstream skills to follow.
