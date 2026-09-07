---
package: matt
name: mapping
slug: mapping
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mapping

## Definition — verbatim
> "docs/agents/triage-labels.md</code> is a <em class="ah-prose-em">mapping</em>: it tells <code class="ah-code-inline">/triage</code> which strings in your tracker correspond to the five canonical roles." — external/setup-matt-pocock-skills.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/domain-modeling.md | 52 | used here | Notes that continuous vocabulary enforcement operates underneath triage, grilling, and mapping workflows. |
| external/setup-matt-pocock-skills.md | 50 | defined here | Defines docs/agents/triage-labels.md as a mapping from issue tracker label strings to canonical skill roles. |

## Consumes
Issue tracker label vocabulary and project repository configuration.

## Produces
A configured mapping file (docs/agents/triage-labels.md) translating tracker-specific label strings into canonical skill roles.

## When applied
During /setup-matt-pocock-skills when configuring repository integration with issue tracking systems.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: orphan, doc-drift

## Design notes
A mapping in Matt's package connects idiosyncratic issue tracker labels to the system's five canonical triage roles (bug, feature, task, chore, debt). Rather than forcing teams to adopt Matt's exact naming convention or automating label creation via CLI tools, the mapping file acts as an explicit translation layer that lets the skills work with existing repositories without intrusive re-labeling.
