jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore app/android.keystore dist/capacitor/android/apk/release/app-release-unsigned.apk -storepass T@k3K3ys0re -keypass T@k3K3ys0re android-app-key

zipalign -v 4 dist/capacitor/android/apk/release/app-release-unsigned.apk dist/capacitor/android/apk/release/app-release.apk