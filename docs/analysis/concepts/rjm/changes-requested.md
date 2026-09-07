---
package: rjm
name: CHANGES_REQUESTED
slug: changes-requested
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: scripts/ci/detect_human_changes_requested.py, sha256: 54c20c8899411a5c94c089ced5574b0ca47d2597c231025d1edcc08f894bdab1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CHANGES_REQUESTED

## Definition — verbatim
> "Detect human CHANGES_REQUESTED reviews on a PR." — scripts/ci/detect_human_changes_requested.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 361 | defined here | Reason code assigned when PR reviewDecision equals CHANGES_REQUESTED. |
| scripts/ci/detect_human_changes_requested.py | 1 | used here | Target review verdict state detected on pull requests to distinguish human blockers from bot reviews. |

## Consumes
Pull request review submissions and proposed code changes.

## Produces
Blocking review gate requiring author updates or review approval prior to merge.

## When applied
Applied when a reviewer submits a formal review rejecting current PR changes and requesting revisions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, orphan

## Design notes
CHANGES_REQUESTED is GitHub's authoritative review decision gate indicating that a reviewer has identified blockers that must be resolved before merging. In rjm's PR automation architecture, detection scripts specifically distinguish human CHANGES_REQUESTED from bot reviews to prevent automated workflows from ignoring human feedback while facilitating automated replies.
