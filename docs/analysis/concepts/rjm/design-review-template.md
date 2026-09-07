---
package: rjm
name: Design Review Template
slug: design-review-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design Review Template

## Definition — verbatim
> "All DESIGN-REVIEW documents MUST use YAML frontmatter for automated parsing. The CI quality gate enforces blocking verdicts." — .claude/agents/architect.md:411

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 409 | defined here | Mandatory frontmatter and section template for architectural design review documents. |
| templates/agents/architect.shared.md | 420 | defined here | Mandatory frontmatter and section template for architectural design review documents. |

## Consumes
Architectural proposals, feature designs, or pull request diffs requiring design governance.

## Produces
Structured DESIGN-REVIEW documents with YAML frontmatter in `.agents/architecture/DESIGN-REVIEW-[topic].md`.

## When applied
Used by the architect agent when performing formal design reviews across planning and implementation phases.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
The Design Review Template standardizes architectural assessment outputs with machine-parseable YAML frontmatter. By specifying structured fields for review status, priority, and blocking flags, the template directly connects architectural reviews to automated CI validation gates, ensuring that non-passing verdicts (NEEDS_CHANGES, REJECTED, BLOCKED) deterministically halt downstream PR pipelines.
