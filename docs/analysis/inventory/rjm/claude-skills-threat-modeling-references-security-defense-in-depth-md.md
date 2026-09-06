---
package: rjm
path: .claude/skills/threat-modeling/references/security-defense-in-depth.md
type: reference
bytes: 3103
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/security-defense-in-depth.md

## Purpose — required, verbatim
> "Multiple independent protection layers so that if one fails, others continue to provide security. No single layer is relied upon exclusively." — .claude/skills/threat-modeling/references/security-defense-in-depth.md:9

## Design intent — required
Explains the architectural principle of layered, diverse, and independent defense mechanisms (reputation, content, behavior) to ensure that compromise of any single protective barrier does not expose critical assets, providing a 4-point verification checklist for evaluating threat model mitigations in Phase 3.

## Phase — required
rjm:spec

## Inputs — required
Mitigation proposals for Critical and High threats, protection layer definitions, latency and cost trade-off metrics.

## Outputs — required
none

## Invokes — required
- reference security-zero-trust.md — .claude/skills/threat-modeling/references/security-defense-in-depth.md:77
- reference security-least-privilege.md — .claude/skills/threat-modeling/references/security-defense-in-depth.md:78

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:432
- reference security-least-privilege.md — .claude/skills/threat-modeling/references/security-least-privilege.md:141
- reference security-owasp-top-10.md — .claude/skills/threat-modeling/references/security-owasp-top-10.md:101
- reference security-zero-trust.md — .claude/skills/threat-modeling/references/security-zero-trust.md:97

## Concepts named — required, verbatim
- `Defense in Depth` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:7 — defined here
- `redundancy in defense, diversity in mechanism` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:11 — defined here
- `Protection Layer Model` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:13 — defined here
- `Independence` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:25 — defined here
- `Diversity` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:29 — defined here
- `Graceful Degradation` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:33 — defined here
- `Cost-Latency Tradeoff` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:37 — defined here
- `Mitigation Checklist` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:57 — defined here
- `Zero Trust` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:77 — used here
- `Least Privilege` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:78 — used here

## Structure
- `# Defense in Depth` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:7
- `## Protection Layer Model` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:13
- `## Architectural Principles` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:23
- `### Independence` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:25
- `### Diversity` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:29
- `### Graceful Degradation` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:33
- `### Cost-Latency Tradeoff` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:37
- `## Applying to Threat Modeling` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:48
- `### Mitigation Checklist` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:57
- `## Application Beyond Security` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:66
- `## Related` — .claude/skills/threat-modeling/references/security-defense-in-depth.md:75

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/threat-modeling/references/security-defense-in-depth.md:2 · Frontmatter source wiki/concepts/Architectural Patterns/Defense in Depth.md does not exist in repository.

## Observations
Extends the defense-in-depth concept beyond traditional perimeter security into data integrity (input validation, database constraints), service reliability (circuit breakers, retries), deployment safety (canaries, progressive rollouts), and observability.

## Context cost
3103 bytes, ~775 tokens.
