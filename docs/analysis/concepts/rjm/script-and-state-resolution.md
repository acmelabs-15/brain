---
package: rjm
name: Script and state resolution
slug: script-and-state-resolution
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script and state resolution

## Definition — verbatim
> "Script and state resolution (consumer-repo safe)" — .claude/skills/spec-generator/references/spec-step0-gates.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 105 | defined here | Protocol defining resolution order for scripts and data files across toolkit-development and installed-plugin modes. |

## Consumes
Harness base directory `<skill_dir>`, current working directory, and toolkit repository structure.

## Produces
Resolved filesystem paths to bundled helper scripts (`redact_secrets.py`, `metrics_writer.py`) and data files (`spec-entity-aliases.json`).

## When applied
Invoked prior to executing helper scripts or reading state files when running `/spec` commands.

## Sub-concepts
none

## Part of
spec-generator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Defines a robust fallback resolution hierarchy allowing skills to execute reliably whether invoked within the toolkit source repository (toolkit-dev mode) or as an installed plugin inside external consumer repositories.
