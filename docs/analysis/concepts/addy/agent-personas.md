---
package: addy
name: Agent Personas
slug: agent-personas
kind: role
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Agent Personas

## Definition — verbatim
(used, not defined)
> "### Agent Personas (*.agent.md)" — docs/copilot-setup.md:19

## Also called — verbatim
- `Personas` — docs/developer-onboarding.md:16
- `Specialized Agents` — docs/copilot-setup.md:78

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-setup.md | 19 | used here | Section header and setup instructions for configuring specialized agent personas in GitHub Copilot. |

## Consumes
Candidate source code, pull requests, test coverage reports, or security endpoints.

## Produces
Targeted review assessments, structured finding summaries, and specialist recommendations.

## When applied
Invoked in developer tools (such as Copilot Chat `@code-reviewer`, `@test-engineer`, `@security-auditor`) or during multi-agent review phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Agent personas define modular, specialized roles that inspect software deliverables through specific technical perspectives (code quality, testing strategy, security vulnerabilities, or web performance). By encapsulating role-specific review heuristics and output formats into dedicated agent configurations, personas prevent broad, unfocused evaluations and enforce structured multi-angle review.
