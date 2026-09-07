---
package: rjm
name: no-manual-bump enforcement
slug: no-manual-bump-enforcement
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

# no-manual-bump enforcement

## Definition — verbatim
> "5. **Strict-greater enforcement is replaced by no-manual-bump enforcement.** The" — .agents/architecture/ADR-091-post-merge-version-bot.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 151 | defines | Gate mechanism failing any PR whose diff manually modifies version fields in parity manifests. |

## Consumes
Pull request git diff for `.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`.

## Produces
Failure verdict instructing contributors to delegate version bumping to post-merge automation.

## When applied
Triggered on PR validation workflows.

## Sub-concepts
none

## Part of
pr-time-gate

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Inverted gate policy preventing developer contention on version numbers by rejecting manual version edits, leaving version increments to automated post-merge jobs.
