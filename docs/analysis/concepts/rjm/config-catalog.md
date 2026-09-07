---
package: rjm
name: Config Catalog
slug: config-catalog
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Config Catalog

## Definition — verbatim
> "# AI Agents Config Catalog" — .claude/skills/ai-agents-config-catalog/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 8 | defined here | Section heading defining the comprehensive repository catalog of configuration axes, environment variables, commit markers, frontmatter keys, QA skip verdicts, and escape hatches. |

## Consumes
Repository configuration definitions, environment variable declarations, and escape hatch designs.

## Produces
A centralized reference catalog mapping configuration axes, flags, markers, and escape hatches to their enforcement points and abuse stories.

## When applied
When querying configuration flags, evaluating escape hatches, or adding new repository flags.

## Sub-concepts
escape-hatches, how-to-add-a-new-flag

## Part of
none

## Implementation status
clean

## Design notes
Config Catalog serves as the single source of truth for all repository configuration axes, environment variables, commit markers, frontmatter keys, and QA skip verdicts in rjm. It pairs every escape hatch with its mechanical enforcement point and historical abuse story, preventing undocumented bypasses and drift between declared controls and actual gate behavior.
