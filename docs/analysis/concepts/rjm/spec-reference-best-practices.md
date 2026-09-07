---
package: rjm
name: Spec Reference Best Practices
slug: spec-reference-best-practices
kind: checklist
package_phase: rjm:spec
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

# Spec Reference Best Practices

## Definition — verbatim
> "### Spec Reference Best Practices" — CONTRIBUTING.md:910

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 910 | defined here | Heading introducing traceability conventions for linking PRs to specifications and issue trackers. |

## Consumes
GitHub issue links, requirement identifiers (`REQ-*`), planning documents, and design specs.

## Produces
Standardized PR descriptions and commit messages linking implementation code to upstream specifications.

## When applied
Applied when opening feature, fix, refactor, or infrastructure pull requests to ensure end-to-end specification traceability.

## Sub-concepts
none

## Part of
pull-request-guidelines

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Spec Reference Best Practices establish bidirectional traceability between code changes and requirements in rjm. By mandating supported citation formats (such as issue links, REQ-* identifiers, or planning document paths), the protocol enables automated workflows like AI Spec Validation to verify implementation completeness and architectural alignment.
