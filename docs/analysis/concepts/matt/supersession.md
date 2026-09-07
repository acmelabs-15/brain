---
package: matt
name: Supersession
slug: supersession
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Supersession

## Definition — verbatim
> "The history of how understanding evolved is itself useful signal." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 44 | defines | Defines the supersession pattern where outdated learning records are marked superseded instead of deleted. |

## Consumes
An updated learning record that contradicts or deepens understanding established in an earlier record.

## Produces
A frontmatter status update (`Status: superseded by LR-NNNN`) on the prior learning record.

## When applied
Applied when a later learning record contradicts an earlier one as user understanding deepens or is corrected.

## Sub-concepts
none

## Part of
learning-record

## Implementation status
clean

## Design notes
A lifecycle pattern adapted from ADRs ensuring learning records function as an immutable, append-only ledger of learner evolution. Rather than destructively editing past records when understanding deepens or misconceptions are corrected, older records are preserved with a supersession pointer, maintaining visibility into how the learner's knowledge trajectory developed over time.
