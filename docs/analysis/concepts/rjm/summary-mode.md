---
package: rjm
name: summary mode
slug: summary-mode
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# summary mode

## Definition — verbatim
> "When diff exceeds `MAX_DIFF_LINES`, switches to **summary mode** (stat-only, no patch content)" — .agents/architecture/ADR-021-model-routing-strategy.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 30 | defined here | Operating mode where PR review context contains only stat-level summaries rather than patch content when diff exceeds MAX_DIFF_LINES. |

## Consumes
Pull request diffs exceeding the MAX_DIFF_LINES threshold.

## Produces
Stat-only diff summaries without patch content for AI review contexts.

## When applied
When a pull request diff exceeds MAX_DIFF_LINES during context construction in the AI review action.

## Sub-concepts
none

## Part of
tiered-model-routing-strategy

## Implementation status
defects: missing-path

## Design notes
Summary mode is a context-reduction fallback pattern in the GitHub Actions review pipeline for oversized pull requests. When a diff exceeds the configured line ceiling, the pipeline supplies only file-level statistics instead of line-by-line diff patches. ADR-021 establishes that because models in summary mode cannot inspect actual code changes, reviews must be restricted to risk and scope analysis rather than bug detection, preventing false passes.
