---
package: rjm
name: Verdict library
slug: verdict-library
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verdict library

## Definition — verbatim
> "- **Verdict library** (`merge_verdicts`, `extract_verdict`, `get_verdict_emoji`, `FAIL_VERDICTS`): try each candidate in order, use the first that exists:" — .claude/skills/review/SKILL.md:47

## Also called — verbatim
> "Verdict module" — .claude/skills/review/SKILL.md:203

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 47 | defined here | Defines common verdict handling Python module candidate resolution. |

## Consumes
Candidate paths in Claude Code project layout (`.claude/lib/ai_review_common/verdict.py`) or vendored plugin root (`lib/ai_review_common/verdict.py`).

## Produces
Shared utility routines for regex-based verdict extraction, multi-axis verdict merging, display emoji mapping, and failure classification sets.

## When applied
Invoked when parsing individual axis outputs, synthesizing the final merged verdict, and formatting review findings tables.

## Sub-concepts
get_verdict_emoji, FAIL_VERDICTS, merged-verdict, verdict-token

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The verdict library centralizes verdict parsing, hierarchy merging, and visual formatting into a reusable Python module shared across review skills and automation pipelines. By standardizing verdict evaluation logic, rjm ensures consistent merge criteria regardless of whether review runs in Claude Code or vendored harness environments.
