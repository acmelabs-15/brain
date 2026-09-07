---
package: rjm
name: merge_verdicts
slug: merge-verdicts
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge_verdicts

## Definition — verbatim
(used, not defined)

> "def merge_verdicts(verdicts: list[str]) -> str:" — scripts/ai_review_common/verdict.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 185 | used here | Reference to verdict aggregation function merging verdicts across all review axes. |
| .claude/skills/review/references/analyst.md | 199 | used here | Reference to merge_verdicts aggregating outcomes during PR review. |
| .claude/skills/review/references/architect.md | 234 | used here | Reference to merge_verdicts combining multi-axis review results. |
| .claude/skills/review/references/code-quality.md | 187 | used here | Reference to merge_verdicts synthesizing final PR review status. |
| .claude/skills/review/SKILL.md | 47 | used here | Review skill invocation of merge_verdicts to compute overall review outcome. |
| scripts/ai_review_common/__init__.py | 41 | used here | Public API re-export of merge_verdicts in ai_review_common package. |
| scripts/ai_review_common/quality_gate.py | 16 | used here | Facade module re-export of merge_verdicts for pipeline quality checks. |
| scripts/ai_review_common/verdict.py | 90 | defined here | Implementation of prioritized multi-verdict aggregation logic. |

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
clean

## Design notes
A Python function identifier in verdict.py that aggregates multiple review verdicts using a strict priority hierarchy, classified as name-only per D-023.
