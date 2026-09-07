---
package: rjm
name: PR identity gate
slug: pr-identity-gate
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR identity gate

## Definition — verbatim
> "**PR identity gate (required before reporting PR findings)**: When a PR" — .claude/agents/analyst.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 139 | defined here | Mandatory reconciliation gate matching PR metadata against local git checkout state. |
| src/claude/analyst.md | 139 | defined here | Source definition of the pull request identity gate. |
| templates/agents/analyst.shared.md | 154 | defined here | Shared analyst template enforcing PR identity validation before reporting findings. |

## Consumes
Pull request URL or number, GitHub API metadata, and local working tree checkout state (branch ref, commit SHA).

## Produces
Reconciled identity confirmation or an immediate halting error reporting contextual mismatch.

## When applied
Mandatory before reporting any findings on pull requests to ensure local files match remote PR state.

## Sub-concepts
none

## Part of
analyst-agent

## Implementation status
clean

## Design notes
PR identity gate is an integrity check preventing agents from analyzing stale or mismatched code. By verifying repository, head ref, and commit SHA between the GitHub API and local checkout, it halts execution on mismatch, ensuring analysis targets the exact code under review.
