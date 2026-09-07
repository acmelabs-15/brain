---
package: rjm
name: "Phase 6: Refresh Knowledge Only When Needed"
slug: phase-6-refresh-knowledge-only-when-needed
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 6: Refresh Knowledge Only When Needed

## Definition — verbatim
> "### Phase 6: Refresh Knowledge Only When Needed" — .claude/skills/ai-agents-portability-campaign/SKILL.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 215 | defined here | Final phase updating documentation and memory sidecars only when contract changes occur. |

## Consumes
Discovered harness behavioral shifts or new official release features.

## Produces
Updated `agent-harness-reference` documentation, probe logs, or ADRs.

## When applied
Executed at the conclusion of a campaign only if new contracts or runtime anomalies were confirmed.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
Phase 6 establishes documentation discipline by restricting knowledge base updates to instances where empirical behavior actually deviates from the settled contract. Preventing unnecessary documentation churn preserves focus on verified, stable specifications.
