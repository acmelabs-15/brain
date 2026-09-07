---
package: rjm
name: Handoff Protocol
slug: handoff-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
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
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Handoff Protocol

## Definition — verbatim
> "## Handoff Protocol" — .claude/agents/backlog-generator.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 61 | used here | Cited as containing explicit delegation denials across seven of nine upper-tier agents. |
| .claude/agents/backlog-generator.md | 141 | defined here | Section mandating return of planning results to orchestrator and denying direct delegation. |
| .claude/agents/code-reviewer.md | 129 | defined here | Section mandating return of review findings and verdicts to orchestrator. |
| .claude/agents/devops.md | 496 | defined here | Section defining return of infrastructure status and deployment findings to orchestrator. |
| .claude/agents/high-level-advisor.md | 304 | defined here | Section defining return of strategic guidance and trade-off analyses to orchestrator. |
| .claude/agents/independent-thinker.md | 227 | defined here | Section defining return of critique, contrarian analysis, and blind-spot reviews to orchestrator. |
| .claude/agents/merge-resolver.md | 285 | defined here | Section defining return of conflict resolutions and merge verifications to orchestrator. |
| .claude/agents/qa.md | 851 | defined here | Section defining return of test execution outcomes and quality gate evaluations to orchestrator. |
| .claude/agents/retrospective.md | 1356 | defined here | Section defining return of root-cause learnings and process improvement actions to orchestrator. |
| .claude/agents/security.md | 760 | defined here | Section defining return of threat models, vulnerability scans, and security sign-offs to orchestrator. |
| .claude/agents/task-decomposer.md | 298 | defined here | Section defining return of broken-down atomic tasks and dependency maps to orchestrator. |
| CONTRIBUTING.md | 253 | used here | Contributor guide section listing Handoff Protocol as a required agent prompt section. |
| templates/agents/architect.shared.md | 739 | defined here | Shared template section defining architectural recommendations and handoff back to orchestrator. |
| templates/agents/backlog-generator.shared.md | 134 | defined here | Shared template section defining backlog output return and prohibition on subagent delegation. |
| templates/agents/code-reviewer.shared.md | 139 | defined here | Shared template section defining code review completion return to orchestrator. |
| templates/agents/devops.shared.md | 255 | defined here | Shared template section defining CI/CD task completion return to orchestrator. |
| templates/agents/high-level-advisor.shared.md | 295 | defined here | Shared template section defining strategic consultation return to orchestrator. |
| templates/agents/independent-thinker.shared.md | 200 | defined here | Shared template section defining critical assessment return to orchestrator. |
| templates/agents/qa.shared.md | 781 | defined here | Shared template section defining quality verification return to orchestrator. |
| templates/agents/retrospective.shared.md | 1402 | defined here | Shared template section defining retrospective synthesis return to orchestrator. |
| templates/agents/security.shared.md | 727 | defined here | Shared template section defining security audit return to orchestrator. |
| templates/agents/task-decomposer.shared.md | 316 | defined here | Shared template section defining decomposed task delivery return to orchestrator. |

## Consumes
Task execution artifacts, agent findings, and subagent output formats.

## Produces
Structured handoff payloads, routing recommendations, and returned execution results.

## When applied
At the conclusion of an agent turn or subagent delegation when transferring control or reporting results.

## Sub-concepts
none

## Part of
agent-coordination

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
The standardized interaction pattern across all agent prompt definitions ensuring that subagents cannot autonomously delegate downward, returning structured recommendations and results exclusively to the orchestrator.
