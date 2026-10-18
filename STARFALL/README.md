# STARFALL

Offline-friendly HTML5 canvas space shooter packaged for Android with Capacitor. The Android app name is **STARFALL**. `STARFALL_LOGO.png` is used to generate the Android launcher icon; `assets/STARFALL_LOGO_TRANSPARENT.png` remains the in-game main-menu logo. The original game files remain in `index.html`, `css/`, `js/`, and `assets/`.

## Build APK automatically on GitHub

1. Create a **new GitHub repository**.
2. Upload/commit the contents of this project folder (make sure `.github/workflows/build-apk.yml` is included) to the repository's `main` or `master` branch.
3. Open the repository's **Actions** tab. The **Build STARFALL APK** workflow starts automatically after a push. You can also start it manually with **Run workflow**.
4. Open the completed workflow run and download the `STARFALL-debug-apk` artifact. Extract it to get `app-debug.apk`.
5. Transfer `app-debug.apk` to your Android device and install it. Android may ask you to allow installation from that source.

The workflow generates the Android/Capacitor project, generates Android launcher icons from `STARFALL_LOGO.png`, installs dependencies, builds the APK, and uploads it as a downloadable Actions artifact. You do not need Android Studio on your own device to use the GitHub build.

## Build locally

Requirements: Node.js 20, Java 17, Android SDK, and Android build tools.

```bash
npm install
npm run build:web
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

On Windows, use `gradlew.bat assembleDebug` instead of `./gradlew assembleDebug`.

## Notes

- The GitHub workflow produces a **debug APK** for testing/sideloading, not a Play Store-signed release.
- The `android/` and `www/` folders are generated during the workflow and intentionally excluded from Git.
- Game progress uses local storage and stays on the device/app webview where it was created; browser progress may not automatically transfer to the APK.

## Latest UI updates

- Cadet rank has a smaller, quieter display in the lobby.
- Galactic Commander has an animated lightning treatment.
- The Deploy Ship button and lobby layout are more compact on shorter screens.
- Achievement category panels close when leaving the Achievements screen; reopening starts with the panels collapsed after the first visit.
- `STARFALL_LOGO.png` is the Android app icon source; `assets/STARFALL_LOGO_TRANSPARENT.png` remains the in-game main-menu logo.

## Latest upgrade and achievement updates
- Added **Power-Up Duration** as a permanent upgrade with 4 levels. Each level adds +1 second to Shield (base 4s), Speed Boost (base 5s), and Rapid Fire (base 6s). Costs: 180, 350, 650, and 1,000 coins; reset returns 70% of spent coins.
- Achievement difficulty colors are based on reward tier: grey **Easy** (up to 100 coins), green **Medium** (101–1,000 coins), and red **Hard** (over 1,000 coins). The same tier colors and labels appear on featured achievements in the player profile.


## Latest gameplay and profile updates
- Enemy HP now scales at 10% in rounds 1–3, 30% in rounds 4–6, 50% in rounds 7–9, 75% in rounds 10–15, and 100% from round 16 onward.
- Lobby music starts when the lobby screen is entered, including after leaving a run or returning from the results screen (subject to Android/WebView audio playback rules).
- Hangar stats show computed totals (ATK, Defense, Speed, and Fire Rate) instead of separate base and bonus values.
- Achievement difficulty is unified as EXTREME and uses gold styling in achievements and profile displays.

## Latest updates (v6)
- Achievement difficulty now uses three tiers only: EASY (green), NORMAL (orange), and HARD (red), including achievement cards and profile featured-achievement badges.
- Permanent ship upgrades remain stored by each ship's existing unique ID (`astra`, `viper`, etc.). Upgrading one equipped ship changes only that ship's saved gun, speed, fire-rate, weapon-core, and defense stats. The hangar displays computed stats for the ship currently being previewed, using that ship's own upgrade record.
- Gun upgrade levels add +10 displayed damage per level; weapon-core levels also add +10 displayed damage per level. Combat damage uses the matching equipped ship's saved upgrade values.


## Enemy logic update (2026-10-18)
- Weapon Spread changes projectile formation only and does not add ATK. Weapon Core is the damage upgrade.
- Enemy HP is calculated from original/base HP per round: 10% (rounds 1–2), 30% (3–5), 60% (6–8), and 100% (round 9+).
- Seven minion firing patterns are supported; minions 1–4 use fixed directions and minions 5–7 aim at the player when a valid position exists.
- Music playback errors do not prevent deployment. Test Deploy Ship and each minion type on-device before release.
