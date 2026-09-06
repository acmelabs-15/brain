---
package: rjm
path: .claude/skills/code-qualities-assessment/references/calibration-examples.md
type: reference
bytes: 11720
unit: inv-rjm-100
in_scope_via: .claude/skills/code-qualities-assessment/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/calibration-examples.md, sha256: 79f51c12b66cb2543069b1a0239227fcd1e864961d5e6e1b8c386a84645103cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/references/calibration-examples.md

## Purpose — required, verbatim
> "Reference examples for consistent code quality scoring across teams." — .claude/skills/code-qualities-assessment/references/calibration-examples.md:3

## Design intent — required
Provide concrete, calibrated code snippets across all 5 maintainability qualities (cohesion, coupling, encapsulation, testability, non-redundancy) spanning four explicit scoring tiers (10/10 perfect, 7/10 good, 4/10 weak/moderate, 1/10 poor/absent). Each example includes an illustrative implementation accompanied by an explicit rationale ("Why X") explaining the score. It also provides language-specific adaptations for Python duck typing, TypeScript interface segregation, and C# property encapsulation, culminating in a 4-round team calibration workshop model designed to achieve 80%+ consensus within ±1 point. Without this reference, quality scoring would remain subjective, inconsistent across different developers or automated heuristics, and difficult to audit or train teams on.

## Phase — required
cross-phase

## Inputs — required
- Code implementations under assessment in Python, TypeScript, or C# — .claude/skills/code-qualities-assessment/references/calibration-examples.md:9
- Team calibration workshop scores across 4 scoring rounds — .claude/skills/code-qualities-assessment/references/calibration-examples.md:446

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc SKILL.md — .claude/skills/code-qualities-assessment/SKILL.md:444
- doc README.md — .claude/skills/code-qualities-assessment/README.md:37

## Concepts named — required, verbatim
- `Cohesion Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:5 — defined here
- `Perfect Cohesion` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:7 — defined here
- `Good Cohesion` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:26 — defined here
- `Weak Cohesion` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:49 — defined here
- `No Cohesion` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:69 — defined here
- `Coupling Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:92 — defined here
- `Minimal Coupling` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:94 — defined here
- `Loose Coupling` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:107 — defined here
- `Moderate Coupling` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:120 — defined here
- `Tight Coupling` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:135 — defined here
- `Encapsulation Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:155 — defined here
- `Perfect Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:157 — defined here
- `Good Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:174 — defined here
- `Weak Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:191 — defined here
- `No Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:206 — defined here
- `Testability Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:221 — defined here
- `Perfect Testability` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:223 — defined here
- `Good Testability` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:236 — defined here
- `Moderate Testability` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:254 — defined here
- `Hard to Test` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:272 — defined here
- `Non-Redundancy Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:299 — defined here
- `Zero Duplication` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:301 — defined here
- `Minimal Duplication` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:316 — defined here
- `Moderate Duplication` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:331 — defined here
- `Pervasive Duplication` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:351 — defined here
- `Language-Specific Adaptations` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:389 — defined here
- `Duck Typing Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:391 — defined here
- `Interface Segregation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:402 — defined here
- `Property Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:420 — defined here
- `Calibration Workshop` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:442 — defined here

## Structure
- `# Calibration Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:1
- `## Cohesion Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:5
- `### Score: 10/10 (Perfect Cohesion)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:7
- `### Score: 7/10 (Good Cohesion)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:26
- `### Score: 4/10 (Weak Cohesion)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:49
- `### Score: 1/10 (No Cohesion)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:69
- `## Coupling Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:92
- `### Score: 10/10 (Minimal Coupling)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:94
- `### Score: 7/10 (Loose Coupling)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:107
- `### Score: 4/10 (Moderate Coupling)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:120
- `### Score: 1/10 (Tight Coupling)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:135
- `## Encapsulation Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:155
- `### Score: 10/10 (Perfect Encapsulation)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:157
- `### Score: 7/10 (Good Encapsulation)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:174
- `### Score: 4/10 (Weak Encapsulation)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:191
- `### Score: 1/10 (No Encapsulation)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:206
- `## Testability Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:221
- `### Score: 10/10 (Perfect Testability)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:223
- `### Score: 7/10 (Good Testability)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:236
- `### Score: 4/10 (Moderate Testability)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:254
- `### Score: 1/10 (Hard to Test)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:272
- `## Non-Redundancy Examples` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:299
- `### Score: 10/10 (Zero Duplication)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:301
- `### Score: 7/10 (Minimal Duplication)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:316
- `### Score: 4/10 (Moderate Duplication)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:331
- `### Score: 1/10 (Pervasive Duplication)` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:351
- `## Language-Specific Adaptations` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:389
- `### Python: Duck Typing Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:391
- `### TypeScript: Interface Segregation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:402
- `### C#: Property Encapsulation` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:420
- `## Calibration Workshop` — .claude/skills/code-qualities-assessment/references/calibration-examples.md:442

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Avoids binary pass/fail assessments by establishing a granular 4-tier calibration spectrum (10, 7, 4, 1) across each quality axis.
- Explicitly accounts for intentional trade-offs; for example, line 329 documents that minimal duplication can be intentional and justified by differing domain contexts.
- Defines a collaborative team process (the 4-round Calibration Workshop) with an explicit consensus target: "80%+ agreement on scores within ±1 point" (line 451).

## Context cost
11720 bytes (~2930 tokens). Pure standalone reference.
