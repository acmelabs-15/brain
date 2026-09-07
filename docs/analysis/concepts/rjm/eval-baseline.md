---
package: rjm
name: eval baseline
slug: eval-baseline
kind: artifact
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# eval baseline

## Definition — verbatim
> "from contradiction log through probe, eval baseline, ADR debate, calibrated gate, and post-ship monitoring." — .claude/skills/ai-agents-research-methodology/SKILL.md:7-8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 7 | defined here \| used here | Named as the Stage 3 quantitative artifact in the idea lifecycle establishing measurable benchmarks. |

## Consumes
Pre-registered evaluation scenario fixtures, zero-spend dry-run validations, and explicit numerical predictions.

## Produces
Measured performance numbers establishing the empirical standard against which new versions or proposed rules are judged.

## When applied
During Stage 3 of the research methodology lifecycle before writing architectural specifications or committing changes.

## Sub-concepts
none

## Part of
idea-lifecycle

## Implementation status
defects: missing-path

## Design notes
An eval baseline anchors capability development in measurable data rather than subjective impressions. By running standardized scenario suites (via tools like `eval-prompt-change.py`) and recording pre-change numbers, rjm ensures that proposed improvements can conclusively demonstrate statistical gains over the status quo, enforcing a strict 13-week prune rule for unbaselined ideas.
