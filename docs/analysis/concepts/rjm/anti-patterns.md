---
package: rjm
name: Anti-Patterns
slug: anti-patterns
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
  - {path: .claude/skills/codebase-documenter/references/visual_aids_guide.md, sha256: 51f928f58f93c32a8d7f109f0f0e4adf9b6f10f33af838b3bbd56873e10785ba}
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anti-Patterns

## Definition — verbatim
(used, not defined)

> "Every skill should have an Anti-Patterns section first." — .claude/skills/context-optimizer/references/vibe-engineering.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 116 | defined here | Section heading introducing behaviors and document patterns to avoid when writing explainers and PRDs. |
| .claude/agents/issue-feature-review.md | 126 | defined here | Section heading detailing review anti-patterns like shallow summaries and unverified recommendations. |
| .claude/agents/merge-resolver.md | 253 | defined here | Section heading listing conflict resolution anti-patterns such as blind acceptance or dropping incoming logic. |
| .claude/skills/agent-harness-reference/SKILL.md | 309 | defined here | Section heading defining anti-patterns in agent harness design and prompt structure. |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 53 | defined here | Section heading listing anti-patterns in applying the OODA Loop strategy. |
| .claude/skills/business-strategy/SKILL.md | 104 | defined here | Section heading enumerating common strategic pitfalls in business analysis. |
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 160 | defined here | Section heading documenting bad code comment practices to avoid. |
| .claude/skills/codebase-documenter/references/visual_aids_guide.md | 74 | defined here | Section heading covering visual diagramming anti-patterns. |
| .claude/skills/codebase-documenter/SKILL.md | 83 | defined here | Section heading outlining anti-patterns in codebase documentation. |
| .claude/skills/context-optimizer/references/vibe-engineering.md | 55 | used here | Instruction emphasizing that skills should lead with an Anti-Patterns section. |
| .claude/skills/cynefin-classifier/SKILL.md | 387 | defined here | Section heading listing classification mistakes in Cynefin problem categorisation. |
| .claude/skills/git-advanced-workflows/SKILL.md | 166 | defined here | Section heading detailing dangerous git practices and invalid workflow patterns. |
| .claude/skills/github-url-intercept/SKILL.md | 334 | defined here | Section heading warning against unauthorized URL handling patterns. |
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 73 | defined here | Section heading highlighting code intent anti-patterns. |
| .claude/skills/merge-resolver/SKILL.md | 218 | defined here | Section heading covering anti-patterns in automated git merge conflict resolution. |
| .claude/skills/pipeline-validator/SKILL.md | 418 | defined here | Section heading specifying CI pipeline validation anti-patterns. |
| .claude/skills/programming-advisor/SKILL.md | 358 | defined here | Section heading defining programming advice anti-patterns to flag. |
| .claude/skills/prompt-engineer/SKILL.md | 145 | used here | Checklist item verifying that the anti-patterns section was consulted. |
| .claude/skills/prompt-engineer/SKILL.md | 148 | defined here | Section heading detailing prompt engineering anti-patterns. |
| .claude/skills/prose-self-check/SKILL.md | 157 | defined here | Section heading covering common prose self-check defects. |
| .claude/skills/reflect/references/decision-tree-and-examples.md | 138 | defined here | Section heading listing reflection process anti-patterns. |
| .claude/skills/requirements-interview/SKILL.md | 75 | defined here | Section heading covering requirement interviewing anti-patterns. |
| .claude/skills/research-and-incorporate/SKILL.md | 147 | defined here | Section heading detailing research ingestion anti-patterns. |
| .claude/skills/security-scan/SKILL.md | 226 | defined here | Section heading covering security auditing anti-patterns. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 57 | defined here | Section heading in skill template reserving space for anti-patterns. |
| .claude/skills/skillforge/references/specification-template.md | 225 | defined here | XML section tag for specifying domain anti-patterns in skill specifications. |
| .claude/skills/skillforge/SKILL.md | 236 | defined here | Section heading detailing skill authoring anti-patterns. |
| .claude/skills/software-engineering-library/references/clean-architecture.md | 140 | defined here | Section heading detailing Clean Architecture violations. |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 153 | defined here | Section heading listing distributed data architecture anti-patterns. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 228 | defined here | Section heading detailing Domain-Driven Design anti-patterns. |
| .claude/skills/spec-generator/SKILL.md | 180 | defined here | Section heading enumerating specification generator anti-patterns. |
| templates/agents/dependency-auditor.shared.md | 146 | defined here | Section heading listing dependency auditing anti-patterns. |
| templates/agents/explainer.shared.md | 122 | defined here | Section heading covering explainer authoring anti-patterns. |
| templates/agents/issue-feature-review.shared.md | 138 | defined here | Section heading listing issue review anti-patterns. |
| templates/agents/merge-resolver.shared.md | 133 | defined here | Section heading detailing merge resolution anti-patterns. |
| templates/agents/orchestrator.shared.md | 364 | defined here | Section heading defining multi-agent orchestrator anti-patterns. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, orphan, internal-contradiction

## Design notes
Anti-Patterns is a standardized document section heading across agent definitions and skills catalogs specifying behaviors, designs, and practices to avoid, classified as kind: name-only per D-023.
