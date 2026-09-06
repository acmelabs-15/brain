---
package: addy
name: semantic versioning
slug: semantic-versioning
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# semantic versioning

## Definition — verbatim
> "### Semantic Versioning" — skills/git-workflow-and-versioning/SKILL.md:274
> "For anything with consumers, version `MAJOR.MINOR.PATCH` and let the number carry meaning:" — skills/git-workflow-and-versioning/SKILL.md:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/git-workflow-and-versioning.md | 5 | used here | Listed on the catalog page as a key git practice. |
| skills/git-workflow-and-versioning/SKILL.md | 274 | defined here | Defined in full with MAJOR.MINOR.PATCH rules tied to consumer impact and Hyrum's Law. |

## Consumes
Code diff, observable interface changes, bug fixes, and deprecations.

## Produces
MAJOR.MINOR.PATCH version bump communicating contract stability to downstream consumers.

## When applied
> "For anything with consumers, version `MAJOR.MINOR.PATCH` and let the number carry meaning:" — skills/git-workflow-and-versioning/SKILL.md:276

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
A versioning scheme (MAJOR.MINOR.PATCH) formalizing the contract between code authors and consumers. Addy strictly adheres to Hyrum's Law: any observable behavior change relied upon by consumers warrants a major version bump, ensuring predictability for downstream systems.
