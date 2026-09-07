---
package: rjm
name: Stop Criteria
slug: stop-criteria
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

# Stop Criteria

## Definition — verbatim
> "### Stop Criteria" — .claude/agents/security.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 173 | defined here | Hard rejection criteria that strictly forbid approval of a PR exhibiting critical security defects. |
| templates/agents/security.shared.md | 144 | defined here | Defined in the shared security agent template as non-negotiable PR rejection criteria. |

## Consumes
Security scan findings, workflow diffs, dependency audit results, and code secret scans.

## Produces
Non-negotiable review rejection verdicts (`[FAIL]`) halting PR progression.

## When applied
Applied as an absolute boundary check on every pull request evaluated by the Security Agent.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
Stop Criteria defines absolute negative boundaries for security review in rjm. By establishing explicit conditions that trigger an automatic non-approval (such as unpinned actions, hardcoded secrets, shell injection in workflows, or suppressed linters), it prevents agents from compromising on critical security invariant violations under delivery pressure.
