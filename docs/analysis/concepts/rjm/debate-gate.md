---
package: rjm
name: debate gate
slug: debate-gate
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# debate gate

## Definition — verbatim
> "edits fire the `adr-review` debate gate. A negative result is a result: record" — .claude/skills/ai-agents-research-frontier/SKILL.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 76 | used here | Review gate requiring structured debate and ADR review before adopting architecture changes. |

## Consumes
Proposed Architectural Decision Record modifications or new governance rules.

## Produces
Recorded review critique, contrarian feedback, and formal debate record.

## When applied
Fired whenever an Architectural Decision Record is created or edited.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A mandatory governance gate ensuring proposed architectural changes undergo critical debate before approval. Triggered automatically on ADR modifications, it guarantees conflicting perspectives, trade-offs, and negative experiment results are explicitly evaluated rather than bypassed.
