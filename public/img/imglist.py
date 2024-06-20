# imglist.py

import os

def get_image_paths():
    # Získání absolutní cesty ke složce s obrázky
    folder_path = '/Users/jangajdos/Local Sites/studioyung.astro/yung/public/img'
    # Načtení seznamu souborů ve složce
    file_list = os.listdir(folder_path)
    # Filtrování na obrázky (jpg, jpeg, png)
    image_files = [file for file in file_list if file.lower().endswith(('.jpg', '.jpeg', '.png'))]
    # Vytvoření seznamu absolutních cest k obrázkům
    image_paths = [os.path.join(folder_path, filename) for filename in image_files]
    
    return image_paths

if __name__ == "__main__":
    image_paths = get_image_paths()
    # Tisk seznamu cest k obrázkům (pro kontrolu)
    print(image_paths)
