# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/userAccount.spec.ts >> User authentication >> Login User with correct email and password
- Location: tests/regression/userAccount.spec.ts:68:7

# Error details

```
SyntaxError: Unexpected token '<', "<html><hea"... is not valid JSON
```

# Page snapshot

```yaml
- generic [active] [ref=f11e1]:
  - banner [ref=f11e2]:
    - generic [ref=f11e5]:
      - link [ref=f11e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f11e9]
      - list [ref=f11e12]:
        - listitem [ref=f11e13]:
          - link " Home" [ref=f11e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f11e15]: 
            - text: Home
        - listitem [ref=f11e16]:
          - link " Products" [ref=f11e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f11e18]: 
            - text: Products
        - listitem [ref=f11e19]:
          - link " Cart" [ref=f11e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f11e21]: 
            - text: Cart
        - listitem [ref=f11e22]:
          - link " Logout" [ref=f11e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f11e24]: 
            - text: Logout
        - listitem [ref=f11e25]:
          - link " Delete Account" [ref=f11e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f11e27]: 
            - text: Delete Account
        - listitem [ref=f11e28]:
          - link " Test Cases" [ref=f11e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f11e30]: 
            - text: Test Cases
        - listitem [ref=f11e31]:
          - link " API Testing" [ref=f11e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f11e33]: 
            - text: API Testing
        - listitem [ref=f11e34]:
          - link " Video Tutorials" [ref=f11e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f11e36]: 
            - text: Video Tutorials
        - listitem [ref=f11e37]:
          - link " Contact us" [ref=f11e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f11e39]: 
            - text: Contact us
        - listitem [ref=f11e40]:
          - generic [ref=f11e41]:
            - generic [ref=f11e42]: 
            - text: Logged in as Cathy_Abshire1-3d14389c
  - generic [ref=f11e47]:
    - list [ref=f11e48]:
      - listitem [ref=f11e49] [cursor=pointer]
      - listitem [ref=f11e50] [cursor=pointer]
      - listitem [ref=f11e51] [cursor=pointer]
    - generic [ref=f11e52]:
      - generic:
        - generic [ref=f11e53]:
          - heading "AutomationExercise" [level=1] [ref=f11e54]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=f11e55]
          - paragraph [ref=f11e56]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=f11e57] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=f11e58]
          - link [ref=f11e59] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=f11e60]
        - img "demo website for practice" [ref=f11e62]
    - link "" [ref=f11e63] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=f11e65] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=f11e69]:
    - generic [ref=f11e71]:
      - heading "Category" [level=2] [ref=f11e72]
      - generic [ref=f11e73]:
        - heading [level=4] [ref=f11e76]:
          - link " Women" [ref=f11e77] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f11e78]: 
            - text: Women
        - heading [level=4] [ref=f11e82]:
          - link " Men" [ref=f11e83] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f11e84]: 
            - text: Men
        - heading [level=4] [ref=f11e88]:
          - link " Kids" [ref=f11e89] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f11e90]: 
            - text: Kids
      - generic [ref=f11e92]:
        - heading "Brands" [level=2] [ref=f11e93]
        - list [ref=f11e95]:
          - listitem [ref=f11e96]:
            - link "(6) Polo" [ref=f11e97] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f11e98]: (6)
              - text: Polo
          - listitem [ref=f11e99]:
            - link "(5) H&M" [ref=f11e100] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f11e101]: (5)
              - text: H&M
          - listitem [ref=f11e102]:
            - link "(5) Madame" [ref=f11e103] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f11e104]: (5)
              - text: Madame
          - listitem [ref=f11e105]:
            - link "(3) Mast & Harbour" [ref=f11e106] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f11e107]: (3)
              - text: Mast & Harbour
          - listitem [ref=f11e108]:
            - link "(4) Babyhug" [ref=f11e109] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f11e110]: (4)
              - text: Babyhug
          - listitem [ref=f11e111]:
            - link "(3) Allen Solly Junior" [ref=f11e112] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f11e113]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f11e114]:
            - link "(3) Kookie Kids" [ref=f11e115] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f11e116]: (3)
              - text: Kookie Kids
          - listitem [ref=f11e117]:
            - link "(5) Biba" [ref=f11e118] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f11e119]: (5)
              - text: Biba
    - generic [ref=f11e120]:
      - generic [ref=f11e121]:
        - heading "Features Items" [level=2] [ref=f11e122]
        - generic [ref=f11e124]:
          - generic [ref=f11e125]:
            - generic [ref=f11e126]:
              - img "ecommerce website products" [ref=f11e127]
              - heading "Rs. 500" [level=2] [ref=f11e128]
              - paragraph [ref=f11e129]: Blue Top
              - generic [ref=f11e130] [cursor=pointer]:
                - generic [ref=f11e131]: 
                - text: Add to cart
            - generic [ref=f11e132]:
              - heading "Rs. 500" [level=2] [ref=f11e133]
              - paragraph [ref=f11e134]: Blue Top
              - generic [ref=f11e135] [cursor=pointer]:
                - generic [ref=f11e136]: 
                - text: Add to cart
          - list [ref=f11e138]:
            - listitem [ref=f11e139]:
              - link " View Product" [ref=f11e140] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=f11e141]: 
                - text: View Product
        - generic [ref=f11e143]:
          - generic [ref=f11e144]:
            - generic [ref=f11e145]:
              - img "ecommerce website products" [ref=f11e146]
              - heading "Rs. 400" [level=2] [ref=f11e147]
              - paragraph [ref=f11e148]: Men Tshirt
              - generic [ref=f11e149] [cursor=pointer]:
                - generic [ref=f11e150]: 
                - text: Add to cart
            - generic [ref=f11e151]:
              - heading "Rs. 400" [level=2] [ref=f11e152]
              - paragraph [ref=f11e153]: Men Tshirt
              - generic [ref=f11e154] [cursor=pointer]:
                - generic [ref=f11e155]: 
                - text: Add to cart
          - list [ref=f11e157]:
            - listitem [ref=f11e158]:
              - link " View Product" [ref=f11e159] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=f11e160]: 
                - text: View Product
        - generic [ref=f11e162]:
          - generic [ref=f11e163]:
            - generic [ref=f11e164]:
              - img "ecommerce website products" [ref=f11e165]
              - heading "Rs. 1000" [level=2] [ref=f11e166]
              - paragraph [ref=f11e167]: Sleeveless Dress
              - generic [ref=f11e168] [cursor=pointer]:
                - generic [ref=f11e169]: 
                - text: Add to cart
            - generic [ref=f11e170]:
              - heading "Rs. 1000" [level=2] [ref=f11e171]
              - paragraph [ref=f11e172]: Sleeveless Dress
              - generic [ref=f11e173] [cursor=pointer]:
                - generic [ref=f11e174]: 
                - text: Add to cart
          - list [ref=f11e176]:
            - listitem [ref=f11e177]:
              - link " View Product" [ref=f11e178] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=f11e179]: 
                - text: View Product
        - generic [ref=f11e181]:
          - generic [ref=f11e182]:
            - generic [ref=f11e183]:
              - img "ecommerce website products"
              - heading "Rs. 1500" [level=2] [ref=f11e184]
              - paragraph [ref=f11e185]: Stylish Dress
              - generic [ref=f11e186] [cursor=pointer]:
                - generic [ref=f11e187]: 
                - text: Add to cart
            - generic [ref=f11e188]:
              - heading "Rs. 1500" [level=2] [ref=f11e189]
              - paragraph [ref=f11e190]: Stylish Dress
              - generic [ref=f11e191] [cursor=pointer]:
                - generic [ref=f11e192]: 
                - text: Add to cart
          - list [ref=f11e194]:
            - listitem [ref=f11e195]:
              - link " View Product" [ref=f11e196] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=f11e197]: 
                - text: View Product
        - generic [ref=f11e199]:
          - generic [ref=f11e200]:
            - generic [ref=f11e201]:
              - img "ecommerce website products"
              - heading "Rs. 600" [level=2] [ref=f11e202]
              - paragraph [ref=f11e203]: Winter Top
              - generic [ref=f11e204] [cursor=pointer]:
                - generic [ref=f11e205]: 
                - text: Add to cart
            - generic [ref=f11e206]:
              - heading "Rs. 600" [level=2] [ref=f11e207]
              - paragraph [ref=f11e208]: Winter Top
              - generic [ref=f11e209] [cursor=pointer]:
                - generic [ref=f11e210]: 
                - text: Add to cart
          - list [ref=f11e212]:
            - listitem [ref=f11e213]:
              - link " View Product" [ref=f11e214] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=f11e215]: 
                - text: View Product
        - generic [ref=f11e217]:
          - generic [ref=f11e218]:
            - generic [ref=f11e219]:
              - img "ecommerce website products" [ref=f11e220]
              - heading "Rs. 400" [level=2] [ref=f11e221]
              - paragraph [ref=f11e222]: Summer White Top
              - generic [ref=f11e223] [cursor=pointer]:
                - generic [ref=f11e224]: 
                - text: Add to cart
            - generic [ref=f11e225]:
              - heading "Rs. 400" [level=2] [ref=f11e226]
              - paragraph [ref=f11e227]: Summer White Top
              - generic [ref=f11e228] [cursor=pointer]:
                - generic [ref=f11e229]: 
                - text: Add to cart
          - list [ref=f11e231]:
            - listitem [ref=f11e232]:
              - link " View Product" [ref=f11e233] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=f11e234]: 
                - text: View Product
        - generic [ref=f11e236]:
          - generic [ref=f11e237]:
            - generic [ref=f11e238]:
              - img "ecommerce website products"
              - heading "Rs. 1000" [level=2] [ref=f11e239]
              - paragraph [ref=f11e240]: Madame Top For Women
              - generic [ref=f11e241] [cursor=pointer]:
                - generic [ref=f11e242]: 
                - text: Add to cart
            - generic [ref=f11e243]:
              - heading "Rs. 1000" [level=2] [ref=f11e244]
              - paragraph [ref=f11e245]: Madame Top For Women
              - generic [ref=f11e246] [cursor=pointer]:
                - generic [ref=f11e247]: 
                - text: Add to cart
          - list [ref=f11e249]:
            - listitem [ref=f11e250]:
              - link " View Product" [ref=f11e251] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=f11e252]: 
                - text: View Product
        - generic [ref=f11e254]:
          - generic [ref=f11e255]:
            - generic [ref=f11e256]:
              - img "ecommerce website products"
              - heading "Rs. 700" [level=2] [ref=f11e257]
              - paragraph [ref=f11e258]: Fancy Green Top
              - generic [ref=f11e259] [cursor=pointer]:
                - generic [ref=f11e260]: 
                - text: Add to cart
            - generic [ref=f11e261]:
              - heading "Rs. 700" [level=2] [ref=f11e262]
              - paragraph [ref=f11e263]: Fancy Green Top
              - generic [ref=f11e264] [cursor=pointer]:
                - generic [ref=f11e265]: 
                - text: Add to cart
          - list [ref=f11e267]:
            - listitem [ref=f11e268]:
              - link " View Product" [ref=f11e269] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=f11e270]: 
                - text: View Product
        - generic [ref=f11e272]:
          - generic [ref=f11e273]:
            - generic [ref=f11e274]:
              - img "ecommerce website products"
              - heading "Rs. 499" [level=2] [ref=f11e275]
              - paragraph [ref=f11e276]: Sleeves Printed Top - White
              - generic [ref=f11e277] [cursor=pointer]:
                - generic [ref=f11e278]: 
                - text: Add to cart
            - generic [ref=f11e279]:
              - heading "Rs. 499" [level=2] [ref=f11e280]
              - paragraph [ref=f11e281]: Sleeves Printed Top - White
              - generic [ref=f11e282] [cursor=pointer]:
                - generic [ref=f11e283]: 
                - text: Add to cart
          - list [ref=f11e285]:
            - listitem [ref=f11e286]:
              - link " View Product" [ref=f11e287] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=f11e288]: 
                - text: View Product
        - generic [ref=f11e290]:
          - generic [ref=f11e291]:
            - generic [ref=f11e292]:
              - img "ecommerce website products" [ref=f11e293]
              - heading "Rs. 359" [level=2] [ref=f11e294]
              - paragraph [ref=f11e295]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f11e296] [cursor=pointer]:
                - generic [ref=f11e297]: 
                - text: Add to cart
            - generic [ref=f11e298]:
              - heading "Rs. 359" [level=2] [ref=f11e299]
              - paragraph [ref=f11e300]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f11e301] [cursor=pointer]:
                - generic [ref=f11e302]: 
                - text: Add to cart
          - list [ref=f11e304]:
            - listitem [ref=f11e305]:
              - link " View Product" [ref=f11e306] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=f11e307]: 
                - text: View Product
        - generic [ref=f11e309]:
          - generic [ref=f11e310]:
            - generic [ref=f11e311]:
              - img "ecommerce website products"
              - heading "Rs. 278" [level=2] [ref=f11e312]
              - paragraph [ref=f11e313]: Frozen Tops For Kids
              - generic [ref=f11e314] [cursor=pointer]:
                - generic [ref=f11e315]: 
                - text: Add to cart
            - generic [ref=f11e316]:
              - heading "Rs. 278" [level=2] [ref=f11e317]
              - paragraph [ref=f11e318]: Frozen Tops For Kids
              - generic [ref=f11e319] [cursor=pointer]:
                - generic [ref=f11e320]: 
                - text: Add to cart
          - list [ref=f11e322]:
            - listitem [ref=f11e323]:
              - link " View Product" [ref=f11e324] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=f11e325]: 
                - text: View Product
        - generic [ref=f11e327]:
          - generic [ref=f11e328]:
            - generic [ref=f11e329]:
              - img "ecommerce website products" [ref=f11e330]
              - heading "Rs. 679" [level=2] [ref=f11e331]
              - paragraph [ref=f11e332]: Full Sleeves Top Cherry - Pink
              - generic [ref=f11e333] [cursor=pointer]:
                - generic [ref=f11e334]: 
                - text: Add to cart
            - generic [ref=f11e335]:
              - heading "Rs. 679" [level=2] [ref=f11e336]
              - paragraph [ref=f11e337]: Full Sleeves Top Cherry - Pink
              - generic [ref=f11e338] [cursor=pointer]:
                - generic [ref=f11e339]: 
                - text: Add to cart
          - list [ref=f11e341]:
            - listitem [ref=f11e342]:
              - link " View Product" [ref=f11e343] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=f11e344]: 
                - text: View Product
        - generic [ref=f11e346]:
          - generic [ref=f11e347]:
            - generic [ref=f11e348]:
              - img "ecommerce website products" [ref=f11e349]
              - heading "Rs. 315" [level=2] [ref=f11e350]
              - paragraph [ref=f11e351]: Printed Off Shoulder Top - White
              - generic [ref=f11e352] [cursor=pointer]:
                - generic [ref=f11e353]: 
                - text: Add to cart
            - generic [ref=f11e354]:
              - heading "Rs. 315" [level=2] [ref=f11e355]
              - paragraph [ref=f11e356]: Printed Off Shoulder Top - White
              - generic [ref=f11e357] [cursor=pointer]:
                - generic [ref=f11e358]: 
                - text: Add to cart
          - list [ref=f11e360]:
            - listitem [ref=f11e361]:
              - link " View Product" [ref=f11e362] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=f11e363]: 
                - text: View Product
        - generic [ref=f11e365]:
          - generic [ref=f11e366]:
            - generic [ref=f11e367]:
              - img "ecommerce website products"
              - heading "Rs. 478" [level=2] [ref=f11e368]
              - paragraph [ref=f11e369]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f11e370] [cursor=pointer]:
                - generic [ref=f11e371]: 
                - text: Add to cart
            - generic [ref=f11e372]:
              - heading "Rs. 478" [level=2] [ref=f11e373]
              - paragraph [ref=f11e374]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f11e375] [cursor=pointer]:
                - generic [ref=f11e376]: 
                - text: Add to cart
          - list [ref=f11e378]:
            - listitem [ref=f11e379]:
              - link " View Product" [ref=f11e380] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=f11e381]: 
                - text: View Product
        - generic [ref=f11e383]:
          - generic [ref=f11e384]:
            - generic [ref=f11e385]:
              - img "ecommerce website products" [ref=f11e386]
              - heading "Rs. 1200" [level=2] [ref=f11e387]
              - paragraph [ref=f11e388]: Little Girls Mr. Panda Shirt
              - generic [ref=f11e389] [cursor=pointer]:
                - generic [ref=f11e390]: 
                - text: Add to cart
            - generic [ref=f11e391]:
              - heading "Rs. 1200" [level=2] [ref=f11e392]
              - paragraph [ref=f11e393]: Little Girls Mr. Panda Shirt
              - generic [ref=f11e394] [cursor=pointer]:
                - generic [ref=f11e395]: 
                - text: Add to cart
          - list [ref=f11e397]:
            - listitem [ref=f11e398]:
              - link " View Product" [ref=f11e399] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=f11e400]: 
                - text: View Product
        - generic [ref=f11e402]:
          - generic [ref=f11e403]:
            - generic [ref=f11e404]:
              - img "ecommerce website products" [ref=f11e405]
              - heading "Rs. 1050" [level=2] [ref=f11e406]
              - paragraph [ref=f11e407]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f11e408] [cursor=pointer]:
                - generic [ref=f11e409]: 
                - text: Add to cart
            - generic [ref=f11e410]:
              - heading "Rs. 1050" [level=2] [ref=f11e411]
              - paragraph [ref=f11e412]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f11e413] [cursor=pointer]:
                - generic [ref=f11e414]: 
                - text: Add to cart
          - list [ref=f11e416]:
            - listitem [ref=f11e417]:
              - link " View Product" [ref=f11e418] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=f11e419]: 
                - text: View Product
        - generic [ref=f11e421]:
          - generic [ref=f11e422]:
            - generic [ref=f11e423]:
              - img "ecommerce website products" [ref=f11e424]
              - heading "Rs. 1190" [level=2] [ref=f11e425]
              - paragraph [ref=f11e426]: Cotton Mull Embroidered Dress
              - generic [ref=f11e427] [cursor=pointer]:
                - generic [ref=f11e428]: 
                - text: Add to cart
            - generic [ref=f11e429]:
              - heading "Rs. 1190" [level=2] [ref=f11e430]
              - paragraph [ref=f11e431]: Cotton Mull Embroidered Dress
              - generic [ref=f11e432] [cursor=pointer]:
                - generic [ref=f11e433]: 
                - text: Add to cart
          - list [ref=f11e435]:
            - listitem [ref=f11e436]:
              - link " View Product" [ref=f11e437] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=f11e438]: 
                - text: View Product
        - generic [ref=f11e440]:
          - generic [ref=f11e441]:
            - generic [ref=f11e442]:
              - img "ecommerce website products"
              - heading "Rs. 1530" [level=2] [ref=f11e443]
              - paragraph [ref=f11e444]: Blue Cotton Indie Mickey Dress
              - generic [ref=f11e445] [cursor=pointer]:
                - generic [ref=f11e446]: 
                - text: Add to cart
            - generic [ref=f11e447]:
              - heading "Rs. 1530" [level=2] [ref=f11e448]
              - paragraph [ref=f11e449]: Blue Cotton Indie Mickey Dress
              - generic [ref=f11e450] [cursor=pointer]:
                - generic [ref=f11e451]: 
                - text: Add to cart
          - list [ref=f11e453]:
            - listitem [ref=f11e454]:
              - link " View Product" [ref=f11e455] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=f11e456]: 
                - text: View Product
        - generic [ref=f11e458]:
          - generic [ref=f11e459]:
            - generic [ref=f11e460]:
              - img "ecommerce website products" [ref=f11e461]
              - heading "Rs. 1600" [level=2] [ref=f11e462]
              - paragraph [ref=f11e463]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f11e464] [cursor=pointer]:
                - generic [ref=f11e465]: 
                - text: Add to cart
            - generic [ref=f11e466]:
              - heading "Rs. 1600" [level=2] [ref=f11e467]
              - paragraph [ref=f11e468]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f11e469] [cursor=pointer]:
                - generic [ref=f11e470]: 
                - text: Add to cart
          - list [ref=f11e472]:
            - listitem [ref=f11e473]:
              - link " View Product" [ref=f11e474] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=f11e475]: 
                - text: View Product
        - generic [ref=f11e477]:
          - generic [ref=f11e478]:
            - generic [ref=f11e479]:
              - img "ecommerce website products"
              - heading "Rs. 1100" [level=2] [ref=f11e480]
              - paragraph [ref=f11e481]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f11e482] [cursor=pointer]:
                - generic [ref=f11e483]: 
                - text: Add to cart
            - generic [ref=f11e484]:
              - heading "Rs. 1100" [level=2] [ref=f11e485]
              - paragraph [ref=f11e486]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f11e487] [cursor=pointer]:
                - generic [ref=f11e488]: 
                - text: Add to cart
          - list [ref=f11e490]:
            - listitem [ref=f11e491]:
              - link " View Product" [ref=f11e492] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=f11e493]: 
                - text: View Product
        - generic [ref=f11e495]:
          - generic [ref=f11e496]:
            - generic [ref=f11e497]:
              - img "ecommerce website products" [ref=f11e498]
              - heading "Rs. 849" [level=2] [ref=f11e499]
              - paragraph [ref=f11e500]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f11e501] [cursor=pointer]:
                - generic [ref=f11e502]: 
                - text: Add to cart
            - generic [ref=f11e503]:
              - heading "Rs. 849" [level=2] [ref=f11e504]
              - paragraph [ref=f11e505]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f11e506] [cursor=pointer]:
                - generic [ref=f11e507]: 
                - text: Add to cart
          - list [ref=f11e509]:
            - listitem [ref=f11e510]:
              - link " View Product" [ref=f11e511] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=f11e512]: 
                - text: View Product
        - generic [ref=f11e514]:
          - generic [ref=f11e515]:
            - generic [ref=f11e516]:
              - img "ecommerce website products" [ref=f11e517]
              - heading "Rs. 1299" [level=2] [ref=f11e518]
              - paragraph [ref=f11e519]: Pure Cotton V-Neck T-Shirt
              - generic [ref=f11e520] [cursor=pointer]:
                - generic [ref=f11e521]: 
                - text: Add to cart
            - generic [ref=f11e522]:
              - heading "Rs. 1299" [level=2] [ref=f11e523]
              - paragraph [ref=f11e524]: Pure Cotton V-Neck T-Shirt
              - generic [ref=f11e525] [cursor=pointer]:
                - generic [ref=f11e526]: 
                - text: Add to cart
          - list [ref=f11e528]:
            - listitem [ref=f11e529]:
              - link " View Product" [ref=f11e530] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=f11e531]: 
                - text: View Product
        - generic [ref=f11e533]:
          - generic [ref=f11e534]:
            - generic [ref=f11e535]:
              - img "ecommerce website products"
              - heading "Rs. 1000" [level=2] [ref=f11e536]
              - paragraph [ref=f11e537]: Green Side Placket Detail T-Shirt
              - generic [ref=f11e538] [cursor=pointer]:
                - generic [ref=f11e539]: 
                - text: Add to cart
            - generic [ref=f11e540]:
              - heading "Rs. 1000" [level=2] [ref=f11e541]
              - paragraph [ref=f11e542]: Green Side Placket Detail T-Shirt
              - generic [ref=f11e543] [cursor=pointer]:
                - generic [ref=f11e544]: 
                - text: Add to cart
          - list [ref=f11e546]:
            - listitem [ref=f11e547]:
              - link " View Product" [ref=f11e548] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=f11e549]: 
                - text: View Product
        - generic [ref=f11e551]:
          - generic [ref=f11e552]:
            - generic [ref=f11e553]:
              - img "ecommerce website products" [ref=f11e554]
              - heading "Rs. 1500" [level=2] [ref=f11e555]
              - paragraph [ref=f11e556]: Premium Polo T-Shirts
              - generic [ref=f11e557] [cursor=pointer]:
                - generic [ref=f11e558]: 
                - text: Add to cart
            - generic [ref=f11e559]:
              - heading "Rs. 1500" [level=2] [ref=f11e560]
              - paragraph [ref=f11e561]: Premium Polo T-Shirts
              - generic [ref=f11e562] [cursor=pointer]:
                - generic [ref=f11e563]: 
                - text: Add to cart
          - list [ref=f11e565]:
            - listitem [ref=f11e566]:
              - link " View Product" [ref=f11e567] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=f11e568]: 
                - text: View Product
        - generic [ref=f11e570]:
          - generic [ref=f11e571]:
            - generic [ref=f11e572]:
              - img "ecommerce website products" [ref=f11e573]
              - heading "Rs. 850" [level=2] [ref=f11e574]
              - paragraph [ref=f11e575]: Pure Cotton Neon Green Tshirt
              - generic [ref=f11e576] [cursor=pointer]:
                - generic [ref=f11e577]: 
                - text: Add to cart
            - generic [ref=f11e578]:
              - heading "Rs. 850" [level=2] [ref=f11e579]
              - paragraph [ref=f11e580]: Pure Cotton Neon Green Tshirt
              - generic [ref=f11e581] [cursor=pointer]:
                - generic [ref=f11e582]: 
                - text: Add to cart
          - list [ref=f11e584]:
            - listitem [ref=f11e585]:
              - link " View Product" [ref=f11e586] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=f11e587]: 
                - text: View Product
        - generic [ref=f11e589]:
          - generic [ref=f11e590]:
            - generic [ref=f11e591]:
              - img "ecommerce website products" [ref=f11e592]
              - heading "Rs. 799" [level=2] [ref=f11e593]
              - paragraph [ref=f11e594]: Soft Stretch Jeans
              - generic [ref=f11e595] [cursor=pointer]:
                - generic [ref=f11e596]: 
                - text: Add to cart
            - generic [ref=f11e597]:
              - heading "Rs. 799" [level=2] [ref=f11e598]
              - paragraph [ref=f11e599]: Soft Stretch Jeans
              - generic [ref=f11e600] [cursor=pointer]:
                - generic [ref=f11e601]: 
                - text: Add to cart
          - list [ref=f11e603]:
            - listitem [ref=f11e604]:
              - link " View Product" [ref=f11e605] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=f11e606]: 
                - text: View Product
        - generic [ref=f11e608]:
          - generic [ref=f11e609]:
            - generic [ref=f11e610]:
              - img "ecommerce website products" [ref=f11e611]
              - heading "Rs. 1200" [level=2] [ref=f11e612]
              - paragraph [ref=f11e613]: Regular Fit Straight Jeans
              - generic [ref=f11e614] [cursor=pointer]:
                - generic [ref=f11e615]: 
                - text: Add to cart
            - generic [ref=f11e616]:
              - heading "Rs. 1200" [level=2] [ref=f11e617]
              - paragraph [ref=f11e618]: Regular Fit Straight Jeans
              - generic [ref=f11e619] [cursor=pointer]:
                - generic [ref=f11e620]: 
                - text: Add to cart
          - list [ref=f11e622]:
            - listitem [ref=f11e623]:
              - link " View Product" [ref=f11e624] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=f11e625]: 
                - text: View Product
        - generic [ref=f11e627]:
          - generic [ref=f11e628]:
            - generic [ref=f11e629]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=f11e630]
              - paragraph [ref=f11e631]: Grunt Blue Slim Fit Jeans
              - generic [ref=f11e632] [cursor=pointer]:
                - generic [ref=f11e633]: 
                - text: Add to cart
            - generic [ref=f11e634]:
              - heading "Rs. 1400" [level=2] [ref=f11e635]
              - paragraph [ref=f11e636]: Grunt Blue Slim Fit Jeans
              - generic [ref=f11e637] [cursor=pointer]:
                - generic [ref=f11e638]: 
                - text: Add to cart
          - list [ref=f11e640]:
            - listitem [ref=f11e641]:
              - link " View Product" [ref=f11e642] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=f11e643]: 
                - text: View Product
        - generic [ref=f11e645]:
          - generic [ref=f11e646]:
            - generic [ref=f11e647]:
              - img "ecommerce website products" [ref=f11e648]
              - heading "Rs. 2300" [level=2] [ref=f11e649]
              - paragraph [ref=f11e650]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f11e651] [cursor=pointer]:
                - generic [ref=f11e652]: 
                - text: Add to cart
            - generic [ref=f11e653]:
              - heading "Rs. 2300" [level=2] [ref=f11e654]
              - paragraph [ref=f11e655]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f11e656] [cursor=pointer]:
                - generic [ref=f11e657]: 
                - text: Add to cart
          - list [ref=f11e659]:
            - listitem [ref=f11e660]:
              - link " View Product" [ref=f11e661] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=f11e662]: 
                - text: View Product
        - generic [ref=f11e664]:
          - generic [ref=f11e665]:
            - generic [ref=f11e666]:
              - img "ecommerce website products"
              - heading "Rs. 3000" [level=2] [ref=f11e667]
              - paragraph [ref=f11e668]: Cotton Silk Hand Block Print Saree
              - generic [ref=f11e669] [cursor=pointer]:
                - generic [ref=f11e670]: 
                - text: Add to cart
            - generic [ref=f11e671]:
              - heading "Rs. 3000" [level=2] [ref=f11e672]
              - paragraph [ref=f11e673]: Cotton Silk Hand Block Print Saree
              - generic [ref=f11e674] [cursor=pointer]:
                - generic [ref=f11e675]: 
                - text: Add to cart
          - list [ref=f11e677]:
            - listitem [ref=f11e678]:
              - link " View Product" [ref=f11e679] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=f11e680]: 
                - text: View Product
        - generic [ref=f11e682]:
          - generic [ref=f11e683]:
            - generic [ref=f11e684]:
              - img "ecommerce website products"
              - heading "Rs. 3500" [level=2] [ref=f11e685]
              - paragraph [ref=f11e686]: Rust Red Linen Saree
              - generic [ref=f11e687] [cursor=pointer]:
                - generic [ref=f11e688]: 
                - text: Add to cart
            - generic [ref=f11e689]:
              - heading "Rs. 3500" [level=2] [ref=f11e690]
              - paragraph [ref=f11e691]: Rust Red Linen Saree
              - generic [ref=f11e692] [cursor=pointer]:
                - generic [ref=f11e693]: 
                - text: Add to cart
          - list [ref=f11e695]:
            - listitem [ref=f11e696]:
              - link " View Product" [ref=f11e697] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=f11e698]: 
                - text: View Product
        - generic [ref=f11e700]:
          - generic [ref=f11e701]:
            - generic [ref=f11e702]:
              - img "ecommerce website products" [ref=f11e703]
              - heading "Rs. 5000" [level=2] [ref=f11e704]
              - paragraph [ref=f11e705]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f11e706] [cursor=pointer]:
                - generic [ref=f11e707]: 
                - text: Add to cart
            - generic [ref=f11e708]:
              - heading "Rs. 5000" [level=2] [ref=f11e709]
              - paragraph [ref=f11e710]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f11e711] [cursor=pointer]:
                - generic [ref=f11e712]: 
                - text: Add to cart
          - list [ref=f11e714]:
            - listitem [ref=f11e715]:
              - link " View Product" [ref=f11e716] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=f11e717]: 
                - text: View Product
        - generic [ref=f11e719]:
          - generic [ref=f11e720]:
            - generic [ref=f11e721]:
              - img "ecommerce website products" [ref=f11e722]
              - heading "Rs. 1400" [level=2] [ref=f11e723]
              - paragraph [ref=f11e724]: Lace Top For Women
              - generic [ref=f11e725] [cursor=pointer]:
                - generic [ref=f11e726]: 
                - text: Add to cart
            - generic [ref=f11e727]:
              - heading "Rs. 1400" [level=2] [ref=f11e728]
              - paragraph [ref=f11e729]: Lace Top For Women
              - generic [ref=f11e730] [cursor=pointer]:
                - generic [ref=f11e731]: 
                - text: Add to cart
          - list [ref=f11e733]:
            - listitem [ref=f11e734]:
              - link " View Product" [ref=f11e735] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=f11e736]: 
                - text: View Product
        - generic [ref=f11e738]:
          - generic [ref=f11e739]:
            - generic [ref=f11e740]:
              - img "ecommerce website products" [ref=f11e741]
              - heading "Rs. 1389" [level=2] [ref=f11e742]
              - paragraph [ref=f11e743]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f11e744] [cursor=pointer]:
                - generic [ref=f11e745]: 
                - text: Add to cart
            - generic [ref=f11e746]:
              - heading "Rs. 1389" [level=2] [ref=f11e747]
              - paragraph [ref=f11e748]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f11e749] [cursor=pointer]:
                - generic [ref=f11e750]: 
                - text: Add to cart
          - list [ref=f11e752]:
            - listitem [ref=f11e753]:
              - link " View Product" [ref=f11e754] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=f11e755]: 
                - text: View Product
      - generic [ref=f11e756]:
        - heading "recommended items" [level=2] [ref=f11e757]
        - generic [ref=f11e758]:
          - generic [ref=f11e759]:
            - text:   
            - generic:
              - generic [ref=f11e763]:
                - img "ecommerce website products"
                - heading "Rs. 1500" [level=2] [ref=f11e764]
                - paragraph [ref=f11e765]: Stylish Dress
                - generic [ref=f11e766] [cursor=pointer]:
                  - generic [ref=f11e767]: 
                  - text: Add to cart
              - generic [ref=f11e771]:
                - img "ecommerce website products"
                - heading "Rs. 600" [level=2] [ref=f11e772]
                - paragraph [ref=f11e773]: Winter Top
                - generic [ref=f11e774] [cursor=pointer]:
                  - generic [ref=f11e775]: 
                  - text: Add to cart
              - generic [ref=f11e779]:
                - img "ecommerce website products" [ref=f11e780]
                - heading "Rs. 400" [level=2] [ref=f11e781]
                - paragraph [ref=f11e782]: Summer White Top
                - generic [ref=f11e783] [cursor=pointer]:
                  - generic [ref=f11e784]: 
                  - text: Add to cart
          - link "" [ref=f11e785] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=f11e787] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - contentinfo [ref=f11e789]:
    - generic [ref=f11e794]:
      - heading "Subscription" [level=2] [ref=f11e795]
      - generic [ref=f11e796]:
        - textbox "Your email address" [ref=f11e797]
        - button "" [ref=f11e798] [cursor=pointer]
        - paragraph [ref=f11e800]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f11e804]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import type { APIRequestContext, APIResponse } from '@playwright/test';
  2  | import type {
  3  |   AccountRequest,
  4  |   ApiMessageResponse,
  5  |   ApiResult,
  6  |   BrandsResponse,
  7  |   Credentials,
  8  |   ProductsResponse,
  9  |   UserDetailResponse
  10 | } from './types';
  11 | 
  12 | export class AutomationExerciseApi {
  13 |   constructor(private readonly request: APIRequestContext) {}
  14 | 
  15 |   async getProducts(): Promise<ApiResult<ProductsResponse>> {
  16 |     return this.parse(await this.request.get('/api/productsList'));
  17 |   }
  18 | 
  19 |   async postProducts(): Promise<ApiResult<ApiMessageResponse>> {
  20 |     return this.parse(await this.request.post('/api/productsList'));
  21 |   }
  22 | 
  23 |   async getBrands(): Promise<ApiResult<BrandsResponse>> {
  24 |     return this.parse(await this.request.get('/api/brandsList'));
  25 |   }
  26 | 
  27 |   async putBrands(): Promise<ApiResult<ApiMessageResponse>> {
  28 |     return this.parse(await this.request.put('/api/brandsList'));
  29 |   }
  30 | 
  31 |   async searchProducts(searchProduct: string): Promise<ApiResult<ProductsResponse>> {
  32 |     return this.parse(await this.request.post('/api/searchProduct', {
  33 |       form: { search_product: searchProduct }
  34 |     }));
  35 |   }
  36 | 
  37 |   async searchProductsWithoutTerm(): Promise<ApiResult<ApiMessageResponse>> {
  38 |     return this.parse(await this.request.post('/api/searchProduct'));
  39 |   }
  40 | 
  41 |   async verifyLogin(credentials: Credentials): Promise<ApiResult<ApiMessageResponse>> {
  42 |     return this.parse(await this.request.post('/api/verifyLogin', {
  43 |       form: credentials
  44 |     }));
  45 |   }
  46 | 
  47 |   async verifyLoginWithoutEmail(password: string): Promise<ApiResult<ApiMessageResponse>> {
  48 |     return this.parse(await this.request.post('/api/verifyLogin', {
  49 |       form: { password }
  50 |     }));
  51 |   }
  52 | 
  53 |   async deleteVerifyLogin(): Promise<ApiResult<ApiMessageResponse>> {
  54 |     return this.parse(await this.request.delete('/api/verifyLogin'));
  55 |   }
  56 | 
  57 |   async createAccount(account: AccountRequest): Promise<ApiResult<ApiMessageResponse>> {
  58 |     return this.parse(await this.request.post('/api/createAccount', { form: account }));
  59 |   }
  60 | 
  61 |   async deleteAccount(credentials: Credentials): Promise<ApiResult<ApiMessageResponse>> {
  62 |     return this.parse(await this.request.delete('/api/deleteAccount', {
  63 |       form: credentials
  64 |     }));
  65 |   }
  66 | 
  67 |   async updateAccount(account: AccountRequest): Promise<ApiResult<ApiMessageResponse>> {
  68 |     return this.parse(await this.request.put('/api/updateAccount', { form: account }));
  69 |   }
  70 | 
  71 |   async getUserDetailByEmail(email: string): Promise<ApiResult<UserDetailResponse>> {
  72 |     return this.parse(await this.request.get('/api/getUserDetailByEmail', {
  73 |       params: { email }
  74 |     }));
  75 |   }
  76 | 
  77 |   private async parse<T>(response: APIResponse): Promise<ApiResult<T>> {
  78 |     return {
  79 |       status: response.status(),
> 80 |       body: await response.json() as T
     |             ^ SyntaxError: Unexpected token '<', "<html><hea"... is not valid JSON
  81 |     };
  82 |   }
  83 | }
  84 | 
```