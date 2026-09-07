---
package: rjm
name: Incident postmortems
slug: incident-postmortems
kind: technique
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

# Incident postmortems

## Definition — verbatim
> "Incident postmortems.** The `retrospective` skill turns an incident into Five-Whys evidence; the guard framework, `pre_pr.py`, and the anchoring contract all trace to specific incidents." — .claude/skills/ai-agents-research-methodology/SKILL.md:214-216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 214 | defined here \| used here | Defined as an essential source of empirical ideas turning incidents into Five-Whys evidence and foundational tooling. |

## Consumes
Production regressions, PR merge failures, security lapses, and developer workflow breakdowns.

## Produces
Five-Whys causal analyses, root-cause retrospectives, and permanent prevention contracts or automated guards.

## When applied
Following any non-trivial development incident, premature merge, or pipeline failure to prevent recurrence.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path

## Design notes
Incident postmortems serve as the catalyst for systemic governance evolution in rjm. By subjecting every significant incident to Five-Whys root-cause extraction, rjm avoids superficial blame and instead engineers durable, automated safeguards—such as `pre_pr.py` and hook runtime anchoring—directly addressing the structural vulnerabilities revealed by past failures.
