# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Place Order: Login before Checkout
- Location: tests/regression/cart.spec.ts:243:7

# Error details

```
SyntaxError: Unexpected token '<', "<h2>This w"... is not valid JSON
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Factory Automation" [ref=e51] [cursor=pointer]
          - link [ref=e55]:
            - /url: /test_cases
            - button "Test Cases" [ref=e56] [cursor=pointer]
          - link [ref=e57]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e58] [cursor=pointer]
        - img "demo website for practice" [ref=e60]
    - link "" [ref=e61]:
      - /url: "#slider-carousel"
    - link "" [ref=e63]:
      - /url: "#slider-carousel"
  - generic [ref=e67]:
    - generic [ref=e69]:
      - heading "Category" [level=2] [ref=e70]
      - generic [ref=e71]:
        - heading [level=4] [ref=e74]:
          - link " Women" [ref=e75]:
            - /url: "#Women"
            - generic [ref=e76]: 
            - text: Women
        - heading [level=4] [ref=e80]:
          - link " Men" [ref=e81]:
            - /url: "#Men"
            - generic [ref=e82]: 
            - text: Men
        - heading [level=4] [ref=e86]:
          - link " Kids" [ref=e87]:
            - /url: "#Kids"
            - generic [ref=e88]: 
            - text: Kids
      - insertion [ref=e91]
      - generic [ref=e93]:
        - heading "Brands" [level=2] [ref=e94]
        - list [ref=e96]:
          - listitem [ref=e97]:
            - link "(6) Polo" [ref=e98]:
              - /url: /brand_products/Polo
              - generic [ref=e99]: (6)
              - text: Polo
          - listitem [ref=e100]:
            - link "(5) H&M" [ref=e101]:
              - /url: /brand_products/H&M
              - generic [ref=e102]: (5)
              - text: H&M
          - listitem [ref=e103]:
            - link "(5) Madame" [ref=e104]:
              - /url: /brand_products/Madame
              - generic [ref=e105]: (5)
              - text: Madame
          - listitem [ref=e106]:
            - link "(3) Mast & Harbour" [ref=e107]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e108]: (3)
              - text: Mast & Harbour
          - listitem [ref=e109]:
            - link "(4) Babyhug" [ref=e110]:
              - /url: /brand_products/Babyhug
              - generic [ref=e111]: (4)
              - text: Babyhug
          - listitem [ref=e112]:
            - link "(3) Allen Solly Junior" [ref=e113]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e114]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e115]:
            - link "(3) Kookie Kids" [ref=e116]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e117]: (3)
              - text: Kookie Kids
          - listitem [ref=e118]:
            - link "(5) Biba" [ref=e119]:
              - /url: /brand_products/Biba
              - generic [ref=e120]: (5)
              - text: Biba
    - generic [ref=e121]:
      - generic [ref=e122]:
        - heading "Features Items" [level=2] [ref=e123]
        - generic [ref=e125]:
          - generic [ref=e126]:
            - generic [ref=e127]:
              - img "ecommerce website products" [ref=e128]
              - heading "Rs. 500" [level=2] [ref=e129]
              - paragraph [ref=e130]: Blue Top
              - generic [ref=e131] [cursor=pointer]:
                - generic [ref=e132]: 
                - text: Add to cart
            - generic [ref=e133]:
              - heading "Rs. 500" [level=2] [ref=e134]
              - paragraph [ref=e135]: Blue Top
              - generic [ref=e136] [cursor=pointer]:
                - generic [ref=e137]: 
                - text: Add to cart
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link " View Product" [ref=e141]:
                - /url: /product_details/1
                - generic [ref=e142]: 
                - text: View Product
        - generic [ref=e144]:
          - generic [ref=e145]:
            - generic [ref=e146]:
              - img "ecommerce website products" [ref=e147]
              - heading "Rs. 400" [level=2] [ref=e148]
              - paragraph [ref=e149]:
                - text: Men
                - link "Tshirt" [ref=e150] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e153] [cursor=pointer]:
                - generic [ref=e154]: 
                - text: Add to cart
            - generic [ref=e155]:
              - heading "Rs. 400" [level=2] [ref=e156]
              - paragraph [ref=e157]: Men Tshirt
              - generic [ref=e158] [cursor=pointer]:
                - generic [ref=e159]: 
                - text: Add to cart
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link " View Product" [ref=e163]:
                - /url: /product_details/2
                - generic [ref=e164]: 
                - text: View Product
        - generic [ref=e166]:
          - generic [ref=e167]:
            - generic [ref=e168]:
              - img "ecommerce website products" [ref=e169]
              - heading "Rs. 1000" [level=2] [ref=e170]
              - paragraph [ref=e171]: Sleeveless Dress
              - generic [ref=e172] [cursor=pointer]:
                - generic [ref=e173]: 
                - text: Add to cart
            - generic [ref=e174]:
              - heading "Rs. 1000" [level=2] [ref=e175]
              - paragraph [ref=e176]: Sleeveless Dress
              - generic [ref=e177] [cursor=pointer]:
                - generic [ref=e178]: 
                - text: Add to cart
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link " View Product" [ref=e182]:
                - /url: /product_details/3
                - generic [ref=e183]: 
                - text: View Product
        - generic [ref=e185]:
          - generic [ref=e186]:
            - generic [ref=e187]:
              - img "ecommerce website products" [ref=e188]
              - heading "Rs. 1500" [level=2] [ref=e189]
              - paragraph [ref=e190]: Stylish Dress
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: 
                - text: Add to cart
            - generic [ref=e193]:
              - heading "Rs. 1500" [level=2] [ref=e194]
              - paragraph [ref=e195]: Stylish Dress
              - generic [ref=e196] [cursor=pointer]:
                - generic [ref=e197]: 
                - text: Add to cart
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link " View Product" [ref=e201]:
                - /url: /product_details/4
                - generic [ref=e202]: 
                - text: View Product
        - generic [ref=e204]:
          - generic [ref=e205]:
            - generic [ref=e206]:
              - img "ecommerce website products" [ref=e207]
              - heading "Rs. 600" [level=2] [ref=e208]
              - paragraph [ref=e209]: Winter Top
              - generic [ref=e210] [cursor=pointer]:
                - generic [ref=e211]: 
                - text: Add to cart
            - generic [ref=e212]:
              - heading "Rs. 600" [level=2] [ref=e213]
              - paragraph [ref=e214]: Winter Top
              - generic [ref=e215] [cursor=pointer]:
                - generic [ref=e216]: 
                - text: Add to cart
          - list [ref=e218]:
            - listitem [ref=e219]:
              - link " View Product" [ref=e220]:
                - /url: /product_details/5
                - generic [ref=e221]: 
                - text: View Product
        - generic [ref=e223]:
          - generic [ref=e224]:
            - generic [ref=e225]:
              - img "ecommerce website products" [ref=e226]
              - heading "Rs. 400" [level=2] [ref=e227]
              - paragraph [ref=e228]: Summer White Top
              - generic [ref=e229] [cursor=pointer]:
                - generic [ref=e230]: 
                - text: Add to cart
            - generic [ref=e231]:
              - heading "Rs. 400" [level=2] [ref=e232]
              - paragraph [ref=e233]: Summer White Top
              - generic [ref=e234] [cursor=pointer]:
                - generic [ref=e235]: 
                - text: Add to cart
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link " View Product" [ref=e239]:
                - /url: /product_details/6
                - generic [ref=e240]: 
                - text: View Product
        - generic [ref=e242]:
          - generic [ref=e243]:
            - generic [ref=e244]:
              - img "ecommerce website products" [ref=e245]
              - heading "Rs. 1000" [level=2] [ref=e246]
              - paragraph [ref=e247]: Madame Top For Women
              - generic [ref=e248] [cursor=pointer]:
                - generic [ref=e249]: 
                - text: Add to cart
            - generic [ref=e250]:
              - heading "Rs. 1000" [level=2] [ref=e251]
              - paragraph [ref=e252]: Madame Top For Women
              - generic [ref=e253] [cursor=pointer]:
                - generic [ref=e254]: 
                - text: Add to cart
          - list [ref=e256]:
            - listitem [ref=e257]:
              - link " View Product" [ref=e258]:
                - /url: /product_details/7
                - generic [ref=e259]: 
                - text: View Product
        - generic [ref=e261]:
          - generic [ref=e262]:
            - generic [ref=e263]:
              - img "ecommerce website products" [ref=e264]
              - heading "Rs. 700" [level=2] [ref=e265]
              - paragraph [ref=e266]: Fancy Green Top
              - generic [ref=e267] [cursor=pointer]:
                - generic [ref=e268]: 
                - text: Add to cart
            - generic [ref=e269]:
              - heading "Rs. 700" [level=2] [ref=e270]
              - paragraph [ref=e271]: Fancy Green Top
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: 
                - text: Add to cart
          - list [ref=e275]:
            - listitem [ref=e276]:
              - link " View Product" [ref=e277]:
                - /url: /product_details/8
                - generic [ref=e278]: 
                - text: View Product
        - generic [ref=e280]:
          - generic [ref=e281]:
            - generic [ref=e282]:
              - img "ecommerce website products" [ref=e283]
              - heading "Rs. 499" [level=2] [ref=e284]
              - paragraph [ref=e285]:
                - text: Sleeves Printed Top - White
                - link "Internet & Telecom" [ref=e286] [cursor=pointer]
              - generic [ref=e290] [cursor=pointer]:
                - generic [ref=e291]: 
                - text: Add to cart
            - generic [ref=e292]:
              - heading "Rs. 499" [level=2] [ref=e293]
              - paragraph [ref=e294]: Sleeves Printed Top - White
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
          - list [ref=e298]:
            - listitem [ref=e299]:
              - link " View Product" [ref=e300]:
                - /url: /product_details/11
                - generic [ref=e301]: 
                - text: View Product
        - generic [ref=e303]:
          - generic [ref=e304]:
            - generic [ref=e305]:
              - img "ecommerce website products" [ref=e306]
              - heading "Rs. 359" [level=2] [ref=e307]
              - paragraph [ref=e308]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e309] [cursor=pointer]:
                - generic [ref=e310]: 
                - text: Add to cart
            - generic [ref=e311]:
              - heading "Rs. 359" [level=2] [ref=e312]
              - paragraph [ref=e313]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
          - list [ref=e317]:
            - listitem [ref=e318]:
              - link " View Product" [ref=e319]:
                - /url: /product_details/12
                - generic [ref=e320]: 
                - text: View Product
        - generic [ref=e322]:
          - generic [ref=e323]:
            - generic [ref=e324]:
              - img "ecommerce website products" [ref=e325]
              - heading "Rs. 278" [level=2] [ref=e326]
              - paragraph [ref=e327]: Frozen Tops For Kids
              - generic [ref=e328] [cursor=pointer]:
                - generic [ref=e329]: 
                - text: Add to cart
            - generic [ref=e330]:
              - heading "Rs. 278" [level=2] [ref=e331]
              - paragraph [ref=e332]: Frozen Tops For Kids
              - generic [ref=e333] [cursor=pointer]:
                - generic [ref=e334]: 
                - text: Add to cart
          - list [ref=e336]:
            - listitem [ref=e337]:
              - link " View Product" [ref=e338]:
                - /url: /product_details/13
                - generic [ref=e339]: 
                - text: View Product
        - generic [ref=e341]:
          - generic [ref=e342]:
            - generic [ref=e343]:
              - img "ecommerce website products" [ref=e344]
              - heading "Rs. 679" [level=2] [ref=e345]
              - paragraph [ref=e346]: Full Sleeves Top Cherry - Pink
              - generic [ref=e347] [cursor=pointer]:
                - generic [ref=e348]: 
                - text: Add to cart
            - generic [ref=e349]:
              - heading "Rs. 679" [level=2] [ref=e350]
              - paragraph [ref=e351]: Full Sleeves Top Cherry - Pink
              - generic [ref=e352] [cursor=pointer]:
                - generic [ref=e353]: 
                - text: Add to cart
          - list [ref=e355]:
            - listitem [ref=e356]:
              - link " View Product" [ref=e357]:
                - /url: /product_details/14
                - generic [ref=e358]: 
                - text: View Product
        - generic [ref=e360]:
          - generic [ref=e361]:
            - generic [ref=e362]:
              - img "ecommerce website products" [ref=e363]
              - heading "Rs. 315" [level=2] [ref=e364]
              - paragraph [ref=e365]:
                - text: Printed Off Shoulder Top - White
                - link "Quality Control & Tracking" [ref=e366] [cursor=pointer]
              - generic [ref=e370] [cursor=pointer]:
                - generic [ref=e371]: 
                - text: Add to cart
            - generic [ref=e372]:
              - heading "Rs. 315" [level=2] [ref=e373]
              - paragraph [ref=e374]: Printed Off Shoulder Top - White
              - generic [ref=e375] [cursor=pointer]:
                - generic [ref=e376]: 
                - text: Add to cart
          - list [ref=e378]:
            - listitem [ref=e379]:
              - link " View Product" [ref=e380]:
                - /url: /product_details/15
                - generic [ref=e381]: 
                - text: View Product
        - generic [ref=e383]:
          - generic [ref=e384]:
            - generic [ref=e385]:
              - img "ecommerce website products" [ref=e386]
              - heading "Rs. 478" [level=2] [ref=e387]
              - paragraph [ref=e388]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e389] [cursor=pointer]:
                - generic [ref=e390]: 
                - text: Add to cart
            - generic [ref=e391]:
              - heading "Rs. 478" [level=2] [ref=e392]
              - paragraph [ref=e393]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e394] [cursor=pointer]:
                - generic [ref=e395]: 
                - text: Add to cart
          - list [ref=e397]:
            - listitem [ref=e398]:
              - link " View Product" [ref=e399]:
                - /url: /product_details/16
                - generic [ref=e400]: 
                - text: View Product
        - generic [ref=e402]:
          - generic [ref=e403]:
            - generic [ref=e404]:
              - img "ecommerce website products" [ref=e405]
              - heading "Rs. 1200" [level=2] [ref=e406]
              - paragraph [ref=e407]: Little Girls Mr. Panda Shirt
              - generic [ref=e408] [cursor=pointer]:
                - generic [ref=e409]: 
                - text: Add to cart
            - generic [ref=e410]:
              - heading "Rs. 1200" [level=2] [ref=e411]
              - paragraph [ref=e412]: Little Girls Mr. Panda Shirt
              - generic [ref=e413] [cursor=pointer]:
                - generic [ref=e414]: 
                - text: Add to cart
          - list [ref=e416]:
            - listitem [ref=e417]:
              - link " View Product" [ref=e418]:
                - /url: /product_details/18
                - generic [ref=e419]: 
                - text: View Product
        - generic [ref=e421]:
          - generic [ref=e422]:
            - generic [ref=e423]:
              - img "ecommerce website products" [ref=e424]
              - heading "Rs. 1050" [level=2] [ref=e425]
              - paragraph [ref=e426]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e427] [cursor=pointer]:
                - generic [ref=e428]: 
                - text: Add to cart
            - generic [ref=e429]:
              - heading "Rs. 1050" [level=2] [ref=e430]
              - paragraph [ref=e431]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e432] [cursor=pointer]:
                - generic [ref=e433]: 
                - text: Add to cart
          - list [ref=e435]:
            - listitem [ref=e436]:
              - link " View Product" [ref=e437]:
                - /url: /product_details/19
                - generic [ref=e438]: 
                - text: View Product
        - generic [ref=e440]:
          - generic [ref=e441]:
            - generic [ref=e442]:
              - img "ecommerce website products" [ref=e443]
              - heading "Rs. 1190" [level=2] [ref=e444]
              - paragraph [ref=e445]: Cotton Mull Embroidered Dress
              - generic [ref=e446] [cursor=pointer]:
                - generic [ref=e447]: 
                - text: Add to cart
            - generic [ref=e448]:
              - heading "Rs. 1190" [level=2] [ref=e449]
              - paragraph [ref=e450]: Cotton Mull Embroidered Dress
              - generic [ref=e451] [cursor=pointer]:
                - generic [ref=e452]: 
                - text: Add to cart
          - list [ref=e454]:
            - listitem [ref=e455]:
              - link " View Product" [ref=e456]:
                - /url: /product_details/20
                - generic [ref=e457]: 
                - text: View Product
        - generic [ref=e459]:
          - generic [ref=e460]:
            - generic [ref=e461]:
              - img "ecommerce website products" [ref=e462]
              - heading "Rs. 1530" [level=2] [ref=e463]
              - paragraph [ref=e464]: Blue Cotton Indie Mickey Dress
              - generic [ref=e465] [cursor=pointer]:
                - generic [ref=e466]: 
                - text: Add to cart
            - generic [ref=e467]:
              - heading "Rs. 1530" [level=2] [ref=e468]
              - paragraph [ref=e469]: Blue Cotton Indie Mickey Dress
              - generic [ref=e470] [cursor=pointer]:
                - generic [ref=e471]: 
                - text: Add to cart
          - list [ref=e473]:
            - listitem [ref=e474]:
              - link " View Product" [ref=e475]:
                - /url: /product_details/21
                - generic [ref=e476]: 
                - text: View Product
        - generic [ref=e478]:
          - generic [ref=e479]:
            - generic [ref=e480]:
              - img "ecommerce website products" [ref=e481]
              - heading "Rs. 1600" [level=2] [ref=e482]
              - paragraph [ref=e483]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "Programming" [ref=e484] [cursor=pointer]
              - generic [ref=e488] [cursor=pointer]:
                - generic [ref=e489]: 
                - text: Add to cart
            - generic [ref=e490]:
              - heading "Rs. 1600" [level=2] [ref=e491]
              - paragraph [ref=e492]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e493] [cursor=pointer]:
                - generic [ref=e494]: 
                - text: Add to cart
          - list [ref=e496]:
            - listitem [ref=e497]:
              - link " View Product" [ref=e498]:
                - /url: /product_details/22
                - generic [ref=e499]: 
                - text: View Product
        - generic [ref=e501]:
          - generic [ref=e502]:
            - generic [ref=e503]:
              - img "ecommerce website products" [ref=e504]
              - heading "Rs. 1100" [level=2] [ref=e505]
              - paragraph [ref=e506]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e507] [cursor=pointer]:
                - generic [ref=e508]: 
                - text: Add to cart
            - generic [ref=e509]:
              - heading "Rs. 1100" [level=2] [ref=e510]
              - paragraph [ref=e511]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e512] [cursor=pointer]:
                - generic [ref=e513]: 
                - text: Add to cart
          - list [ref=e515]:
            - listitem [ref=e516]:
              - link " View Product" [ref=e517]:
                - /url: /product_details/23
                - generic [ref=e518]: 
                - text: View Product
        - generic [ref=e520]:
          - generic [ref=e521]:
            - generic [ref=e522]:
              - img "ecommerce website products" [ref=e523]
              - heading "Rs. 849" [level=2] [ref=e524]
              - paragraph [ref=e525]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e526] [cursor=pointer]:
                - generic [ref=e527]: 
                - text: Add to cart
            - generic [ref=e528]:
              - heading "Rs. 849" [level=2] [ref=e529]
              - paragraph [ref=e530]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e531] [cursor=pointer]:
                - generic [ref=e532]: 
                - text: Add to cart
          - list [ref=e534]:
            - listitem [ref=e535]:
              - link " View Product" [ref=e536]:
                - /url: /product_details/24
                - generic [ref=e537]: 
                - text: View Product
        - generic [ref=e539]:
          - generic [ref=e540]:
            - generic [ref=e541]:
              - img "ecommerce website products" [ref=e542]
              - heading "Rs. 1299" [level=2] [ref=e543]
              - paragraph [ref=e544]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e545] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e548] [cursor=pointer]:
                - generic [ref=e549]: 
                - text: Add to cart
            - generic [ref=e550]:
              - heading "Rs. 1299" [level=2] [ref=e551]
              - paragraph [ref=e552]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e553] [cursor=pointer]:
                - generic [ref=e554]: 
                - text: Add to cart
          - list [ref=e556]:
            - listitem [ref=e557]:
              - link " View Product" [ref=e558]:
                - /url: /product_details/28
                - generic [ref=e559]: 
                - text: View Product
        - generic [ref=e561]:
          - generic [ref=e562]:
            - generic [ref=e563]:
              - img "ecommerce website products" [ref=e564]
              - heading "Rs. 1000" [level=2] [ref=e565]
              - paragraph [ref=e566]: Green Side Placket Detail T-Shirt
              - generic [ref=e567] [cursor=pointer]:
                - generic [ref=e568]: 
                - text: Add to cart
            - generic [ref=e569]:
              - heading "Rs. 1000" [level=2] [ref=e570]
              - paragraph [ref=e571]: Green Side Placket Detail T-Shirt
              - generic [ref=e572] [cursor=pointer]:
                - generic [ref=e573]: 
                - text: Add to cart
          - list [ref=e575]:
            - listitem [ref=e576]:
              - link " View Product" [ref=e577]:
                - /url: /product_details/29
                - generic [ref=e578]: 
                - text: View Product
        - generic [ref=e580]:
          - generic [ref=e581]:
            - generic [ref=e582]:
              - img "ecommerce website products" [ref=e583]
              - heading "Rs. 1500" [level=2] [ref=e584]
              - paragraph [ref=e585]:
                - text: Premium Polo
                - link "T-Shirts" [ref=e586] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e589] [cursor=pointer]:
                - generic [ref=e590]: 
                - text: Add to cart
            - generic [ref=e591]:
              - heading "Rs. 1500" [level=2] [ref=e592]
              - paragraph [ref=e593]: Premium Polo T-Shirts
              - generic [ref=e594] [cursor=pointer]:
                - generic [ref=e595]: 
                - text: Add to cart
          - list [ref=e597]:
            - listitem [ref=e598]:
              - link " View Product" [ref=e599]:
                - /url: /product_details/30
                - generic [ref=e600]: 
                - text: View Product
        - generic [ref=e602]:
          - generic [ref=e603]:
            - generic [ref=e604]:
              - img "ecommerce website products" [ref=e605]
              - heading "Rs. 850" [level=2] [ref=e606]
              - paragraph [ref=e607]: Pure Cotton Neon Green Tshirt
              - generic [ref=e608] [cursor=pointer]:
                - generic [ref=e609]: 
                - text: Add to cart
            - generic [ref=e610]:
              - heading "Rs. 850" [level=2] [ref=e611]
              - paragraph [ref=e612]: Pure Cotton Neon Green Tshirt
              - generic [ref=e613] [cursor=pointer]:
                - generic [ref=e614]: 
                - text: Add to cart
          - list [ref=e616]:
            - listitem [ref=e617]:
              - link " View Product" [ref=e618]:
                - /url: /product_details/31
                - generic [ref=e619]: 
                - text: View Product
        - generic [ref=e621]:
          - generic [ref=e622]:
            - generic [ref=e623]:
              - img "ecommerce website products" [ref=e624]
              - heading "Rs. 799" [level=2] [ref=e625]
              - paragraph [ref=e626]: Soft Stretch Jeans
              - generic [ref=e627] [cursor=pointer]:
                - generic [ref=e628]: 
                - text: Add to cart
            - generic [ref=e629]:
              - heading "Rs. 799" [level=2] [ref=e630]
              - paragraph [ref=e631]: Soft Stretch Jeans
              - generic [ref=e632] [cursor=pointer]:
                - generic [ref=e633]: 
                - text: Add to cart
          - list [ref=e635]:
            - listitem [ref=e636]:
              - link " View Product" [ref=e637]:
                - /url: /product_details/33
                - generic [ref=e638]: 
                - text: View Product
        - generic [ref=e640]:
          - generic [ref=e641]:
            - generic [ref=e642]:
              - img "ecommerce website products" [ref=e643]
              - heading "Rs. 1200" [level=2] [ref=e644]
              - paragraph [ref=e645]: Regular Fit Straight Jeans
              - generic [ref=e646] [cursor=pointer]:
                - generic [ref=e647]: 
                - text: Add to cart
            - generic [ref=e648]:
              - heading "Rs. 1200" [level=2] [ref=e649]
              - paragraph [ref=e650]: Regular Fit Straight Jeans
              - generic [ref=e651] [cursor=pointer]:
                - generic [ref=e652]: 
                - text: Add to cart
          - list [ref=e654]:
            - listitem [ref=e655]:
              - link " View Product" [ref=e656]:
                - /url: /product_details/35
                - generic [ref=e657]: 
                - text: View Product
        - generic [ref=e659]:
          - generic [ref=e660]:
            - generic [ref=e661]:
              - img "ecommerce website products" [ref=e662]
              - heading "Rs. 1400" [level=2] [ref=e663]
              - paragraph [ref=e664]: Grunt Blue Slim Fit Jeans
              - generic [ref=e665] [cursor=pointer]:
                - generic [ref=e666]: 
                - text: Add to cart
            - generic [ref=e667]:
              - heading "Rs. 1400" [level=2] [ref=e668]
              - paragraph [ref=e669]: Grunt Blue Slim Fit Jeans
              - generic [ref=e670] [cursor=pointer]:
                - generic [ref=e671]: 
                - text: Add to cart
          - list [ref=e673]:
            - listitem [ref=e674]:
              - link " View Product" [ref=e675]:
                - /url: /product_details/37
                - generic [ref=e676]: 
                - text: View Product
        - generic [ref=e678]:
          - generic [ref=e679]:
            - generic [ref=e680]:
              - img "ecommerce website products" [ref=e681]
              - heading "Rs. 2300" [level=2] [ref=e682]
              - paragraph [ref=e683]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e684] [cursor=pointer]:
                - generic [ref=e685]: 
                - text: Add to cart
            - generic [ref=e686]:
              - heading "Rs. 2300" [level=2] [ref=e687]
              - paragraph [ref=e688]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e689] [cursor=pointer]:
                - generic [ref=e690]: 
                - text: Add to cart
          - list [ref=e692]:
            - listitem [ref=e693]:
              - link " View Product" [ref=e694]:
                - /url: /product_details/38
                - generic [ref=e695]: 
                - text: View Product
        - generic [ref=e697]:
          - generic [ref=e698]:
            - generic [ref=e699]:
              - img "ecommerce website products" [ref=e700]
              - heading "Rs. 3000" [level=2] [ref=e701]
              - paragraph [ref=e702]: Cotton Silk Hand Block Print Saree
              - generic [ref=e703] [cursor=pointer]:
                - generic [ref=e704]: 
                - text: Add to cart
            - generic [ref=e705]:
              - heading "Rs. 3000" [level=2] [ref=e706]
              - paragraph [ref=e707]: Cotton Silk Hand Block Print Saree
              - generic [ref=e708] [cursor=pointer]:
                - generic [ref=e709]: 
                - text: Add to cart
          - list [ref=e711]:
            - listitem [ref=e712]:
              - link " View Product" [ref=e713]:
                - /url: /product_details/39
                - generic [ref=e714]: 
                - text: View Product
        - generic [ref=e716]:
          - generic [ref=e717]:
            - generic [ref=e718]:
              - img "ecommerce website products" [ref=e719]
              - heading "Rs. 3500" [level=2] [ref=e720]
              - paragraph [ref=e721]: Rust Red Linen Saree
              - generic [ref=e722] [cursor=pointer]:
                - generic [ref=e723]: 
                - text: Add to cart
            - generic [ref=e724]:
              - heading "Rs. 3500" [level=2] [ref=e725]
              - paragraph [ref=e726]: Rust Red Linen Saree
              - generic [ref=e727] [cursor=pointer]:
                - generic [ref=e728]: 
                - text: Add to cart
          - list [ref=e730]:
            - listitem [ref=e731]:
              - link " View Product" [ref=e732]:
                - /url: /product_details/40
                - generic [ref=e733]: 
                - text: View Product
        - generic [ref=e735]:
          - generic [ref=e736]:
            - generic [ref=e737]:
              - img "ecommerce website products" [ref=e738]
              - heading "Rs. 5000" [level=2] [ref=e739]
              - paragraph [ref=e740]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e741] [cursor=pointer]:
                - generic [ref=e742]: 
                - text: Add to cart
            - generic [ref=e743]:
              - heading "Rs. 5000" [level=2] [ref=e744]
              - paragraph [ref=e745]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e746] [cursor=pointer]:
                - generic [ref=e747]: 
                - text: Add to cart
          - list [ref=e749]:
            - listitem [ref=e750]:
              - link " View Product" [ref=e751]:
                - /url: /product_details/41
                - generic [ref=e752]: 
                - text: View Product
        - generic [ref=e754]:
          - generic [ref=e755]:
            - generic [ref=e756]:
              - img "ecommerce website products" [ref=e757]
              - heading "Rs. 1400" [level=2] [ref=e758]
              - paragraph [ref=e759]: Lace Top For Women
              - generic [ref=e760] [cursor=pointer]:
                - generic [ref=e761]: 
                - text: Add to cart
            - generic [ref=e762]:
              - heading "Rs. 1400" [level=2] [ref=e763]
              - paragraph [ref=e764]: Lace Top For Women
              - generic [ref=e765] [cursor=pointer]:
                - generic [ref=e766]: 
                - text: Add to cart
          - list [ref=e768]:
            - listitem [ref=e769]:
              - link " View Product" [ref=e770]:
                - /url: /product_details/42
                - generic [ref=e771]: 
                - text: View Product
        - generic [ref=e773]:
          - generic [ref=e774]:
            - generic [ref=e775]:
              - img "ecommerce website products" [ref=e776]
              - heading "Rs. 1389" [level=2] [ref=e777]
              - paragraph [ref=e778]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "Software" [ref=e779] [cursor=pointer]
              - generic [ref=e783] [cursor=pointer]:
                - generic [ref=e784]: 
                - text: Add to cart
            - generic [ref=e785]:
              - heading "Rs. 1389" [level=2] [ref=e786]
              - paragraph [ref=e787]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e788] [cursor=pointer]:
                - generic [ref=e789]: 
                - text: Add to cart
          - list [ref=e791]:
            - listitem [ref=e792]:
              - link " View Product" [ref=e793]:
                - /url: /product_details/43
                - generic [ref=e794]: 
                - text: View Product
      - generic [ref=e795]:
        - heading "recommended items" [level=2] [ref=e796]
        - generic [ref=e797]:
          - generic [ref=e798]:
            - text:   
            - generic:
              - generic [ref=e802]:
                - img "ecommerce website products" [ref=e803]
                - heading "Rs. 1500" [level=2] [ref=e804]
                - paragraph [ref=e805]: Stylish Dress
                - generic [ref=e806] [cursor=pointer]:
                  - generic [ref=e807]: 
                  - text: Add to cart
              - generic [ref=e811]:
                - img "ecommerce website products" [ref=e812]
                - heading "Rs. 600" [level=2] [ref=e813]
                - paragraph [ref=e814]: Winter Top
                - generic [ref=e815] [cursor=pointer]:
                  - generic [ref=e816]: 
                  - text: Add to cart
              - generic [ref=e820]:
                - img "ecommerce website products" [ref=e821]
                - heading "Rs. 400" [level=2] [ref=e822]
                - paragraph [ref=e823]: Summer White Top
                - generic [ref=e824] [cursor=pointer]:
                  - generic [ref=e825]: 
                  - text: Add to cart
          - link "" [ref=e826]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=e828]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=e831]
  - contentinfo [ref=e833]:
    - generic [ref=e838]:
      - heading "Subscription" [level=2] [ref=e839]
      - generic [ref=e840]:
        - textbox "Your email address" [ref=e841]
        - button "" [ref=e842] [cursor=pointer]
        - paragraph [ref=e844]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e848]: Copyright © 2021 All rights reserved
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
     |             ^ SyntaxError: Unexpected token '<', "<h2>This w"... is not valid JSON
  81 |     };
  82 |   }
  83 | }
  84 | 
```