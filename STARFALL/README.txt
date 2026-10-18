STARFALL: INFINITE ASSAULT — SPCK EDITION
========================================

Offline-friendly HTML5 canvas space shooter. Open the Starfall_Arcade folder as a project in SPCK Editor and preview index.html.

FEATURES
- 20 ships in five rarity tiers: 3 Common, 4 Normal, 5 Special, 5 Epic, 3 Legendary.
- Individual ship stats, weapon styles, colors and abilities.
- Pulse, shotgun spread, piercing laser, homing missiles, explosive shells and ultimate starfall attacks.
- Boss encounters every 10 rounds with three adaptive phases, aimed shots, radial volleys and a boss health bar.
- Dash and ship skill touch buttons, keyboard controls, drag movement and auto-fire.
- Collectible coins, health, shield, speed, rapid-fire, magnet and ultimate drops.
- Hangar economy, ship unlocks, permanent gun/speed/fire-rate/weapon-core upgrades.
- Daily-style missions and achievements with local coin rewards.
- Synthesized sound effects and saved sound settings.
- Local progress, backup export/import and background selection.

CONTROLS
- Drag inside the game canvas to move.
- Use LEFT/RIGHT to steer, FIRE for manual firing, DASH to evade and SKILL to trigger the equipped ship's ability.
- Auto-fire is enabled by default and can be changed in Settings.
- Bosses appear at rounds 10, 20, 30, etc.

NOTES
- The game uses localStorage, so progress is stored in the browser/device used for preview.
- No network connection or external library is required.
- If preview state appears old after replacing files, reload the SPCK preview.



UPGRADE NOTES (2026-10-14)
- Enemy bullets now skip enemies whose full hitbox is outside the playfield; off-screen spawned enemies cannot be damaged/rewarded until their hitbox enters the play area.
- Added a touch/mouse Pointer Events movement joystick with a dead zone, circular travel limit, and 360-degree directional movement. Existing canvas drag, keyboard, fire, and skill controls remain.
- Added a dash cooldown (2.2 seconds), temporary invulnerability, and cooldown display.
- Skill button displays the equipped ship's named ability and applies a 15–30 second rarity-based cooldown.
- HUD label changed from HULL to HEALTH.
- Existing 20-ship registry retained; save migration deduplicates owned ship IDs and adds audio-volume fields.
- Added music/SFX volume settings controls and mobile safe-area/control styling.

LIMITATIONS
- Daily missions and existing achievements remain implemented; full weekly quest claim UI and new permanent achievement catalog were not completed in this patch.
- Audio uses the project's existing synthesized Web Audio tones/loop, not separate music tracks for every game state. Music/SFX sliders are saved, but live mix behavior and browser-specific audio resumption have not been device-tested.
- Effects/ship art were not comprehensively redesigned; no new external assets or dependencies were added.
- Test coverage was static/syntax-level only; actual mobile gameplay, touch behavior, persistence across browser restarts, balancing, and all collision scenarios still require playtesting in Spck/browser.


USER ASSET INTEGRATION (2026-10-14)
- Added the exact supplied transparent ship PNGs under assets/user-assets/Ships/.
- Hangar ship cards, selected ship preview, home hero ship, and in-run player ship now use the supplied PNG artwork.
- Enemy ships also use supplied ship PNGs from the Common, Normal, and Special tiers.
- The supplied Projectiles/, Effects/, and Original_Sheets/ folders are included intact under assets/user-assets/ for continued integration.
- Existing SVGs and gameplay systems were retained as fallback/other project assets.
- Projectiles/effect panels are included but are not yet individually animated or connected to each ship's weapon ability; these source panels contain grouped artwork and need sprite-by-sprite extraction before safe in-game use.


ASSET FIX UPDATE:
- Added clean ship sprite copies with baked-in top name strips cropped away.
- Increased player/enemy ship render size.
- Legendary ships now use matching cropped legendary projectile artwork during firing.
- Moved touch joystick to the right side for mobile play.


ADJUSTMENTS (2026-10-15)
- Replaced ship artwork with the newly supplied artwork, cleaned the filenames, and updated all ship asset paths/conditionals to stable ship IDs and rarity tiers.
- Removed legacy duplicate asset folders from the active project. The active artwork is in assets/user-assets/ships, backgrounds in assets/user-assets/backgrounds, and bullet/shield effects in assets/user-assets/effects.
- Added distinct procedural synthesized lobby and in-game music loops using the Web Audio API. Music follows the music-volume slider and respects the sound toggle; browser audio begins after the first user interaction.
- Increased regular enemy health to 2 hits at the opening round, scaling gently as rounds increase.
- Common, Normal, and Special ships use code-drawn projectile designs. Epic and Legendary ships use their supplied projectile artwork, with code-drawn fallback if an image fails to load.


NAVIGATION / ACCOUNT PATCH (2026-10-15)
- Main Menu and Lobby are now separate screens; Deploy Ship and hangar options are only in Lobby.
- Added saved-account selector and explicit Load Selected Account action.
- First launch returns to Main Menu instead of automatically opening a previously active profile.
- Added Lobby logout/back button and changed the run result navigation to Back to Lobby.
- Account records remain local to this browser/device. Admin Tester is local-only and is not secure authentication.
- SPCK mobile CSS adjustments keep the Main Menu uncluttered and improve account fields and buttons.
- Please playtest account switching and all navigation in SPCK Preview; localStorage availability depends on the preview/browser context.


STARFALL v2 ASSET + COMBAT PATCH (2026-10-17)
- Replaced active ship and background files with the supplied Asset.zip artwork while preserving stable asset paths and fallback rendering.
- Added supplied normal-minion and five boss sprite assets and connected them to in-game enemy/boss rendering.
- Player shots and enemy/boss shots now carry explicit team/source tags; they use separate collections and distinct projectile silhouettes. Player bullets damage enemies/bosses only; enemy bullets damage the player only.
- The supplied Asset.zip contains separate music tracks; existing synthesized music is retained to avoid unexpectedly changing the saved sound settings.
- Open STARFALL/index.html in SPCK Editor or a modern browser.


UI REFERENCE PATCH (2026-10-18)
- Main menu now follows the supplied STARFALL reference: starfield navy background, logo artwork, PLAY, SETTINGS, and EXIT.
- PLAY opens the account selector when no account is active, or the lobby for an active account.
- Main-menu SETTINGS works before login and retains the existing settings functionality.
- Lobby styling now emphasizes the centered brand, top profile/audio/settings controls, rank/EXP strip, selected ship showcase, deploy action, and three navigation cards.
- Existing game systems, account persistence, ship assets, upgrades, and gameplay controls were retained.
