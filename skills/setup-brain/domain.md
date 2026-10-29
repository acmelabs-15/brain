# Domain docs

How brain's skills read this repo's domain documentation. Layout: {{layout}}.

## Before you name a domain concept, read these

- `GLOSSARY.md` at the repo root: the glossary, one term per entry, with the words to avoid.
- `GLOSSARY-MAP.md` at the repo root, when it exists: the repo has several contexts, and the map points to the `GLOSSARY.md` for each. Read the one your topic belongs to.
- `docs/decisions/`: the decision records (ADRs) that touch the area you work in. In a multi-context repo, also `src/<context>/docs/decisions/`. A repo that already keeps its ADRs in another folder keeps using that folder.

If a file is absent, proceed without it and do not suggest creating it. The domain-modeling skill creates `GLOSSARY.md` and the first ADR lazily, when a term or a decision is resolved.

A repo with no `GLOSSARY.md` but an old `CONTEXT.md` (or `CONTEXT-MAP.md`) keeps its glossary there: read that file the same way, and tell the user once: "This repo still uses `CONTEXT.md`; run setup-brain to rename it to `GLOSSARY.md`."

## Use the glossary's words

When your output names a domain concept, in a task title, a spec, a test name or a reply, use the term as `GLOSSARY.md` defines it. A word the glossary marks _Avoid_ stays out.

A concept the glossary lacks is a signal: either you are inventing a word the project does not use, so reconsider, or there is a real gap, so note it for the domain-modeling skill.

## Flag a decision you contradict

If your output contradicts an ADR, say so where the reader will see it, and say why it is worth reopening. Do not override it in silence.
