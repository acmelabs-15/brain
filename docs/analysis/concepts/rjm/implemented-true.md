---
package: rjm
name: implemented: true
slug: implemented-true
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implemented: true

## Definition — verbatim
(used, not defined)

> "`implemented: true` means the artifacts named in the Decision section (the schema, the standalone validator, `write_skill_error`'s behavior) now match this ADR's prose, not that a CI gate enforces the contract" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:21-23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 21 | used here | Explains that frontmatter `implemented: true` reflects artifact alignment rather than CI enforcement. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A YAML frontmatter metadata key-value pair used in ADR documents to signal that named artifacts have been brought into alignment with the decision prose, not an independent lifecycle concept.
