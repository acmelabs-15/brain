---
package: rjm
name: Drift Monitoring
slug: drift-monitoring
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Drift Monitoring

## Definition — verbatim
> "### Rule 4: Drift Monitoring" — templates/AGENTS.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/AGENTS.md | 146 | defined here | Defined as Rule 4 governing weekly CI drift detection between hand-maintained Claude agents and generated platform agents. |

## Consumes
Hand-maintained Claude agents in `src/claude/` and generated VS Code agents in `src/vs-code-agents/`.

## Produces
Automated CI drift issues and alert reports notifying maintainers of divergence.

## When applied
Executed on a weekly schedule via `.github/workflows/drift-detection.yml`.

## Sub-concepts
none

## Part of
two-source-agent-template-architecture

## Implementation status
defects: doc-drift

## Design notes
Drift Monitoring is an operational CI gate that automatically detects semantic divergence between hand-maintained Claude Code agent prompts and generated Copilot/VS Code agent prompts, alerting maintainers via GitHub issues when templates fall out of sync.
