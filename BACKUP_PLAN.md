# Rencana Backup dan Recovery Data

Project ini menggunakan Supabase sebagai basis data. Berikut rencana backup dan pemulihan data:

## Backup
- Gunakan fitur [PITR (Point-in-time Recovery)](https://supabase.com/docs/guides/platform/backups) atau jadwal backup harian dari Supabase.
- Simpan salinan cadangan ke lokasi terpisah (mis. storage eksternal atau bucket S3) untuk redundansi.
- Lakukan backup manual sebelum melakukan migrasi skema besar.

## Recovery
- Uji proses restore secara berkala pada lingkungan pengujian untuk memastikan cadangan valid.
- Dokumentasikan langkah pemulihan sehingga tim dapat melakukan restore dengan cepat saat terjadi kegagalan.
- Gunakan cadangan terbaru dan, bila diperlukan, manfaatkan PITR untuk memulihkan hingga waktu tertentu.

## Monitoring
- Pantau proses backup dan kirim notifikasi bila backup gagal.
- Catat waktu dan lokasi setiap backup untuk audit.
