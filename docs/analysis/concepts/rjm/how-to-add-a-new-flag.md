---
package: rjm
name: How to Add a New Flag
slug: how-to-add-a-new-flag
kind: checklist
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

# How to Add a New Flag

## Definition — verbatim
> "## How to Add a New Flag" — .claude/skills/ai-agents-config-catalog/SKILL.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 147 | defined here | Section heading establishing the mandatory governance checklist for introducing new configuration flags or bypass markers. |

## Consumes
Proposed configuration flags, environment variables, or escape hatches.

## Produces
Compliant, scoped, and tested flag implementations with documented failure modes and catalog provenance.

## When applied
Whenever an author or developer introduces a new configuration option or bypass marker to the repository.

## Sub-concepts
none

## Part of
config-catalog

## Implementation status
clean

## Design notes
A governance checklist in rjm establishing mandatory standards for adding new configuration flags or escape hatches. It enforces single source of truth definition, narrow scope naming, documented fail-open/closed semantics, observable activation logging, comprehensive positive/negative/edge testing, and catalog documentation to prevent unchecked flag proliferation.
