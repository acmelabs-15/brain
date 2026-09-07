---
package: rjm
name: orphan-ref-ignore
slug: orphan-ref-ignore
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# orphan-ref-ignore

## Definition — verbatim
> "| `orphan-ref-ignore` HTML comment | line directive | Mutes orphan-reference findings for that one line |" — .claude/skills/ai-agents-config-catalog/SKILL.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 82 | defined here | Cataloged as a line directive HTML comment that mutes orphan-reference findings for a single line. |
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 51 | used here | Documented under orphan references suppression as a line-scope HTML-comment directive to be used sparingly. |

## Consumes
A specific line in markdown documentation or comments containing a reference that trips the orphan reference validator.

## Produces
Line-level suppression of orphan reference lint warnings.

## When applied
Applied as an HTML comment (<!-- orphan-ref-ignore -->) to suppress a false-positive orphan reference finding on a single line.

## Sub-concepts
none

## Part of
orphan-references

## Implementation status
defects: unfailable-gate, other

## Design notes
A granular line-level directive used to suppress false positives from the orphan reference scanner in rjm. Because it is formatted as an HTML comment on the exact line needing suppression, it remains easily searchable across the repository and subject to strict peer review to prevent masking real broken references.
