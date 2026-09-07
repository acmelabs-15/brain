---
package: rjm
name: gate-override
slug: gate-override
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md, sha256: 456c2b45675af44c0b9b0ab432e98a4f33d1b5b3d57a0fa91fccb9ae5e4ca239}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gate-override

## Definition — verbatim
> "A `gate-override` label on the PR bypasses the frontmatter check for emergency merges." — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md | 152 | defined here | Defined as an emergency pull request label bypassing blocking synthesis panel gate checks. |

## Consumes
CODEOWNERS approval and documented emergency rationale.

## Produces
A CI gate bypass permitting merge despite blocking architect synthesis panel verdicts.

## When applied
Used during emergency deployments or incident responses when a pull request must merge despite non-approved design review statuses.

## Sub-concepts
none

## Part of
- ci-gate-logic
- synthesis-panel-frontmatter-standard

## Implementation status
defects: missing-path

## Design notes
The `gate-override` label provides an explicit operational escape hatch within rjm's automated quality gates. While the CI gate strictly prevents pull request merges when architect reviews return blocking verdicts (`NEEDS_CHANGES` or `BLOCKED` at P0/P1), `gate-override` allows authorized emergency merges when accompanied by CODEOWNERS approval, ensuring that strict automated gating does not prevent critical incident remediation.
