---
package: rjm
path: .claude/skills/threat-modeling/references/stride-methodology.md
type: reference
bytes: 5003
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/stride-methodology.md

## Purpose — required, verbatim
> "STRIDE is a threat classification system developed by Microsoft. Each letter represents a category of security threat." — .claude/skills/threat-modeling/references/stride-methodology.md:3

## Design intent — required
Provides an exhaustive reference for the Microsoft STRIDE mnemonic (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege), defining target element mappings (External Entity, Process, Data Store, Data Flow), investigative questions, common mitigations, a STRIDE-per-Interaction variant, and typical risk factors.

## Phase — required
rjm:spec

## Inputs — required
System architecture models, data flow diagrams (DFDs), process definitions, trust boundaries, element types.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:472

## Concepts named — required, verbatim
- `STRIDE` — .claude/skills/threat-modeling/references/stride-methodology.md:3 — defined here
- `Spoofing Identity` — .claude/skills/threat-modeling/references/stride-methodology.md:7 — defined here
- `Tampering with Data` — .claude/skills/threat-modeling/references/stride-methodology.md:36 — defined here
- `Repudiation` — .claude/skills/threat-modeling/references/stride-methodology.md:65 — defined here
- `Information Disclosure` — .claude/skills/threat-modeling/references/stride-methodology.md:93 — defined here
- `Denial of Service` — .claude/skills/threat-modeling/references/stride-methodology.md:123 — defined here
- `Elevation of Privilege` — .claude/skills/threat-modeling/references/stride-methodology.md:153 — defined here
- `STRIDE per Element` — .claude/skills/threat-modeling/references/stride-methodology.md:182 — defined here
- `STRIDE-per-Interaction Variant` — .claude/skills/threat-modeling/references/stride-methodology.md:198 — defined here
- `Risk Rating with STRIDE` — .claude/skills/threat-modeling/references/stride-methodology.md:211 — defined here

## Structure
- `# STRIDE Methodology Reference` — .claude/skills/threat-modeling/references/stride-methodology.md:1
- `## Categories` — .claude/skills/threat-modeling/references/stride-methodology.md:5
- `### S - Spoofing Identity` — .claude/skills/threat-modeling/references/stride-methodology.md:7
- `### T - Tampering with Data` — .claude/skills/threat-modeling/references/stride-methodology.md:36
- `### R - Repudiation` — .claude/skills/threat-modeling/references/stride-methodology.md:65
- `### I - Information Disclosure` — .claude/skills/threat-modeling/references/stride-methodology.md:93
- `### D - Denial of Service` — .claude/skills/threat-modeling/references/stride-methodology.md:123
- `### E - Elevation of Privilege` — .claude/skills/threat-modeling/references/stride-methodology.md:153
- `## STRIDE per Element` — .claude/skills/threat-modeling/references/stride-methodology.md:182
- `## STRIDE-per-Interaction Variant` — .claude/skills/threat-modeling/references/stride-methodology.md:198
- `## Risk Rating with STRIDE` — .claude/skills/threat-modeling/references/stride-methodology.md:211
- `## References` — .claude/skills/threat-modeling/references/stride-methodology.md:224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes the STRIDE-per-Interaction variant asking 6 directional threat questions specifically for data flows crossing trust boundaries, and correlates each category with typical impact and likelihood drivers.

## Context cost
5003 bytes, ~1250 tokens.
