---
package: rjm
name: AWESOME_AI_SESSIONS_DIR
slug: awesome-ai-sessions-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AWESOME_AI_SESSIONS_DIR

## Definition — verbatim
(used, not defined)

> "SESSION_DIR = os.environ.get(\"AWESOME_AI_SESSIONS_DIR\", \".agents/sessions\")" — .agents/analysis/adr-045-inventory-audit.md:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 169 | defined here | Proposed environment variable for parameterizing session directory paths in scripts. |

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
defects: internal-contradiction, missing-path

## Design notes
Proposed environment variable configuration key for parameterizing session log directories, not an independent lifecycle concept.
