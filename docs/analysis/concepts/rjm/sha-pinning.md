---
package: rjm
name: SHA Pinning
slug: sha-pinning
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SHA Pinning

## Definition — verbatim
> "**Rationale Summary**: SHA pinning prevents supply chain attacks where action maintainers (or compromised accounts) move version tags to malicious commits. Immutable SHA references ensure reviewed code cannot be silently replaced." — .agents/governance/PROJECT-CONSTRAINTS.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 91 | used here | Raised as a P1 security issue for CI workflow templates lacking SHA pinning. |
| .agents/governance/PROJECT-CONSTRAINTS.md | 168 | used here | Stated as a mandatory security constraint for third-party GitHub Actions. |
| .agents/projects/v0.4.0/PLAN.md | 140 | used here | Listed in the architectural decisions table to mitigate supply chain security risks (CVSS 8.1). |
| .agents/security/ADR-045-framework-extraction-security-review.md | 92 | used here | Recommended as the primary remediation for plugin sources in settings.json. |
| .claude/skills/ai-agents-change-control/references/incident-history.md | 27 | defined here | Documented as an active policy tension between PROJECT-CONSTRAINTS.md and GP-006. |
| docs/WORKFLOW-VALIDATION.md | 133 | defined here | Enforced as a required security validation check for CI workflow definitions. |

## Consumes
External GitHub Action references, third-party plugin distributions, git commit hashes.

## Produces
Immutable dependency references pinned to verified cryptographic commit SHAs.

## When applied
Enforced across all GitHub Action workflows, plugin manifests, and external dependencies.

## Sub-concepts
none

## Part of
plugin-integrity-verification

## Implementation status
defects: cross-file-contradiction, missing-path, doc-drift

## Design notes
SHA Pinning is a mandatory security pattern across rjm requiring external dependencies, GitHub Actions, and distributed plugins to be pinned to immutable commit hashes rather than mutable tags or branches, eliminating supply-chain tampering risks.
