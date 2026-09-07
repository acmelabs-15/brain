---
package: rjm
name: PR-time gate
slug: pr-time-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR-time gate

## Definition — verbatim
> "1. **PRs MUST NOT include version bumps in `plugin.json`.** The PR-time gate is" — .agents/architecture/ADR-091-post-merge-version-bot.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 127 | defines | Defines the shift in PR validation rules from verifying version increments to rejecting manual version edits. |

## Consumes
Pull request git diff and modified manifest files.

## Produces
Workflow pass/fail verdict blocking merging of non-compliant PRs.

## When applied
Evaluated on pull request open, synchronize, and review before merge.

## Sub-concepts
no-manual-bump-enforcement

## Part of
ci-validation

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
CI verification checkpoint executed during pull request lifecycle to enforce branch constraints, inverted in ADR-091 to forbid PR authors from modifying version counters directly.
