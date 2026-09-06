---
package: rjm
path: .claude/skills/threat-modeling/references/advanced-analysis.md
type: reference
bytes: 1286
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/advanced-analysis.md

## Purpose — required, verbatim
> "Optional techniques for complex threat analysis. Use when basic STRIDE is insufficient." — .claude/skills/threat-modeling/references/advanced-analysis.md:3

## Design intent — required
Provides supplemental security analysis methodologies beyond elemental STRIDE categorization, documenting Attack Trees for decomposing multi-step attack scenarios and Cyber Kill Chains for mapping progressive stages of sophisticated threats to defensive detection opportunities.

## Phase — required
rjm:spec

## Inputs — required
Complex threat scenarios, multi-step attack paths, or advanced persistent threat (APT) actor profiles requiring structured decomposition.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:205

## Concepts named — required, verbatim
- `STRIDE` — .claude/skills/threat-modeling/references/advanced-analysis.md:3 — used here
- `Attack Trees` — .claude/skills/threat-modeling/references/advanced-analysis.md:5 — defined here
- `Kill Chains` — .claude/skills/threat-modeling/references/advanced-analysis.md:27 — defined here
- `Recon` — .claude/skills/threat-modeling/references/advanced-analysis.md:33 — used here
- `Weaponize` — .claude/skills/threat-modeling/references/advanced-analysis.md:34 — used here
- `Deliver` — .claude/skills/threat-modeling/references/advanced-analysis.md:35 — used here
- `Exploit` — .claude/skills/threat-modeling/references/advanced-analysis.md:36 — used here
- `Install` — .claude/skills/threat-modeling/references/advanced-analysis.md:37 — used here
- `Command` — .claude/skills/threat-modeling/references/advanced-analysis.md:38 — used here
- `Action` — .claude/skills/threat-modeling/references/advanced-analysis.md:39 — used here
- `APT-style threats` — .claude/skills/threat-modeling/references/advanced-analysis.md:43 — used here
- `defense-in-depth` — .claude/skills/threat-modeling/references/advanced-analysis.md:45 — used here

## Structure
- `# Advanced Analysis Techniques` — .claude/skills/threat-modeling/references/advanced-analysis.md:1
- `## Attack Trees` — .claude/skills/threat-modeling/references/advanced-analysis.md:5
- `### When to Use` — .claude/skills/threat-modeling/references/advanced-analysis.md:21
- `## Kill Chains` — .claude/skills/threat-modeling/references/advanced-analysis.md:27
- `### When to Use` — .claude/skills/threat-modeling/references/advanced-analysis.md:41

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise reference document illustrating ASCII-based tree decomposition for data theft and a 7-stage Cyber Kill Chain progression mapping attacker actions to detection mechanisms.

## Context cost
1286 bytes, ~320 tokens.
