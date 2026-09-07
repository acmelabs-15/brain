---
package: rjm
name: Report Generation
slug: report-generation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Report Generation

## Definition — verbatim
> "4. **Report Generation**" — .claude/skills/code-qualities-assessment/SKILL.md:96

## Also called — verbatim
> "4. Report Generation" — .claude/skills/style-enforcement/SKILL.md:173
> "REPORT GENERATION" — scripts/incoherence.py:443

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 96 | defined here | Step 4 of code quality assessment formatting markdown, JSON, or HTML diagnostic summaries. |
| .claude/skills/style-enforcement/SKILL.md | 173 | defined here | Step 4 of style enforcement generating violation reports in markdown, JSON, or SARIF. |
| scripts/incoherence.py | 443 | defined here | Step 13 of incoherence detection generating executive summaries and resolution options. |

## Consumes
Assessment scores, regression deltas, style violations, and incoherence findings.

## Produces
Diagnostic reports formatted as Markdown, JSON, SARIF, or HTML written to stdout or designated report files.

## When applied
Executed at the conclusion of analytical scans before exit code emission.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
defects: doc-drift, missing-path, internal-contradiction, orphan

## Design notes
`Report Generation` is a ubiquitous reporting technique across rjm tools (`code-qualities-assessment`, `style-enforcement`, `incoherence`) that synthesizes raw analytical findings into structured diagnostic artifacts. Generating human-readable markdown and machine-readable JSON/SARIF ensures that both human developers and downstream agent orchestrators receive actionable feedback, remediation pointers, and clear audit trails.
