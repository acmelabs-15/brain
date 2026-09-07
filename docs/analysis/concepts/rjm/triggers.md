---
package: rjm
name: Triggers
slug: triggers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Triggers

## Definition — verbatim
(used, not defined)

> "Triggers" — .claude/skills/agent-harness-reference/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 14 | defines | Section heading declaring natural language activation triggers for harness reference consultation. |
| .claude/skills/codebase-documenter/SKILL.md | 18 | defines | Section heading listing trigger phrases for codebase documentation scaffolding. |
| .claude/skills/github-url-intercept/SKILL.md | 55 | defines | Section heading specifying patterns and URLs that trigger GitHub URL interception. |
| .claude/skills/reflect/SKILL.md | 19 | defines | Section heading declaring trigger phrases initiating reflective memory extraction. |
| .claude/skills/requirements-interview/SKILL.md | 18 | defines | Section heading defining user phrases that trigger the adversarial requirements interview. |
| .claude/skills/research-and-incorporate/SKILL.md | 58 | defines | Section heading declaring slash commands and prompt patterns triggering topic research and incorporation. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 25 | defines | Template section heading providing the schema for declaring skill activation triggers. |

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
defects: doc-drift, missing-path, orphan

## Design notes
A standardized structural heading (`## Triggers`) across skill definitions and templates enumerating the natural language phrases, slash commands, and pattern matchers that activate a skill rather than an independent lifecycle concept.
