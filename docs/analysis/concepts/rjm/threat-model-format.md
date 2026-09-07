---
package: rjm
name: Threat Model Format
slug: threat-model-format
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Threat Model Format

## Definition — verbatim
> "Save threat models to `.agents/security/TM-NNN-[feature].md`." — .claude/agents/security.md:719

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 717 | defined here | Specification referencing the threat model structure and file naming convention. |
| .claude/agents/security/references/threat-model-template.md | 1 | defined here | Reference template defining markdown structure for Assets, Threat Actors, STRIDE, Data Flow, and Controls. |
| templates/agents/security.shared.md | 684 | defined here | Shared template specification pointing to the threat model template. |

## Consumes
Architectural designs, asset definitions, threat actor profiles, and feature specifications.

## Produces
A structured threat model document saved to `.agents/security/TM-NNN-[feature].md`.

## When applied
Applied during architectural planning or pre-implementation security evaluations for complex features.

## Sub-concepts
none

## Part of
security-review

## Implementation status
defects: doc-drift, missing-path

## Design notes
A structured template prescribing the standard format for architectural threat models, specifying sections for Assets, Threat Actors, STRIDE analysis, Data Flow Diagrams, and Recommended Controls stored under `.agents/security/`.
