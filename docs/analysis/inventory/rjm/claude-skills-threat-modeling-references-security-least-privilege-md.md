---
package: rjm
path: .claude/skills/threat-modeling/references/security-least-privilege.md
type: reference
bytes: 4181
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/security-least-privilege.md

## Purpose — required, verbatim
> "Every program and user should operate using the minimum set of privileges necessary to complete their task." — .claude/skills/threat-modeling/references/security-least-privilege.md:9

## Design intent — required
Explains the Saltzer (1974) Principle of Least Privilege across diverse engineering domains (user accounts, service accounts, database grants, API scopes, managed identities) to limit blast radius upon breach, providing concrete questions for Phase 2 threat identification and a 7-point validation checklist for Phase 3 mitigations.

## Phase — required
rjm:spec

## Inputs — required
System identity configurations, service account roles, database permissions, API token scopes, threat model components and data flows.

## Outputs — required
none

## Invokes — required
- reference security-zero-trust.md — .claude/skills/threat-modeling/references/security-least-privilege.md:140
- reference security-defense-in-depth.md — .claude/skills/threat-modeling/references/security-least-privilege.md:141
- reference security-owasp-top-10.md — .claude/skills/threat-modeling/references/security-least-privilege.md:142

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:435
- reference security-defense-in-depth.md — .claude/skills/threat-modeling/references/security-defense-in-depth.md:78
- reference security-owasp-top-10.md — .claude/skills/threat-modeling/references/security-owasp-top-10.md:103
- reference security-zero-trust.md — .claude/skills/threat-modeling/references/security-zero-trust.md:98

## Concepts named — required, verbatim
- `Principle of Least Privilege` — .claude/skills/threat-modeling/references/security-least-privilege.md:7 — defined here
- `Core Insight` — .claude/skills/threat-modeling/references/security-least-privilege.md:13 — defined here
- `blast radius` — .claude/skills/threat-modeling/references/security-least-privilege.md:15 — used here
- `Service Accounts` — .claude/skills/threat-modeling/references/security-least-privilege.md:39 — used here
- `Database Access` — .claude/skills/threat-modeling/references/security-least-privilege.md:52 — used here
- `API Scopes` — .claude/skills/threat-modeling/references/security-least-privilege.md:63 — used here
- `Azure Managed Identity` — .claude/skills/threat-modeling/references/security-least-privilege.md:73 — used here
- `Common Violations` — .claude/skills/threat-modeling/references/security-least-privilege.md:85 — defined here
- `Validation Checklist` — .claude/skills/threat-modeling/references/security-least-privilege.md:117 — defined here
- `Zero Trust` — .claude/skills/threat-modeling/references/security-least-privilege.md:140 — used here
- `Defense in Depth` — .claude/skills/threat-modeling/references/security-least-privilege.md:141 — used here
- `Broken Access Control` — .claude/skills/threat-modeling/references/security-least-privilege.md:142 — used here

## Structure
- `# Principle of Least Privilege` — .claude/skills/threat-modeling/references/security-least-privilege.md:7
- `## Core Insight` — .claude/skills/threat-modeling/references/security-least-privilege.md:13
- `## Application Areas` — .claude/skills/threat-modeling/references/security-least-privilege.md:17
- `## Benefits` — .claude/skills/threat-modeling/references/security-least-privilege.md:28
- `## Implementation Examples` — .claude/skills/threat-modeling/references/security-least-privilege.md:37
- `### Service Accounts` — .claude/skills/threat-modeling/references/security-least-privilege.md:39
- `### Database Access` — .claude/skills/threat-modeling/references/security-least-privilege.md:52
- `### API Scopes` — .claude/skills/threat-modeling/references/security-least-privilege.md:63
- `### Azure Managed Identity` — .claude/skills/threat-modeling/references/security-least-privilege.md:73
- `## Common Violations` — .claude/skills/threat-modeling/references/security-least-privilege.md:85
- `## Applying to Threat Modeling` — .claude/skills/threat-modeling/references/security-least-privilege.md:95
- `### Phase 2 (Threat Identification)` — .claude/skills/threat-modeling/references/security-least-privilege.md:97
- `### Phase 3 (Mitigation Strategy)` — .claude/skills/threat-modeling/references/security-least-privilege.md:106
- `### Validation Checklist` — .claude/skills/threat-modeling/references/security-least-privilege.md:117
- `## Relationship to Zero Trust` — .claude/skills/threat-modeling/references/security-least-privilege.md:129
- `## Related` — .claude/skills/threat-modeling/references/security-least-privilege.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/threat-modeling/references/security-least-privilege.md:2 · Frontmatter source wiki/concepts/Design Principles/Principle of Least Privilege.md does not exist in repository.

## Observations
Contrasts over-privileged versus least-privilege configurations across Kubernetes YAML serviceAccount manifests, SQL GRANT statements, C# Microsoft Graph API scopes, and Azure Managed Identity clients.

## Context cost
4181 bytes, ~1045 tokens.
