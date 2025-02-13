# Flight Radar
Bodrum:

- bl_lat: 37.036472
- bl_lon: 27.425467

Ardahan:

- bl_lat: 41.11295
- bl_lon: 42.70228

Flight Radar, uçuşları takip etmek için geliştirilmiş bir projedir. Bu proje, uçuş verilerini görüntülemek ve analiz etmek için kullanılabilir.

## Kurulum

Projeyi bilgisayarınıza klonlamak için aşağıdaki komutu çalıştırın:

```sh
git clone https://github.com/hivdabzn/Flight-Radar.git
```

Ardından proje dizinine gidin:

```sh
cd Flight-Radar
```

Uzak depoyu doğru şekilde yapılandırmak için aşağıdaki adımları izleyin:

1. Mevcut uzak depoları kontrol edin:
   ```sh
   git remote -v
   ```
2. Eğer `origin` uzak deposu zaten varsa ve değiştirmek istiyorsanız:
   ```sh
   git remote set-url origin https://github.com/hivdabzn/Flight-Radar.git
   ```
3. Eğer `origin` uzak deposunu kaldırıp yeniden eklemek isterseniz:
   ```sh
   git remote remove origin
   git remote add origin https://github.com/hivdabzn/Flight-Radar.git
   ```

## Kullanım

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

```sh
# Gerekli bağımlılıkları yükleyin
yarn install  # veya npm install

# Uygulamayı başlatın
yarn start  # veya npm start
```

## Katkıda Bulunma

Eğer projeye katkıda bulunmak istiyorsanız:

1. Depoyu forklayın.
2. Yeni bir dal (branch) oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi yapın ve commit edin: `git commit -m 'Yeni özellik eklendi'`
4. Değişiklikleri uzak depoya gönderin: `git push origin yeni-ozellik`
5. Bir **Pull Request (PR)** açarak değişikliklerinizi önerin.

##





