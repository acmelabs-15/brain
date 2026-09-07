---
package: rjm
name: Memory Protocol
slug: memory-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Protocol

## Definition — verbatim
> "All agents access memory via cloudmcp-manager tools:" — .agents/AGENT-SYSTEM.md:1222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1220 | defines | Defines the universal MCP tool invocation pattern for memory search, observation storage, and entity creation. |
| .claude/agents/AGENTS.md | 208 | defines | Specifies the Memory Protocol section required in all Claude Code agent prompt definitions. |
| .claude/agents/architect.md | 552 | defines | Prescribes memory search before architecture design and persistence after design via Serena tools. |
| .claude/agents/backlog-generator.md | 84 | defines | Requires searching memory for backlog context and persisting generated backlog items. |
| .claude/agents/code-reviewer.md | 118 | defines | Directs code reviewer to retrieve review guidelines and save review learnings to memory. |
| .claude/agents/devops.md | 195 | defines | Mandates memory query before pipeline configuration and persistence of infrastructure observations. |
| .claude/agents/high-level-advisor.md | 153 | defines | Instructs strategic advisor to search architectural precedent and persist high-level guidance. |
| .claude/agents/independent-thinker.md | 138 | defines | Directs independent thinker to consult historical contrarian analyses and store new critique observations. |
| .claude/agents/merge-resolver.md | 265 | defines | Requires querying memory for conflict patterns and persisting merge resolutions. |
| .claude/agents/qa.md | 747 | defines | Directs QA agent to search testing history and persist verified test strategies and defects. |
| .claude/agents/retrospective.md | 1316 | defines | Mandates searching past retro patterns and persisting extracted procedural skills and observations. |
| .claude/agents/security.md | 665 | defines | Instructs security agent to retrieve threat models and store vulnerability assessments. |
| .claude/agents/skillbook.md | 147 | defines | Details skill management protocol for indexing and retrieving persisted skills from memory. |
| .claude/agents/task-decomposer.md | 175 | defines | Directs task decomposer to check past task patterns and persist task breakdowns. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 326 | defines | Prescribes memory searching for existing root-cause patterns before creating new ones. |
| CONTRIBUTING.md | 251 | used here | Lists Memory Protocol as a standard required section in the agent authoring guidelines. |
| templates/AGENTS.md | 219 | defines | Designates Memory Protocol as a required component across multi-platform agent templates. |
| templates/agents/architect.shared.md | 529 | defines | Shared template specification for architect memory retrieval and learning persistence. |
| templates/agents/backlog-generator.shared.md | 74 | defines | Shared template specification for backlog generator memory interaction. |
| templates/agents/code-reviewer.shared.md | 128 | defines | Shared template specification for code reviewer memory search and persistence. |
| templates/agents/devops.shared.md | 169 | defines | Shared template specification for devops memory operations. |
| templates/agents/high-level-advisor.shared.md | 141 | defines | Shared template specification for strategic advisor memory interactions. |
| templates/agents/independent-thinker.shared.md | 111 | defines | Shared template specification for independent thinker memory protocol. |
| templates/agents/qa.shared.md | 691 | defines | Shared template specification for QA test strategy retrieval and memory recording. |
| templates/agents/retrospective.shared.md | 1338 | defines | Shared template specification for retrospective learning extraction and storage. |
| templates/agents/security.shared.md | 633 | defines | Shared template specification for security review memory protocol. |
| templates/agents/skillbook.shared.md | 150 | defines | Shared template specification for skillbook agent memory management. |
| templates/agents/task-decomposer.shared.md | 64 | defines | Shared template specification for task decomposer memory search. |
| templates/README.md | 217 | used here | Notes Memory Protocol as a common section evaluated during template drift audits. |

## Consumes
Topic keywords and search queries before starting a task; observations and entity definitions upon task completion.

## Produces
Persistent knowledge graph entities and observations stored in the memory subsystem.

## When applied
> "Search for context (before work)" — .agents/AGENT-SYSTEM.md:1225
> "Store learnings (after work)" — .agents/AGENT-SYSTEM.md:1229

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
A universal dual-phase protocol mandated across all 20 agents and shared templates requiring every agent to query memory for context before executing work and to persist observations or learnings upon completion. While the underlying memory engines (Serena knowledge graph, cloudmcp-manager) are excluded from lifecycle scope per METHOD §1.2, the lifecycle design pattern of search-before-change and persist-after-change is central to cross-agent coordination and repository memory.
