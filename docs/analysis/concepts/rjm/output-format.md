---
package: rjm
name: --output-format
slug: output-format
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
  - {path: .agents/governance/interview-response-template.md, sha256: ce90ef506e805f7ff9e945fb97ea609c0f56cfaa5fda3aac08c327770f3b680a}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --output-format

## Definition — verbatim
(used, not defined)

> "2. **Scripts MUST accept `--output-format`** argument with values `json`," — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 24 | used here | Shipped Python CLI argument replacing PowerShell -OutputFormat. |
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 93 | defined here | Formally mandated CLI parameter for format selection in Python skill scripts. |
| .agents/governance/agent-interview-protocol.md | 78 | defined here | Governance interview protocol question header for agent output formatting. |
| .agents/governance/interview-response-template.md | 112 | used here | Section header in agent interview response template defining output formatting. |
| .claude/agents/code-reviewer.md | 78 | defined here | Section heading defining structured output requirements for code-reviewer agent. |
| .claude/agents/high-level-advisor.md | 264 | defined here | Section heading defining structured output format for high-level advisor agent. |
| .claude/agents/independent-thinker.md | 246 | defined here | Section heading specifying required output structure for independent thinker agent. |
| .claude/agents/silent-failure-hunter.md | 119 | defined here | Section heading specifying output format and required fields for silent failure hunter. |
| .claude/agents/task-decomposer.md | 138 | defined here | Section heading establishing decomposition output format requirements. |
| .claude/agents/type-design-analyzer.md | 66 | defined here | Label specifying structured output format for type design analysis. |
| .claude/skills/analyze/references/agent-architecture-patterns.md | 21 | defined here | Named pattern dimension requiring structured format and required fields in agent outputs. |
| templates/agents/code-reviewer.shared.md | 88 | defined here | Template section heading defining output structure for code-reviewer agent. |
| templates/agents/high-level-advisor.shared.md | 255 | defined here | Template section heading specifying output format for high-level advisor. |
| templates/agents/issue-feature-review.shared.md | 73 | defined here | Template section heading defining output schema for issue feature review agent. |
| templates/agents/silent-failure-hunter.shared.md | 129 | defined here | Template section heading defining output structure for silent failure hunter agent. |
| templates/agents/type-design-analyzer.shared.md | 76 | defined here | Template section label defining output structure for type design analysis agent. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
standard-envelope

## Implementation status
clean

## Design notes
A command-line argument flag and prompt section heading across agent definitions and skill scripts specifying machine vs human readable formatting per D-023.
