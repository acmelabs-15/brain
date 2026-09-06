---
package: matt
name: em-dash
slug: em-dash
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# em-dash

## Definition — verbatim
> "Remove every em-dash from the repo's prose" — .changeset/remove-em-dashes-repo-wide.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/remove-em-dashes-repo-wide.md | 5 | defined here | Commits repo-wide prose policy replacing em-dashes with deliberate punctuation. |

## Consumes
Prose sentences containing typographical em-dashes.

## Produces
Clear, restructured sentences using standard grammatical punctuation.

## When applied
Enforced continuously across all repository markdown and code comments.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A singular typographic punctuation mark explicitly banned from project prose. Replacing em-dashes with commas, colons, or periods avoids ambiguous parenthetical phrasing and enforces deliberate sentence construction.
