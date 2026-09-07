---
package: rjm
name: Phase 0 evidence
slug: phase-0-evidence
kind: artifact
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/extract_evidence.py, sha256: a48eb99dbb8bf1d848093e8a5454641f6d9c478181bca655de52ff7835f826e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 0 evidence

## Definition — verbatim
> "Gather Phase 0 evidence for a retrospective." — .claude/skills/retrospective/scripts/extract_evidence.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/extract_evidence.py | 2 | defined here | Docstring definition of empirical data gathered from session logs and git history for retrospective analysis. |

## Consumes
Session logs under `.agents/sessions/` and git commit history across the retrospective period.

## Produces
JSON evidence bundle detailing work items, outcomes, git commits, and source availability flags.

## When applied
Gathered during Phase 0 of the retrospective workflow prior to any diagnostic interpretation.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
clean

## Design notes
Phase 0 evidence denotes the objective, empirical data foundation collected before any retrospective diagnosis begins. Gathering unmanipulated session logs and git commit records enforces the rule that factual observation strictly precedes interpretation, preventing retrospective analysis from being corrupted by recency bias or unsupported impressions.
