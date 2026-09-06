---
unit: inv-rjm-184
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-184

## Files assigned
- [x] sources/rjm/.github/scripts/measure_workflow_coalescing.py
- [x] sources/rjm/.github/scripts/parse_artifact_insights.py
- [x] sources/rjm/.github/scripts/parse_feature_review.py
- [x] sources/rjm/.github/scripts/parse_pr_standards.py
- [x] sources/rjm/.github/scripts/post_issue_comment.py
- [x] sources/rjm/.github/scripts/quality_gate_agents.py

## Outputs produced
- docs/analysis/inventory/rjm/github-scripts-measure-workflow-coalescing-py.md: 9926 bytes
- docs/analysis/inventory/rjm/github-scripts-parse-artifact-insights-py.md: 7225 bytes
- docs/analysis/inventory/rjm/github-scripts-parse-feature-review-py.md: 4867 bytes
- docs/analysis/inventory/rjm/github-scripts-parse-pr-standards-py.md: 6767 bytes
- docs/analysis/inventory/rjm/github-scripts-post-issue-comment-py.md: 8229 bytes
- docs/analysis/inventory/rjm/github-scripts-quality-gate-agents-py.md: 4000 bytes
- docs/analysis/inventory/rjm/_units/inv-rjm-184.md: 3805 bytes

## Scripts executed
- sources/rjm/.github/scripts/measure_workflow_coalescing.py: `python3 sources/rjm/.github/scripts/measure_workflow_coalescing.py`, exit code 0
- sources/rjm/.github/scripts/parse_artifact_insights.py: `RAW_OUTPUT='FINDING:\nTYPE: TODO\nTITLE: Fix workflow concurrency\nBODY: Review concurrency settings in workflow YAML\nPRIORITY: P1\nLABELS: automation, area-workflows\nSOURCE: run-123\n---' python3 sources/rjm/.github/scripts/parse_artifact_insights.py`, exit code 0
- sources/rjm/.github/scripts/parse_feature_review.py: `python3 sources/rjm/.github/scripts/parse_feature_review.py --raw-output "RECOMMENDATION: APPROVE\nASSIGNEES: user1\nLABELS: bug"`, exit code 0
- sources/rjm/.github/scripts/parse_pr_standards.py: `PR_TITLE="feat: test PR" PR_BODY="Fixes #123. Closes issue." GITHUB_OUTPUT=/dev/stdout python3 sources/rjm/.github/scripts/parse_pr_standards.py`, exit code 0
- sources/rjm/.github/scripts/post_issue_comment.py: `python3 sources/rjm/.github/scripts/post_issue_comment.py --issue 123 --body ""`, exit code 2
- sources/rjm/.github/scripts/quality_gate_agents.py: `python3 sources/rjm/.github/scripts/quality_gate_agents.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.github/scripts/measure_workflow_coalescing.py` was migrated from PowerShell (`.github/scripts/Measure-WorkflowCoalescing.ps1`) under ADR-042, but `docs/agent-metrics.md:331` still references the `.ps1` predecessor.
- `.github/scripts/parse_pr_standards.py` invokes `.claude/skills/github/scripts/pr/validate_pr_description.py`, wrapping it to write GITHUB_OUTPUT step variables following ADR-006 thin workflow architecture.
- `.github/scripts/post_issue_comment.py` is a specialized CI workflow wrapper version that writes GITHUB_OUTPUT variables, whereas `.claude/skills/github/scripts/issue/post_issue_comment.py` is the interactive skill version using `write_skill_output`.
- `quality_gate_agents.py` is imported directly by `scripts/quality_gate/external_signal_gate.py:59` via sys.path manipulation (`sys.path.insert(0, str(_GITHUB_SCRIPTS))`), coupling the scripts directory to `.github/scripts`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,300 tokens (49,349 bytes across 6 files).
- Approximate tokens of output written: ~10,200 tokens (~41,000 bytes across 6 inventory cards and 1 unit report).
