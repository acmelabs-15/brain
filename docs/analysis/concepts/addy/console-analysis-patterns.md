---
package: addy
name: Console Analysis Patterns
slug: console-analysis-patterns
kind: pattern
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Console Analysis Patterns

## Definition — verbatim
> "## Console Analysis Patterns" — skills/browser-testing-with-devtools/SKILL.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 236 | defined here | Diagnostic pattern categorizing console output into ERROR, WARN, and LOG levels |

## Consumes
Browser console stream and runtime event logs.

## Produces
Triage categorization distinguishing uncaught exceptions, network failures, framework warnings, and debug logs.

## When applied
When analyzing browser runtime behavior, diagnosing client errors, or verifying application state during DevTools testing.

## Sub-concepts
clean-console-standard

## Part of
browser-testing-with-devtools

## Implementation status
clean

## Design notes
In addy, Console Analysis Patterns classify browser runtime messages across ERROR, WARN, and LOG levels. This structured triage allows agents to systematically map uncaught exceptions to code bugs, failed requests to network and CORS issues, deprecations to future compatibility problems, and accessibility warnings to a11y violations.
