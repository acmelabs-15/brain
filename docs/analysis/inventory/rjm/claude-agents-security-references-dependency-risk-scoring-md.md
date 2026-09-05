---
package: rjm
path: .claude/agents/security/references/dependency-risk-scoring.md
type: agent
bytes: 921
unit: inv-rjm-72
in_scope_via: .claude/agents/security.md
aliases: []
memo_inputs:
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/security/references/dependency-risk-scoring.md

## Purpose — required, verbatim
> "Assess risk for all external dependencies using this scoring matrix:" — .claude/agents/security/references/dependency-risk-scoring.md:3

## Design intent — required
Quantitative risk scoring matrix and threshold guideline for evaluating new external software dependencies introduced to the codebase. It computes a weighted risk score across five dimensions—Maintenance (25%), Popularity (15%), Security History (30%), Lock-in Risk (20%), and License (10%)—and defines clear decision thresholds (<2.0: Approve; 2.0–3.5: Document mitigation; >3.5: Require ADR approval) to prevent unvetted or high-risk third-party packages from entering the repository without architectural governance.

## Phase — required
cross-phase

## Inputs — required
- Dependency metadata including commit frequency, star/download metrics, CVE track record, architectural coupling, and license category (.claude/agents/security/references/dependency-risk-scoring.md:7-11)
- New external packages undergoing security review ("Include dependency risk assessment in security reviews for any new external packages." — .claude/agents/security/references/dependency-risk-scoring.md:21)

## Outputs — required
- Calculated numerical dependency risk score ("Risk Score" — .claude/agents/security/references/dependency-risk-scoring.md:13)
- Triage risk classification and policy action ("Approve", "Document mitigation", "Require ADR approval" per .claude/agents/security/references/dependency-risk-scoring.md:17-19)

## Invokes — required
none

## Invoked by — required
- agent dependency-risk-scoring.md — .claude/agents/security.md:781

## Concepts named — required, verbatim
- `Dependency Risk Scoring` — .claude/agents/security/references/dependency-risk-scoring.md:1 — defined here
- `Maintenance` — .claude/agents/security/references/dependency-risk-scoring.md:7 — defined here
- `Popularity` — .claude/agents/security/references/dependency-risk-scoring.md:8 — defined here
- `Security History` — .claude/agents/security/references/dependency-risk-scoring.md:9 — defined here
- `Lock-in Risk` — .claude/agents/security/references/dependency-risk-scoring.md:10 — defined here
- `License` — .claude/agents/security/references/dependency-risk-scoring.md:11 — defined here
- `Risk Score` — .claude/agents/security/references/dependency-risk-scoring.md:13 — defined here

## Structure
- # Dependency Risk Scoring — .claude/agents/security/references/dependency-risk-scoring.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Weighted scoring matrix: Factors are weighted according to risk severity: Security History (30%), Maintenance (25%), Lock-in Risk (20%), Popularity (15%), and License (10%).
- Architectural governance escalation: Explicitly links package evaluation directly to the architecture review process by mandating ADR approval for scores exceeding 3.5 (line 19).

## Context cost
921 bytes, ~230 tokens. Standalone scoring reference table.
