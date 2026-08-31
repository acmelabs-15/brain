An intermittent `cannot read property 'id' of undefined` at roughly one load in five is almost always a timing problem rather than a logic problem — the code reads `something.id` before `something` has arrived. But "almost always" is not a diagnosis, and the fix that follows from a guess is the fix that has to be made twice. So I'm going to reproduce it and find the actual failing line before I change anything.

Here's my plan:

1. **Get a reliable reproduction first.** One-in-five is frequent enough to catch. I'll load the login page repeatedly with the console captured, and hold the failure until I can trigger it deliberately rather than by waiting for it. Throttling the network is usually what turns a one-in-five into a one-in-one, because it widens whatever window the bug is losing.
2. **Read the real stack trace.** The message alone doesn't say which object is undefined. I want the file, the line, and the value at the moment it blows up — from a source-mapped trace if the build is minified, and from the actual failing frame, not from where the error surfaced.
3. **Confirm the mechanism before fixing.** Once I have a candidate, I'll prove it: make the failure happen on demand by forcing the suspected ordering, and confirm the "good" loads take the other path. That's what separates a root cause from a plausible story.
4. **Fix at the root, not at the symptom.** An optional-chain at the crash site would make the error go away while leaving the page rendering in a half-initialised state — quietly broken instead of loudly broken. The fix should be the ordering or the missing guard on the data contract itself, with the component handling the not-yet-loaded case honestly.
5. **Lock it in with a test.** A regression test that fails on the current code and passes after the fix. Without that, an intermittent bug can't be shown to be gone — not seeing it for ten loads proves nothing.

Two things that would speed this up considerably if you have them: the full stack trace from the browser console (not just the message), and whether this started after a particular deploy. If you don't, no problem — I'll get the trace myself from the reproduction.

Want me to start on the reproduction now?
