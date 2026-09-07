---
package: rjm
name: Core Mission
slug: core-mission
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core Mission

## Definition — verbatim
(used, not defined)

> "## Core Mission" — .claude/agents/implementer.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 149 | defined here | Heading defining the primary objective and responsibility of the implementer persona. |
| .claude/agents/independent-thinker.md | 60 | defined here | Heading defining the adversarial critique mission of the independent thinker. |
| .claude/agents/merge-resolver.md | 50 | defined here | Heading defining branch integration and conflict resolution mission. |
| .claude/agents/task-decomposer.md | 55 | defined here | Heading defining task decomposition and work package creation mission. |
| .claude/agents/type-design-analyzer.md | 14 | defined here | Heading defining type safety and domain modeling mission. |
| .claude/skills/analyze/references/agent-architecture-patterns.md | 17 | defined here | Architectural reference describing the core mission structure in agent definitions. |
| templates/AGENTS.md | 216 | defined here | System overview declaring the primary missions across the agent fleet. |
| templates/agents/architect.shared.md | 64 | defined here | Heading defining architectural design and decomposition mission. |
| templates/agents/backlog-generator.shared.md | 41 | defined here | Heading defining backlog synthesis mission. |
| templates/agents/code-reviewer.shared.md | 31 | defined here | Heading defining code review quality mission. |
| templates/agents/devops.shared.md | 27 | defined here | Heading defining deployment and environment configuration mission. |
| templates/agents/implementer.shared.md | 157 | defined here | Shared implementer template heading declaring implementation mission. |
| templates/agents/independent-thinker.shared.md | 49 | defined here | Shared independent thinker template heading declaring critical analysis mission. |
| templates/agents/task-decomposer.shared.md | 43 | defined here | Shared task decomposer template heading declaring decomposition mission. |
| templates/agents/type-design-analyzer.shared.md | 24 | defined here | Shared type design analyzer template heading declaring type modeling mission. |
| templates/README.md | 213 | used here | Agent template catalog describing core mission definitions for personas. |

## Consumes
none

## Produces
none

## When applied
Structural markdown heading present in all agent persona specification files.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift, other

## Design notes
Core Mission is a structural markdown heading in agent prompt specifications delineating an agent's primary mandate and operational scope, rather than a lifecycle artifact or process technique.
