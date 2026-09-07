---
package: rjm
name: DESIGN-REVIEW
slug: design-review
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md, sha256: 456c2b45675af44c0b9b0ab432e98a4f33d1b5b3d57a0fa91fccb9ae5e4ca239}
  - {path: .github/scripts/check_design_review_gate.py, sha256: f42c9b74de25301caed2e74b38deaacd36b3491b6d7a5e1708f56dc595d08579}
  - {path: scripts/validation/validate_design_review.py, sha256: f661f67d438dac52a7cfbc335a1857408c16601a8a962cb387e637a2420ef671}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DESIGN-REVIEW

## Definition — verbatim
(used, not defined)

> "DESIGN-REVIEW documents (architect synthesis panels) contain critical metadata embedded in prose format, preventing automated enforcement of blocking verdicts." — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:28

## Also called — verbatim
- "design review" — .github/scripts/check_design_review_gate.py:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md | 28 | used here | Describes DESIGN-REVIEW documents as synthesis panels holding critical architectural evaluation metadata. |
| .github/scripts/check_design_review_gate.py | 2 | used here | Script docstring noting inspection of design review files in .agents/architecture/ for blocking verdicts. |
| scripts/validation/validate_design_review.py | 2 | used here | Module docstring specifying pre-PR validation of YAML frontmatter across DESIGN-REVIEW files. |

## Consumes
Proposed architecture decision records, specifications, pull request diffs, and synthesis panel evaluations.

## Produces
A structured document (`.agents/architecture/DESIGN-REVIEW-*.md`) containing review verdicts, priorities, and architectural assessments.

## When applied
When an architect agent or review panel evaluates architectural changes, new ADRs, or high-impact pull requests prior to merge.

## Sub-concepts
- synthesis-panel-frontmatter-standard
- architect-synthesis-panels

## Part of
none

## Implementation status
defects: missing-path, other, script-bug

## Design notes
DESIGN-REVIEW documents serve as the formal synthesis records for architectural evaluations conducted by the architect agent and synthesis panels. In rjm's workflow, these documents record whether an architectural proposal is APPROVED, NEEDS_CHANGES, or BLOCKED, along with issue priority (P0, P1, P2). They act as enforceable quality gates in CI to ensure changes with architectural objections cannot be merged without resolution or explicit override.
