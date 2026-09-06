---
package: addy
name: TOOL_NAME
slug: tool-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TOOL_NAME

## Definition — verbatim
(used, not defined)
> "TOOL_NAME=$(printf '%s' \"$INPUT\" | jq -r '.tool_name // empty' 2>/dev/null) || {" — hooks/simplify-ignore.sh:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore.sh | 26 | defined here | Shell variable parsed from stdin extracting the Claude Code tool name |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Shell script variable capturing the Claude Code hook tool execution identifier rather than an engineering lifecycle concept.
