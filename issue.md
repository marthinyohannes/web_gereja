# Issue: Inisialisasi Project Backend (Bun + ElysiaJS + Drizzle + MySQL)

## Deskripsi
Buat setup awal (boilerplate) project backend di direktori root ini menggunakan **Bun** sebagai runtime dan package manager, **ElysiaJS** sebagai web framework, serta **Drizzle ORM** dengan database **MySQL**.

---

## Tech Stack & Dependencies
- **Runtime & Package Manager:** Bun
- **Dependencies Utama:**
  - `elysia` (Web Framework)
  - `drizzle-orm` (ORM)
  - `mysql2` (MySQL Driver untuk Drizzle)
- **Dev Dependencies:**
  - `drizzle-kit` (CLI untuk migrasi dan schema management)
  - `typescript` / `@types/bun` (bawaan inisialisasi Bun)

---

## Struktur Folder Target (Gambaran Umum)
```text
.
├── src/
│   ├── db/
│   │   ├── index.ts       # Inisialisasi koneksi MySQL & instance Drizzle
│   │   └── schema.ts      # Definisi tabel/schema Drizzle
│   └── index.ts           # Entry point aplikasi ElysiaJS
├── .env.example           # Template environment variables
├── .gitignore
├── drizzle.config.ts      # Konfigurasi Drizzle Kit
├── package.json
└── tsconfig.json
```

---

## Langkah Implementasi (Task List)

### 1. Inisialisasi Project & Instalasi Package
- Inisialisasi project Bun di folder root saat ini.
- Install dependencies utama (`elysia`, `drizzle-orm`, `mysql2`) dan dev dependency (`drizzle-kit`).

### 2. Konfigurasi Environment & Git
- Buat file `.env` dan `.env.example` yang memuat konfigurasi dasar seperti `PORT` dan `DATABASE_URL` (format koneksi MySQL).
- Pastikan `.gitignore` sudah mencakup `node_modules`, `.env`, dan folder output migrasi/build jika diperlukan.

### 3. Setup Database & Drizzle ORM
- Buat koneksi database di `src/db/index.ts` menggunakan `mysql2/promise` dan hubungkan ke `drizzle-orm/mysql2`.
- Buat contoh schema awal sederhana di `src/db/schema.ts` sebagai baseline.
- Buat file `drizzle.config.ts` di root project yang mengarah ke `src/db/schema.ts` dengan dialect `mysql` dan membaca `DATABASE_URL` dari environment.

### 4. Setup Server ElysiaJS
- Buat server utama di `src/index.ts` menggunakan ElysiaJS.
- Buat endpoint dasar (misalnya `GET /` atau `GET /health`) yang mengembalikan status bahwa server berjalan normal.

### 5. Konfigurasi Scripts di `package.json`
- Tambahkan script untuk menjalankan mode development dengan watch mode Bun (`dev`).
- Tambahkan script helper untuk Drizzle Kit (seperti `db:generate`, `db:push` atau `db:migrate`, dan `db:studio`).

---

## Definition of Done (Kriteria Selesai)
- [ ] Dependency ter-install seluruhnya menggunakan Bun (`bun.lock` / `bun.lockb` terbentuk).
- [ ] Struktur folder rapi sesuai gambaran umum.
- [ ] Server ElysiaJS dapat dijalankan menggunakan `bun run dev` dan merespons request pada endpoint dasar.
- [ ] Konfigurasi Drizzle (`drizzle.config.ts` dan `src/db/*`) bebas dari error TypeScript dan siap menjalankan perintah `drizzle-kit`.

