# KARAOKE PRO — Sing. Search. Queue. Enjoy.
v1.0.0 core: realtime multi-room karaoke (TV display + phone remote), song-code/title/artist search, singer queue, synced lyrics.

## Run
    npm install && npm start      # http://localhost:3000
    docker compose up -d
    npm test

- TV: `/display/ROOM001` (click once to start) · Phone: `/remote/ROOM001` (same Wi‑Fi, use the server's LAN IP)
- Songs: 20 DEMO songs (lyrics-only, timed playback). No copyrighted media is bundled.
- Add legal media: drop `K000001.mp4` into `media/videos/` (or `PUT /api/admin/media/K000001` with header `x-admin-token`).
- Add songs: `POST /api/admin/songs` (JSON, header `x-admin-token`). Default token `admin123` is a DEVELOPMENT DEMO value — set `ADMIN_TOKEN` in production.

## Not yet implemented (genuine limitations)
Postgres/Prisma, user accounts/JWT, favorites/history/playlists, admin UI, QR image, PIN, next-song countdown, PWA, CSV/ZIP import, analytics, SongCatalogProvider/StorageProvider abstractions, Playwright tests. Data is JSON-file + in-memory rooms (queues reset on restart).
