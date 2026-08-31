Yes — but password reset is one of those features where the happy path is easy and the details are where accounts get taken over, so I want to pin down the security-critical decisions before I write code rather than after.

Here's the shape I'd build, with the choices I'd make by default:

**Token design**
- Generate 32 bytes from a CSPRNG, base64url-encode it — that's the value in the emailed link.
- Store only a SHA-256 hash of the token in the DB, never the raw value. A leaked database dump then doesn't hand over live reset links.
- Look the token up by hash and compare in constant time.

**Table**: `password_reset_tokens` — `token_hash` (unique), `user_id`, `expires_at`, `used_at`, `created_at`, plus the requesting IP for rate-limit forensics.

**Lifecycle**
- Expiry: one hour, as you said, enforced server-side against `expires_at` — never trusted from anything in the link.
- Single use: mark `used_at` on redemption, inside the same transaction as the password update, so a replayed link can't set the password twice.
- Invalidate all outstanding tokens for that user when any one is redeemed, and when the password changes by any other route.

**The request endpoint**
- Always return the same "if that address has an account, we've sent a link" response whether or not the email exists. Otherwise the endpoint is a free account-enumeration oracle.
- Rate limit per email and per IP — reset mail is a spam-amplification vector.
- Don't put the raw token anywhere in logs, analytics, or error reports.

**The redemption endpoint**
- Validate the new password against your existing password policy, hash with Argon2id (or bcrypt if that's what the rest of the codebase already uses — consistency matters more than the choice here).
- Invalidate every existing session for that user, since the whole point may be that someone else has one.
- Send a "your password was changed" notification to the old address — that's how a user finds out about a takeover.
- Take the token from a POST body, not a GET query string, on the final submit, so it doesn't end up in referrer headers or browser history. Standard pattern: the link opens a page, the page posts the token with the new password.

Three things I need from you before I start, because I'd otherwise be guessing:

1. **Where does this live?** Framework, ORM/migration tool, and whether there's an existing auth system I'm extending or this is greenfield. If you already have session management and a password hasher, I use those rather than introducing new ones.
2. **How do you send email?** An existing transactional provider (SES, Postmark, SendGrid, Resend), or do I need to wire that up too? And is it fire-and-forget or does it go through a job queue — sending inline makes the request endpoint's timing a weak enumeration signal.
3. **What's your base URL / link routing** for the emailed link, and do you have an existing frontend route pattern I should match?

Point me at the repo and answer those three and I'll build it — migration, both endpoints, the email template, and tests covering expiry, replay, wrong-token, and session invalidation. If you'd rather I just start on a reasonable default stack and you correct me, say so and I'll pick sensible defaults for all three.
