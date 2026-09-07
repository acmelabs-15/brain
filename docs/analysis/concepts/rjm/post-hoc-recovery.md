---
package: rjm
name: post-hoc recovery
slug: post-hoc-recovery
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# post-hoc recovery

## Definition — verbatim
> "failed, so this is post-hoc recovery, not independent replication. Recovering" — .claude/skills/context-optimizer/references/rule-audit-evidence.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 109 | defined here | Defines the retrospective forensic recovery process extracting complete judge payloads from transcripts to salvage dropped samples. |

## Consumes
Copilot CLI session transcripts and un-truncated historical logs.

## Produces
Complete evaluation payloads and reconstructed score matrices for flawed historical runs.

## When applied
Applied retrospectively to diagnose parser failure modes and salvage evaluations without introducing outcome selection bias.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`post-hoc recovery` in rjm describes the forensic reconstruction of dropped or truncated evaluation verdicts from raw execution transcripts. While essential for understanding failure modes and salvaging data without outcome selection, rjm explicitly distinguishes it from independent confirmatory replication.
