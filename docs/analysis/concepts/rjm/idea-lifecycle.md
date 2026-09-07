---
package: rjm
name: idea lifecycle
slug: idea-lifecycle
kind: pattern
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

# idea lifecycle

## Definition — verbatim
> "the idea lifecycle from contradiction log through probe, eval baseline, ADR debate, calibrated gate, and post-ship monitoring." — .claude/skills/ai-agents-research-methodology/SKILL.md:6-8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 6 | defined here \| used here | Defined in skill description as the 7-stage progression governing how hunches become accepted repository results. |

## Consumes
Research hypotheses, contradictory observations, and initial empirical probes.

## Produces
Inspectable governance artifacts across each stage, culminating in calibrated gates, validated skills, or documented retirements.

## When applied
When investigating and implementing non-trivial hypotheses, architectural changes, or new agent capabilities.

## Sub-concepts
contradiction-log, eval-baseline, adr-debate, calibrated-gate, post-ship-monitoring

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path

## Design notes
The idea lifecycle establishes the scientific method for repository governance and capability evolution in rjm. Requiring inspectable evidence and adversarial testing at each phase prevents architectural degradation caused by unverified assumptions (exemplified by PR #1989), ensuring that only ideas backed by empirical baselines and consensus debate become permanent repository infrastructure.
