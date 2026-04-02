import { useState } from "react";
const STUDENT = "Ahmed Hilmi";
const P = {
  p1:`Ayşe köyde büyükannesiyle yazları geçirirdi. Büyükannesinin bahçesinde domates, biber, patlıcan yetişirdi. Her sabah birlikte bahçeye iner, bitkileri sularlardı. Ayşe en çok domatesleri severdi çünkü onları büyükannesinin elleriyle toplamak ayrı bir zevkti. Bir gün Ayşe merak edip sordu: "Büyükanneciğim, bu domatesler neden bu kadar lezzetli?" Büyükanné gülerek, "Emekle ve sevgiyle yetiştirildiği için." dedi.`,
  p2:`Arılar doğanın en çalışkan canlılarından biridir. Bir işçi arı ömrü boyunca yalnızca yarım çay kaşığı bal üretebilir. Bir kilogram bal için yaklaşık dört milyon çiçek ziyareti gerekir. Arılar yalnızca bal üretmez; çiçekleri tozlaştırarak bitkilerin üremesine de yardımcı olur. Bilim insanları, arılar olmadan pek çok meyve ve sebzenin yetişemeyeceğini söylemektedir. Son yıllarda tarım ilaçları ve iklim değişikliği nedeniyle arı nüfusu tehlike altına girmiştir.`,
  p3:`Mert fırtınalı bir gecede teknesiyle denizde mahsur kalmıştı. Dalgalar giderek büyüyor, tekne sallanıyordu. Tam umudu kesmek üzereyken kıyıdan bir fener ışığı görünce doğrultusunu buldu. Feneri yakan yaşlı balıkçı Hasan o gece pek çok gemiciyi kurtarmıştı. Sabah olunca Mert kıyıya çıktı ve Hasan'ı bularak teşekkür etti. Hasan gülerek "Karanlıkta bile bir ışık yeter." dedi.`,
  p4:`Kapadokya dünyanın en ilginç coğrafi bölgelerinden biridir. Nevşehir ve Aksaray illerinde yer alan bu bölge peri bacası adı verilen kaya oluşumlarıyla ünlüdür. Bu kaya bacaları milyonlarca yıl önce volkanik patlamalar sonucu oluşan tüf taşının rüzgâr ve yağmur tarafından aşındırılmasıyla meydana gelmiştir. Bölgede ayrıca yer altına oyulmuş binlerce yıllık yerleşim yerleri bulunmaktadır. Turizm açısından büyük önem taşıyan Kapadokya UNESCO Dünya Mirası listesinde yer almaktadır.`,
  p5:`Ormanlar yeryüzünün akciğerleri olarak bilinir. Ağaçlar karbondioksiti emerek oksijen üretir ve havanın temiz kalmasını sağlar. Ancak son yıllarda orman yangınları ve kontrolsüz kesimler nedeniyle orman alanları hızla azalmaktadır. Bilim insanlarına göre her yıl milyonlarca hektar orman yok olmaktadır. Bu durum hem iklim değişikliğini hızlandırmakta hem de pek çok canlı türünün yaşam alanını tehdit etmektedir. Uzmanlar ağaç dikmenin ve ormanları korumanın gelecek nesiller için zorunlu olduğunu vurgulamaktadır.`
};

// ═══════════════════════════════════════════════════════════
// MATEMATİK SORU BANKASI
// ═══════════════════════════════════════════════════════════
const QBM = [

// ════════════════════════════════════════
// 🟢 KOLAY – BİLGİ & ANLAMA (S1–S15)
// ════════════════════════════════════════

// S1 – Bilgi – Sayılar
{id:"m1d1a",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:1,type:"mc",
 question:"Hangi sayı 'beş bin dört yüz otuz iki'yi gösterir?",
 options:["A) 5 342","B) 5 432","C) 4 532","D) 5 423"],
 correct:1,
 wrongFeedback:"Beş bin=5 000, dört yüz=400, otuz=30, iki=2 → 5 000+400+30+2=5 432.",
 hint:"Her basamağı sıraya koy: bin → yüz → on → bir.",
 simplified:{question:"'Beş bin' hangi sayıya eşittir?",options:["A) 500","B) 5 000","C) 50 000","D) 50"],correct:1,hint:"Bin = üç sıfır → 5 000!"}},

// S2 – Bilgi – Kesirler
{id:"m3d1x",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:1,type:"mc",
 question:"Pay, paydadan büyük olan kesre ne ad verilir?",
 options:["A) Birim kesir","B) Basit kesir","C) Bileşik kesir","D) Tam sayılı kesir"],
 correct:2,
 wrongFeedback:"Bileşik kesir: pay ≥ payda. Örnek: 7/5 → 7>5 → bileşik. Basit kesir: pay < payda (3/5 gibi).",
 hint:"Pay PaYdadan büyükse 'bileşik'. Kelimeyi hatırla: büyük → bileşik.",
 simplified:{question:"5/3 kesrinde pay mı payda mı büyük?",options:["A) Pay (5)","B) Payda (3)"],correct:0,hint:"5 > 3 → pay büyük → bileşik kesir!"}},

// S3 – Bilgi – Geometri
{id:"m4d1x",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:1,type:"mc",
 question:"Aşağıdaki şekillerden hangisinin 4 kenarı vardır?",
 options:["A) Üçgen","B) Beşgen","C) Daire","D) Dikdörtgen"],
 correct:3,
 wrongFeedback:"Üçgen=3, beşgen=5, daire=kenar yok, dikdörtgen=4 kenar.",
 hint:"'Dört-gen' diye bir kavram var mı? Dörtgen = 4 kenarlı şekil.",
 simplified:{question:"'Dikdörtgen' kelimesinde kaç var?",options:["A) 3","B) 4","C) 5","D) 6"],correct:1,hint:"Dikdörtgen → dörtgen = 4 kenarlı!"}},

// S4 – Anlama – Basamak Değeri
{id:"m1d2x",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:1,type:"mc",
 question:"3 748 sayısında yüzler basamağındaki rakamın basamak değeri kaçtır?",
 options:["A) 7","B) 70","C) 700","D) 7 000"],
 correct:2,
 wrongFeedback:"Yüzler basamağındaki rakam 7. Basamak DEĞERİ = rakam × basamak birimi = 7 × 100 = 700.",
 hint:"Rakam ≠ Basamak değeri! Yüzler basamağı = ×100. 7 × 100 = ?",
 simplified:{question:"Yüzler basamağındaki rakam 100 ile çarpılırsa ne olur? 7 × 100 = ?",options:["A) 7","B) 70","C) 700","D) 7 000"],correct:2,hint:"7 × 100 = 700!"}},

// S5 – Anlama – Kesir
{id:"m3d1y",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:1,type:"mc",
 question:"Bir keki 8 eşit parçaya bölen Selin, 3 parça yedi. Selin'in yediği kısmı gösteren kesir hangisidir?",
 options:["A) 3/5","B) 5/8","C) 3/8","D) 8/3"],
 correct:2,
 wrongFeedback:"Kesirde pay = alınan parça (3), payda = toplam parça (8) → 3/8.",
 hint:"Alınan parça / Toplam parça = 3 / 8",
 simplified:{question:"Kesirde payda neyi gösterir?",options:["A) Alınan parça","B) Toplam parça sayısı","C) Kalan parça","D) Büyük parça"],correct:1,hint:"Payda = toplam parça = 8!"}},

// S6 – Anlama – Zaman
{id:"m5d1x",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:1,type:"mc",
 question:"Film 14:15'te başladı ve tam 2 saat sürdü. Film kaçta bitti?",
 options:["A) 16:00","B) 16:15","C) 15:15","D) 17:15"],
 correct:1,
 wrongFeedback:"14:15 + 2 saat = 16:15. Dakikalar değişmez, sadece saate 2 ekle: 14+2=16.",
 hint:"Saat: 14+2=16. Dakika değişmiyor: 15 kalır. Yani 16:15.",
 simplified:{question:"14 + 2 = ?",options:["A) 15","B) 16","C) 17","D) 18"],correct:1,hint:"14+2=16 → 16:15!"}},

// S7 – Anlama – Tablo
{id:"m6d1x",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:1,type:"mc",
 pasaj:"| Öğrenci | Kitap |\n|---------|-------|\n| Ali | 8 |\n| Berk | 5 |\n| Ceren | 9 |\n| Derya | 6 |",
 question:"Tabloya göre dört öğrenci toplamda kaç kitap okumuştur?",
 options:["A) 24","B) 28","C) 30","D) 32"],
 correct:1,
 wrongFeedback:"8+5+9+6 = 28. Sırayla: 8+5=13, 13+9=22, 22+6=28.",
 hint:"Tüm sayıları topla: 8+5+9+6=?",
 simplified:{question:"8 + 5 = ?",options:["A) 12","B) 13","C) 14","D) 15"],correct:1,hint:"8+5=13. Şimdi 13+9=22, 22+6=28!"}},

// S8 – Uygulama – Toplama
{id:"m2d1x",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:1,type:"mc",
 question:"2 456 + 1 738 = ?",
 options:["A) 4 094","B) 4 184","C) 4 194","D) 3 094"],
 correct:2,
 wrongFeedback:"6+8=14 (4 yaz, 1 taşı). 5+3+1=9. 4+7=11 (1 yaz, 1 taşı). 2+1+1=4. Sonuç: 4 194.",
 hint:"Basamak basamak topla ve taşımaları unutma!",
 simplified:{question:"6 + 8 = ?",options:["A) 12","B) 13","C) 14","D) 15"],correct:2,hint:"6+8=14 → 4 yaz, 1 taşı. İlk adım bu!"}},

// S9 – Uygulama – Çıkarma
{id:"m2d1y",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:1,type:"mc",
 question:"6 000 – 2 347 = ?",
 options:["A) 3 553","B) 3 653","C) 3 663","D) 3 753"],
 correct:1,
 wrongFeedback:"6 000 - 2 000 = 4 000. 4 000 - 347 = 3 653. Kontrol: 3 653 + 2 347 = 6 000 ✓",
 hint:"6 000 - 2 000 = 4 000. Şimdi 4 000 - 347 = ?",
 simplified:{question:"4 000 - 347 = ?",options:["A) 3 553","B) 3 643","C) 3 653","D) 3 753"],correct:2,hint:"4000-300=3700, 3700-47=3653!"}},

// S10 – Uygulama – Kesir toplama
{id:"m3d1z",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:1,type:"mc",
 question:"3/8 + 3/8 = ?",
 options:["A) 6/16","B) 3/8","C) 6/8","D) 9/8"],
 correct:2,
 wrongFeedback:"Aynı paydada kesir toplamada PAYDA DEĞİŞMEZ. 3+3=6, payda 8 kalır → 6/8.",
 hint:"Paydalar aynı (8). Sadece payları topla: 3+3=?",
 simplified:{question:"Aynı paydada kesir toplarken payda değişir mi?",options:["A) Evet, toplanır","B) Hayır, aynı kalır"],correct:1,hint:"Payda = toplam parça sayısı. O değişmez!"}},

// S11 – Uygulama – Ölçme
{id:"m5d1y",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:1,type:"mc",
 question:"2 kg 300 g kaç gramdır?",
 options:["A) 230 g","B) 2 030 g","C) 2 300 g","D) 23 000 g"],
 correct:2,
 wrongFeedback:"1 kg = 1 000 g. 2 kg = 2 000 g. 2 000 + 300 = 2 300 g.",
 hint:"2 kg kaç gram eder? 2 × 1 000 = ?",
 simplified:{question:"1 kg kaç gramdır?",options:["A) 100 g","B) 1 000 g","C) 10 000 g","D) 500 g"],correct:1,hint:"1 kilogram = 1 000 gram!"}},

// S12 – Uygulama – Saat
{id:"m5d1z",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:1,type:"mc",
 question:"Çağlar okuldan 08:30'da çıkacak. Eve ulaşmak için 45 dakikaya ihtiyacı var. Eve en erken kaçta varır?",
 options:["A) 09:05","B) 09:15","C) 09:25","D) 09:45"],
 correct:1,
 wrongFeedback:"08:30 + 45 dk: dakika 30+45=75 → 60 dakika = 1 saat, kalan 15 dk → 08:30 + 45 dk = 09:15.",
 hint:"30 + 45 = 75 dakika = 1 saat 15 dakika. 08:00 + 1 saat 15 dakika = ?",
 simplified:{question:"30 + 45 = ? dakika",options:["A) 65","B) 70","C) 75","D) 80"],correct:2,hint:"30+45=75 dakika = 1 saat 15 dakika → 09:15!"}},

// S13 – Anlama – Yuvarlama
{id:"m1d2y",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:1,type:"mc",
 question:"4 473 sayısını en yakın yüzlüğe yuvarlarsak kaç olur?",
 options:["A) 4 000","B) 4 400","C) 4 500","D) 5 000"],
 correct:2,
 wrongFeedback:"Yüzlüğe yuvarlama: onlar basamağına bak. 4 473 → onlar=7. 7 ≥ 5 → yukarı yuvarla → 4 500.",
 hint:"4 473 → onlar basamağı 7. Kural: 5 ve üstü yukarı yuvarlama!",
 simplified:{question:"73 sayısı 100'e mi 0'a mı daha yakın?",options:["A) 0'a — aşağı yuvarlama","B) 100'e — yukarı yuvarlama"],correct:1,hint:"73, 100'e 27 birim uzak. 0'a 73 birim. 100'e daha yakın → yukarı!"}},

// S14 – Uygulama – Çarpma
{id:"m2d1z",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:1,type:"mc",
 question:"Bir raftaki 6 kutu içindeki ürün sayısı sırasıyla 12, 12, 12, 12, 12, 12'dir. Toplam kaç ürün vardır?",
 options:["A) 18","B) 60","C) 72","D) 84"],
 correct:2,
 wrongFeedback:"6 × 12 = 72. 6 × 10 = 60, 6 × 2 = 12, toplam 72.",
 hint:"6 kutu, her kutuda 12 ürün → 6 × 12 = ?",
 simplified:{question:"6 × 10 = ?",options:["A) 16","B) 60","C) 610","D) 6"],correct:1,hint:"6×10=60. Sonra 6×2=12 ekle → 72!"}},

// S15 – Anlama – Grafik
{id:"m6d1y",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:1,type:"mc",
 pasaj:"Ocak: 40 adet — Şubat: 25 adet — Mart: 35 adet — Nisan: 50 adet (satış)",
 question:"Tabloya göre hangi ayda en az satış yapılmıştır?",
 options:["A) Ocak","B) Şubat","C) Mart","D) Nisan"],
 correct:1,
 wrongFeedback:"40, 25, 35, 50 arasında en küçük 25 → Şubat.",
 hint:"En az = en küçük sayı. 40-25-35-50 arasında hangisi küçük?",
 simplified:{question:"25, 35, 40, 50 arasında hangisi en küçük?",options:["A) 35","B) 25","C) 40","D) 50"],correct:1,hint:"25 < 35 < 40 < 50 → en küçük 25 → Şubat!"}},

// ════════════════════════════════════════
// 🟡 ORTA – UYGULAMA & ANALİZ (S16–S35)
// ════════════════════════════════════════

// S16 – "Hangisi YANLIŞTIR?" – Basamak
{id:"m1d2z",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:2,type:"mc",
 question:"5 834 sayısı için aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) Binler basamağındaki rakam 5'tir.","B) Yüzler basamağındaki rakam değeri 80'dir.","C) Onlar basamağındaki rakam değeri 30'dur.","D) Birler basamağındaki rakam 4'tür."],
 correct:1,
 wrongFeedback:"Yüzler basamağındaki rakam 8'dir. Basamak DEĞERİ = 8 × 100 = 800, 80 değil! B yanlış.",
 hint:"Yüzler basamağındaki 8'in değeri ne? 8 × 100 = ?",
 simplified:{question:"8 rakamı yüzler basamağında ise değeri kaçtır?",options:["A) 8","B) 80","C) 800","D) 8 000"],correct:2,hint:"Yüzler × 100: 8 × 100 = 800!"}},

// S17 – Uygulama – Geometri (açı)
{id:"m4d2x",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:2,type:"mc",
 question:"İki açısı birbirine eşit ve her biri 55° olan bir üçgenin üçüncü açısı kaç derecedir?",
 options:["A) 55°","B) 60°","C) 70°","D) 80°"],
 correct:2,
 wrongFeedback:"Üçgen iç açıları toplamı 180°. 180 - 55 - 55 = 70°.",
 hint:"Üç açı toplamı = 180°. 55 + 55 = 110. 180 - 110 = ?",
 simplified:{question:"180 - 110 = ?",options:["A) 60","B) 70","C) 80","D) 90"],correct:1,hint:"180 - 110 = 70!"}},

// S18 – Analiz – Yuvarlama (I, II, III format)
{id:"m1d3x",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:2,type:"mc",
 question:"Ayşe 2 847 sayısını farklı şekillerde yuvarladı:\nI.  En yakın onluğa: 2 850\nII. En yakın yüzlüğe: 2 900\nIII. En yakın bine: 3 000\n\nKaç işlem doğrudur?",
 options:["A) Yalnız I","B) I ve III","C) II ve III","D) I, II ve III"],
 correct:1,
 wrongFeedback:"I: birler=7≥5 → 2850 ✓. II: onlar=4<5 → aşağı → 2800, Ayşe 2900 yazmış ✗. III: yüzler=8≥5 → yukarı → 3000 ✓. Doğru: I ve III.",
 hint:"II'yi kontrol et: 2847 → onlar basamağı 4. 4 < 5 → aşağı yuvarla → 2800, 2900 değil!",
 simplified:{question:"2 847 en yakın yüzlüğe yuvarlandığında ne olur? Onlar basamağı = 4. 4 < 5, kural?",options:["A) 4<5 → yukarı → 2900","B) 4<5 → aşağı → 2800"],correct:1,hint:"4 < 5 → aşağı yuvarlama → 2800!"}},

// S19 – I,II,III – Kesirler
{id:"m3d2x",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"5/8 kesri için aşağıdaki ifadelerden kaç tanesi DOĞRUDUR?\nI.  5/8 basit kesirdir.\nII. 5/8, 3/8'den büyüktür.\nIII. 5/8 + 3/8 = 1 tam eder.",
 options:["A) Yalnız II","B) I ve II","C) II ve III","D) I, II ve III"],
 correct:3,
 wrongFeedback:"I: pay(5)<payda(8) → basit kesir ✓. II: 5>3, aynı payda → 5/8>3/8 ✓. III: 5/8+3/8=8/8=1 ✓. Üçü de doğru.",
 hint:"Her ifadeyi ayrı ayrı kontrol et. 5<8 olduğu için basit mi bileşik mi?",
 simplified:{question:"5/8 + 3/8 = ?",options:["A) 8/16","B) 8/8 = 1","C) 2/8","D) 6/8"],correct:1,hint:"Paydalar aynı: 5+3=8, payda 8 → 8/8=1!"}},

// S20 – İki kişi yorumu – Zaman
{id:"m5d2x",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:2,type:"mc",
 question:"Bir tren 11:45'te hareket etti ve 3 saat 20 dakika sonra vardı.\nBerk: 'Tren 15:05'te varır.'\nSelin: 'Tren 15:15'te varır.'\nKimin yorumu doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:0,
 wrongFeedback:"11:45 + 3 saat = 14:45. 14:45 + 20 dk = 15:05. Berk doğru, Selin yanlış.",
 hint:"Adım 1: 11:45 + 3 saat = ? Adım 2: Sonuç + 20 dakika = ?",
 simplified:{question:"14:45 + 20 dakika = ?",options:["A) 15:05","B) 15:15","C) 14:65","D) 15:25"],correct:0,hint:"45+20=65 dk → 60dk=1 saat, kalan 5 dk → 15:05!"}},

// S21 – Uygulama – Sözel problem (çarpma)
{id:"m2d2x",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Bir çiftçi 6 dönüm arazisinin her dönümünden 215 kg domates topladı. Toplam kaç kg domates topladı?",
 options:["A) 1 200","B) 1 290","C) 1 350","D) 1 500"],
 correct:1,
 wrongFeedback:"6 × 215 = 6 × 200 + 6 × 15 = 1 200 + 90 = 1 290.",
 hint:"6 × 215: önce 6 × 200 = 1200, sonra 6 × 15 = 90. Topla!",
 simplified:{question:"6 × 200 = ?",options:["A) 1 000","B) 1 200","C) 1 400","D) 200"],correct:1,hint:"6 × 2 = 12, üç sıfır ekle → 1 200!"}},

// S22 – Analiz – Tablo "Hangisi YANLIŞTIR?"
{id:"m6d2x",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:2,type:"mc",
 pasaj:"| Ay | Elektrik Faturası |\n|------|---------|\n| Ocak | 1 850 TL |\n| Şubat | 2 100 TL |\n| Mart | 1 750 TL |\n| Nisan | 2 050 TL |",
 question:"Tabloya göre aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) En yüksek fatura Şubat ayına aittir.","B) Mart faturası en düşüktür.","C) Nisan faturası Mart'tan 400 TL fazladır.","D) Ocak ve Mart faturası toplamı 3 600 TL'dir."],
 correct:2,
 wrongFeedback:"C: Nisan-Mart = 2 050-1 750 = 300 TL, 400 değil. A,B,D doğru.",
 hint:"C'yi kontrol et: 2 050 - 1 750 = ? 400 mi yoksa 300 mü?",
 simplified:{question:"2 050 - 1 750 = ?",options:["A) 200","B) 300","C) 400","D) 500"],correct:1,hint:"2050-1750=300, 400 değil → C yanlış!"}},

// S23 – Uygulama – Bölme sözel
{id:"m2d2y",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"360 simit 9 tepsiye eşit bölüştürülecek. Her tepside kaç simit olur?",
 options:["A) 38","B) 40","C) 42","D) 45"],
 correct:1,
 wrongFeedback:"360 ÷ 9 = 40. Kontrol: 9 × 40 = 360 ✓.",
 hint:"360 ÷ 9: 9 × ? = 360. 9 × 4 = 36 → 9 × 40 = 360!",
 simplified:{question:"9 × 40 = ?",options:["A) 320","B) 360","C) 380","D) 400"],correct:1,hint:"9 × 4 = 36, bir sıfır ekle → 360 ✓"}},

// S24 – Analiz – Kesir (parça bulma)
{id:"m3d2y",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"32 öğrencinin 3/8'i kız. Erkek öğrenci sayısı kaçtır?",
 options:["A) 12","B) 16","C) 20","D) 24"],
 correct:2,
 wrongFeedback:"Kız: 32 ÷ 8 × 3 = 4 × 3 = 12. Erkek: 32 - 12 = 20.",
 hint:"Önce 32'nin 1/8'ini bul (32÷8=4), sonra 3/8'i hesapla (4×3=12), sonra erkek = 32-12.",
 simplified:{question:"32'nin 1/8'i kaçtır?",options:["A) 2","B) 4","C) 8","D) 16"],correct:1,hint:"32 ÷ 8 = 4. Bu 1/8'i. Şimdi 3/8 = 3×4 = 12!"}},

// S25 – "Hangisi YANLIŞTIR?" – Kesirler
{id:"m3d2z",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"3/7 kesri için aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) Pay 3, payda 7'dir.","B) 3/7 < 1'dir.","C) 3/7 ile 5/7'nin toplamı 1 tam eder.","D) 3/7 < 5/7'dir."],
 correct:2,
 wrongFeedback:"C: 3/7 + 5/7 = 8/7 = 1 tam 1/7 → 1'den fazla, 1 etmez. C yanlış!",
 hint:"3/7 + 5/7 = ? 3+5=8, payda 7. 8/7 = 1 mi?",
 simplified:{question:"8/7 ile 1'i karşılaştır. 8/7 = 1 midir?",options:["A) Evet, 8/7=1","B) Hayır, 8/7 > 1 (1 tam 1/7)"],correct:1,hint:"7/7=1. 8/7 bundan büyük → 1'den fazla!"}},

// S26 – İki kişi yorumu – Yuvarlama
{id:"m1d3y",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:2,type:"mc",
 question:"4 798 sayısını Berk en yakın bine, Selin en yakın yüzlüğe yuvarladı.\nBerk: '5 000' Selin: '4 700'\nKimin işlemi doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:0,
 wrongFeedback:"En yakın bin: yüzler=7≥5 → yukarı → 5 000 ✓. En yakın yüzlük: onlar=9≥5 → yukarı → 4 800 (Selin 4 700 dedi → yanlış).",
 hint:"Selin'i kontrol et: 4 798 → onlar basamağı 9. 9≥5 → yukarı → 4 800, 4 700 değil!",
 simplified:{question:"4 798 en yakın yüzlüğe yuvarlandığında: onlar=9, kural ne?",options:["A) 9≥5 → yukarı → 4 800","B) 9≥5 → aşağı → 4 700"],correct:0,hint:"9 ≥ 5 → yukarı yuvarlama → 4 800!"}},

// S27 – Uygulama – Ölçme dönüşüm
{id:"m5d2y",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:2,type:"mc",
 question:"5 km 300 m kaç metredir?",
 options:["A) 530 m","B) 5 030 m","C) 5 300 m","D) 53 000 m"],
 correct:2,
 wrongFeedback:"1 km = 1 000 m. 5 km = 5 000 m. 5 000 + 300 = 5 300 m.",
 hint:"5 km → 1 km = 1000 m → 5 × 1000 = 5000. Sonra +300.",
 simplified:{question:"1 km kaç metredir?",options:["A) 100 m","B) 1 000 m","C) 10 000 m","D) 500 m"],correct:1,hint:"1 kilometre = 1 000 metre!"}},

// S28 – "Hangisi YANLIŞTIR?" – Dört işlem
{id:"m2d2z",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Aşağıdaki işlemlerden hangisi YANLIŞTIR?",
 options:["A) 2 345 + 1 678 = 4 023","B) 7 002 - 3 456 = 3 546","C) 247 × 4 = 978","D) 3 780 ÷ 6 = 640"],
 correct:3,
 wrongFeedback:"D: 3780 ÷ 6 = 630, 640 değil. Kontrol: 3600÷6=600, 180÷6=30 → 630. D yanlış!",
 hint:"Her işlemi kontrol et. D'de 3780÷6: 3600÷6=600, 180÷6=30 → toplam?",
 simplified:{question:"180 ÷ 6 = ?",options:["A) 20","B) 30","C) 40","D) 50"],correct:1,hint:"6 × 30 = 180. Kontrol: 6×3=18, bir sıfır → 180 ✓"}},

// S29 – Analiz – Örüntü
{id:"m7d2x",subject:"matematik",kazanim:107,kazanimName:"Örüntü ve Ritmik Sayma",difficulty:2,type:"mc",
 question:"Çiğdem şu sayıları yazıyor: 1 000, 1 500, 2 000, 2 500, ...\nBu örüntünün 8. terimi kaçtır?",
 options:["A) 4 000","B) 4 500","C) 5 000","D) 5 500"],
 correct:1,
 wrongFeedback:"Fark: 500. 8. terim: 1000 + (8–1)×500 = 1000 + 3500 = 4500.",
 hint:"Fark: 500. 1.→1000, 2.→1500, ..., 8.→1000+(7×500)=?",
 simplified:{question:"7 × 500 = ?",options:["A) 3 000","B) 3 500","C) 4 000","D) 4 500"],correct:1,hint:"7×5=35, iki sıfır → 3 500. 1000+3500=4500!"}},

// S30 – Analiz – Kesir işlem çok adımlı
{id:"m3d3x",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"Bir su tankının 4/9'u dolu. Tanka 2/9 daha su eklendi. Şimdi tankın kaçta kaçı doludur?",
 options:["A) 5/9","B) 6/9","C) 7/9","D) 8/9"],
 correct:1,
 wrongFeedback:"4/9 + 2/9 = 6/9. Paydalar aynı (9) → payları topla: 4+2=6 → 6/9.",
 hint:"Paydalar eşit! Sadece payları topla: 4+2=?",
 simplified:{question:"4 + 2 = ?",options:["A) 5","B) 6","C) 7","D) 8"],correct:1,hint:"4+2=6 → 6/9!"}},

// S31 – Uygulama – Ortalama
{id:"m6d2y",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:2,type:"mc",
 pasaj:"Ali: 72 puan — Ayşe: 88 puan — Berk: 65 puan — Selin: 95 puan",
 question:"Dört öğrencinin puan ortalaması kaçtır?",
 options:["A) 78","B) 80","C) 82","D) 84"],
 correct:1,
 wrongFeedback:"Ortalama = toplam ÷ kişi sayısı. 72+88+65+95=320. 320÷4=80.",
 hint:"Topla: 72+88+65+95=? Sonra 4'e böl.",
 simplified:{question:"72 + 88 = ?",options:["A) 150","B) 160","C) 170","D) 180"],correct:1,hint:"72+88=160. Devam: 160+65=225, 225+95=320. 320÷4=80!"}},

// S32 – "Hangisi YANLIŞTIR?" – Grafik
{id:"m6d2z",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:2,type:"mc",
 pasaj:"Ali: 80 puan — Ayşe: 75 puan — Berk: 90 puan — Selin: 85 puan",
 question:"Tabloya göre aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) En yüksek puan Berk'e aittir.","B) Dört öğrencinin puan ortalaması 82'dir.","C) Selin'in puanı Ali'den 5 fazladır.","D) Yalnızca bir öğrencinin puanı 80'in altındadır."],
 correct:1,
 wrongFeedback:"B yanlış: 80+75+90+85=330, 330÷4=82,5 ≠ 82. A: 90=max ✓. C: 85-80=5 ✓. D: Yalnız Ayşe(75)<80 ✓.",
 hint:"B'yi kontrol et: 80+75+90+85=? 4'e bölünce 82 mi çıkıyor?",
 simplified:{question:"80+75+90+85=?",options:["A) 320","B) 325","C) 330","D) 335"],correct:2,hint:"80+75=155, 90+85=175, 155+175=330. 330÷4=82,5 ≠ 82!"}},
{id:"m7d2y",subject:"matematik",kazanim:107,kazanimName:"Örüntü ve Ritmik Sayma",difficulty:2,type:"mc",
 question:"Örüntü: 2, 6, 18, 54, 162, ...\nBerk: 'Her terim öncekinin 3 katıdır.'\nSelin: '6. terim 486'dır.'\nKim doğru söylüyor?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:2,
 wrongFeedback:"Berk: 2×3=6, 6×3=18... ✓. Selin: 162×3=486 (6.terim) ✓. Her ikisi de doğru.",
 hint:"162'nin 3 katı kaçtır? 162 × 3 = ?",
 simplified:{question:"162 × 3 = ?",options:["A) 406","B) 426","C) 486","D) 506"],correct:2,hint:"160×3=480, 2×3=6, toplam 486!"}},

// S34 – Uygulama – Tahmini hesaplama
{id:"m8d2x",subject:"matematik",kazanim:108,kazanimName:"Tahmini Hesaplama",difficulty:2,type:"mc",
 question:"Berk 3 795 TL, 2 208 TL ve 1 654 TL tutarında üç fatura ödeyecek.\nHer tutarı en yakın bine yuvarlayarak tahmini toplamı bulursa kaç TL bulur?",
 options:["A) 6 000","B) 7 000","C) 8 000","D) 9 000"],
 correct:2,
 wrongFeedback:"3 795→4 000, 2 208→2 000, 1 654→2 000. Tahmini toplam: 4 000+2 000+2 000=8 000.",
 hint:"Her sayıyı bine yuvarla: 3795→?, 2208→?, 1654→?",
 simplified:{question:"3 795 en yakın bine yuvarlandığında: yüzler=7, kural?",options:["A) 7≥5 → yukarı → 4 000","B) 7≥5 → aşağı → 3 000"],correct:0,hint:"7 ≥ 5 → yukarı → 4 000!"}},

// S35 – Uygulama – Çok adımlı sözel problem
{id:"m2d3x",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Bir bakkal sabah 847 TL, öğleden sonra sabah kazancının 2 katı kadar para kazandı. Günlük toplam kaç TL kazandı?",
 options:["A) 1 694","B) 2 294","C) 2 541","D) 3 388"],
 correct:2,
 wrongFeedback:"Öğleden sonra: 847 × 2 = 1 694 TL. Toplam: 847 + 1 694 = 2 541 TL.",
 hint:"Öğleden sonra = 847 × 2. Sonra sabah + öğleden sonra.",
 simplified:{question:"847 × 2 = ?",options:["A) 1 494","B) 1 594","C) 1 694","D) 1 794"],correct:2,hint:"800×2=1600, 47×2=94, toplam 1694!"}},

// ════════════════════════════════════════
// 🔴 İLERİ – DEĞERLENDİRME & SENTEZ (S36–S60)
// ════════════════════════════════════════

// S36 – Sentez – Kesir + çarpma çok adımlı
{id:"m3d3y",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:3,type:"mc",
 question:"720 öğrencinin 3/8'i spor yapıyor. Spor yapanların 2/3'ü yüzme biliyor. Yüzme bilen öğrenci sayısı kaçtır?",
 options:["A) 160","B) 180","C) 200","D) 240"],
 correct:1,
 wrongFeedback:"Spor yapan: 720÷8×3=270. Yüzme bilen: 270÷3×2=180.",
 hint:"Adım 1: 720'nin 3/8'i = 720÷8×3. Adım 2: Sonucun 2/3'ü.",
 simplified:{question:"720'nin 1/8'i kaçtır?",options:["A) 80","B) 90","C) 100","D) 720"],correct:1,hint:"720÷8=90. Bu 1/8'i. 3/8=3×90=270!"}},

// S37 – "Hangisi YANLIŞTIR?" – Tablo puanlar
{id:"m6d3x",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:3,type:"mc",
 pasaj:"| Öğrenci | Test Puanı |\n|---------|------------|\n| Ali | 72 |\n| Ayşe | 88 |\n| Berk | 65 |\n| Selin | 95 |",
 question:"Tabloya göre aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) En yüksek ile en düşük puan farkı 30'dur.","B) Dört öğrencinin toplam puanı 310'dur.","C) Ayşe'nin puanı Ali'den 16 fazladır.","D) İki öğrencinin puanı 80'in altındadır."],
 correct:1,
 wrongFeedback:"B: 72+88+65+95=320, 310 değil → YANLIŞ. A:95-65=30 ✓. C:88-72=16 ✓. D:Ali(72) ve Berk(65)<80 ✓.",
 hint:"B'yi kontrol et: 72+88=160, 65+95=160, toplam=320 ≠ 310!",
 simplified:{question:"72 + 88 + 65 + 95 = ?",options:["A) 310","B) 320","C) 330","D) 300"],correct:1,hint:"72+88=160, 65+95=160, 160+160=320!"}},

// S38 – Hata bulma – Kesir toplama
{id:"m9d2x",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Ahmet şu işlemi yaptı: 5/8 + 3/8 = 8/16\nBu hatayı doğru açıklayan seçenek hangisidir?",
 options:["A) Paylar toplanmamış; doğrusu 5/8+3/8=8/8.","B) Paydalar toplanmış; doğrusu 8/8'dir.","C) Hem paylar hem paydalar toplanmış; doğrusu 8/8'dir.","D) İşlem doğrudur."],
 correct:2,
 wrongFeedback:"8/16: pay 5+3=8 ✓ ama payda 8+8=16 ✗. Ahmet hem payı hem paydayı toplamış. Doğrusu: 8/8=1.",
 hint:"8/16'da pay (8) doğru mu yanlış mı? Payda (16) doğru mu yanlış mı?",
 simplified:{question:"Aynı paydada kesir toplarken payda değişmeli mi?",options:["A) Evet, 8+8=16 olur","B) Hayır, payda 8 kalır — sadece paylar toplanır"],correct:1,hint:"Payda değişmez! 5/8+3/8=8/8, 8/16 değil!"}},

// S39 – Hata bulma – Sözel işlem
{id:"m9d2y",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Selin şu problemi çözdü:\n'Arabaya 45 L benzin, litre başına 38 TL. Toplam ücret?'\nSelin: 45 + 38 = 83 TL\n\nBu çözümdeki hatayı açıklayan seçenek hangisidir?",
 options:["A) Çıkarma yapması gerekirken toplama yapmıştır.","B) Bölme yapması gerekirken toplama yapmıştır.","C) Çarpma yapması gerekirken toplama yapmıştır; doğrusu 1 710 TL'dir.","D) İşlem doğrudur."],
 correct:2,
 wrongFeedback:"45 litre × 38 TL = 1 710 TL. Toplam maliyet = miktar × birim fiyat = çarpma işlemidir!",
 hint:"Her litre 38 TL, 45 litre var. Bu toplama mı çarpma mı gerektirir?",
 simplified:{question:"3 şişe su var, her şişe 8 TL. Toplam kaç TL? Toplama mı çarpma mı?",options:["A) 3+8=11 TL (toplama)","B) 3×8=24 TL (çarpma)"],correct:1,hint:"Her şişe 8 TL, 3 şişe var → 3 kez 8 TL → çarpma!"}},

// S40 – I,II,III – Bilye problemi
{id:"m2d3y",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"Bir torbada 48 bilye var. Kırmızı bilyeler toplamın 1/4'ü, mavi bilyeler 1/3'ü, geri kalanlar sarı.\nI.  Kırmızı bilye sayısı 12'dir.\nII. Mavi bilye sayısı kırmızıdan 4 fazladır.\nIII. Sarı bilye sayısı toplamın yarısından azdır.\nKaç ifade doğrudur?",
 options:["A) Yalnız I","B) I ve II","C) I ve III","D) I, II ve III"],
 correct:3,
 wrongFeedback:"I: 48×1/4=12 ✓. II: Mavi=48×1/3=16, fark=16-12=4 ✓. III: Sarı=48-12-16=20, yarı=24, 20<24 ✓. Üçü de doğru.",
 hint:"Sırayla hesapla: Kırmızı=48÷4=?, Mavi=48÷3=?, Sarı=48-kırmızı-mavi=?",
 simplified:{question:"48'in 1/4'ü kaçtır?",options:["A) 8","B) 12","C) 16","D) 6"],correct:1,hint:"48÷4=12!"}},

// S41 – Sentez – Kız/erkek + defter
{id:"m2d3z",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"30 öğrencili sınıfta kızlar toplamın 2/5'i, geri kalanlar erkek.\nHer kıza 4 defter, her erkeğe 3 defter verilecek.\nToplamda kaç defter gerekir?",
 options:["A) 90","B) 96","C) 102","D) 108"],
 correct:2,
 wrongFeedback:"Kız: 30×2/5=12. Erkek: 18. Defter: 12×4+18×3=48+54=102.",
 hint:"Adım 1: Kız sayısı (30×2/5). Adım 2: Erkek sayısı. Adım 3: Defterler.",
 simplified:{question:"30'un 2/5'i kaçtır?",options:["A) 10","B) 12","C) 15","D) 6"],correct:1,hint:"30÷5=6. 6×2=12. Kız=12!"}},

// S42 – Hata bulma – Zaman
{id:"m9d3x",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Derya şu problemi çözdü:\n'10:15'te başlayan antrenman 11:50'de bitti. Ne kadar sürdü?'\nDerya: 1 saat 45 dakika\n\nDerya'nın cevabı doğru mu?",
 options:["A) Hayır; doğrusu 1 saat 35 dakikadır.","B) Evet; hesap doğrudur.","C) Hayır; doğrusu 2 saat 35 dakikadır.","D) Hayır; doğrusu 1 saat 25 dakikadır."],
 correct:0,
 wrongFeedback:"11:50 - 10:15 = ? Dakika: 50-15=35. Saat: 11-10=1. Süre: 1 saat 35 dakika. Derya 45 dakika demiş, yanlış!",
 hint:"50 - 15 = 35 dakika. 11 - 10 = 1 saat. Toplam: 1 saat 35 dakika.",
 simplified:{question:"50 - 15 = ?",options:["A) 25","B) 35","C) 45","D) 65"],correct:1,hint:"50-15=35. Derya 45 demiş → yanlış!"}},

// S43 – Analiz – Çok adımlı zaman
{id:"m5d3x",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:3,type:"mc",
 question:"Bir koşucu 06:15'te antrenmana başladı. 45 dakika koştu, 15 dakika dinlendi, sonra 30 dakika daha koştu. Antrenman kaçta bitti?",
 options:["A) 07:30","B) 07:45","C) 08:00","D) 08:15"],
 correct:1,
 wrongFeedback:"06:15 + 45dk = 07:00. 07:00 + 15dk = 07:15. 07:15 + 30dk = 07:45.",
 hint:"Toplam süre: 45+15+30=90 dakika=1 saat 30 dakika. 06:15+1:30=?",
 simplified:{question:"45 + 15 + 30 = ? dakika",options:["A) 80","B) 85","C) 90","D) 95"],correct:2,hint:"45+15=60, 60+30=90 dakika = 1,5 saat!"}},

// S44 – I,II,III – Meyve bahçesi grafik
{id:"m6d3y",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:3,type:"mc",
 pasaj:"Haziran: 320 kg — Temmuz: 480 kg — Ağustos: 560 kg — Eylül: 240 kg (toplanan meyve)",
 question:"I.  En fazla meyve Ağustos'ta toplandı.\nII. Temmuz ve Eylül toplamı Ağustos'tan fazladır.\nIII. 4 aylık toplam 1 600 kg'dır.\n\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:2,
 wrongFeedback:"I: En fazla 560=Ağustos ✓. II: 480+240=720>560 ✓. III: 320+480+560+240=1600 ✓. Üçü de doğru.",
 hint:"Her ifadeyi hesaplayarak kontrol et. III için: 320+480+560+240=?",
 simplified:{question:"320 + 480 + 560 + 240 = ?",options:["A) 1 500","B) 1 600","C) 1 700","D) 1 400"],correct:1,hint:"320+480=800, 560+240=800, 800+800=1600!"}},

// S45 – "Hangisi YANLIŞTIR?" – Zaman
{id:"m5d3y",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:3,type:"mc",
 question:"Bir süpermarket 09:00'da açılıyor, 22:30'da kapanıyor.\nAşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) Günde 13 saat 30 dakika açık kalır.","B) Öğleden sonra 14:00'da alışveriş yapılabilir.","C) Gece 23:00'da süpermarket açıktır.","D) Açılıştan 5 saat sonra saat 14:00'dır."],
 correct:2,
 wrongFeedback:"C: 23:00 > 22:30 → süpermarket kapalı. C YANLIŞ. A:22:30-9:00=13,5 saat ✓. B:14:00 açık saatler içinde ✓. D:09:00+5=14:00 ✓.",
 hint:"C'yi kontrol et: 23:00'da süpermarket açık mı? Kapanış saati 22:30...",
 simplified:{question:"22:30'dan sonra (23:00 gibi) süpermarket açık mı?",options:["A) Evet, hâlâ açık","B) Hayır, 22:30'da kapandı"],correct:1,hint:"22:30 kapanış → 23:00 kapalı!"}},

// S46 – Sentez – Alışveriş
{id:"m2d3w",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"Berk 250 TL ile alışveriş yapıyor:\n- 1 kg elma: 45 TL\n- 2 kutu yoğurt: kutu başı 38 TL\n- 3 şişe su: şişe başı 8 TL\nBerk kaç TL para üstü alır?",
 options:["A) 85 TL","B) 95 TL","C) 105 TL","D) 115 TL"],
 correct:2,
 wrongFeedback:"Elma: 45. Yoğurt: 2×38=76. Su: 3×8=24. Toplam: 45+76+24=145. Para üstü: 250-145=105.",
 hint:"Her ürünün toplam fiyatını hesapla, hepsini topla, sonra 250'den çıkar.",
 simplified:{question:"2 × 38 = ?",options:["A) 66","B) 76","C) 86","D) 96"],correct:1,hint:"2×30=60, 2×8=16, toplam 76!"}},

// S47 – Hata bulma – Kimin cevabı doğru?
{id:"m9d3y",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Öğretmen '5 günde 2 750 km giden aracın günlük ortalaması kaçtır?' diye sordu.\nAli: 2750 ÷ 5 = 550 km\nBerk: 2750 × 5 = 13 750 km\nSelin: 2750 - 5 = 2 745 km\nKimin cevabı doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Berk","C) Ali ve Selin","D) Hiçbiri"],
 correct:0,
 wrongFeedback:"Günlük ortalama = toplam ÷ gün sayısı = 2750÷5=550. Yalnızca Ali doğru.",
 hint:"'Günlük ortalama' = toplam yolu gün sayısına böl. Hangi işlem?",
 simplified:{question:"5 günde 2 750 km gidildi. Her gün eşit gidilseydi günde kaç km olurdu?",options:["A) 2750+5=2755","B) 2750×5=13750","C) 2750÷5=550","D) 2750-5=2745"],correct:2,hint:"Ortalama = toplam ÷ gün sayısı = 2750÷5=550!"}},

// S48 – Sentez – 3 haftalık ciro
{id:"m2d3v",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"Bir dükkanın haftalık ciroları:\n1. hafta: 840 TL\n2. hafta: 1. haftanın 3/4'ü\n3. hafta: 2. haftadan 180 TL fazla\n3 haftalık toplam ciro kaçtır?",
 options:["A) 2 100","B) 2 280","C) 2 400","D) 2 520"],
 correct:1,
 wrongFeedback:"2. hafta: 840×3/4=630. 3. hafta: 630+180=810. Toplam: 840+630+810=2 280.",
 hint:"Adım 1: 840×3/4=? Adım 2: Sonuç+180=? Adım 3: 840+2.hafta+3.hafta=?",
 simplified:{question:"840'ın 3/4'ü kaçtır? (840÷4×3)",options:["A) 210","B) 420","C) 630","D) 840"],correct:2,hint:"840÷4=210. 210×3=630!"}},

// S49 – Değerlendirme – Kesir I,II,III,IV
{id:"m3d3z",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:3,type:"mc",
 question:"Bir pastanın 5/12'si Ahmet'e, 4/12'si Ayşe'ye verildi.\nI.  Ahmet Ayşe'den fazla aldı.\nII. İkisi birlikte 9/12 aldı.\nIII. Pastanın 3/12'si kaldı.\nIV. Kalan pasta Ahmet'in aldığından azdır.\nKaç ifade doğrudur?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:2,
 wrongFeedback:"I:5/12>4/12 ✓. II:5+4=9/12 ✓. III:12/12-9/12=3/12 ✓. IV:3/12<5/12 ✓. Dördü de doğru!",
 hint:"Her ifadeyi sırayla hesapla. Kalan = 12/12 - 9/12 = ?",
 simplified:{question:"12/12 - 9/12 = ?",options:["A) 2/12","B) 3/12","C) 4/12","D) 1/12"],correct:1,hint:"12-9=3, payda 12 kalır → 3/12!"}},

// S50 – Sentez – Fabrika üretimi
{id:"m2d3u",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"Bir fabrikada 3 makine var:\n- 1. makine: günde 450 parça\n- 2. makine: 1. makinenin 2/3'ü kadar\n- 3. makine: 1. ve 2. makine toplamının yarısı\n3 makine birden 5 günde kaç parça üretir?",
 options:["A) 5 000","B) 5 250","C) 5 625","D) 6 000"],
 correct:2,
 wrongFeedback:"2. makine: 450×2/3=300. 3. makine: (450+300)÷2=375. Günlük: 450+300+375=1125. 5 günde: 1125×5=5625.",
 hint:"Adım 1: 2. makine = 450÷3×2. Adım 2: 3. makine = (450+2.makine)÷2. Adım 3: ×5.",
 simplified:{question:"450'nin 2/3'ü kaçtır?",options:["A) 200","B) 250","C) 300","D) 350"],correct:2,hint:"450÷3=150. 150×2=300!"}},

// S51 – Hata bulma – Geometri
{id:"m9d3z",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Öğrenci: 'Karenin kenarı 6 cm. Çevresi: 6 × 3 = 18 cm'\nBu çözümdeki hata nedir?",
 options:["A) Kare 4 kenarlıdır; doğrusu 6×4=24 cm.","B) Toplama yapılmalıydı; doğrusu 6+3=9 cm.","C) Birim yanlış; 18 m olmalıydı.","D) İşlemde hata yoktur; 18 cm doğru."],
 correct:0,
 wrongFeedback:"Karenin 4 eşit kenarı var. Çevre = 4 × kenar = 4 × 6 = 24 cm. 3 ile çarpmak yanlış.",
 hint:"Karenin kaç kenarı var? Çevre = kenar sayısı × kenar uzunluğu.",
 simplified:{question:"Karenin kaç kenarı vardır?",options:["A) 3","B) 4","C) 5","D) 6"],correct:1,hint:"Kare = 4 eşit kenar! Çevre = 4×6=24 cm."}},

// S52 – Değerlendirme – Örüntü I,II,III
{id:"m7d3x",subject:"matematik",kazanim:107,kazanimName:"Örüntü ve Ritmik Sayma",difficulty:3,type:"mc",
 question:"Örüntü: 2, 6, 18, 54, 162, ...\nI.  Her terim öncekinin 3 katıdır.\nII. 6. terim 486'dır.\nIII. Bu örüntü azalan bir dizidir.\nHangisi doğrudur?",
 options:["A) Yalnız I","B) I ve II","C) I ve III","D) I, II ve III"],
 correct:1,
 wrongFeedback:"I: 2×3=6 ✓, 6×3=18 ✓... ✓. II: 162×3=486 ✓. III: Dizi artıyor, azalmıyor ✗. Doğru: I ve II.",
 hint:"III'ü kontrol et: 2,6,18,54... Artıyor mu azalıyor mu?",
 simplified:{question:"2, 6, 18, 54 — bu dizi artıyor mu azalıyor mu?",options:["A) Artıyor","B) Azalıyor"],correct:0,hint:"2<6<18<54 → artıyor!"}},

// S53 – Hata bulma – Sözel problem (inen/binen)
{id:"m9d2z",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Çağlar şu problemi çözdü:\n'Otobüste 48 yolcu var. 12 kişi indi, 8 kişi bindi. Şimdi kaç yolcu var?'\nÇağlar: 48 + 12 – 8 = 52 yolcu\n\nBu çözümde hata var mıdır?",
 options:["A) Evet; inen çıkarılır, binen eklenir. Doğrusu: 48–12+8=44.","B) Hayır; işlem doğrudur.","C) Evet; her ikisi de toplanmalıydı: 48+12+8=68.","D) Evet; her ikisi de çıkarılmalıydı: 48–12–8=28."],
 correct:0,
 wrongFeedback:"İnen=çıkar (–12), binen=ekle (+8). Doğrusu: 48–12+8=44. Çağlar inen ile bineni yer değiştirmiş.",
 hint:"İnen = azalır → çıkarılır. Binen = artar → eklenir.",
 simplified:{question:"12 kişi indi. Bu otobüsteki yolcu sayısını artırır mı azaltır mı?",options:["A) Artırır → +12","B) Azaltır → –12"],correct:1,hint:"İnmek = azalmak → 48-12=36!"}},

// S54 – Sentez – Tatil bütçesi
{id:"m8d3x",subject:"matematik",kazanim:108,kazanimName:"Tahmini Hesaplama",difficulty:3,type:"mc",
 question:"Bir aile 4 günlük tatil planlıyor:\n- Otel: gecelik 850 TL\n- Yemek: günlük 400 TL\n- Yakıt: 1 200 TL (gidip gelme)\nToplam tatil masrafı kaç TL'dir?",
 options:["A) 5 600","B) 6 200","C) 6 600","D) 7 200"],
 correct:1,
 wrongFeedback:"Otel: 4×850=3400. Yemek: 4×400=1600. Yakıt: 1200. Toplam: 3400+1600+1200=6200.",
 hint:"Otel: 4×850=? Yemek: 4×400=? Yakıt: 1200. Hepsini topla.",
 simplified:{question:"4 × 850 = ?",options:["A) 3 200","B) 3 400","C) 3 600","D) 3 800"],correct:1,hint:"4×800=3200, 4×50=200, toplam 3400!"}},

// S55 – İki kişi yorumu – Kesir karşılaştırma
{id:"m3d3w",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:3,type:"mc",
 question:"Pastanın 3/8'i kaldı.\nAli: 'Pastanın yarısından azı kalmış.'\nAyşe: 'Eğer 2 parça daha yenseydi pastanın 1/4'ü kalırdı.'\nKimin yorumu doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Ayşe","C) Her ikisi","D) Hiçbiri"],
 correct:0,
 wrongFeedback:"Ali: 3/8 < 1/2=4/8 ✓. Ayşe: 3/8–2/8=1/8. 1/8 ≠ 1/4=2/8 ✗. Yalnız Ali doğru.",
 hint:"Ayşe'yi kontrol et: 3/8'den 2 parça yenirse → 3/8–2/8=1/8. 1/8=1/4 mı?",
 simplified:{question:"3/8 - 2/8 = ?",options:["A) 1/4","B) 1/8","C) 2/8","D) 5/8"],correct:1,hint:"3-2=1, payda 8 kalır → 1/8. 1/8 = 1/4 değil!"}},

// S56 – Değerlendirme – 4 basamaklı sayılar I,II,III
{id:"m1d3z",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:3,type:"mc",
 question:"Dört basamaklı sayılar için:\nI.  En büyük dört basamaklı sayı 9 999'dur.\nII. En küçük dört basamaklı sayı 1 000'dir.\nIII. Binler basamağı her zaman 0'dan büyüktür.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:2,
 wrongFeedback:"I: 9999=en büyük 4 basamaklı ✓. II: 1000=en küçük 4 basamaklı ✓. III: 4 basamaklı sayılarda binler ≥ 1 > 0 ✓. Üçü de doğru.",
 hint:"III: Dört basamaklı bir sayıda binler basamağı 0 olabilir mi? Olsaydı 4 basamaklı olur muydu?",
 simplified:{question:"Binler basamağı 0 olan 4 basamaklı bir sayı yazabilir misin?",options:["A) Evet: 0 123","B) Hayır: 0 123 aslında 3 basamaklıdır"],correct:1,hint:"Başında sıfır olan sayı daha az basamaklıdır!"}},

// S57 – Sentez – Arazi alanı çok adımlı
{id:"m4d3x",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:3,type:"mc",
 question:"Bir çiftçinin 3 tarlası var:\n- 1. tarla: 45 m × 30 m\n- 2. tarla: 1. tarlanın 2 katı büyüklüğünde\n- 3. tarla: 800 m²\nToplam tarla alanı kaç m²'dir?",
 options:["A) 3 850","B) 4 150","C) 4 850","D) 5 400"],
 correct:2,
 wrongFeedback:"1. tarla: 45×30=1350. 2. tarla: 1350×2=2700. Toplam: 1350+2700+800=4850.",
 hint:"Adım 1: 1. tarla alanı=45×30. Adım 2: 2. tarla=2×1.tarla. Adım 3: Üçünü topla.",
 simplified:{question:"45 × 30 = ?",options:["A) 1 050","B) 1 150","C) 1 350","D) 1 450"],correct:2,hint:"45×3=135, bir sıfır ekle → 1350!"}},

// S58 – Değerlendirme – I,II,III – Grafik okuma
{id:"m6d3z",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:3,type:"mc",
 pasaj:"1. hafta: 840 TL — 2. hafta: 630 TL — 3. hafta: 810 TL (dükkan cirosu)",
 question:"I.  En düşük ciro 2. haftaya aittir.\nII. 1. ve 3. hafta toplamı 2. haftanın 2 katından fazladır.\nIII. 3 haftalık toplam ciro 2 300 TL'den fazladır.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,
 wrongFeedback:"I: En düşük 630=2.hafta ✓. II: 840+810=1650, 2×630=1260, 1650>1260 ✓. III: 840+630+810=2280, 2280<2300 → III yanlış. Doğru: I ve II.",
 hint:"III'ü kontrol et: 840+630+810=2280. 2280 > 2300 mü?",
 simplified:{question:"840 + 630 + 810 = ?",options:["A) 2 180","B) 2 280","C) 2 380","D) 2 080"],correct:1,hint:"840+630=1470, 1470+810=2280!"}},

// S59 – Sentez – Sütçü problemi çok adımlı
{id:"m3d3v",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:3,type:"mc",
 question:"Sütçü sabah 240 L süt topluyor.\n- 1/4'ünü peynir için ayırıyor.\n- Kalanın 1/3'ünü satıyor.\n- Geri kalanı dondurma için kullanıyor.\nDondurma için kaç litre süt kullanıyor?",
 options:["A) 80 lt","B) 100 lt","C) 120 lt","D) 160 lt"],
 correct:2,
 wrongFeedback:"Peynir: 240÷4=60. Kalan: 240–60=180. Satılan: 180÷3=60. Dondurma: 180–60=120.",
 hint:"Adım 1: Peynir=240÷4. Adım 2: Kalan=240–peynir. Adım 3: Satılan=kalan÷3. Adım 4: Dondurma=kalan–satılan.",
 simplified:{question:"240'ın 1/4'ü kaçtır?",options:["A) 40","B) 60","C) 80","D) 120"],correct:1,hint:"240÷4=60!"}},

// S60 – Sentez – Çiftçi + oran final soru
{id:"m10d3x",subject:"matematik",kazanim:110,kazanimName:"Değerlendirme ve Muhakeme",difficulty:3,type:"mc",
 question:"Bir sınıfta 30 öğrenci var. 2/5'i kız.\n'Kız sayısı 12'dir.' → I\n'Erkek sayısı kız sayısının 1,5 katıdır.' → II\n'Kız ve erkek sayısı farkı 6'dır.' → III\nKaç ifade doğrudur?",
 options:["A) Yalnız I","B) I ve III","C) I ve II","D) I, II ve III"],
 correct:3,
 wrongFeedback:"I: 30×2/5=12 ✓. Erkek=18. II: 18÷12=1,5 → Erkek=1,5×Kız ✓. III: 18–12=6 ✓. Üçü de doğru.",
 hint:"Kız=12, Erkek=18. II için: 18÷12=? III için: 18–12=?",
 simplified:{question:"18 ÷ 12 = ?",options:["A) 1","B) 1.5","C) 2","D) 3"],correct:1,hint:"18÷12=1,5. Erkek, kız sayısının 1,5 katı ✓"}}
];
const QBT = [

// ════════════════════════════════════════════════════════
// KAZANIM 1 – GERÇEK / MECAZ / TERİM ANLAM (10 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k1d1a", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:1, type:"mc",
  question:'"Elma" sözcüğü aşağıdaki cümlelerin hangisinde gerçek anlamda kullanılmıştır?',
  options:["A) Yanağı kıpkırmızı elmayı andırıyordu.","B) Bahçeden taze elma topladık.","C) O kız sınıfın elmasıdır.","D) Gözlerinde elma gibi bir parıltı vardı."],
  correct:1, wrongFeedback:"Gerçek anlam sözcüğün temel, ilk anlamıdır. Meyveyi doğrudan kasteder — başka bir şeyi çağrıştırmaz.",
  hint:"Hangi cümlede gerçekten bir meyve bahsi var?",
  simplified:{ question:'"Bahçeden taze elma topladık." cümlesinde elma ne anlama geliyor?', options:["A) Bir kız adı","B) Meyve","C) Renk","D) Oyun"], correct:1, hint:"Bahçeden toplanan şey meyve!" }},

{ subject:"turkce", id:"k1d1b", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:1, type:"mc",
  question:'"Kırmak" sözcüğü aşağıdaki cümlelerin hangisinde gerçek anlamda kullanılmıştır?',
  options:["A) Rekor kırmak için çok çalıştı.","B) Söylediklerin beni çok kırdı.","C) Elindeki bardağı yere düşürüp kırdı.","D) Soğuk hava kemiklerimi kırıyor."],
  correct:2, wrongFeedback:"Bardağın fiziksel olarak kırılması = gerçek anlam. Diğerleri mecaz: rekor kırmak (geçmek), kırmak (üzmek), kemik kırmak (üşütmek).",
  hint:"Fiziksel bir kırılma hangi cümlede gerçekten yaşanıyor?",
  simplified:{ question:"Bir bardak yere düşüp parçalandı. Bu 'kırmak' sözcüğünün hangi anlamı?", options:["A) Mecaz anlam","B) Gerçek anlam","C) Terim anlam","D) Zıt anlam"], correct:1, hint:"Fiziksel parçalanma = gerçek anlam!" }},

{ subject:"turkce", id:"k1d1c", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:1, type:"mc",
  question:'"Tatlı" sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?',
  options:["A) Annem çok tatlı bir pasta yaptı.","B) Bu elma gerçekten çok tatlıymış.","C) Bebeğin tatlı gülümsemesi herkesi mutlu etti.","D) Baklavayı çok tatlı buldum."],
  correct:2, wrongFeedback:"A, B, D'de tatlı tat duyusunu anlatıyor (gerçek). C'de tatlı gülümseme için kullanılmış — gülümsemenin tadı olmaz, bu mecaz!",
  hint:"Gülümsemenin gerçekten bir tadı olabilir mi?",
  simplified:{ question:'"Tatlı" sözcüğü bir tat duyusu dışında kullanılırsa bu hangi anlam olur?', options:["A) Gerçek anlam","B) Mecaz anlam","C) Terim anlam","D) Zıt anlam"], correct:1, hint:"Tat dışı kullanım = mecaz!" }},

{ subject:"turkce", id:"k1d2a", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:2, type:"mc",
  pasaj:"● Ok, bacağına saplandı.\n★ Dönüş yolunda kara saplanmışlar.\n■ Saplandığı fikirlerden onu sökemediler.",
  question:'"Saplanmak" sözcüğünün anlam özelliği hangi seçenekte doğru verilmiştir?\n\n       Gerçek Anlam     Mecaz Anlam',
  options:["A)    ●               ★ ■","B)    ★ ●             ■","C)    ■               ★ ●","D)    ★ ■             ●"],
  correct:0, wrongFeedback:"● Ok fiziksel olarak battı = gerçek anlam. ★ kara saplanmak ve ■ fikre saplanmak soyut durumlar = mecaz.",
  hint:"Ok gerçekten bir bacağa mı battı? Bu fiziksel mi soyut mu?",
  simplified:{ question:'"Ok bacağına saplandı." — saplanmak burada gerçek mi mecaz mı?', options:["A) Gerçek — fiziksel olarak battı","B) Mecaz — başka bir şeyi kastediyor"], correct:0, hint:"Gerçekten bir ok bacağa battı → fiziksel → gerçek anlam!" }},

{ subject:"turkce", id:"k1d2b", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde altı çizili sözcük TERİM anlamında kullanılmıştır?",
  options:["A) Sesin tonu bugün çok sert çıkıyor.","B) Bu keman notasını çalamıyorum.","C) Rengin tonu biraz açık kalmış.","D) Sana bir not bıraktım masaya."],
  correct:1, wrongFeedback:"B'de 'nota' müzik terimi olarak kullanılmış. A ve C'de 'ton' renk/ses şiddeti (genel kullanım), D'de 'not' kâğıt parçası (genel).",
  hint:"Müzik dersiyle ilgili olan hangi seçenek?",
  simplified:{ question:'"Keman notası" ifadesinde nota hangi alanda kullanılan bir terimdir?', options:["A) Matematik","B) Müzik","C) Beden eğitimi","D) Resim"], correct:1, hint:"Keman = müzik aleti → nota = müzik terimi!" }},

{ subject:"turkce", id:"k1d2c", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde altı çizili sözcük, parantez içindeki anlamıyla UYUMLU kullanılmıştır?",
  options:["A) Kapıyı açık bırakmıştı. (özgür)","B) Matematik dersinde açı çizdik. (iki doğrunun kesişmesiyle oluşan şekil)","C) Konuya açık bir şekilde yaklaştı. (parlak)","D) Gözleri açıldı, her şeyi gördü. (işaret eden)"],
  correct:1, wrongFeedback:"B'de 'açı' geometri terimi olarak doğru kullanılmış. A'da açık = kapalı değil (gerçek), C'de açık = net/anlaşılır (mecaz), D'de gözler açıldı = farkına vardı (mecaz).",
  hint:"Geometride açı ne demek? B'deki kullanım bunu mu karşılıyor?",
  simplified:{ question:'"Açı" sözcüğü matematik/geometride ne anlama gelir?', options:["A) İki doğrunun kesişmesiyle oluşan şekil","B) Işığın parlaklığı","C) Kapının durumu","D) Görmek"], correct:0, hint:"Geometride açı = iki doğrunun oluşturduğu köşe!" }},

{ subject:"turkce", id:"k1d3a", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:3, type:"mc",
  pasaj:"Sınavdan iyi not almış ve istediği okula yerleşmişti. Sonuçları görür görmez kanatlanmıştı. Ancak ailesinden ayrı yaşamak onu düşündürüyordu. Birden bir hüzün çöktü üzerine. Bu hüzün yüreğine işledi.",
  question:"Bu metinde gerçek anlamının DIŞINDA kullanılan sözcük sayısı kaçtır?",
  options:["A) 2","B) 3","C) 4","D) 5"],
  correct:1, wrongFeedback:"Mecaz sözcükler: kanatlanmak (sevinmek), çökmek (hüzün için — gerçekte çökmez), işlemek (yüreğe — gerçekte girmez) = 3 mecaz sözcük.",
  hint:"Her sözcüğü sorgula: Gerçekten kanat çıktı mı? Hüzün fiziksel olarak çöktü mü?",
  simplified:{ question:'"Hüzün çöktü üzerine." — çökmek burada gerçek mi mecaz mı?', options:["A) Gerçek — fiziksel olarak düştü","B) Mecaz — üzüntü bastı demek"], correct:1, hint:"Hüzün fiziksel bir şey değil → çökmek mecaz!" }},

{ subject:"turkce", id:"k1d3b", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:3, type:"mc",
  question:"Aşağıda numaralanmış cümlelerde altı çizili sözcüğün, parantez içinde verilen anlamına UYGUN KULLANILMADIĞI iki cümle hangisidir?\n\nI. Herkese karşı iyi niyetli olduğu davranışlarından belli. (ortada olan)\nII. Her gün ne kadar dolu olduğundan yakınıp duruyordu. (meşgul)\nIII. Ölçüyü aşmadan davranman senin yararına olacaktır. (değer, itibar)\nIV. Ses sanatçısı güçlü yorumuyla şarkıyı güzelleştirdi. (icra, seslendirme)",
  options:["A) I ve II","B) I ve IV","C) II ve III","D) III ve IV"],
  correct:3, wrongFeedback:"III'te ölçü = sınır/denge (değer/itibar değil). IV'te yorum = seslendirme (belli bir görüşe göre açıklama değil). I ve II uygun.",
  hint:"III'te 'ölçü' gerçekten 'değer/itibar' mı demek? IV'te 'yorum' sadece görüş mü?",
  simplified:{ question:'"Ölçüyü aşma" ifadesinde ölçü ne demek?', options:["A) Değer, itibar","B) Sınır, denge, had","C) Bir kap ölçüsü","D) Değerlendirme"], correct:1, hint:"Ölçüyü aşma = haddi aşma, sınırı geçme → sınır/denge demek!" }},

{ subject:"turkce", id:"k1d3c", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:3, type:"mc",
  pasaj:"Ali kitap okurken sayfalar arasına kayboldu. Gözleri satırları takip ederken zihninde bambaşka bir dünya canlandı. Hikâyenin kahramanıyla neredeyse bütünleşti. Saat kaça geldiğini bile fark etmedi.",
  question:"Bu metinde 'kaybolmak' sözcüğü hangi anlamda kullanılmış ve bu anlam türünün tanımı nedir?",
  options:["A) Gerçek anlam — fiziksel olarak kayboluyor","B) Mecaz anlam — sayfalar arasında gerçekten kaybolmak mümkün değil; derin okumayı anlatıyor","C) Terim anlam — edebiyatta kullanılan özel bir anlam","D) Zıt anlam — kaybolmak yerine bulunmak"],
  correct:1, wrongFeedback:"Sayfalar arasına fiziksel olarak kaybolmak mümkün değil. Derin okumaya dalmayı anlatan bir mecaz.",
  hint:"Gerçekten sayfaların içine mi girdi? Yoksa okumaya o kadar daldı mı?",
  simplified:{ question:'"Kitaba daldı" cümlesinde gerçekten denize mi daldı?', options:["A) Evet, gerçekten suya daldı","B) Hayır, kitabı çok dikkatli okudu — mecaz"], correct:1, hint:"Dalmak = konsantre olmak → mecaz!" }},

{ subject:"turkce", id:"k1d2d", kazanim:1, kazanimName:"Gerçek, Mecaz ve Terim Anlam", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde 'ağır' sözcüğü mecaz anlamda kullanılmıştır?",
  options:["A) Bu bavul çok ağır, taşıyamıyorum.","B) Söylediği sözler çok ağırdı.","C) Masa çok ağır geldi bize.","D) Çantam bugün çok ağır."],
  correct:1, wrongFeedback:"B'de sözlerin 'ağırlığı' fiziksel değil — sert, incitici söz demek. Bu mecaz kullanım. A, C, D'de gerçek ağırlık (kg) kastediliyor.",
  hint:"Sözlerin kilogramı ölçülebilir mi?",
  simplified:{ question:'"Sözleri çok ağırdı" — ağır burada ne anlama geliyor?', options:["A) Kilogramı fazlaydı","B) Sert, incitici, ağır basındı","C) Yavaş söylendi","D) Uzun cümlelerdi"], correct:1, hint:"Söz kilogramla ölçülmez → mecaz!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 2 – OKUMA ANLAMA (15 soru, uzun metinler dahil)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k2d1a", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:1, type:"mc",
  pasaj:"Zeynep her pazar sabahı parkta koşu yapar. Koşudan sonra bankta oturup kitap okur. Geçen pazar parkta yaralı bir kedi yavrusu buldu. Veteriner, kedinin bir hafta içinde iyileşeceğini söyledi.",
  question:"Bu metne göre aşağıdakilerden hangisi DOĞRUDUR?",
  options:["A) Zeynep kediyi eve götürdü.","B) Veteriner kedi iyileşemez dedi.","C) Zeynep pazar sabahları parka gider.","D) Kedi parkın dışında bulundu."],
  correct:2, wrongFeedback:'"Her pazar sabahı parkta koşu yapar" doğrudan metinde yazıyor. Diğerleri metne aykırı.',
  hint:"Her şıkkı metinle karşılaştır. Hangisi metinde aynen yazıyor?",
  simplified:{ question:'"Her pazar sabahı parkta koşu yapar." Bu cümle kim için doğru?', options:["A) Kedi","B) Zeynep","C) Veteriner","D) Annesi"], correct:1, hint:"Zeynep her pazar parka gidiyor!" }},

{ subject:"turkce", id:"k2d1b", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:1, type:"mc",
  pasaj:P.p1,
  question:"Bu metne göre Ayşe'nin büyükannesiyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
  options:["A) Büyükanné şehirde yaşar.","B) Büyükanné her mevsim bahçeyle ilgilenir.","C) Büyükanné Ayşe'ye bahçenin sırrını söyledi.","D) Büyükanné domatesleri marketten alır."],
  correct:2, wrongFeedback:'"Emekle ve sevgiyle yetiştirildiği için" dedi — bu söz metnin son cümlesi ve soruyu cevaplıyor.',
  hint:"Büyükanné Ayşe'nin sorusuna ne cevap verdi?",
  simplified:{ question:"Büyükanné domateslerin neden lezzetli olduğunu ne ile açıkladı?", options:["A) İyi toprak","B) Emek ve sevgi","C) Gübre","D) Yağmur"], correct:1, hint:"Son cümlede söylüyor: emek ve sevgi!" }},

{ subject:"turkce", id:"k2d1c", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:1, type:"mc",
  pasaj:P.p3,
  question:"Bu metne göre Mert kıyıya nasıl ulaşmıştır?",
  options:["A) Yüzerek kıyıya çıktı.","B) Fener ışığını görerek doğrultusunu buldu.","C) Hasan onu tekneyle kurtardı.","D) Rüzgâr onu kıyıya itti."],
  correct:1, wrongFeedback:'"Kıyıdan bir fener ışığı görünce doğrultusunu buldu" — metin bunu açıkça yazıyor.',
  hint:"Mert'in yönünü bulmasını ne sağladı?",
  simplified:{ question:"Mert karanlıkta nasıl yönünü buldu?", options:["A) Yıldızlara baktı","B) Fener ışığı gördü","C) Bağırdı, biri duydu","D) Dalgalar onu itti"], correct:1, hint:"Fenerin ışığı yol gösterdi!" }},

{ subject:"turkce", id:"k2d2a", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:2, type:"mc",
  pasaj:"Tarık Buğra Türk edebiyatının önemli yazarlarından biridir. Çocukluğunu Akşehir'de geçirmiş, sonra İstanbul'a yerleşmiştir. 'Küçük Ağa' romanıyla kurtuluş mücadelesini kaleme almıştır. Hem roman hem tiyatro alanında eser vermiştir.",
  question:"Tarık Buğra hakkında metinden hangi bilgiye ulaşILAMAZ?",
  options:["A) Çocukluğunu nerede geçirdiğine","B) Hangi romanda kurtuluşu anlattığına","C) Kaç eser yazdığına","D) Hangi alanlarda eser verdiğine"],
  correct:2, wrongFeedback:"Metinde eser sayısı belirtilmiyor. A, B, D'deki bilgiler metinde var.",
  hint:'"Ulaşılamaz" = metinde YOK. Her şıkkı metinde ara.',
  simplified:{ question:'"Kaç eser yazdığı" bilgisi metinde var mı?', options:["A) Evet","B) Hayır"], correct:1, hint:"Metin 'pek çok eser' diyor ama sayı vermiyor!" }},

{ subject:"turkce", id:"k2d2b", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:2, type:"mc",
  pasaj:P.p2,
  question:"Bu metne göre arılar hakkında aşağıdakilerden hangisi YANLIŞTIR?",
  options:["A) Bir işçi arı ömrü boyunca yarım çay kaşığı bal üretir.","B) Arılar çiçeklerin tozlaşmasına yardımcı olur.","C) Arıların yokluğunda tüm canlılar hemen yok olur.","D) Tarım ilaçları arı nüfusunu tehdit ediyor."],
  correct:2, wrongFeedback:'"Pek çok meyve ve sebze yetişemez" diyor — ama "tüm canlılar hemen yok olur" demiyor. Bu abartılmış ve metinde böyle yok.',
  hint:"Her şıkkı dikkatlice metinle karşılaştır. 'Hemen yok olur' ifadesi metinde var mı?",
  simplified:{ question:"Metin arılar olmadan ne olur diyor?", options:["A) Tüm canlılar hemen ölür","B) Pek çok meyve ve sebze yetişemez","C) Hiçbir şey değişmez","D) Balık nüfusu azalır"], correct:1, hint:"Metin 'pek çok meyve ve sebze yetişemez' diyor, fazlasını söylemiyor!" }},

{ subject:"turkce", id:"k2d2c", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:2, type:"mc",
  pasaj:P.p4,
  question:"Kapadokya hakkında bu metinden hangisi ÇIKARILAMAZ?",
  options:["A) UNESCO listesinde yer aldığı","B) Peri bacalarının volkanik kökenli olduğu","C) En fazla ziyaretçinin Avrupa'dan geldiği","D) Bölgede yeraltı yerleşim yerleri bulunduğu"],
  correct:2, wrongFeedback:"Ziyaretçilerin nereden geldiği metinde belirtilmiyor. Yalnızca 'milyonlarca turist gelir' deniyor.",
  hint:"Hangi bilgi metinde yok? Ziyaretçilerin nereden geldiği yazıyor mu?",
  simplified:{ question:"Metinde turistlerin hangi ülkeden geldiği söyleniyor mu?", options:["A) Evet, Avrupa'dan","B) Hayır, nereden geldikleri belirtilmiyor"], correct:1, hint:"Metin sadece 'milyonlarca turist' diyor, ülke belirtmiyor!" }},

{ subject:"turkce", id:"k2d3a", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:3, type:"mc",
  pasaj:P.p2,
  question:"Bu metnin tamamı dikkate alındığında yazarın arılar hakkındaki kaygısı nedir?",
  options:["A) Arıların ürettiği balın miktarının azalması","B) Arı nüfusunun tehlike altına girmesi ve bunun doğaya etkisi","C) Arı sokmalarının insanlara verdiği zarar","D) Bal üretiminin çevreye etkisi"],
  correct:1, wrongFeedback:"Son cümle: 'tarım ilaçları ve iklim değişikliği nedeniyle arı nüfusu tehlike altına girmiştir.' Bu metnin son ve en önemli mesajı.",
  hint:"Metnin son cümlesi ne diyor? Yazar asıl kaygısını genelde sonunda verir.",
  simplified:{ question:'"Arı nüfusu tehlike altına girmiştir." — Bu cümle metnin neresinde ve neden önemli?', options:["A) Başında, dikkat çekmek için","B) Sonunda, asıl mesaj olarak","C) Ortasında, geçiş olarak","D) Dipnotta, ek bilgi olarak"], correct:1, hint:"Metnin sonundaki cümle yazarın asıl mesajını taşır!" }},

{ subject:"turkce", id:"k2d3b", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:3, type:"mc",
  pasaj:P.p5,
  question:"Bu metinden aşağıdaki çıkarımların hangisi YAPILABILIR?",
  options:["A) Ormansızlaşma sorunu çözülmüştür.","B) Ağaç dikmek gelecek nesiller için zorunludur.","C) İklim değişikliği ormanları etkilemez.","D) Orman yangınları doğal sebeplerden kaynaklanır."],
  correct:1, wrongFeedback:'"Ağaç dikmenin ve ormanları korumanın gelecek nesiller için zorunlu olduğunu vurgulamaktadır" — bu doğrudan metinde yazıyor.',
  hint:"Her şıkkı metinde ara. Doğrudan metinden desteklenen hangisi?",
  simplified:{ question:"Metinde 'Ağaç dikmek neden önemli?' sorusuna cevap var mı?", options:["A) Evet, gelecek nesiller için zorunlu deniyor","B) Hayır, bu konuya değinilmiyor"], correct:0, hint:"Son cümle tam olarak bunu söylüyor!" }},

{ subject:"turkce", id:"k2d3c", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:3, type:"mc",
  pasaj:P.p3,
  question:"Hasan'ın son sözü olan 'Karanlıkta bile bir ışık yeter.' cümlesinin bu hikâyedeki işlevi nedir?",
  options:["A) Fenerlerin ne kadar parlak olduğunu açıklıyor.","B) Hikâyenin ana mesajını simgesel bir şekilde özetliyor.","C) Hasan'ın mesleği hakkında bilgi veriyor.","D) Mert'in başka bir sefere çıkmaması gerektiğini uyarıyor."],
  correct:1, wrongFeedback:"Bu cümle sadece feneri değil, umudun ve küçük bir yardımın bile büyük fark yaratacağını anlatıyor. Ana mesajı özetleyen simgesel bir son.",
  hint:"'Bir ışık yeter' sadece fener mi yoksa başka bir şeyi mi simgeliyor?",
  simplified:{ question:'"Karanlıkta bir ışık yeter" gerçekten sadece fener hakkında mı?', options:["A) Evet, sadece fener","B) Hayır, küçük bir umut bile yeter — mesajı özetliyor"], correct:1, hint:"Atasözü gibi bir mesaj veriyor: küçük bir umut büyük fark yaratır!" }},

{ subject:"turkce", id:"k2d1d", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:1, type:"mc",
  pasaj:P.p6,
  question:"Zeynep ile Can'ın ORTAK özelliği nedir?",
  options:["A) İkisi de edebiyat dersini sever.","B) İkisi de okulda başarılıdır.","C) İkisi de oyuncak söker.","D) İkisi de sabırlıdır."],
  correct:1, wrongFeedback:'"İkisi de okulda başarılıydı" — bu metin doğrudan söylüyor.',
  hint:'"İkisi de..." diye başlayan cümleye bak!',
  simplified:{ question:'"İkisi de okulda başarılıydı." Bu cümle kim hakkında?', options:["A) Sadece Zeynep","B) Sadece Can","C) Her ikisi"], correct:2, hint:"İkisi de = her ikisi = ortak özellik!" }},

{ subject:"turkce", id:"k2d2d", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:2, type:"mc",
  pasaj:P.p4,
  question:"Peri bacalarının oluşumu hakkında metne göre hangisi DOĞRUDUR?",
  options:["A) İnsanların el emeğiyle oluşturulmuştur.","B) Depremler sonucunda meydana gelmiştir.","C) Volkanik kökenli taşın doğa güçleriyle aşınmasıyla oluşmuştur.","D) Yüzey suları tarafından oyularak şekillenmiştir."],
  correct:2, wrongFeedback:'"Volkanik patlamalar sonucu oluşan tüf taşının rüzgâr ve yağmur tarafından aşındırılmasıyla" — bu tam tanım.',
  hint:"Metinde peri bacalarının nasıl oluştuğu ayrıntılı anlatılıyor. Hangi iki doğa gücü var?",
  simplified:{ question:'"Tüf taşı rüzgâr ve yağmur tarafından aşındırıldı." Bu ne demek?', options:["A) Taş insanlar tarafından kesildi","B) Taş doğa güçleri tarafından yavaşça şekillendi","C) Taş depremle parçalandı","D) Taş ısıyla eridi"], correct:1, hint:"Aşındırmak = yavaşça şekillendirmek, doğa güçleri bunu yaptı!" }},

{ subject:"turkce", id:"k2d3d", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:3, type:"mc",
  pasaj:P.p7,
  question:"Bu metne göre geleneksel Türk el sanatlarının ortak özelliği nedir?",
  options:["A) Hepsi aynı malzemeyle üretilir.","B) Hepsi asırlardır nesilden nesile aktarılmıştır.","C) Hepsi yalnızca müzelerde sergilenmektedir.","D) Hepsi yalnızca İstanbul'da yapılır."],
  correct:1, wrongFeedback:'"Bu sanatlar asırlardır nesilden nesile aktarılmıştır." cümlesi tüm sanatlar için geçerli ortak özellik.',
  hint:"Metnin sonlarında tüm sanatlar için söylenen ortak bir cümle var. Hangisi?",
  simplified:{ question:'"Bu sanatlar asırlardır nesilden nesile aktarılmıştır." — Kaç sanat için bu geçerli?', options:["A) Sadece ebru","B) Sadece kilim","C) Hepsi — ebru, çini ve kilim"], correct:2, hint:"'Bu sanatlar' deniyor — çoğul! Hepsi için geçerli!" }},

{ subject:"turkce", id:"k2d2e", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:2, type:"mc",
  pasaj:P.p1,
  question:"Ayşe'nin domatesleri en çok sevmesinin nedeni nedir?",
  options:["A) Domateslerin en büyük sebze olması","B) Büyükannesinin elleriyle birlikte toplaması","C) Domateslerin en tatlı meyve olması","D) Büyükannenin domatesleri marketten alması"],
  correct:1, wrongFeedback:'"Onları büyükannesinin elleriyle toplamak ayrı bir zevkti" — bu lezzetin kaynağı değil sevgi ve birliktelik.',
  hint:"Neden en çok domatesleri sevdiğini metin açıklıyor. Hangi cümle?",
  simplified:{ question:"Ayşe domatesleri neden en çok sevdi?", options:["A) En lezzetli sebzeydi","B) Büyükannesinin elleriyle birlikte topladı","C) En büyük sebzeydi","D) Markette ucuzdu"], correct:1, hint:"Birlikte toplamak = sevgi → o yüzden seviyor!" }},

{ subject:"turkce", id:"k2d3e", kazanim:2, kazanimName:"Okuduğu Metni Anlama", difficulty:3, type:"mc",
  pasaj:P.p5,
  question:"Bu metnin yazılma amacı aşağıdakilerden hangisidir?",
  options:["A) Ormanların tarihini anlatmak","B) Okuyucuyu orman korumaya teşvik etmek","C) Yangın söndürme yöntemlerini açıklamak","D) Ağaç türleri hakkında bilgi vermek"],
  correct:1, wrongFeedback:"Metinde sorun (orman azalıyor) ve çözüm (ağaç dik, koru) verilmiş. Bu yapı okuyucuyu harekete geçirmeyi amaçlar.",
  hint:"Metin sadece bilgi mi veriyor, yoksa seni bir şey yapmaya da teşvik ediyor mu?",
  simplified:{ question:'"Ağaç dikmenin ve ormanları korumanın zorunlu olduğunu vurgulamaktadır." Bu cümle ne işe yarıyor?', options:["A) Bilgi veriyor","B) Okuyucuyu korumaya teşvik ediyor","C) Bir hikâye anlatıyor","D) Soru soruyor"], correct:1, hint:"Vurgulamak = önemini anlatmak, insanları ikna etmek!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 3 – BÜYÜK HARF VE NOKTALAMA (12 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k3d1a", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:1, type:"mc",
  question:'"Bugün hava çok güzel( )" — Sonuna hangi işaret gelmelidir?',
  options:["A) ?","B) !","C) .","D) ,"],
  correct:2, wrongFeedback:"Haber bildiren cümleler NOKTA ile biter. Soru işareti soru, ünlem coşku/emir için.",
  hint:"Bu cümle soru mu soruyor yoksa bilgi mi veriyor?",
  simplified:{ question:"Haber bildiren cümle sonuna ne koyarız?", options:["A) ?","B) !","C) .","D) ,"], correct:2, hint:"Haber = Nokta!" }},

{ subject:"turkce", id:"k3d1b", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:1, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde büyük harf kullanımı DOĞRUDUR?",
  options:["A) geçen yaz antalya'ya gittik.","B) Geçen yaz Antalya'ya gittik.","C) Geçen yaz antalya'ya Gittik.","D) geçen Yaz Antalya'ya gittik."],
  correct:1, wrongFeedback:"Cümle başı ve özel isimler (şehir adları) büyük harfle başlar. Yalnızca B'de her ikisi de doğru.",
  hint:"Cümle başı + şehir adı = her ikisi de büyük harf.",
  simplified:{ question:"Şehir adları büyük harfle mi küçük harfle mi yazılır?", options:["A) Küçük: antalya","B) Büyük: Antalya"], correct:1, hint:"Özel isimler (şehir, kişi adları) her zaman büyük!" }},

{ subject:"turkce", id:"k3d1c", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:1, type:"mc",
  question:"Ay adları nasıl yazılır?",
  options:["A) Küçük harfle: ocak, şubat, mart","B) Büyük harfle: Ocak, Şubat, Mart","C) Tamamen büyük: OCAK, ŞUBAT","D) Fark etmez"],
  correct:1, wrongFeedback:"Ay adları özel isim sayıldığı için büyük harfle başlar: Ocak, Şubat, Mart, Nisan...",
  hint:"Ocak, Şubat, Mart... Bunlar özel isim mi?",
  simplified:{ question:'"ocak" mı yoksa "Ocak" mı doğru yazılış?', options:["A) ocak","B) Ocak"], correct:1, hint:"Ay adı = özel isim → büyük harf!" }},

{ subject:"turkce", id:"k3d2a", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:2, type:"punctuation_count",
  question:"Öğretmen tahtaya şu cümleleri yazmış, noktalama işaretlerini boş bırakmıştır. Her doğru için bir yıldız ★ verilecek. Hangi öğrencinin defterinde daha çok yıldız vardır?",
  sentences:[
    { text:"Eyvah, ütünün fişini takmayı unuttum", correct:"!" },
    { text:"Senin de yazdığını bilmiyordum", correct:"." },
    { text:"Aradı mı bizi", correct:"?" },
    { text:"İtfaiye sirenlerini çalarak gidiyordu", correct:"." }
  ],
  students:[
    { name:"Ayşe", icon:"👧", marks:["!","?","?","!"] },
    { name:"Emre", icon:"👦", marks:["!","?","!","!"] },
    { name:"Berke", icon:"👦", marks:[".",".",".","!"] },
    { name:"Ceylin", icon:"👧", marks:["!",".","?","."] }
  ],
  options:["A) Ayşe","B) Emre","C) Berke","D) Ceylin"],
  correct:3, wrongFeedback:"Doğru işaretler: ! . ? . — Ceylin: ! . ? . = 4 doğru. Ayşe: 2 doğru. Emre: 2 doğru. Berke: 1 doğru.",
  hint:"Önce doğruları bul: Eyvah=!, bilmiyordum=., Aradı mı=?, gidiyordu=. Sonra her öğrenciyi say.",
  simplified:{ question:'"Aradı mı bizi" — sonuna neden ? gelir?', options:["A) Heyecanlı","B) 'Mı' sorusu var","C) Haber bildiriyor","D) Emir veriyor"], correct:1, hint:'"Mı" eki = soru = ? !' }},

{ subject:"turkce", id:"k3d2b", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde noktalama işareti YANLIŞ kullanılmıştır?",
  options:["A) Marketten elma, armut ve portakal aldık.","B) Ankara'da hava çok soğuktu.","C) Bugün tatil mi.","D) Öğretmenimiz \"Ders çalışın\" dedi."],
  correct:2, wrongFeedback:'"Bugün tatil mi?" — soru cümlesi soru işareti ile bitmeli. Nokta yanlış.',
  hint:"C seçeneğine bak: 'tatil mi' — soru mu?",
  simplified:{ question:'"Bugün tatil mi" — sonuna ne gelir?', options:["A) .","B) ?","C) !","D) ,"], correct:1, hint:"Soru soruyorsa → ?" }},

{ subject:"turkce", id:"k3d2c", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:2, type:"mc",
  question:'"Öğretmenimiz ___ Ders çalışmadan başarılı olamazsınız ___ dedi."\n\nBoş yerlere sırasıyla hangi işaretler gelmelidir?',
  options:["A) (:) ve (.)","B) (,) ve (.)","C) (\") ve (\")","D) (;) ve (!)"],
  correct:2, wrongFeedback:"Doğrudan konuşma alıntısı tırnak işaretleri içine alınır. Başına ve sonuna \" gelir.",
  hint:"Öğretmenin söylediği sözler doğrudan aktarılıyor. Doğrudan aktarma nasıl işaretlenir?",
  simplified:{ question:"Birisinin söylediği sözleri doğrudan aktarmak için hangi işaret kullanılır?", options:["A) Nokta","B) Tırnak işareti \"\"","C) Virgül","D) Noktalı virgül"], correct:1, hint:"Doğrudan alıntı = tırnak işareti!" }},

{ subject:"turkce", id:"k3d2d", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde kesme işareti (') DOĞRU kullanılmıştır?",
  options:["A) Güzel'in bahçesi çiçek doluydu.","B) İstanbul'da çok güzel yerler var.","C) Atatürk'ün hayatı çok ilham verici'dir.","D) kitabı'nı masaya bıraktı."],
  correct:1, wrongFeedback:"B'de İstanbul özel isim + 'da eki → kesme işareti doğru. A'da güzel özel isim değil sıfat. C'de -dir ekinden önce kesme gerekmez. D'de kitabı özel isim değil.",
  hint:"Kesme işareti özel isimlere ek geldiğinde kullanılır. Özel isim hangisi?",
  simplified:{ question:"Özel isimlere (kişi adı, şehir adı) ek geldiğinde ne kullanılır?", options:["A) Virgül","B) Kesme işareti '","C) Nokta","D) Hiçbir şey"], correct:1, hint:"Ankara'da, Ali'nin, İstanbul'un — hep kesme işareti!" }},

{ subject:"turkce", id:"k3d3a", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:3, type:"word_order",
  question:"Aşağıdaki kelime gruplarından hangisini anlamlı cümle yapınca sonuna NOKTA (.) koyarız?",
  options:['A) "nedir – anlamı – kelimenin – bu"','B) "dersinden – Türkçe – varmış – yarın – sınav"','C) "de – yemek – ister – misin – sen"','D) "ceket – kaç – beyaz – liradır – şu"'],
  correct:1, wrongFeedback:'B: "Yarın Türkçe dersinden sınav varmış." → haber bildiriyor → Nokta. A ve D soru, C de soru.',
  hint:"Her grubu düzenle, cümle türünü belirle. Bilgi veren cümle → nokta.",
  simplified:{ question:'"Yarın Türkçe dersinden sınav varmış." — sonuna ne gelir?', options:["A) ?","B) !","C) .","D) ..."], correct:2, hint:"Haber veriyor → Nokta!" }},

{ subject:"turkce", id:"k3d3b", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:3, type:"mc",
  pasaj:"I.  29 ekim cumhuriyet bayramı'dır.\nII. Bugün türkçe dersinde \"küçük prens\" adlı kitabı işledik.\nIII. Ali'nin annesi İstanbul'dan geldi.\nIV. Merhaba, Nasılsın?",
  question:"Numaralanmış cümlelerin hangisi büyük harf ve noktalama açısından TAMAMEN doğrudur?",
  options:["A) Yalnız III","B) III ve IV","C) I ve II","D) Yalnız IV"],
  correct:0, wrongFeedback:"I: 'ekim' ve 'cumhuriyet' büyük olmalı. II: 'türkçe' ve 'küçük prens' büyük olmalı. IV: 'Nasılsın' önceki cümleyle bağlantılı, ayrı büyük harf hata. III: Özel isimler ve kesme işareti doğru ✓",
  hint:"I'de ay adı, II'de dil adı ve kitap adı. Bunlar büyük mü küçük mü yazılmalı?",
  simplified:{ question:'"ekim" ayı adı olarak nasıl yazılır?', options:["A) ekim","B) Ekim"], correct:1, hint:"Ay adı = özel isim → Büyük: Ekim!" }},

{ subject:"turkce", id:"k3d3c", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:3, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde virgül DOĞRU yerde kullanılmıştır?",
  options:["A) Ahmet, Mehmet ve Ali birlikte geldi.","B) Ahmet Mehmet, ve Ali birlikte geldi.","C) Ahmet Mehmet ve, Ali birlikte geldi.","D) Ahmet Mehmet ve Ali, birlikte geldi."],
  correct:0, wrongFeedback:"Sıralama virgülü: son iki öğe arasına 've' konulur, 've'den önce virgül gerekmez; diğer öğeler aralarına virgül alır. A doğru yapı.",
  hint:"Ahmet, Mehmet ve Ali — virgüller nereye gelir?",
  simplified:{ question:'"Elma, armut ve kiraz" — bu dizilişte virgüller doğru mu?', options:["A) Evet, doğru","B) Hayır, virgül 've'den sonra gelmeli"], correct:0, hint:"Elma, armut (virgül) ve kiraz — 've' öncesine virgül gerekmez!" }},

{ subject:"turkce", id:"k3d2e", kazanim:3, kazanimName:"Büyük Harf ve Noktalama İşaretleri", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerden hangisinde iki nokta (:) DOĞRU kullanılmıştır?",
  options:["A) Bugün: hava güzeldi.","B) Öğretmen dedi ki: Ders çalışın.","C) Elma: kırmızıdır.","D) Bahçede: çiçekler var."],
  correct:1, wrongFeedback:"İki nokta açıklamadan veya alıntıdan önce gelir. B'de öğretmenin sözünden önce doğru kullanım.",
  hint:"İki nokta genellikle 'dedi ki, şunlar vardır, örneğin' gibi ifadelerden sonra gelir.",
  simplified:{ question:"İki nokta (:) ne zaman kullanılır?", options:["A) Her isimden sonra","B) Açıklama veya alıntıdan önce","C) Her fiilden önce","D) Sadece matematik sorularında"], correct:1, hint:"Açıklama gelecek → iki nokta!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 4 – DİNLEDİĞİNİ ANLAMA (8 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k4d1a", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:1, type:"mc",
  pasaj:"Geleneksel Türk okçuluğu yüzyıllardır süregelen bir spor dalıdır. Osmanlı döneminde okçuluk yarışmaları büyük ilgi görürdü. Bugün de birçok genç bu spora ilgi duymaktadır. Okçuluk sadece güç değil; sabır, odaklanma ve nefes kontrolü de gerektirir.",
  question:"Bu metni dinleyen biri okçuluk hakkında aşağıdakilerden hangisini söyleyebilir?",
  options:["A) Okçuluk Cumhuriyet döneminde başlamıştır.","B) Okçuluk yalnızca fiziksel güç ister.","C) Okçuluk köklü bir Türk geleneğidir.","D) Okçuluk artık kimse ilgilenmez."],
  correct:2, wrongFeedback:'"Yüzyıllardır süregelen" ve "Osmanlı döneminde" ifadeleri köklü gelenek olduğunu gösteriyor.',
  hint:"'Yüzyıllardır' ve 'Osmanlı' sözcükleri hangi şıkkı destekliyor?",
  simplified:{ question:"Yüzyıllardır süregelen ne demek?", options:["A) Yeni başladı","B) Çok eski, köklü bir gelenek","C) Az kişi biliyor","D) Sadece Osmanlı'da vardı"], correct:1, hint:"Yüzyıllar = çok eski → köklü gelenek!" }},

{ subject:"turkce", id:"k4d1b", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:1, type:"mc",
  pasaj:P.p3,
  question:"Bu metni dinleyen biri Hasan hakkında aşağıdakilerden hangisini söyleyebilir?",
  options:["A) Hasan o gece yalnızca Mert'i kurtardı.","B) Hasan pek çok gemiciyi kurtardı.","C) Hasan Mert'in babasıydı.","D) Hasan tekneyle denize açıldı."],
  correct:1, wrongFeedback:'"O gece pek çok gemiciyi kurtarmıştı" — metin bunu açıkça yazıyor.',
  hint:"Hasan sadece Mert'i mi kurtardı? Metne bak.",
  simplified:{ question:"Hasan kaç kişiyi kurtardı?", options:["A) Yalnızca Mert'i","B) Pek çok gemiciyi"], correct:1, hint:"Pek çok = birden fazla!" }},

{ subject:"turkce", id:"k4d2a", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:2, type:"mc",
  pasaj:"Küçük Elif her akşam yatmadan önce annesiyle birlikte kitap okurdu. Bir gece annesi 'Bu gece sen bana bir hikâye anlat.' dedi. Elif çok heyecanlandı. Gün içinde parkta gördüğü kelebekleri, rengarenk çiçekleri ve uçurtma uçuran çocukları anlattı. Annesi 'Sen harika bir hikâyeci olacaksın!' dedi.",
  question:"Bu metni dinleyen biri Elif hakkında aşağıdakilerden hangisini ÇIKARAMAZ?",
  options:["A) Her gece annesiyle vakit geçiriyor.","B) Gözlem yeteneği güçlüdür.","C) İleride yazar olmayı planlıyor.","D) Annesinin görevinden heyecan duydu."],
  correct:2, wrongFeedback:"'Yazar olmayı planlıyor' — metinde böyle bir bilgi yok. Annesinin 'hikâyeci olacaksın' sözü bir tahmin/övgü, Elif'in planı değil.",
  hint:"Elif ileride yazar olmak istediğini söylüyor mu? Yoksa annesi mi söylüyor?",
  simplified:{ question:"Annesi 'harika bir hikâyeci olacaksın' dedi. Bu Elif'in planı mı?", options:["A) Evet, Elif bunu planlıyor","B) Hayır, annesinin övgü sözü"], correct:1, hint:"Annesi söylüyor, Elif bir plan açıklamıyor → çıkarılamaz!" }},

{ subject:"turkce", id:"k4d2b", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:2, type:"mc",
  pasaj:P.p4,
  question:"Bu metni dinleyen biri Kapadokya hakkında aşağıdakilerden hangisini SÖYLEYEMEZ?",
  options:["A) UNESCO Dünya Mirası listesinde yer aldığını","B) Peri bacalarının volkanik kökenli olduğunu","C) En fazla ziyaretçinin Almanya'dan geldiğini","D) Yeraltı yerleşim yerlerinin bulunduğunu"],
  correct:2, wrongFeedback:"Ziyaretçilerin nereden geldiği metinde belirtilmiyor. Yalnızca 'milyonlarca turist gelir' deniyor.",
  hint:"Hangi bilgi metinde yok?",
  simplified:{ question:"Turistlerin hangi ülkeden geldiği metinde söyleniyor mu?", options:["A) Evet","B) Hayır"], correct:1, hint:"Metin 'milyonlarca turist' diyor, ülke belirtmiyor!" }},

{ subject:"turkce", id:"k4d3a", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:3, type:"mc",
  pasaj:"Balıkçı Hasan her sabah denize açılırdı. Ağlarını atardı, beklerdi. Yıllar geçmişti; balık azalmış, geçim zorlaşmıştı. Ama Hasan denizden vazgeçemiyordu. 'Deniz benim evim.' diyordu hep. Bir gün torunu 'Dede, neden başka iş yapmıyorsun?' diye sordu. Hasan denize bakarak gülümsedi, 'Çünkü ben balığı avlamıyorum, denizle konuşuyorum.' dedi.",
  question:"Bu metni dinleyen biri Hasan'ın tutumu hakkında hangisini söyleyebilir?",
  options:["A) Hasan balık azaldığı için denizden soğumuştur.","B) Hasan için denizcilik yalnızca geçim kaynağıdır.","C) Hasan denize olan bağlılığını maddi kaygıların üstünde tutar.","D) Hasan torununun sorusundan rahatsız olmuştur."],
  correct:2, wrongFeedback:'"Deniz benim evim" ve "denizle konuşuyorum" — duygusal bağ, maddi zorluktan daha güçlü.',
  hint:"'Denizle konuşuyorum' ne anlama geliyor? Sadece para için mi gidiyor?",
  simplified:{ question:'"Denizle konuşuyorum" — Hasan denize sadece para için mi gidiyor?', options:["A) Evet, sadece para için","B) Hayır, duygusal bağı var"], correct:1, hint:"Konuşmak = duygusal bağ → para değil, sevgi!" }},

{ subject:"turkce", id:"k4d2c", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:2, type:"mc",
  pasaj:P.p2,
  question:"Bu metni dinleyen biri arılarla ilgili aşağıdaki sonuçlardan hangisine ulaşAMAZ?",
  options:["A) Arıların ürettiği bal miktarının az olduğuna","B) Arıların tozlaşmaya katkı sağladığına","C) Arı nüfusunun arttığına","D) Tarım ilaçlarının arıları tehdit ettiğine"],
  correct:2, wrongFeedback:"Metin 'arı nüfusu tehlike altına girmiştir' diyor — azaldığını söylüyor, arttığını değil.",
  hint:"Metin arı nüfusu hakkında ne diyor? Artıyor mu azalıyor mu?",
  simplified:{ question:'"Arı nüfusu tehlike altına girmiştir." Arı sayısı artıyor mu azalıyor mu?', options:["A) Artıyor","B) Azalıyor, tehlikede"], correct:1, hint:"Tehlike altına girmek = azalmak, risk altında olmak!" }},

{ subject:"turkce", id:"k4d3b", kazanim:4, kazanimName:"Dinlediklerine Yönelik Soruları Cevaplama", difficulty:3, type:"mc",
  pasaj:P.p7,
  question:"Bu metni dinleyen biri aşağıdaki yargılardan hangisinin DOĞRU olduğunu söyleyebilir?",
  options:["A) Türk el sanatları yalnızca müzelerde yaşatılıyor.","B) Ebru, çini ve kilim aynı malzemeyle üretilir.","C) Bu sanatlar kurslar ve müzelerle yaşatılmaya devam ediyor.","D) Kilim yalnızca İstanbul'da dokunur."],
  correct:2, wrongFeedback:'"Bu gelenekleri yaşatmak için kurslar ve müzeler büyük katkı sağlamaktadır." — doğrudan metinde yazıyor.',
  hint:"Son cümle ne diyor?",
  simplified:{ question:"Geleneksel sanatları yaşatmak için ne yapılıyor?", options:["A) Hiçbir şey","B) Kurslar ve müzeler katkı sağlıyor","C) Satılıyor","D) Yasaklanıyor"], correct:1, hint:"Son cümle: kurslar ve müzeler → yaşatıyor!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 5 – KAHRAMAN KARŞILAŞTIRMA (8 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k5d1a", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:1, type:"mc",
  pasaj:P.p6,
  question:"Zeynep ile Can'ın ORTAK özelliği nedir?",
  options:["A) İkisi de edebiyat dersini sever.","B) İkisi de okulda başarılıdır.","C) İkisi de oyuncak söker.","D) İkisi de sabırlıdır."],
  correct:1, wrongFeedback:'"İkisi de okulda başarılıydı" doğrudan metinde var.',
  hint:'"İkisi de..." diye başlayan cümleye bak!',
  simplified:{ question:'"İkisi de okulda başarılıydı." Bu kim için söyleniyor?', options:["A) Sadece Zeynep","B) Sadece Can","C) Her ikisi"], correct:2, hint:"İkisi de = her ikisi = ortak özellik!" }},

{ subject:"turkce", id:"k5d1b", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:1, type:"mc",
  pasaj:"Ahmet uzun boylu, siyah saçlı ve çok sessiz bir çocuktur; kitap okumayı sever. Burak ise kısa boylu, kumral saçlı ve oldukça konuşkandır; futbol oynamayı sever. Her iki arkadaş da sınıfın en başarılı öğrencileri arasındadır.",
  question:"Ahmet'i Burak'tan AYIRAN özellik hangisidir?",
  options:["A) Başarılı olması","B) Sessiz ve kitap seven olması","C) Arkadaşlarla iyi geçinmesi","D) Sınıfta olması"],
  correct:1, wrongFeedback:"Sessiz olmak ve kitap sevmek sadece Ahmet'e ait. Burak konuşkan ve futbol sever. Başarılı olmak her ikisinde de var.",
  hint:"Hangi özellik sadece Ahmet'in?",
  simplified:{ question:"Kim sessizdir — Ahmet mi, Burak mı?", options:["A) Ahmet","B) Burak","C) Her ikisi"], correct:0, hint:"Metin 'Ahmet çok sessiz' diyor!" }},

{ subject:"turkce", id:"k5d2a", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:2, type:"mc",
  pasaj:"Masalın birinci kahramanı Timur cesur ama aceleci bir çocuktu; düşünmeden hareket ederdi. İkinci kahraman Selim ise hem cesur hem de akıllıca düşünen biriydi; tehlikeye atılmadan önce uzun uzun planlardı. Her ikisi de zorlu görevlerden yılmaz, arkadaşları için kendini feda etmekten çekinmezdi.",
  question:"Selim'i Timur'dan AYIRAN özellik nedir?",
  options:["A) Cesur olması","B) Kendini feda etmesi","C) Plan yaparak hareket etmesi","D) Zorlu görevlerden yılmaması"],
  correct:2, wrongFeedback:"A, B ve D her ikisinde de var. Timur 'düşünmeden hareket eder', Selim ise 'önceden planlardı'. Bu fark sadece Selim'e ait.",
  hint:"A, B, D her ikisinde de var mı? Sadece Selim'e ait olanı bul.",
  simplified:{ question:'"Timur düşünmeden hareket ederdi." Selim ise nasıl?', options:["A) O da düşünmeden hareket eder","B) Tehlikeye girmeden önce planlardı"], correct:1, hint:"Timur = aceleci, Selim = planlı. Fark bu!" }},

{ subject:"turkce", id:"k5d2b", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:2, type:"mc",
  pasaj:P.p6,
  question:"Zeynep ile Can'ı birbirinden AYIRAN en belirgin özellik nedir?",
  options:["A) Zeynep sabırlı ve düzenli, Can enerjik ve meraklı.","B) Zeynep kısa boylu, Can uzun boylu.","C) Zeynep matematik, Can fen seviyor.","D) Zeynep şehirde, Can köyde yaşıyor."],
  correct:0, wrongFeedback:"A: Zeynep 'sabırlı, düzenli', Can 'enerjik, meraklı' — bu kişilik farkı açıkça metinde var. C'ye göre Zeynep edebiyat, Can fen seviyor (B ve D metinde yok).",
  hint:"Kişilik özellikleri ne? Zeynep nasıl, Can nasıl?",
  simplified:{ question:'"Zeynep sabırlı ve düzenliydi." Can nasıl biriydi?', options:["A) Sakin ve uysal","B) Enerjik ve meraklı","C) Tembel","D) Çekingen"], correct:1, hint:"Metin 'Can enerjik ve meraklı' diyor!" }},

{ subject:"turkce", id:"k5d3a", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:3, type:"mc",
  pasaj:"Dede Korkut hikâyelerinde Deli Dumrul cesur, gözüpek bir yiğittir; herkese meydan okur. Bamsi Beyrek ise hem cesur hem ince düşünceli, sevdiklerine karşı son derece naziktir. Bamsi düşmana karşı güçlüdür, dostlara karşı merhametlidir. Deli Dumrul ise merhametini pek göstermez, kimi zaman kaba davranır.",
  question:"Bu metne göre aşağıdaki karşılaştırmalardan hangisi YANLIŞTIR?",
  options:["A) Her iki kahraman da cesurdur.","B) Bamsi hem güçlü hem merhametlidir.","C) Deli Dumrul, Bamsi'den daha ince düşünceli davranır.","D) Deli Dumrul zaman zaman kaba davranabilir."],
  correct:2, wrongFeedback:"C yanlış: İnce düşünceli olan Bamsi. Deli Dumrul kaba davranır. Yani tam tersi!",
  hint:"İnce düşüncelilik kime atfediliyor — Bamsi'ye mi Deli Dumrul'a mı?",
  simplified:{ question:"Kim ince düşünceli — Bamsi mi Deli Dumrul mu?", options:["A) Bamsi","B) Deli Dumrul","C) Her ikisi"], correct:0, hint:"Metin 'Bamsi ince düşünceli' diyor!" }},

{ subject:"turkce", id:"k5d3b", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:3, type:"mc",
  pasaj:"Masalda üç kardeş vardır. Büyük kardeş Demir güçlüdür ama sabırsızdır; zorluklardan kaçar. Ortanca kardeş Gümüş zekidir ama bencildir; yardım etmekten kaçınır. Küçük kardeş Altın ise ne kadar güçlü ne de zeki değildir; ama dürüsttür, sabırlıdır ve herkese yardım eder. Masalın sonunda görevi başaran Altın olur.",
  question:"Altın'ın görevi başarmasının nedeni kardeşlerine göre hangi özelliği olabilir?",
  options:["A) En güçlü olması","B) En zeki olması","C) Dürüst, sabırlı ve yardımsever olması","D) En büyük kardeş olması"],
  correct:2, wrongFeedback:"Altın en güçlü ya da en zeki değil. Ama dürüstlük, sabır ve yardımseverlik onu başarıya götürdü.",
  hint:"Altın'ın güçlü ve zeki olmayan ama başaran özelliği ne?",
  simplified:{ question:"Altın neden başardı?", options:["A) En güçlüydü","B) En zekiydi","C) Sabırlı, dürüst ve yardımseverdi"], correct:2, hint:"Güç ve zeka değil, ahlak onu başarıya götürdü!" }},

{ subject:"turkce", id:"k5d2c", kazanim:5, kazanimName:"Kahramanların Özelliklerini Karşılaştırma", difficulty:2, type:"mc",
  pasaj:"Defne çok çalışkan ve düzenlidir; ödevlerini zamanında yapar. Ceren ise yaratıcı ve hayal gücü kuvvetlidir; resim ve şiir yazmayı çok sever. Defne matematiği, Ceren görsel sanatları en çok sever. İkisi de arkadaşlarına yardım etmekten büyük mutluluk duyar.",
  question:"Defne ile Ceren arasındaki EN BELIRGIN fark nedir?",
  options:["A) Defne düzenli ve çalışkan, Ceren yaratıcıdır.","B) Defne kısa, Ceren uzun boyludur.","C) Defne matematik, Ceren Türkçe sever.","D) Defne başarısız, Ceren başarılıdır."],
  correct:0, wrongFeedback:"A metinde açıkça var. B ve D metinde yok. C'de Ceren 'görsel sanatlar' seviyor, 'Türkçe' değil.",
  hint:"Her şıkkı metinde bul. Metinde olmayan şıkkı ele.",
  simplified:{ question:"Defne nasıl biri, Ceren nasıl biri?", options:["A) Her ikisi de yaratıcı","B) Defne düzenli, Ceren yaratıcı","C) Her ikisi de düzenli"], correct:1, hint:"Metin Defne=düzenli/çalışkan, Ceren=yaratıcı diyor!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 6 – METNİN KONUSU (8 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k6d1a", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:1, type:"mc",
  pasaj:"Kütüphaneler bilgiye ulaşmanın en kolay yollarından biridir. Kitaplar, dergiler ve dijital kaynaklar ücretsiz sunulur. Düzenli giden çocuklar kelime dağarcıklarını geliştirir.",
  question:"Bu metnin konusu nedir?",
  options:["A) Kitapların nasıl yazıldığı","B) Kütüphanelerin önemi","C) Dijital teknolojinin zararları","D) Kelime öğrenme yöntemleri"],
  correct:1, wrongFeedback:"En çok tekrar eden kavram 'kütüphane'. Tüm cümleler kütüphaneyle ilgili.",
  hint:"Metinden hangi kelimeyi çıkarsan anlam bozulur?",
  simplified:{ question:"Metinde en çok hangi sözcük geçiyor?", options:["A) Kitap","B) Kütüphane","C) Dijital","D) Çocuk"], correct:1, hint:"En çok geçen = konu!" }},

{ subject:"turkce", id:"k6d1b", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:1, type:"mc",
  pasaj:P.p2,
  question:"Bu metnin konusu aşağıdakilerden hangisidir?",
  options:["A) Bal üretimi ve satışı","B) Arıların önemi ve tehdit altında olması","C) Çiçek yetiştiriciliği","D) Tarım ilaçlarının faydaları"],
  correct:1, wrongFeedback:"Metin arıların faydalarını ve tehlikede olduklarını anlatıyor. Her paragraf arıyla ilgili.",
  hint:"Metinde baştan sona hangi canlı anlatılıyor?",
  simplified:{ question:"Bu metnin tamamı hangi canlı hakkında?", options:["A) Bal","B) Arı","C) Çiçek","D) İnsan"], correct:1, hint:"Baştan sona arı anlatılıyor!" }},

{ subject:"turkce", id:"k6d2a", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:2, type:"mc",
  pasaj:"Göç mevsimi geldiğinde leylekler sıcak ülkelere yola çıkar. Binlerce kilometre uçarak Afrika'ya ulaşırlar. Bahar gelince yine aynı yuvalarına dönerler. Leylekler her yıl aynı çatıya yuva yapmasıyla ünlüdür.",
  question:"Bu parçada aşağıdaki konulardan hangisine DEĞİNİLMEMİŞTİR?",
  options:["A) Leyleklerin göç etmesi","B) Leyleklerin yuva alışkanlığı","C) Leyleklerin ne yiyip içtiği","D) Leyleklerin geri dönmesi"],
  correct:2, wrongFeedback:"Leyleklerin beslenme alışkanlığı metinde hiç geçmiyor.",
  hint:'"Değinilmemiştir" = metinde YOK. C seçeneğini metinde ara.',
  simplified:{ question:"Metinde leyleklerin yemesi hakkında bilgi var mı?", options:["A) Evet","B) Hayır"], correct:1, hint:"Beslenme konusu geçmiyor = değinilmemiş!" }},

{ subject:"turkce", id:"k6d2b", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:2, type:"mc",
  pasaj:P.p4,
  question:"Bu metin için hangi başlık EN UYGUN olur?",
  options:["A) Türkiye'nin En Kalabalık Şehri","B) Kapadokya: Doğanın Büyüleyici Eseri","C) Balon Turizminin Tarihçesi","D) UNESCO'nun Kuruluşu"],
  correct:1, wrongFeedback:"Metin Kapadokya'yı tanıtıyor: doğal oluşumlar, tarih, turizm. B en uygun başlık.",
  hint:"Metnin tamamı neyi tanıtıyor?",
  simplified:{ question:"Bu metin hangi yer hakkında?", options:["A) İstanbul","B) Kapadokya","C) Antalya","D) Ankara"], correct:1, hint:"Peri bacaları, balonlar = Kapadokya!" }},

{ subject:"turkce", id:"k6d3a", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:3, type:"mc",
  pasaj:P.p5,
  question:"Bu metnin konusu ile ana fikri arasındaki farkı doğru veren seçenek hangisidir?",
  options:["A) Konu: ormanlar, Ana fikir: Ormanları ve ağaçları korumak gelecek nesiller için zorunludur.","B) Konu: ağaç dikmek, Ana fikir: Ormanlar büyüktür.","C) Konu: iklim değişikliği, Ana fikir: Ormanlar yaşıyor.","D) Konu: yangınlar, Ana fikir: Yangın söndürülmeli."],
  correct:0, wrongFeedback:"Konu = metinde ne anlatılıyor (ormanlar). Ana fikir = yazar ne demek istiyor (koruma zorunlu). A her ikisini doğru veriyor.",
  hint:"Konu = ne hakkında? Ana fikir = ne söylenmek isteniyor?",
  simplified:{ question:"'Konu' ile 'Ana fikir' arasındaki fark nedir?", options:["A) Fark yok, aynı şey","B) Konu = ne hakkında, Ana fikir = yazar ne demek istiyor"], correct:1, hint:"Konu geniş, ana fikir yazarın mesajı!" }},

{ subject:"turkce", id:"k6d2c", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:2, type:"mc",
  pasaj:P.p7,
  question:"Bu metnin konusu aşağıdakilerden hangisidir?",
  options:["A) Türk mutfak kültürü","B) Geleneksel Türk el sanatları","C) Müze ve kültür merkezleri","D) Seramik üretimi"],
  correct:1, wrongFeedback:"Metin ebru, çini ve kilimi anlatıyor. Bunlar Türk el sanatları. B en doğru.",
  hint:"Metinde anlatılan üç şey ne? Bunların ortak adı ne?",
  simplified:{ question:"Ebru, çini ve kilim ne tür sanatlar?", options:["A) Müzik sanatları","B) El sanatları","C) Spor dalları","D) Yemek kültürü"], correct:1, hint:"Ellerin emeğiyle yapılan sanat = el sanatı!" }},

{ subject:"turkce", id:"k6d3b", kazanim:6, kazanimName:"Metnin Konusunu Belirleme", difficulty:3, type:"mc",
  pasaj:P.p1,
  question:"Bu parçada aşağıdaki konulardan hangisine DEĞINILMEMIŞTIR?",
  options:["A) Büyükannenin bahçesinde ne yetiştirdiğine","B) Ayşe'nin en sevdiği sebzeye","C) Büyükannenin domatesleri neden lezzetli yaptığına","D) Ayşe'nin ne zaman köye geldiğine"],
  correct:3, wrongFeedback:"Ayşe'nin hangi mevsimde veya hangi tarihte köye gittiği belirtilmiyor. Sadece 'yazları' deniyor ama ne zaman geldiği değil.",
  hint:"D'deki bilgi — ne zaman geldiği — metinde var mı?",
  simplified:{ question:"Metin Ayşe'nin köye tam olarak ne zaman geldiğini söylüyor mu?", options:["A) Evet, Temmuz'da geliyor diyor","B) Hayır, sadece yazları diyor — tarih yok"], correct:1, hint:"'Yazları' geliyor ama tam tarih yok!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 7 – ANA FİKİR / ANA DUYGU (10 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k7d1a", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:1, type:"mc",
  pasaj:"Minik karınca, tek başına büyük bir ekmek kırıntısını taşıyamıyordu. Arkadaşlarını çağırdı. Hep birlikte kırıntıyı yuvalarına taşıdılar. Tek başına yapamadıkları işi birlikte kolayca başardılar.",
  question:"Bu metnin ana fikri nedir?",
  options:["A) Karıncalar çok güçlüdür.","B) Birlikte çalışmak başarıyı getirir.","C) Ekmek kırıntıları çok ağırdır.","D) Karıncalar her zaman aç kalır."],
  correct:1, wrongFeedback:"Ana fikir = yazarın mesajı. Tek başına başarılamayan iş birlikte başarıldı → birlikte çalışmak!",
  hint:"Bu hikâyeden ne öğreniyoruz?",
  simplified:{ question:"Karınca tek başına başaramadı, arkadaşlarıyla başardı. Bu ne öğretiyor?", options:["A) Karıncalar zayıf","B) Birlikte çalışmak başarı getirir","C) Ekmek ağırdır","D) Yardım istemek utanç"], correct:1, hint:"Birlikte başardılar → Birlik güçtür!" }},

{ subject:"turkce", id:"k7d1b", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:1, type:"mc",
  question:"Aşağıdaki şiiri okuyunuz:\n\nAnnemin elleri sıcacıktır,\nSaçlarımı okşar her akşam.\nGözlerinde sevgi ışıldar,\nDünyam güzel onunla her an.\n\nBu şiirin ana duygusu nedir?",
  options:["A) Özlem","B) Korku","C) Anne sevgisi","D) Yalnızlık"],
  correct:2, wrongFeedback:"Tüm diziler anne sevgisini anlatıyor: sıcak eller, okşama, sevgi.",
  hint:"Her dizide ne duygusu var?",
  simplified:{ question:"Şiirde anne için ne söyleniyor?", options:["A) Korku verici","B) Sevgi dolu","C) Üzücü","D) Sinirli"], correct:1, hint:"Sıcak eller, okşamak, sevgi = anne sevgisi!" }},

{ subject:"turkce", id:"k7d2a", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:2, type:"mc",
  pasaj:"Eskiden insanlar mektup yazarak haberleşirdi. Mektubun ulaşması günler sürerdi. Günümüzde bir mesaj saniyeler içinde ulaşıyor. Ancak mektupların o heyecanını, zarfı açmanın sevincini hiçbir teknoloji veremez.",
  question:"Bu metnin ana fikri için hangisi söylenebilir?",
  options:["A) Teknoloji hayatımızı kolaylaştırmıştır.","B) Mektup yazmak zaman kaybıdır.","C) Teknoloji hızlandırsa da mektubun duygusal değerini veremez.","D) İnsanlar artık haberleşmiyor."],
  correct:2, wrongFeedback:'"Ancak" sözcüğü metnin asıl mesajını taşıyor: Teknoloji hızlı ama mektubun duygusu eşsiz.',
  hint:'"Ancak"tan sonrası yazarın asıl mesajı.',
  simplified:{ question:'"Mektupların o heyecanını hiçbir teknoloji veremez." — Bu ne demek?', options:["A) Teknoloji çok kötü","B) Mektupların özel bir duygusu var, teknoloji onu veremiyor"], correct:1, hint:'"Hiçbir teknoloji veremez" → mektup özel!' }},

{ subject:"turkce", id:"k7d2b", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:2, type:"mc",
  pasaj:"Küçük Emre, bisiklete binmeyi bir türlü öğrenemiyordu. Defalarca düştü, dizlerini yardı. Ama hiç pes etmedi. Her düşüşünde kalkıp tekrar denedi. Sonunda bir yaz günü rüzgâr gibi bisiklet sürmeyi başardı.",
  question:"Bu metnin ana fikrinin karşılığı olan atasözü hangisidir?",
  options:["A) Damlaya damlaya göl olur.","B) Azimli çalışan başarıya ulaşır.","C) Bugünün işini yarına bırakma.","D) Üzüm üzüme baka baka kararır."],
  correct:1, wrongFeedback:"Pes etmemek + denemek + başarmak → azim → 'azimle çalışan başarır.'",
  hint:"Emre'nin başarısının anahtarı ne? Hangi atasözü bunu özetler?",
  simplified:{ question:"Emre neden başardı?", options:["A) Şanslıydı","B) Pes etmedi, azimle denedi","C) Arkadaşı yardım etti","D) Çok güçlüydü"], correct:1, hint:"Her düşüşte kalktı = azim = başarı!" }},

{ subject:"turkce", id:"k7d2c", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:2, type:"mc",
  pasaj:"Yeşil ovalar, mavi gökyüzü,\nKuşlar uçar daldan dala.\nNe güzeldir bu dünya yüzü,\nDoğa bize sunmuş her hâlâ.",
  question:"Bu şiirin ana duygusu hangisidir?",
  options:["A) Kahramanlık","B) Doğa sevgisi ve hayranlık","C) Üzüntü","D) Korku"],
  correct:1, wrongFeedback:"'Ne güzeldir bu dünya' ve 'doğa bize sunmuş' — hayranlık ve sevgi dolu bir şiir.",
  hint:"Şair doğa karşısında nasıl hissediyor?",
  simplified:{ question:'"Ne güzeldir bu dünya yüzü" — bu cümle hangi duyguyu gösteriyor?', options:["A) Korku","B) Üzüntü","C) Hayranlık ve sevgi"], correct:2, hint:"Güzel diyorsa beğeniyor ve seviyor!" }},

{ subject:"turkce", id:"k7d3a", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:3, type:"mc",
  pasaj:P.p3,
  question:"Bu hikâyenin ana fikri aşağıdakilerden hangisidir?",
  options:["A) Fırtınalı havalarda denize çıkılmamalı.","B) Yaşlı balıkçılar çok tecrübelidir.","C) Küçük bir yardım bile büyük hayat kurtarabilir.","D) Denizcilik tehlikeli bir meslektir."],
  correct:2, wrongFeedback:"Hasan'ın yaktığı küçük fener ışığı pek çok gemiciyi kurtardı. 'Karanlıkta bile bir ışık yeter' = küçük yardım büyük fark yaratır.",
  hint:'"Karanlıkta bile bir ışık yeter" — bu sözden ne anlıyoruz?',
  simplified:{ question:'Hasan sadece bir fener yaktı. Bu küçük eylem ne sağladı?', options:["A) Hiçbir şey","B) Pek çok hayat kurtardı"], correct:1, hint:"Küçük bir fener = büyük kurtarış!" }},

{ subject:"turkce", id:"k7d3b", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:3, type:"mc",
  pasaj:"Çocukken her şeye meraklıydım. Taşın altına, ağacın kovuğuna, bulutun arkasına bakardım. Büyüdükçe o merak azaldı. Günler birbirine benzedi. Oysa dünya hâlâ aynı mucizelerle dolu; sadece ben bakmayı unuttum.",
  question:"Bu metnin ana duygusu ve ana fikri en iyi hangi seçenekte bir arada verilmiştir?",
  options:["A) Çocukluğa özlem + büyüyünce merak ve hayranlık yitiririz.","B) Dünyaya duyulan korku + yetişkinlik zordur.","C) Mutluluk + hayat her zaman güzeldir.","D) Kararlılık + her şeye meraklı olmalıyız."],
  correct:0, wrongFeedback:"Çocukluğu özlüyor (duygu = özlem). 'Bakmayı unuttum' = merakı yitirdi (mesaj = büyüyünce merak azalır). A her ikisini doğru veriyor.",
  hint:"Duygu = ne hissettiriyor? Ana fikir = ne söylüyor?",
  simplified:{ question:'"Sadece ben bakmayı unuttum." Bu ne anlama geliyor?', options:["A) Gözleri görmez oldu","B) Büyüdükçe merak ve hayranlık azaldı"], correct:1, hint:"Bakmayı unutmak = merakı kaybetmek!" }},

{ subject:"turkce", id:"k7d3c", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:3, type:"mc",
  pasaj:P.p5,
  question:"Bu metnin ana fikri aşağıdakilerden hangisidir?",
  options:["A) Ormanlar çok büyüktür.","B) İklim değişikliği kaçınılmazdır.","C) Ormanları korumak ve ağaç dikmek gelecek için zorunludur.","D) Orman yangınları her zaman olacaktır."],
  correct:2, wrongFeedback:"Son cümle: 'Ağaç dikmenin ve ormanları korumanın gelecek nesiller için zorunlu olduğunu vurgulamaktadır.' Bu ana fikri doğrudan veriyor.",
  hint:"Yazarın vermek istediği mesaj son cümlede açıkça var.",
  simplified:{ question:'"Ağaç dikmek gelecek nesiller için zorunlu." Bu metnin mesajı mı?', options:["A) Evet, bu metnin ana mesajı","B) Hayır, bu sadece bir ayrıntı"], correct:0, hint:"Yazar bunu özellikle vurguluyor = ana fikir!" }},

{ subject:"turkce", id:"k7d1c", kazanim:7, kazanimName:"Ana Fikir / Ana Duygu", difficulty:1, type:"mc",
  pasaj:P.p1,
  question:"Bu hikâyenin ana duygusu nedir?",
  options:["A) Kıskançlık","B) Korku","C) Sevgi ve minnettarlık","D) Üzüntü"],
  correct:2, wrongFeedback:"Hikâye büyükanneyle geçirilen mutlu anları ve büyükannenin emek-sevgi anlayışını anlatıyor. Sevgi ve minnet öne çıkıyor.",
  hint:"Ayşe büyükannesini nasıl bir duyguyla anlatıyor?",
  simplified:{ question:"Ayşe büyükannesini düşündüğünde ne hissediyor?", options:["A) Korku","B) Sevgi","C) Kıskançlık","D) Öfke"], correct:1, hint:"Birlikte çalışmak, güzel anlar = sevgi!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 8 – DEYİM VE ATASÖZLERİ (10 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k8d1a", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:1, type:"mc",
  pasaj:"Ali yarışmada birinci olamayınca çok üzüldü. Arkadaşları onu yalnız bırakmadı; yanında kaldılar.",
  question:"Bu metindeki durumu en iyi anlatan atasözü hangisidir?",
  options:["A) Damlaya damlaya göl olur.","B) Dost kara günde belli olur.","C) Ağaç yaş iken eğilir.","D) Bugünün işini yarına bırakma."],
  correct:1, wrongFeedback:'"Dost kara günde belli olur." = zor zamanda yanında duran gerçek dosttur. Ali zor günde arkadaşlarını yanında buldu.',
  hint:"Zor günde yanında durmayı anlatan atasözü hangisi?",
  simplified:{ question:'"Dost kara günde belli olur." ne demek?', options:["A) Dostlar mutlu günlerde görünür","B) Gerçek dostlar zor zamanda yanındadır"], correct:1, hint:'"Kara gün" = zor gün. Gerçek dost orada!' }},

{ subject:"turkce", id:"k8d1b", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:1, type:"mc",
  pasaj:"Ayşe sınav sonuçlarını görünce çok sevindi. Haftalardır gece gündüz çalışmıştı. Sonunda emeğinin karşılığını almıştı. Annesi gülerek 'Ne ekersen onu biçersin.' dedi.",
  question:'"Ne ekersen onu biçersin." atasözü bu metne nasıl katkı sağlıyor?',
  options:["A) Tarım yapmanın önemini vurgular.","B) Emek veren insanın karşılığını aldığını pekiştirir.","C) Çalışmanın yorucu olduğunu anlatır.","D) Annenin tarım bilgisini öne çıkarır."],
  correct:1, wrongFeedback:"Atasözü çalışma → başarı mesajını güçlendiriyor. Tarımla değil, emek-karşılık ilişkisiyle ilgili.",
  hint:"Ayşe ne yaptı (emek) ve ne elde etti (karşılık)?",
  simplified:{ question:'"Ne ekersen onu biçersin." gerçekten tarım mı anlatıyor?', options:["A) Evet, çiftçilik için","B) Hayır, emek verince karşılığını alırsın demek"], correct:1, hint:"Mecaz anlam: emek = ek, başarı = biç!" }},

{ subject:"turkce", id:"k8d2a", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:2, type:"mc",
  question:"Aşağıdaki deyimlerden hangisinin anlamı YANLIŞ verilmiştir?",
  options:["A) Eli açık olmak — cömert olmak","B) Gözü açık olmak — uyanık ve dikkatli olmak","C) Göze girmek — birinin beğenisini kazanmak","D) Gözden çıkarmak — bir şeyi çok değerli saymak"],
  correct:3, wrongFeedback:'"Gözden çıkarmak" = vazgeçmek, önemsememek. "Çok değerli saymak" tam TERSİ!',
  hint:'"Arabamı gözden çıkardım, sattım." Arabayı değerli mi saydı?',
  simplified:{ question:'"Gözden çıkardım, sattım." — gözden çıkarmak ne demek?', options:["A) Çok sevdi","B) Vazgeçti, önemsemedi"], correct:1, hint:"Sattı = artık istemedi → vazgeçmek!" }},

{ subject:"turkce", id:"k8d2b", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:2, type:"mc",
  pasaj:"Cem, ödevini yapmadan dışarı çıkmak istedi. Babası 'Önce görevini yap, sonra oyna.' dedi. Cem ödevini bitirince çok daha rahat hissetti.",
  question:"Babanın sözüne en yakın anlamlı atasözü hangisidir?",
  options:["A) Bir elin nesi var, iki elin sesi var.","B) Bugünün işini yarına bırakma.","C) Bal tutan parmağını yalar.","D) Komşu komşunun külüne muhtaçtır."],
  correct:1, wrongFeedback:'"Bugünün işini yarına bırakma" = işi erteleme, hemen yap. Babanın mesajıyla aynı.',
  hint:"Babanın mesajı ne? Ertele mi, hemen yap mı?",
  simplified:{ question:"Baba ne dedi — önce ödev mi oyun mu?", options:["A) Önce oyna","B) Önce ödev yap"], correct:1, hint:"Önce görev = erteleme, hemen yap!" }},

{ subject:"turkce", id:"k8d2c", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:2, type:"mc",
  question:"Aşağıdaki atasözlerinin hangisinin anlamı YANLIŞ verilmiştir?",
  options:["A) Damlaya damlaya göl olur — küçük birikimler zamanla büyür","B) Sakla samanı gelir zamanı — ileride lazım olur diye bir şeyi sakla","C) İt ürür kervan yürür — eleştirilere aldırmadan yoluna devam et","D) Taşıma su ile değirmen dönmez — emek olmadan iş biter"],
  correct:3, wrongFeedback:'"Taşıma su ile değirmen dönmez" = geçici/ödünç çözümlerle kalıcı iş yapılamaz demek. "Emek olmadan iş biter" yanlış.',
  hint:'"Taşıma su" = ödünç/geçici su. Değirmen kendi suyuyla döner. Bu ne demek?',
  simplified:{ question:'"Taşıma su ile değirmen dönmez" — taşıma su ne demek?', options:["A) Çok fazla su","B) Başkasından getirilen, geçici su","C) Kirli su","D) Soğuk su"], correct:1, hint:"Taşıma = başkasından getirilen. Kendi gücünle yapmalısın!" }},

{ subject:"turkce", id:"k8d3a", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:3, type:"mc",
  pasaj:"Turhan her gün ödevlerini yaparken bir an önce bitirip dışarı çıkmak isterdi. Bazen acelesiyle yanlış yapar, tekrar başlamak zorunda kalırdı. Dedesi ona 'Ağırdan al, uzağa git.' derdi. Bir gün sakin sakin çalıştı, hem hızlı bitirdi hem de hiç yanlış yapmadı.",
  question:'"Ağırdan al, uzağa git." deyiminin bu metne katkısını doğru açıklayan seçenek hangisidir?',
  options:["A) Yavaş yürüyünce çok yol alınır; yürüyüş tavsiyesi.","B) Aceleciliğin hatalara yol açtığını; sabırlı çalışmanın daha iyi sonuç verdiğini vurgular.","C) Ağır çalışmak zaman kaybettirir; hız tavsiyesi.","D) Uzak hedefler koymak gerekir; büyük hayaller kurma teması."],
  correct:1, wrongFeedback:"Deyim + hikâye birlikte değerlendirilmeli: Turhan acelesiyle hata yapıyor, sakin çalışınca hem hızlı hem doğru bitiyor. Mesaj: sabır başarı getirir.",
  hint:"Turhan sakin çalışınca ne oldu? Bu deyimle nasıl örtüşüyor?",
  simplified:{ question:"Turhan sakin çalışınca hem hızlı bitirdi hem hata yapmadı. Bu ne öğretiyor?", options:["A) Hız her zaman iyidir","B) Sabırlı olmak daha iyi sonuç verir"], correct:1, hint:"Acele = hata. Sabır = başarı!" }},

{ subject:"turkce", id:"k8d3b", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:3, type:"mc",
  question:"Aşağıdakilerin hangisinde bir DEYİM, parantez içindeki anlamıyla DOĞRU eşleştirilmiştir?",
  options:["A) Dili tutulmak — çok konuşmak","B) Kulak vermek — dikkatlice dinlemek","C) Ayağı kaymak — dans etmek","D) Eli boş dönmek — çok para kazanmak"],
  correct:1, wrongFeedback:"B doğru: 'Kulak vermek' = dikkatlice dinlemek. A yanlış: dili tutulmak = susup kalmak. C: ayağı kaymak = hata yapmak. D: eli boş dönmek = bir şey elde edememek.",
  hint:"Her deyimi bir cümle içinde kullanmayı dene. Hangisi anlamlı?",
  simplified:{ question:'"Öğretmeni konuşurken herkes kulak verdi." — kulak vermek ne demek?', options:["A) Kulaklarını tuttu","B) Dikkatlice dinledi","C) Kulaklık taktı","D) Dinlemedi"], correct:1, hint:"Kulak vermek = dikkatli dinlemek!" }},

{ subject:"turkce", id:"k8d2d", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:2, type:"mc",
  question:"'İçi içine sığmamak' deyimi aşağıdaki cümlelerin hangisinde DOĞRU kullanılmıştır?",
  options:["A) Evi çok küçüktü, içi içine sığmıyordu.","B) Tatil haberini duyunca sevinçten içi içine sığmadı.","C) Çantası doluydu, içi içine sığmıyordu.","D) Yorgunluktan içi içine sığmadı."],
  correct:1, wrongFeedback:'"İçi içine sığmamak" = aşırı heyecan ya da sevinçten yerinde duramamak. B bu anlamı doğru kullanıyor.',
  hint:"Bu deyim hangi duyguyu anlatır?",
  simplified:{ question:'"İçi içine sığmamak" ne demek?', options:["A) Fiziksel olarak dar bir yere sığmamak","B) Sevinç veya heyecandan yerinde duramamak"], correct:1, hint:"Sığmamak = heyecandan taşmak, çok sevinmek!" }},

{ subject:"turkce", id:"k8d1c", kazanim:8, kazanimName:"Deyim ve Atasözlerinin Anlamına Katkısı", difficulty:1, type:"mc",
  question:"'Bir elin nesi var, iki elin sesi var.' atasözünün anlamı nedir?",
  options:["A) Eller gürültü çıkarır.","B) Birlikte iş yapmak daha kolay ve etkili olur.","C) Tek elle iş yapılmaz.","D) İki kişi kavga eder."],
  correct:1, wrongFeedback:"'Bir el' = tek başına az, 'iki el' = birlikte çok. Birlikte çalışmak güç verir.",
  hint:"'El' burada el organı mı yoksa kişi mi?",
  simplified:{ question:"Bu atasözünde 'el' ne anlama geliyor?", options:["A) Vücuttaki el organı","B) Kişi, insan gücü"], correct:1, hint:"Bir elin nesi var = bir kişinin gücü az demek!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 9 – HİKÂYE UNSURLARI (8 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k9d1a", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:1, type:"matching",
  question:"Hikâye unsurlarını doğru tanımlarla eşleştir:",
  pairs:[
    { left:"Olayın geçtiği yer", right:"Mekân" },
    { left:"Olayın geçtiği zaman", right:"Zaman" },
    { left:"Hikâyedeki kişiler", right:"Kahraman" },
    { left:"Yaşananların sırası", right:"Olay örgüsü" }
  ],
  wrongFeedback:"Hikâye unsurları: Mekân (yer), Zaman (ne zaman), Kahraman (kim), Olay örgüsü (ne oldu).",
  hint:"Anahtar kelimeler: yer→Mekân, zaman→Zaman, kişiler→Kahraman, sıra→Olay",
  simplified:{ question:'"Hikâyede olaylar bir parkta geçiyordu." — Bu hangi unsur?', options:["A) Kahraman","B) Mekân","C) Zaman","D) Olay örgüsü"], correct:1, hint:"Park bir yer → Mekân!" }},

{ subject:"turkce", id:"k9d1b", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:1, type:"mc",
  pasaj:P.p3,
  question:"Bu hikâyenin mekânı (olayın geçtiği yer) nedir?",
  options:["A) Bir ormanda","B) Şehir merkezinde","C) Denizde ve kıyıda","D) Bir dağ köyünde"],
  correct:2, wrongFeedback:"Mert denizde mahsur kaldı, sonra kıyıya çıktı. Olay denizde ve kıyıda geçiyor.",
  hint:"Olaylar nerede geçiyor? Deniz mi, orman mı, şehir mi?",
  simplified:{ question:"Mert neredeydi hikâyede?", options:["A) Ormanda","B) Denizde","C) Okulda","D) Pazarda"], correct:1, hint:"Tekne + fırtına = deniz!" }},

{ subject:"turkce", id:"k9d2a", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:2, type:"mc",
  pasaj:"Zehra ile Sude okul bahçesinde yaralı bir kedi yavrusu buldular. Teneffüste kediyle ilgilendiler. Öğretmenleri 'Ne kadar duyarlı çocuklarsınız!' dedi. Birlikte kediyi veterinere götürmeye karar verdiler.",
  question:"Bu hikâyedeki ÇATIŞMA (sorun) hangisidir?",
  options:["A) Öğretmenin teneffüste gelmesi","B) Kedinin yaralı bulunması","C) Zehra ile Sude'nin tartışması","D) Veterinerin uzak olması"],
  correct:1, wrongFeedback:"Çatışma = hikâyedeki sorun. Çocukların çözmesi gereken sorun: yaralı kedi. Öğretmenin gelmesi sorun değil, olumlu!",
  hint:"Hikâyede neyi çözmeleri gerekiyor?",
  simplified:{ question:"Hikâyedeki sorun nedir?", options:["A) Kavga","B) Yaralı kedi","C) Öğretmen kızdı","D) Teneffüs bitti"], correct:1, hint:"Yaralı kedi = çözülmesi gereken sorun!" }},

{ subject:"turkce", id:"k9d2b", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:2, type:"mc",
  pasaj:P.p3,
  question:"Bu hikâyenin olay örgüsü doğru sıralanmış olarak hangisinde verilmiştir?",
  options:["A) Teşekkür → Fener → Fırtına → Kurtulma","B) Fırtına → Mahsur kalma → Fener ışığı → Kurtulma → Teşekkür","C) Hasan feneri yakar → Fırtına çıkar → Mert mahsur kalır","D) Mert denize açılır → Teşekkür → Fırtına → Fener"],
  correct:1, wrongFeedback:"Neden-sonuç zinciri: Fırtına çıktı → Mert mahsur kaldı → Fener gördü → Kurtuldu → Teşekkür etti. B doğru sıra.",
  hint:"Hangi olay hangisine neden oldu? Önce ne, sonra ne oldu?",
  simplified:{ question:"Önce fırtına mı çıktı, yoksa teşekkür mü?", options:["A) Önce teşekkür","B) Önce fırtına"], correct:1, hint:"Fırtına olmasaydı Mert mahsur kalmazdı → fırtına önce!" }},

{ subject:"turkce", id:"k9d3a", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:3, type:"matching",
  question:"Metin türlerini tanımlarıyla eşleştir:",
  pairs:[
    { left:"Duygu ve düşüncelerin ahenk olmadan yazılması", right:"Düz yazı" },
    { left:"Olağanüstü olayların anlatıldığı metin türü", right:"Masal" },
    { left:"Olmuş/olabilecek olayları yer, zaman ve kahramanla anlatma", right:"Öykü" }
  ],
  wrongFeedback:"Düz yazı: ölçüsüz/kafiyesiz. Masal: olağanüstü. Öykü: gerçekçi, kısa.",
  hint:"Anahtar kelimeler: 'ahenk olmadan'→düz yazı, 'olağanüstü'→masal, 'olmuş/olabilecek'→öykü",
  simplified:{ question:'"Olağanüstü olayların anlatıldığı metin türü" hangisidir?', options:["A) Şiir","B) Masal","C) Öykü","D) Düz yazı"], correct:1, hint:"Sihir, konuşan hayvanlar = masal!" }},

{ subject:"turkce", id:"k9d3b", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:3, type:"mc",
  pasaj:"Küçük prens yıldızından ayrılarak Dünya'ya geldi. Yolda bir tilkiyle arkadaş oldu. Tilki ona 'Evcilleştirdiğin şeylerden sorumlusun.' dedi. Küçük prens bu sözü hiç unutmadı. Kendi gezegenindeki gülü aklına geldi ve ona dönmeye karar verdi.",
  question:"Bu hikâyede tilkinin verdiği sözün, olay örgüsüne katkısı nedir?",
  options:["A) Tilki gereksiz bir karakterdir; olayı etkilemez.","B) Tilkinin sözü küçük prensin gülüne dönme kararını tetikler.","C) Tilki küçük prensin Dünya'da kalmasını sağlar.","D) Tilki hikâyenin başkahramanıdır."],
  correct:1, wrongFeedback:"Tilkinin sözü → küçük prens gülü hatırladı → dönmeye karar verdi. Bu olay örgüsünü ilerletiyor.",
  hint:"Tilkinin sözü ne değiştirdi? Küçük prens ne karar verdi?",
  simplified:{ question:"Tilkinin sözünden sonra küçük prens ne yaptı?", options:["A) Dünya'da kalmaya karar verdi","B) Gezegenine dönmeye karar verdi"], correct:1, hint:"Sözü duydu → gülü hatırladı → döndü. Söz kararı tetikledi!" }},

{ subject:"turkce", id:"k9d2c", kazanim:9, kazanimName:"Hikâye Unsurlarını Belirleme", difficulty:2, type:"mc",
  pasaj:"Yaz tatilinde Mehmet ailesiyle Karadeniz yaylasına gitti. Bir sabah erkenden kalkıp bahçeye çıktı. Çimenlerin üzerindeki çiğ taneleri güneşle pırıl pırıl parlıyordu. O gün dedesinden süt sağmayı öğrendi.",
  question:"Bu hikâyenin ZAMANI (ne zaman olduğu) nedir?",
  options:["A) Kış tatilinde","B) Sömestr tatilinde","C) Yaz tatilinde","D) Okul döneminde"],
  correct:2, wrongFeedback:'"Yaz tatilinde" — metin bu kelimelerle başlıyor.',
  hint:"Metnin ilk kelimelerine bak.",
  simplified:{ question:"Metin 'yaz tatilinde' mi 'kış tatilinde' mi başlıyor?", options:["A) Kış tatilinde","B) Yaz tatilinde"], correct:1, hint:"İlk kelime: Yaz tatilinde!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 10 – GERÇEK VE HAYALİ ÖĞELER (8 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k10d1a", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:1, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde hayali bir anlatım VARDIR?",
  options:["A) Kedi ağacın dalına tırmanıp uyudu.","B) Çocuklar parkta salıncağa bindi.","C) Güneş çocuklara el sallayarak günaydın dedi.","D) Bahçedeki çiçekler baharla birlikte açtı."],
  correct:2, wrongFeedback:"C'de güneş 'el sallıyor' ve 'konuşuyor'. Gerçekte güneş konuşamaz. Bu kişileştirme = hayali öğe.",
  hint:"Her cümle gerçekte olabilir mi? Güneş el sallar mı?",
  simplified:{ question:"Güneş gerçekte konuşabilir mi?", options:["A) Evet","B) Hayır, güneş cansız — konuşamaz"], correct:1, hint:"Cansız → konuşamaz → hayal ürünü!" }},

{ subject:"turkce", id:"k10d1b", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:1, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde GERÇEK bir anlatım vardır?",
  options:["A) Tavşan kaplumbağaya 'Seninle yarışalım mı?' dedi.","B) Bulutlar sevinçten dans etti.","C) Kurbağa prense dönüşüverdi.","D) Anneannem bahçedeki domatesleri topladı."],
  correct:3, wrongFeedback:"D gerçekte olabilir: İnsan bahçeden domates toplar. A, B, C gerçekte olamaz: Hayvanlar konuşmaz, bulutların duygusu olmaz, kurbağa prens olmaz.",
  hint:"Gerçek hayatta olabilir mi? D neden olabilir?",
  simplified:{ question:"'Anneannem domates topladı.' gerçek mi hayali mi?", options:["A) Hayali","B) Gerçek — insanlar bahçeden sebze toplayabilir"], correct:1, hint:"İnsan bahçeden sebze toplar → gerçek!" }},

{ subject:"turkce", id:"k10d2a", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:2, type:"mc",
  pasaj:"I.  Kelebek çiçekten çiçeğe kondu.\nII. Bulutlar sevinçten dans etti.\nIII. Çocuklar okul bahçesinde koşturdu.\nIV. Orman, gece olunca uyumaya çekildi.\nV.  Akarsu taşları aşındırdı.",
  question:"Numaralanmış cümlelerden kaçı hayali öğe içermektedir?",
  options:["A) 1","B) 2","C) 3","D) 4"],
  correct:1, wrongFeedback:"Hayali: II (bulutlar dans eder mi?) ve IV (orman uyur mu?). I, III, V gerçekte olabilir. Cevap: 2.",
  hint:"Her cümleyi test et: Bulutların duygusu olabilir mi? Orman gerçekten uyur mu?",
  simplified:{ question:'"Bulutlar sevinçten dans etti." Gerçek mi hayali mi?', options:["A) Gerçek","B) Hayali — bulutların duygusu olmaz"], correct:1, hint:"Duygu + dans = kişileştirme = hayali!" }},

{ subject:"turkce", id:"k10d2b", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:2, type:"mc",
  pasaj:"Küçük Elif pencereden dışarı baktı. Serçeler ağaçta cıvıldaşıyordu. Kedileri Pamuk güneşin altında uzanıyordu. Elif bahçeye indiğinde çiçekler ona 'Günaydın Elif!' diye seslendi.",
  question:"Bu parçada gerçek ve hayali öğeleri doğru ayıran seçenek hangisidir?",
  options:["A) Gerçek: Serçelerin cıvıldaması   Hayali: Çiçeklerin konuşması","B) Gerçek: Çiçeklerin konuşması     Hayali: Kedinin uzanması","C) Gerçek: Elif'in içeri girmesi    Hayali: Kedinin uyuması","D) Gerçek: Güneşin doğması         Hayali: Serçelerin ötmesi"],
  correct:0, wrongFeedback:"Serçe ötmesi gerçek (kuşlar öter). Çiçeğin konuşması hayali (çiçekler konuşamaz).",
  hint:"Kuşlar gerçekten öter mi? Çiçekler gerçekten konuşabilir mi?",
  simplified:{ question:"Çiçekler gerçekte konuşabilir mi?", options:["A) Evet","B) Hayır → hayali öğe"], correct:1, hint:"Çiçekler cansız → konuşamaz → hayali!" }},

{ subject:"turkce", id:"k10d3a", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:3, type:"mc",
  pasaj:"I.  Ağaçların yaprakları güzün sarardı.\nII. Ağaçlar kışın üşümemek için palto istedi.\nIII. Yaprak dökmesi bitkilerin doğal bir sürecidir.\nIV. Çiçekler yağmuru göklere sipariş etti.\nV.  Bahar gelince tohumlar filizlendi.",
  question:"Bu cümlelerin hangilerinde hayali öğe VARDIR?",
  options:["A) Yalnız II","B) II ve IV","C) I ve III","D) II, IV ve V"],
  correct:1, wrongFeedback:"II: Ağaçlar palto istedi = hayali (ağacın isteği olmaz). IV: Çiçekler sipariş etti = hayali (çiçek sipariş veremez). I, III, V gerçek biyolojik süreçler.",
  hint:"Her cümlede cansız varlığa insan özelliği veriliyor mu?",
  simplified:{ question:'"Ağaçlar palto istedi." Gerçek mi hayali mi?', options:["A) Gerçek","B) Hayali — ağaçların isteği olmaz"], correct:1, hint:"Ağaç cansız → isteyemez → hayali!" }},

{ subject:"turkce", id:"k10d3b", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:3, type:"mc",
  pasaj:P.p3,
  question:"Bu hikâyede hangisi hayali bir öğe içermektedir?",
  options:["A) Mert'in denizde mahsur kalması","B) Fener ışığının yol göstermesi","C) Dalgaların büyümesi","D) Hasan'ın 'Karanlıkta bile bir ışık yeter.' demesi"],
  correct:3, wrongFeedback:"A, B, C gerçekte olabilecek şeyler. D'de mecaz anlam var ama hayali değil — ancak bu cümle gerçek anlamıyla değil, simgesel anlamıyla kullanılıyor. Hepsi aslında gerçek!",
  hint:"Bu hikâyede gerçekte olamayacak bir şey var mı? Yoksa hepsi gerçek mi?",
  simplified:{ question:"Bu hikâyede konuşan hayvan ya da sihirli bir şey var mı?", options:["A) Evet, konuşan hayvan var","B) Hayır, hikâyedeki her şey gerçekte olabilir"], correct:1, hint:"Deniz, fener, balıkçı, gemici — hepsi gerçek!" }},

{ subject:"turkce", id:"k10d2c", kazanim:10, kazanimName:"Gerçek ve Hayali Öğeler", difficulty:2, type:"mc",
  question:"Masallar gerçekçi hikâyelerden hangi özelliğiyle ayrılır?",
  options:["A) Uzun olmaları","B) Olağanüstü ve hayali öğeler içermeleri","C) Üzücü bir sonu olması","D) Gerçek kişileri anlatmaları"],
  correct:1, wrongFeedback:"Masallarda konuşan hayvanlar, büyü, sihirli nesneler gibi hayali öğeler bulunur. Bu onları gerçekçi hikâyelerden ayırır.",
  hint:"Masallarda gerçekte olmayan ne var?",
  simplified:{ question:"'Bir varmış bir yokmuş...' diye başlayan masallarda neler olur?", options:["A) Gerçek haberler","B) Konuşan hayvanlar, sihir, büyü — hayali şeyler"], correct:1, hint:"Masal = hayal gücü = gerçekte olmayan şeyler!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 11 – SAYI YAZIMI (7 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k11d1a", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:1, type:"mc",
  question:'"Sınıfımızda 35 öğrenci var." — 35 sayısını yazıyla doğru yazan seçenek?',
  options:["A) otuzbeş öğrenci","B) otuz beş öğrenci","C) otuz-beş öğrenci","D) Otuzbeş öğrenci"],
  correct:1, wrongFeedback:'"Otuz beş" — iki kelimeden oluşan sayılar AYRI yazılır.',
  hint:"Otuz ve Beş — iki kelime mi bir kelime mi?",
  simplified:{ question:"İki kelimeden oluşan sayılar nasıl yazılır?", options:["A) Bitişik","B) Ayrı"], correct:1, hint:"Otuz + Beş = iki kelime → ayrı!" }},

{ subject:"turkce", id:"k11d1b", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:1, type:"mc",
  question:'"2.374" sayısının yazıyla doğru yazılışı hangisidir?',
  options:["A) İki bin üç yüz yetmiş dört","B) İki bin üçyüz yetmişdört","C) Yirmi üç bin yetmiş dört","D) İki bin üç yüz yetmiş dördüncü"],
  correct:0, wrongFeedback:"Sayı sözcükleri ayrı yazılır. D'de sıra sayısı eki (-üncü) yanlış.",
  hint:"Her kelime ayrı mı yazılmış?",
  simplified:{ question:'"İki bin üç yüz" ayrı mı bitişik mi yazılır?', options:["A) Bitişik: ikibin","B) Ayrı: iki bin"], correct:1, hint:"Her sayı sözcüğü ayrı!" }},

{ subject:"turkce", id:"k11d2a", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:2, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde sayı yazımı DOĞRUDUR?",
  options:["A) Sınıfımızda otuzbeş öğrenci var.","B) Sınıfımızda otuz beş öğrenci var.","C) Mağazanın ikiyüz elli ürünü var.","D) Bu yıl dörtbin kişi mezun oldu."],
  correct:1, wrongFeedback:"B doğru. A: otuzbeş bitişik yanlış. C: ikiyüz bitişik yanlış. D: dörtbin bitişik yanlış.",
  hint:"Birden fazla kelimeli sayılar ayrı yazılır.",
  simplified:{ question:'"otuzbeş" mi "otuz beş" mi doğru?', options:["A) otuzbeş","B) otuz beş"], correct:1, hint:"İki kelime → ayrı yaz!" }},

{ subject:"turkce", id:"k11d2b", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:2, type:"mc",
  pasaj:"I.  Türkiye Cumhuriyeti bin dokuz yüz yirmi üç yılında kurulmuştur.\nII. Fabrikada iki bin beş yüz işçi çalışmaktadır.\nIII. Kitabı yüzde otuz indirimle aldım.\nIV. Maçı seksenbin kişi izledi.",
  question:"Hangi cümlelerde sayı yazımı DOĞRUDUR?",
  options:["A) I ve II","B) II ve III","C) I, II ve III","D) Hepsi"],
  correct:2, wrongFeedback:"IV'te seksenbin bitişik yazılmış — seksen bin ayrı olmalı. I, II, III doğru.",
  hint:'"Seksenbin" bir mi iki kelime mi?',
  simplified:{ question:'"seksenbin" nasıl yazılmalı?', options:["A) seksenbin","B) seksen bin"], correct:1, hint:"Seksen + Bin = iki kelime → ayrı!" }},

{ subject:"turkce", id:"k11d3a", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:3, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde sayının yazımında BİRDEN FAZLA yanlış vardır?",
  options:["A) Kütüphanede beşyüzotuz kitap var.","B) Kütüphanede beş yüz otuz kitap var.","C) Kütüphanede 530 kitap var.","D) Kütüphanede beş yüzotuz kitap var."],
  correct:0, wrongFeedback:"A'da 'beşyüz' ve 'yüzotuz' her ikisi de bitişik yazılmış: 2 hata. D'de yalnızca 'yüzotuz' bitişik: 1 hata. B ve C doğru.",
  hint:"A'da kaç bitişik yazılmış kelime var?",
  simplified:{ question:'"Beşyüzotuz" kaç yanlış içeriyor?', options:["A) 1 yanlış","B) 2 yanlış — 'beşyüz' ve 'yüzotuz' bitişik"], correct:1, hint:"Beş yüz otuz → 3 ayrı kelime. Bitişik yazmak = her biri hata!" }},

{ subject:"turkce", id:"k11d2c", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:2, type:"mc",
  question:'"Bin dokuz yüz yirmi üç" sayısının rakamla doğru yazılışı hangisidir?',
  options:["A) 19.023","B) 1.923","C) 19.203","D) 1.293"],
  correct:1, wrongFeedback:"Bin = 1.000, dokuz yüz = 900, yirmi üç = 23 → 1.923. Binler basamağı noktayla ayrılır.",
  hint:"Bin kaç yapar? Bin + dokuz yüz + yirmi üç = ?",
  simplified:{ question:"Bin kaç eder?", options:["A) 100","B) 1.000","C) 10.000","D) 100.000"], correct:1, hint:"1 bin = 1.000!" }},

{ subject:"turkce", id:"k11d3b", kazanim:11, kazanimName:"Sayıları Doğru Yazma", difficulty:3, type:"mc",
  question:"Aşağıdaki cümlelerin hangisinde sayı yazımı TAMAMEN doğrudur?",
  options:["A) Toplantıya iki yüz ellibir kişi katıldı.","B) Toplantıya iki yüz elli bir kişi katıldı.","C) Toplantıya ikiyüzellibirr kişi katıldı.","D) Toplantıya 2 yüz 51 kişi katıldı."],
  correct:1, wrongFeedback:"B: iki yüz elli bir — tüm kelimeler ayrı, doğru. A: 'ellibir' bitişik yanlış. C: tamamen bitişik yanlış. D: karışık rakam-yazı yanlış.",
  hint:"Her sayı sözcüğü ayrı mı yazılmış?",
  simplified:{ question:'"iki yüz elli bir" mi "ikiyüzellibirr" mi doğru?', options:["A) ikiyüzellibirr","B) iki yüz elli bir"], correct:1, hint:"Her kelime ayrı → iki yüz elli bir!" }},

// ════════════════════════════════════════════════════════
// KAZANIM 12 – BAĞLAMDAN ANLAM (8 soru)
// ════════════════════════════════════════════════════════
{ subject:"turkce", id:"k12d1a", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:1, type:"mc",
  pasaj:"Dedem çok yaşlanmıştı. Gözleri iyi görmüyordu. Anneannem onu haftada bir tabibe götürüyordu. Tabip, dedemin gözlüğünü değiştirmesi gerektiğini söyledi.",
  question:'"Tabip" sözcüğünün anlamını bağlamdan tahmin ediniz.',
  options:["A) Öğretmen","B) Doktor","C) Eczacı","D) Hemşire"],
  correct:1, wrongFeedback:"Gözlük öneren kişi = göz doktoru. Tabip = doktor.",
  hint:"Kim gözlük önerir?",
  simplified:{ question:"Gözleri görmeyen birine kim bakar?", options:["A) Öğretmen","B) Doktor","C) Şoför","D) Komşu"], correct:1, hint:"Göz sağlığı = doktor!" }},

{ subject:"turkce", id:"k12d1b", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:1, type:"mc",
  pasaj:"Akdeniz kıyısında deniz çok berraktı. Suyun içindeki balıkları, rengarenk taşları rahatlıkla görebiliyorduk. Sanki bir akvaryumun içine bakıyorduk.",
  question:'"Berrak" sözcüğünün bu bağlamdaki anlamı hangisidir?',
  options:["A) Soğuk ve sert","B) Derin ve tehlikeli","C) Temiz ve saydam","D) Tuzlu ve buruk"],
  correct:2, wrongFeedback:"İçi görünüyor = temiz ve saydam. Berrak = temiz, duru, şeffaf.",
  hint:"Su içindeki her şey görünüyorsa su nasıl bir su?",
  simplified:{ question:"İçindeki her şeyi görebildiğin su nasıl?", options:["A) Kirli","B) Temiz ve saydam","C) Derin","D) Soğuk"], correct:1, hint:"Her şey görünüyor = şeffaf = temiz!" }},

{ subject:"turkce", id:"k12d2a", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:2, type:"mc",
  pasaj:"Orman yolu çok meşakkatliydi; saatlerce yürüdüler. Dağdan aşağı inerken yorgunluktan ayakları tutmaz oldu.",
  question:'"Meşakkatli" sözcüğünün bu bağlamdaki anlamı hangisidir?',
  options:["A) Kısa ve kolay","B) Yorucu ve zahmetli","C) Renkli ve güzel","D) Eğlenceli ve heyecanlı"],
  correct:1, wrongFeedback:"Saatlerce yürüdüler, ayakları tutmaz oldu → Yol çok zormuş. Meşakkatli = zorlu, yorucu.",
  hint:"Saatlerce yürüyüp yorulunca yol nasıl biri?",
  simplified:{ question:"Ayakları tutmaz oldu — yol nasıldı?", options:["A) Kolaydı","B) Çok zor ve yorcuydu"], correct:1, hint:"Ayak tutmaz = çok yoruldular = zor yol!" }},

{ subject:"turkce", id:"k12d2b", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:2, type:"mc",
  pasaj:"Köydeki yaşlı kadın her sabah tan ağarırken uyanırdı. Güneş henüz doğmamıştı ama gökyüzü aydınlanmaya başlamıştı. Hayvanlarını besler, bahçeyi sulardı.",
  question:'"Tan ağarırken" ifadesinin anlamı nedir?',
  options:["A) Gece yarısı","B) Öğle vakti","C) Sabahın erken saatleri, güneş doğmadan hemen önce","D) Akşam karanlığında"],
  correct:2, wrongFeedback:'"Güneş henüz doğmamıştı ama gökyüzü aydınlanmaya başlamıştı" — sabahın ilk ışığı. Tan = şafak vakti.',
  hint:'"Güneş henüz doğmamış ama gökyüzü aydınlanıyor" — bu günün hangi vakti?',
  simplified:{ question:'"Güneş doğmadı ama gökyüzü aydınlandı." Bu günün kaçı?', options:["A) Gece","B) Öğle","C) Sabahın çok erken saati"], correct:2, hint:"Güneş doğmadan önce = şafak = sabah erken!" }},

{ subject:"turkce", id:"k12d3a", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:3, type:"mc",
  pasaj:"Ormanın derinliklerinde yürürken patikaya çıktık. Bu dar toprak yol bizi küçük bir göle kadar götürdü. Patika boyunca çiçekler açmıştı.",
  question:'"Patika" sözcüğünün anlamını bağlamdan tahmin ediniz.',
  options:["A) Geniş asfalt yol","B) Dar toprak yol","C) Köprü","D) Merdiven"],
  correct:1, wrongFeedback:'"Dar toprak yol" ifadesi zaten metinde var ve patikayla aynı şeyi kastediyor.',
  hint:"Metin patikayı tarif ediyor. Hangi kelimeler?",
  simplified:{ question:'"Bu dar toprak yol..." — Patika ne demek?', options:["A) Geniş yol","B) Dar toprak yol"], correct:1, hint:"Metinde söylüyor: dar toprak yol = patika!" }},

{ subject:"turkce", id:"k12d3b", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:3, type:"mc",
  pasaj:"I.   Adam biriktirdiği serveti hayırlı işlere harcadı.\nII.  Köylüler ambar ambar buğday toplamış, kışa hazırlanmıştı.\nIII. Küçük kız, hediyeleri görünce coşup taştı.\nIV.  Orman yolu çok meşakkatliydi; saatlerce yürüdüler.",
  question:"Numaralanmış cümlelerde altı çizili sözcüklerden hangisinin anlamı YANLIŞ tahmin edilmiştir?",
  options:["A) I — servet: büyük mal varlığı","B) II — ambar: tahıl depolamak için büyük kap","C) III — coşmak: taşkın sevinç duymak","D) IV — meşakkatli: kolay ve rahat"],
  correct:3, wrongFeedback:'"Meşakkatli" = zorlu, zahmetli. "Kolay ve rahat" tam TERSİ.',
  hint:'"Saatlerce yürüdüler" — yol kolay mı zorlu mu?',
  simplified:{ question:'"Saatlerce yürüdüler." — Yol kolay mıydı?', options:["A) Evet, kolaydı","B) Hayır, zordu — meşakkatli = zorlu"], correct:1, hint:"Saatlerce = çok uzun = zor!" }},

{ subject:"turkce", id:"k12d2c", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:2, type:"mc",
  pasaj:P.p1,
  question:"'Emekle ve sevgiyle yetiştirildiği için.' — Bu cümlede 'emek' sözcüğünün anlamı nedir?",
  options:["A) Para","B) Zaman ve çaba harcama","C) Gübre","D) Yağmur"],
  correct:1, wrongFeedback:"Emek = bir iş için harcanan zaman, güç ve çaba. Bahçe işi zaman ve çaba ister.",
  hint:"Bahçede çalışmak ne gerektirir? Para mı, yoksa çaba mı?",
  simplified:{ question:"'Emek vermek' ne demek?", options:["A) Para vermek","B) Zaman ve güç harcamak, çalışmak","C) Gübre vermek","D) Su vermek"], correct:1, hint:"Emek = alın teri, çalışma, çaba!" }},

{ subject:"turkce", id:"k12d3c", kazanim:12, kazanimName:"Bağlamdan Anlam Tahmini", difficulty:3, type:"mc",
  pasaj:P.p2,
  question:"'Arı nüfusu tehlike altına girmiştir.' cümlesinde 'nüfus' sözcüğünün anlamı bağlamdan hangisi olabilir?",
  options:["A) Bir canlı türünün birey sayısı","B) Arıların ürettiği bal miktarı","C) Arıların çalışma hızı","D) Arıların yaşadığı yer"],
  correct:0, wrongFeedback:"Nüfus = belli bir yerdeki birey sayısı. 'Arı nüfusu azaldı' = arı sayısı azaldı demek.",
  hint:"'Türkiye'nin nüfusu 85 milyon.' Bu cümlede nüfus ne demek?",
  simplified:{ question:"Türkiye nüfusu ve arı nüfusu — nüfus ne demek?", options:["A) Ülkenin büyüklüğü","B) Bir gruptaki kişi veya canlı sayısı","C) Bir şeyin ağırlığı","D) Bir şeyin hızı"], correct:1, hint:"Türkiye'de kaç kişi var? Bu nüfusu anlatır → sayı!" }}

]
// ─── COMBINED QB ──────────────────
const QBX = [

// ══════════════════════════════════════════
// 🟢 KOLAY – BİLGİ & ANLAMA (E1–E10)
// ══════════════════════════════════════════

{id:"mn001",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:1,type:"mc",
 question:"Kare için aşağıdakilerden hangisi DOĞRUDUR?",
 options:["A) Karenin 3 eşit kenarı vardır.","B) Karenin tüm kenarları birbirine eşittir.","C) Karenin iç açıları 90 dereceden büyüktür.","D) Karenin karşılıklı kenarları eşit değildir."],
 correct:1,
 wrongFeedback:"Kare: 4 eşit kenar + 4 tane 90° açı. B doğru. A yanlış (3 değil, 4 kenar). C yanlış (açılar tam 90°).",
 hint:"Kareyi düşün: tüm kenarları aynı mı farklı mı?",
 simplified:{question:"Bir karenin 4 kenarı var. Bu 4 kenar birbiriyle nasıl?",options:["A) Hepsi farklı","B) Hepsi eşit","C) Sadece 2'si eşit","D) Hiçbiri eşit değil"],correct:1,hint:"Kare = 4 eşit kenar!"}},

{id:"mn002",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:1,type:"mc",
 question:"Hangi sayı 4 125 ile 4 380 arasında yer alır?",
 options:["A) 4 050","B) 4 200","C) 4 400","D) 5 000"],
 correct:1,
 wrongFeedback:"4 050 < 4 125 (dışarıda). 4 200: 4125<4200<4380 ✓. 4 400>4380 (dışarıda).",
 hint:"4125 ile 4380 arasında: hem 4125'ten büyük hem 4380'den küçük olmalı.",
 simplified:{question:"4 200 sayısı, 4 125 ile 4 380 arasında mı?",options:["A) Evet: 4125 < 4200 < 4380","B) Hayır: 4200 > 4380"],correct:0,hint:"4125 < 4200 ✓ ve 4200 < 4380 ✓ → aralıkta!"}},

{id:"mn003",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:1,type:"mc",
 question:"Birim kesrin payı kaçtır?",
 options:["A) 0","B) 1","C) 2","D) Herhangi bir sayı olabilir"],
 correct:1,
 wrongFeedback:"Birim kesir: pay=1 olan kesirdir. Örnekler: 1/2, 1/3, 1/5, 1/10... Hepsinde pay=1.",
 hint:"Birim kesir örneklerini düşün: 1/2, 1/3, 1/4... Paydaki sayı kaçtır?",
 simplified:{question:"1/5, 1/7, 1/10 kesirlerinde paydaki ortak sayı nedir?",options:["A) 0","B) 1","C) 5","D) Farklı farklı"],correct:1,hint:"Hepsinde pay = 1. Birim kesir = pay 1 olan kesir!"}},

{id:"mn004",subject:"matematik",kazanim:107,kazanimName:"Örüntü ve Ritmik Sayma",difficulty:1,type:"mc",
 question:"4, 8, 12, 16, 20, ... örüntüsünün bir sonraki terimi kaçtır?",
 options:["A) 22","B) 24","C) 26","D) 28"],
 correct:1,
 wrongFeedback:"Her adımda 4 artıyor: 4→8(+4), 8→12(+4)... 20+4=24.",
 hint:"İki terim arasındaki fark nedir? 8-4=? Bu kadar artıyor.",
 simplified:{question:"8 - 4 = ? (Artış miktarı bu kadar)",options:["A) 2","B) 4","C) 6","D) 8"],correct:1,hint:"8-4=4. Her adım 4 artıyor. 20+4=24!"}},

{id:"mn005",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:1,type:"mc",
 question:"72 kitap 8 rafa eşit bölüştürüldü. Her rafta kaç kitap olur?",
 options:["A) 7","B) 8","C) 9","D) 10"],
 correct:2,
 wrongFeedback:"72 ÷ 8 = 9. Kontrol: 8 × 9 = 72 ✓.",
 hint:"72 ÷ 8 = ? 8 × ? = 72",
 simplified:{question:"8 × 9 = ?",options:["A) 64","B) 72","C) 80","D) 88"],correct:1,hint:"8×9=72 → 72÷8=9!"}},

{id:"mn006",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:1,type:"mc",
 question:"Selin çalışma zamanının 07:00 ile okula gidişini sordu. Bir bütün 5 eşit parçaya bölündü, 3 parçası gölgelendirildi. Gölgeli kısım hangi kesri gösterir?",
 options:["A) 5/3","B) 3/5","C) 2/5","D) 5/2"],
 correct:1,
 wrongFeedback:"Gölgeli parça = 3. Toplam parça = 5. Kesir = gölgeli/toplam = 3/5.",
 hint:"Kesir = (gölgeli parça sayısı) / (toplam parça sayısı)",
 simplified:{question:"Kesirde pay neyi, payda neyi gösterir?",options:["A) Pay=toplam, payda=alınan","B) Pay=alınan (gölgeli), payda=toplam"],correct:1,hint:"Pay=3 (gölgeli), payda=5 (toplam) → 3/5!"}},

{id:"mn007",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:1,type:"mc",
 question:"Selin okula 07:45'te çıktı ve 20 dakika sonra okulda oldu. Okulda kaçta oldu?",
 options:["A) 08:00","B) 08:05","C) 08:10","D) 08:20"],
 correct:1,
 wrongFeedback:"07:45 + 20 dk: dakika 45+20=65 → 60 dk=1 saat, kalan 5 dk → 08:05.",
 hint:"45 + 20 = 65 dakika. 60 dakika = 1 saat. Kalan: 5 dakika.",
 simplified:{question:"45 + 20 = ? dakika",options:["A) 55","B) 60","C) 65","D) 70"],correct:2,hint:"45+20=65. 65=60+5=1 saat 5 dakika → 08:05!"}},

{id:"mn008",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:1,type:"mc",
 pasaj:"| Meyve | Ağırlık |\n|-------|--------|\n| Elma | 12 kg |\n| Armut | 8 kg |\n| Kiraz | 15 kg |\n| Portakal | 10 kg |",
 question:"En fazla olan ile en az olan arasındaki fark kaçtır?",
 options:["A) 5 kg","B) 6 kg","C) 7 kg","D) 8 kg"],
 correct:2,
 wrongFeedback:"En fazla: kiraz 15 kg. En az: armut 8 kg. Fark: 15-8=7 kg.",
 hint:"En büyük ile en küçük değeri bul, çıkar: 15-8=?",
 simplified:{question:"15 - 8 = ?",options:["A) 5","B) 6","C) 7","D) 8"],correct:2,hint:"15-8=7!"}},

{id:"mn009",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:1,type:"mc",
 question:"1 234 + 2 567 = ?",
 options:["A) 3 691","B) 3 791","C) 3 801","D) 3 901"],
 correct:2,
 wrongFeedback:"4+7=11(1,1). 3+6+1=10(0,1). 2+5+1=8. 1+2=3. Sonuç: 3 801.",
 hint:"Basamak basamak topla. 4+7=11 → 1 yaz, 1 taşı.",
 simplified:{question:"4 + 7 = ?",options:["A) 9","B) 10","C) 11","D) 12"],correct:2,hint:"4+7=11 → 1 yaz, 1 taşı. İlk adım!"}},

{id:"mn010",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:1,type:"mc",
 question:"Bir küpün kaç köşesi vardır?",
 options:["A) 6","B) 8","C) 10","D) 12"],
 correct:1,
 wrongFeedback:"Küpün: 8 köşe, 12 kenar, 6 yüzey. Dikkat: 6 = yüzey sayısı, 8 = köşe sayısı.",
 hint:"Bir kutu hayal et. Köşelerini say: üstte 4, altta 4 = toplam?",
 simplified:{question:"Kutunun üst yüzeyinde kaç köşe, alt yüzeyinde kaç köşe var?",options:["A) Üst 3 + Alt 3 = 6","B) Üst 4 + Alt 4 = 8","C) Üst 5 + Alt 5 = 10","D) 12"],correct:1,hint:"Üst yüzeyde 4 köşe, alt yüzeyde 4 köşe → toplam 8!"}},

// ══════════════════════════════════════════
// 🟡 ORTA – UYGULAMA & ANALİZ (E11–E25)
// ══════════════════════════════════════════

{id:"mn011",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"7/9 - 4/9 = ?",
 options:["A) 11/9","B) 3/18","C) 3/9","D) 3/0"],
 correct:2,
 wrongFeedback:"Paydalar aynı (9) → sadece payları çıkar: 7-4=3. Payda değişmez. Sonuç: 3/9.",
 hint:"Paydalar eşit. 7-4=? Payda 9 kalır.",
 simplified:{question:"Aynı paydada çıkarma yaparken payda değişir mi?",options:["A) Evet, çıkarılır","B) Hayır, payda aynı kalır"],correct:1,hint:"Payda sabit! 7/9-4/9 = (7-4)/9 = 3/9!"}},

{id:"mn012",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Bir market sabah 326 ekmek sattı, öğleden sonra sabahın yarısı kadar sattı. Toplamda kaç ekmek sattı?",
 options:["A) 452","B) 472","C) 489","D) 512"],
 correct:2,
 wrongFeedback:"Öğleden sonra: 326 ÷ 2 = 163. Toplam: 326 + 163 = 489.",
 hint:"Öğleden sonra = sabahın yarısı = 326÷2. Sonra ikisini topla.",
 simplified:{question:"326 ÷ 2 = ?",options:["A) 153","B) 163","C) 173","D) 183"],correct:1,hint:"326÷2=163. Şimdi 326+163=489!"}},

{id:"mn013",subject:"matematik",kazanim:108,kazanimName:"Tahmini Hesaplama",difficulty:2,type:"mc",
 question:"Ayşe 3 ürün aldı: 1 287 TL, 2 843 TL ve 1 565 TL. Her tutarı en yakın yüzlüğe yuvarlayarak tahmini toplam bulursa kaç TL bulur?",
 options:["A) 5 500","B) 5 700","C) 5 900","D) 6 100"],
 correct:1,
 wrongFeedback:"1287→1300 (onlar=8≥5, yukarı). 2843→2800 (onlar=4<5, aşağı). 1565→1600 (onlar=6≥5, yukarı). Toplam: 1300+2800+1600=5700.",
 hint:"Her sayıda onlar basamağını bak: 8≥5 yukarı, 4<5 aşağı, 6≥5 yukarı.",
 simplified:{question:"1 287 en yakın yüzlüğe yuvarlandığında: onlar=8, kural?",options:["A) 8≥5 → yukarı → 1300","B) 8≥5 → aşağı → 1200"],correct:0,hint:"8 ≥ 5 → yukarı yuvarlama → 1300!"}},

{id:"mn014",subject:"matematik",kazanim:107,kazanimName:"Örüntü ve Ritmik Sayma",difficulty:2,type:"mc",
 question:"500, 1 000, 1 500, 2 000, ... örüntüsü için aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) Her terim öncekinden 500 fazladır.","B) 5. terim 2 500'dür.","C) 10. terim 5 500'dür.","D) Bu artan bir örüntüdür."],
 correct:2,
 wrongFeedback:"C yanlış: 10. terim = 500+(10-1)×500 = 500+4500 = 5000. 5500 değil! A,B,D doğru.",
 hint:"10. terimi hesapla: 500 + (10-1)×500 = ?",
 simplified:{question:"9 × 500 = ?",options:["A) 4 000","B) 4 500","C) 5 000","D) 5 500"],correct:1,hint:"9×500=4500. 500+4500=5000 (10. terim), 5500 değil!"}},

{id:"mn015",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Bir kasapta 3 kg et 480 TL'ye satılıyor.\nAli: '1 kg etin fiyatı 160 TL'dir.'\nBerk: '2 kg etin fiyatı 280 TL'dir.'\nKimin hesabı doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Berk","C) Her ikisi","D) Hiçbiri"],
 correct:0,
 wrongFeedback:"1 kg: 480÷3=160 TL → Ali ✓. 2 kg: 2×160=320 TL. Berk 280 dedi → yanlış. Yalnız Ali doğru.",
 hint:"1 kg fiyatını bul: 480÷3=? Sonra 2 kg: 2×1kg fiyatı=?",
 simplified:{question:"480 ÷ 3 = ?",options:["A) 140","B) 150","C) 160","D) 170"],correct:2,hint:"480÷3=160. 1 kg=160 TL ✓ (Ali doğru)!"}},

{id:"mn016",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:2,type:"mc",
 question:"Kenarları 8 cm ve 5 cm olan dikdörtgenin alanı kaç cm²'dir?",
 options:["A) 26 cm²","B) 30 cm²","C) 35 cm²","D) 40 cm²"],
 correct:3,
 wrongFeedback:"Alan = uzun kenar × kısa kenar = 8 × 5 = 40 cm². Not: 26 cm² çevre hesabıyla karıştırılmış (2×(8+5)=26).",
 hint:"Alan = uzunluk × genişlik. Çevre değil, alan!",
 simplified:{question:"8 × 5 = ?",options:["A) 35","B) 40","C) 45","D) 13"],correct:1,hint:"8×5=40 cm²!"}},

{id:"mn017",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:2,type:"mc",
 question:"Osman sabah 06:50'de uyandı. Uyumak için tam 8 saat 20 dakika önce yatmıştı. Yatma saati kaçtı?",
 options:["A) 22:00","B) 22:20","C) 22:30","D) 22:40"],
 correct:2,
 wrongFeedback:"06:50 – 8 saat = 22:50 (önceki gece). 22:50 – 20 dk = 22:30.",
 hint:"Uyandığı saatten geriye git: 06:50 – 8 saat = ? Sonra –20 dk.",
 simplified:{question:"06:50 – 8 saat = ?",options:["A) 21:50","B) 22:50","C) 23:50","D) 14:50"],correct:1,hint:"6-8 olmaz, önceki günden: (24+6)-8=22 → 22:50. Sonra -20dk=22:30!"}},

{id:"mn018",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"8/5 bileşik kesri için aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) Pay paydadan büyüktür.","B) 8/5 = 1 tam 2/5'tir.","C) 8/5 büyüktür 1'den.","D) 8/5 küçüktür 2'den."],
 correct:1,
 wrongFeedback:"B yanlış: 8/5 = 5/5 + 3/5 = 1 tam 3/5, 2/5 değil! A:8>5 ✓. C:8/5=1,6>1 ✓. D:8/5=1,6<2 ✓.",
 hint:"8/5 = kaç tam + kaç beşte kaç? 5/5=1 tam, kalan: 8-5=3 → 3/5",
 simplified:{question:"8/5 kesrinden 5/5 (=1 tam) çıkarılırsa ne kalır?",options:["A) 2/5","B) 3/5","C) 1/5","D) 4/5"],correct:1,hint:"8-5=3, payda 5 kalır → 3/5. Yani 1 tam 3/5!"}},

{id:"mn019",subject:"matematik",kazanim:108,kazanimName:"Tahmini Hesaplama",difficulty:2,type:"mc",
 question:"Berk markette 37 TL, 62 TL, 18 TL ve 43 TL ödeyecek. Her tutarı en yakın onluğa yuvarlayarak tahmini toplamı bulursa kaç TL bulur?",
 options:["A) 150 TL","B) 160 TL","C) 170 TL","D) 180 TL"],
 correct:1,
 wrongFeedback:"37→40, 62→60, 18→20, 43→40. Tahmini toplam: 40+60+20+40=160 TL.",
 hint:"Her sayıyı onluğa yuvarla: 37→?, 62→?, 18→?, 43→?",
 simplified:{question:"18 en yakın onluğa yuvarlandığında kaç olur? (birler=8)",options:["A) 10","B) 20","C) 18","D) 15"],correct:1,hint:"8≥5 → yukarı → 20!"}},

{id:"mn020",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:2,type:"mc",
 pasaj:"Pazartesi: 85 — Salı: 92 — Çarşamba: 78 — Perşembe: 96 — Cuma: 89 (günlük satış adedi)",
 question:"Tabloya göre aşağıdaki yorumlardan hangisi DOĞRUDUR?",
 options:["A) En yüksek satış Salı günündedir.","B) En düşük satış Çarşamba günündedir.","C) Pazartesi ve Cuma toplamı 180'dir.","D) Perşembe satışları Salıdan 3 fazladır."],
 correct:1,
 wrongFeedback:"A: En yüksek=96=Perşembe ✗. B: En düşük=78=Çarşamba ✓. C: 85+89=174≠180 ✗. D: 96-92=4 (3 değil) ✗.",
 hint:"Her şıkkı tablodaki değerlerle kontrol et.",
 simplified:{question:"85, 92, 78, 96, 89 arasında en küçük sayı hangisi?",options:["A) 85","B) 78","C) 89","D) 92"],correct:1,hint:"78 < 85 < 89 < 92 < 96 → en küçük 78 → Çarşamba!"}},

{id:"mn021",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Bir sınıfta 4 sıra masa var. Her sırada 7 masa, her masada 2 öğrenci oturuyor. Sınıftaki toplam öğrenci sayısı kaçtır?",
 options:["A) 48","B) 52","C) 56","D) 60"],
 correct:2,
 wrongFeedback:"Toplam masa: 4×7=28. Toplam öğrenci: 28×2=56.",
 hint:"Adım 1: Masa sayısı=4×7. Adım 2: Öğrenci=masa×2.",
 simplified:{question:"4 × 7 = ?",options:["A) 24","B) 28","C) 32","D) 36"],correct:1,hint:"4×7=28 masa. 28×2=56 öğrenci!"}},

{id:"mn022",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:2,type:"mc",
 question:"1 000'den büyük, 2 000'den küçük sayılar için:\nI.  Bu sayılar 4 basamaklıdır.\nII. Bu sayıların binler basamağı 1'dir.\nIII. Bu aralıkta tek sayı yoktur.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,
 wrongFeedback:"I: 1001-1999 hepsi 4 basamaklı ✓. II: Binler basamağı 1 ✓. III: 1001, 1003... tek sayılar var ✗. Doğru: I ve II → 2 ifade.",
 hint:"III'ü kontrol et: 1001 tek sayı mı? 1+2×500=1001... tek sayı var mı?",
 simplified:{question:"1 001 sayısı tek mi çift mi?",options:["A) Tek (birler=1)","B) Çift (birler=0)"],correct:0,hint:"Birler basamağı 1 → tek sayı. III yanlış!"}},

{id:"mn023",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:2,type:"mc",
 question:"Üçgenin iç açıları hakkında:\nDerya: 'Üç açının toplamı her zaman 180°'dir.'\nÇağlar: 'Dik açılı üçgende bir açı mutlaka 90°'dir.'\nKimin yorumu doğrudur?",
 options:["A) Yalnız Derya","B) Yalnız Çağlar","C) Her ikisi","D) Hiçbiri"],
 correct:2,
 wrongFeedback:"Derya: Üçgen iç açılar toplamı = 180° ✓. Çağlar: Dik açılı üçgen tanımı gereği bir açı = 90° ✓. Her ikisi de doğru.",
 hint:"Her iki ifadeyi de geometri bilgisiyle kontrol et.",
 simplified:{question:"Bir üçgenin iç açıları toplamı kaç derecedir?",options:["A) 90°","B) 180°","C) 270°","D) 360°"],correct:1,hint:"Üçgen iç açıları toplamı = 180° (sabit kural)!"}},

{id:"mn024",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:2,type:"mc",
 question:"5/9, 7/9, 3/9, 6/9 kesirleri büyükten küçüğe sıralandığında ilk sıraya hangisi gelir?",
 options:["A) 5/9","B) 7/9","C) 3/9","D) 6/9"],
 correct:1,
 wrongFeedback:"Paydalar eşit (9). Büyük pay → büyük kesir. 7>6>5>3 → en büyük: 7/9.",
 hint:"Paydalar aynı, sadece paylara bak. Hangi pay en büyük?",
 simplified:{question:"5, 7, 3, 6 sayılarından hangisi en büyük?",options:["A) 5","B) 7","C) 3","D) 6"],correct:1,hint:"7 en büyük → 7/9 en büyük kesir!"}},

{id:"mn025",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:2,type:"mc",
 question:"Ali 125 TL, Berk Ali'nin 3 katı kadar para biriktirdi. Birlikte kaç TL biriktirdiler?",
 options:["A) 375 TL","B) 450 TL","C) 500 TL","D) 625 TL"],
 correct:2,
 wrongFeedback:"Berk: 125×3=375. Toplam: 125+375=500 TL.",
 hint:"Berk = 125 × 3. Toplam = Ali + Berk.",
 simplified:{question:"125 × 3 = ?",options:["A) 325","B) 350","C) 375","D) 400"],correct:2,hint:"100×3=300, 25×3=75, toplam 375. Ali+Berk=125+375=500!"}},

// ══════════════════════════════════════════
// 🔴 İLERİ – DEĞERLENDİRME & SENTEZ (E26–E40)
// ══════════════════════════════════════════

{id:"mn026",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:3,type:"mc",
 question:"720 m² bir bahçenin 5/8'ine çilek, çilek alanının 2/5'ine domates ekildi. Domatese kaç m² ayrıldı?",
 options:["A) 120 m²","B) 150 m²","C) 180 m²","D) 200 m²"],
 correct:2,
 wrongFeedback:"Çilek: 720÷8×5=450 m². Domates: 450÷5×2=180 m².",
 hint:"Adım 1: 720'nin 5/8'i=450. Adım 2: 450'nin 2/5'i=?",
 simplified:{question:"720'nin 1/8'i kaçtır?",options:["A) 80","B) 90","C) 100","D) 720"],correct:1,hint:"720÷8=90. Yani 1/8=90. 5/8=5×90=450!"}},

{id:"mn027",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"Bir fırıncı sabah 240 simit, öğleden sonra sabahın 3/4'ü kadar simit pişirdi.\nI.  Öğleden sonra 180 simit pişirildi.\nII. Toplam 420 simit pişirildi.\nIII. Öğleden sonra pişirilen, sabahkinden 60 az.\nIV. Günlük ortalama (2 öğüne göre) 210 simittir.\nKaç ifade doğrudur?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:2,
 wrongFeedback:"I:240×3/4=180 ✓. II:240+180=420 ✓. III:240-180=60 ✓. IV:420÷2=210 ✓. Dördü de doğru!",
 hint:"Her ifadeyi hesaplayarak kontrol et. IV için: 420÷2=?",
 simplified:{question:"240'ın 3/4'ü kaçtır?",options:["A) 160","B) 170","C) 180","D) 190"],correct:2,hint:"240÷4=60. 60×3=180!"}},

{id:"mn028",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Öğrenci şu işlemi yaptı: 1 440 ÷ 8 = 160\nDoğru sonuç kaçtır ve hata nereden kaynaklanıyor?",
 options:["A) 160 doğrudur; hata yok.","B) Doğrusu 170'tir; onlar basamağı eksik.","C) Doğrusu 180'dir; öğrenci büyük ihtimalle 144÷8=18 yapıp sıfır eklemeyi unutmuştur.","D) Doğrusu 200'dür; bölme yerine çarpma yapılmalıydı."],
 correct:2,
 wrongFeedback:"1440÷8: 8×180=1440. Doğru cevap 180. Öğrenci muhtemelen 1440 yerine 1280 hesaplamış.",
 hint:"8 × 180 = ? Kontrol et: 8×100=800, 8×80=640, 800+640=1440 ✓",
 simplified:{question:"8 × 180 = ?",options:["A) 1 280","B) 1 440","C) 1 600","D) 1 800"],correct:1,hint:"8×100=800, 8×80=640, 800+640=1440. 1440÷8=180!"}},

{id:"mn029",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:3,type:"mc",
 question:"Bir tren yolculuğu 4 saat 30 dakika sürüyor. Yolculuğun 1/3'ünde öğle molası veriliyor. Öğle molası kaç dakika sürmektedir?",
 options:["A) 60 dk","B) 75 dk","C) 90 dk","D) 120 dk"],
 correct:2,
 wrongFeedback:"4 saat 30 dk = 270 dk. 270 ÷ 3 = 90 dk.",
 hint:"Toplam süreyi dakikaya çevir: 4×60+30=? Sonra 3'e böl.",
 simplified:{question:"4 saat 30 dakika kaç dakikadır?",options:["A) 240 dk","B) 250 dk","C) 270 dk","D) 300 dk"],correct:2,hint:"4×60=240, 240+30=270 dk. 270÷3=90 dk!"}},

{id:"mn030",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:3,type:"mc",
 pasaj:"1. sınav: 72 — 2. sınav: 85 — 3. sınav: 78 — 4. sınav: 89 (öğrenci puanları)",
 question:"I.  Notlar sürekli artmamıştır.\nII. En yüksek ile en düşük puan farkı 17'dir.\nIII. 4 sınav ortalaması 81'dir.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:2,
 wrongFeedback:"I:72→85 arttı, 85→78 azaldı → sürekli değil ✓. II:89-72=17 ✓. III:(72+85+78+89)/4=324/4=81 ✓. Üçü de doğru.",
 hint:"I: 85'ten 78'e düşüş var mı? III: (72+85+78+89)÷4=?",
 simplified:{question:"72 + 85 + 78 + 89 = ?",options:["A) 314","B) 319","C) 324","D) 329"],correct:2,hint:"72+85=157, 78+89=167, 157+167=324. 324÷4=81!"}},

{id:"mn031",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Selin şu hesabı yaptı: 135 × 6 = 780\nDoğru sonuç kaçtır?",
 options:["A) 810","B) 790","C) 800","D) 820"],
 correct:0,
 wrongFeedback:"135×6: 5×6=30(0,3). 3×6+3=21(1,2). 1×6+2=8. Sonuç: 810. Selin 780 dedi → 30 eksik hesaplamış.",
 hint:"135×6: basamak basamak çarp. 5×6=30, 3×6=18+taşıma...",
 simplified:{question:"5 × 6 = ?",options:["A) 20","B) 25","C) 30","D) 35"],correct:2,hint:"5×6=30 → 0 yaz, 3 taşı. Devam: 3×6=18+3=21. 1×6+2=8 → 810!"}},

{id:"mn032",subject:"matematik",kazanim:107,kazanimName:"Örüntü ve Ritmik Sayma",difficulty:3,type:"mc",
 question:"Bir örüntünün ilk 5 terimi: 3, 7, 11, 15, 19\nBu örüntünün 10. ve 11. terimlerinin toplamı kaçtır?",
 options:["A) 78","B) 80","C) 82","D) 84"],
 correct:2,
 wrongFeedback:"Fark: 4. 10. terim: 3+(10-1)×4=3+36=39. 11. terim: 3+10×4=43. Toplam: 39+43=82.",
 hint:"Genel kural: 3+(n-1)×4. 10. terim: n=10. 11. terim: n=11. Topla.",
 simplified:{question:"(10-1) × 4 = ?",options:["A) 32","B) 36","C) 40","D) 44"],correct:1,hint:"9×4=36. 3+36=39 → 10. terim!"}},

{id:"mn033",subject:"matematik",kazanim:104,kazanimName:"Geometri",difficulty:3,type:"mc",
 question:"Dikdörtgen için aşağıdakilerden hangisi YANLIŞTIR?",
 options:["A) Dört kenarı vardır.","B) Karşılıklı kenarları eşittir.","C) Tüm kenarları birbirine eşittir.","D) Dört iç açısı da 90°'dir."],
 correct:2,
 wrongFeedback:"C yanlış: Dikdörtgende uzun ve kısa kenarlar eşit olmayabilir. Tüm kenarları eşit olan şekil KARE'dir.",
 hint:"Dikdörtgen ile kareyi karıştırma! Dikdörtgende kaç tane farklı kenar boyu var?",
 simplified:{question:"Dikdörtgende kaç çift farklı kenar uzunluğu olabilir?",options:["A) 1 (hepsi eşit)","B) 2 (uzun+kısa çift)","C) 4 (hepsi farklı)","D) 3"],correct:1,hint:"2 uzun + 2 kısa → 2 farklı uzunluk. Hepsi eşit değil!"}},

{id:"mn034",subject:"matematik",kazanim:101,kazanimName:"Sayılar ve Basamak Değeri",difficulty:3,type:"mc",
 question:"Öğrenci 6 348 sayısını 'altı yüz kırk sekiz' olarak okudu. Bu hatayı doğru açıklayan seçenek hangisidir?",
 options:["A) Öğrenci binler basamağını atladı; doğrusu 'altı bin üç yüz kırk sekiz'dir.","B) Okuma doğrudur.","C) Öğrenci yüzler basamağını yanlış okudu; doğrusu 'altı bin iki yüz kırk sekiz'dir.","D) Öğrenci hem binler hem yüzler basamağını karıştırdı."],
 correct:0,
 wrongFeedback:"6 348: binler=6, yüzler=3, onlar=4, birler=8 → 'altı bin üç yüz kırk sekiz'. Öğrenci 6'yı 'altı yüz' gibi okumuş, binler basamağını atlamış.",
 hint:"6 348'de basamakları sıra ile oku: 6=binler, 3=yüzler, 4=onlar, 8=birler.",
 simplified:{question:"6 348 sayısında 6 rakamı hangi basamaktadır?",options:["A) Yüzler","B) Onlar","C) Binler","D) Birler"],correct:2,hint:"4 basamaklı sayıda: sol→sağ = bin-yüz-on-bir. 6 binler basamağında!"}},

{id:"mn035",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:3,type:"mc",
 question:"Bir öğrencinin günlük 24 saati:\n- Uyku: 8 saat\n- Okul: 6 saat\n- Ödev: toplam zamanın 1/8'i\n- Geri kalanı boş zaman\nBoş zaman kaç saattir?",
 options:["A) 5 saat","B) 6 saat","C) 7 saat","D) 8 saat"],
 correct:2,
 wrongFeedback:"Ödev: 24×1/8=3 saat. Boş: 24-8-6-3=7 saat.",
 hint:"Ödev=24÷8=3 saat. Boş=24-uyku-okul-ödev.",
 simplified:{question:"24'ün 1/8'i kaçtır?",options:["A) 2","B) 3","C) 4","D) 8"],correct:1,hint:"24÷8=3. Ödev=3 saat. 24-8-6-3=7 saat boş!"}},

{id:"mn036",subject:"matematik",kazanim:106,kazanimName:"Grafik ve Tablo",difficulty:3,type:"mc",
 pasaj:"1. hafta: 1 200 TL — 2. hafta: 1 800 TL — 3. hafta: 1 500 TL — 4. hafta: 2 100 TL (dükkan cirosu)",
 question:"I.  En yüksek ciro 4. haftaya aittir.\nII. 2. ve 3. hafta toplamı, 3. ve 4. hafta toplamından azdır.\nIII. 4 haftanın ortalaması 1 650 TL'dir.\nIV. Satışlar sürekli artmıştır.\nKaç ifade doğrudur?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,
 wrongFeedback:"I:2100=max ✓. II:1800+1500=3300<1500+2100=3600 ✓. III:(1200+1800+1500+2100)/4=6600/4=1650 ✓. IV:1800→1500 düşüş var ✗. I,II,III doğru → 3 ifade.",
 hint:"IV'ü kontrol et: 1800'den 1500'e düşüş var mı?",
 simplified:{question:"1 800'den 1 500'e geçiş artış mı azalış mı?",options:["A) Artış","B) Azalış"],correct:1,hint:"1800>1500 → azaldı → sürekli artmıyor → IV yanlış!"}},

{id:"mn037",subject:"matematik",kazanim:105,kazanimName:"Zaman ve Ölçme",difficulty:3,type:"mc",
 question:"08:25'te hareket eden tren 3 saat 48 dakika yol yapacak.\nÇağlar: 'Tren 12:13'te varır.'\nDerya: 'Tren 12:03'te varır.'\nKimin hesabı doğrudur?",
 options:["A) Yalnız Çağlar","B) Yalnız Derya","C) Her ikisi","D) Hiçbiri"],
 correct:0,
 wrongFeedback:"08:25+3 saat=11:25. 11:25+48dk: 25+48=73dk=60+13dk → 12:13. Çağlar doğru, Derya yanlış.",
 hint:"Adım 1: 08:25+3saat=11:25. Adım 2: 11:25+48dk=? (25+48=73dk)",
 simplified:{question:"25 + 48 = ? dakika",options:["A) 63","B) 73","C) 83","D) 53"],correct:1,hint:"25+48=73 dakika. 73=60+13. 11:25+1 saat=12:25, 12:25-47dk=11:25+13dk=11:38? Hayır: 11:25+48dk: dakikalar 25+48=73, 73-60=13, saat +1 → 12:13 ✓"}},

{id:"mn038",subject:"matematik",kazanim:109,kazanimName:"Hata Bulma",difficulty:3,type:"mc",
 question:"Ayşe şu problemi çözdü:\n'Pastanın 2/6'sını Ahmet, 3/6'sını Fatma yedi. Kaçı yendi?'\nAyşe: 2/6 + 3/6 = 5/12 yendi.\nBu hatayı doğru açıklayan seçenek hangisidir?",
 options:["A) İşlemde hata yoktur; 5/12 doğru.","B) Paydalar toplanmamış; 5/6 yenmeli.","C) Hem paylar hem paydalar toplanmış; doğrusu 5/6'dır.","D) Paylar toplanmamış; doğrusu 5/12."],
 correct:2,
 wrongFeedback:"5/12: pay 2+3=5 ✓ ama payda 6+8=12 ✗ (Ayşe paydaları da toplamış). Doğrusu: paydalar eşit, değişmez → 5/6.",
 hint:"Paydalar aynı (6). Aynı paydada toplama kuralı nedir?",
 simplified:{question:"2/6 + 3/6 = ? (Paydalar aynı!)",options:["A) 5/12","B) 5/6","C) 1/6","D) 6/6"],correct:1,hint:"Paydalar aynı → sadece paylar toplanır: 2+3=5, payda 6 kalır → 5/6!"}},

{id:"mn039",subject:"matematik",kazanim:103,kazanimName:"Kesirler",difficulty:3,type:"mc",
 question:"Bir market sahibinin ekmek hesabı:\n- Sabah 360 adet ekmek pişirdi.\n- Öğlene kadar 3/4'ünü sattı.\n- Öğleden sonra kalan ekmeğin 1/3'ünü sattı.\nAkşam kaç ekmek kaldı?",
 options:["A) 45","B) 60","C) 75","D) 90"],
 correct:1,
 wrongFeedback:"Öğlene kadar satılan: 360×3/4=270. Kalan: 360-270=90. Öğleden sonra: 90×1/3=30. Akşam: 90-30=60.",
 hint:"Adım 1: 360'ın 3/4'ü=270. Adım 2: Kalan=90. Adım 3: 90'ın 1/3'ü=30. Adım 4: 90-30=?",
 simplified:{question:"360'ın 3/4'ü kaçtır?",options:["A) 240","B) 270","C) 300","D) 90"],correct:1,hint:"360÷4=90. 90×3=270!"}},

{id:"mn040",subject:"matematik",kazanim:102,kazanimName:"Dört İşlem ve Sözel Problem",difficulty:3,type:"mc",
 question:"Bir spor salonu üyeliği aylık 450 TL. Yıllık üyelikte 1/4 indirim uygulanıyor.\nYıllık üyelik ile 12 ay ayrı ayrı ödemek arasındaki fark kaç TL'dir?",
 options:["A) 1 000 TL","B) 1 200 TL","C) 1 350 TL","D) 1 500 TL"],
 correct:2,
 wrongFeedback:"Aylık 12 ay: 450×12=5400. Yıllık indirim: 5400×1/4=1350 TL indirim. Yıllık fiyat: 5400-1350=4050. Fark=1350.",
 hint:"Adım 1: 12 ay toplamı=450×12. Adım 2: Tasarruf=toplam×1/4.",
 simplified:{question:"5 400 TL'nin 1/4'ü kaçtır?",options:["A) 1 000","B) 1 350","C) 1 500","D) 2 700"],correct:1,hint:"5400÷4=1350. İndirim miktarı = tasarruf = 1350 TL!"}}
];
const QBF = [
// ══ KONU 1: Mıknatısın Etkileri ══
{id:"f001",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi mıknatıs tarafından çekilir?",
 options:["A) Plastik kaşık","B) Ahşap kalem","C) Demir çivi","D) Cam bardak"],
 correct:2,wrongFeedback:"Mıknatıslar yalnızca demir, nikel ve kobalt gibi metalleri çeker. Plastik, ahşap ve cam mıknatıstan etkilenmez.",
 hint:"Mıknatıs metalik maddeleri çeker. Demir hangi şıkta?",
 simplified:{question:"Demir, plastik, ahşap, cam — hangisi metaldir?",options:["A) Plastik","B) Demir","C) Ahşap","D) Cam"],correct:1,hint:"Demir metal → mıknatıs çeker!"}},

{id:"f002",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:1,type:"mc",
 question:"Mıknatısın kaç kutbu vardır?",
 options:["A) 1","B) 2","C) 3","D) 4"],
 correct:1,wrongFeedback:"Her mıknatısın K (kuzey) ve G (güney) olmak üzere 2 kutbu vardır.",
 hint:"Kuzey ve güney kutubu — bu kaç eder?",
 simplified:{question:"Mıknatısın kutupları: Kuzey (K) ve Güney (G). Toplam kaç kutup?",options:["A) 1","B) 2","C) 4"],correct:1,hint:"K + G = 2 kutup!"}},

{id:"f003",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi mıknatıstan ETKİLENMEZ?",
 options:["A) Demir para","B) Çelik iğne","C) Tahta tahta parçası","D) Nikel madeni"],
 correct:2,wrongFeedback:"Tahta doğal bir malzeme olup mıknatıstan etkilenmez. Demir, çelik ve nikel mıknatıstan etkilenir.",
 hint:"Mıknatıs metalik maddeleri çeker. Tahta metal midir?",
 simplified:{question:"Tahta metal midir?",options:["A) Evet, metal","B) Hayır, ahşap — metalik değil"],correct:1,hint:"Tahta ahşap → metal değil → mıknatıs etkilemez!"}},

{id:"f004",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:1,type:"mc",
 question:"Günlük hayatta mıknatıs aşağıdakilerden hangisinde kullanılır?",
 options:["A) Plastik şişe kapağı","B) Buzdolabı kapısı mıknatısı","C) Kâğıt bardak","D) Tahta masa"],
 correct:1,wrongFeedback:"Buzdolabı kapıları sızdırmaz kapanabilmek için mıknatıs içerir. Bu yaygın bir günlük kullanım örneğidir.",
 hint:"Buzdolabı kapısı kapanırken yapışan şey nedir?",
 simplified:{question:"Buzdolabı kapısı neden kendiliğinden kapanır?",options:["A) Yapışkanlığından","B) İçindeki mıknatıs sayesinde","C) Ağırlığından","D) Plastikten"],correct:1,hint:"Buzdolabı kapısında mıknatıs var!"}},

{id:"f005",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:2,type:"mc",
 pasaj:"Öğrenciler deney masasına şu nesneleri koydu: demir ataç, alüminyum folyo, bakır madeni para, çelik kaşık, plastik uçlu kalem.",
 question:"Bu nesnelerden hangilerini mıknatıs çeker?",
 options:["A) Yalnız demir ataç","B) Demir ataç ve çelik kaşık","C) Demir ataç, alüminyum folyo ve çelik kaşık","D) Hepsi"],
 correct:1,wrongFeedback:"Mıknatıs yalnızca demir ve çeliği çeker. Alüminyum, bakır mıknatıstan etkilenmez.",
 hint:"Demir ve çelik mıknatıstan etkilenir. Alüminyum, bakır etkilenmez.",
 simplified:{question:"Alüminyum mıknatıstan etkilenir mi?",options:["A) Evet","B) Hayır — alüminyum mıknatıstan etkilenmez"],correct:1,hint:"Sadece demir, nikel, kobalt etkilenir. Alüminyum değil!"}},

{id:"f006",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:2,type:"mc",
 question:"İki mıknatısın aynı kutupları birbirine yaklaştırılırsa ne olur?",
 options:["A) Çekerler","B) İterler","C) Hiçbir şey olmaz","D) Birleşirler"],
 correct:1,wrongFeedback:"Aynı kutuplar (K-K veya G-G) birbirini iter. Farklı kutuplar (K-G) birbirini çeker.",
 hint:"'Zıt kutuplar çeker, aynı kutuplar iter' kuralını hatırla.",
 simplified:{question:"K kutbu ile K kutbu karşı karşıya gelse ne olur?",options:["A) Çekerler","B) İterler"],correct:1,hint:"Aynı kutuplar → iter!"}},

{id:"f007",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:2,type:"mc",
 question:"Mıknatıslar hakkında:\nI.  Demir ve çeliği çeker.\nII. Plastik ve ahşabı çeker.\nIII. İki kutbu vardır.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,wrongFeedback:"I doğru (demir/çelik çekilir). II yanlış (plastik/ahşap çekilmez). III doğru (K ve G kutupları). 2 doğru.",
 hint:"II'yi kontrol et: Plastik mıknatıstan çekilir mi?",
 simplified:{question:"Plastik mıknatıstan çekilir mi?",options:["A) Evet","B) Hayır"],correct:1,hint:"Plastik metal değil → mıknatıs çekmez → II yanlış!"}},

{id:"f008",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:3,type:"mc",
 question:"Öğrenci 'Mıknatısı suya batırırsak çekme kuvvetini kaybeder.' dedi.\nBu yargı doğru mudur?",
 options:["A) Evet, su mıknatısı etkisiz kılar.","B) Hayır, mıknatıs su içinde de metal nesneleri çekebilir.","C) Evet, sadece ıslak metalleri çekemez.","D) Kısmen doğru, çekme azalır ama bitmez."],
 correct:1,wrongFeedback:"Mıknatısın çekme kuvveti su içinde de devam eder. Su mıknatıs kuvvetini engellemez.",
 hint:"Mıknatıs kuvveti su, kâğıt gibi maddelerin içinden geçebilir mi?",
 simplified:{question:"Mıknatıs kuvveti yalnızca havada mı çalışır?",options:["A) Evet, sadece havada","B) Hayır, su ve diğer ortamlarda da çalışır"],correct:1,hint:"Mıknatıs su içinde de çeker!"}},

{id:"f009",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:3,type:"mc",
 question:"Ali: 'Mıknatısı çok ısıtırsak çekme özelliğini kaybedebilir.'\nAyşe: 'Mıknatıs ne kadar uzakta olursa olsun aynı kuvvetle çeker.'\nKimin yorumu doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Ayşe","C) Her ikisi","D) Hiçbiri"],
 correct:0,wrongFeedback:"Ali doğru: Isı mıknatısın özelliğini bozabilir. Ayşe yanlış: Mıknatıs kuvveti uzaklaştıkça azalır.",
 hint:"Uzaklaştıkça mıknatıs kuvveti artar mı azalır mı?",
 simplified:{question:"Mıknatıstan uzaklaştıkça çekme kuvveti ne olur?",options:["A) Artar","B) Azalır","C) Değişmez"],correct:1,hint:"Uzaklık artar → kuvvet azalır!"}},

{id:"f010",subject:"fen",kazanim:201,kazanimName:"Mıknatısın Etkileri",difficulty:3,type:"mc",
 question:"Bir mıknatıs ikiye bölünürse ne olur?",
 options:["A) Mıknatıslık özelliği kaybolur.","B) Parçaların her biri kendi K ve G kutuplarına sahip olur.","C) Yalnızca K kutuplu parça kalır.","D) Parçalar birbirini çeker ama metallerle etkileşemez."],
 correct:1,wrongFeedback:"Mıknatıs ikiye bölünürse her parça kendi kuzey ve güney kutbuna sahip yeni bir mıknatıs olur.",
 hint:"Mıknatıs bölünse de her parça tam mıknatıs gibi davranır mı?",
 simplified:{question:"Mıknatıs ikiye kırılırsa kaç kutup oluşur?",options:["A) Parça başına 1 kutup (toplam 2)","B) Parça başına 2 kutup (toplam 4)"],correct:1,hint:"Her parça kendi K ve G kutpuna sahip → toplam 4 kutup!"}},

// ══ KONU 2: Maddenin Özellikleri / 5 Duyu ══
{id:"f011",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:1,type:"mc",
 question:"Bir maddeyi tanımlamak için kullandığımız özelliklerden hangisi DOĞRU verilmiştir?",
 options:["A) Renk, koku ve sertlik maddenin özellikleridir.","B) Yalnızca renk maddenin özelliğidir.","C) Maddelerin özellikleri herkese göre değişir.","D) Sadece görme duyusu ile madde tanınır."],
 correct:0,wrongFeedback:"Renk, koku, sertlik, ıslaklık, sıcaklık gibi özellikler maddenin niteliklerini tanımlar. Beş duyu organı bu özellikleri algılamamıza yardımcı olur.",
 hint:"Madde hangi duyu organlarıyla tanınabilir? Birden fazla özellik var mı?",
 simplified:{question:"Elma için hangi özellikler söylenebilir?",options:["A) Yalnızca rengi","B) Rengi, kokusu, tadı, sertliği — birden fazla özellik"],correct:1,hint:"Elma kırmızı, sert, tatlı, meyveli kokulu → birden fazla özellik!"}},

{id:"f012",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:1,type:"mc",
 question:"Hangi duyu organı ile maddenin sertliğini anlayabiliriz?",
 options:["A) Göz","B) Burun","C) El (dokunma)","D) Kulak"],
 correct:2,wrongFeedback:"Sertlik dokunma duyusuyla anlaşılır. Göz rengi, burun kokuyu, kulak sesi algılar.",
 hint:"Sertliği anlamak için maddeye ne yaparsın?",
 simplified:{question:"Bir taşın sert olduğunu nasıl anlarsın?",options:["A) Bakarak","B) Dokunarak","C) Koklayarak","D) Dinleyerek"],correct:1,hint:"Dokunmak → sertlik hissi → dokunma duyusu!"}},

{id:"f013",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:1,type:"mc",
 question:"Sabunun kayganlığı hangi duyu organı ile algılanır?",
 options:["A) Göz (görme)","B) Burun (koku)","C) Dil (tat)","D) El (dokunma)"],
 correct:3,wrongFeedback:"Kayganlık, ıslaklık, sertlik, pürüzlülük gibi özellikler dokunma duyusuyla algılanır.",
 hint:"Kaygan mı değil mi? Bunu anlamak için ne yaparsın?",
 simplified:{question:"Sabuna dokunduğunda ne hissedersin?",options:["A) Kaygan hissederim (dokunma)","B) Güzel görünür (görme)"],correct:0,hint:"Kayganlık = dokunma duyusu!"}},

{id:"f014",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:1,type:"mc",
 question:"Çiçeğin kokusu hangi duyu organı ile algılanır?",
 options:["A) Kulak","B) Burun","C) Göz","D) Dil"],
 correct:1,wrongFeedback:"Koku burnu duyusuyla algılanır. Her duyu organının algıladığı özellikler farklıdır.",
 hint:"Koku ne ile algılanır? Çiçeği kokladığında ne kullanırsın?",
 simplified:{question:"Koku hangi duyu organıyla algılanır?",options:["A) Göz","B) Burun","C) Kulak","D) El"],correct:1,hint:"Koklama = Burun!"}},

{id:"f015",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:2,type:"mc",
 question:"Bir öğrenci gözleri kapalı olarak önüne getirilen nesneyi tanımlamaya çalıştı.\nSöyledikleri: 'Soğuk, pürüzlü, ağır, sert.'\nBu öğrenci hangi duyu organını kullandı?",
 options:["A) Yalnızca görme","B) Yalnızca dokunma","C) Dokunma ve koku","D) Görme ve dokunma"],
 correct:1,wrongFeedback:"Soğuk, pürüzlü, ağır, sert özelliklerin tamamı dokunma duyusuyla algılanır. Gözleri kapalı olduğu için görme kullanmadı.",
 hint:"Gözleri kapalı — görme yok. Soğuk, pürüzlü, sert hissi hangi duyudan gelir?",
 simplified:{question:"Soğukluk ve sertliği el ile mi gözle mi hissederiz?",options:["A) El ile — dokunma","B) Gözle — görme"],correct:0,hint:"Sertlik ve soğukluk → dokunma duyusu!"}},

{id:"f016",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:2,type:"mc",
 question:"Bir maddenin özelliklerine bakılıyor:\n● Şeker: beyaz, tatlı, katı, çözünür\n★ Kaya tuzu: beyaz, tuzlu, katı, çözünür\n■ Zeytin yağı: sarı, yağlı, sıvı, hafif koku\nBu maddeler arasında ortak olan özellikler nelerdir?",
 options:["A) Renk ve hal","B) Tat ve koku","C) Yalnızca renk","D) Tat ve hal"],
 correct:0,wrongFeedback:"Şeker ve kaya tuzu beyaz renklidir (renk ortak). Şeker ve kaya tuzu katı haldedir (hal ortak). Yağ ise farklı renk ve haldedir.",
 hint:"Her üçünü karşılaştır. Hepsinde aynı olan özellik var mı?",
 simplified:{question:"Şeker ve kaya tuzu hangi özellik bakımından benzerdir?",options:["A) İkisi de tatlı","B) İkisi de beyaz ve katı","C) İkisi de sıvı"],correct:1,hint:"Her ikisi beyaz + katı → ortak: renk ve hal!"}},

{id:"f017",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:2,type:"mc",
 question:"Maddelerin özellikleri hakkında:\nI.  Renk gözle algılanır.\nII. Koku dille algılanır.\nIII. Sertlik dokunma ile algılanır.\nIV. Ses kulakla algılanır.\nHangisi YANLIŞTIR?",
 options:["A) Yalnız II","B) Yalnız IV","C) II ve IV","D) I ve III"],
 correct:0,wrongFeedback:"II yanlış: Koku burunla, dil değil. I ✓, III ✓, IV ✓ (ses kulakla).",
 hint:"Koku dille mi yoksa burunla mı algılanır?",
 simplified:{question:"Koku hangi duyu organıyla algılanır — dil mi burun mu?",options:["A) Dil","B) Burun"],correct:1,hint:"Koklama = Burun! Dil tadı algılar."}},

{id:"f018",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:3,type:"mc",
 question:"Berk: 'Maddenin yalnızca görünür özellikleri bilimsel olarak incelenebilir.'\nSelin: 'Renk, koku, tat, sertlik, ıslaklık gibi tüm özellikler bilimsel olarak incelenebilir.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Bilim tüm duyularla algılanabilen özellikleri inceler. Görünür olmayan koku ve tat da bilimsel çalışma konusudur.",
 hint:"Kimya deneyleri yalnızca görünür özelliklere mi bakar?",
 simplified:{question:"Bilim sadece gözle görülen şeyleri mi inceler?",options:["A) Evet, yalnızca görünür","B) Hayır, tüm duyusal özellikler"],correct:1,hint:"Kimyacılar kokuyu da tadı da inceler!"}},

{id:"f019",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:3,type:"mc",
 pasaj:"Öğrenci maddeleri şu özelliklerine göre sınıflandırdı:\nGrup 1 (Sert): demir, taş, buz\nGrup 2 (Yumuşak): çamur, puf böreği, pamuk",
 question:"Bu sınıflandırma hakkında hangisi DOĞRUDUR?",
 options:["A) Sınıflandırma renk özelliğine göre yapılmıştır.","B) Sınıflandırma sertlik özelliğine göre yapılmıştır.","C) Buz yanlış gruba konulmuştur; yumuşak olduğu için Grup 2'de olmalıdır.","D) Bu sınıflandırma bilimsel değildir."],
 correct:1,wrongFeedback:"Grup 1'dekiler sert maddeler, Grup 2'dekiler yumuşak maddeler. Sınıflandırma sertlik özelliğine göre yapılmış. Buz sert olduğu için Grup 1'de doğru.",
 hint:"İki grubun ortak özelliğine bak: demir-taş-buz ile çamur-puf-pamuk arasındaki fark ne?",
 simplified:{question:"Buz sert bir madde midir?",options:["A) Evet, buz sert bir maddedir.","B) Hayır, buz yumuşaktır."],correct:0,hint:"Buz donmuş su → katı ve sert!"}},

{id:"f020",subject:"fen",kazanim:202,kazanimName:"Maddenin Temel Özellikleri",difficulty:3,type:"mc",
 question:"Bir öğrenci şu deneyi yaptı: Gözleri kapalı 5 maddeyi tanımlamak için elleri, burnu ve kulağını kullandı. Yalnızca görme duyusunu kullanmadan kaç maddenin özelliğini belirleyemez?",
 options:["A) Hiçbirini — görme olmadan da tanımlayabilir.","B) Renk özelliğini — rengi görmeden bilemez.","C) Tüm özellikleri — görme olmadan hiçbir şey bilinmez.","D) Koku ve tadı — bunlar yalnızca gözle anlaşılır."],
 correct:1,wrongFeedback:"Rengi görmeden bilemez. Ama koku, sertlik, ses gibi özellikler diğer duyularla algılanabilir.",
 hint:"Gözler kapalıyken hangi özellik kesinlikle bilinemez?",
 simplified:{question:"Gözler kapalıyken rengi anlayabilir miyiz?",options:["A) Evet","B) Hayır — renk ancak görmekle anlaşılır"],correct:1,hint:"Renk = görme duyusu. Göz olmadan renk bilinmez!"}},

// ══ KONU 3: Isınma ve Soğuma ══
{id:"f021",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:1,type:"mc",
 question:"Bir madde ısındığında ne olur?",
 options:["A) Her zaman erir.","B) Tanecikler hızlanır ve madde genellikle genişler.","C) Soğur ve küçülür.","D) Hiçbir değişiklik olmaz."],
 correct:1,wrongFeedback:"Isınma: tanecikler hızlanır, birbirinden uzaklaşır; madde genellikle genişler. Erime sadece belirli sıcaklıklarda olur.",
 hint:"Isınan metal ray neden genişler?",
 simplified:{question:"Demir köprüler yazın mı kışın mı daha uzundur?",options:["A) Yazın — ısınınca genişler","B) Kışın — soğuyunca büyür","C) Her zaman aynı"],correct:0,hint:"Isınma → genişleme → yazın daha uzun!"}},

{id:"f022",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:1,type:"mc",
 question:"Termometre nasıl çalışır?",
 options:["A) İçindeki cıva ısınınca büzülür.","B) İçindeki sıvı ısınınca genişleyerek yükselir.","C) Isıyı içinde hapseder.","D) Soğukta genişleyerek çalışır."],
 correct:1,wrongFeedback:"Termometredeki sıvı (cıva veya alkol) ısınınca genişler ve tüpte yukarı çıkar. Bu yükseliş sıcaklığı gösterir.",
 hint:"Termometre sıvısı sıcakta mı aşağı iner yukarı çıkar?",
 simplified:{question:"Ateşin yüksek olduğunu termometrede nasıl anlarız?",options:["A) Sıvı yükselir","B) Sıvı alçalır","C) Sıvı renk değiştirir"],correct:0,hint:"Sıcak → genişleme → termometre sıvısı yükselir!"}},

{id:"f023",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:1,type:"mc",
 question:"Yemek pişirirken tencere kapağının içinden su damlacıkları neden oluşur?",
 options:["A) Tencere deliktir.","B) Buhar soğuyunca su damlacıklarına dönüşür.","C) Kapak kendi kendine su üretir.","D) Pişirme süreci suyu artırır."],
 correct:1,wrongFeedback:"Suyun buharı (gaz) kapağın iç yüzeyine çarpıp soğuyunca yoğuşarak su damlacıklarına dönüşür.",
 hint:"Buhar soğuk bir yüzeye çarparsa ne olur?",
 simplified:{question:"Buhar soğudukça ne olur?",options:["A) Kaybolur","B) Tekrar sıvı suya döner","C) Buz olur"],correct:1,hint:"Buhar soğuma → yoğuşma → su damlacıkları!"}},

{id:"f024",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:1,type:"mc",
 question:"Demir bir top ısıtıldığında ne olur?",
 options:["A) Küçülür.","B) Erir hemen.","C) Genişler.","D) Hiçbir şey değişmez."],
 correct:2,wrongFeedback:"Isınan katı maddeler genellikle genişler. Demir topun hacmi sıcaklıkla birlikte artar.",
 hint:"Isınan maddeler genişler mi küçülür mü?",
 simplified:{question:"Isınan maddeler genellikle ne olur?",options:["A) Büyür (genişler)","B) Küçülür (büzülür)","C) Değişmez"],correct:0,hint:"Isı → tanecikler uzaklaşır → genişleme!"}},

{id:"f025",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:2,type:"mc",
 pasaj:"Çağlar şu deneyi yaptı: Bir balon ağzına taktığı şişeyi önce sıcak suya, sonra buzlu suya koydu.",
 question:"Sıcak suya konulan şişenin balonuna ne olur?",
 options:["A) Şişer (büyür)","B) Küçülür","C) Değişmez","D) Patlar"],
 correct:0,wrongFeedback:"Sıcak hava genişler. Şişenin içindeki hava ısınınca genişleyerek balonu şişirir.",
 hint:"Isınan hava genişler. Balon hava dolunca ne olur?",
 simplified:{question:"Sıcak hava genişler mi büzülür mü?",options:["A) Genişler","B) Büzülür"],correct:0,hint:"Sıcak → tanecikler hızlanır → hava genişler → balon şişer!"}},

{id:"f026",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:2,type:"mc",
 question:"Bir köprünün iki bölümü arasında neden boşluk bırakılır?",
 options:["A) Köprü daha hafif olsun diye","B) Isınma ile genişleme için yer açık bırakılır.","C) Mühendisler unutmuştur.","D) Köprüden su geçsin diye"],
 correct:1,wrongFeedback:"Metaller ısındıkça genişler. Bu boşluklar yazın ısınan köprünün genişleyebilmesi için tasarımsal bir önlemdir.",
 hint:"Yazın ısınan köprü ne olur? Bu genişleme için alan gerekli mi?",
 simplified:{question:"Metal ısındığında büyür mü küçülür mü?",options:["A) Büyür (genişler)","B) Küçülür"],correct:0,hint:"Metal ısınca genişler → köprüde boşluk şart!"}},

{id:"f027",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:2,type:"mc",
 question:"Isınma-soğuma hakkında:\nI.  Maddeler ısındığında genellikle genişler.\nII. Maddeler soğuduğunda genellikle büzülür.\nIII. Su donduğunda büzülür.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,wrongFeedback:"I doğru, II doğru, III yanlış: Su donduğunda diğer maddelerin aksine GENİŞLER (buz şişeleri çatlatır). 2 doğru.",
 hint:"Su donduğunda — buz mu büzülür mü yoksa genişler mi?",
 simplified:{question:"Şişeye kadar doldurulan su dondurulursa şişe çatlar mı?",options:["A) Hayır, su büzülür, şişeye sığar","B) Evet, buz genişler, şişeyi çatlatır"],correct:1,hint:"Su donunca genişler → buz kaplarda yükselir → III yanlış!"}},

{id:"f028",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:3,type:"mc",
 question:"Elektrik tellerinin yaz aylarında sarkık, kış aylarında gergin durması hangi kavramla açıklanır?",
 options:["A) Isınma-genişleme ve soğuma-büzülme","B) Ağırlık ve yerçekimi","C) Elektrik akımı","D) Nem ve yağış"],
 correct:0,wrongFeedback:"Yazın sıcakta tel genişleyerek uzar ve sarkar. Kışın soğukta büzülerek kısalır ve gerer. Bu ısı ile genişleme-büzülme olayıdır.",
 hint:"Kışın soğuk teli büzme mi daha zor?",
 simplified:{question:"Soğuyan tel kısalır mı uzar mı?",options:["A) Kısalır — büzülür","B) Uzar — genişler"],correct:0,hint:"Soğuma → büzülme → tel kısalır → gergin görünür!"}},

{id:"f029",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:3,type:"mc",
 question:"Derya: 'Katı maddeler ısınırsa kesinlikle erir.'\nBerk: 'Katı maddeler ısınırsa genişlerler; erimek için çok daha yüksek sıcaklık gerekir.'\nKimin görüşü daha doğrudur?",
 options:["A) Yalnız Derya","B) Yalnız Berk","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Berk doğru: Genişleme düşük sıcaklıklarda bile olur. Erime için erime noktasına ulaşmak gerekir. Örn: Demir 1538°C'de erir.",
 hint:"Demir düşük sıcaklıkta erir mi yoksa genişler mi?",
 simplified:{question:"Demir biraz ısındığında ne olur?",options:["A) Hemen erir","B) Biraz genişler ama katı kalır"],correct:1,hint:"Erime için çok yüksek sıcaklık gerekir. Önce genişler!"}},

{id:"f030",subject:"fen",kazanim:203,kazanimName:"Maddelerin Isınıp Soğuması",difficulty:3,type:"mc",
 question:"Bir termometre -10°C den 40°C'ye çıkarıldığında ne gözlemlenir?",
 options:["A) Sıvı düşer, renk değişir.","B) Sıvı yükselir çünkü ısınan sıvı genişler.","C) Sıvı dışarı taşar.","D) Hiçbir şey değişmez."],
 correct:1,wrongFeedback:"Sıcaklık artınca termometredeki sıvı genişler ve tüpte yükselir. 50 derece fark büyük bir yükseliş sağlar.",
 hint:"Termometre sıvısı ısındığında ne olur?",
 simplified:{question:"Termometre sıvısı ısındığında yükselir mi alçalır mı?",options:["A) Yükselir","B) Alçalır"],correct:0,hint:"Isınma → genişleme → sıvı yükselir!"}},

// ══ KONU 4: Hâl Değişimi ══
{id:"f031",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:1,type:"mc",
 question:"Buz eritildiğinde hangi hâl değişimi gerçekleşir?",
 options:["A) Katı → Gaz (süblimleşme)","B) Sıvı → Gaz (buharlaşma)","C) Katı → Sıvı (erime)","D) Gaz → Sıvı (yoğuşma)"],
 correct:2,wrongFeedback:"Buz (katı) ısı alarak suya (sıvı) dönüşür. Bu katı → sıvı geçişi yani ERİMEdir.",
 hint:"Buz katı mı? Su sıvı mı? Buz → su hangi yön?",
 simplified:{question:"Katı halden sıvı hale geçme ne adı alır?",options:["A) Donma","B) Erime","C) Buharlaşma"],correct:1,hint:"Katı → sıvı = ERİME!"}},

{id:"f032",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:1,type:"mc",
 question:"Su kaynadığında hangi hâl değişimi olur?",
 options:["A) Erime — sıvı → katı","B) Buharlaşma — sıvı → gaz","C) Yoğuşma — gaz → sıvı","D) Donma — sıvı → katı"],
 correct:1,wrongFeedback:"Kaynarken su (sıvı) buhar (gaz) haline geçer. Bu sıvı → gaz geçişi yani BUHARLAŞMA'dır.",
 hint:"Kaynayan su buhar olur. Sıvı → gaz hangi olay?",
 simplified:{question:"Sıvı halden gaz haline geçme ne adı alır?",options:["A) Donma","B) Erime","C) Buharlaşma"],correct:2,hint:"Sıvı → gaz = BUHARLAŞMA!"}},

{id:"f033",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:1,type:"mc",
 question:"Aşağıdaki hâl değişimlerinden hangisi ISI VERIR (ısıyı çevreye bırakır)?",
 options:["A) Erime","B) Buharlaşma","C) Donma","D) Isınma"],
 correct:2,wrongFeedback:"Donma (sıvı → katı) ısı verir. Erime ve buharlaşma ısı alır (soğur). Donunca ısı çevreye bırakılır.",
 hint:"Donma mı erime mi ısı alır? Hangisi ısı verir?",
 simplified:{question:"Meyve suyu donurken çevresine ısı verir mi alır mı?",options:["A) Verir — donma sırasında ısı çevreye bırakılır","B) Alır — donmak için ısı gerekir"],correct:0,hint:"Donma = katılaşma = enerji serbest bırakma → ısı verir!"}},

{id:"f034",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:1,type:"mc",
 question:"Çamaşırların dışarıda kuruması hangi hâl değişimidir?",
 options:["A) Donma","B) Erime","C) Buharlaşma","D) Yoğuşma"],
 correct:2,wrongFeedback:"Çamaşırdaki su sıvıdan gaz (buhar) haline geçerek kurur. Bu buharlaşmadır.",
 hint:"Islak çamaşır kuruyunca su nereye gider?",
 simplified:{question:"Çamaşırdaki su buhar olarak mı gaz halinde mi gider?",options:["A) Evet, buhar halinde (buharlaşma)","B) Hayır, katı olarak"],correct:0,hint:"Su → buhar (gaz) = buharlaşma!"}},

{id:"f035",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:2,type:"mc",
 question:"Hâl değişimleri ve ısı ilişkisi hakkında:\nI.  Erime ısı alır.\nII. Buharlaşma ısı verir.\nIII. Yoğuşma ısı verir.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,wrongFeedback:"I ✓ (erime ısı alır). II ✗ (buharlaşma ısı alır, vermez). III ✓ (yoğuşma ısı verir). Doğru: I ve III → 2.",
 hint:"Buharlaşma ısı alır mı verir mi?",
 simplified:{question:"Ter buharlaşırken bizi serinletir (soğutur). Buharlaşma ısı alır mı verir mi?",options:["A) Alır — bizi soğutur","B) Verir — bizi ısıtır"],correct:0,hint:"Buharlaşma ısı alır → ortam soğur → biz serinleriz!"}},

{id:"f036",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:2,type:"mc",
 question:"Soğuk bir şişenin dışında neden su damlaları oluşur?",
 options:["A) Şişe terler.","B) Şişe su sızdırır.","C) Havadaki su buharı şişeye temas edince soğur ve yoğuşur.","D) Şişenin içindeki su dışarı çıkar."],
 correct:2,wrongFeedback:"Havadaki nem (su buharı) soğuk şişeye temas edince soğur ve yoğuşarak damlalara dönüşür. Bu yoğuşmadır.",
 hint:"Hava nemi (su buharı) soğuk yüzeye temas edince ne olur?",
 simplified:{question:"Su buharı soğudukça sıvı su mu olur gaz mı kalır?",options:["A) Sıvı su olur (yoğuşma)","B) Gaz kalır"],correct:0,hint:"Buhar soğuma → yoğuşma → su damlacıkları!"}},

{id:"f037",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:2,type:"mc",
 question:"Aşağıdaki günlük hayat olaylarından hangisi YOĞUŞMA ile açıklanır?",
 options:["A) Çamaşırın kuruması","B) Buzun erimesi","C) Sabah otların üzerindeki çiğ taneleri","D) Suyun kaynaması"],
 correct:2,wrongFeedback:"Sabah çiğ: gece soğuyan havadaki su buharı yapraklara temas edince yoğuşur. Bu yoğuşmadır.",
 hint:"Çiğ nasıl oluşur? Buhar mı soğur yoksa su mu donar?",
 simplified:{question:"Su buharının soğuyarak damlacık oluşturmasına ne denir?",options:["A) Buharlaşma","B) Yoğuşma","C) Donma"],correct:1,hint:"Buhar + soğuma = YOĞUŞMA!"}},

{id:"f038",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:3,type:"mc",
 question:"Ali: 'Maddelerin hâl değişimi geri dönüşümlüdür; örneğin buz erir, su donar.'\nBerk: 'Hâl değişimi geri dönüşümsüzdür; su bir kez buhar olduktan sonra su olmaz.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Berk","C) Her ikisi","D) Hiçbiri"],
 correct:0,wrongFeedback:"Ali doğru: Hâl değişimleri geri dönüşümlüdür. Buz → su → buhar → su → buz şeklinde döngü devam eder. Su döngüsü bunun kanıtıdır.",
 hint:"Su döngüsü: yağmur → buhar → yağmur... Bu dönüşümlü mü?",
 simplified:{question:"Su buhar olduktan sonra tekrar sıvı su olabilir mi?",options:["A) Evet — yoğuşma ile geri döner","B) Hayır — bir kez buhar olan su kalıcı gaz olur"],correct:0,hint:"Yağmur: buluttaki buhar yoğuşarak yağar → geri döner!"}},

{id:"f039",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:3,type:"mc",
 question:"Aşağıdaki hâl değişimleri tablosunda hangisi YANLIŞ verilmiştir?\nA) Erime: katı→sıvı, ısı alır\nB) Donma: sıvı→katı, ısı verir\nC) Buharlaşma: sıvı→gaz, ısı verir\nD) Yoğuşma: gaz→sıvı, ısı verir",
 options:["A) Erime bilgisi","B) Donma bilgisi","C) Buharlaşma bilgisi","D) Yoğuşma bilgisi"],
 correct:2,wrongFeedback:"C yanlış: Buharlaşma sıvı→gaz geçişidir ve ISI ALIR (çevreyi soğutur). Isı vermez! A, B, D doğru.",
 hint:"Ter buharlaşınca serinleriz — bu buharlaşmanın ısı aldığını gösterir. C'de ne yazıyor?",
 simplified:{question:"Buharlaşma ısı alır mı verir mi?",options:["A) Alır — bizi serinletir","B) Verir — bizi ısıtır"],correct:0,hint:"Ter buharlaşınca serinleriz → buharlaşma ısı alır!"}},

{id:"f040",subject:"fen",kazanim:204,kazanimName:"Maddelerin Hâl Değişimi",difficulty:3,type:"mc",
 question:"Bir öğrenci yaz mevsiminde nemli dış hava sıcakken, klimalı bir odaya girer. Gözlükleri buğulanır.\nBu olayın bilimsel açıklaması nedir?",
 options:["A) Gözlük camı ısındı, eridi.","B) Dışarıdaki sıcak nemli hava soğuk gözlük camına temas edince su buharı yoğuştu.","C) Gözlüğe yağmur düştü.","D) Soğuk gözlük camı çekince kendi kendine su üretti."],
 correct:1,wrongFeedback:"Sıcak havanın nem (su buharı) soğuk gözlük camına temas edince yoğuştu. Cam buğulanması = yoğuşma olayı.",
 hint:"Sıcak nemli hava soğuk cam yüzeyine temas edince ne olur?",
 simplified:{question:"Soğuk bir yüzeye dokunduğunda sıcak havanın nemi ne olur?",options:["A) Yoğuşarak su damlacığı oluşturur","B) Isınıp kaybolur"],correct:0,hint:"Nem + soğuk yüzey = yoğuşma = buğu!"}},

// ══ KONU 5: Saf Madde ve Karışım ══
{id:"f041",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi SAF MADDE örneğidir?",
 options:["A) Tuz suyu","B) Ayran","C) Saf su","D) Hava"],
 correct:2,wrongFeedback:"Saf su yalnızca su moleküllerinden oluşur. Tuz suyu, ayran ve hava birden fazla madde içerir (karışım).",
 hint:"Saf madde tek çeşit maddeden oluşur. Hangi şık tek çeşit madde içerir?",
 simplified:{question:"Tuz suyu kaç çeşit madden oluşur?",options:["A) 1 (saf madde)","B) 2 (karışım: su + tuz)"],correct:1,hint:"Su + tuz = 2 madde = karışım!"}},

{id:"f042",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi KARIŞIM örneğidir?",
 options:["A) Saf oksijen","B) Saf altın","C) Çelik (demir + karbon)","D) Saf demir"],
 correct:2,wrongFeedback:"Çelik, demir ve karbon gibi farklı maddelerden oluşan karışımdır. Saf oksijen, altın, demir tek çeşit maddedir.",
 hint:"Karışım birden fazla maddeden oluşur. Çelik kaç maddeden oluşur?",
 simplified:{question:"Çelik neyden yapılır?",options:["A) Yalnız demirden","B) Demir + karbon karışımından"],correct:1,hint:"Demir + karbon = birden fazla madde = karışım!"}},

{id:"f043",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:1,type:"mc",
 question:"Limonata hangi tür maddedir?",
 options:["A) Saf madde — yalnızca limon suyu","B) Karışım — limon suyu + su + şeker","C) Element — tek tip atom içerir","D) Saf madde — meyve suyudur"],
 correct:1,wrongFeedback:"Limonata: limon suyu + su + şeker içerir. Birden fazla madde = karışım.",
 hint:"Limonatada kaç çeşit madde var?",
 simplified:{question:"Limonata yaparken kaç çeşit malzeme kullanırsın?",options:["A) 1 (sadece su)","B) 2 veya daha fazla (su, limon, şeker)"],correct:1,hint:"Su + limon + şeker = 3 madde = karışım!"}},

{id:"f044",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:1,type:"mc",
 question:"Saf madde ile karışım arasındaki temel fark nedir?",
 options:["A) Saf madde katı, karışım sıvıdır.","B) Saf madde tek çeşit madde, karışım birden fazla madde içerir.","C) Saf madde renkli, karışım renksizdir.","D) Saf madde doğal, karışım yapay üretilir."],
 correct:1,wrongFeedback:"Saf madde: tek tip madde (saf su, saf altın). Karışım: iki ya da daha fazla madde bir arada (tuz suyu, hava).",
 hint:"'Saf' kelimesi ne anlama gelir?",
 simplified:{question:"'Saf' madde demek ne demektir?",options:["A) Tek çeşit madde içerir","B) Birden fazla madde içerir"],correct:0,hint:"Saf = sade = tek çeşit madde!"}},

{id:"f045",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:2,type:"mc",
 question:"Şeker suya çözündürüldüğünde ne oluşur?",
 options:["A) Saf madde — şeker yok olmuştur.","B) Karışım — şeker ve su birlikte bulunur.","C) Yeni bir madde — kimyasal reaksiyon olmuştur.","D) Saf su — şeker kaybolmuştur."],
 correct:1,wrongFeedback:"Şeker suda çözünürken madde olarak varlığını sürdürür. Su + şeker birlikte = karışım. Kimyasal değişim yoktur.",
 hint:"Şeker suda çözündüğünde kaybolur mu yoksa karışır mı?",
 simplified:{question:"Çaydaki şeker kaybolur mu yoksa hâlâ orada mı?",options:["A) Kaybolur, yok olur","B) Hâlâ var ama çözünmüş halde — karışım"],correct:1,hint:"Tat alıyorsan şeker hâlâ var demektir!"}},

{id:"f046",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:2,type:"mc",
 question:"Aşağıdaki maddelerden hangisi hem homojen hem de karışımdır?",
 options:["A) Granit (kayaç)","B) Tuz suyu","C) Çorba","D) Salata"],
 correct:1,wrongFeedback:"Tuz suyu: homojen karışım — her yerinde aynı tuz yoğunluğu. Granit, çorba ve salata heterojendir (farklı bölgeleri farklı).",
 hint:"Homojen: her yerinde aynı görünen. Hangi şık bütünüyle aynı görünür?",
 simplified:{question:"Tuz suyunun her bölgesinde aynı tuzluluk var mı?",options:["A) Evet, her yeri aynı (homojen)","B) Hayır, bazı bölgeleri daha tuzlu"],correct:0,hint:"Tuz suyu iyi karıştırılırsa her yeri aynı = homojen karışım!"}},

{id:"f047",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:2,type:"mc",
 question:"Aşağıdaki maddeler saf madde (S) mi karışım (K) mı?\n● Elmas: S veya K?\n★ Hava: S veya K?\n■ Demir: S veya K?",
 options:["A) ●S  ★K  ■S","B) ●K  ★K  ■S","C) ●S  ★S  ■K","D) ●K  ★S  ■K"],
 correct:0,wrongFeedback:"Elmas: saf karbon (S). Hava: N₂+O₂+CO₂+... karışım (K). Demir: saf element (S). A doğru.",
 hint:"Hava tek çeşit gaz mı içerir?",
 simplified:{question:"Hava kaç çeşit gaz içerir?",options:["A) 1 (yalnızca oksijen)","B) Birden fazla (N₂, O₂, CO₂ vb.)"],correct:1,hint:"Azot+Oksijen+Karbon dioksit → birden fazla = karışım!"}},

{id:"f048",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:3,type:"mc",
 question:"Berk: 'Tüm sıvılar karışımdır; hiçbir saf sıvı yoktur.'\nSelin: 'Saf su, saf alkol gibi tek çeşit maddeden oluşan sıvılar saf madde sayılır.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Saf su yalnızca H₂O moleküllerinden oluşur ve saf madde sayılır. Berk yanlış genelleme yapmış.",
 hint:"Damıtılmış su nedir? Saf madde mi karışım mı?",
 simplified:{question:"Damıtılmış su (saf su) saf madde midir?",options:["A) Evet, yalnızca H₂O içerir","B) Hayır, karışımdır"],correct:0,hint:"Saf su = yalnızca su molekülleri = saf madde!"}},

{id:"f049",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:3,type:"mc",
 question:"Aşağıdakilerden kaçı karışım örneğidir?\n● Granit (kuvars + feldispat + mika)\n★ Saf gümüş\n■ Çelik (Fe + C)\n▲ Kan (su + protein + kan hücreleri)",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"Granit: karışım ✓. Saf gümüş: saf madde ✗. Çelik: karışım ✓. Kan: karışım ✓. Toplam 3 karışım.",
 hint:"Saf gümüş tek çeşit metal. Diğerleri kaç çeşit maddeden oluşuyor?",
 simplified:{question:"Kan kaç çeşit maddeden oluşur?",options:["A) 1 (sadece su)","B) Birden fazla (su, protein, hücreler...)"],correct:1,hint:"Kan = su + protein + hücreler = karışım!"}},

{id:"f050",subject:"fen",kazanim:205,kazanimName:"Saf Madde ve Karışım",difficulty:3,type:"mc",
 question:"Bir öğrenci içme suyunu analiz etti ve su, flor, kalsiyum, magnezyum buldu.\nBu su için ne söylenebilir?",
 options:["A) Saf maddedir çünkü ana bileşen sudur.","B) Karışımdır çünkü birden fazla madde içermektedir.","C) Saf maddedir çünkü tüm bileşenler doğaldır.","D) Ne saf madde ne karışım, özel bir kategoridir."],
 correct:1,wrongFeedback:"Birden fazla madde içermesi onu karışım yapar. 'Ana bileşen su' olması onu saf madde yapmaz.",
 hint:"Karışım tanımını hatırla: birden fazla madde içerirse...",
 simplified:{question:"Su + flor + kalsiyum = kaç çeşit madde?",options:["A) 1 (saf madde)","B) 3 (karışım)"],correct:1,hint:"3 farklı madde → karışım!"}},

// ══ KONU 6: Karışımların Ayrılması ══
{id:"f051",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:1,type:"mc",
 question:"Tuz-su karışımını ayırmak için hangi yöntem kullanılır?",
 options:["A) Süzme","B) Mıknatıslama","C) Buharlaştırma","D) Eleme"],
 correct:2,wrongFeedback:"Tuz suya çözünür. Su buharlaştırıldığında tuz geride kalır. Süzme çözünen maddeleri ayırmaz.",
 hint:"Tuz suda çözündü. Suyu uzaklaştırırsan tuz ne olur?",
 simplified:{question:"Su buharlaşınca çözünmüş tuz ne olur?",options:["A) O da kaybolur","B) Geride kalır"],correct:1,hint:"Tuz buharlaşmaz → su gidince tuz kalır!"}},

{id:"f052",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:1,type:"mc",
 question:"Çay süzerken hangi karışım ayırma yöntemi kullanılır?",
 options:["A) Buharlaştırma","B) Süzme","C) Mıknatıslama","D) Çözündürme"],
 correct:1,wrongFeedback:"Çay demlenince yapraklar sıvıdan süzme yöntemiyle ayrılır. Süzgeç küçük deliklerinden sıvı geçer, katı parçalar geçemez.",
 hint:"Çay yaparken kullandığın süzgeç ne işe yarar?",
 simplified:{question:"Süzgeç nasıl çalışır?",options:["A) Sıvıyı geçirir, büyük parçaları tutar","B) Her şeyi geçirir","C) Her şeyi tutar"],correct:0,hint:"Küçük delikler → sıvı geçer, büyük parça geçemez!"}},

{id:"f053",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:1,type:"mc",
 question:"Kum ve demir tozu karışımını ayırmak için hangi yöntem en uygundur?",
 options:["A) Süzme","B) Buharlaştırma","C) Mıknatıslama","D) Eleme"],
 correct:2,wrongFeedback:"Demir mıknatıstan etkilenir, kum etkilenmez. Mıknatıs demiri karışımdan çekerek ayırır.",
 hint:"Demir mıknatıstan etkilenir mi? Kum etkilenir mi?",
 simplified:{question:"Kum ve demir arasında hangisi mıknatıstan etkilenir?",options:["A) Kum","B) Demir"],correct:1,hint:"Demir mıknatıs çeker → kum çekmez → mıknatısla ayırma!"}},

{id:"f054",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:1,type:"mc",
 question:"Eleme yöntemi hangi karışımlar için uygundur?",
 options:["A) Su ve tuz","B) Farklı boyutlardaki katı tanecikler","C) Su ve yağ","D) Demir ve bakır"],
 correct:1,wrongFeedback:"Eleme farklı boyuttaki katı parçaları ayırır. Küçük parçalar elekten geçer, büyükler geçemez.",
 hint:"Elek neyi ayırır? Boyut mu önemli?",
 simplified:{question:"Elek büyük ve küçük parçaları nasıl ayırır?",options:["A) Küçük parçalar delikten geçer, büyükler geçemez","B) Büyük parçalar geçer, küçükler geçemez"],correct:0,hint:"Elek = boyuta göre ayırma!"}},

{id:"f055",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:2,type:"mc",
 question:"Demir-kum-tuz karışımı üç aşamada ayrılacak. Hangi sıra doğrudur?",
 options:["A) Önce süzme → sonra mıknatıs → son buharlaştırma","B) Önce mıknatıs (demir) → sonra su ekleyip süzme (kum) → son buharlaştırma (tuz)","C) Önce buharlaştırma → sonra eleme → son mıknatıs","D) Önce eleme → sonra çözündürme → son mıknatıs"],
 correct:1,wrongFeedback:"1) Mıknatısla demir çekilir. 2) Su eklenir: tuz çözünür, kum çözünmez → süzme ile kum ayrılır. 3) Tuz suyu buharlaştırılır.",
 hint:"Önce mıknatısla demiri al, sonra suyla tuzu çöz ve kumu süz.",
 simplified:{question:"Kum-tuz karışımından kumu ayırmak için ne yapılır?",options:["A) Su eklenip süzülür — kum süzgeçte kalır","B) Mıknatısla çekilir","C) Buharlaştırılır"],correct:0,hint:"Tuz suda çözünür ama kum çözünmez → süzme ile kum ayrılır!"}},

{id:"f056",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:2,type:"mc",
 question:"Su üzerinde yüzen yağ, sudan hangi yöntemle ayrılır?",
 options:["A) Mıknatıslama","B) Süzme","C) Damlalık veya ayırma hunisi (yoğunluk farkından yararlanma)","D) Buharlaştırma"],
 correct:2,wrongFeedback:"Yağ ve su birbiriyle karışmaz, yağ üstte yüzer. Yoğunluk farkından yararlanarak ayırma hunisiyle ayrılır.",
 hint:"Yağ ve su neden ayrı katmanlarda durur?",
 simplified:{question:"Zeytinyağı şişedeki suyla karışır mı?",options:["A) Evet, tamamen karışır","B) Hayır, su alta yağ üste birikerek iki katman oluşur"],correct:1,hint:"Yağ hafif → su üstünde yüzer → katmanlar ayrılır!"}},

{id:"f057",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:2,type:"mc",
 question:"Karışım ayırmanın ülke ekonomisine katkıları nelerdir?\nI.  Petrolden benzin, motorin, plastik hammadde gibi ürünler ayrılır.\nII. Deniz suyundan tuz elde edilir.\nIII. Madenlerden değerli metaller ayrılır.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:2,wrongFeedback:"I: Petrol rafinerisi = karışım ayırma ✓. II: Tuzlalar = buharlaştırma ✓. III: Maden işleme = karışım ayırma ✓. Üçü de doğru.",
 hint:"Petrol rafinerisi ne iş yapar?",
 simplified:{question:"Denizden tuz nasıl elde edilir?",options:["A) Su buharlaştırılır, tuz geride kalır","B) Tuz balıkların içinden çıkarılır"],correct:0,hint:"Deniz suyu buharlaşır → tuz kalır = buharlaştırma yöntemi!"}},

{id:"f058",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:3,type:"mc",
 question:"Bir maden yatağından altın çıkarmak için 5 aşamalı bir işlem yapılıyor. Bu işlem hangi genel kavramla açıklanır?",
 options:["A) Hâl değişimi","B) Karışımları ayırma","C) Madde üretimi","D) Mıknatıslama"],
 correct:1,wrongFeedback:"Maden yataklarında altın toprak ve kayaçlarla karışık hâldedir. Ayrıştırma işlemi karışım ayırma yöntemleridir.",
 hint:"Altın toprak içindedir. Toprak ve altın hangi tür madde?",
 simplified:{question:"Altın ile toprağın karıştığı madde karışım mıdır?",options:["A) Evet, farklı maddeler = karışım","B) Hayır, altın toprak değiştirmiştir"],correct:0,hint:"Altın + toprak = birden fazla madde = karışım → ayırma yöntemi lazım!"}},

{id:"f059",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:3,type:"mc",
 question:"Selin: 'Süzme her karışımı ayırabilir.'\nDerya: 'Süzme yalnızca sıvı içinde erimeyen katıları ayırabilir; çözünmüş maddeleri ayıramaz.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Selin","B) Yalnız Derya","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Derya doğru: Süzme çözünmüş tuzları ayıramaz (tuz suyla beraber süzgeçten geçer). Yalnızca erimeyen katıları ayırır.",
 hint:"Şeker suyunu süzersen şeker süzgeçte kalır mı?",
 simplified:{question:"Şeker suyu süzgeçten geçirilirse şeker süzgeçte kalır mı?",options:["A) Evet, süzgeç şekeri tutar","B) Hayır, çözünmüş şeker suyla birlikte geçer"],correct:1,hint:"Çözünmüş madde = gözle görünmez = süzgeçten geçer!"}},

{id:"f060",subject:"fen",kazanim:206,kazanimName:"Karışımları Ayırma Yöntemleri",difficulty:3,type:"mc",
 question:"Aşağıdaki tabloda karışım ve ayırma yöntemi eşleştirmelerinden hangisi YANLIŞTIR?",
 options:["A) Demir tozu-kum → mıknatıslama","B) Tuz-su → buharlaştırma","C) Büyük-küçük taş → eleme","D) Şeker-su → süzme"],
 correct:3,wrongFeedback:"D yanlış: Şeker suda çözünür, süzme işe yaramaz. Şeker-su karışımı için buharlaştırma gerekir. A, B, C doğru.",
 hint:"Şeker suda çözünür. Çözünen madde süzme ile ayrılabilir mi?",
 simplified:{question:"Şeker suda çözündükten sonra süzme işe yarar mı?",options:["A) Evet","B) Hayır, çözünen madde süzgeçten geçer"],correct:1,hint:"Çözünmüş şeker = görünmez = süzgeçten geçer → süzme işe yaramaz!"}},

// ══ KONU 7: Aydınlatma Araçları ══
{id:"f061",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:1,type:"mc",
 question:"İnsanların elektrik kullanmadan önce gece aydınlatma için kullandığı araç nedir?",
 options:["A) LED lamba","B) Mum","C) Floresan","D) Akkor ampul"],
 correct:1,wrongFeedback:"Elektrik öncesinde mum, meşale, kandil gibi ışık kaynakları kullanılırdı. LED, floresan ve akkor ampul elektrikli araçlardır.",
 hint:"Elektrik icat edilmeden önce ne kullanılırdı?",
 simplified:{question:"Eski insanlar geceleri nasıl aydınlanırdı?",options:["A) Elektrikle","B) Mum ve meşale gibi araçlarla"],correct:1,hint:"Elektrik yok → mum/meşale ile aydınlanma!"}},

{id:"f062",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:1,type:"mc",
 question:"LED lambalar akkor ampullere göre hangi bakımdan üstündür?",
 options:["A) Daha pahaTl.","B) Daha az enerji tüketir ve daha uzun ömürlüdür.","C) Daha fazla ısı üretir.","D) Daha güçlü koku yayar."],
 correct:1,wrongFeedback:"LED lambalar akkor ampullere kıyasla %80'e kadar daha az elektrik tüketir ve çok daha uzun ömürlüdür.",
 hint:"LED lambalar neden tercih edilir?",
 simplified:{question:"LED ampul mü akkor ampul mü daha az enerji harcar?",options:["A) Akkor ampul","B) LED ampul"],correct:1,hint:"LED = Işık Yayan Diyot → çok az enerji, uzun ömür!"}},

{id:"f063",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:1,type:"mc",
 question:"Yüzyıllar içinde aydınlatma araçlarının gelişim sırası nasıldır?",
 options:["A) LED → akkor → mum → meşale","B) Meşale → mum → akkor ampul → LED","C) Akkor → LED → mum → meşale","D) Mum → LED → meşale → akkor"],
 correct:1,wrongFeedback:"Tarihsel sıra: meşale (ilk çağlar) → mum (MÖ'den beri) → akkor ampul (1879, Edison) → LED (modern dönem).",
 hint:"Tarihsel sıralamayı düşün: önce ne kullanıldı?",
 simplified:{question:"Elektrik icat edilmeden önce mi sonra mı kullanıldı?",options:["A) Mum elektrikten önce","B) Mum elektrikten sonra"],correct:0,hint:"Elektrik: 1800'ler. Mum: binlerce yıl önce → mum önce!"}},

{id:"f064",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:1,type:"mc",
 question:"Güneş enerjisiyle çalışan lambalar ne zaman aydınlatma sağlar?",
 options:["A) Yalnızca gündüz","B) Gündüz enerji depolar, geceleri kullanır","C) Yalnızca gece","D) Bulutlu havalarda daha çok çalışır"],
 correct:1,wrongFeedback:"Güneş enerjili lambalar gündüz güneş ışığını enerji olarak depolar; bu enerjiyi geceleri aydınlatmada kullanır.",
 hint:"Güneş paneli gece çalışır mı?",
 simplified:{question:"Güneş enerjisi gece var mı?",options:["A) Evet","B) Hayır, gece güneş yok"],correct:1,hint:"Gece güneş yok → gündüz depolanmış enerji kullanılır!"}},

{id:"f065",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:2,type:"mc",
 question:"Geçmişten günümüze aydınlatma araçları:\n● Meşale: ateş yakılır, çevreye ışık verir.\n★ Akkor ampul: elektrik → ışık + çok ısı üretir.\n■ LED: elektrik → ışık + az ısı üretir.\nHangisi en verimli aydınlatmayı sağlar?",
 options:["A) ● Meşale","B) ★ Akkor ampul","C) ■ LED","D) Hepsi eşit verimli"],
 correct:2,wrongFeedback:"Verimlilik: enerjinin ışığa dönüşme oranı. LED az ısı üretir, enerjinin büyük kısmı ışığa döner. En verimli LED.",
 hint:"Isı üretimi enerji kaybıdır. Az ısı = az kayıp = çok verimli.",
 simplified:{question:"Işığa dönüşmeyen enerji nereye gider?",options:["A) İşe yarar enerji olur","B) Isı olarak harcanır, kaybolur"],correct:1,hint:"Isı = kayıp enerji → az ısı = az kayıp = verimli!"}},

{id:"f066",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:2,type:"mc",
 question:"Aydınlatma araçları hakkında:\nI.  Akkor ampul buluşu Edison'a atfedilir.\nII. LED lambalar çevre dostu sayılır.\nIII. Kandil elektrikli bir aydınlatma aracıdır.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,wrongFeedback:"I ✓ (Edison 1879). II ✓ (az enerji = az CO₂). III ✗ (kandil yağ yakılarak çalışır, elektrikli değil). 2 doğru.",
 hint:"Kandil elektrik kullanır mı?",
 simplified:{question:"Kandil nasıl çalışır?",options:["A) Elektrikle","B) Yağ veya zeytinyağı yakılarak"],correct:1,hint:"Kandil = yağlı fitil → ateşle çalışır, elektrik değil!"}},

{id:"f067",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:2,type:"mc",
 question:"Aşağıdakilerden hangisi DOĞRU bir karşılaştırmadır?",
 options:["A) Mum: güvenli, taşınabilir, uzun ömürlü, temiz","B) LED: az enerji, uzun ömür, az ısı, çevre dostu","C) Akkor: çok enerji tüketmez, çok ışık verir","D) Meşale: temiz yanan, duman çıkarmaz"],
 correct:1,wrongFeedback:"LED gerçekten az enerji tüketir, uzun ömürlüdür, az ısı üretir ve çevre dostudur. B tamamen doğru.",
 hint:"LED lambanın özellikleri neler?",
 simplified:{question:"LED lamba neden çevre dostudur?",options:["A) Az enerji tüketir, az CO₂ çıkar","B) Renk değiştirir","C) Meşaleden daha ucuzdur"],correct:0,hint:"Az enerji = az fosil yakıt = az CO₂ = çevre dostu!"}},

{id:"f068",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:3,type:"mc",
 question:"Öğrenciler aydınlatma araçlarını karşılaştırdı. Çağlar: 'En eski aydınlatma aracı mumudur.' dedi.\nSelin: 'Mumdan önce insanlar meşale kullandı.' dedi.\nKimin görüşü doğrudur?",
 options:["A) Yalnız Çağlar","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: İnsanlar önce meşale (ateşe sürülmüş dal) kullandı. Mum daha sonra icat edildi.",
 hint:"Mum icat edilmeden önce ne kullanıldı?",
 simplified:{question:"İnsanlığın ilk aydınlatma aracı neydi?",options:["A) Mum","B) Meşale (ateşe tutulmuş dal)"],correct:1,hint:"Ateş → meşale → mum → elektrik — bu sıra doğru!"}},

{id:"f069",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:3,type:"mc",
 question:"Bir köyde yalnızca güneş ışığı var, elektrik yok. Gece aydınlanmak için en güvenli ve çevre dostu çözüm nedir?",
 options:["A) Odun ateşi","B) Petrol lambası","C) Güneş enerjili LED lamba","D) Mum"],
 correct:2,wrongFeedback:"Güneş enerjili LED: gündüz güneşi toplar, gece kullanır; elektrik gerektirmez; yangın riski yoktur; çevre dostudur.",
 hint:"Hem güvenli hem çevre dostu hem de elektriksiz çalışan nedir?",
 simplified:{question:"Güneş enerjili lamba elektrik olmadan çalışabilir mi?",options:["A) Hayır, elektrik şarj ister","B) Evet, gündüz güneşten şarj olur, gece kullanılır"],correct:1,hint:"Güneş paneli → elektrik üretir → pil şarj → gece ışık!"}},

{id:"f070",subject:"fen",kazanim:207,kazanimName:"Aydınlatma Araçları",difficulty:3,type:"mc",
 question:"Aydınlatma teknolojisi gelişiminde hangisi en önemli dönüm noktasıdır ve neden?",
 options:["A) Mumun icadı — seyahat kolaylaştı.","B) Elektrikli lambann (akkor ampul) icadı — gece hayatını ve endüstriyi köklü biçimde değiştirdi.","C) LED'in icadı — mum yerini aldı.","D) Meşalenin icadı — insanlık ateşi keşfetti."],
 correct:1,wrongFeedback:"Elektrikli ampulün icadı en büyük dönüşümü sağladı: gece çalışmayı, fabrikayı, modern yaşamı mümkün kıldı. LED önemli ama sonraki aşama.",
 hint:"Hangi icat insan yaşamını en köklü biçimde değiştirdi?",
 simplified:{question:"Elektrikli lamba icat edilmeden önce gece çalışmak kolay mıydı?",options:["A) Evet, mum yeterliydi","B) Hayır, elektrikli lamba her şeyi değiştirdi"],correct:1,hint:"Elektrik → parlak ışık → gece fabrika çalışabilir = büyük değişim!"}},

// ══ KONU 8: Dünya'nın Hareketleri ══
{id:"f071",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:1,type:"mc",
 question:"Dünya'nın kendi ekseni etrafında dönmesine ne denir?",
 options:["A) Dolanma","B) Dönme","C) Yörüngede ilerleme","D) Çekim"],
 correct:1,wrongFeedback:"Kendi ekseni etrafında dönme = DÖNME hareketi. Güneş'in etrafında dönme = DOLANMA.",
 hint:"Kendi etrafında dönmek... top gibi döner, adı?",
 simplified:{question:"Top kendi ekseni etrafında döner. Bu harekete ne denir?",options:["A) Dolanma","B) Dönme"],correct:1,hint:"Kendi etrafında = DÖNME!"}},

{id:"f072",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:1,type:"mc",
 question:"Dünya'nın Güneş etrafında dolaşmasına ne denir?",
 options:["A) Dönme","B) Dolanma","C) Titreme","D) Salınım"],
 correct:1,wrongFeedback:"Güneş etrafında dönme = DOLANMA hareketi. Bu hareket mevsimleri oluşturur.",
 hint:"Güneş etrafında gidip gelmek... adı?",
 simplified:{question:"Dünya Güneş'in etrafında mı döner?",options:["A) Evet — DOLANMA hareketi","B) Hayır, Güneş Dünya'nın etrafında döner"],correct:0,hint:"Dünya Güneş etrafında döner = DOLANMA!"}},

{id:"f073",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:1,type:"mc",
 question:"Gece ve gündüz oluşmasının sebebi nedir?",
 options:["A) Dünya'nın Güneş etrafında dolanması","B) Dünya'nın kendi ekseni etrafında dönmesi","C) Güneşin Dünya etrafında dönmesi","D) Ayın Dünya'yı gölgelemesi"],
 correct:1,wrongFeedback:"Dünya kendi ekseni etrafında dönerken bir yarısı Güneş'e dönük (gündüz), öbür yarısı karanlıkta (gece) kalır.",
 hint:"Her 24 saatte gece-gündüz değişir. Hangi hareket 24 saatte tamamlanır?",
 simplified:{question:"Gece ve gündüz kaç saatte bir değişir?",options:["A) 24 saatte","B) 365 günde"],correct:0,hint:"24 saat = 1 dönme hareketi → gece/gündüz dönme nedeniyle!"}},

{id:"f074",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:1,type:"mc",
 question:"Mevsimlerin oluşmasının temel nedeni nedir?",
 options:["A) Dönme hareketi","B) Dolanma hareketi + eksen eğikliği","C) Ayın tutulması","D) Güneş'in uzaklaşıp yaklaşması"],
 correct:1,wrongFeedback:"Mevsimler: Dünya'nın ekseninin eğik olması + Güneş etrafındaki dolanma hareketi sonucunda oluşur.",
 hint:"Mevsimler 1 yılda (365 gün) değişir. Hangi hareket 1 yıl sürer?",
 simplified:{question:"Mevsimler kaç günde bir değişir?",options:["A) 24 saatte","B) Yaklaşık 90 günde bir (yılda 4)"],correct:1,hint:"4 mevsim 1 yılda → 365 gün = 1 dolanma!"}},

{id:"f075",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:2,type:"mc",
 question:"Dönme ve dolanma hakkında:\nI.  Dönme: 24 saatte tamamlanır.\nII. Dolanma: 365 günde tamamlanır.\nIII. Dönme mevsimleri, dolanma gece-gündüzü oluşturur.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,wrongFeedback:"I ✓ (dönme 24 saat). II ✓ (dolanma 365 gün). III ✗ (tam tersi: dönme → gece/gündüz; dolanma → mevsim). 2 doğru.",
 hint:"III'teki karıştırma: hangi hareket gece/gündüzü, hangi hareket mevsimleri yapar?",
 simplified:{question:"Mevsimi yaratan hareket hangisidir?",options:["A) Dönme (24 saatlik)","B) Dolanma (365 günlük)"],correct:1,hint:"Mevsim = 1 yıl = dolanma! Gece/gündüz = 24 saat = dönme!"}},

{id:"f076",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:2,type:"mc",
 question:"Türkiye'de yaz aylarında günler neden kışa göre daha uzundur?",
 options:["A) Dünyanın daha hızlı döndüğü için","B) Eksen eğikliği nedeniyle yaz aylarında Türkiye yarım küresi Güneş'e daha fazla döner.","C) Güneş yaza daha yakın gelir.","D) Ay yazın Güneş'i engeller."],
 correct:1,wrongFeedback:"Eksen eğikliği nedeniyle yaz aylarında Kuzey Yarımküre Güneş'e daha dönük olur; aydınlık süre uzar.",
 hint:"Dünya'nın ekseni neden eğik?",
 simplified:{question:"Yazın günler neden daha uzundur?",options:["A) Güneş yaklaşır","B) Eksen eğik → kuzey yarım küre daha çok aydınlanır"],correct:1,hint:"Eksen eğikliği → yaz = daha uzun gündüz!"}},

{id:"f077",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:2,type:"mc",
 question:"Ali: 'Dünya hem döner hem de dolanır.'\nAyşe: 'Dönme hareketi 365 günde, dolanma hareketi 24 saatte tamamlanır.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Ayşe","C) Her ikisi","D) Hiçbiri"],
 correct:0,wrongFeedback:"Ali doğru: Dünya hem döner hem dolanır. Ayşe yanlış: süreler tam tersi (dönme 24 saat, dolanma 365 gün).",
 hint:"Ayşe'nin süreleri doğru mu?",
 simplified:{question:"Dönme mi dolanma mı 24 saatte tamamlanır?",options:["A) Dönme — 24 saatte","B) Dolanma — 24 saatte"],correct:0,hint:"Dönme = 1 gün = 24 saat. Dolanma = 1 yıl = 365 gün!"}},

{id:"f078",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:3,type:"mc",
 question:"Bir öğrenci 'Güneş doğudan doğar batıdan batar' derken hangi hareket ile açıklanır?",
 options:["A) Dolanma hareketi","B) Dönme hareketi","C) Eksen eğikliği","D) Ay'ın çekim kuvveti"],
 correct:1,wrongFeedback:"Güneşin doğudan doğup batıdan batması, Dünya'nın batıdan doğuya doğru dönmesiyle açıklanır (görünüşte Güneş ters yönde hareket eder).",
 hint:"Güneş her gün doğup batıyor. Bu kaç saatte bir olur?",
 simplified:{question:"Güneşin doğması batması kaç saatte bir olur?",options:["A) 24 saatte","B) 365 günde"],correct:0,hint:"24 saat = dönme hareketi!"}},

{id:"f079",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:3,type:"mc",
 question:"Dünya'nın hareketlerinin sonuçları:\nI.  Dönme → gece ve gündüz oluşur.\nII. Dolanma + eksen eğikliği → mevsimler oluşur.\nIII. Dönme → 1 yıl oluşur.\nIV. Dolanma → Güneş yıllık yörüngede görülür.\nKaç ifade doğrudur?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"I ✓, II ✓, III ✗ (dönme 24 saat=1 gün, dolanma=1 yıl), IV ✓. Doğru: I, II, IV → 3 ifade.",
 hint:"III'ü kontrol et: 1 yılı hangi hareket oluşturur?",
 simplified:{question:"1 yıl = 365 gün. Hangi hareket 365 günde tamamlanır?",options:["A) Dönme","B) Dolanma"],correct:1,hint:"1 yıl = 1 dolanma = 365 gün → III yanlış!"}},

{id:"f080",subject:"fen",kazanim:208,kazanimName:"Dünya'nın Hareketleri",difficulty:3,type:"mc",
 question:"Mars'ın Güneş etrafındaki dolanma süresi Dünya'dan daha uzundur (687 gün). Bu ne anlama gelir?",
 options:["A) Mars'ta 1 yıl Dünya yılından kısadır.","B) Mars'ta 1 yıl Dünya yılından uzundur (687 Dünya günü).","C) Mars'ta mevsim yoktur.","D) Mars daha yavaş döner, saatler farklıdır."],
 correct:1,wrongFeedback:"Dolanma süresi = 1 yıl uzunluğu. Mars 687 günde dolanır → Mars yılı 687 Dünya günüdür (yaklaşık 2 Dünya yılı).",
 hint:"Dolanma süresi = kaç günde 1 yıl tamamlanır?",
 simplified:{question:"Dünya 365 günde 1 yıl tamamlar. Mars 687 günde 1 yıl tamamlarsa Mars yılı daha mı uzun?",options:["A) Evet, 687 > 365 → Mars yılı daha uzun","B) Hayır, aynı"],correct:0,hint:"687 > 365 → Mars yılı daha uzun!"}},

// ══ KONU 9: Besinler ve Canlı Yaşamı ══
{id:"f081",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:1,type:"mc",
 question:"Besinlerdeki karbonhidrat vücuda ne sağlar?",
 options:["A) Kemik gelişimi","B) Enerji","C) Su dengesi","D) Gece görüşü"],
 correct:1,wrongFeedback:"Karbonhidratlar vücudun temel enerji kaynağıdır. Ekmek, pirinç, patates karbonhidrat içerir.",
 hint:"Koşarken ne tükeniriz? Karbonhidrat ne işe yarar?",
 simplified:{question:"Futbol oynarken enerji nereden gelir?",options:["A) Karbonhidratlardan (ekmek, makarna)","B) Yalnızca su içmekten"],correct:0,hint:"Karbonhidrat = enerji kaynağı!"}},

{id:"f082",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:1,type:"mc",
 question:"Kemiklerin sağlıklı gelişmesi için en önemli mineral nedir?",
 options:["A) Demir","B) Kalsiyum","C) Çinko","D) Sodyum"],
 correct:1,wrongFeedback:"Kalsiyum kemik ve diş sağlığı için şarttır. Süt ve süt ürünleri en iyi kalsiyum kaynaklarıdır.",
 hint:"Kemik için ne içeriz? 'İç sütünü, sağlam olsun kemiklerin!'",
 simplified:{question:"Süt neden kemikler için iyi?",options:["A) Kalsiyum içerdiği için","B) Soğuk olduğu için"],correct:0,hint:"Süt = Kalsiyum → kemik güçlenir!"}},

{id:"f083",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:1,type:"mc",
 question:"Vücudun büyümesi ve kasların güçlenmesi için hangi besin öğesi gereklidir?",
 options:["A) Karbonhidrat","B) Yağ","C) Protein","D) Vitamin C"],
 correct:2,wrongFeedback:"Proteinler kasların yapı taşıdır, büyüme ve onarım için zorunludur. Et, yumurta, baklagiller protein içerir.",
 hint:"Sporcular neden et yiyor?",
 simplified:{question:"Kas yapımı için en çok hangi besin öğesi lazım?",options:["A) Şeker","B) Protein (et, yumurta)","C) Su"],correct:1,hint:"Protein = kas yapı taşı!"}},

{id:"f084",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:1,type:"mc",
 question:"Aşağıdaki yiyeceklerden hangisi lif (posa) bakımından zengindir?",
 options:["A) Beyaz ekmek","B) Hazır meyve suyu","C) Sebze ve meyveler","D) Şekerleme"],
 correct:2,wrongFeedback:"Sebze ve meyvelerde bulunan lif/posa sindirim sisteminin düzenli çalışmasına yardımcı olur.",
 hint:"Hangisi doğal, işlenmemiş besindir?",
 simplified:{question:"Doğadan toplanan sağlıklı besinler hangileri?",options:["A) Şekerleme","B) Sebze ve meyveler"],correct:1,hint:"Sebze ve meyve = doğal = lif kaynağı!"}},

{id:"f085",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:2,type:"mc",
 question:"Dengeli beslenme için bir günde şunları yedik:\n● Süt ve peynir (kalsiyum)\n★ Et ve yumurta (protein)\n■ Ekmek ve makarna (karbonhidrat)\n▲ Salata ve meyve (vitamin)\nNe eksik?",
 options:["A) Protein eksik","B) Karbonhidrat eksik","C) Yeterince su içilmemiş olabilir","D) Tüm besin grupları tamamlanmış"],
 correct:2,wrongFeedback:"Besin grupları tamamlanmış: süt (kalsiyum), et (protein), ekmek (karbonhidrat), salata (vitamin). Su ayrı bir ihtiyaçtır; belirtilmemiş.",
 hint:"Besinlerin yanında her gün ne içmemiz şart?",
 simplified:{question:"Yemek yemek yeterli midir, su da içmek gerekli midir?",options:["A) Yalnızca yemek yeterli","B) Su da zorunludur"],correct:1,hint:"Su = hayati öneme sahip, her gün içilmeli!"}},

{id:"f086",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:2,type:"mc",
 question:"Hangisi beslenme hakkında YANLIŞ bir bilgidir?",
 options:["A) Protein kasların yapı taşıdır.","B) Yağlar yalnızca zararlıdır, hiç tüketilmemeli.","C) Karbonhidratlar enerji kaynağıdır.","D) Vitaminler hastalıklardan korunmada önemlidir."],
 correct:1,wrongFeedback:"B yanlış: Yağlar da vücut için gereklidir (yağda çözünen vitaminler, enerji depolama). Aşırısı zararlıdır ama tamamen kesilmemelidir.",
 hint:"Yağ hiç gerekli değil mi, yoksa ölçülü tüketilmeli mi?",
 simplified:{question:"Vücudun hiç yağa ihtiyacı yok mudur?",options:["A) Yok — yağ tamamen zararlı","B) Var — ama aşırısı zararlı, ölçülü gerekli"],correct:1,hint:"Zeytinyağı sağlıklı bir yağ → tamamen zararlı değil!"}},

{id:"f087",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:2,type:"mc",
 question:"Besin ve görev eşleştirmelerinden hangisi YANLIŞTIR?",
 options:["A) Kalsiyum → kemik-diş sağlığı","B) C vitamini → bağışıklık sistemi","C) Protein → enerji depolama","D) Demir → kan yapımı"],
 correct:2,wrongFeedback:"C yanlış: Protein enerji depolamaz, büyüme-onarım için kullanılır. Enerji depolayan makro besin YAĞdır. A, B, D doğru.",
 hint:"Enerji depolayan besin öğesi hangisidir?",
 simplified:{question:"Hangi besin öğesi vücutta enerji depolar?",options:["A) Protein","B) Yağ"],correct:1,hint:"Yağ = enerji deposu. Protein = yapı taşı!"}},

{id:"f088",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:3,type:"mc",
 question:"Berk: 'Vücudumuz için en önemli besin şekerdir, her gün çok miktarda şeker yemeli.'\nSelin: 'Dengeli beslenme için tüm besin grupları ölçülü tüketilmeli, tek bir besin öğesi aşırı alınmamalı.'\nKimin görüşü bilimsel açıdan doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Dengeli beslenme = her besin grubundan ölçülü tüketim. Aşırı şeker sağlığa zararlıdır.",
 hint:"Doktorlar ne diyor? Tek yiyecekle sağlıklı olunur mu?",
 simplified:{question:"Dengeli beslenmek ne demektir?",options:["A) Yalnızca bir besin çok yemek","B) Her besin grubundan ölçülü yemek"],correct:1,hint:"Dengeli = çeşitli ve ölçülü!"}},

{id:"f089",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:3,type:"mc",
 question:"Bir sporcunun beslenmesi:\nI.  Antrenman öncesi karbonhidrat tüketimi enerji sağlar.\nII. Antrenman sonrası protein tüketimi kas onarımına yardımcı olur.\nIII. Yağ ve şeker sporcular için hiç gerekmez.\nKaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:1,wrongFeedback:"I ✓ (karbonhidrat enerji). II ✓ (protein kas onarımı). III ✗ (yağ da enerji kaynağı, gereklidir). 2 doğru.",
 hint:"III'ü kontrol et: Sporcular için yağ gerekli mi?",
 simplified:{question:"Maraton koşucusu uzun koşu için karbonhidrat mı yağ mı kullanır?",options:["A) Yalnızca karbonhidrat","B) Önce karbonhidrat, bitince yağ"],correct:1,hint:"Uzun koşu = önce karbonhidrat → bitince yağ yakılır → yağ da lazım!"}},

{id:"f090",subject:"fen",kazanim:209,kazanimName:"Besinler ve Canlı Yaşamı",difficulty:3,type:"mc",
 question:"Bir yörede çocuklar yalnızca ekmek ve pirinç yiyerek büyüdü. Yıllar içinde ne sıkıntısı çekerler?",
 options:["A) Enerji eksikliği — çok zayıf olurlar.","B) Protein, vitamin ve mineral eksikliği — büyüme gecikmesi, bağışıklık sorunları yaşanır.","C) Hiçbir sıkıntı olmaz; ekmek her şeyi içerir.","D) Yalnızca su eksikliği yaşanır."],
 correct:1,wrongFeedback:"Yalnızca karbonhidrat alınırsa protein (büyüme), vitamin (bağışıklık), mineral (kemik) eksikliği olur. Tek yönlü beslenme sağlıklı değildir.",
 hint:"Ekmek hangi besin öğesinde zayıf?",
 simplified:{question:"Ekmek protein bakımından zengin midir?",options:["A) Evet, çok protein içerir","B) Hayır, az protein içerir — et ve yumurta gerekli"],correct:1,hint:"Ekmek = karbonhidrat ağırlıklı. Protein az → kas sorunları!"}},

// ══ KONU 10: Genel Değerlendirme ══
{id:"f091",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:2,type:"mc",
 question:"Aşağıdaki ifadelerden hangisi Fen Bilimleri ile ilgili YANLIŞ bir yargıdır?",
 options:["A) Deneyler bilimsel bilgiyi destekler.","B) Hipotez doğrulanmadan önce gerçektir.","C) Gözlem bilimin temel adımlarından biridir.","D) Sonuçlar tekrarlanabilir olmalıdır."],
 correct:1,wrongFeedback:"B yanlış: Hipotez bir tahmindir; deney ile sınanıp doğrulanmadan gerçek sayılmaz.",
 hint:"Hipotez nedir? Deney öncesi mi sonrası mı doğru sayılır?",
 simplified:{question:"Hipotez ne demektir?",options:["A) Deney öncesi tahmin (henüz doğrulanmamış)","B) Kesinleşmiş bilimsel gerçek"],correct:0,hint:"Hipotez = tahmin. Deney ile test edilmeli!"}},

{id:"f092",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:2,type:"mc",
 question:"Doğal kaynaklarımızı korumak için yapabileceğimiz davranışlar:\nI.  Suyu tasarruflu kullanmak\nII. Geri dönüşüm yapmak\nIII. Gereksiz ışıkları söndürmek\nIV. Tek kullanımlık plastik kullanmak\nHangisi yanlış davranıştır?",
 options:["A) Yalnız IV","B) I ve III","C) II ve IV","D) Yalnız I"],
 correct:0,wrongFeedback:"IV yanlış davranış: tek kullanımlık plastik çevreye zarar verir. I, II, III hepsi doğru davranışlar.",
 hint:"IV'ü düşün: tek kullanımlık plastik çevreyi ne etkiler?",
 simplified:{question:"Tek kullanımlık plastik kullanmak çevre için iyi mi kötü mü?",options:["A) İyi — pratik","B) Kötü — çevre kirliliği yaratır"],correct:1,hint:"Plastik yavaş parçalanır → çevre sorunu → kötü davranış!"}},

{id:"f093",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:2,type:"mc",
 question:"Bir öğrenci şu soruyu sordu: 'Mıknatıs, su içindeki demir parçasını çeker mi?' Bunu öğrenmek için ne yapmalı?",
 options:["A) Kitap okumalı, deney yapmamalı.","B) Sadece arkadaşına sormalı.","C) Bir kap suya demir koyup üzerine mıknatıs tutarak deney yapmalı.","D) Tahmin etmeli, denemeye gerek yok."],
 correct:2,wrongFeedback:"Bilimsel yöntem: gözlem → hipotez → deney → sonuç. Soruyu cevaplamak için deney en doğru yoldur.",
 hint:"Bilimsel sorulara nasıl cevap buluruz?",
 simplified:{question:"Bir soruyu bilimsel olarak cevaplamak için ne yapılır?",options:["A) Deney yapılır","B) Tahmin edilir, yeter"],correct:0,hint:"Bilim = deney yap, kanıtla!"}},

{id:"f094",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:3,type:"mc",
 question:"Bir öğrenci şu gözlemi yaptı: 'Kış günleri yazdan kısa.' Bu gözlemi açıklayan bilimsel kavram hangisidir?",
 options:["A) Dönme hareketi — gece/gündüz dengesi değişir.","B) Dolanma hareketi + eksen eğikliği — mevsimsel gün uzunluğu değişimi.","C) Hâl değişimi — kış soğuğu günü kısaltır.","D) Mıknatısın etkileri — güneş çekim değişimi."],
 correct:1,wrongFeedback:"Gün uzunluğunun mevsimsel değişimi, Dünya'nın dolanma hareketi + eksen eğikliğiyle açıklanır.",
 hint:"Mevsimsel gün uzunluğu farkı hangi hareketten kaynaklanır?",
 simplified:{question:"Kışın gündüz neden kısa?",options:["A) Dünya daha hızlı döner","B) Eksen eğik olduğu için kışın kuzey yarımküre az güneş alır"],correct:1,hint:"Eksen eğikliği + dolanma → kışın az güneş → kısa gündüz!"}},

{id:"f095",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:3,type:"mc",
 question:"Selin bir deniz kenarındaki tuzlu suyu içmeye çalıştı ama suyu çok tuzlu geldi. Bunu içilebilir su haline getirmek için hangi yöntem kullanılabilir?",
 options:["A) Süzme — tuz süzgeçte kalır.","B) Mıknatıslama — tuz çekilir.","C) Damıtma (buharlaştırma + yoğuşma) — su buharlaşır, tuz kalır, su yoğuşarak toplanır.","D) Eleme — tuz elekte kalır."],
 correct:2,wrongFeedback:"Damıtma: Su buharlaştırılır → tuz geride kalır → buhar soğutulup yoğuşturulur → temiz su elde edilir. Deniz suyundan içme suyu üretiminde kullanılır.",
 hint:"Tuz suda çözünmüş; süzme veya mıknatıs işe yaramaz. Hangi yöntem su buharını ayırır?",
 simplified:{question:"Tuzlu sudan temiz su elde etmek için su önce ne yapılmalı?",options:["A) Süzülmeli","B) Buharlaştırılıp sonra yoğuşturulmalı"],correct:1,hint:"Su buharlaşır ama tuz buharlaşmaz → saf su elde edilir!"}},

{id:"f096",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:3,type:"mc",
 question:"Bir ekoloji bilimcisi şunu söyledi: 'Arılar nesli tükeniyor, bu çok büyük bir tehlike.' Arıların nesli tükenirse hangi zincirleme sorun ortaya çıkar?",
 options:["A) Bal kalmaz, sadece o.","B) Çiçekler tozlaşamaz → meyveler oluşmaz → ekosistem bozulur → insan besin zinciri etkilenir.","C) Yalnızca çiçekler etkilenir, hayvanlar ve insanlar etkilenmez.","D) Hava kalitesi bozulur çünkü arılar karbondioksit tüketir."],
 correct:1,wrongFeedback:"Arılar tozlaşmayı sağlar. Tozlaşma olmadan meyve-sebze yetişemez. Bu gıda güvenliğini etkiler.",
 hint:"Arılar ne işe yarar? Tozlaşma olmazsa ne olur?",
 simplified:{question:"Arılar çiçekleri neden ziyaret eder?",options:["A) Bal için — tozlaşma sağlarlar","B) Sadece bal için — tozlaşma önemli değil"],correct:0,hint:"Arı bal alır + çiçeğe tozlaşma yapar = hem arı hem bitki kazanır!"}},

{id:"f097",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:3,type:"mc",
 question:"Aşağıdaki olaylardan hangisi Fen Bilimleri açısından doğru açıklanmıştır?",
 options:["A) Buz soğuduğu için küçülür — doğru.","B) Termometre ısındığında sıvısı yükselir — genişleme nedeniyle doğru.","C) Demir mıknatısa çekilmez — doğru.","D) Su donunca büzülür — doğru."],
 correct:1,wrongFeedback:"B doğru: Isı → genişleme → termometre sıvısı yükselir. A yanlış (buz erime değil, ısınma). C yanlış (demir çekilir). D yanlış (su donunca genişler).",
 hint:"Termometre sıvısı ısındığında gerçekten yükselir mi?",
 simplified:{question:"Termometreye sıcak nefes üfleyince ne olur?",options:["A) Sıvı yükselir","B) Sıvı alçalır"],correct:0,hint:"Sıcaklık artar → genişleme → sıvı yükselir!"}},

{id:"f098",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:2,type:"mc",
 question:"Aşağıdaki Fen Bilimleri kavramları ve günlük örnekler eşleştirilmiştir. Hangisi YANLIŞTIR?",
 options:["A) Hâl değişimi → buz erimesi","B) Karışım ayırma → çay süzme","C) Mıknatıslama → plastik ayrımı","D) Genişleme → köprü boşlukları"],
 correct:2,wrongFeedback:"C yanlış: Mıknatıslama plastiği ayırmaz; plastik mıknatıstan etkilenmez. Demir-kum ayırımında kullanılır. A, B, D doğru.",
 hint:"Mıknatıs plastikten etkilenir mi?",
 simplified:{question:"Mıknatıs plastiği çeker mi?",options:["A) Evet","B) Hayır — plastik mıknatıstan etkilenmez"],correct:1,hint:"Plastik metal değil → mıknatıs çekmez!"}},

{id:"f099",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:3,type:"mc",
 question:"Bir öğrenci Fen Bilimleri dersinde öğrendiklerini özetledi:\n'Maddeler ısınca genişler, soğuyunca büzülür. Su hariç — su donunca genişler. Mıknatıs metalik maddeleri çeker. Karışımlar uygun yöntemle ayrılabilir.'\nBu özetle ilgili hangisi DOĞRUDUR?",
 options:["A) Özet tamamen doğrudur.","B) Özetin yalnızca mıknatıs kısmı doğrudur.","C) Özet tamamen yanlıştır.","D) Yalnızca ısınma-soğuma kısmı doğrudur."],
 correct:0,wrongFeedback:"Özetin tüm bilgileri doğrudur: genişleme-büzülme ✓, suyun istisnası ✓, mıknatıs ✓, karışım ayırma ✓.",
 hint:"Her bir bilgiyi kontrol et: hepsi doğru mu?",
 simplified:{question:"'Su donunca genişler.' Bu doğru mu?",options:["A) Evet — buz şişeleri çatlatır","B) Hayır — su donunca küçülür"],correct:0,hint:"Donmuş su şişirir, buz hacmi sudan büyük!"}},

{id:"f100",subject:"fen",kazanim:210,kazanimName:"Genel Değerlendirme",difficulty:3,type:"mc",
 question:"Aşağıdaki senaryoda hangi fen bilimleri kavramları bir arada kullanılmıştır?\n'Tuzlu su ısıtılarak buharlaştırıldı. Buhar soğutularak yoğuşturuldu ve temiz su elde edildi. Bu temiz su ayrıca demir parçacıklardan mıknatısla arındırıldı.'\nBu senaryoda hangi kavramlar yer almaktadır?",
 options:["A) Yalnızca hâl değişimi","B) Hâl değişimi + karışım ayırma + mıknatıslama","C) Yalnızca karışım ayırma","D) Mıknatıslama + genişleme"],
 correct:1,wrongFeedback:"Buharlaşma ve yoğuşma = hâl değişimi. Tuzdan su ayırma = karışım ayırma. Demir parçacık giderme = mıknatıslama. Üç kavram birlikte.",
 hint:"Senaryo üç ayrı işlem içeriyor: sayıp eşleştir.",
 simplified:{question:"Suyun buharlaşıp yeniden sıvı olması hangi kavramı içerir?",options:["A) Hâl değişimi","B) Mıknatıslama"],correct:0,hint:"Buharlaşma + yoğuşma = hâl değişimi!"}},
];

const QBS = [
// ══ K1: Empati ══
{id:"s001",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:1,type:"mc",
 question:"Empati ne demektir?",
 options:["A) Kendimiz gibi düşünmek","B) Başkasının yerine geçerek onun hislerini anlamak","C) Birinin sözlerini taklit etmek","D) Her şeye katılmak"],
 correct:1,wrongFeedback:"Empati: Başkasının bakış açısını, duygularını kendi içimizde hissedebilmektir.",
 hint:"Empati = kendini başkasının yerine koymak.",
 simplified:{question:"Empati nedir?",options:["A) Kendi duygularını anlamak","B) Başkasının hislerini anlamaya çalışmak"],correct:1,hint:"Empati = başkasının yerine geçmek!"}},

{id:"s002",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:1,type:"mc",
 question:"Arkadaşın sınavdan düşük not aldığında empati göstermek için ne söylenir?",
 options:["A) Hep böyle zaten, şaşırmıyorum.","B) Nasıl hissettığini anlıyorum, birlikte çalışalım.","C) Beni ilgilendirmez.","D) Seviniyorum, sen de benim gibi oldun."],
 correct:1,wrongFeedback:"Empati: Karşının hislerini anlamak + destekleyici olmak.",
 hint:"Empati = anlamak + destek olmak.",
 simplified:{question:"Üzgün bir arkadaşa empatiyle ne dersin?",options:["A) Gülünç!","B) Seni anlıyorum, yardımcı olmak isterim."],correct:1,hint:"Empati = anlamak + destek!"}},

{id:"s003",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:1,type:"mc",
 question:"Farklı kültürden gelen bir öğrenci sınıfa katıldı. Empati göstermek için ne yapılmalı?",
 options:["A) Onu yalnız bırakmak","B) Alay etmek","C) Onu tanımaya ve hoş karşılamaya çalışmak","D) Onunla hiç konuşmamak"],
 correct:2,wrongFeedback:"Farklılıklara saygı: Onu tanımaya çalışmak, kültürünü merak etmek ve sıcak karşılamak empatidir.",
 hint:"Yabancı biri olsaydın nasıl karşılanmak isterdin?",
 simplified:{question:"Yeni gelen bir öğrenciyi nasıl karşılamalıyız?",options:["A) Yok saymak","B) Hoş karşılamak ve tanımaya çalışmak"],correct:1,hint:"Empati = onun yerine düşün!"}},

{id:"s004",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:1,type:"mc",
 question:"İnsanlar neden birbirinden farklıdır?",
 options:["A) Sadece yaşlılar farklıdır.","B) Farklı kültür, dil, görünüş ve düşünce yapısına sahip oldukları için.","C) Farklılıklar yalnızca fiziksel özellikleri kapsar.","D) İnsanlar aslında farklı değildir."],
 correct:1,wrongFeedback:"Kültür, dil, inanç, görünüş, düşünce gibi pek çok açıdan farklılık olabilir. Bu zenginliktir.",
 hint:"Sadece görünüş mü, başka özellikler de mi farklı?",
 simplified:{question:"İnsanlar hangi özelliklerde farklı olabilir?",options:["A) Yalnızca ten rengi","B) Kültür, dil, inanç, görünüş, düşünce..."],correct:1,hint:"Çok farklı özellikler = zenginlik!"}},

{id:"s005",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:2,type:"mc",
 question:"Empati için hangisi YANLIŞ bir yaklaşımdır?",
 options:["A) Kendin olsaydın nasıl hissederdin diye düşünmek","B) Karşının duygularını görmezden gelmek","C) Farklı bakış açılarını anlamaya çalışmak","D) Dinleyerek anlamak"],
 correct:1,wrongFeedback:"B empati değil, empatinin tam tersidir. Empati duyguları görmezden gelmek değil, anlamaktır.",
 hint:"Empati duyguları görmezden gelmeyi gerektirir mi?",
 simplified:{question:"Empati duyguları görmezden gelmek midir?",options:["A) Evet","B) Hayır — tam tersi, duyguları anlamaktır"],correct:1,hint:"Empati = anlamak!"}},

{id:"s006",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:2,type:"mc",
 question:"Empati ile ilgili: I. Başkasını anlama çabası  II. Farklılıklara saygı  III. Kendi fikirlerini dayatma  IV. Dinleme ve destekleme. Hangisi empatinin parçasıdır?",
 options:["A) I, II ve IV","B) Yalnız III","C) II ve III","D) Yalnız I"],
 correct:0,wrongFeedback:"I, II, IV empatiyi oluşturur. III (dayatma) empati değil, tam tersidir.",
 hint:"III'ü kontrol et: kendi fikirlerini dayatmak empati midir?",
 simplified:{question:"Kendi fikirlerini dayatmak empati midir?",options:["A) Evet","B) Hayır — empati anlamak, dayatmak değil"],correct:1,hint:"Empati = anlamak. Dayatmak = empatinin zıttı!"}},

{id:"s007",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:2,type:"mc",
 question:"Selin: Farklılıklar toplumu böler. Derya: Farklılıklar toplumu zenginleştirir. Kimin görüşü daha doğrudur?",
 options:["A) Yalnız Selin","B) Yalnız Derya","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Derya doğru: Farklı kültürler, diller, bakış açıları toplumu zenginleştirir.",
 hint:"Farklı kültürler bir arada yaşayabilir mi?",
 simplified:{question:"Farklı kültürler bir arada yaşayabilir mi?",options:["A) Hayır, kavga çıkar","B) Evet, birbirini zenginleştirir"],correct:1,hint:"Çeşitlilik = zenginlik!"}},

{id:"s008",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:3,type:"mc",
 question:"Altın Kural: Başkalarına nasıl davranılmasını istiyorsanız, siz de onlara öyle davranın. Bu kural empatiyle nasıl ilişkilidir?",
 options:["A) İlişkisi yoktur.","B) Bu kural empatinin temelini oluşturur: kendin gibi hisset, öyle davran.","C) Bu kural yalnızca dinlere özgüdür.","D) Bu kural empatinin zıttıdır."],
 correct:1,wrongFeedback:"Altın Kural empatinin pratik uygulamasıdır.",
 hint:"Her ikisi de başkasının yerine geç diyor.",
 simplified:{question:"Başkalarına nasıl davranılmasını istiyorsanız öyle davranın — empatiyle ilgili mi?",options:["A) Hayır","B) Evet, empati bu!"],correct:1,hint:"Aynı fikir, farklı söyleniş!"}},

{id:"s009",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:3,type:"mc",
 question:"Çağlar engelli bir arkadaşıyla tatil planlıyor. Empati göstermek için ne yapmalı?",
 options:["A) Her şeyi kendisi belirlemeli","B) Arkadaşının ihtiyaçlarını göz önüne alarak ulaşılabilir mekanlar seçmeli","C) Arkadaşını evde bırakmalı","D) Tatili iptal etmeli"],
 correct:1,wrongFeedback:"Empati: Başkasının ihtiyaçlarını onun bakış açısıyla anlamaktır.",
 hint:"Engelli olsaydın tatilde ne isterdin?",
 simplified:{question:"Engelli arkadaşla tatil planlarken ne düşünmeliyiz?",options:["A) Yalnızca kendiniz ne istediğinizi","B) Arkadaşınızın ihtiyaçlarını ve rahatlığını"],correct:1,hint:"Empati = onun yerine düşün!"}},

{id:"s010",subject:"sosyal",kazanim:301,kazanimName:"Empati ve Farklılıklara Saygı",difficulty:3,type:"mc",
 question:"Bir kişi sokakta ağlayan bir çocuk gördü ama yardım etmeden geçti. Bu davranış empatiyle nasıl değerlendirilebilir?",
 options:["A) Normal bir davranış, müdahale gerekmez.","B) Empatiden yoksun bir davranış; empati yardım etmeyi de kapsar.","C) Doğru; yabancılara karışılmaz.","D) Empatinin gereği sadece anlamaktır, yardım şart değildir."],
 correct:1,wrongFeedback:"Gerçek empati yalnızca hissetmek değil, harekete geçmeyi de içerir.",
 hint:"Empati sadece hissetmek mi, yoksa harekete geçmek de mi?",
 simplified:{question:"Empati anlamak VE yardım etmek midir?",options:["A) Sadece anlamak","B) Anlamak ve harekete geçmek"],correct:1,hint:"Empati = hissederim + yardım ederim!"}},

// ══ K2: Hava Olayları ══
{id:"s011",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi bir hava olayıdır?",
 options:["A) Depremin olması","B) Yağmurun yağması","C) Dağın yükselmesi","D) Nehrin akması"],
 correct:1,wrongFeedback:"Hava olayları atmosferde kısa sürede değişen olaylardır: yağmur, kar, fırtına, sis.",
 hint:"Hava durumu raporunda ne gibi şeyler söylenir?",
 simplified:{question:"Hava durumu haberinde ne söylenir?",options:["A) Deprem haberleri","B) Yağmur, kar, güneş, fırtına..."],correct:1,hint:"Hava = atmosferdeki değişimler!"}},

{id:"s012",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:1,type:"mc",
 question:"Sıcaklık ölçmek için hangi araç kullanılır?",
 options:["A) Termometre","B) Mıknatıs","C) Mikroskop","D) Teleskop"],
 correct:0,wrongFeedback:"Termometre sıcaklığı ölçer. Yağış için yağmur ölçer, rüzgâr için anemometre kullanılır.",
 hint:"Ateşin yüksek olup olmadığını nasıl ölçeriz?",
 simplified:{question:"Ateş ölçmek için ne kullanırız?",options:["A) Termometre","B) Cetvel"],correct:0,hint:"Termometre = sıcaklık ölçer!"}},

{id:"s013",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:1,type:"mc",
 question:"Resimli grafik nedir?",
 options:["A) Yalnızca rakamların yazıldığı tablo","B) Verilerin sembol veya resimlerle gösterildiği grafik","C) Coğrafi sınırların çizildiği harita","D) Tarihsel olayların listesi"],
 correct:1,wrongFeedback:"Resimli grafik: Verilerin küçük resimler veya sembollerle gösterildiği grafik türüdür.",
 hint:"Resimli grafik adından ne anlıyoruz?",
 simplified:{question:"Resimli grafikte veriler nasıl gösterilir?",options:["A) Yalnızca sayılarla","B) Küçük resimler ve sembollerle"],correct:1,hint:"Resimli = sembollerle gösterim!"}},

{id:"s014",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:1,type:"mc",
 pasaj:"Pazartesi: 18°C — Salı: 22°C — Çarşamba: 15°C — Perşembe: 20°C",
 question:"En sıcak gün hangisidir?",
 options:["A) Pazartesi","B) Salı","C) Çarşamba","D) Perşembe"],
 correct:1,wrongFeedback:"18, 22, 15, 20 arasında en büyük sayı 22 → Salı.",
 hint:"En sıcak = en yüksek sıcaklık.",
 simplified:{question:"18, 22, 15, 20 arasında en büyük hangisi?",options:["A) 18","B) 22","C) 15","D) 20"],correct:1,hint:"22 en büyük → Salı!"}},

{id:"s015",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:2,type:"mc",
 pasaj:"Bir haftalık yağış: Pzt:10 — Sal:0 — Çar:25 — Per:5 — Cum:0 — Cmt:30 — Paz:15 (mm)",
 question:"Tabloya göre hangisi YANLIŞTIR?",
 options:["A) En çok yağış Cumartesi günüydü.","B) Salı ve Cuma hiç yağmadı.","C) Toplam yağış 85 mm'dir.","D) Çarşamba yağışı Perşembe'nin 4 katıdır."],
 correct:3,wrongFeedback:"D yanlış: Çarşamba=25, Perşembe×4=5×4=20. 25≠20 yani 4 katı değil 5 katı. A, B, C doğru.",
 hint:"D'yi kontrol et: 5×4=20, Çarşamba=25. Eşit mi?",
 simplified:{question:"5 × 4 = ?",options:["A) 20","B) 25"],correct:0,hint:"5×4=20 ≠ 25 → D yanlış!"}},

{id:"s016",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:2,type:"mc",
 question:"Hava olaylarını resimli grafiğe aktarmak için ne yapılmalı?",
 options:["A) Rastgele resimler çizilmeli","B) Gözlemler düzenli not edilmeli, her veri aynı sembolle gösterilmeli","C) Yalnızca güzel günlerin kaydı tutulmalı","D) Başkasının gözlemlerini kopyalamak yeterli"],
 correct:1,wrongFeedback:"Düzenli kayıt + tutarlı sembol kullanımı gerektirir.",
 hint:"Grafik çizmek için önce ne yapılmalı?",
 simplified:{question:"Grafik çizmeden önce ne yapılmalı?",options:["A) Önce grafik, sonra veri","B) Önce veri topla, not et; sonra grafiğe aktar"],correct:1,hint:"Veri → not → grafik!"}},

{id:"s017",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:2,type:"mc",
 question:"Grafik: ☀=güneşli, 🌧=yağmurlu. Nisan'da: ☀☀☀☀☀☀🌧🌧🌧🌧🌧. Kaç gün yağmurlu?",
 options:["A) 6","B) 5","C) 4","D) 3"],
 correct:1,wrongFeedback:"🌧 sembolü 5 tane → 5 gün yağmurlu.",
 hint:"🌧 sembolleri say.",
 simplified:{question:"🌧🌧🌧🌧🌧 kaç tane?",options:["A) 4","B) 5","C) 6"],correct:1,hint:"1,2,3,4,5 → 5 tane!"}},

{id:"s018",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:3,type:"mc",
 pasaj:"Ankara:-2°C — İstanbul:5°C — Antalya:10°C — Erzurum:-15°C (Ocak ortalaması)",
 question:"Bu verilere göre hangisi ÇIKARILAMAZ?",
 options:["A) En soğuk şehir Erzurum'dur.","B) Antalya en sıcak şehirdir.","C) İstanbul Ankara'dan daha sıcaktır.","D) Erzurum'da Ocak ayında kar yağdığı kesindir."],
 correct:3,wrongFeedback:"D çıkarılamaz: Sıcaklık -15°C olması kar yağacağını garanti etmez; nem de gereklidir.",
 hint:"Yalnızca sıcaklıktan kar yağıp yağmadığını söyleyebilir miyiz?",
 simplified:{question:"Sıcaklık -15°C ise kar kesin yağar mı?",options:["A) Evet, kesin","B) Hayır — nem de gerekli"],correct:1,hint:"Kar için hem soğuk hem nem şart!"}},

{id:"s019",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:3,type:"mc",
 question:"Resimli grafikte her sembol 5 günü temsil ediyor. 4 güneşli + 2 bulutlu sembol çizildi. Kaç gün güneşli, kaç gün bulutlu?",
 options:["A) 4 güneşli, 2 bulutlu","B) 20 güneşli, 10 bulutlu","C) 5 güneşli, 2 bulutlu","D) 8 güneşli, 4 bulutlu"],
 correct:1,wrongFeedback:"Her sembol=5 gün. 4×5=20 güneşli, 2×5=10 bulutlu.",
 hint:"4 sembol × 5 gün = ?",
 simplified:{question:"4 × 5 = ?",options:["A) 9","B) 20","C) 4"],correct:1,hint:"4×5=20 güneşli gün!"}},

{id:"s020",subject:"sosyal",kazanim:302,kazanimName:"Hava Olayları ve Resimli Grafikler",difficulty:3,type:"mc",
 question:"Düzensiz not alan öğrencinin hava grafigi güvenilir olur mu?",
 options:["A) Evet, grafik notlara gerek duymaz.","B) Hayır, grafik güvenilir veriye dayanır; düzensiz not = yanlış grafik.","C) Kısmen — yine de güzel görünebilir.","D) Hayır ama önemli değildir."],
 correct:1,wrongFeedback:"Güvenilir grafik = güvenilir veri. Düzensiz not = yanlış grafik.",
 hint:"Güvenilir grafik için ne şart?",
 simplified:{question:"Yanlış veriyle doğru grafik yapılabilir mi?",options:["A) Evet","B) Hayır — yanlış veri = yanlış grafik"],correct:1,hint:"Veri yanlışsa grafik de yanlış olur!"}},

// ══ K3: İstek ve İhtiyaç ══
{id:"s021",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:1,type:"mc",
 question:"İhtiyaç nedir?",
 options:["A) İstediğimiz ama olmadan da yaşayabileceğimiz şeyler","B) Yaşamak için zorunlu olan şeyler","C) Lüks tüketim ürünleri","D) Yalnızca yiyecek ve içecek"],
 correct:1,wrongFeedback:"İhtiyaç: Yiyecek, su, barınak gibi yaşamak için zorunlu olan şeylerdir.",
 hint:"İhtiyaç olmadan hayat devam eder mi?",
 simplified:{question:"Su olmadan hayatta kalabilir miyiz?",options:["A) Evet","B) Hayır — su ihtiyaçtır"],correct:1,hint:"Su = hayat için şart = İHTİYAÇ!"}},

{id:"s022",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi İHTİYAÇtır?",
 options:["A) Yeni oyun konsolu","B) Marka spor ayakkabı","C) Temiz içme suyu","D) Tatile gitmek"],
 correct:2,wrongFeedback:"Temiz su yaşam için zorunludur. Diğerleri olmadan da yaşanabilir.",
 hint:"Olmadan hayatta kalabilir miyiz?",
 simplified:{question:"Su olmadan yaşanabilir mi?",options:["A) Evet","B) Hayır — ihtiyaçtır"],correct:1,hint:"Su = ihtiyaç!"}},

{id:"s023",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi İSTEKtir?",
 options:["A) Yiyecek","B) Barınak","C) Sağlık hizmetleri","D) Son model akıllı telefon"],
 correct:3,wrongFeedback:"Son model telefon olmadan da yaşarız. Bu istektir.",
 hint:"Son model telefon zorunlu mu?",
 simplified:{question:"Son model telefon olmadan yaşayabilir miyiz?",options:["A) Evet — istektir","B) Hayır — ihtiyaçtır"],correct:0,hint:"Eski telefon da çalışır → İSTEK!"}},

{id:"s024",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:1,type:"mc",
 question:"İstek ile ihtiyaç arasındaki temel fark nedir?",
 options:["A) İstek pahalı, ihtiyaç ucuzdur.","B) İhtiyaç olmadan yaşamak zorlaşır; istek olmadan yaşanabilir.","C) Her ikisi de aynıdır.","D) İstek zorunlu, ihtiyaç değildir."],
 correct:1,wrongFeedback:"İhtiyaç = zorunlu. İstek = olmasa da olur.",
 hint:"Hangisi olmadan hayat güçleşir?",
 simplified:{question:"Yiyecek mi oyuncak mı daha zorunlu?",options:["A) Oyuncak","B) Yiyecek"],correct:1,hint:"Yiyecek olmadan yaşamak zor → ihtiyaç!"}},

{id:"s025",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:2,type:"mc",
 question:"Ali 50 TL'si var. Yemek 40 TL, oyun kartı 30 TL. Bilinçli seçim nedir?",
 options:["A) Oyun kartını almak — daha eğlenceli","B) Yemek almak — ihtiyaç önce gelir","C) İkisini de almak — 70 TL ama 50 TL var","D) Hiçbirini almamak"],
 correct:1,wrongFeedback:"Bilinçli seçim: İhtiyacı (yemek) önce karşılamak. İkisini almak mümkün değil.",
 hint:"İhtiyaç mı istek mi önce gelir?",
 simplified:{question:"Yemek mi oyun kartı mı daha zorunlu?",options:["A) Oyun kartı","B) Yemek"],correct:1,hint:"Yemek ihtiyaç → önce yemek!"}},

{id:"s026",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:2,type:"mc",
 question:"Liste: Barınak / Akıllı saat / Temiz hava / Tatil / Sağlık hizmeti. Kaç tane İHTİYAÇ var?",
 options:["A) 2","B) 3","C) 4","D) 5"],
 correct:1,wrongFeedback:"İhtiyaçlar: Barınak, Temiz hava, Sağlık hizmeti = 3. Akıllı saat ve tatil istek.",
 hint:"Her birini kontrol et: Olmadan yaşanabilir mi?",
 simplified:{question:"Temiz hava olmadan yaşanabilir mi?",options:["A) Evet","B) Hayır — ihtiyaç"],correct:1,hint:"Nefes = hava = ihtiyaç!"}},

{id:"s027",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:2,type:"mc",
 question:"Doğal afet sonrasında en önce karşılanması gereken nedir?",
 options:["A) Oyun ve eğlence","B) Su, yiyecek, barınak ve sağlık","C) İnternet ve telefon","D) Kıyafet alışverişi"],
 correct:1,wrongFeedback:"Acil durumlarda temel yaşam ihtiyaçları önceliklidir.",
 hint:"Hayatta kalmak için en önce ne lazım?",
 simplified:{question:"Depremzedeler için ilk yardım ne olmalı?",options:["A) Oyuncak","B) Su, yiyecek, barınak, sağlık"],correct:1,hint:"Hayat için zorunlu = önce ihtiyaçlar!"}},

{id:"s028",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:3,type:"mc",
 question:"Berk: İnternet artık bir ihtiyaçtır. Selin: İnternet istek, insanlık internetsiz yaşadı. Hangisi daha savunulabilir?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi de savunulabilir — bağlama göre değişir","D) Hiçbiri"],
 correct:2,wrongFeedback:"İkisi de savunulabilir. Bugünkü toplumda internet zorunlu hale gelmiştir ama biyolojik zorunluluk değildir.",
 hint:"İhtiyaçlar zamanla değişebilir mi?",
 simplified:{question:"Elektrik 100 yıl önce ihtiyaç mıydı?",options:["A) Evet, her zaman ihtiyaçtı","B) Hayır, zamanla hayatın parçası oldu"],correct:1,hint:"İhtiyaçlar değişebilir!"}},

{id:"s029",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:3,type:"mc",
 question:"Bir aile bütçesinde hangisi EN SONA bırakılmalı?",
 options:["A) Faturalar","B) Yiyecek alışverişi","C) Lüks tatil","D) Çocukların okul malzemeleri"],
 correct:2,wrongFeedback:"Lüks tatil istek kategorisindedir. Faturalar, yiyecek ve okul malzemeleri önce karşılanmalı.",
 hint:"Hangisi olmadan hayat devam eder?",
 simplified:{question:"Tatil mi yiyecek mi daha zorunlu?",options:["A) Tatil — önce tatil","B) Yiyecek — önce zorunlu giderler"],correct:1,hint:"Yiyecek ihtiyaç → önce!"}},

{id:"s030",subject:"sosyal",kazanim:303,kazanimName:"İstek ve İhtiyaç",difficulty:3,type:"mc",
 question:"İstek-ihtiyaç ayrımı neden önemlidir?",
 options:["A) İstekleri öncelik vermek için","B) Sınırlı kaynakları doğru kullanmak ve öncelikleri belirlemek için","C) Her şeyi satın almak için","D) İhtiyaçları azaltmak için"],
 correct:1,wrongFeedback:"Az parayla önce neyi almalıyım diye karar verirken kullanılır.",
 hint:"Paranız sınırlıyken önce ne alırsınız?",
 simplified:{question:"Az paran varsa önce ne alırsın?",options:["A) Oyuncak","B) Yiyecek"],correct:1,hint:"Önce ihtiyaçlar!"}},

// ══ K4: Kaynakları İsraf Etmeme ══
{id:"s031",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:1,type:"mc",
 question:"Israf ne demektir?",
 options:["A) Kaynakları verimli kullanmak","B) Kaynakları gereğinden fazla tüketmek","C) Geri dönüşüm yapmak","D) Tasarruf etmek"],
 correct:1,wrongFeedback:"Israf: Kaynakları gereksiz yere tüketmek. Tasarrufun tersidir.",
 hint:"Israf tasarrufun tersi.",
 simplified:{question:"Gereksiz yere su bırakmak israf mı tasarruf mu?",options:["A) Tasarruf","B) İsraf"],correct:1,hint:"Gereksiz = İSRAF!"}},

{id:"s032",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:1,type:"mc",
 question:"Su tasarrufu için ne yapılabilir?",
 options:["A) Diş fırçalarken musluğu açık bırakmak","B) Diş fırçalarken musluğu kapatmak","C) Her gün uzun duş almak","D) Arabayı hortumla yıkamak"],
 correct:1,wrongFeedback:"Diş fırçalarken musluğu kapatmak litrece su kurtarır.",
 hint:"Diş fırçarken suya gerçekten ihtiyaç var mı?",
 simplified:{question:"Diş fırçarken musluk açık mı kapalı mı olmalı?",options:["A) Açık","B) Kapalı"],correct:1,hint:"Kapalı = tasarruf!"}},

{id:"s033",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:1,type:"mc",
 question:"Neden kaynakları tasarruflu kullanmalıyız?",
 options:["A) Kaynaklar sonsuzdur.","B) Kaynaklar sınırlıdır; gelecek nesiller için korunmalıdır.","C) Tasarruf yalnızca bireysel fayda sağlar.","D) Devlet her zaman yeni kaynak bulur."],
 correct:1,wrongFeedback:"Doğal kaynaklar sınırlıdır. Bugün israf edersek yarın yetmez.",
 hint:"Petrol sonsuz mu?",
 simplified:{question:"Doğal kaynaklar tükenir mi?",options:["A) Hayır, sonsuzdur","B) Evet, sınırlıdır"],correct:1,hint:"Petrol tükeniyor → sınırlı!"}},

{id:"s034",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:1,type:"mc",
 question:"Enerji tasarrufu için ne yapılmalıdır?",
 options:["A) Boş odaların ışığını açık bırakmak","B) Kullanmadığımız odaların ışığını söndürmek","C) Bilgisayarı her zaman açık bırakmak","D) Şarj aletini takılı bırakmak"],
 correct:1,wrongFeedback:"Kullanılmayan ışığı söndürmek hem enerji hem para tasarrufu sağlar.",
 hint:"Boş odada ışık açık kalmalı mı?",
 simplified:{question:"Odadan çıkarken ışık açık mı kapalı mı bırakılmalı?",options:["A) Açık","B) Kapalı"],correct:1,hint:"Boş oda + açık ışık = israf!"}},

{id:"s035",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:2,type:"mc",
 question:"Davranışlar: I. Çift taraflı kağıt kullanmak  II. Uzun duş almak  III. Geri dönüşüm yapmak  IV. Kullanılabilir malzeme varken yeni almak. Hangisi/leri israftır?",
 options:["A) II ve IV","B) I ve III","C) Yalnız II","D) Yalnız IV"],
 correct:0,wrongFeedback:"II (uzun duş = su israfı) ve IV (gereksiz yeni alım = israf). I ve III tasarrufdur.",
 hint:"Uzun duş ve gereksiz alım israf mı?",
 simplified:{question:"Uzun duş su israfı mıdır?",options:["A) Hayır","B) Evet"],correct:1,hint:"Uzun duş = fazla su = israf!"}},

{id:"s036",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:2,type:"mc",
 question:"Geri dönüşüm neden önemlidir?",
 options:["A) Yalnızca para kazanmak için","B) Doğal kaynakları korumak ve çevre kirliliğini azaltmak için","C) Devlet zorunlu kıldığı için","D) Sadece estetik nedenlerle"],
 correct:1,wrongFeedback:"Geri dönüşüm: Ham madde tasarrufu + enerji tasarrufu + atık azaltma = doğa koruması.",
 hint:"Geri dönüştürülen kutu yeni madenden üretilmez.",
 simplified:{question:"Geri dönüşüm doğaya faydalı mıdır?",options:["A) Hayır","B) Evet — kaynak ve enerji tasarrufu sağlar"],correct:1,hint:"Geri dönüşüm = kaynaklar korunur!"}},

{id:"s037",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:2,type:"mc",
 question:"Berk: Enerji tasarrufu yalnızca bireyin faydasına yarar. Selin: Toplumun enerji tasarrufu hem bireysel hem çevresel hem ekonomik fayda sağlar. Kimin görüşü doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Az enerji → az kirlilik → az dışa bağımlılık → az fatura. Çok boyutlu fayda.",
 hint:"Enerji tasarrufu yalnızca fatura tasarrufu mu?",
 simplified:{question:"Enerji tasarrufu sadece bize mi herkese mi yarar?",options:["A) Sadece bize","B) Herkese — çevreye ve ülkeye de"],correct:1,hint:"Az elektrik → az kirlilik → herkese fayda!"}},

{id:"s038",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:3,type:"mc",
 question:"Sürdürülebilirlik ne demektir?",
 options:["A) Her şeyi hemen tüket","B) Bugünkü ihtiyaçları karşılarken gelecek nesillerin de ihtiyaçlarını düşünmek","C) Kaynakları saklamak","D) Yalnızca ekonomik büyüme"],
 correct:1,wrongFeedback:"Sürdürülebilirlik: Bugün kullan, yarın için de bırak.",
 hint:"Gelecek nesiller de aynı kaynakları kullanabilmeli.",
 simplified:{question:"Sürdürülebilir olmak ne demektir?",options:["A) Her şeyi hemen tüket","B) Bugün kullan, yarın için de bırak"],correct:1,hint:"Gelecek nesillere de yetsin!"}},

{id:"s039",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:3,type:"mc",
 question:"Köyde su azaldı. Köylüler ne yapmalı?",
 options:["A) Normal tüketmeye devam etmek","B) Suyu tasarruflu kullanmak, yağmur suyu depolamak ve yetkilileri bilgilendirmek","C) Köyü terk etmek","D) Başka köylerden su çalmak"],
 correct:1,wrongFeedback:"Tasarruf + yağmur suyu toplama + bilgilendirme = bilinçli kaynak yönetimi.",
 hint:"Kısıtlı kaynak varken bilinçli insan ne yapar?",
 simplified:{question:"Su azalınca ne yapmalıyız?",options:["A) Daha çok kullanmak","B) Tasarruf etmek ve çözüm aramak"],correct:1,hint:"Az kaynak → dikkatli kullan!"}},

{id:"s040",subject:"sosyal",kazanim:304,kazanimName:"Kaynakları İsraf Etmeme",difficulty:3,type:"mc",
 question:"İsraf hakkında: I. Aşırı su kullanımı israftır  II. Geri dönüşüm yapılabilecek ürünleri çöpe atmak israftır  III. Tasarruf kaynakları tüketmez. Kaç ifade doğrudur?",
 options:["A) 1","B) 2","C) 3","D) 0"],
 correct:2,wrongFeedback:"I ✓, II ✓, III ✓. Üçü de doğru.",
 hint:"Her ifadeyi tek tek değerlendir.",
 simplified:{question:"Geri dönüşüm yapılabilecek ürünü atmak israf mıdır?",options:["A) Hayır","B) Evet"],correct:1,hint:"Kullanılabilir şeyi atmak = israf!"}},

// ══ K5: Teknolojik Ürünler ══
{id:"s041",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:1,type:"mc",
 question:"Traktör hangi teknoloji alanına girer?",
 options:["A) Ulaşım","B) İletişim","C) Tarım","D) Sağlık"],
 correct:2,wrongFeedback:"Traktör tarım arazilerinde kullanılır → Tarım teknolojisi.",
 hint:"Traktör nerede kullanılır?",
 simplified:{question:"Traktör nerede kullanılır?",options:["A) Hastanede","B) Tarlada (tarım)"],correct:1,hint:"Tarla = tarım teknolojisi!"}},

{id:"s042",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:1,type:"mc",
 question:"Çamaşır makinesi hangi teknoloji alanıdır?",
 options:["A) İletişim","B) Ulaşım","C) Ev/beyaz eşya","D) Sağlık"],
 correct:2,wrongFeedback:"Çamaşır makinesi ev işlerinde kullanılır. İletişim değil.",
 hint:"Çamaşır makinesi ne yapar?",
 simplified:{question:"Çamaşır makinesi iletişim sağlar mı?",options:["A) Evet","B) Hayır — çamaşır yıkar"],correct:1,hint:"Çamaşır yıkamak = ev teknolojisi!"}},

{id:"s043",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:1,type:"mc",
 question:"Akıllı tahta hangi kullanım alanına girer?",
 options:["A) Ulaşım","B) Eğitim","C) Tarım","D) Sağlık"],
 correct:1,wrongFeedback:"Akıllı tahta sınıflarda öğretim için kullanılır → Eğitim teknolojisi.",
 hint:"Akıllı tahta nerede kullanılır?",
 simplified:{question:"Akıllı tahta nerede kullanılır?",options:["A) Okullarda","B) Hastanelerde"],correct:0,hint:"Okul = eğitim teknolojisi!"}},

{id:"s044",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:1,type:"mc",
 question:"Uçak hangi teknoloji alanıdır?",
 options:["A) Eğitim","B) Ulaşım","C) Tarım","D) İletişim"],
 correct:1,wrongFeedback:"Uçak insanları veya yükü taşır → Ulaşım teknolojisi.",
 hint:"Uçak ne için kullanılır?",
 simplified:{question:"Uçak insanları taşır mı?",options:["A) Evet — ulaşım","B) Hayır"],correct:0,hint:"Taşıma = ulaşım!"}},

{id:"s045",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:2,type:"mc",
 question:"Eşleştirme: MRI cihazı — traktör. Doğru sınıflandırma hangisi?",
 options:["A) MRI→ulaşım, traktör→iletişim","B) MRI→sağlık, traktör→tarım","C) MRI→tarım, traktör→sağlık","D) MRI→eğitim, traktör→ulaşım"],
 correct:1,wrongFeedback:"MRI: hastanede → sağlık. Traktör: tarlada → tarım.",
 hint:"MRI nerede, traktör nerede kullanılır?",
 simplified:{question:"MRI cihazı nerede kullanılır?",options:["A) Hastanede","B) Tarlada"],correct:0,hint:"MRI = hastane = sağlık!"}},

{id:"s046",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:2,type:"mc",
 question:"Eşleştirmeler: I.Telefon→iletişim  II.Uçak→ulaşım  III.MRI→tarım  IV.LED lamba→aydınlatma. Kaç doğru?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"I ✓, II ✓, III ✗ (MRI sağlık), IV ✓. Doğru: 3.",
 hint:"III'ü kontrol et: MRI hangi alanda?",
 simplified:{question:"MRI tarımda kullanılır mı?",options:["A) Evet","B) Hayır — sağlık"],correct:1,hint:"MRI = sağlık, tarım değil!"}},

{id:"s047",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:2,type:"mc",
 question:"Berk: Teknolojik ürünler yalnızca şehirlerde kullanılır. Selin: Teknoloji köylerde de kullanılır; tarım makineleri köy teknolojisidir. Kim doğru?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Traktör, sulama sistemi köy teknolojileridir.",
 hint:"Traktör şehirde mi kırsalda mı kullanılır?",
 simplified:{question:"Traktör şehirde mi kırsalda mı kullanılır?",options:["A) Şehirde","B) Kırsalda — teknoloji kırsal alanda da var!"],correct:1,hint:"Tarla = kırsal = teknoloji orada da var!"}},

{id:"s048",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:3,type:"mc",
 question:"Hem tarım hem çevre hem ekonomi alanında kullanılan bir ürün hangi kategoriye girer?",
 options:["A) Yalnızca tarım","B) Birden fazla kategoriye — sınıflandırma kullanım amacına göre değişir","C) Bu ürün teknoloji sayılmaz","D) Yalnızca ekonomi"],
 correct:1,wrongFeedback:"Drone gibi ürünler tarım, güvenlik, kargo gibi birden fazla alanda kullanılabilir.",
 hint:"Drone hem tarımda hem güvenlikte kullanılıyor. Tek kategori yeterli mi?",
 simplified:{question:"Bir ürün birden fazla alanda kullanılabilir mi?",options:["A) Hayır, tek alan","B) Evet, birden fazla kullanım olabilir"],correct:1,hint:"Çok amaçlı ürün = birden fazla kategori!"}},

{id:"s049",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:3,type:"mc",
 question:"Hem iletişim hem sağlık ölçümü yapan akıllı saat için en doğru sınıflandırma nedir?",
 options:["A) Yalnızca sağlık","B) Yalnızca iletişim","C) Çok işlevli — birden fazla kategoride","D) Teknoloji sayılmaz"],
 correct:2,wrongFeedback:"Akıllı saat: adım sayar (sağlık) + mesaj alır (iletişim) + zaman gösterir. Tek kategori yetersiz.",
 hint:"Akıllı saat tek işlev mi yapıyor?",
 simplified:{question:"Akıllı saat kaç farklı işlev yapar?",options:["A) 1 — sadece saat","B) Birden fazla — iletişim, sağlık, zaman"],correct:1,hint:"Çok işlevli = birden fazla kategori!"}},

{id:"s050",subject:"sosyal",kazanim:305,kazanimName:"Teknolojik Ürünlerin Sınıflandırılması",difficulty:3,type:"mc",
 question:"Teknolojik ürün nedir?",
 options:["A) Yalnızca bilgisayar ve telefon","B) İnsan ihtiyaçlarını karşılamak için bilim ve mühendislikle üretilen araçlar","C) Doğadan toplanan nesneler","D) Yalnızca elektrikli aletler"],
 correct:1,wrongFeedback:"Teknoloji: İnsan ihtiyaçlarına cevap vermek için geliştirilen her türlü araç ve yöntem.",
 hint:"Teknolojik ürün doğada var mıydı yoksa insan mı geliştirdi?",
 simplified:{question:"Telefon doğada var mıydı?",options:["A) Evet","B) Hayır — insan üreticisi = teknoloji"],correct:1,hint:"İnsan yapımı = teknoloji!"}},

// ══ K6: Teknolojik Ürünlerin Gelişimi ══
{id:"s051",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:1,type:"mc",
 question:"Telefon gelişim sırası nasıldır?",
 options:["A) Akıllı → sabit → cep","B) Sabit telefon → cep telefonu → akıllı telefon","C) Mektup → radyo → telefon","D) Telsiz → internet → telefon"],
 correct:1,wrongFeedback:"1876 sabit telefon → 1970'ler cep → 2000'ler akıllı telefon.",
 hint:"İlk telefon sabit miydi?",
 simplified:{question:"İlk telefon sabit mi mobil mi idi?",options:["A) Sabit","B) Mobil"],correct:0,hint:"İlk telefon = sabit telefon!"}},

{id:"s052",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:1,type:"mc",
 question:"Mucit kim olarak tanımlanır?",
 options:["A) Bir şeyi kullanan","B) Yeni bir ürün veya yöntem geliştiren","C) Eski ürünleri satan","D) Tasarımı kopyalayan"],
 correct:1,wrongFeedback:"Mucit: Daha önce var olmayan bir ürün veya fikri geliştiren kişidir.",
 hint:"Thomas Edison ne yaptı?",
 simplified:{question:"Ampulü icat eden Edison ne demektir?",options:["A) Müşteri","B) Mucit — yeni bir şey geliştirdi"],correct:1,hint:"Yeni şey geliştiren = MUCİT!"}},

{id:"s053",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:1,type:"mc",
 question:"Uçaklar ilk icat edildiğinde nasıldı?",
 options:["A) Bugünkü yolcu uçakları gibi büyük","B) Küçük, ahşap ve çok kısa mesafe uçabiliyordu","C) Uzaya gidebiliyordu","D) Jet motoruyla çalışıyordu"],
 correct:1,wrongFeedback:"Wright Kardeşler 1903: Küçük, ahşap gövde, 12 saniye havada kaldı.",
 hint:"Wright Kardeşler'in uçağı nasıldı?",
 simplified:{question:"İlk uçak büyük müydü?",options:["A) Evet","B) Hayır — çok küçük ve ilkeldi"],correct:1,hint:"İlk uçuş 12 saniye = çok küçük başlangıç!"}},

{id:"s054",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:1,type:"mc",
 question:"Mektuptan e-postaya geçiş hangi alanı gösterir?",
 options:["A) Ulaşım","B) Tarım","C) İletişim","D) Sağlık"],
 correct:2,wrongFeedback:"Mektup → e-posta: Bilgi iletimi hızlandı. İletişim teknolojisi.",
 hint:"Mektup ve e-posta ne için kullanılır?",
 simplified:{question:"Mektup ve e-posta ne için kullanılır?",options:["A) Ulaşım","B) İletişim — bilgi iletmek"],correct:1,hint:"Haberleşme = iletişim!"}},

{id:"s055",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:2,type:"mc",
 question:"Eşleştirme: Alexander Graham Bell — Thomas Edison. Doğru olan hangisi?",
 options:["A) Bell → Uçak, Edison → Telefon","B) Bell → Telefon, Edison → Akkor ampul","C) Bell → Ampul, Edison → Uçak","D) Bell → İnternet, Edison → Telefon"],
 correct:1,wrongFeedback:"Bell 1876 telefonu, Edison 1879 akkor ampulü geliştirdi.",
 hint:"Bell telefonla mı ampulle mi ünlü?",
 simplified:{question:"Alexander Graham Bell ne icat etti?",options:["A) Akkor ampul","B) Telefon"],correct:1,hint:"Bell = telefon, Edison = ampul!"}},

{id:"s056",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:2,type:"mc",
 question:"Teknolojik gelişim: I.Ulaşım hızlandı  II.İletişim kolaylaştı  III.Her teknoloji çevreye zarar vermez  IV.Teknoloji yalnızca olumlu etkiler yarattı. Kaç ifade doğrudur?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"I ✓, II ✓, III ✓, IV ✗ (kirlilik gibi olumsuz etkiler de var). 3 doğru.",
 hint:"IV: Teknoloji hiç olumsuz etki yaratmadı mı?",
 simplified:{question:"Teknoloji çevreye zarar verebilir mi?",options:["A) Hayır, hepsi olumlu","B) Evet — fabrika dumanları gibi"],correct:1,hint:"Fabrika kirliliği = olumsuz etki!"}},

{id:"s057",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:2,type:"mc",
 question:"Berk: Geçmişteki mucitler daha akıllıydı, bugün yeni icat kalmadı. Selin: Her çağda mucitler vardır; icat etme devam eder. Kim daha gerçekçi?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Yapay zeka, uzay, kuantum... İcat hâlâ devam ediyor.",
 hint:"Bugün hiç yeni teknoloji icat edilmiyor mu?",
 simplified:{question:"Yapay zeka yeni bir icat mıdır?",options:["A) Evet","B) Hayır, çok eski"],correct:0,hint:"Yapay zeka son yıllarda büyük ilerleme = yeni icat var!"}},

{id:"s058",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:3,type:"mc",
 question:"Elektrikli araçlar benzinlinin yerini alıyor. Bu ne tür bir gelişme?",
 options:["A) Gereksiz değişim","B) Hem teknolojik hem çevresel açıdan önemli dönüşüm","C) Yalnızca ekonomik karar","D) Tarihsel gelişimle ilgisi yok"],
 correct:1,wrongFeedback:"Elektrikli araçlar yeni teknoloji + sıfır egzoz = hem teknoloji hem çevre için önemli.",
 hint:"Elektrikli araç egzoz çıkarır mı?",
 simplified:{question:"Elektrikli araç egzoz gazı çıkarır mı?",options:["A) Evet","B) Hayır — daha az kirletici"],correct:1,hint:"Egzoz yok = çevre faydası!"}},

{id:"s059",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:3,type:"mc",
 question:"Teknoloji gelişiminde en önemli dönüm noktası nedir?",
 options:["A) Mumun icadı","B) Elektrikli lambann icadı — gece hayatını ve endüstriyi değiştirdi","C) LED'in icadı","D) Meşalenin icadı"],
 correct:1,wrongFeedback:"Elektrikli ampul gece çalışmayı, fabrikayı, modern yaşamı mümkün kıldı.",
 hint:"Hangi icat insan yaşamını en köklü değiştirdi?",
 simplified:{question:"Elektrikli lamba icat edilmeden önce gece çalışmak kolay mıydı?",options:["A) Evet","B) Hayır — elektrik her şeyi değiştirdi"],correct:1,hint:"Elektrik = gece fabrika çalışabilir = büyük değişim!"}},

{id:"s060",subject:"sosyal",kazanim:306,kazanimName:"Teknolojik Ürünlerin Gelişimi",difficulty:3,type:"mc",
 question:"Teknoloji araç mıdır amaç mıdır?",
 options:["A) Araçtır — asıl amaç insan refahı ve sürdürülebilir dünya","B) Amaçtır — teknoloji geliştirmek tek hedef","C) Ne araç ne amaçtır","D) Her ikisi de"],
 correct:0,wrongFeedback:"Teknoloji bir araçtır. Amaç insanın daha iyi yaşamasıdır.",
 hint:"Telefon neden icat edildi?",
 simplified:{question:"Telefon neden icat edildi?",options:["A) Telefon olsun diye","B) İnsanlar haberleşebilsin diye"],correct:1,hint:"İhtiyaç → teknoloji. Teknoloji = araç!"}},

// ══ K7: Ekonomik Faaliyetler ══
{id:"s061",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:1,type:"mc",
 question:"Çiftçinin buğday yetiştirmesi hangi ekonomik faaliyettir?",
 options:["A) Ticaret","B) Hizmet","C) Tarımsal üretim","D) Sanayi"],
 correct:2,wrongFeedback:"Buğday yetiştirmek = tarımsal üretim.",
 hint:"Çiftçi tarlada ne yapıyor?",
 simplified:{question:"Çiftçi ürün yetiştirmesi üretim midir?",options:["A) Evet — tarımsal üretim","B) Hayır — ticaret"],correct:0,hint:"Yetiştirmek = üretmek = tarım!"}},

{id:"s062",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:1,type:"mc",
 question:"Doktorluk hangi ekonomik faaliyettir?",
 options:["A) Tarım","B) Sanayi","C) Hizmet","D) Ticaret"],
 correct:2,wrongFeedback:"Doktorluk hizmet faaliyetidir: Somut ürün üretmez ama tedavi hizmeti sunar.",
 hint:"Doktor fiziksel bir ürün üretir mi?",
 simplified:{question:"Doktor fiziksel ürün mü üretir?",options:["A) Evet","B) Hayır — hizmet sunar"],correct:1,hint:"Somut ürün yok → Hizmet!"}},

{id:"s063",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:1,type:"mc",
 question:"Mağazada araba satmak hangi faaliyettir?",
 options:["A) Üretim","B) Ticaret","C) Hizmet","D) Tarım"],
 correct:1,wrongFeedback:"Mal alıp satmak = ticaret.",
 hint:"Ticaret ne demek?",
 simplified:{question:"Satmak hangi faaliyet?",options:["A) Üretim","B) Ticaret"],correct:1,hint:"Satmak = ticaret!"}},

{id:"s064",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:1,type:"mc",
 question:"Fabrikada otomobil üretmek hangi faaliyettir?",
 options:["A) Tarım","B) Hizmet","C) Sanayi üretimi","D) Ticaret"],
 correct:2,wrongFeedback:"Fabrikada üretim = sanayi.",
 hint:"Fabrika ne yapar?",
 simplified:{question:"Fabrikada ürün yapmak ne?",options:["A) Tarım","B) Sanayi"],correct:1,hint:"Fabrika = üretim = sanayi!"}},

{id:"s065",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:2,type:"mc",
 question:"Eşleştirmeler: Öğretmenlik/tarım, fabrika/sanayi, berberlik/ticaret, çiftçilik/hizmet. Kaç doğru?",
 options:["A) 1 — yalnızca fabrika/sanayi","B) 2","C) 3","D) 4"],
 correct:0,wrongFeedback:"Fabrika/sanayi ✓. Diğerleri yanlış: Öğretmenlik=hizmet, berberlik=hizmet, çiftçilik=tarım.",
 hint:"Öğretmenlik tarım mı?",
 simplified:{question:"Öğretmenlik tarım mıdır?",options:["A) Evet","B) Hayır — hizmet"],correct:1,hint:"Öğretmen hizmet sunar!"}},

{id:"s066",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:2,type:"mc",
 question:"Balıkçı tuttuğu balıkları pazarda satıyor. Kaç çeşit ekonomik faaliyet var?",
 options:["A) 1 — yalnızca ticaret","B) 2 — üretim ve ticaret","C) 3 — üretim, ticaret, hizmet","D) Hiçbiri"],
 correct:1,wrongFeedback:"Balık avlamak = üretim. Pazarda satmak = ticaret. 2 faaliyet.",
 hint:"Avlamak mı satmak mı — kaç faaliyet?",
 simplified:{question:"Balık avlamak ve satmak kaç farklı faaliyet?",options:["A) 1","B) 2 — üretim + ticaret"],correct:1,hint:"Üretim + ticaret = 2 faaliyet!"}},

{id:"s067",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:2,type:"mc",
 question:"Şehirlerde hizmet sektörü kırsal alanlara göre nasıldır?",
 options:["A) Daha küçük","B) Daha büyük — hastane, okul, restoran gibi çok hizmet var","C) Aynı","D) Hizmet sektörü yalnızca köylerde var"],
 correct:1,wrongFeedback:"Şehirlerde çok insan = çok hizmet ihtiyacı = büyük hizmet sektörü.",
 hint:"Şehirlerde kaç hastane, okul, restoran var?",
 simplified:{question:"Şehirlerde hastane ve okul çok mu?",options:["A) Evet","B) Hayır"],correct:0,hint:"Şehir = çok insanı = çok hizmet!"}},

{id:"s068",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:3,type:"mc",
 question:"Buğday → değirmen (un) → fırın (ekmek) → bakkal (satış) süreci nasıl adlandırılır?",
 options:["A) Yalnızca ticaret","B) Yalnızca üretim","C) Üretim zinciri — hammaddeden tüketiciye birbirine bağlı faaliyetler","D) Yalnızca hizmet"],
 correct:2,wrongFeedback:"Her aşama ayrı ekonomik faaliyet. Bütünü üretim ve değer zinciri oluşturur.",
 hint:"Buğdaydan ekmek üretiminde kaç aşama var?",
 simplified:{question:"Buğdaydan ekmek olması tek faaliyet mi?",options:["A) Evet","B) Hayır — çiftçi, değirmenci, fırıncı, bakkal ayrı faaliyetler"],correct:1,hint:"Her aşama = ayrı faaliyet = zincir!"}},

{id:"s069",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:3,type:"mc",
 question:"Ali: Hizmet sektörü mal üretmediği için ekonomiye katkısı yoktur. Ayşe: Hizmet sektörü ekonominin temel parçasıdır. Kim doğru?",
 options:["A) Yalnız Ali","B) Yalnız Ayşe","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Ayşe doğru: Hizmet sektörü modern ekonomilerin büyük bölümünü oluşturur.",
 hint:"Doktorlar ve öğretmenler ekonomiye katkı yapar mı?",
 simplified:{question:"Öğretmenlik ekonomiye katkı sağlar mı?",options:["A) Hayır","B) Evet — nitelikli insan yetiştirir"],correct:1,hint:"Eğitim = nitelikli insan = güçlü ekonomi!"}},

{id:"s070",subject:"sosyal",kazanim:307,kazanimName:"Ekonomik Faaliyetler",difficulty:3,type:"mc",
 question:"Ekonomik faaliyet türleri: I.Tarım  II.Sanayi  III.Ticaret  IV.Hizmet. Öğretmenlik hangisine girer?",
 options:["A) Tarım","B) Sanayi","C) Ticaret","D) Hizmet"],
 correct:3,wrongFeedback:"Öğretmenlik hizmet sektörüdür: Somut ürün üretmez, eğitim hizmeti sunar.",
 hint:"Öğretmen ne üretir?",
 simplified:{question:"Öğretmen somut ürün mü üretir?",options:["A) Evet","B) Hayır — eğitim hizmeti sunar"],correct:1,hint:"Eğitim = hizmet!"}},

// ══ K8: Bilinçli Tüketici ══
{id:"s071",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:1,type:"mc",
 question:"Bilinçli tüketici kimdir?",
 options:["A) Pahalı ürünler alan","B) Haklarını bilen, ihtiyacına göre seçim yapan","C) En çok alışveriş yapan","D) Sadece marka ürün alan"],
 correct:1,wrongFeedback:"Bilinçli tüketici: Haklarını bilir, karşılaştırır, ihtiyaca göre seçer.",
 hint:"Bilinçli = akıllıca.",
 simplified:{question:"Bilinçli alışveriş ne demek?",options:["A) En pahalıyı almak","B) İhtiyacına göre seçim yapmak"],correct:1,hint:"Bilinç = ihtiyaç + hak + seçim!"}},

{id:"s072",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:1,type:"mc",
 question:"Tüketici hakları arasında hangisi vardır?",
 options:["A) Aldatılma hakkı","B) Güvenli ve kaliteli ürün alma hakkı","C) Fiyat hakkında bilgi verilmeme","D) Kusurlu ürünü iade edememe"],
 correct:1,wrongFeedback:"Tüketici hakları: Güvenli ürün + bilgi alma + iade ve değişim.",
 hint:"Tüketici olarak neye hakkın var?",
 simplified:{question:"Bozuk ürün aldığında ne hakkın var?",options:["A) Hak yok","B) İade veya değişim hakkı"],correct:1,hint:"Kusurlu = iade hakkı!"}},

{id:"s073",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:1,type:"mc",
 question:"Son kullanma tarihi geçmiş ürün alındığında ne yapılmalı?",
 options:["A) Kullanmaya devam etmek","B) Satıcıya iade edip değişim istemek","C) Başkasına hediye etmek","D) Çöpe atmadan kullanmak"],
 correct:1,wrongFeedback:"Son kullanma tarihi geçmiş ürün iade edilebilir. Tüketici hakkıdır.",
 hint:"Tarihi geçmiş ürün güvenli mi?",
 simplified:{question:"Tarihi geçmiş gıda yenir mi?",options:["A) Evet","B) Hayır — iade edilmeli"],correct:1,hint:"Tarih geçmiş = güvensiz = iade!"}},

{id:"s074",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:1,type:"mc",
 question:"Bilinçli tüketici alışveriş yapmadan önce ne yapmalı?",
 options:["A) Reklamlara bakıp en çok reklamı yapılanı almak","B) Fiyatları karşılaştırmak ve ürün etiketini okumak","C) Arkadaşının aldığını almak","D) Hızlıca karar vermek"],
 correct:1,wrongFeedback:"Bilinçli tüketici: Fiyat karşılaştırır, içeriği okur, ihtiyaca göre seçer.",
 hint:"İyi alışveriş için önce ne yapılır?",
 simplified:{question:"Ürün almadan önce ne yapmalıyız?",options:["A) Hemen alalım","B) Fiyatı ve içeriği kontrol edelim"],correct:1,hint:"Kontrol et → karşılaştır → karar ver!"}},

{id:"s075",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:2,type:"mc",
 question:"Bilinçli: I.Son kullanma tarihini kontrol etmek  II.Yalnızca markaya bakmak  III.Az ambalajlı tercih etmek  IV.Promosyon nedeniyle gereksiz almak. Hangisi bilinçsizdir?",
 options:["A) II ve IV","B) I ve III","C) Yalnız II","D) Yalnız IV"],
 correct:0,wrongFeedback:"II (yalnızca markaya bakmak) ve IV (gereksiz promosyon) bilinçsiz. I ve III bilinçli.",
 hint:"Marka sırf ünlü diye almak bilinçli mi?",
 simplified:{question:"Marka sırf ünlü diye almak bilinçli mi?",options:["A) Evet","B) Hayır — içerik ve kaliteye bakılmalı"],correct:1,hint:"Marka ≠ kalite!"}},

{id:"s076",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:2,type:"mc",
 question:"Selin zararlı kimyasal içeren şampuan aldı. Bilinçli tüketici olarak ne yapmalı?",
 options:["A) Kullanmaya devam etmek","B) Şirkete veya tüketici koruma kuruluşuna şikâyette bulunmak ve iade etmek","C) Sosyal medyaya yalan bilgi yazmak","D) Hiçbir şey yapmamak"],
 correct:1,wrongFeedback:"Zararlı ürünü iade et + resmi şikâyet. Diğer tüketicileri de korur.",
 hint:"Zararlı ürün karşısında hakkın ne?",
 simplified:{question:"Zararlı ürün aldığında ne yaparsın?",options:["A) Kullanmaya devam","B) İade ve şikâyet"],correct:1,hint:"Zararlı = iade + şikâyet!"}},

{id:"s077",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:2,type:"mc",
 question:"Berk: Bilinçli tüketici her zaman en ucuzu alır. Selin: Bilinçli tüketici fiyat-kalite dengesine ve ihtiyaca bakar. Kim doğru?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: En ucuz her zaman en kaliteli değildir.",
 hint:"En ucuz ürün her zaman iyi midir?",
 simplified:{question:"En ucuz ürün her zaman en iyi midir?",options:["A) Evet","B) Hayır — kalite de önemli"],correct:1,hint:"Ucuz ürün çabuk bozulabilir → fiyat+kalite dengesi!"}},

{id:"s078",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:3,type:"mc",
 question:"Her yıl yeni telefon alan öğrenci hakkında ne söylenmeli?",
 options:["A) Harika — en yeni teknolojiyi takip ediyor","B) Bilinçsiz tüketim: gereksiz yenileme = israf + e-atık sorunu","C) Normal — herkes yapıyor","D) Bu bireysel karardır değerlendirilemez"],
 correct:1,wrongFeedback:"Bilinçli tüketim: İhtiyaç varsa al. Gereksiz yenileme = israf + e-atık.",
 hint:"Her yıl yeni telefon almak istek mi ihtiyaç mı?",
 simplified:{question:"Her yıl yeni telefon almak istek mi ihtiyaç mı?",options:["A) İhtiyaç","B) İstek — mevcut çalışıyordur"],correct:1,hint:"Çalışan telefon → yenisi istek = bilinçsiz tüketim!"}},

{id:"s079",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:3,type:"mc",
 question:"Bilinçli tüketim çevre ile nasıl ilişkilidir?",
 options:["A) İlişkisi yoktur","B) Bilinçli tüketim daha az üretim, daha az atık, daha az kaynak tüketimi demektir","C) Bilinçli tüketim pahalı ürün almaktır","D) Yalnızca bireysel fayda sağlar"],
 correct:1,wrongFeedback:"Az tüketim → az üretim → az enerji → az kirlilik.",
 hint:"Az satın almak daha az atık mı demek?",
 simplified:{question:"Az almak daha az atık mı demek?",options:["A) Evet","B) Hayır"],correct:0,hint:"Az alım → az üretim → az atık → temiz çevre!"}},

{id:"s080",subject:"sosyal",kazanim:308,kazanimName:"Bilinçli Tüketici",difficulty:3,type:"mc",
 question:"Yanıltıcı reklamla karşılaşan bilinçli tüketici ne yapar?",
 options:["A) Reklama inanır ve alır","B) Bağımsız araştırma yapar, yorumları okur, gerekirse şikâyet eder","C) Ürünü arkadaşına önerir","D) Hiçbir şey yapmaz"],
 correct:1,wrongFeedback:"Bilinçli tüketici reklamlara körü körüne inanmaz, araştırır ve haklarını kullanır.",
 hint:"Reklamlara tam güvenilir mi?",
 simplified:{question:"Reklamda gösterilenden farklı çıkan ürün için ne yapılır?",options:["A) Normal, reklam abartır","B) Şikâyet edilir"],correct:1,hint:"Yanıltıcı reklam = şikâyet hakkı!"}},

// ══ K9-10: Çocuk Hakları ve Sorumluluk (s081-s100 önceden yazılmıştı, kalan yerden alıyoruz) ══
{id:"s081",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi bir çocuk hakkıdır?",
 options:["A) Her istediğini yapmak","B) Eğitim hakkı","C) Kurallara uymamak","D) İstediği yere gitmek"],
 correct:1,wrongFeedback:"BM Çocuk Hakları: Eğitim, sağlık, güvenlik, oyun gibi temel hakları kapsar.",
 hint:"Çocuklar hangi haklara sahip?",
 simplified:{question:"Okula gitmek bir hak mıdır?",options:["A) Hayır","B) Evet — eğitim temel çocuk hakkıdır"],correct:1,hint:"Eğitim = her çocuğun hakkı!"}},

{id:"s082",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:1,type:"mc",
 question:"Çocuk çalıştırılması hangi hakka aykırıdır?",
 options:["A) Eğlence hakkına","B) Eğitim ve korunma hakkına","C) Oyun hakkına","D) Beslenme hakkına"],
 correct:1,wrongFeedback:"Çocuk çalıştırmak eğitim hakkından mahrum bırakır ve sağlığı tehdit eder.",
 hint:"Çalışan çocuk okula gidebilir mi?",
 simplified:{question:"Çalıştırılan çocuk okula gidebilir mi?",options:["A) Evet","B) Hayır — eğitim hakkı çiğnenir"],correct:1,hint:"Çalışmak → okul yok → eğitim hakkı ihlal!"}},

{id:"s083",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:2,type:"mc",
 question:"Çocuk hakları hakkında: I.Her çocuğun eğitim hakkı var  II.Yalnızca zengin çocukların sağlık hakkı var  III.Çocuklar şiddetten korunma hakkına sahip  IV.Çocuklar oyun oynama hakkına sahip. Kaç doğru?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"I ✓, II ✗ (sağlık hakkı herkese), III ✓, IV ✓. Doğru: 3.",
 hint:"II: Sağlık hakkı yalnızca zenginlere mi?",
 simplified:{question:"Sağlık hakkı yalnızca zengin çocuklara mı ait?",options:["A) Evet","B) Hayır — her çocuğun hakkı"],correct:1,hint:"Haklar herkese eşit!"}},

{id:"s084",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:1,type:"mc",
 question:"Aşağıdakilerden hangisi çocukların hakları arasında YOKTUR?",
 options:["A) Sağlık hizmetinden yararlanma","B) Eğitim alma","C) Kurallara uymadan istediğini yapma","D) Şiddetten korunma"],
 correct:2,wrongFeedback:"Haklar sorumlulukları da getirir. Kuralsızca davranmak bir hak değildir. A, B, D gerçek haklardır.",
 hint:"Hak ile sorumluluk bir arada gelir. Kuralsız davranmak hak olabilir mi?",
 simplified:{question:"Hak ve sorumluluk birlikte mi gelir?",options:["A) Hayır, hak var ama sorumluluk yok","B) Evet, haklar sorumluluk da getirir"],correct:1,hint:"Haklar sorumlulukla birlikte gelir!"}},

{id:"s085",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:2,type:"mc",
 question:"Çocuk hakları hakkında:\nI.  Her çocuğun eğitim hakkı vardır.\nII. Yalnızca zengin çocukların sağlık hakkı vardır.\nIII. Çocuklar şiddetten korunma hakkına sahiptir.\nIV. Çocuklar oyun oynama hakkına sahiptir.\nKaç ifade doğrudur?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"I ✓, II ✗ (her çocuğun sağlık hakkı var, yalnızca zenginlerin değil), III ✓, IV ✓. Doğru: I, III, IV → 3 ifade.",
 hint:"II'yi kontrol et: Sağlık hakkı yalnızca zenginler için midir?",
 simplified:{question:"Sağlık hakkı yalnızca zengin çocukların mı hakkıdır?",options:["A) Evet","B) Hayır — her çocuğun hakkıdır"],correct:1,hint:"Çocuk hakları herkese eşit!"}},

{id:"s086",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:2,type:"mc",
 question:"Okula gitmeyen bir çocuk için devlet ne yapmalıdır?",
 options:["A) Hiçbir şey — bu aile meselesi","B) Çocuğun eğitim hakkını korumak için gerekli önlemleri almalı","C) Çocuğu cezalandırmalı","D) Yalnızca aileyi uyarmalı, başka bir şey yapmamalı"],
 correct:1,wrongFeedback:"Devletin görevi çocukların haklarını korumaktır. Eğitim hakkı devlet güvencesi altındadır.",
 hint:"Devletin çocuk haklarını koruma görevi var mı?",
 simplified:{question:"Çocuk haklarını korumak kimin görevi?",options:["A) Yalnızca ailenin","B) Hem ailenin hem devletin"],correct:1,hint:"Devlet + aile = çocuk haklarını birlikte korur!"}},

{id:"s087",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:2,type:"mc",
 question:"'Her çocuğun kimliğe hakkı vardır.' Bu hak ne anlama gelir?",
 options:["A) Çocuk istediği kimliği seçebilir","B) Çocuğun adı, soyadı ve vatandaşlığı olmalıdır","C) Kimlik kartı zorunlu değildir","D) Bu hak yalnızca yetişkinler için geçerlidir"],
 correct:1,wrongFeedback:"Kimlik hakkı: Her çocuğun bir adı, soyadı ve ülke vatandaşlığı olmalıdır. Bu temel çocuk hakkıdır.",
 hint:"Kimlik ne içerir? Ad, soyad, vatandaşlık...",
 simplified:{question:"Her çocuğun adı ve soyadı olmalı mıdır?",options:["A) Hayır, şart değil","B) Evet — kimlik hakkı!"],correct:1,hint:"Ad + soyad + vatandaşlık = kimlik hakkı!"}},

{id:"s088",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:3,type:"mc",
 question:"Ali: 'Çocuk hakları yalnızca okula giden çocuklar için geçerlidir.'\nAyşe: 'Çocuk hakları ırk, dil, din, cinsiyet farkı gözetmeksizin tüm çocuklar için geçerlidir.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Ali","B) Yalnız Ayşe","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Ayşe doğru: BM Çocuk Hakları Sözleşmesi ayrımcılığı yasaklar; tüm çocuklar eşit haklara sahiptir.",
 hint:"BM Sözleşmesi hangi çocuklar için geçerli?",
 simplified:{question:"Çocuk hakları herkese mi yoksa bazı çocuklara mı ait?",options:["A) Yalnızca bazılarına","B) Ayrım olmaksızın tüm çocuklara"],correct:1,hint:"Evrensel hak = herkese eşit!"}},

{id:"s089",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:3,type:"mc",
 question:"Bir çocuk tacize uğradığında başvurabileceği mekanizmalar:\nI.  Güvendiği bir yetişkine söylemek\nII. 182 ALO Çocuk Hattını aramak\nIII. Sessiz kalmak\nIV. Öğretmenine bildirmek\nHangisi doğru yaklaşımdır?",
 options:["A) I, II ve IV","B) Yalnız III","C) Yalnızca I","D) II ve III"],
 correct:0,wrongFeedback:"I ✓ (güvenilir yetişkine söyle), II ✓ (ALO 182 çocuk hattı), III ✗ (sessiz kalmak yanlış), IV ✓. Doğru: I, II, IV.",
 hint:"Sessiz kalmak sorunu çözer mi?",
 simplified:{question:"Kötü bir şey olduğunda sessiz kalmak doğru mu?",options:["A) Evet, kimseye söyleme","B) Hayır — güvendiğin birine söyle veya 182'yi ara"],correct:1,hint:"Sessiz kalmak yanlış → yardım iste!"}},

{id:"s090",subject:"sosyal",kazanim:309,kazanimName:"Çocuk Hakları",difficulty:3,type:"mc",
 question:"'Haklar ve sorumluluklar birlikte gelir.' Bu düşünce çocuk hakları açısından ne anlama gelir?",
 options:["A) Çocukların hiçbir sorumluluğu yoktur.","B) Hakları olan çocuklar kurallara uymak, başkalarına saygı göstermek gibi sorumluluklara da sahiptir.","C) Sorumluluklar hakları ortadan kaldırır.","D) Bu yalnızca yetişkinler için geçerlidir."],
 correct:1,wrongFeedback:"Haklar sorumlulukla denge içindedir. Çocukların eğitim hakkı varken okul kurallarına uyma sorumluluğu da vardır.",
 hint:"Okula gitme hakkın var — bir de sorumluluğun var mı?",
 simplified:{question:"Okula gitme hakkım varsa bir de sorumluluğum var mı?",options:["A) Hayır, yalnızca hak var","B) Evet — kurallara uymak, öğrenmek gibi"],correct:1,hint:"Hak + sorumluluk = dengeli!"}},

// ══ KONU 10: Sorumluluk ══
{id:"s091",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:1,type:"mc",
 question:"Sorumluluk ne demektir?",
 options:["A) Başkalarının hatalarını üstlenmek","B) Kendi söz ve eylemlerinin sonuçlarını kabullenmek","C) Her şeyden kaçmak","D) Yalnızca büyüklerin taşıdığı bir yüktür"],
 correct:1,wrongFeedback:"Sorumluluk: Kendi kararlarımızın ve davranışlarımızın sonuçlarını üstlenmek.",
 hint:"Sorumluluk kimin söz ve eylemlerini kapsar?",
 simplified:{question:"Yaptığın hatanın sorumluluğunu kim almalı?",options:["A) Başkası","B) Sen kendin"],correct:1,hint:"Kendi hatası → kendi sorumluluğu!"}},

{id:"s092",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:1,type:"mc",
 question:"Ödevini yapmayı unuttuğunda sorumluluk sahibi davranış nedir?",
 options:["A) Öğretmeni suçlamak","B) Hatayı kabul edip özür dilemek ve bir daha yapmamaya söz vermek","C) Arkadaşından kopya çekmek","D) Hasta numara yapmak"],
 correct:1,wrongFeedback:"Sorumluluk: Hatayı kabul et + özür dile + düzelt. Suçlama, kopya veya numara sorumsuz davranışlardır.",
 hint:"Sorumluluk sahibi kişi hatasını ne yapar?",
 simplified:{question:"Hata yapınca ne yapmalıyız?",options:["A) Başkasını suçla","B) Kabul et, özür dile, düzelt"],correct:1,hint:"Kabul + özür + düzeltme = sorumluluk!"}},

{id:"s093",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:1,type:"mc",
 question:"Arkadaşına 'Sana yardım edeceğim' dedin ama gitmedin. Bu durumda sorumluluk sahibi olmak için ne yapmalısın?",
 options:["A) Arkadaşının zaten ihtiyacı yoktu demek","B) Özür dileyip mümkünse yardımını tamamlamak","C) Konuyu unutmuş gibi davranmak","D) Başka bahaneler üretmek"],
 correct:1,wrongFeedback:"Söz verip tutmamak güveni zedeler. Sorumluluk: Özür + tamamlama.",
 hint:"Verilen söz tutulmazsa ne yapılmalı?",
 simplified:{question:"Verdiğin sözü tutamazsan ne yaparsın?",options:["A) Sanki söz vermedim gibi davranırım","B) Özür diler, telafi ederim"],correct:1,hint:"Söz ver → tut ya da özür dile!"}},

{id:"s094",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:1,type:"mc",
 question:"Aile ve okul yaşamında sorumluluk örnekleri nelerdir?",
 options:["A) Ödev yapmak ve ev işlerine yardımcı olmak","B) Her istediğini yapmak","C) Kuralları çiğnemek","D) Sorumluluklardan kaçmak"],
 correct:0,wrongFeedback:"Ödev yapmak okul sorumluluğu, ev işlerine yardım aile sorumluluğudur.",
 hint:"Okul ve evde ne gibi sorumluluklarımız var?",
 simplified:{question:"Ödev yapmak bir sorumluluk mudur?",options:["A) Hayır","B) Evet — okul sorumluluğu"],correct:1,hint:"Ödev = okul görevi = sorumluluk!"}},

{id:"s095",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:2,type:"mc",
 question:"Sorumluluk sahibi davranışlar:\nI.  Hata yapınca kabul etmek\nII. Söz verince tutmak\nIII. Başkasını suçlamak\nIV. Görevleri zamanında yerine getirmek\nKaç tanesi sorumluluk sahibi davranışını gösterir?",
 options:["A) 2","B) 3","C) 4","D) 1"],
 correct:1,wrongFeedback:"I ✓, II ✓, III ✗ (suçlamak sorumsuzluk), IV ✓. Toplam 3.",
 hint:"III'ü kontrol et: Başkasını suçlamak sorumluluk mudur?",
 simplified:{question:"Başkasını suçlamak sorumluluk mudur?",options:["A) Evet","B) Hayır — sorumsuzluktur"],correct:1,hint:"Suçlamak = sorumluluğu kaçırmak!"}},

{id:"s096",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:2,type:"mc",
 question:"Çağlar oyun oynarken arkadaşının camını kırdı. Sorumluluk sahibi davranış nedir?",
 options:["A) Kaçıp kimseye söylememek","B) Başka birini suçlamak","C) Durumu ailesine ve arkadaşına söyleyip camın bedelini karşılamaya çalışmak","D) 'Ben yapmadım' demek"],
 correct:2,wrongFeedback:"Sorumluluk: Kabul et + bildir + telafi et. Kaçmak veya suçlamak sorumsuz davranıştır.",
 hint:"Kırdıysan sorumluluk sahibi ne yapmalısın?",
 simplified:{question:"Hata yapınca kaçmak mı söylemek mi doğru?",options:["A) Kaçmak","B) Kabul edip söylemek"],correct:1,hint:"Cesaretle kabul = sorumluluk!"}},

{id:"s097",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:2,type:"mc",
 question:"Berk: 'Sorumluluk yalnızca büyüklere aittir.'\nSelin: 'Her yaştan insan kendi söz ve eylemlerinden sorumludur.'\nKimin görüşü doğrudur?",
 options:["A) Yalnız Berk","B) Yalnız Selin","C) Her ikisi","D) Hiçbiri"],
 correct:1,wrongFeedback:"Selin doğru: Çocuklar da kendi eylemlerinden sorumludur; yaşa uygun sorumluluklar vardır.",
 hint:"Çocukların da sorumluluğu var mı?",
 simplified:{question:"Çocukların hiç sorumluluğu yok mudur?",options:["A) Yok — yalnızca büyükler sorumlu","B) Var — yaşa uygun sorumlulukları vardır"],correct:1,hint:"Ödev, kurallara uyma = çocuğun sorumluluğu!"}},

{id:"s098",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:3,type:"mc",
 question:"'Sosyal medyada paylaşım yapmak da sorumluluk gerektirir.' Bu düşünce neden doğrudur?",
 options:["A) Sosyal medya gerçek değildir, sorumluluk gerekmez.","B) Dijital ortamda paylaşılan bilgi başkalarını etkileyebilir; yanlış bilgi yayma da sorumluluğu gerektirir.","C) Sosyal medyada söylenenlerin sonucu olmaz.","D) Bu yalnızca yetişkinler için geçerlidir."],
 correct:1,wrongFeedback:"Dijital söz ve eylemler de gerçek sonuçlar doğurur. Yanlış bilgi, hakaret gibi paylaşımlar sorumluluk gerektirir.",
 hint:"İnternette yazdıklarının etkisi olur mu?",
 simplified:{question:"İnternette yalan haber paylaşmak sorumluluk gerektirir mi?",options:["A) Hayır, internet gerçek değil","B) Evet, yalan haber insanlara zarar verebilir"],correct:1,hint:"Dijital de gerçek → sorumluluk şart!"}},

{id:"s099",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:3,type:"mc",
 question:"Bir öğrenci sınıfta yanlış bilgi paylaştı ve arkadaşları yanıldı. Sorumluluk sahibi davranış nedir?",
 options:["A) Sessiz kalmak ve kimseye söylememek","B) Yanlış bilgiyi düzeltmek ve özür dilemek","C) Arkadaşlarını suçlamak","D) Başka bir yanlış bilgi paylaşmak"],
 correct:1,wrongFeedback:"Yanlış bilgi yaymak da sorumluluk gerektirir. Düzeltmek + özür dilemek sorumluluk sahibi yaklaşımdır.",
 hint:"Yanlış bilgi vermişsen ne yapmalısın?",
 simplified:{question:"Yanlış bir şey söylemişsen ne yaparsın?",options:["A) Sessiz kalırım","B) Düzeltirim ve özür dilerim"],correct:1,hint:"Yanlış → düzelt + özür = sorumluluk!"}},

{id:"s100",subject:"sosyal",kazanim:310,kazanimName:"Söz ve Eylemlerin Sorumluluğu",difficulty:3,type:"mc",
 question:"Sorumluluk ve güven ilişkisi için hangisi doğrudur?",
 options:["A) Sorumluluk ile güven arasında ilişki yoktur.","B) Sorumluluk sahibi insanlar güvenilir olarak algılanır; güven toplumun temel taşıdır.","C) Güven kazanmak için sorumluluktan kaçınmak gerekir.","D) Sorumluluk yalnızca bireysel fayda sağlar."],
 correct:1,wrongFeedback:"Sorumluluk → güven → sağlıklı toplum. Güvenilir insan sözünü tutar, hatalarını kabul eder.",
 hint:"Sözünü tutan birine güvenilir mi denir?",
 simplified:{question:"Sözünü tutan biri güvenilir midir?",options:["A) Hayır","B) Evet — sorumluluk güven oluşturur"],correct:1,hint:"Söz + tutmak = güven = sorumluluk!"}},
];

const QB = [...QBT, ...QBM, ...QBX, ...QBF, ...QBS];


// ─── META ─────────────────────────────────────────────────
const KAZ_T={1:"Gerçek/Mecaz/Terim Anlam",2:"Okuma Anlama",3:"Noktalama",4:"Dinleme",5:"Kahraman",6:"Metnin Konusu",7:"Ana Fikir",8:"Deyim-Atasözü",9:"Hikâye Unsurları",10:"Gerçek/Hayali",11:"Sayı Yazımı",12:"Bağlamdan Anlam"};
const KAZ_M={101:"Sayılar ve Basamak",102:"Dört İşlem / Problem",103:"Kesirler",104:"Geometri",105:"Zaman ve Ölçme",106:"Grafik ve Tablo",107:"Örüntü",108:"Tahmini Hesaplama",109:"Hata Bulma",110:"Değerlendirme"};
const KAZ_INFO={...KAZ_T,...KAZ_M};
const DIFF_LABEL={1:"⭐ Kolay",2:"⭐⭐ Orta",3:"⭐⭐⭐ Zor"};
const DIFF_COLOR={1:"#16a34a",2:"#d97706",3:"#dc2626"};
const SUBJ_COLOR={turkce:"#b91c1c",matematik:"#1d4ed8",fen:"#16a34a",sosyal:"#d97706"};
const SUBJ_LABEL={turkce:"📖 Türkçe",matematik:"🔢 Matematik",fen:"🔬 Fen Bilimleri",sosyal:"🌍 Sosyal Bilgiler"};

function pickQ(levels,usedIds,mode){
  const pool=QB.filter(q=>{
    if(usedIds.has(q.id))return false;
    if(mode!=="karisik"&&q.subject!==mode)return false;
    return q.difficulty===Math.min(3,levels[q.kazanim]||1);
  });
  if(!pool.length){
    const any=QB.filter(q=>!usedIds.has(q.id)&&(mode==="karisik"||q.subject===mode));
    return any.length?any[Math.floor(Math.random()*any.length)]:null;
  }
  return pool[Math.floor(Math.random()*pool.length)];
}

// ─── MATCHING COMPONENT ──────────────────────────────────────
function MatchingQ({pairs,onComplete}){
  const[sel,setSel]=useState(null);
  const[matched,setMatched]=useState([]);
  const[shake,setShake]=useState(false);
  const[shuffled]=useState(()=>[...pairs.map(p=>p.right)].sort(()=>Math.random()-.5));
  function handleLeft(i){if(!matched.find(m=>m.li===i))setSel(i);}
  function handleRight(r){
    if(sel===null||matched.find(m=>m.r===r))return;
    if(pairs[sel].right===r){
      const nm=[...matched,{li:sel,r}];setMatched(nm);setSel(null);
      if(nm.length===pairs.length)setTimeout(()=>onComplete(true),300);
    }else{setShake(true);setTimeout(()=>{setShake(false);setSel(null);},600);}
  }
  return(
    <div style={{display:"flex",gap:8,marginTop:10}}>
      <div style={{flex:1}}>
        <div style={{fontSize:10,color:"#6b7280",fontWeight:"bold",marginBottom:5}}>TANIM</div>
        {pairs.map((p,i)=>{const m=matched.find(x=>x.li===i);return(
          <button key={i} onClick={()=>handleLeft(i)} style={{display:"block",width:"100%",textAlign:"left",padding:"9px 10px",marginBottom:6,borderRadius:9,border:`2px solid ${m?"#16a34a":sel===i?"#7c3aed":"#c4b5fd"}`,background:m?"#f0fdf4":sel===i?"#ede9fe":"#f5f3ff",cursor:m?"default":"pointer",fontSize:12,fontFamily:"inherit",opacity:m?.7:1}}>
            {m&&"✓ "}{p.left}
          </button>);})}
      </div>
      <div style={{flex:1}}>
        <div style={{fontSize:10,color:"#6b7280",fontWeight:"bold",marginBottom:5}}>KAVRAM</div>
        {shuffled.map((r,i)=>{const m=matched.find(x=>x.r===r);return(
          <button key={i} onClick={()=>handleRight(r)} style={{display:"block",width:"100%",textAlign:"left",padding:"9px 10px",marginBottom:6,borderRadius:9,border:`2px solid ${m?"#16a34a":shake&&sel!==null?"#ef4444":"#d1fae5"}`,background:m?"#f0fdf4":"#f8fafc",cursor:m?"default":"pointer",fontSize:12,fontFamily:"inherit"}}>
            {m&&"✓ "}{r}
          </button>);})}
      </div>
    </div>
  );
}

// ─── PUNCT COUNT COMPONENT ────────────────────────────────────
function PunctCountQ({q,onAnswer,selected}){
  const correct=[q.sentences[0].correct,q.sentences[1].correct,q.sentences[2].correct,q.sentences[3].correct];
  return(
    <div>
      <div style={{marginBottom:10}}>
        {q.sentences.map((s,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",marginBottom:5,background:"#f8fafc",borderRadius:8,border:"1px solid #e2e8f0"}}>
            <span style={{flex:1,fontSize:13}}>{s.text}</span>
            <span style={{fontWeight:"bold",fontSize:16,color:selected!==null?"#16a34a":"#94a3b8",minWidth:16}}>{selected!==null?s.correct:"( )"}</span>
          </div>))}
      </div>
      <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
        {q.students.map((st,i)=>{const score=st.marks.filter((m,j)=>m===correct[j]).length;return(
          <div key={i} style={{background:"#fef9c3",borderRadius:8,padding:"8px 10px",border:"1px solid #fde68a",textAlign:"center",flex:1,minWidth:70}}>
            <div style={{fontSize:18}}>{st.icon}</div>
            <div style={{fontSize:11,fontWeight:"bold"}}>{st.name}</div>
            <div style={{fontSize:11,color:"#6b7280"}}>{st.marks.join(" ")}</div>
            {selected!==null&&<div style={{fontSize:13,color:"#dc2626"}}>{"★".repeat(score)}</div>}
          </div>);})}
      </div>
      {q.options.map((opt,i)=>{const isC=selected!==null&&i===q.correct,isW=selected!==null&&i===selected&&i!==q.correct;return(
        <button key={i} onClick={()=>selected===null&&onAnswer(i)} style={{display:"block",width:"100%",textAlign:"left",padding:"11px 13px",marginBottom:7,borderRadius:10,border:`2px solid ${isC?"#16a34a":isW?"#ef4444":"#e2e8f0"}`,background:isC?"#f0fdf4":isW?"#fef2f2":"#f8fafc",cursor:selected?"default":"pointer",fontSize:14,fontFamily:"inherit"}}>
          {isC&&<span style={{color:"#16a34a"}}>✓ </span>}{isW&&<span style={{color:"#ef4444"}}>✗ </span>}{opt}
        </button>);})}
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────
const S={
  app:{minHeight:"100vh",background:"linear-gradient(180deg,#fff7ed 0%,#fef9f0 100%)",fontFamily:"Georgia,serif"},
  hdr:(c)=>({background:`linear-gradient(135deg,${c} 0%,#1a1a2e 100%)`,padding:"14px 16px",textAlign:"center"}),
  hdrT:{color:"#fff",fontSize:18,fontWeight:"bold",margin:0},
  hdrS:{color:"rgba(255,255,255,.8)",fontSize:12,margin:"3px 0 0"},
  wrap:{maxWidth:480,margin:"0 auto",padding:"0 14px 40px"},
  card:{background:"#fff",borderRadius:16,boxShadow:"0 4px 18px rgba(0,0,0,.1)",padding:"18px 16px",marginTop:14},
  subjBtn:(c,active)=>({background:active?c:"#f8fafc",color:active?"#fff":c,border:`3px solid ${c}`,borderRadius:14,padding:"18px 14px",cursor:"pointer",fontFamily:"inherit",fontWeight:"bold",fontSize:15,flex:1,transition:"all .2s",boxShadow:active?"0 4px 14px rgba(0,0,0,.2)":"none"}),
  tag:(c)=>({display:"inline-block",background:c+"22",color:c,borderRadius:20,padding:"3px 10px",fontSize:10,fontWeight:"bold",marginBottom:7,border:`1px solid ${c}44`}),
  diff:(d)=>({display:"inline-block",background:DIFF_COLOR[d],color:"#fff",borderRadius:20,padding:"3px 10px",fontSize:10,fontWeight:"bold",marginLeft:6}),
  pasaj:{background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"11px 13px",fontSize:13,lineHeight:1.7,color:"#1e40af",marginBottom:13,whiteSpace:"pre-line",fontStyle:"italic"},
  q:{fontSize:14.5,fontWeight:"bold",color:"#1e293b",marginBottom:13,lineHeight:1.55,whiteSpace:"pre-line"},
  opt:(c,w)=>({display:"block",width:"100%",textAlign:"left",padding:"11px 13px",marginBottom:7,borderRadius:10,border:`2px solid ${c?"#16a34a":w?"#ef4444":"#e2e8f0"}`,background:c?"#f0fdf4":w?"#fef2f2":"#f8fafc",cursor:c||w?"default":"pointer",fontSize:13.5,fontFamily:"inherit",transition:"all .15s"}),
  btn:(bg)=>({background:bg,color:"#fff",border:"none",borderRadius:10,padding:"11px 22px",fontSize:14,fontWeight:"bold",cursor:"pointer",width:"100%",marginTop:10,fontFamily:"inherit"}),
  pbar:{height:7,background:"#fde68a",borderRadius:4,overflow:"hidden",marginTop:7},
  pbarFill:(p,c)=>({height:"100%",width:`${p}%`,background:c||"#16a34a",borderRadius:4,transition:"width .4s"}),
  wrongBox:{background:"#fef2f2",border:"2px solid #fca5a5",borderRadius:12,padding:"13px 14px",marginTop:11},
  feedBox:{background:"#eff6ff",border:"2px solid #93c5fd",borderRadius:10,padding:"11px 13px",marginTop:9},
  hintBox:{background:"#fefce8",border:"2px solid #fcd34d",borderRadius:10,padding:"11px 13px",marginTop:9},
  simpBox:{background:"#f5f3ff",border:"2px solid #c4b5fd",borderRadius:12,padding:"13px 14px",marginTop:11},
};

// ─── MAIN APP ────────────────────────────────────────────────
export default function App(){
  const[screen,setScreen]=useState("intro");
  const[mode,setMode]=useState(null);
  const[q,setQ]=useState(null);
  const[sel,setSel]=useState(null);
  const[simplified,setSimplified]=useState(false);
  const[levels,setLevels]=useState(()=>{const l={};for(let i=1;i<=12;i++)l[i]=1;for(let i=101;i<=110;i++)l[i]=1;return l;});
  const[used,setUsed]=useState(new Set());
  const[stats,setStats]=useState({c:0,t:0});
  const[streak,setStreak]=useState(0);

  const pct=stats.t?Math.round(stats.c/stats.t*100):0;
  const hdrColor=q?SUBJ_COLOR[q.subject]||"#b91c1c":"#b91c1c";
  const pbarColor=q?SUBJ_COLOR[q.subject]||"#16a34a":"#16a34a";

  function startMode(m){setMode(m);loadNext(m);}
  function loadNext(m){
    const curMode=m||mode;
    const nq=pickQ(levels,used,curMode);
    if(!nq){setScreen("done");return;}
    setQ(nq);setSel(null);setSimplified(false);setScreen("question");
  }
  function handle(idx){
    if(sel!==null)return;
    setSel(idx);
    const correct=simplified?q.simplified.correct:q.correct;
    const ok=idx===correct;
    setUsed(p=>new Set([...p,q.id]));
    setStats(s=>({c:s.c+(ok?1:0),t:s.t+1}));
    if(ok){setStreak(s=>s+1);if(!simplified)setLevels(p=>({...p,[q.kazanim]:Math.min(3,(p[q.kazanim]||1)+1)}));setTimeout(()=>setScreen("correct"),450);}
    else{setStreak(0);setTimeout(()=>setScreen("wrong"),450);}
  }
  function handleMatch(ok){
    setUsed(p=>new Set([...p,q.id]));
    setStats(s=>({c:s.c+(ok?1:0),t:s.t+1}));
    if(ok){setStreak(s=>s+1);setLevels(p=>({...p,[q.kazanim]:Math.min(3,(p[q.kazanim]||1)+1)}));setTimeout(()=>setScreen("correct"),350);}
    else{setStreak(0);setTimeout(()=>setScreen("wrong"),350);}
  }
  function resetAll(m){
    setUsed(new Set());
    setLevels(()=>{const l={};for(let i=1;i<=12;i++)l[i]=1;for(let i=101;i<=110;i++)l[i]=1;return l;});
    setStats({c:0,t:0});setStreak(0);setMode(m);loadNext(m);
  }

  const aq=simplified&&q?{...q,type:"mc",question:q.simplified.question,options:q.simplified.options,correct:q.simplified.correct,pasaj:null}:q;

  // ── INTRO ──────────────────────────────────────────────────
  if(screen==="intro") return(
    <div style={S.app}>
      <div style={S.hdr("#b91c1c")}><p style={S.hdrT}>🎓 Ahmed Hilmi'nin Soru Bankası</p><p style={S.hdrS}>Akıllı Adaptif Sistem · {QB.length} Soru</p></div>
      <div style={S.wrap}>
        <div style={S.card}>
          <div style={{textAlign:"center",padding:"8px 0 14px"}}>
            <div style={{fontSize:48}}>🌟</div>
            <h2 style={{margin:"6px 0 4px",color:"#1e293b",fontSize:19}}>Merhaba, {STUDENT}!</h2>
            <p style={{color:"#64748b",fontSize:13,lineHeight:1.6,margin:"4px 0 16px"}}>
              Doğru yaparsan sorular zorlaşır 📈<br/>
              Yanlış yaparsan konu anlatılır ve soru basite bölünür 🧩
            </p>
          </div>
          <p style={{fontWeight:"bold",fontSize:13,color:"#374151",marginBottom:10,textAlign:"center"}}>Hangi dersten başlamak istersin?</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
            <button style={{...S.subjBtn("#b91c1c",false),flex:"1 1 45%"}} onClick={()=>startMode("turkce")}>
              📖<br/><span style={{fontSize:15}}>Türkçe</span><br/><span style={{fontSize:10,opacity:.8}}>{QB.filter(q=>q.subject==="turkce").length} soru</span>
            </button>
            <button style={{...S.subjBtn("#1d4ed8",false),flex:"1 1 45%"}} onClick={()=>startMode("matematik")}>
              🔢<br/><span style={{fontSize:15}}>Matematik</span><br/><span style={{fontSize:10,opacity:.8}}>{QB.filter(q=>q.subject==="matematik").length} soru</span>
            </button>
            <button style={{...S.subjBtn("#16a34a",false),flex:"1 1 45%"}} onClick={()=>startMode("fen")}>
              🔬<br/><span style={{fontSize:15}}>Fen Bilimleri</span><br/><span style={{fontSize:10,opacity:.8}}>{QB.filter(q=>q.subject==="fen").length} soru</span>
            </button>
            <button style={{...S.subjBtn("#d97706",false),flex:"1 1 45%"}} onClick={()=>startMode("sosyal")}>
              🌍<br/><span style={{fontSize:15}}>Sosyal Bilgiler</span><br/><span style={{fontSize:10,opacity:.8}}>{QB.filter(q=>q.subject==="sosyal").length} soru</span>
            </button>
          </div>
          <button style={{...S.subjBtn("#7c3aed",false),width:"100%"}} onClick={()=>startMode("karisik")}>
            🎲 Karışık — Tüm dersler ({QB.length} soru)
          </button>
        </div>
      </div>
    </div>
  );

  if(screen==="done") return(
    <div style={S.app}>
      <div style={S.hdr("#1a1a2e")}><p style={S.hdrT}>🎓 Ahmed Hilmi</p></div>
      <div style={S.wrap}>
        <div style={S.card}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:54}}>🏆</div>
            <h2 style={{color:"#1e293b"}}>Tebrikler!</h2>
            <div style={{fontSize:22,fontWeight:"bold",color:"#b91c1c",margin:"8px 0"}}>{stats.c}/{stats.t} · %{pct}</div>
          </div>
          <div style={S.pbar}><div style={S.pbarFill(pct,"#7c3aed")}/></div>
          <div style={{display:"flex",gap:8,marginTop:14}}>
            <button style={{...S.btn("#b91c1c"),marginTop:0,flex:1}} onClick={()=>resetAll("turkce")}>📖 Türkçe</button>
            <button style={{...S.btn("#1d4ed8"),marginTop:0,flex:1}} onClick={()=>resetAll("matematik")}>🔢 Matematik</button>
            <button style={{...S.btn("#7c3aed"),marginTop:0,flex:1}} onClick={()=>resetAll("karisik")}>🎲 Karışık</button>
          </div>
        </div>
      </div>
    </div>
  );

  if(screen==="correct") return(
    <div style={S.app}>
      <div style={S.hdr(hdrColor)}><p style={S.hdrT}>{SUBJ_LABEL[q?.subject]}</p><p style={S.hdrS}>✓ {stats.c}/{stats.t} · %{pct}{streak>=2&&` · 🔥${streak}`}</p></div>
      <div style={S.wrap}>
        <div style={S.card}>
          <div style={{textAlign:"center",padding:"10px 0"}}>
            <div style={{fontSize:50}}>{streak>=3?"🔥":streak>=2?"⭐":"✅"}</div>
            <h3 style={{color:"#16a34a",margin:"6px 0 4px"}}>{streak>=3?`${streak} üst üste! Harika!`:streak>=2?"Süper!":"Doğru! Bravo!"}</h3>
            {!simplified&&<p style={{fontSize:12,color:"#6b7280",margin:"4px 0 0"}}>📈 {KAZ_INFO[q?.kazanim]} · {DIFF_LABEL[Math.min(3,(levels[q?.kazanim]||1))]} seviyeye geçildi</p>}
          </div>
          <div style={S.pbar}><div style={S.pbarFill(pct,pbarColor)}/></div>
          <button style={S.btn(hdrColor)} onClick={()=>loadNext()}>➡️ Sonraki Soru</button>
        </div>
      </div>
    </div>
  );

  if(screen==="wrong") return(
    <div style={S.app}>
      <div style={S.hdr(hdrColor)}><p style={S.hdrT}>{SUBJ_LABEL[q?.subject]}</p><p style={S.hdrS}>✓ {stats.c}/{stats.t} · %{pct}</p></div>
      <div style={S.wrap}>
        <div style={S.card}>
          <div style={{fontSize:36,textAlign:"center"}}>🤔</div>
          <div style={S.wrongBox}><b style={{color:"#dc2626",fontSize:13}}>❌ Bu sefer olmadı — birlikte bakalım!</b></div>
          <div style={S.feedBox}>
            <b style={{fontSize:12,color:"#1d4ed8"}}>📌 {q?.subject==="matematik"?"Konu":"Kazanım"}: {KAZ_INFO[q?.kazanim]}</b>
            <p style={{margin:"5px 0 0",fontSize:13,color:"#1e40af",lineHeight:1.6}}>{q?.wrongFeedback}</p>
          </div>
          <div style={S.hintBox}><p style={{margin:0,fontSize:13,color:"#854d0e"}}>💡 <b>İpucu:</b> {q?.hint}</p></div>
          {q?.simplified&&(
            <div style={S.simpBox}>
              <b style={{fontSize:12,color:"#6d28d9"}}>🧩 Soruyu adım adım çözelim!</b>
              <p style={{margin:"4px 0 0",fontSize:12,color:"#7c3aed",lineHeight:1.5}}>Önce daha basit bir soruya bakalım.</p>
            </div>
          )}
          <div style={S.pbar}><div style={S.pbarFill(pct,pbarColor)}/></div>
          <div style={{display:"flex",gap:8,marginTop:10}}>
            {q?.simplified&&<button style={{...S.btn("#7c3aed"),marginTop:0,flex:1}} onClick={()=>{setSimplified(true);setSel(null);setScreen("question");}}>🧩 Basite Böl</button>}
            <button style={{...S.btn("#64748b"),marginTop:0,flex:1}} onClick={()=>loadNext()}>⏭ Atla</button>
          </div>
        </div>
      </div>
    </div>
  );

  if(screen==="question"&&aq) return(
    <div style={S.app}>
      <div style={S.hdr(hdrColor)}><p style={S.hdrT}>{SUBJ_LABEL[aq.subject]}</p><p style={S.hdrS}>{STUDENT} · ✓{stats.c}/{stats.t}{streak>=2&&` · 🔥${streak}`}</p></div>
      <div style={S.wrap}>
        {simplified&&<div style={{background:"#f5f3ff",border:"2px solid #c4b5fd",borderRadius:10,padding:"10px 13px",marginTop:12,fontSize:13,color:"#6d28d9"}}>🧩 <b>Adım adım çözelim!</b></div>}
        <div style={{background:"#fff",borderRadius:13,boxShadow:"0 2px 10px rgba(0,0,0,.08)",padding:"13px 14px",marginTop:12,border:`2px solid ${hdrColor}33`}}>
          <span style={S.tag(hdrColor)}>{KAZ_INFO[q.kazanim]}</span>
          <span style={S.diff(simplified?1:q.difficulty)}>{simplified?"⬇ Basit":DIFF_LABEL[q.difficulty]}</span>
          <div style={S.pbar}><div style={S.pbarFill(pct,pbarColor)}/></div>
        </div>
        <div style={S.card}>
          {aq.pasaj&&<div style={S.pasaj}>{aq.pasaj}</div>}
          <p style={S.q}>{aq.question}</p>
          {aq.type==="matching"?<MatchingQ pairs={aq.pairs} onComplete={handleMatch}/>:
           aq.type==="punctuation_count"?<PunctCountQ q={aq} onAnswer={handle} selected={sel}/>:
           aq.options.map((opt,i)=>{const c=sel!==null&&i===aq.correct,w=sel!==null&&i===sel&&i!==aq.correct;return(
             <button key={i} onClick={()=>handle(i)} style={S.opt(c,w)}>
               {c&&<span style={{color:"#16a34a"}}>✓ </span>}{w&&<span style={{color:"#ef4444"}}>✗ </span>}{opt}
             </button>);})}
          {simplified&&sel===null&&aq.type!=="matching"&&(
            <div style={S.hintBox}><p style={{margin:0,fontSize:12,color:"#854d0e"}}>💡 {q.simplified.hint}</p></div>
          )}
        </div>
      </div>
    </div>
  );
  return null;
}
