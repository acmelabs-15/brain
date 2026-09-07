---
package: rjm
name: Impact
slug: impact
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Impact

## Definition — verbatim
> "Impact: 3 (massive), 2 (high), 1 (medium), 0.5 (low), 0.25 (minimal)" — .claude/agents/roadmap.md:36

## Also called — verbatim
- `Impact Scale` — .claude/skills/threat-modeling/SKILL.md:225

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 36 | defined here | Defined as an impact score multiplier parameter in RICE prioritization. |
| .claude/skills/threat-modeling/SKILL.md | 225 | defined here | Defined as a three-tier impact scale for security threat evaluation. |

## Consumes
Feature proposals or identified security threats.

## Produces
A numerical or qualitative impact score (0.25 to 3 in RICE; High/Medium/Low in threat modeling).

## When applied
Applied during RICE feature prioritization and threat model risk scoring.

## Sub-concepts
none

## Part of
- rice-scoring
- threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
In rjm, Impact quantifies the magnitude of change or consequence, either as a multiplier in feature value calculation (RICE) or as a severity dimension in threat evaluation. By providing an explicit numerical scale, it eliminates vague assertions of importance and ensures consistent ranking across planning and security evaluations.
