---
package: rjm
path: .claude/skills/threat-modeling/templates/threat-model-template.md
type: skill
bytes: 9202
unit: inv-rjm-178
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/templates/threat-model-template.md

## Purpose — required, verbatim
> "# Threat Model: [System/Feature Name]" — .claude/skills/threat-modeling/templates/threat-model-template.md:1
(no explicit purpose statement)

## Design intent — required
Serves as the canonical markdown template and worked example for authoring structured threat model documents. It defines standard sections and tabular structures covering document metadata, Scope (subject, boundaries, stakeholders), Architecture Overview (textual data flow diagram, components table, data flows table, trust boundaries, and classified assets), STRIDE Analysis (per-category threat tables across Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege), Threat Matrix Summary (central tracking table mapping threats to STRIDE categories, likelihood, impact, risk, and mitigation status), Mitigations (prioritized subsections with actionable checklists, owners, and sprint targets for Critical/High, Medium, and Accepted Risks), Validation Checklist, Revision History, and References. By providing realistic worked examples alongside placeholders, it ensures consistency and completeness across architecture reviews.

## Phase — required
rjm:spec

## Inputs — required
- System/feature architecture details, DFDs, and component boundaries
- Threat identification findings, STRIDE categories, and risk ratings
- Planned mitigations, owners, and target sprint dates

## Outputs — required
- Completed threat model document (e.g. `.agents/security/threat-models/<name>.md`)
- Input document for `validate_threat_model.py` and `generate_mitigation_roadmap.py`

## Invokes — required
none

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:347
- doc plugin-self-containment — .claude/rules/plugin-self-containment.md:101

## Concepts named — required, verbatim
- `Scope` — .claude/skills/threat-modeling/templates/threat-model-template.md:11 — defined here | used here
- `Architecture Overview` — .claude/skills/threat-modeling/templates/threat-model-template.md:39 — defined here | used here
- `Data Flow Diagram` — .claude/skills/threat-modeling/templates/threat-model-template.md:41 — defined here | used here
- `Trust Boundary` — .claude/skills/threat-modeling/templates/threat-model-template.md:44 — defined here | used here
- `Components` — .claude/skills/threat-modeling/templates/threat-model-template.md:62 — defined here | used here
- `Data Flows` — .claude/skills/threat-modeling/templates/threat-model-template.md:71 — defined here | used here
- `Trust Boundaries` — .claude/skills/threat-modeling/templates/threat-model-template.md:79 — defined here | used here
- `Assets` — .claude/skills/threat-modeling/templates/threat-model-template.md:86 — defined here | used here
- `STRIDE Analysis` — .claude/skills/threat-modeling/templates/threat-model-template.md:97 — defined here | used here
- `Spoofing` — .claude/skills/threat-modeling/templates/threat-model-template.md:99 — defined here | used here
- `Tampering` — .claude/skills/threat-modeling/templates/threat-model-template.md:108 — defined here | used here
- `Repudiation` — .claude/skills/threat-modeling/templates/threat-model-template.md:117 — defined here | used here
- `Information Disclosure` — .claude/skills/threat-modeling/templates/threat-model-template.md:125 — defined here | used here
- `Denial of Service` — .claude/skills/threat-modeling/templates/threat-model-template.md:134 — defined here | used here
- `Elevation of Privilege` — .claude/skills/threat-modeling/templates/threat-model-template.md:143 — defined here | used here
- `Threat Matrix Summary` — .claude/skills/threat-modeling/templates/threat-model-template.md:154 — defined here | used here
- `Mitigations` — .claude/skills/threat-modeling/templates/threat-model-template.md:172 — defined here | used here
- `Accepted Risks` — .claude/skills/threat-modeling/templates/threat-model-template.md:306 — defined here | used here
- `Validation Checklist` — .claude/skills/threat-modeling/templates/threat-model-template.md:320 — defined here | used here
- `Revision History` — .claude/skills/threat-modeling/templates/threat-model-template.md:332 — defined here | used here

## Structure
- `# Threat Model: [System/Feature Name]`
- `## 1. Scope`
- `### Subject`
- `### Boundaries`
- `### Stakeholders`
- `## 2. Architecture Overview`
- `### Data Flow Diagram`
- `### Components`
- `### Data Flows`
- `### Trust Boundaries`
- `### Assets`
- `## 3. STRIDE Analysis`
- `### S - Spoofing`
- `### T - Tampering`
- `### R - Repudiation`
- `### I - Information Disclosure`
- `### D - Denial of Service`
- `### E - Elevation of Privilege`
- `## 4. Threat Matrix Summary`
- `## 5. Mitigations`
- `### Critical/High Priority`
- `#### T001: Stolen JWT Impersonation`
- `#### T004: SQL Injection`
- `#### T008: DDoS Attack`
- `#### T002: Session Hijacking via XSS`
- `#### T003: MITM Request Modification`
- `#### T006: Stack Trace Exposure`
- `#### T007: Database Backup Exposure`
- `#### T010: Broken Access Control`
- `#### T011: IDOR Vulnerability`
- `### Medium Priority`
- `#### T005: Transaction Repudiation`
- `### Accepted Risks`
- `#### T009: Connection Pool Exhaustion`
- `## 6. Validation Checklist`
- `## 7. Revision History`
- `## 8. References`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/skills/threat-modeling/templates/threat-model-template.md:230 · Under `### Critical/High Priority`, threat `#### T003: MITM Request Modification` is rated `**Risk**: Medium (after TLS)` and threat `#### T007: Database Backup Exposure` (line 256) is rated `**Risk**: Medium`, conflicting with the section heading which specifies Critical/High priority.
- internal-contradiction · .claude/skills/threat-modeling/templates/threat-model-template.md:326 · Line 326 of `Validation Checklist` has an unchecked box `- [ ] All Critical/High risks have mitigations`, yet all Critical and High risks in the document (T001, T002, T004, T006, T008, T010, T011) have mitigations documented in section 5.

## Observations
- Combines template structure with fully worked examples (T001 through T011, DFD diagram, realistic components C001-C004, data flows DF001-DF003).
- Passes automated validation by `validate_threat_model.py` out-of-the-box with exit code 0.
- Context cost: 9,202 bytes, approximately 2,300 tokens.
