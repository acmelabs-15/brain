---
package: rjm
name: dependency-auditor
slug: dependency-auditor
kind: role
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dependency-auditor

## Definition — verbatim
> "# Dependency Auditor" — templates/agents/dependency-auditor.shared.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-catalog.md | 24 | used here | Catalog table entry indexing dependency-auditor as an executor role for supply-chain vulnerability auditing. |
| templates/agents/dependency-auditor.shared.md | 14 | defined here | Agent definition header establishing supply-chain risk scanning across .NET, npm, pip, and cargo. |

## Consumes
Project dependency manifests (`*.sln`, `package.json`, `pyproject.toml`, `Cargo.toml`) and package management audit CLI tools (`dotnet list package`, `npm audit`, `pip-audit`, `cargo audit`).

## Produces
Structured Dependency Audit Report markdown detailing severity-classified CVEs, outdated packages, and ADR-035 exit code gating decisions.

## When applied
Triggered on a recurring schedule or during pre-release release-gating workflows prior to shipping.

## Sub-concepts
none

## Part of
rjm:ship

## Implementation status
clean

## Design notes
The dependency-auditor agent is a specialized executor role in rjm dedicated to software supply-chain risk discovery. Bound by strict report-only autonomy guardrails, it scans multi-language dependency manifests, correlates findings against CISA KEV and CVSS thresholds, and provides deterministic pass/fail gating to prevent vulnerable or deprecated dependencies from reaching production.
