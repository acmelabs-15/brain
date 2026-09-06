---
package: addy
name: using-agent-skills
slug: using-agent-skills
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# using-agent-skills

## Definition — verbatim
> "This meta-skill helps you discover and apply the right skill for your current task." — skills/using-agent-skills/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 79 | references | Injected into sessions via the session-start hook to establish routing and shared behaviors. |
| evals/cases/using-agent-skills.json | 2 | references | Case file evaluating routing decisions against the meta-skill's flowchart. |
| external/using-agent-skills.md | 5 | defines | External documentation page describing the meta-skill that governs discovery and invocation. |
| hooks/session-start-test.sh | 32 | references | Tests that session-start payload includes using-agent-skills meta-skill content. |
| hooks/session-start.sh | 3 | references | Embedded and emitted in the SessionStart JSON payload at session startup. |
| README.md | 222 | references | Catalog entry point identifying using-agent-skills as the pack's governing meta-skill. |
| scripts/validate-reference-links.js | 12 | references | Cited as pointing to the repo-root Definition of Done checklist. |
| skills/using-agent-skills/SKILL.md | 6 | defines | Primary skill file defining skill discovery flowchart and six core operating behaviors. |

## Consumes
Incoming user request, task description, and repository phase context.

## Produces
Dispatched task execution mapped to specific lifecycle skills, accompanied by adherence to core operating behaviors.

## When applied
At the start of every session or when deciding which engineering skill applies to an incoming task.

## Sub-concepts
skill-discovery, surface-assumptions, manage-confusion-actively, push-back-when-warranted, enforce-simplicity, maintain-scope-discipline, verify-dont-assume

## Part of
agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
As the meta-skill of the addy pack, `using-agent-skills` acts as an operating system and router for AI coding agents. It pairs an algorithmic decision tree mapping development stages to specific skills with six mandatory operating behaviors (such as pushing back on bad ideas, enforcing simplicity, and verifying before claiming completion) to maintain engineering discipline across the entire lifecycle.
