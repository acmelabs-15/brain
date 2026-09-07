---
package: rjm
name: plugin marketplace
slug: plugin-marketplace
kind: pattern
package_phase: rjm:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plugin marketplace

## Definition — verbatim
> "The framework must be distributed to ~400 users within 30 days. Plugin marketplace is the distribution mechanism, not an experiment." — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:24

## Also called — verbatim
Claude Code plugin marketplace — .agents/analysis/adr-045-feasibility-analysis.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 5 | used here | Evaluated as the proposed target distribution mechanism for the extracted multi-agent framework. |
| .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md | 24 | used here | Adopted as the primary organizational distribution model enabling one-command installation. |
| .agents/critique/ADR-045-debate-log.md | 1 | used here | Critiqued regarding permission models, plugin manifest overhead, and supply-chain security. |

## Consumes
Plugin catalog manifests (`marketplace.json`), packaged skill directories, and agent definitions.

## Produces
Distributable, version-controlled plugin suites installed via `claude plugin marketplace add`.

## When applied
Used when packaging and distributing reusable agent capabilities across teams and projects.

## Sub-concepts
core-agents, framework-skills

## Part of
framework-extraction

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
The plugin marketplace is the distribution and package management mechanism adopted in rjm to scale agent workflows. Rather than manually copying scripts or cloning submodules, teams install versioned plugins from a centralized marketplace catalog. This standardizes tooling updates, isolates plugin scopes, and simplifies onboarding.
