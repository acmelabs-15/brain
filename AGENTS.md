# Maintaining Brain

This file guides work on the Brain plugin repository. Root CLAUDE.md imports this file. Consumer startup comes from the installed plugin's host adapter, protocol and router.

## Start here

1. Inspect the branch and working tree. Preserve existing changes and read the user's current handoff before choosing work from older records.
2. Read README.md for the component map, then docs/agents/capabilities.md and docs/agents/domain.md in full. Read the glossary named by domain.md. An absent glossary is valid before the first term is resolved.
3. For saved ideas, specs or task state, read docs/agents/workspace.md and the selected effort's records. Current user scope and a newer handoff take precedence over historical next-step text.
4. Verify Bun against the range in package.json. That declared range is authoritative; the CI version is one tested version within it.

## Ownership

- Files under upstream.lock.json's files key are vendored. Fix them upstream or import a reviewed, pinned upstream correction through the sync configuration. Preserve byte identity and license notices.
- The seeds key records provenance for Brain-owned files. Combined skills, commands and other unlisted files are maintained here.
- Generated files name their sources. Edit plain-talk/PLAIN-TALK.md or protocol/PROTOCOL.md, then run the renderer. The consumer protocol renders into its host delivery files, outside this maintainer file.
- Read docs/maintainers/changes.md before adding, renaming, removing or changing instructions, skills, commands or host behavior. Complete its affected-surface and evaluation checks before declaring the change done.

## Working rules

- Use Bun for shipped TypeScript tools. Tests live beside the source in __tests__ and use bun:test; new tests are named <original-filename>.test.ts.
- Ask through brain:ask-user-question for an unresolved user decision or missing permission. Reuse confirmed requirements. Put the context, evidence, recommendation and cost inside the one question.
- Follow references/brain/commit-contract.md for verified slices, task results, integration and state commits. Stage files by name and keep unrelated work intact.
- Root instruction files serve maintainers. Verify consumer behavior in a separate fixture with its own existing or absent root files.

## Checks and records

package.json owns the available commands. bun run check is the repository check; bun run validate runs the host validators. docs/maintainers/changes.md explains scoped checks, the exact root-CLAUDE warning exception and verification limits. A user-facing change includes a Changeset.

docs/agents/workspace.md owns record locations. Each module has a spec folder with spec.md, tasks/plan.md and tasks/todo.md. The capability map is docs/decisions/DEC-004-capability-map-brain.md; tasks/done/context-scope/ retains its completed historical plan.

<!-- brain:plain-talk:start -->
## Talk plain

Every reply is read once, cold, by a reader who was thinking about something else a moment ago. Write for that reader, always in ASD-STE100 Simplified Technical English.

## Shape of a reply

1. Open with one line that names the subject: what this reply is about and where things stand, before any detail.
2. Give the answer or the outcome.
3. Add only what the reader needs in order to act. Leave the rest out.

## Sentences

Write ASD-STE100 Simplified Technical English:

- One idea per sentence, about 20 words at most.
- Active voice. Simple present tense where the fact is current.
- One word per concept, and the same word every time. Take each domain word from `GLOSSARY.md`, the project's glossary. When `GLOSSARY-MAP.md` exists at the root, the repo has several contexts and the map points to the `GLOSSARY.md` for each. A word the glossary marks _Avoid_ stays out. A concept the glossary lacks is a gap to note for the domain-modeling skill, not a synonym to coin.
- Plain words. A technical term appears only when the reader has to search for it, and it is expanded the first time.

## Structure

- A table for a choice. A list for a sequence or for parallel items. Prose for a single line of argument.
- One or two sentences per bullet.
- Code, commands, paths and error text go in fenced blocks, not inside sentences.
- Headers only past about 300 words, and at most three.

## Before you send

Read the draft as that reader and check:

1. The first line says what this is about.
2. Every paragraph is four sentences or fewer.
3. Parallel items are a list, and a choice is a table.
4. Every term is one the reader already uses.

Where a check fails, re-pitch the draft: give a little context, in ASD-STE100 Simplified Technical English, in the glossary's words. Then check again. The reader's repair for a message that still does not land is the wait-what skill; a message that earns it failed one of these checks.

The sentence rules also apply to the text of a question put to the reader through the host's user-question tool. The layout of that call follows the ask-user-question skill. Load it before you compose the call.
<!-- brain:plain-talk:end -->
