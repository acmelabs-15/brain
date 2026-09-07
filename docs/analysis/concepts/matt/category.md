---
package: matt
name: category
slug: category
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# category

## Definition — verbatim
> "Two **category** roles:" — skills/engineering/triage/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/SKILL.md | 26 | defined here | Establishes the category classification axis in triage, partitioning items into bug or enhancement. |

## Consumes
An unclassified incoming issue or pull request.

## Produces
A category classification label (`bug` or `enhancement`) on the issue tracker.

## When applied
Applied during initial triage evaluation to determine the fundamental nature of the work.

## Sub-concepts
bug, enhancement

## Part of
triage

## Implementation status
defects: missing-path

## Design notes
One of the two primary classification axes in the triage skill (alongside state). Every triaged issue or PR is assigned exactly one category role (`bug` or `enhancement`), establishing whether the item represents repairing broken functionality or introducing new capabilities.
