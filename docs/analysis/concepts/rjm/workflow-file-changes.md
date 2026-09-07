---
package: rjm
name: Workflow File Changes
slug: workflow-file-changes
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Workflow File Changes

## Definition — verbatim
> "### Workflow File Changes (Highest Risk)" — .claude/agents/security.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 165 | defined here | Highest-risk review protocol governing modifications to CI/CD workflows and automation files. |
| templates/agents/security.shared.md | 136 | defined here | Defined in the shared security agent template for evaluating CI/CD workflow security. |

## Consumes
Modifications to `.github/workflows/`, `.gitlab-ci.yml`, or other CI/CD configuration files.

## Produces
Mandatory compliance checks: SHA pinning of actions, secret exposure verification, and shell injection rejection.

## When applied
Applied whenever a pull request touches CI/CD workflow definitions or automation pipelines.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
In rjm, Workflow File Changes represents the highest-risk review tier because CI/CD pipelines possess repository write privileges, deployment secrets, and arbitrary command execution capabilities. By enforcing action SHA pinning, secret hygiene, and shell injection bans, this gate protects the repository from supply chain compromises and CI pipeline takeovers.
