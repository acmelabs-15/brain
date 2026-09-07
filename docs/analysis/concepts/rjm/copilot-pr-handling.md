---
package: rjm
name: Copilot PR Handling
slug: copilot-pr-handling
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Copilot PR Handling

## Definition — verbatim
> "### Copilot PR Handling" — docs/autonomous-pr-monitor.md:878
> "When a Copilot-authored PR (e.g., `copilot-swe-agent`) has `CHANGES_REQUESTED`:" — docs/autonomous-pr-monitor.md:880

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 878 | defined here | Outlines the feedback synthesis and mention workflow for prompting Copilot to address requested changes on its PRs. |

## Consumes
Copilot pull requests in `CHANGES_REQUESTED` status and review comments from automated review bots.

## Produces
Consolidated synthesis comment posted to the PR mentioning `@copilot` to prompt autonomous remediation.

## When applied
Applied when a Copilot-authored pull request has received requested changes from review bots.

## Sub-concepts
none

## Part of
bot-categories-and-pr-handling

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Copilot PR Handling bridges automated review bots (CodeRabbit, Cursor, Gemini) and generative authoring agents like Copilot, synthesizing multi-bot review feedback into a single actionable `@copilot` mention comment.
