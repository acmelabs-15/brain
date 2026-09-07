---
package: rjm
name: debug
slug: debug
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# debug

## Definition — verbatim
> "Debug your application to find and fix a bug. Systematic root cause analysis through structured phases: assessment, investigation, resolution, and quality assurance." — .claude/agents/debug.md:3

## Also called — verbatim
> "Systematic Bug Hunter" — .claude/agents/debug.md:30
> "Debugging assistance, root cause analysis" — README.md:414

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 2 | defined here | Frontmatter declaration defining the debug executor agent. |
| docs/agent-catalog.md | 23 | used here | Agent catalog listing detailing the debug agent's executor role and four-phase methodology. |
| README.md | 414 | defined here | Agent catalog table row defining the debug agent for debugging assistance and root cause analysis across platforms. |

## Consumes
Bug reports, error messages, stack traces, reproduction steps, and application logs.

## Produces
Diagnostic findings, root cause determinations, minimal code fixes, verification test cases, and final debug reports.

## When applied
When diagnosing unexpected application behavior, runtime exceptions, or failing tests.

## Sub-concepts
systematic-bug-hunter, problem-assessment, investigation, resolution, quality-assurance, debugging-guidelines

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
An executor agent role dedicated to disciplined root cause analysis and defect remediation. Rather than attempting ad-hoc patching, the debug agent enforces a four-phase lifecycle (assessment, investigation, resolution, quality assurance) that requires reproducing the defect and verifying hypotheses before writing code, preventing unverified fixes and regressions.
