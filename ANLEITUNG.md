# MURMUR – installierbare Web-App (iPhone, Android, Desktop)

Dies ist MURMUR 1.3 mit einer PWA-Hülle (Version 1.4). Spielregeln und Rundenlängen sind unverändert.

## Veröffentlichung über GitHub Pages (kostenlos)

1. Melde dich bei https://github.com/ an (oder erstelle kostenlos einen Account).
2. Erstelle über **New repository** ein öffentliches Repository, z. B. `murmur-spiel`.
3. Entpacke diese ZIP-Datei und lade **alle enthaltenen Dateien samt `icons`-Ordner** in das Hauptverzeichnis des Repositories hoch. Die Datei `index.html` muss direkt im Hauptverzeichnis liegen, NICHT in `MURMUR_WebApp/`.
   Auf GitHub: **Add file → Upload files → Commit changes**.
4. Öffne **Settings → Pages**. Unter **Build and deployment** wähle **Deploy from a branch**, Branch `main`, Ordner `/(root)`, dann **Save**.
5. Nach der Veröffentlichung ist die Adresse typischerweise `https://DEINNAME.github.io/murmur-spiel/`. Den tatsächlichen Link findest du unter **Settings → Pages → Visit site**.
6. Teile einfach diesen Link: iPhone/Android/PC können sofort im Browser spielen, ohne etwas zu installieren.

## Wie auf dem Homescreen installieren?

- iPhone: URL in Safari öffnen → Teilen → **Zu Home-Bildschirm hinzufügen** → optional **Als Web-App öffnen**.
- Android: URL in Chrome öffnen → ⋮ → **App installieren** bzw. **Zum Startbildschirm hinzufügen**.

## Offline und Spielstände

Nach dem ersten erfolgreichen Aufruf über HTTPS kann die Web-App ihre Dateien für spätere Offline-Nutzung speichern. Ein erstmaliger Aufruf braucht Internet. Manche private Browsermodi/Browsereinstellungen verhindern Caching.
Freigeschalteter Seelenpartner und Highscores werden **nur lokal auf dem jeweiligen Gerät/Browser** gespeichert, nicht zwischen verschiedenen Geräten oder Mitspielenden synchronisiert. Beim Löschen der Browserdaten können sie verloren gehen. Auf iOS kann eine zum Home-Bildschirm installierte Web-App einen anderen Datenspeicher als Safari verwenden.

## Updaten

Neue `index.html` und zugehörige Dateien hochladen. Bei Änderungen am Offline-Paket sollte in `sw.js` der Wert `CACHE_VERSION` erhöht werden, damit vorhandene Installationen aktualisiert werden können. Gegebenenfalls App/Tab neu öffnen.

## Lokal testen

Eine PWA kann nicht per `file://` als installierbare Offline-Web-App laufen. Für einen Test am Computer im entpackten Ordner `python3 -m http.server 8000` ausführen und `http://localhost:8000` öffnen. Ohne Server lässt sich das Spiel weiterhin per Doppelklick auf `index.html` spielen, aber ohne Installation/Offline-Cache.

## Inhalt

- `index.html` – vollständiges Spiel mit vier Modi
- `manifest.webmanifest` – Installationsdaten
- `sw.js` – Offline-Speicherung
- `icons/` – App-Symbole für iOS und Android
- `.nojekyll` – GitHub Pages ohne zusätzliche Verarbeitung
