---
package: rjm
name: recovered prefixes
slug: recovered-prefixes
kind: artifact
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

# recovered prefixes

## Definition — verbatim
(used, not defined)

> "samples from recovered prefixes, and ten take one. An earlier draft called" — .claude/skills/context-optimizer/references/rule-audit-evidence.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 39 | used here | Describes judge samples salvaged from 200-character truncated output prefixes stored in run artifacts to recompute cell scores. |

## Consumes
Truncated judge output strings stored in eval run artifacts up to the 200-character truncation ceiling.

## Produces
Recovered evaluation samples providing partial or full score fields when salvaged.

## When applied
Applied during post-hoc forensic evaluation when complete transcript payloads were initially unavailable.

## Sub-concepts
none

## Part of
- post-hoc-recovery

## Implementation status
clean

## Design notes
`recovered prefixes` represents the truncated 200-character judge output segments preserved in early evaluation run artifacts. In rjm's audit forensics, these prefixes allowed partial score recovery and revealed truncation error patterns, but were eventually superseded by full payload extraction from CLI session transcripts.
