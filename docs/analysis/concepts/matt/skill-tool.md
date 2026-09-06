---
package: matt
name: Skill tool
slug: skill-tool
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/productivity/grill-me/SKILL.md, sha256: caaf8b8de1684f96e26b28f3c29189db5c89cce4b73e1c93d86164f66ef88637}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Skill tool

## Definition — verbatim
> "Dependencies are expressed as an explicit instruction to **call the Skill tool** with the named skill" — .agents/invocation.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 16 | defined here | Establishes the rule that skill dependencies must be expressed as instructions to call the Skill tool. |
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Standardizes repository terminology around calling the Skill tool. |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Notes convention updates regarding Skill tool invocation. |
| skills/engineering/grill-with-docs/SKILL.md | 7 | used here | Instructs the model to call the Skill tool with grilling. |
| skills/in-progress/claude-handoff/SKILL.md | 12 | used here | References calling the Skill tool for handoff operations. |
| skills/productivity/grill-me/SKILL.md | 7 | used here | Instructs the model to call the Skill tool with grilling. |
| skills/productivity/handoff/SKILL.md | 10 | used here | References calling the Skill tool with target handoff workflows. |

## Consumes
A target model-invoked skill name.

## Produces
Programmatic execution of the designated skill within the current session.

## When applied
When one skill has an operative step requiring the capabilities of another skill.

## Sub-concepts
skill-invocation

## Part of
invocation

## Implementation status
clean

## Design notes
In matt's architecture, the Skill tool represents the programmatic harness mechanism used by agents to invoke other skills. Rather than relying on fragile slash-command mentions in text or cross-directory file references, operative dependencies explicitly instruct the model to call the Skill tool with the target skill's name, achieving high invocation reliability across different agent platforms.
