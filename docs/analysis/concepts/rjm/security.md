---
package: rjm
name: security
slug: security
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/merge-resolver/references/strategies.md, sha256: 27835b54b377f6fa64b4d76ef60eb12370d0c95c40c9a7c39924ed7dc7a4b008}
  - {path: .claude/skills/metrics/collect_metrics.py, sha256: aae715e460693787e19570b0a4b426f67d52e990a4a8781448708151603286c5}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# security

## Definition — verbatim
> "Vulnerability assessment and threat modeling" — .agents/AGENT-SYSTEM.md:275

## Also called — verbatim
> "PR review focused on CWE patterns, OWASP, secrets, and threat modeling" — .claude/skills/review/references/security.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 271 | defined here | Agent catalog entry detailing vulnerability assessment, threat modeling, and PIV reporting. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 124 | used here | Model assignment table routing security reviews to high-capability models. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 17 | used here | Context corpus documentation establishing boundary definitions for security reviews. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 303 | used here | Policy change documentation referencing security oversight and review gates. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 5 | used here | Review summary documenting security risk assessments on pull requests. |
| .agents/metrics/baseline-report.md | 36 | used here | Telemetry baseline reporting security agent invocation counts and durations. |
| .agents/metrics/dashboard-template.md | 32 | used here | Metric dashboard tracking security agent activity and review volume. |
| .claude/skills/adr-review/SKILL.md | 86 | used here | ADR review skill routing security impact analysis to security agent. |
| .claude/skills/merge-resolver/references/strategies.md | 73 | used here | Merge conflict strategy identifying security implications of resolved conflicts. |
| .claude/skills/metrics/collect_metrics.py | 23 | used here | Metrics collection script tracking security review execution. |
| .claude/skills/review/references/security.md | 2 | defined here | Frontmatter declaration of security review task specification. |
| .claude/skills/review/SKILL.md | 29 | used here | PR review routing table mapping security assessments to security agent. |
| .github/copilot-instructions.md | 25 | used here | GitHub Copilot prompt routing security reviews and threat modeling. |
| docs/agent-catalog.md | 42 | used here | Catalog summary detailing vulnerability scanning, STRIDE analysis, and PIV reports. |
| docs/architecture.md | 190 | used here | Architecture diagram documenting security validation gate in PR review flow. |
| docs/design/external-signal-gating.md | 35 | used here | Design document detailing external signal gating for security-critical PRs. |
| docs/skill-reference.md | 27 | defined here | Reference guide mapping security skill execution to security agent role. |
| README.md | 57 | defined here | Agent roster listing security as a core specialized persona. |
| src/claude/AGENTS.md | 161 | used here | Claude Code agent roster mapping security specialist capabilities. |
| templates/AGENTS.md | 176 | used here | Shared agent catalog template defining security responsibilities. |
| templates/agents/code-simplifier.shared.md | 125 | used here | Code simplification agent preserving security boundaries during refactorings. |
| templates/agents/debug.shared.md | 80 | used here | Debugging agent coordinating with security on vulnerability diagnoses. |
| templates/agents/devops.shared.md | 272 | used here | DevOps agent coordinating with security on pipeline protection and secret scanning. |
| templates/README.md | 53 | used here | Template documentation detailing security review capabilities. |

## Consumes
Source code, feature designs, change scopes, PR diffs, architecture specs.

## Produces
Threat models in `.agents/security/TM-NNN-*.md`, security reports in `.agents/security/SR-NNN-*.md`, Post-Implementation Verification (PIV) reports.

## When applied
Applied when touching auth/authorization code, handling user data, adding external APIs, and reviewing security-sensitive PR changes.

## Sub-concepts
owasp-top-10, stride-analysis, post-implementation-verification

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
The dedicated security assessment persona in the rjm multi-agent architecture. By executing threat modeling (STRIDE), vulnerability assessments (OWASP Top 10, CWE patterns), and post-implementation verification independently from feature development, the security agent enforces defense-in-depth and blocks security regressions prior to pull request integration.
