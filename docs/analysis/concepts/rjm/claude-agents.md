---
package: rjm
name: claude-agents
slug: claude-agents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md, sha256: 3b68e11d9db7b25daccc5b46f4c2ec9ee5595e1d9161815396d0217d5050a76f}
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# claude-agents

## Definition — verbatim
(used, not defined)

> "claude-agents" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md | 17 | used here | Sibling plugin name cited during plugin load failure triage in post-incident report. |
| scripts/validation/rule_activation_coverage_baseline.json | 7 | used here | Baseline rule name in rule activation coverage baseline configuration. |

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
A plugin package and ruleset identifier rather than an operational lifecycle concept, classified as `name-only` per D-023.
