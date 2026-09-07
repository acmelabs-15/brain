---
package: rjm
name: Style Guide Compliance
slug: style-guide-compliance
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Style Guide Compliance

## Definition — verbatim
(used, not defined)

> "- No sycophancy, AI filler phrases, or hedging language" — .claude/agents/backlog-generator.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/backlog-generator.md | 15 | defined here | Mandates concise, active voice, non-sycophantic tone and structured text status indicators in backlog generation. |
| .claude/agents/debug.md | 11 | defined here | Mandates direct address, data-driven observations, and emoji-free phrasing in debugging sessions. |
| .claude/agents/retrospective.md | 15 | defined here | Enforces objective, quantified communication standards for retrospective analysis. |
| .claude/agents/task-decomposer.md | 15 | defined here | Enforces active voice, short sentences, and structured status tags for task decomposition. |
| templates/agents/architect.shared.md | 14 | defined here | Mandates style guide standards in the shared architect agent template. |
| templates/agents/backlog-generator.shared.md | 18 | defined here | Mandates style guide standards in the shared backlog generator template. |
| templates/agents/code-reviewer.shared.md | 42 | defined here | Mandates style guide standards in the shared code reviewer template. |
| templates/agents/debug.shared.md | 19 | defined here | Mandates style guide standards in the shared debug agent template. |
| templates/agents/devops.shared.md | 31 | defined here | Mandates style guide standards in the shared devops agent template. |
| templates/agents/independent-thinker.shared.md | 25 | used here | References communication style constraints in the independent thinker persona. |
| templates/agents/janitor.shared.md | 19 | used here | References communication style constraints in the janitor persona. |
| templates/agents/merge-resolver.shared.md | 21 | used here | References communication style constraints in the merge resolver persona. |
| templates/agents/negotiation.shared.md | 18 | used here | References communication style constraints in the negotiation persona. |
| templates/agents/task-decomposer.shared.md | 18 | defined here | Mandates style guide standards in the shared task decomposer template. |

## Consumes
Agent-generated textual outputs, review findings, and communications.

## Produces
Concise, active voice, non-hedging communication adhering to standardized status tags.

## When applied
Applied across all agent interactions and document generation workflows.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
Style Guide Compliance establishes universal linguistic and formatting constraints across rjm's multi-agent catalog. By eliminating sycophancy, AI filler, hedging phrases, and emojis in favor of active voice, short sentences (15-20 words), Grade 9 reading level, data-backed assertions, and uniform status tags ([PASS], [FAIL], [BLOCKED]), it maximizes information density and minimizes context token consumption.
