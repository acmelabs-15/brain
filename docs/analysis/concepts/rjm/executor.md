---
package: rjm
name: executor
slug: executor
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .vscode/toolsets.jsonc, sha256: 419d9acfe3ca66bd6aed4b713acf4140bd823f1c65852507bdab3f8dee26de72}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# executor

## Definition — verbatim
> "| `executor` | Produces the change: code, tests, deployment, fixes | implementer, qa, devops, security, debug |" — .agents/AGENT-SYSTEM.md:837

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 837 | defined here | Defined in Agent Roles table as agents producing the change (code, tests, deployment, fixes). |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 104 | defined here | Established in ADR-098 as the closed role metadata value replacing the former builder tier. |
| .claude/agents/code-reviewer.md | 7 | used here | Frontmatter metadata declaring executor as the role for code-reviewer. |
| .claude/agents/debug.md | 5 | used here | Frontmatter metadata declaring executor as the role for debug. |
| .claude/agents/implementer.md | 6 | defined here | Frontmatter metadata declaring executor as the role for implementer. |
| .vscode/toolsets.jsonc | 13 | defined here | Toolset configuration defining permissions and tools granted to executor agents. |
| docs/agent-catalog.md | 19 | used here | Role classification for code-reviewer in the generated agent catalog table. |
| templates/agents/debug.shared.md | 2 | used here | Declared in frontmatter metadata for shared debug agent template. |
| templates/agents/dependency-auditor.shared.md | 2 | used here | Declared in frontmatter metadata for shared dependency-auditor agent template. |
| templates/agents/devops.shared.md | 2 | used here | Declared in frontmatter metadata for shared devops agent template. |
| templates/agents/implementer.shared.md | 2 | defined here | Declared in frontmatter metadata for shared implementer agent template. |
| templates/agents/merge-resolver.shared.md | 2 | defined here | Declared in frontmatter metadata for shared merge-resolver agent template. |
| templates/README.md | 47 | defined here | Mapped to toolsets (vscode, execute, read, edit, search) and agent assignments. |

## Consumes
Approved atomic tasks, specifications, test plans, or bug reports.

## Produces
Production code modifications, unit/integration tests, CI/CD pipeline configs, and bug fixes.

## When applied
> "Produces the change: code, tests, deployment, fixes" — .agents/AGENT-SYSTEM.md:837

## Sub-concepts
none

## Part of
- agent-roles
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
In rjm, `executor` identifies agents that produce concrete system changes—writing code, creating tests, resolving git conflicts, and configuring deployments. Encompassing `implementer`, `qa`, `devops`, `security`, and `debug`, executor agents possess edit and execution toolsets but execute within boundaries framed by coordinator plans and strategic designs.
