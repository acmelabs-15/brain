---
package: rjm
name: Analyst Agent
slug: analyst-agent
kind: role
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Analyst Agent

## Definition — verbatim
(used, not defined)

> "QA agent validates code quality; research documentation is analyst agent's domain." — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:78

## Also called — verbatim
Analyst — .agents/analysis/002-project-constraints-consolidation.md:853

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 853 | used here | Signed as the preparing author for the project constraints consolidation research and options analysis. |
| .agents/architecture/ADR-020-feature-request-review-step.md | 26 | used here | Designated as Step 1 in issue triage responsible for categorizing issues and assigning labels. |
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 78 | used here | Distinguished from QA agent by defining research documentation and feasibility analysis as the analyst's domain. |

## Consumes
Feature requests, bug reports, repository state, and architectural context.

## Produces
Categorized issues, feasibility analyses, constraint inventories, and trade-off matrices.

## When applied
Invoked during issue triage, pre-spec research, and architectural feasibility investigations.

## Sub-concepts
none

## Part of
agent-team

## Implementation status
defects: missing-path, orphan

## Design notes
The Analyst Agent is a specialist role dedicated to empirical investigation, issue categorization, and research documentation. By separating analytical research from validation (QA) and architecture (Architect), rjm preserves single responsibility across its agent catalog, ensuring exploratory findings and feasibility studies are thoroughly documented before implementation begins.
