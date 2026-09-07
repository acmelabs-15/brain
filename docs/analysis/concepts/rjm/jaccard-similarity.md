---
package: rjm
name: Jaccard similarity
slug: jaccard-similarity
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
  - {path: .claude/skills/stuck-detection/SKILL.md, sha256: 2f9d0a80008c774d8d159505dfd7cc6cd42ffe2eafa704358716f9d12e71b1f9}
  - {path: .claude/skills/stuck-detection/stuck_detection.py, sha256: 99d4b403cad8ddf03b744832780919354d9fa22f95d9668378a7396cbfa3bc18}
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Jaccard similarity

## Definition — verbatim
> "Jaccard similarity of two token sets: |A and B| / |A or B|." — scripts/issue_triage.py:304

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-052-template-strategy.md | 48 | used here | Applied on tokenized sections of agent prompt files to measure prompt drift across platforms. |
| .claude/skills/stuck-detection/SKILL.md | 60 | used here | Explains comparison of current response topic signature against recent history entries. |
| .claude/skills/stuck-detection/stuck_detection.py | 114 | defined here | Function computing token intersection over union between comma-joined topic signatures. |
| scripts/issue_triage.py | 303 | defined here | Function calculating set overlap ratio between issue title token sets to detect duplicate issues. |

## Consumes
Two token sets, normalized strings, or word bags extracted from text artifacts.

## Produces
A floating point similarity ratio between 0.0 and 1.0.

## When applied
Used during agent prompt drift audits, loop detection in stuck session monitoring, and automated issue triage for duplicate detection.

## Sub-concepts
none

## Part of
- drift-detection

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Jaccard similarity provides a fast, deterministic, non-LLM metric for set overlap across rjm's tooling. By calculating the ratio of token intersection over union, rjm uses it for three distinct operational safeguards: measuring template-to-prompt drift in multi-platform agent distribution, detecting repetitive output loops in autonomous agent execution, and triaging duplicate backlog issues without incurring inference costs.
