---
package: rjm
path: .claude/skills/threat-modeling/references/security-zero-trust.md
type: reference
bytes: 3685
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/security-zero-trust.md

## Purpose — required, verbatim
> "No actor, system, network, or service is trusted by default. Every access request must be continuously validated." — .claude/skills/threat-modeling/references/security-zero-trust.md:9

## Design intent — required
Explains the Zero Trust paradigm ("assume breach", verify explicitly, least privilege access) where identity replaces the network perimeter, detailing context-based access decisions, two-stage classification models, administrative tier separation, and actionable guidance for trust boundary mapping and mitigation strategy design in threat models.

## Phase — required
rjm:spec

## Inputs — required
Network architectures, trust boundary definitions, service authentication/authorization mechanisms, identity federation configurations.

## Outputs — required
none

## Invokes — required
- reference security-defense-in-depth.md — .claude/skills/threat-modeling/references/security-zero-trust.md:97
- reference security-least-privilege.md — .claude/skills/threat-modeling/references/security-zero-trust.md:98
- reference security-owasp-top-10.md — .claude/skills/threat-modeling/references/security-zero-trust.md:99

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:433
- reference security-defense-in-depth.md — .claude/skills/threat-modeling/references/security-defense-in-depth.md:77
- reference security-least-privilege.md — .claude/skills/threat-modeling/references/security-least-privilege.md:140
- reference security-owasp-top-10.md — .claude/skills/threat-modeling/references/security-owasp-top-10.md:102

## Concepts named — required, verbatim
- `Zero Trust` — .claude/skills/threat-modeling/references/security-zero-trust.md:7 — defined here
- `Verify explicitly` — .claude/skills/threat-modeling/references/security-zero-trust.md:23 — defined here
- `Least privilege access` — .claude/skills/threat-modeling/references/security-zero-trust.md:24 — defined here
- `Assume breach` — .claude/skills/threat-modeling/references/security-zero-trust.md:25 — defined here
- `Context-Based Decision Making` — .claude/skills/threat-modeling/references/security-zero-trust.md:27 — defined here
- `Two-Stage Models` — .claude/skills/threat-modeling/references/security-zero-trust.md:37 — defined here
- `Identity as the Perimeter` — .claude/skills/threat-modeling/references/security-zero-trust.md:44 — defined here
- `Tier Model` — .claude/skills/threat-modeling/references/security-zero-trust.md:56 — defined here
- `Tier 0` — .claude/skills/threat-modeling/references/security-zero-trust.md:60 — used here
- `Tier 1` — .claude/skills/threat-modeling/references/security-zero-trust.md:61 — used here
- `Tier 2` — .claude/skills/threat-modeling/references/security-zero-trust.md:62 — used here
- `Defense in Depth` — .claude/skills/threat-modeling/references/security-zero-trust.md:97 — used here
- `Least Privilege` — .claude/skills/threat-modeling/references/security-zero-trust.md:98 — used here
- `OWASP Top 10` — .claude/skills/threat-modeling/references/security-zero-trust.md:99 — used here

## Structure
- `# Zero Trust` — .claude/skills/threat-modeling/references/security-zero-trust.md:7
- `## Evolution` — .claude/skills/threat-modeling/references/security-zero-trust.md:13
- `## Three Principles` — .claude/skills/threat-modeling/references/security-zero-trust.md:21
- `## Context-Based Decision Making` — .claude/skills/threat-modeling/references/security-zero-trust.md:27
- `### Two-Stage Models` — .claude/skills/threat-modeling/references/security-zero-trust.md:37
- `## Identity as the Perimeter` — .claude/skills/threat-modeling/references/security-zero-trust.md:44
- `## Tier Model` — .claude/skills/threat-modeling/references/security-zero-trust.md:56
- `## Applying to Threat Modeling` — .claude/skills/threat-modeling/references/security-zero-trust.md:66
- `### Phase 1 (Scope and Decompose)` — .claude/skills/threat-modeling/references/security-zero-trust.md:68
- `### Phase 2 (Threat Identification)` — .claude/skills/threat-modeling/references/security-zero-trust.md:76
- `### Phase 3 (Mitigation Strategy)` — .claude/skills/threat-modeling/references/security-zero-trust.md:85
- `## Related` — .claude/skills/threat-modeling/references/security-zero-trust.md:95

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/threat-modeling/references/security-zero-trust.md:2 · Frontmatter source wiki/concepts/Design Principles/Zero Trust.md does not exist in repository.

## Observations
Defines the three-tier administrative isolation model (Tier 0 Identity infrastructure, Tier 1 Enterprise servers/apps, Tier 2 User workstations) governed by the rule that no entity may access or control a more privileged tier than its own.

## Context cost
3685 bytes, ~920 tokens.
