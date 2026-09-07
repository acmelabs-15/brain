---
package: rjm
name: No Orphan Requirements
slug: no-orphan-requirements
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-schemas.md, sha256: 6520d76b9eae7f6d574a1291dc027464ad24dd8d388d55ea04364b25a8a7a431}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# No Orphan Requirements

## Definition — verbatim
> "Every REQ must have at least one DESIGN" — .claude/skills/spec-generator/references/spec-schemas.md:425

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 425 | defined here | Validation rule mandating that every requirement artifact links forward to at least one design artifact. |

## Consumes
Requirement artifacts and forward links in requirement and design frontmatter.

## Produces
Validation verdict verifying that all approved requirements have corresponding technical designs.

## When applied
> "Every REQ must have at least one DESIGN" — .claude/skills/spec-generator/references/spec-schemas.md:425

## Sub-concepts
none

## Part of
traceability-matrix

## Implementation status
defects: missing-path

## Design notes
Traceability rule ensuring that no requirement is forgotten or unaddressed during design elaboration, guaranteeing that every specified behavior has an explicit architectural solution.
