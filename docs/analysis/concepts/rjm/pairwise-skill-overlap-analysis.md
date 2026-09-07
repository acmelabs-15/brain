---
package: rjm
name: Pairwise Skill Overlap Analysis
slug: pairwise-skill-overlap-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pairwise Skill Overlap Analysis

## Definition — verbatim
> "Pairwise Skill Overlap Analysis: detect redundancy between two skills." — scripts/eval/eval-skill-overlap.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 2 | defined here | Docstring title defining the methodology for detecting redundancy between skill pairs via parallel condition evaluation. |

## Consumes
Pairwise skill configuration (`cluster.json`), test prompts with expected answers, and skill directory artifacts (`SKILL.md`, `references/`).

## Produces
Machine-readable evaluation matrix (`matrix.json`), markdown report (`REPORT.md`), and pairwise overlap verdicts (`DISTINCT`, `OVERLAP`, `SUBSUMED`).

## When applied
Applied during catalog pruning and consolidation reviews to empirically determine whether skills duplicate capabilities.

## Sub-concepts
- distinct
- overlap
- subsumed

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
An empirical evaluation technique in rjm that runs three parallel conditions (baseline prompt, prompt with Skill A, prompt with Skill B) across each skill's native test prompts to objectively classify skill pairs as DISTINCT, OVERLAP, or SUBSUMED, replacing subjective developer intuition during catalog maintenance.
