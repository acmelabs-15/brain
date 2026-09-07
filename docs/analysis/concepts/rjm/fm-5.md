---
package: rjm
name: FM-5
slug: fm-5
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-5

## Definition — verbatim
> "Premature merge and deploy" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 87 | used here | Mapped as failure mode FM-5 representing premature merge and deploy anchored by the 2025-12-22 PR 226 incident. |

## Consumes
Unverified code branches, incomplete PR reviews, bypassed merge gates.

## Produces
Production outages, broken default branches, and rollbacks.

## When applied
When reviewing PR merge workflows or analyzing incidents caused by premature integration of unverified code.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-5 designates incidents where code changes are merged into primary branches or deployed before passing all required CI gates, peer reviews, or automated regressions. In rjm, FM-5 led to the implementation of pre-push hooks, protected branch policies, and multi-agent signoff gates to ensure unverified changes cannot be merged.
