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
verified: 2026-09-06 quote-check+coverage
---

# .claude/agents/security/references/dependency-risk-scoring.md

## Purpose — required, verbatim
> "Assess risk for all external dependencies using this scoring matrix:" — .claude/agents/security/references/dependency-risk-scoring.md:3

## Design intent — required
A quantitative risk evaluation reference that provides an objective, weighted 5-factor scoring matrix for assessing newly introduced external dependencies during security reviews. By weighting Maintenance (25%), Popularity (15%), Security History (30%), Lock-in Risk (20%), and License compatibility (10%), it computes a composite risk score that maps directly to prescriptive governance actions (automatic approval for <2.0, documented mitigations for 2.0–3.5, and mandatory Architecture Decision Record approval for >3.5). Without it, dependency selection would rely on subjective developer judgement, potentially introducing stale, unmaintained, restrictive-licensed, or CVE-vulnerable packages into the project supply chain without formal architectural sign-off.

## Phase — required
cross-phase

## Inputs — required
- Prospective external package metrics: commit frequency and activity recency (<30d, <90d, >90d for Maintenance), stars and download counts (>10k, 1k–10k, <1k for Popularity), known vulnerability history (No CVEs, Patched CVEs, Unpatched CVEs for Security History), coupling depth (Easy to replace, Moderate coupling, Deep integration for Lock-in Risk), and license classification (MIT/Apache, LGPL, GPL/Proprietary for License) (.claude/agents/security/references/dependency-risk-scoring.md:7-11).

## Outputs — required
- Quantitative composite Risk Score calculated as `Sum(Weight x Score)` (.claude/agents/security/references/dependency-risk-scoring.md:13).
- Risk Level tier classification (`Low`, `Medium`, `High`) (.claude/agents/security/references/dependency-risk-scoring.md:17-19).
- Mandatory governance action recommendations: `Approve`, `Document mitigation`, or `Require ADR approval` (.claude/agents/security/references/dependency-risk-scoring.md:17-19).

## Invokes — required
none

## Invoked by — required
- agent security — .claude/agents/security.md:781
- agent security — templates/agents/security.shared.md:748

## Concepts named — required, verbatim
- `Dependency Risk Scoring` — .claude/agents/security/references/dependency-risk-scoring.md:1 — defined here
- `Maintenance` — .claude/agents/security/references/dependency-risk-scoring.md:7 — defined here
- `Popularity` — .claude/agents/security/references/dependency-risk-scoring.md:8 — defined here
- `Security History` — .claude/agents/security/references/dependency-risk-scoring.md:9 — defined here
- `Lock-in Risk` — .claude/agents/security/references/dependency-risk-scoring.md:10 — defined here
- `License` — .claude/agents/security/references/dependency-risk-scoring.md:11 — defined here
- `Risk Score` — .claude/agents/security/references/dependency-risk-scoring.md:13 — defined here
- `Low` — .claude/agents/security/references/dependency-risk-scoring.md:17 — defined here
- `Medium` — .claude/agents/security/references/dependency-risk-scoring.md:18 — defined here
- `High` — .claude/agents/security/references/dependency-risk-scoring.md:19 — defined here
- `ADR approval` — .claude/agents/security/references/dependency-risk-scoring.md:19 — used here

## Structure
- `# Dependency Risk Scoring` — .claude/agents/security/references/dependency-risk-scoring.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Concise, high-density reference document (921 bytes, 22 lines) setting clear numerical thresholds to standardize third-party dependency evaluations.
- Integrates software supply chain security with architectural decision governance by formally enforcing that any dependency scoring above 3.5 requires an Architecture Decision Record (ADR) approval (.claude/agents/security/references/dependency-risk-scoring.md:19).

## Context cost
921 bytes (~230 tokens). Loads no other files.
