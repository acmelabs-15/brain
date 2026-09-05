---
package: rjm
path: .agents/security/architecture-security-template.md
type: agent
bytes: 8144
unit: inv-rjm-58
in_scope_via: .agents/security/ADR-045-framework-extraction-security-review.md
aliases: []
memo_inputs:
  - {path: .agents/security/architecture-security-template.md, sha256: 05ed96c8675d7c953c030e2eca5d3546182f60ec9e873ef7e55f9e2c6a231c5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/architecture-security-template.md

## Purpose — required, verbatim
> "This template guides security architecture reviews. Use it to evaluate privilege boundaries, trust zones, attack surfaces, and sensitive data flows in system designs." — .agents/security/architecture-security-template.md:5

## Design intent — required
Defines a standardized audit template and methodology for conducting rigorous security reviews of software architectures, systems, and architectural decision records (ADRs) within `rjm`. Establishes structured review sections covering system overview, privilege boundary analysis across four tiers (Anonymous, Authenticated, Privileged, System) and escalation paths, Mermaid-rendered trust boundary diagrams (Untrusted, DMZ/Semi-Trusted, Trusted, Highly Trusted), external and internal attack surface modeling, sensitive data flow classification and controls, third-party dependency risk matrices, and security controls assessment (AuthN, AuthZ, Data Protection, Logging/Monitoring). Standardizes finding severity classification (Critical, High, Medium, Low) and remediation prioritization (P0, P1, P2) culminating in formal multi-role sign-off.

## Phase — required
cross-phase

## Inputs — required
- Target architecture specifications, system designs, or ADRs undergoing review (.agents/security/architecture-security-template.md:5, 13-23)
- Checklists and references: `Static Analysis Checklist` (`./static-analysis-checklist.md` — .agents/security/architecture-security-template.md:300), `Security Best Practices` (`./security-best-practices.md` — .agents/security/architecture-security-template.md:301), and `Threat Model Template` (`../security/TM-NNN-template.md` — .agents/security/architecture-security-template.md:302)

## Outputs — required
- Architecture security audit document (.agents/security/architecture-security-template.md:1-25)
- Privilege level inventory and escalation path analysis (.agents/security/architecture-security-template.md:29-45)
- Trust boundary Mermaid diagram and boundary controls matrix (.agents/security/architecture-security-template.md:58-115)
- Attack surface evaluation and reduction recommendations (.agents/security/architecture-security-template.md:120-142)
- Sensitive data classification, Mermaid flow diagram, and risk controls (.agents/security/architecture-security-template.md:146-180)
- Categorized findings summary and prioritized remediation recommendations (.agents/security/architecture-security-template.md:241-286)
- Multi-stakeholder security sign-off block (.agents/security/architecture-security-template.md:288-295)

## Invokes — required
- doc static-analysis-checklist.md — .agents/security/architecture-security-template.md:300
- doc security-best-practices.md — .agents/security/architecture-security-template.md:301
- doc TM-NNN-template.md — .agents/security/architecture-security-template.md:302

## Invoked by — required
- doc ADR-045-framework-extraction-security-review.md — .agents/security/ADR-045-framework-extraction-security-review.md:1029

## Concepts named — required, verbatim
- `Architecture Security Audit Template` — .agents/security/architecture-security-template.md:1 — defined here
- `privilege boundaries` — .agents/security/architecture-security-template.md:5 — defined here
- `trust zones` — .agents/security/architecture-security-template.md:5 — defined here
- `attack surfaces` — .agents/security/architecture-security-template.md:5 — defined here
- `sensitive data flows` — .agents/security/architecture-security-template.md:5 — defined here
- `Privilege Boundary Analysis` — .agents/security/architecture-security-template.md:27 — defined here
- `Privilege Escalation Paths` — .agents/security/architecture-security-template.md:38 — defined here
- `Trust Boundary Map` — .agents/security/architecture-security-template.md:54 — defined here
- `Boundary Controls` — .agents/security/architecture-security-template.md:108 — defined here
- `Attack Surface Analysis` — .agents/security/architecture-security-template.md:118 — defined here
- `Sensitive Data Flow Analysis` — .agents/security/architecture-security-template.md:144 — defined here
- `Dependency Security` — .agents/security/architecture-security-template.md:182 — defined here
- `Dependency Risk Matrix` — .agents/security/architecture-security-template.md:190 — defined here
- `Security Controls Assessment` — .agents/security/architecture-security-template.md:201 — defined here

## Structure
- Architecture Security Audit Template
- Purpose
- System Overview
- Basic Information
- System Description
- Privilege Boundary Analysis
- Identified Privilege Levels
- Privilege Escalation Paths
- Privilege Boundary Violations
- Trust Boundary Map
- Trust Zones
- Boundary Controls
- Attack Surface Analysis
- External Attack Surface
- Internal Attack Surface
- Attack Surface Reduction Recommendations
- Sensitive Data Flow Analysis
- Data Classification
- Data Flow Diagram
- Data Flow Risks
- Dependency Security
- Third-Party Dependencies
- Dependency Risk Matrix
- Security Controls Assessment
- Authentication
- Authorization
- Data Protection
- Logging and Monitoring
- Findings Summary
- Critical Findings
- High Findings
- Medium Findings
- Low Findings
- Recommendations
- Immediate Actions (P0)
- Short-term Actions (P1)
- Long-term Actions (P2)
- Sign-off
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/security/architecture-security-template.md:302 · Cites `../security/TM-NNN-template.md` which does not exist in the repository (threat model template is located at `.claude/agents/security/references/threat-model-template.md`).

## Observations
- Incorporates native Mermaid diagrams to visually convey 4-tier trust boundaries and data flow paths directly within Markdown documentation.
- Serves as the structural archetype and schema followed by `.agents/security/ADR-045-framework-extraction-security-review.md`.
- Formulates a standardized taxonomy of 4 privilege levels (Anonymous, Authenticated, Privileged, System), 4 finding severities (Critical, High, Medium, Low), and 3 action tiers (P0, P1, P2).

## Context cost
8144 bytes, ~2100 tokens. Template file without external script dependencies; references security checklists and threat model templates.
