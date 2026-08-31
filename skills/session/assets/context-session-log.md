## The session log (the docs system)

**Session log**:
The `docs/sessions/` files together: the append-only record of every change that reached `main`
and the narrative around it — what a conversation reads to rehydrate.
_Avoid_: ledger, history, changelog (that is the generated one)

**Session**:
A bounded stream of work toward one Goal, recorded in one `docs/sessions/SES-NNN` file; **open**
from the moment it is opened until it is **closed** with its Outcome written. It may span any
number of conversations and may serve a plan (its `Plan:` line).
_Avoid_: conversation (for this), sitting, chat, the newest file (as the definition of current)

**Conversation**:
One agent context or one human sitting. A participant in a session: it joins the open session
whose Goal is its work, or opens one, before its first commit; a conversation that changes nothing
needs none.
_Avoid_: session (for this)

**Open** / **Closed** (session status):
Open — work toward the Goal may still land; the tool appends entries and gates it. Closed — the
Goal is done or abandoned, the Outcome says which; nothing is appended to it again.
_Avoid_: current (as the status word), active, done (for the status), finished

**Join** / **Open** / **Leave** / **Close** (a conversation's moves):
Join — take an open session as yours because you will record entries into it and its Goal is your
work; never a session another conversation owns. Open — start a new session for new work. Leave —
stop for now with the log complete and a handoff written; the session stays open. Close — the
Goal is done: Outcome written, status flipped to closed.
_Avoid_: end (for close), finish, resume (for join), create (for open)

**Plan part**:
One `### Part N` of a plan in `docs/plan/`, with its own status line — `planned`, `in progress
(session SES-NNN)` or `done (session SES-NNN, sha)` — the pointer a new conversation follows from
the plan to the session that holds its story. One session per part.
_Avoid_: phase (as the heading word), step, milestone, ticket

**Handoff**:
The `Open at end` line of an open session: what the next conversation picks up first and what is
unverified, written when a conversation leaves.
_Avoid_: notes, todo, next steps (as the field name)

**Gate**:
`session check`: exit 0 only when every commit on the branch is accounted for and your
session has no placeholder the gate counts. Its exit status is the verdict; nothing is piped after
it.
_Avoid_: check (as the noun), lint, validation

**Entry**:
The block a change worth reading about gets in a session file — Summary, Why, one line per
touched file, Notes — written by `/session entry` right after the commit. The session log holds
value only: a fix-up commit gets no entry and is vouched for by its parent's `Also:` line; a commit with
nothing to record says so itself (`Session-entry: none`) and gets none.
_Avoid_: log entry, note, update, record (as the noun), commit (as the unit — a commit is git's)

**Record** (verb):
To write the entry and update everything the commit made stale, in the same step; the practice
the docs system depends on.
_Avoid_: update, log, document (as the verb for this)

