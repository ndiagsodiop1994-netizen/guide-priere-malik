# GitHub Actions — build automatique de l'APK Android

Deux workflows :

| Fichier | Quand il s'exécute | Sortie |
|---|---|---|
| `android.yml` | À chaque push / PR / manuellement | APK **debug** non signé (artifact GitHub) |
| `android-release.yml` | Push d'un tag `vX.Y.Z` ou manuel | APK + AAB **release signés** + Release GitHub |

## Utilisation rapide (debug)

1. Pousse ce dossier sur GitHub :
   ```bash
   cd "maliki-prayer-jurisprudence-guide (1)"
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:<ton-user>/<ton-repo>.git
   git push -u origin main
   ```

2. Onglet **Actions** sur GitHub → workflow **Build Android APK** → tu verras le run automatique.

3. Une fois terminé (~5 min) : clique sur le run → section **Artifacts** en bas → télécharge `priere-malikite-debug-apk` (zip contenant l'APK).

4. Décompresse, copie l'APK sur ton téléphone Android, et installe-le (autorise les sources inconnues).

## Pour publier (release signé)

1. Génère un keystore localement (une seule fois, à conserver précieusement) :
   ```bash
   keytool -genkey -v -keystore release.keystore \
     -keyalg RSA -keysize 2048 -validity 10000 \
     -alias priere-malikite
   ```
   Note bien : mot de passe keystore + alias + mot de passe clé.

2. Encode-le en base64 :
   ```bash
   base64 -i release.keystore | pbcopy   # macOS
   # ou : base64 -w 0 release.keystore   # Linux
   ```

3. Sur GitHub → **Settings → Secrets and variables → Actions → New repository secret**, crée :
   - `ANDROID_KEYSTORE_BASE64` (la valeur copiée)
   - `ANDROID_KEYSTORE_PASSWORD`
   - `ANDROID_KEY_ALIAS` (ex : `priere-malikite`)
   - `ANDROID_KEY_PASSWORD`

4. Pousse un tag pour déclencher la release :
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

5. La Release GitHub apparaît automatiquement avec l'APK et l'AAB attachés. L'AAB (`.aab`) est ce que tu téléverses sur Google Play.

## Déclenchement manuel

Onglet **Actions** → choisis le workflow → bouton **Run workflow** → sélectionne la branche.
