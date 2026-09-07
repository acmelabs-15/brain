---
package: rjm
name: CI Enforcement
slug: ci-enforcement
kind: gate
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

# CI Enforcement

## Definition — verbatim
> "Design review enforcement happens in two checks:" — .claude/agents/architect.md:485

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 483 | defined here | Section heading "### CI Enforcement" defining automated validation checks for design reviews. |
| templates/agents/architect.shared.md | 494 | defined here | Section heading "### CI Enforcement" defining automated validation checks for design reviews. |

## Consumes
Pull request metadata, DESIGN-REVIEW document frontmatter.

## Produces
CI pass or failure blocking PR merges on missing frontmatter fields or non-passing verdicts.

## When applied
Executed automatically in CI pipelines during PR validation before code changes can be merged.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
CI Enforcement bridges architectural governance and automated continuous integration. In rjm, architectural verdicts are not merely advisory text; automated checks (`pre_pr.py` and `check_design_review_gate.py` in `synthesis-panel-gate.yml`) validate design review frontmatter and actively block pull request merges whenever a review reports NEEDS_CHANGES, FAIL, or REJECTED.
