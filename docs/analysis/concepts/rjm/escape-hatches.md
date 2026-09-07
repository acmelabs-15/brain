---
package: rjm
name: escape hatches
slug: escape-hatches
kind: pattern
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

# escape hatches

## Definition — verbatim
> "Catalog of every configuration axis in this repo, env vars, commit markers, frontmatter keys, QA skip verdicts, and escape hatches, each with its enforcement point and abuse story, plus the checklist for adding a new flag safely." — .claude/skills/ai-agents-config-catalog/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 3 | defined here | Frontmatter description citing escape hatches as a core cataloged entity paired with enforcement points and abuse stories. |

## Consumes
Gate definitions that may produce false positives or encounter infrastructure blocks.

## Produces
Explicit, observable, and scoped bypass mechanisms accompanied by compensating guards.

## When applied
When a quality gate misfires or infrastructure fails, requiring emergency bypass with documented justification.

## Sub-concepts
none

## Part of
config-catalog

## Implementation status
clean

## Design notes
Escape hatches in rjm are controlled bypass mechanisms built to handle legitimate gate misfires without incentivizing workarounds. Under the house rule that escape hatches get teeth or get abused, every valid escape hatch must be narrowly scoped, observable in stdout/stderr, and backed by a documented abuse story or compensating control.
