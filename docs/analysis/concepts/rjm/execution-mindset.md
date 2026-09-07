---
package: rjm
name: Execution Mindset
slug: execution-mindset
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Execution Mindset

## Definition — verbatim
> "Read the complete change, verify each claim, filter aggressively, and stop when no high-confidence defect remains." — .claude/agents/code-reviewer.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/backlog-generator.md | 152 | defined here | Section heading and behavioral imperatives focusing on discovering unnoticed project gaps and sizing tasks. |
| .claude/agents/code-reviewer.md | 133 | defined here | Section heading and behavioral imperatives focusing on verifying claims and aggressive defect filtering. |
| .claude/agents/devops.md | 515 | defined here | Section heading and behavioral imperatives focusing on infrastructure reliability and automation. |
| .claude/agents/high-level-advisor.md | 294 | defined here | Section heading and behavioral imperatives focusing on brutal honesty and priority decisions. |
| .claude/agents/independent-thinker.md | 275 | defined here | Section heading and behavioral imperatives focusing on intellectual skepticism and evidence-based contrarian analysis. |
| .claude/agents/merge-resolver.md | 303 | defined here | Section heading and behavioral imperatives focusing on clean merge conflict resolution. |
| .claude/agents/qa.md | 863 | defined here | Section heading and behavioral imperatives focusing on relentless verification and edge case testing. |
| .claude/agents/retrospective.md | 1469 | defined here | Section heading and behavioral imperatives focusing on objective timeline and root cause analysis. |
| .claude/agents/security.md | 783 | defined here | Section heading and behavioral imperatives focusing on paranoid zero-trust threat modeling. |
| .claude/agents/task-decomposer.md | 317 | defined here | Section heading and behavioral imperatives focusing on atomic, estimable work breakdown. |
| templates/agents/architect.shared.md | 814 | defined here | Shared template section establishing long-term architectural governance mindset. |
| templates/agents/backlog-generator.shared.md | 145 | defined here | Shared template section establishing proactive backlog discovery mindset. |
| templates/agents/code-reviewer.shared.md | 143 | defined here | Shared template section establishing code review quality mindset. |
| templates/agents/devops.shared.md | 274 | defined here | Shared template section establishing infrastructure automation mindset. |
| templates/agents/high-level-advisor.shared.md | 285 | defined here | Shared template section establishing strategic advisory mindset. |
| templates/agents/independent-thinker.shared.md | 219 | defined here | Shared template section establishing independent critique mindset. |
| templates/agents/qa.shared.md | 793 | defined here | Shared template section establishing QA verification mindset. |
| templates/agents/security.shared.md | 750 | defined here | Shared template section establishing defensive security mindset. |
| templates/agents/task-decomposer.shared.md | 203 | defined here | Shared template section establishing task decomposition mindset. |
| templates/README.md | 216 | used here | Documents the execution mindset section requirement across agent template standards. |

## Consumes
Agent role specifications, task assignments, and domain constraints.

## Produces
Persona-specific behavioral focus and cognitive alignment throughout task execution.

## When applied
Adopted by subagents during execution to guide reasoning and prioritize core responsibilities.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
Execution Mindset provides persona-specific cognitive priming at the conclusion of agent prompt definitions. By distilling an agent's operating philosophy into concise behavioral imperatives (e.g., "Think, Act, Prioritize, Size" or "Verify each claim and filter aggressively"), it aligns LLM reasoning with the specific responsibilities of the role and prevents cognitive drift during complex workflows.
