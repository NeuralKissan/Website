from PIL import Image as PilImage
import cv2
import os

os.chdir('Meida')
os.chdir('Images')
os.chdir('Seq')
os.chdir('OG')

Images=os.listdir()

for Image in Images:
    print(Image)
    I=cv2.resize(cv2.imread(Image,cv2.IMREAD_UNCHANGED),(600*(2),520*(2)))
    cv2.imwrite(f'Resized_{Image}',I)
   
