---
package: rjm
name: fail-open shim
slug: fail-open-shim
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# fail-open shim

## Definition — verbatim
> "in-script fail-open shim never executed." — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 20 | defined here | Analyzed in Incident 1 to show that in-script protection fails when the launcher itself cannot resolve the script path. |

## Consumes
Hook invocation events and runtime script exceptions.

## Produces
Graceful non-blocking fallback (exit code 0) preventing non-critical hook failures from aborting developer commands.

## When applied
Implemented inside individual hook scripts to wrap script logic in exception-handling blocks.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
A `fail-open shim` is an in-script safety wrapper designed to return exit code 0 when an internal hook script fails, preventing hook errors from halting user commands. The #2205 incident demonstrated its architectural limitation: when launcher paths are broken, Python exits before script execution, proving that fail-open protection cannot substitute for launcher validation.
