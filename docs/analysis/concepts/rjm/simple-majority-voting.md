---
package: rjm
name: Simple majority voting
slug: simple-majority-voting
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Simple majority voting

## Definition — verbatim
(used, not defined)
> "Simple majority voting" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 21 | used here | Cited in the technique selection guide as an aggregation baseline superseded by complexity-weighted voting. |

## Consumes
Multiple candidate outputs or reasoning chains sampled from an identical prompt.

## Produces
A winning prediction determined by raw, unweighted vote counts across sampled responses.

## When applied
Applied when aggregating categorical or exact-match predictions across multiple model samples without weighting reasoning depth.

## Sub-concepts
none

## Part of
aggregation-and-consistency

## Implementation status
clean

## Design notes
An aggregation baseline in multi-turn prompting where candidate completions are evaluated purely by frequency across samples. In rjm's multi-turn prompt engineering reference, simple majority voting is highlighted as vulnerable to low-effort shortcut reasoning, motivating complexity-weighted voting and meta-reasoning approaches.
