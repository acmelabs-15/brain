---
package: rjm
name: Handoff Options
slug: handoff-options
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Handoff Options

## Definition — verbatim
> "When to delegate" — .claude/agents/AGENTS.md:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 209 | defines | Listed in agent file structure table as a required section defining delegation conditions. |
| .claude/agents/backlog-generator.md | 133 | defines | Section heading detailing delegation routes to task-decomposer or orchestrator upon backlog generation. |
| .claude/agents/code-reviewer.md | 122 | defines | Section heading specifying handoffs to implementer for fixes or security for vulnerabilities. |
| .claude/agents/debug.md | 65 | defines | Section heading defining handoff criteria to implementer or analyst when debugging reaches resolution. |
| .claude/agents/devops.md | 506 | defines | Section heading outlining handoffs to qa, security, or orchestrator following deployment/pipeline tasks. |
| .claude/agents/high-level-advisor.md | 255 | defines | Section heading directing strategic handoffs to architect, roadmap, or task-decomposer. |
| .claude/agents/independent-thinker.md | 237 | defines | Section heading defining delegation routes to high-level-advisor or critic after assumption challenge. |
| .claude/agents/merge-resolver.md | 295 | defines | Section heading defining handoff options to implementer or qa after resolving git conflicts. |
| .claude/agents/qa.md | 798 | defines | Section heading specifying handoffs to implementer for bug fixes or retrospective for learnings. |
| .claude/agents/task-decomposer.md | 309 | defines | Section heading defining delegation routes to implementer or milestone-planner after task breakdown. |
| templates/AGENTS.md | 220 | defines | Template structural requirement specifying delegation and handoff documentation in shared agents. |
| templates/agents/architect.shared.md | 728 | defines | Section heading specifying architectural handoffs to milestone-planner, implementer, or critic. |
| templates/agents/backlog-generator.shared.md | 126 | defines | Shared template section specifying delegation pathways after backlog discovery. |
| templates/agents/code-reviewer.shared.md | 132 | defines | Shared template section defining downstream routing based on code review findings. |
| templates/agents/debug.shared.md | 73 | defines | Shared template section defining handoffs upon diagnosing runtime or test failures. |
| templates/agents/devops.shared.md | 265 | defines | Shared template section specifying CI/CD and infrastructure handoff options. |
| templates/agents/high-level-advisor.shared.md | 246 | defines | Shared template section specifying downstream strategic execution routing. |
| templates/agents/independent-thinker.shared.md | 210 | defines | Shared template section routing challenged perspectives to advisory and decision agents. |
| templates/agents/janitor.shared.md | 98 | defines | Section heading specifying maintenance cleanup handoffs to devops or implementer. |
| templates/agents/qa.shared.md | 728 | defines | Shared template section defining QA verification handoffs and failure escalation paths. |
| templates/agents/task-decomposer.shared.md | 195 | defines | Shared template section defining handoffs to execution and planning agents. |
| templates/README.md | 216 | used here | Explains the handoff options section within the shared agent template structure. |

## Consumes
Agent task execution findings, scope boundaries, or resolution status.

## Produces
Clear transition recommendations and delegation instructions for next-stage specialized agents.

## When applied
Consulted by agents upon completing assignments or hitting scope limits to transition tasks seamlessly.

## Sub-concepts
none

## Part of
agent-catalog

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Handoff Options is a mandatory structural section across all rjm agent definitions that formalizes downstream delegation paths. It specifies which specialized subagent should take over next based on the outcome of the current task, creating deterministic transition rules across the multi-agent swarm.
