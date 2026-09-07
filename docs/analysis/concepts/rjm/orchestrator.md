---
package: rjm
name: orchestrator
slug: orchestrator
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
  - {path: .claude/skills/metrics/collect_metrics.py, sha256: aae715e460693787e19570b0a4b426f67d52e990a4a8781448708151603286c5}
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# orchestrator

## Definition — verbatim
> "Central coordinator routing tasks to appropriate specialists" — .agents/AGENT-SYSTEM.md:51

## Also called — verbatim
> "The coordinating agent that routes tasks to specialists and synthesizes results" — README.md:143

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 47 | defined here | Agent catalog entry defining role, inputs, outputs, and delegation patterns. |
| .agents/analysis/adr-045-feasibility-analysis.md | 229 | used here | Listed in agent inventory table evaluating framework extraction feasibility. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 98 | used here | Assigned model tier and routing configuration for cost optimization. |
| .agents/metrics/baseline-report.md | 35 | used here | Metric baseline tracking invocation count, duration, and error rates. |
| .agents/metrics/dashboard-template.md | 28 | used here | Performance dashboard template tracking coordinator invocation trends. |
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 17 | used here | Retrospective analysis of orchestrator coordination during merge failures. |
| .claude/skills/metrics/collect_metrics.py | 23 | used here | Metric collection script mapping agent telemetry for orchestrator. |
| .claude/skills/skillforge/references/architecture-patterns.md | 13 | defined here | Architectural pattern defining hierarchical delegation under orchestrator. |
| .claude/skills/skillforge/SKILL.md | 15 | defined here | Defined as primary coordinator in meta-skill agent generation workflow. |
| .github/copilot-instructions.md | 20 | used here | Instruction mapping orchestrator as primary routing agent in GitHub Copilot. |
| CLAUDE.md | 9 | used here | Project instructions designating orchestrator as entry point for complex tasks. |
| docs/agent-catalog.md | 35 | used here | Catalog summary detailing orchestrator capabilities and routing boundaries. |
| docs/agent-metrics.md | 23 | used here | Telemetry report documenting agent lifecycle duration and success metrics. |
| docs/architecture.md | 127 | used here | Architectural overview diagramming central routing and quality gate coordination. |
| README.md | 122 | defined here | Introduction defining orchestrator as the operational hub across development roles. |
| README.md | 143 | defined here | Key Concepts table entry defining orchestrator role and purpose. |
| scripts/eval/eval-e2e-delivery.py | 68 | used here | End-to-end evaluation harness configuring orchestrator delivery pipeline. |
| scripts/eval/panels/owner-copilot-cli.json | 13 | used here | Configuration schema mapping orchestrator capabilities in Copilot CLI panel. |
| src/claude/AGENTS.md | 141 | used here | Roster listing orchestrator as core coordination agent for Claude Code. |
| templates/AGENTS.md | 167 | used here | Roster template defining orchestrator role in agent distribution. |
| templates/agents/orchestrator.shared.md | 3 | defined here | Frontmatter description defining enterprise task orchestrator capabilities. |
| templates/agents/qa.shared.md | 734 | used here | Reference to orchestrator workflow routing within QA guidance. |
| templates/README.md | 15 | used here | Template catalog summary detailing coordinator responsibilities. |

## Consumes
User requests, task prompts, or problem statements; previous session context; specialist outputs.

## Produces
Delegated subagent tasks, aggregated findings, conflict arbitrations, and session handoffs.

## When applied
Applied at the start of multi-step tasks, when coordinating specialists across domains, or when user intent requires decomposition.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
The orchestrator serves as the operational hub and central dispatcher of the rjm system. By classifying incoming request complexity and routing sub-tasks to specialized agents rather than performing work directly, it maintains a clean context window, enforces process gates, and aggregates multi-agent findings into coherent project deliverables.
