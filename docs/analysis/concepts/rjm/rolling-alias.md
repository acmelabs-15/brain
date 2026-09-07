---
package: rjm
name: rolling alias
slug: rolling-alias
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rolling alias

## Definition — verbatim
> "use a bare rolling alias priced below" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 20 | defined here | Defined in ADR-040 amendment as the only permissible model pin format under ADR-080 when priced below default. |
| .claude/skills/CLAUDE.md | 55 | used here | Specified in skill authoring instructions as the sole permitted model configuration exception when accompanied by a rationale. |

## Consumes
Platform model tier mappings (such as `model_tiers` in `templates/platforms/copilot-cli.yaml`).

## Produces
Dynamic resolution to the provider's active model release for a tier without hardcoded version dates.

## When applied
When a skill performs simple or mechanical work and can be routed to a cheaper model family (e.g. `haiku`) rather than inheriting the harness default.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A rolling alias (such as `haiku`, `sonnet`, or `opus`) identifies a model capability tier rather than a dated snapshot (such as `claude-3-5-sonnet-20241022`). In rjm's architecture, rolling aliases allow skills to benefit automatically from upstream model updates while enabling deterministic governance rules that check whether an alias resolves to a pricing tier below the harness default.
