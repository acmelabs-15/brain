# Capability Map: brain

Approved by Peter on 2026-09-19. Module ids are fixed. Each module has its own
spec, `SPEC-<module id>.md`, written and built in the order below.

| Module id | Responsibility | Depends on |
|---|---|---|
| upstream-sync | The SHA pin file, the Bun sync script, the drift check and the provenance record for agent-skills, mattpocock/skills and ask-user-question | — |
| host-manifests | The four host manifests, one version script, one install page per host | — |
| plain-talk | One source text rendered into the Claude output style, the Gemini context file, the Antigravity rule and the AGENTS.md block, paired with wait-what | host-manifests |
| setup | brain's own per-repo setup skill: sets the CONTEXT.md layout and the tracker; once per machine, the block in the Codex global AGENTS.md | plain-talk |
| lifecycle | brain's own stage skills that compose addy's skills, matt's improvements, domain-modeling and ask-user-question | upstream-sync, setup |
| evals | Routing and plain-talk evals in CI | plain-talk, lifecycle |
| question | Retired 2026-10-28 by DEC-002: the skill is upstream's text, with brain's metadata and one paragraph fixed. Was: the rewrite of ask-user-question from the 24 artifact files in Peter's repo: a short description, evidence per rule, honest host limits, brain's rules folded in (added 2026-09-19) | — |

| workspace | Added 2026-10-29. One workspace layout (`docs/decisions`, `docs/research`, `docs/ideas`, `docs/specs`), the `brain` CLI (new-doc, check, status), the stateful interview-me that absorbs wayfinder, the always-on protocol, setup-brain's install and migrate modes, and the `CONTEXT.md` to `GLOSSARY.md` rename | upstream-sync, plain-talk, setup, lifecycle |
| source-cache | Added 2026-10-29. A hardened Bun port of agent-skills' sdd-cache hooks, wired by the plugin on Claude Code | — |

Build order: upstream-sync and host-manifests → plain-talk → setup → lifecycle and question, either order → evals. Then workspace; source-cache any time, on its own branch.

Sources: `docs/intent/brain-wrap.md`, `docs/research/RES-001-wrap-layout.md`.
