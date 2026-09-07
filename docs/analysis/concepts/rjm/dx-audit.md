---
package: rjm
name: DX audit
slug: dx-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DX audit

## Definition — verbatim
> "| `run a DX audit` | Full audit of the target |" — .claude/skills/dx-review/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 11 | defines | Defined as an invocation trigger phrase and procedure for performing a full developer experience audit. |

## Consumes
Target project repositories, quickstart documentation, CLI/API interfaces, and explicit user execution permissions.

## Produces
A comprehensive evaluation across eight developer experience dimensions with evidence-backed ratings and gating verdicts.

## When applied
Invoked when a developer requests an end-to-end evaluation of a product's developer journey and ergonomic quality.

## Sub-concepts
target-discovery, onboarding-audit, error-message-audit, documentation-audit, upgrade-path-audit, developer-environment-audit, scorecard

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The operational procedure and primary trigger for executing rjm's dx-review skill. It directs an auditor to assess developer journey touchpoints from discovery through environment setup and error recovery, replacing subjective opinions with empirical observations.
