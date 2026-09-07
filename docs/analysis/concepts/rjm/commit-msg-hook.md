---
package: rjm
name: commit-msg hook
slug: commit-msg-hook
kind: gate
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# commit-msg hook

## Definition — verbatim
(used, not defined)

> "P1: Create commit-msg hook for atomicity | Prevents non-atomic commits | 45 min | 5x ROI" — .agents/analysis/002-project-constraints-consolidation.md:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 254 | defined here | Proposed as an automated git hook mechanism to mechanically enforce atomic commits and file count thresholds. |

## Consumes
Prepared git commit message file (`.git/COMMIT_EDITMSG`) and staged file count.

## Produces
Validation exit code permitting or rejecting the commit operation.

## When applied
Triggered automatically by git during the commit lifecycle after the commit message is authored.

## Sub-concepts
atomic-commits

## Part of
verification-based-enforcement, pre-commit

## Implementation status
defects: missing-path

## Design notes
The commit-msg hook is an automated git validation gate designed to prevent commit discipline violations. In rjm, agents frequently bundled dozens of unrelated modifications into a single commit when relying on voluntary discipline. The commit-msg hook inspects the commit message format and staged file count, blocking non-atomic commits before they enter the local branch history.
