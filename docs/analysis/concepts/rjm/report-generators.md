---
package: rjm
name: Report generators
slug: report-generators
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Report generators

## Definition — verbatim
> "- **Report generators**: Scripts that format CI results for PR comments" — .agents/architecture/ADR-019-script-organization.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 67 | defined here | Defined as a GitHub Actions script category for formatting CI execution results into PR comments. |

## Consumes
Raw CI check outputs, lint logs, test summaries, and AI review evaluation metrics.

## Produces
Human-readable Markdown comments and summaries posted to pull requests or issues.

## When applied
Invoked at the conclusion of CI review and validation jobs to post feedback back to pull request threads.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Formatting scripts that transform raw machine outputs, review verdicts, and test results into structured markdown comments for pull requests.
