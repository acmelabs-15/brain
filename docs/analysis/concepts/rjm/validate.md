---
package: rjm
name: validate
slug: validate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
  - {path: .claude/skills/panning-for-gold/scripts/pan.py, sha256: f448b2523db6e65590e2bf7fd22bd6426e17d2eb9424632d6d77019aff99b533}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: scripts/validation/validate_hook_anchoring.py, sha256: 0ffb67131b3c2a02efe52fdae23e3d439235a2be9c07ee4e95e44a4acbce99f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate

## Definition — verbatim
> "| `validate` | Config changes, troubleshooting | <5s | Console only |" — .claude/skills/codeql-scan/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codeql-scan/SKILL.md | 54 | defined here | Fast diagnostic operation mode verifying CodeQL configuration and troubleshooting setup in under 5 seconds. |
| .claude/skills/panning-for-gold/scripts/pan.py | 6 | defined here | CLI subcommand validating an inventory file against its JSON schema. |
| .claude/skills/skillforge/scripts/validate-skill.py | 766 | defined here | Core validation method checking skill directory structure, frontmatter schemas, and script integrity. |
| scripts/validation/validate_hook_anchoring.py | 286 | defined here | Script entrypoint validating that git and shell hooks are correctly anchored across the repository. |

## Consumes
Configuration files, inventory schema definitions, skill directories, or hook anchor configurations.

## Produces
Validation verdicts, console error logs, and boolean/integer exit codes.

## When applied
Applied during troubleshooting, config modifications, skill creation, and hook installation verification.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A verification gate and action name used across rjm tools to quickly check structural and syntactic correctness of configs, schemas, skills, and hooks without executing heavy analytical pipelines.
