---
package: rjm
name: Orphan references
slug: orphan-references
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Orphan references

## Definition — verbatim
> "Scans structured artifacts for references to skills, scripts, and counts that do not match the working tree (REQ-009, issue #1939)." — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 38 | defined here | Section heading and description defining the orphan references instrument and its execution commands. |

## Consumes
Structured markdown specifications, eval tests, and plugin manifests.

## Produces
Automated detection of dangling or nonexistent file paths, skill references, and script invocations.

## When applied
Executed via scan.py to prevent broken references and doc drift across specs and configuration files.

## Sub-concepts
orphan-ref-ignore, orphan-ref-ignore-file

## Part of
quality-gates

## Implementation status
defects: unfailable-gate, other

## Design notes
An integrity gate in rjm that scans specifications, eval files, and manifests to ensure all cited skill names, script paths, and component references resolve to actual entities in the working tree. It prevents documentation rot where deleted tools or renamed skills leave dangling references across the ecosystem.
