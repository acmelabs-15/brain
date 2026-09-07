---
package: rjm
name: Reproduce-on-Main Discriminator
slug: reproduce-on-main-discriminator
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reproduce-on-Main Discriminator

## Definition — verbatim
> "| A CI job failed on your PR | 5. Reproduce-on-main discriminator | `ai-agents-debugging-playbook` for symptom triage |" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 29 | defines | Section heading detailing Recipe 5 worked example PR #1361 and standing triage rules for PR CI failures. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 33 | defines | Recipe selector entry prescribing triage procedure when CI jobs fail on PR branches. |

## Consumes
CI job failure logs, main branch commit history, and GitHub Actions workflow execution records.

## Produces
Definitive triage verdict establishing whether an error is pre-existing on main or a regression in the PR diff.

## When applied
Triggered on any CI failure during pull request validation prior to modifying PR code.

## Sub-concepts
reproduce-on-main-rule

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
Recipe 5 of the empirical probe toolkit. It establishes an empirical triage protocol for CI failures: checking recent main branch workflow runs to ascertain whether an error is pre-existing, thereby preventing developers from chasing phantom bugs in their own diffs.
