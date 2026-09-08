---
package: rjm
name: grade_domains.py
slug: grade-domains-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# grade_domains.py

## Definition — verbatim
(used, not defined)

> "- **Bash**: Run `uv run python ${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/quality-grades/scripts/grade_domains.py`" — templates/agents/quality-auditor.shared.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/quality-auditor.shared.md | 47 | used here | Invoked via Bash tool to scan repository domains and calculate multi-layer quality grades. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A Python script filename used by the quality auditor agent to compute domain grades, classified as name-only per D-023.
