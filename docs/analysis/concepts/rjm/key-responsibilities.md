---
package: rjm
name: Key Responsibilities
slug: key-responsibilities
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
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Key Responsibilities

## Definition — verbatim
(used, not defined)

> "## Key Responsibilities" — .claude/agents/task-decomposer.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 68 | defined here | Heading introducing the numbered list of core decomposition tasks. |
| templates/AGENTS.md | 217 | defined here | Agent specification table requiring a numbered list of responsibilities for each persona. |
| templates/agents/architect.shared.md | 92 | defined here | Heading defining system architecture governance responsibilities. |
| templates/agents/backlog-generator.shared.md | 62 | defined here | Heading defining backlog synthesis and issue creation tasks. |
| templates/agents/code-reviewer.shared.md | 35 | defined here | Heading defining code review obligations and defect reporting duties. |
| templates/agents/devops.shared.md | 47 | defined here | Heading defining pipeline automation and build configuration responsibilities. |
| templates/agents/high-level-advisor.shared.md | 115 | defined here | Heading defining strategic prioritization and verdict delivery duties. |
| templates/agents/implementer.shared.md | 161 | defined here | Heading defining implementation and plan adherence responsibilities. |
| templates/agents/independent-thinker.shared.md | 53 | defined here | Heading defining adversarial challenge and assumptions testing duties. |
| templates/agents/task-decomposer.shared.md | 56 | defined here | Shared template heading defining task decomposer responsibilities. |
| templates/README.md | 214 | used here | Cross-platform comparison list documenting shared agent template sections. |

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
Key Responsibilities is a standard structural markdown heading in rjm agent specifications designating the numbered checklist of primary tasks and obligations assigned to an agent persona, rather than an autonomous lifecycle concept.
