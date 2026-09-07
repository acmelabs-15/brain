---
package: rjm
name: devops
slug: devops
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# devops

## Definition — verbatim
> "Designs CI/CD pipelines and deployment automation" — .agents/AGENT-SYSTEM.md:240

## Also called — verbatim
> "CI/CD pipelines, operational planning" — README.md:405

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 236 | defined here | Agent catalog entry defining devops inputs, outputs, specialization, and execution triggers. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Model assignment table routing devops tasks to appropriate model tiers. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 16 | used here | Architectural record establishing operational context boundaries for devops. |
| .agents/metrics/dashboard-template.md | 34 | used here | Performance metric tracking template monitoring devops agent invocations. |
| .claude/skills/review/SKILL.md | 29 | used here | PR review routing table mapping infrastructure reviews to devops. |
| docs/agent-catalog.md | 25 | used here | Catalog summary detailing CI/CD pipeline automation and build script maintenance. |
| README.md | 57 | defined here | System overview roster listing devops as a specialized agent persona. |
| src/claude/AGENTS.md | 160 | used here | Claude Code agent catalog mapping devops capabilities and execution patterns. |
| templates/AGENTS.md | 175 | used here | Shared agent catalog template defining devops responsibilities. |
| templates/README.md | 47 | used here | Template documentation outlining devops operational capabilities. |

## Consumes
Pipeline requirements, deployment targets, build configurations, infrastructure constraints.

## Produces
Pipeline configurations (YAML), build scripts, deployment workflows, operational documentation in `.agents/devops/`.

## When applied
Applied when modifying `.github/workflows/`, configuring build automation, managing dependency packaging, or setting up release pipelines.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Specialized engineering persona dedicated to continuous integration, continuous deployment, and build infrastructure automation. By isolating workflow definitions, runner optimizations, and release configurations from general application feature code, devops ensures reliable delivery pipelines without contaminating core business logic context.
