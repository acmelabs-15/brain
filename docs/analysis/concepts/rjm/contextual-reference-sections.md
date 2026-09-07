---
package: rjm
name: Contextual Reference Sections
slug: contextual-reference-sections
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Contextual Reference Sections

## Definition — verbatim
> "#### Contextual Reference Sections" — CONTRIBUTING.md:883

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 883 | defined here | Heading defining the allowlist of h2 sections in PR descriptions excluded from diff comparison. |

## Consumes
Draft pull request description markdown containing citations to existing files, prior art, or specs.

## Produces
Excluded description text blocks ignored by `scripts/validation/pr_description.py` during change-claim extraction.

## When applied
Applied when authoring PR descriptions that reference background context under designated headings (`## Test Plan`, `## Design Decisions`, `## References`).

## Sub-concepts
none

## Part of
pull-request-guidelines

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Contextual Reference Sections establish an essential PR formatting pattern in rjm that allows contributors to cite related files, test plans, and architectural patterns without triggering false-positive drift failures. The PR description validator strips these specific headings before comparing mentioned files against the git diff, harmonizing background documentation with strict change-claim verification.
