---
package: rjm
path: .claude/skills/threat-modeling/SKILL.md
type: skill
bytes: 16191
unit: inv-rjm-178
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/threat-modeling/SKILL.md

## Purpose — required, verbatim
> "description: Structured security analysis using OWASP Four-Question Framework and STRIDE methodology. Generates threat matrices with risk ratings, mitigations, and prioritization. Use for attack surface analysis, security architecture review, or when asking what can go wrong. Do NOT use for per-change diff or snippet risk review; use security-review instead." — .claude/skills/threat-modeling/SKILL.md:4
> "Systematic identification, documentation, and mitigation of security threats." — .claude/skills/threat-modeling/SKILL.md:10

## Design intent — required
Establishes a structured, comprehensive security threat modeling methodology for systems, components, and new features during design and specification phases. Organized around the OWASP Four-Question Framework across four lifecycle phases: (1) Scope & Decompose (creating DFDs, identifying assets, and mapping trust boundaries), (2) Threat Identification (applying STRIDE systematically across architecture elements and generating threat matrices), (3) Mitigation Strategy (rating risk via Likelihood x Impact, selecting strategies from Mitigate/Accept/Transfer/Eliminate, documenting mitigations, and calculating residual risk), and (4) Validation (enforcing automated model verification via `validate_threat_model.py` and peer reviews). Without this skill, security assessments during planning would be ad-hoc and inconsistent, frequently overlooking threat classes across trust boundaries.

## Phase — required
rjm:spec, rjm:plan

## Inputs — required
Architecture diagram or description, component list, data flow description, prior threat model, or feature specifications handling sensitive data or authentication (lines 24–29, 61–64).

## Outputs — required
Threat model documents saved to `.agents/security/threat-models/` containing scope, data flow diagrams, component inventories, trust boundaries, STRIDE threat matrices, prioritized mitigations with residual risk scores, and validation checklists (lines 26–29, 50–53, 345–373).

## Invokes — required
- skill security-detection — .claude/skills/threat-modeling/SKILL.md:66
- skill pre-mortem — .claude/skills/threat-modeling/SKILL.md:70
- script generate_threat_matrix.py — .claude/skills/threat-modeling/SKILL.md:186
- reference advanced-analysis.md — .claude/skills/threat-modeling/SKILL.md:205
- script generate_mitigation_roadmap.py — .claude/skills/threat-modeling/SKILL.md:278
- script validate_threat_model.py — .claude/skills/threat-modeling/SKILL.md:294
- template threat-model-template.md — .claude/skills/threat-modeling/SKILL.md:347
- agent security — .claude/skills/threat-modeling/SKILL.md:383
- agent architect — .claude/skills/threat-modeling/SKILL.md:384
- agent analyst — .claude/skills/threat-modeling/SKILL.md:385
- agent qa — .claude/skills/threat-modeling/SKILL.md:386
- reference security-defense-in-depth.md — .claude/skills/threat-modeling/SKILL.md:432
- reference security-zero-trust.md — .claude/skills/threat-modeling/SKILL.md:433
- reference security-owasp-top-10.md — .claude/skills/threat-modeling/SKILL.md:434
- reference security-least-privilege.md — .claude/skills/threat-modeling/SKILL.md:435
- reference stride-methodology.md — .claude/skills/threat-modeling/SKILL.md:472
- reference risk-rating-guide.md — .claude/skills/threat-modeling/SKILL.md:473
- skill codeql-scan — .claude/skills/threat-modeling/SKILL.md:485
- skill adr-review — .claude/skills/threat-modeling/SKILL.md:486

## Invoked by — required
- reference agent-safety.md — .claude/skills/review/references/agent-safety.md:55
- skill security-scan — .claude/skills/security-scan/SKILL.md:55
- skill pre-mortem — .claude/skills/pre-mortem/SKILL.md:44
- skill chaos-experiment — .claude/skills/chaos-experiment/SKILL.md:54
- doc skill-reference.md — docs/skill-reference.md:88

## Concepts named — required, verbatim
- `OWASP Four-Question Framework` — .claude/skills/threat-modeling/SKILL.md:4 — used here
- `STRIDE` — .claude/skills/threat-modeling/SKILL.md:4 — used here
- `attack surface analysis` — .claude/skills/threat-modeling/SKILL.md:4 — used here
- `security architecture review` — .claude/skills/threat-modeling/SKILL.md:4 — used here
- `Data Flow Diagram` — .claude/skills/threat-modeling/SKILL.md:109 — used here
- `Component Diagram` — .claude/skills/threat-modeling/SKILL.md:110 — used here
- `Sequence Diagram` — .claude/skills/threat-modeling/SKILL.md:111 — used here
- `Deployment Diagram` — .claude/skills/threat-modeling/SKILL.md:112 — used here
- `External Entities` — .claude/skills/threat-modeling/SKILL.md:126 — defined here
- `Processes` — .claude/skills/threat-modeling/SKILL.md:127 — defined here
- `Data Stores` — .claude/skills/threat-modeling/SKILL.md:128 — defined here
- `Data Flows` — .claude/skills/threat-modeling/SKILL.md:129 — defined here
- `Trust Boundaries` — .claude/skills/threat-modeling/SKILL.md:130 — defined here
- `**S**poofing` — .claude/skills/threat-modeling/SKILL.md:165 — defined here
- `**T**ampering` — .claude/skills/threat-modeling/SKILL.md:166 — defined here
- `**R**epudiation` — .claude/skills/threat-modeling/SKILL.md:167 — defined here
- `**I**nfo Disclosure` — .claude/skills/threat-modeling/SKILL.md:168 — defined here
- `**D**enial of Service` — .claude/skills/threat-modeling/SKILL.md:169 — defined here
- `**E**levation of Privilege` — .claude/skills/threat-modeling/SKILL.md:170 — defined here
- `Risk Rating` — .claude/skills/threat-modeling/SKILL.md:213 — defined here
- `Likelihood` — .claude/skills/threat-modeling/SKILL.md:220 — defined here
- `Impact` — .claude/skills/threat-modeling/SKILL.md:225 — defined here
- `Critical` — .claude/skills/threat-modeling/SKILL.md:235 — defined here
- `High` — .claude/skills/threat-modeling/SKILL.md:221 — defined here
- `Medium` — .claude/skills/threat-modeling/SKILL.md:222 — defined here
- `Low` — .claude/skills/threat-modeling/SKILL.md:223 — defined here
- `Mitigate` — .claude/skills/threat-modeling/SKILL.md:243 — defined here
- `Accept` — .claude/skills/threat-modeling/SKILL.md:244 — defined here
- `Transfer` — .claude/skills/threat-modeling/SKILL.md:245 — defined here
- `Eliminate` — .claude/skills/threat-modeling/SKILL.md:246 — defined here
- `Residual Risk` — .claude/skills/threat-modeling/SKILL.md:272, 371 — defined here
- `Defense in Depth` — .claude/skills/threat-modeling/SKILL.md:432 — used here
- `Zero Trust` — .claude/skills/threat-modeling/SKILL.md:433 — used here
- `OWASP Top 10` — .claude/skills/threat-modeling/SKILL.md:434 — used here
- `Least Privilege` — .claude/skills/threat-modeling/SKILL.md:435 — used here
- `Attack Trees` — .claude/skills/threat-modeling/SKILL.md:441 — used here
- `Cyber Kill Chain` — .claude/skills/threat-modeling/SKILL.md:442 — used here
- `vendor-portability` — .claude/skills/threat-modeling/SKILL.md:488 — used here

## Structure
- `# Threat Modeling` — .claude/skills/threat-modeling/SKILL.md:8
- `## Triggers` — .claude/skills/threat-modeling/SKILL.md:12
- `## Quick Reference` — .claude/skills/threat-modeling/SKILL.md:22
- `## Process Overview` — .claude/skills/threat-modeling/SKILL.md:33
- `## When to Use` — .claude/skills/threat-modeling/SKILL.md:57
- `## Phase 1: Scope and Decompose` — .claude/skills/threat-modeling/SKILL.md:76
- `### 1.1 Define Scope` — .claude/skills/threat-modeling/SKILL.md:80
- `### 1.2 Create Architecture Model` — .claude/skills/threat-modeling/SKILL.md:103
- `### 1.3 Identify Assets` — .claude/skills/threat-modeling/SKILL.md:132
- `### 1.4 Map Trust Boundaries` — .claude/skills/threat-modeling/SKILL.md:144
- `## Phase 2: Threat Identification` — .claude/skills/threat-modeling/SKILL.md:155
- `### 2.1 Apply STRIDE per Element` — .claude/skills/threat-modeling/SKILL.md:159
- `### 2.2 Build Threat Matrix` — .claude/skills/threat-modeling/SKILL.md:181
- `### 2.3 Advanced Analysis (Optional)` — .claude/skills/threat-modeling/SKILL.md:203
- `## Phase 3: Mitigation Strategy` — .claude/skills/threat-modeling/SKILL.md:209
- `### 3.1 Risk Rating` — .claude/skills/threat-modeling/SKILL.md:213
- `### 3.2 Select Mitigation Strategy` — .claude/skills/threat-modeling/SKILL.md:239
- `### 3.3 Document Mitigations` — .claude/skills/threat-modeling/SKILL.md:248
- `### 3.4 Generate Mitigation Roadmap` — .claude/skills/threat-modeling/SKILL.md:275
- `## Phase 4: Validation` — .claude/skills/threat-modeling/SKILL.md:285
- `### 4.1 Model Validation` — .claude/skills/threat-modeling/SKILL.md:289
- `### 4.2 Peer Review` — .claude/skills/threat-modeling/SKILL.md:306
- `### 4.3 Schedule Updates` — .claude/skills/threat-modeling/SKILL.md:314
- `## Scripts` — .claude/skills/threat-modeling/SKILL.md:325
- `### Exit Codes` — .claude/skills/threat-modeling/SKILL.md:333
- `## Templates` — .claude/skills/threat-modeling/SKILL.md:343
- `### Threat Model Document` — .claude/skills/threat-modeling/SKILL.md:345
- `### Threat Entry` — .claude/skills/threat-modeling/SKILL.md:349
- `## Integration with Agent System` — .claude/skills/threat-modeling/SKILL.md:377
- `### Related Agents` — .claude/skills/threat-modeling/SKILL.md:379
- `### Memory Integration` — .claude/skills/threat-modeling/SKILL.md:388
- `## Anti-Patterns` — .claude/skills/threat-modeling/SKILL.md:415
- `## References` — .claude/skills/threat-modeling/SKILL.md:428
- `### Supplementary Knowledge` — .claude/skills/threat-modeling/SKILL.md:430
- `### External` — .claude/skills/threat-modeling/SKILL.md:437
- `## Verification` — .claude/skills/threat-modeling/SKILL.md:446
- `### Success Criteria` — .claude/skills/threat-modeling/SKILL.md:448
- `### Verification Command` — .claude/skills/threat-modeling/SKILL.md:458
- `## Extension Points` — .claude/skills/threat-modeling/SKILL.md:468
- `## Related Skills` — .claude/skills/threat-modeling/SKILL.md:480

## Scripts — required if type is script or the skill ships scripts
The skill ships three Python scripts:
1. `scripts/generate_threat_matrix.py`:
   - path: `.claude/skills/threat-modeling/scripts/generate_threat_matrix.py`, language: Python, lines: 256
   - documented invocation:
     - "python .claude/skills/threat-modeling/scripts/generate_threat_matrix.py \" — .claude/skills/threat-modeling/SKILL.md:186
     - "python scripts/generate_threat_matrix.py --scope \"Name\" --output path.md" — .claude/skills/threat-modeling/SKILL.md:329
   - **executed:** yes (in inv-rjm-177)
   - actual command run: `python3 .claude/skills/threat-modeling/scripts/generate_threat_matrix.py --scope "Authentication Service" --output /tmp/auth-threats.md`, actual exit code: 0
   - documented exit codes vs. actual exit paths:
     - documented: "0" — .claude/skills/threat-modeling/SKILL.md:337, "1" — .claude/skills/threat-modeling/SKILL.md:338
     - actual exit paths: `return 0` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:218, `return 1` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:251
   - does the output match what the documentation claims? Yes.
2. `scripts/generate_mitigation_roadmap.py`:
   - path: `.claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py`, language: Python, lines: 373
   - documented invocation:
     - "python .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py \" — .claude/skills/threat-modeling/SKILL.md:278
     - "python scripts/generate_mitigation_roadmap.py --input threats.md --output roadmap.md" — .claude/skills/threat-modeling/SKILL.md:330
   - **executed:** yes (in inv-rjm-177)
   - actual command run: `python3 .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py --input /tmp/auth-threats.md --output /tmp/auth-roadmap.md`, actual exit code: 0
   - documented exit codes vs. actual exit paths:
     - documented: "0" — .claude/skills/threat-modeling/SKILL.md:337, "1" — .claude/skills/threat-modeling/SKILL.md:338
     - actual exit paths: `return 0` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:330, `return 1` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:364
   - does the output match what the documentation claims? Yes.
3. `scripts/validate_threat_model.py`:
   - path: `.claude/skills/threat-modeling/scripts/validate_threat_model.py`, language: Python, lines: 410
   - documented invocation:
     - "python .claude/skills/threat-modeling/scripts/validate_threat_model.py \" — .claude/skills/threat-modeling/SKILL.md:294
     - "python scripts/validate_threat_model.py <model.md>" — .claude/skills/threat-modeling/SKILL.md:331
     - "python .claude/skills/threat-modeling/scripts/validate_threat_model.py <model.md>" — .claude/skills/threat-modeling/SKILL.md:461
   - **executed:** yes
   - actual command run: `python3 sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md`, actual exit code: 0
   - documented exit codes vs. actual exit paths:
     - documented:
       - "| 0 | Success / Validation passed |" — .claude/skills/threat-modeling/SKILL.md:337
       - "| 1 | General failure |" — .claude/skills/threat-modeling/SKILL.md:338
       - "| 10 | Validation failed (missing required elements) |" — .claude/skills/threat-modeling/SKILL.md:339
     - actual exit paths:
       - `return 0 if passed else 10` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:405
       - `sys.exit(main())` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:409
   - for validators/gates: can exit non-zero (exits 10 on validation failure, missing file, or traversal); exits 0 on valid template.
   - does the output match what the documentation claims? Yes.

## Defects — required
- `exit-code-mismatch` · .claude/skills/threat-modeling/SKILL.md:338 — Documents exit code 1 for "General failure", but `validate_threat_model.py` maps all errors (including missing files and traversal) to exit code 10 (`return 0 if passed else 10` at `.claude/skills/threat-modeling/scripts/validate_threat_model.py:405`), never explicitly returning 1.
- `missing-path` · .claude/skills/threat-modeling/SKILL.md:393 — Documents Forgetful memory integration invoking `mcp__forgetful__execute_forgetful_tool`, which references external/excluded memory tools beyond the lifecycle boundary.

## Observations
`threat-modeling` provides a rigorous security design workflow within `rjm`, linking OWASP Four-Question Framework with STRIDE, DFDs, structured risk scoring (Likelihood x Impact), mitigation categorization (Mitigate, Accept, Transfer, Eliminate), and automated markdown validation. A vendor portability declaration is included on line 488 noting that generated threat models target `.agents/security/threat-models/` created on demand.

## Context cost
16191 bytes (~4048 tokens). When fully loading referenced scripts, template, and references (7 reference files ~24KB, 3 scripts ~27KB, 1 template ~9KB), total context cost is ~76KB (~19000 tokens).
