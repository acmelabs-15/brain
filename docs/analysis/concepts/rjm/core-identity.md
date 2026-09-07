---
package: rjm
name: Core Identity
slug: core-identity
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core Identity

## Definition — verbatim
(used, not defined)

> "## Core Identity" — .claude/agents/task-decomposer.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 11 | defined here | Heading defining task decomposition specialist identity. |
| templates/AGENTS.md | 214 | defined here | System overview table specifying required agent content section for role description. |
| templates/agents/architect.shared.md | 31 | defined here | Heading defining technical authority persona and system coherence mandate. |
| templates/agents/backlog-generator.shared.md | 14 | defined here | Heading defining autonomous backlog generator identity. |
| templates/agents/code-reviewer.shared.md | 23 | defined here | Heading defining read-only code reviewer persona. |
| templates/agents/debug.shared.md | 36 | defined here | Heading defining systematic bug hunter persona. |
| templates/agents/dependency-auditor.shared.md | 18 | defined here | Heading defining supply-chain risk scanner identity. |
| templates/agents/devops.shared.md | 17 | defined here | Heading defining CI/CD and deployment automation specialist identity. |
| templates/agents/janitor.shared.md | 36 | defined here | Heading defining technical debt remediation specialist identity. |
| templates/agents/merge-resolver.shared.md | 32 | defined here | Heading defining merge conflict resolution specialist identity. |
| templates/agents/negotiation.shared.md | 36 | defined here | Heading defining deal intelligence specialist identity. |
| templates/agents/task-decomposer.shared.md | 14 | defined here | Shared template heading defining task decomposition specialist persona. |
| templates/README.md | 213 | used here | Agent template documentation listing required sections compared across platforms. |

## Consumes
none

## Produces
none

## When applied
Structural markdown heading present across agent persona prompt specifications.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift, other

## Design notes
Core Identity is a standard structural section heading used across rjm agent persona prompt definitions to specify an agent's role description and domain expertise, rather than an independent lifecycle artifact or process concept.
