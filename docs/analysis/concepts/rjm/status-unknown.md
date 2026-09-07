---
package: rjm
name: STATUS_UNKNOWN
slug: status-unknown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: scripts/quality_gate/resolve_pytest_signal.py, sha256: e4152823bcb9632e32537455c786e7c5fcd242267ac13eee834ee65d19f96811}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# STATUS_UNKNOWN

## Definition — verbatim
(used, not defined)

> "STATUS_UNKNOWN" — .claude/skills/adr-review/scripts/detect_adr_changes.py:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 243 | defined here | Constant defining the default fallback status string when ADR frontmatter is missing or unparseable. |
| scripts/quality_gate/resolve_pytest_signal.py | 56 | defined here | Constant identifying unresolved or indeterminate pytest test run status in CI signal evaluation. |
| scripts/validation/pr_commit_count.py | 81 | defined here | Sentinel status emitted when a transient GitHub API failure prevents counting commits on a PR. |

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
defects: exit-code-mismatch, missing-dependency, orphan

## Design notes
A Python variable identifier used across ADR parsing, pytest signal resolution, and commit count validation scripts to represent an indeterminate or failed status rather than an independent lifecycle concept.
