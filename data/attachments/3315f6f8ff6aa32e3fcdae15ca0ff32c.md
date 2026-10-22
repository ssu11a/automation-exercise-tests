# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/products.spec.ts >> Actions with products >> Search Products and Verify Cart After Login
- Location: tests/regression/products.spec.ts:96:7

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - banner [ref=f7e2]:
    - generic [ref=f7e5]:
      - link [ref=f7e8]:
        - /url: /
        - img "Website for automation practice" [ref=f7e9]
      - list [ref=f7e12]:
        - listitem [ref=f7e13]:
          - link " Home" [ref=f7e14]:
            - /url: /
            - generic [ref=f7e15]: 
            - text: Home
        - listitem [ref=f7e16]:
          - link " Products" [ref=f7e17]:
            - /url: /products
            - generic [ref=f7e18]: 
            - text: Products
        - listitem [ref=f7e19]:
          - link " Cart" [ref=f7e20]:
            - /url: /view_cart
            - generic [ref=f7e21]: 
            - text: Cart
        - listitem [ref=f7e22]:
          - link " Signup / Login" [ref=f7e23]:
            - /url: /login
            - generic [ref=f7e24]: 
            - text: Signup / Login
        - listitem [ref=f7e25]:
          - link " Test Cases" [ref=f7e26]:
            - /url: /test_cases
            - generic [ref=f7e27]: 
            - text: Test Cases
        - listitem [ref=f7e28]:
          - link " API Testing" [ref=f7e29]:
            - /url: /api_list
            - generic [ref=f7e30]: 
            - text: API Testing
        - listitem [ref=f7e31]:
          - link " Video Tutorials" [ref=f7e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f7e33]: 
            - text: Video Tutorials
        - listitem [ref=f7e34]:
          - link " Contact us" [ref=f7e35]:
            - /url: /contact_us
            - generic [ref=f7e36]: 
            - text: Contact us
  - generic [ref=f7e38]:
    - img "Website for practice" [ref=f7e39]
    - textbox "Search Product" [ref=f7e40]
    - button "" [ref=f7e41] [cursor=pointer]
  - generic [ref=f7e45]:
    - generic [ref=f7e47]:
      - heading "Category" [level=2] [ref=f7e48]
      - generic [ref=f7e49]:
        - heading [level=4] [ref=f7e52]:
          - link " Women" [ref=f7e53]:
            - /url: "#Women"
            - generic [ref=f7e54]: 
            - text: Women
        - heading [level=4] [ref=f7e58]:
          - link " Men" [ref=f7e59]:
            - /url: "#Men"
            - generic [ref=f7e60]: 
            - text: Men
        - heading [level=4] [ref=f7e64]:
          - link " Kids" [ref=f7e65]:
            - /url: "#Kids"
            - generic [ref=f7e66]: 
            - text: Kids
      - insertion [ref=f7e69]
      - generic [ref=f7e71]:
        - heading "Brands" [level=2] [ref=f7e72]
        - list [ref=f7e74]:
          - listitem [ref=f7e75]:
            - link "(6) Polo" [ref=f7e76]:
              - /url: /brand_products/Polo
              - generic [ref=f7e77]: (6)
              - text: Polo
          - listitem [ref=f7e78]:
            - link "(5) H&M" [ref=f7e79]:
              - /url: /brand_products/H&M
              - generic [ref=f7e80]: (5)
              - text: H&M
          - listitem [ref=f7e81]:
            - link "(5) Madame" [ref=f7e82]:
              - /url: /brand_products/Madame
              - generic [ref=f7e83]: (5)
              - text: Madame
          - listitem [ref=f7e84]:
            - link "(3) Mast & Harbour" [ref=f7e85]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f7e86]: (3)
              - text: Mast & Harbour
          - listitem [ref=f7e87]:
            - link "(4) Babyhug" [ref=f7e88]:
              - /url: /brand_products/Babyhug
              - generic [ref=f7e89]: (4)
              - text: Babyhug
          - listitem [ref=f7e90]:
            - link "(3) Allen Solly Junior" [ref=f7e91]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f7e92]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f7e93]:
            - link "(3) Kookie Kids" [ref=f7e94]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f7e95]: (3)
              - text: Kookie Kids
          - listitem [ref=f7e96]:
            - link "(5) Biba" [ref=f7e97]:
              - /url: /brand_products/Biba
              - generic [ref=f7e98]: (5)
              - text: Biba
    - generic [ref=f7e100]:
      - heading "All Products" [level=2] [ref=f7e101]
      - generic [ref=f7e103]:
        - generic [ref=f7e104]:
          - generic [ref=f7e105]:
            - img "ecommerce website products" [ref=f7e106]
            - heading "Rs. 500" [level=2] [ref=f7e107]
            - paragraph [ref=f7e108]: Blue Top
            - generic [ref=f7e109] [cursor=pointer]:
              - generic [ref=f7e110]: 
              - text: Add to cart
          - generic [ref=f7e111]:
            - heading "Rs. 500" [level=2] [ref=f7e112]
            - paragraph [ref=f7e113]: Blue Top
            - generic [ref=f7e114] [cursor=pointer]:
              - generic [ref=f7e115]: 
              - text: Add to cart
        - list [ref=f7e117]:
          - listitem [ref=f7e118]:
            - link " View Product" [ref=f7e119]:
              - /url: /product_details/1
              - generic [ref=f7e120]: 
              - text: View Product
      - generic [ref=f7e122]:
        - generic [ref=f7e123]:
          - generic [ref=f7e124]:
            - img "ecommerce website products" [ref=f7e125]
            - heading "Rs. 400" [level=2] [ref=f7e126]
            - paragraph [ref=f7e127]:
              - link "Men" [ref=f7e128] [cursor=pointer]:
                - /url: "#"
              - link "Tshirt" [ref=f7e131] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f7e134] [cursor=pointer]:
              - generic [ref=f7e135]: 
              - text: Add to cart
          - generic [ref=f7e136]:
            - heading "Rs. 400" [level=2] [ref=f7e137]
            - paragraph [ref=f7e138]: Men Tshirt
            - generic [ref=f7e139] [cursor=pointer]:
              - generic [ref=f7e140]: 
              - text: Add to cart
        - list [ref=f7e142]:
          - listitem [ref=f7e143]:
            - link " View Product" [ref=f7e144]:
              - /url: /product_details/2
              - generic [ref=f7e145]: 
              - text: View Product
      - generic [ref=f7e147]:
        - generic [ref=f7e148]:
          - generic [ref=f7e149]:
            - img "ecommerce website products" [ref=f7e150]
            - heading "Rs. 1000" [level=2] [ref=f7e151]
            - paragraph [ref=f7e152]:
              - text: Sleeveless
              - link "Dress" [ref=f7e153] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f7e156] [cursor=pointer]:
              - generic [ref=f7e157]: 
              - text: Add to cart
          - generic [ref=f7e158]:
            - heading "Rs. 1000" [level=2] [ref=f7e159]
            - paragraph [ref=f7e160]: Sleeveless Dress
            - generic [ref=f7e161] [cursor=pointer]:
              - generic [ref=f7e162]: 
              - text: Add to cart
        - list [ref=f7e164]:
          - listitem [ref=f7e165]:
            - link " View Product" [ref=f7e166]:
              - /url: /product_details/3
              - generic [ref=f7e167]: 
              - text: View Product
      - generic [ref=f7e169]:
        - generic [ref=f7e170]:
          - generic [ref=f7e171]:
            - img "ecommerce website products" [ref=f7e172]
            - heading "Rs. 1500" [level=2] [ref=f7e173]
            - paragraph [ref=f7e174]: Stylish Dress
            - generic [ref=f7e175] [cursor=pointer]:
              - generic [ref=f7e176]: 
              - text: Add to cart
          - generic [ref=f7e177]:
            - heading "Rs. 1500" [level=2] [ref=f7e178]
            - paragraph [ref=f7e179]: Stylish Dress
            - generic [ref=f7e180] [cursor=pointer]:
              - generic [ref=f7e181]: 
              - text: Add to cart
        - list [ref=f7e183]:
          - listitem [ref=f7e184]:
            - link " View Product" [ref=f7e185]:
              - /url: /product_details/4
              - generic [ref=f7e186]: 
              - text: View Product
      - generic [ref=f7e188]:
        - generic [ref=f7e189]:
          - generic [ref=f7e190]:
            - img "ecommerce website products" [ref=f7e191]
            - heading "Rs. 600" [level=2] [ref=f7e192]
            - paragraph [ref=f7e193]: Winter Top
            - generic [ref=f7e194] [cursor=pointer]:
              - generic [ref=f7e195]: 
              - text: Add to cart
          - generic [ref=f7e196]:
            - heading "Rs. 600" [level=2] [ref=f7e197]
            - paragraph [ref=f7e198]: Winter Top
            - generic [ref=f7e199] [cursor=pointer]:
              - generic [ref=f7e200]: 
              - text: Add to cart
        - list [ref=f7e202]:
          - listitem [ref=f7e203]:
            - link " View Product" [ref=f7e204]:
              - /url: /product_details/5
              - generic [ref=f7e205]: 
              - text: View Product
      - generic [ref=f7e207]:
        - generic [ref=f7e208]:
          - generic [ref=f7e209]:
            - img "ecommerce website products" [ref=f7e210]
            - heading "Rs. 400" [level=2] [ref=f7e211]
            - paragraph [ref=f7e212]: Summer White Top
            - generic [ref=f7e213] [cursor=pointer]:
              - generic [ref=f7e214]: 
              - text: Add to cart
          - generic [ref=f7e215]:
            - heading "Rs. 400" [level=2] [ref=f7e216]
            - paragraph [ref=f7e217]: Summer White Top
            - generic [ref=f7e218] [cursor=pointer]:
              - generic [ref=f7e219]: 
              - text: Add to cart
        - list [ref=f7e221]:
          - listitem [ref=f7e222]:
            - link " View Product" [ref=f7e223]:
              - /url: /product_details/6
              - generic [ref=f7e224]: 
              - text: View Product
      - generic [ref=f7e226]:
        - generic [ref=f7e227]:
          - generic [ref=f7e228]:
            - img "ecommerce website products" [ref=f7e229]
            - heading "Rs. 1000" [level=2] [ref=f7e230]
            - paragraph [ref=f7e231]: Madame Top For Women
            - generic [ref=f7e232] [cursor=pointer]:
              - generic [ref=f7e233]: 
              - text: Add to cart
          - generic [ref=f7e234]:
            - heading "Rs. 1000" [level=2] [ref=f7e235]
            - paragraph [ref=f7e236]: Madame Top For Women
            - generic [ref=f7e237] [cursor=pointer]:
              - generic [ref=f7e238]: 
              - text: Add to cart
        - list [ref=f7e240]:
          - listitem [ref=f7e241]:
            - link " View Product" [ref=f7e242]:
              - /url: /product_details/7
              - generic [ref=f7e243]: 
              - text: View Product
      - generic [ref=f7e245]:
        - generic [ref=f7e246]:
          - generic [ref=f7e247]:
            - img "ecommerce website products" [ref=f7e248]
            - heading "Rs. 700" [level=2] [ref=f7e249]
            - paragraph [ref=f7e250]: Fancy Green Top
            - generic [ref=f7e251] [cursor=pointer]:
              - generic [ref=f7e252]: 
              - text: Add to cart
          - generic [ref=f7e253]:
            - heading "Rs. 700" [level=2] [ref=f7e254]
            - paragraph [ref=f7e255]: Fancy Green Top
            - generic [ref=f7e256] [cursor=pointer]:
              - generic [ref=f7e257]: 
              - text: Add to cart
        - list [ref=f7e259]:
          - listitem [ref=f7e260]:
            - link " View Product" [ref=f7e261]:
              - /url: /product_details/8
              - generic [ref=f7e262]: 
              - text: View Product
      - generic [ref=f7e264]:
        - generic [ref=f7e265]:
          - generic [ref=f7e266]:
            - img "ecommerce website products" [ref=f7e267]
            - heading "Rs. 499" [level=2] [ref=f7e268]
            - paragraph [ref=f7e269]:
              - text: Sleeves Printed Top - White
              - link "Read Economics" [ref=f7e270] [cursor=pointer]
            - generic [ref=f7e274] [cursor=pointer]:
              - generic [ref=f7e275]: 
              - text: Add to cart
          - generic [ref=f7e276]:
            - heading "Rs. 499" [level=2] [ref=f7e277]
            - paragraph [ref=f7e278]: Sleeves Printed Top - White
            - generic [ref=f7e279] [cursor=pointer]:
              - generic [ref=f7e280]: 
              - text: Add to cart
        - list [ref=f7e282]:
          - listitem [ref=f7e283]:
            - link " View Product" [ref=f7e284]:
              - /url: /product_details/11
              - generic [ref=f7e285]: 
              - text: View Product
      - generic [ref=f7e287]:
        - generic [ref=f7e288]:
          - generic [ref=f7e289]:
            - img "ecommerce website products" [ref=f7e290]
            - heading "Rs. 359" [level=2] [ref=f7e291]
            - paragraph [ref=f7e292]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f7e293] [cursor=pointer]:
              - generic [ref=f7e294]: 
              - text: Add to cart
          - generic [ref=f7e295]:
            - heading "Rs. 359" [level=2] [ref=f7e296]
            - paragraph [ref=f7e297]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f7e298] [cursor=pointer]:
              - generic [ref=f7e299]: 
              - text: Add to cart
        - list [ref=f7e301]:
          - listitem [ref=f7e302]:
            - link " View Product" [ref=f7e303]:
              - /url: /product_details/12
              - generic [ref=f7e304]: 
              - text: View Product
      - generic [ref=f7e306]:
        - generic [ref=f7e307]:
          - generic [ref=f7e308]:
            - img "ecommerce website products" [ref=f7e309]
            - heading "Rs. 278" [level=2] [ref=f7e310]
            - paragraph [ref=f7e311]: Frozen Tops For Kids
            - generic [ref=f7e312] [cursor=pointer]:
              - generic [ref=f7e313]: 
              - text: Add to cart
          - generic [ref=f7e314]:
            - heading "Rs. 278" [level=2] [ref=f7e315]
            - paragraph [ref=f7e316]: Frozen Tops For Kids
            - generic [ref=f7e317] [cursor=pointer]:
              - generic [ref=f7e318]: 
              - text: Add to cart
        - list [ref=f7e320]:
          - listitem [ref=f7e321]:
            - link " View Product" [ref=f7e322]:
              - /url: /product_details/13
              - generic [ref=f7e323]: 
              - text: View Product
      - generic [ref=f7e325]:
        - generic [ref=f7e326]:
          - generic [ref=f7e327]:
            - img "ecommerce website products" [ref=f7e328]
            - heading "Rs. 679" [level=2] [ref=f7e329]
            - paragraph [ref=f7e330]:
              - text: Full Sleeves Top Cherry - Pink
              - link "T-Shirts" [ref=f7e331] [cursor=pointer]
            - generic [ref=f7e335] [cursor=pointer]:
              - generic [ref=f7e336]: 
              - text: Add to cart
          - generic [ref=f7e337]:
            - heading "Rs. 679" [level=2] [ref=f7e338]
            - paragraph [ref=f7e339]: Full Sleeves Top Cherry - Pink
            - generic [ref=f7e340] [cursor=pointer]:
              - generic [ref=f7e341]: 
              - text: Add to cart
        - list [ref=f7e343]:
          - listitem [ref=f7e344]:
            - link " View Product" [ref=f7e345]:
              - /url: /product_details/14
              - generic [ref=f7e346]: 
              - text: View Product
      - generic [ref=f7e348]:
        - generic [ref=f7e349]:
          - generic [ref=f7e350]:
            - img "ecommerce website products" [ref=f7e351]
            - heading "Rs. 315" [level=2] [ref=f7e352]
            - paragraph [ref=f7e353]: Printed Off Shoulder Top - White
            - generic [ref=f7e354] [cursor=pointer]:
              - generic [ref=f7e355]: 
              - text: Add to cart
          - generic [ref=f7e356]:
            - heading "Rs. 315" [level=2] [ref=f7e357]
            - paragraph [ref=f7e358]: Printed Off Shoulder Top - White
            - generic [ref=f7e359] [cursor=pointer]:
              - generic [ref=f7e360]: 
              - text: Add to cart
        - list [ref=f7e362]:
          - listitem [ref=f7e363]:
            - link " View Product" [ref=f7e364]:
              - /url: /product_details/15
              - generic [ref=f7e365]: 
              - text: View Product
      - generic [ref=f7e367]:
        - generic [ref=f7e368]:
          - generic [ref=f7e369]:
            - img "ecommerce website products" [ref=f7e370]
            - heading "Rs. 478" [level=2] [ref=f7e371]
            - paragraph [ref=f7e372]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f7e373] [cursor=pointer]:
              - generic [ref=f7e374]: 
              - text: Add to cart
          - generic [ref=f7e375]:
            - heading "Rs. 478" [level=2] [ref=f7e376]
            - paragraph [ref=f7e377]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f7e378] [cursor=pointer]:
              - generic [ref=f7e379]: 
              - text: Add to cart
        - list [ref=f7e381]:
          - listitem [ref=f7e382]:
            - link " View Product" [ref=f7e383]:
              - /url: /product_details/16
              - generic [ref=f7e384]: 
              - text: View Product
      - generic [ref=f7e386]:
        - generic [ref=f7e387]:
          - generic [ref=f7e388]:
            - img "ecommerce website products" [ref=f7e389]
            - heading "Rs. 1200" [level=2] [ref=f7e390]
            - paragraph [ref=f7e391]: Little Girls Mr. Panda Shirt
            - generic [ref=f7e392] [cursor=pointer]:
              - generic [ref=f7e393]: 
              - text: Add to cart
          - generic [ref=f7e394]:
            - heading "Rs. 1200" [level=2] [ref=f7e395]
            - paragraph [ref=f7e396]: Little Girls Mr. Panda Shirt
            - generic [ref=f7e397] [cursor=pointer]:
              - generic [ref=f7e398]: 
              - text: Add to cart
        - list [ref=f7e400]:
          - listitem [ref=f7e401]:
            - link " View Product" [ref=f7e402]:
              - /url: /product_details/18
              - generic [ref=f7e403]: 
              - text: View Product
      - generic [ref=f7e405]:
        - generic [ref=f7e406]:
          - generic [ref=f7e407]:
            - img "ecommerce website products" [ref=f7e408]
            - heading "Rs. 1050" [level=2] [ref=f7e409]
            - paragraph [ref=f7e410]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f7e411] [cursor=pointer]:
              - generic [ref=f7e412]: 
              - text: Add to cart
          - generic [ref=f7e413]:
            - heading "Rs. 1050" [level=2] [ref=f7e414]
            - paragraph [ref=f7e415]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f7e416] [cursor=pointer]:
              - generic [ref=f7e417]: 
              - text: Add to cart
        - list [ref=f7e419]:
          - listitem [ref=f7e420]:
            - link " View Product" [ref=f7e421]:
              - /url: /product_details/19
              - generic [ref=f7e422]: 
              - text: View Product
      - generic [ref=f7e424]:
        - generic [ref=f7e425]:
          - generic [ref=f7e426]:
            - img "ecommerce website products" [ref=f7e427]
            - heading "Rs. 1190" [level=2] [ref=f7e428]
            - paragraph [ref=f7e429]: Cotton Mull Embroidered Dress
            - generic [ref=f7e430] [cursor=pointer]:
              - generic [ref=f7e431]: 
              - text: Add to cart
          - generic [ref=f7e432]:
            - heading "Rs. 1190" [level=2] [ref=f7e433]
            - paragraph [ref=f7e434]: Cotton Mull Embroidered Dress
            - generic [ref=f7e435] [cursor=pointer]:
              - generic [ref=f7e436]: 
              - text: Add to cart
        - list [ref=f7e438]:
          - listitem [ref=f7e439]:
            - link " View Product" [ref=f7e440]:
              - /url: /product_details/20
              - generic [ref=f7e441]: 
              - text: View Product
      - generic [ref=f7e443]:
        - generic [ref=f7e444]:
          - generic [ref=f7e445]:
            - img "ecommerce website products" [ref=f7e446]
            - heading "Rs. 1530" [level=2] [ref=f7e447]
            - paragraph [ref=f7e448]: Blue Cotton Indie Mickey Dress
            - generic [ref=f7e449] [cursor=pointer]:
              - generic [ref=f7e450]: 
              - text: Add to cart
          - generic [ref=f7e451]:
            - heading "Rs. 1530" [level=2] [ref=f7e452]
            - paragraph [ref=f7e453]: Blue Cotton Indie Mickey Dress
            - generic [ref=f7e454] [cursor=pointer]:
              - generic [ref=f7e455]: 
              - text: Add to cart
        - list [ref=f7e457]:
          - listitem [ref=f7e458]:
            - link " View Product" [ref=f7e459]:
              - /url: /product_details/21
              - generic [ref=f7e460]: 
              - text: View Product
      - generic [ref=f7e462]:
        - generic [ref=f7e463]:
          - generic [ref=f7e464]:
            - img "ecommerce website products" [ref=f7e465]
            - heading "Rs. 1600" [level=2] [ref=f7e466]
            - paragraph [ref=f7e467]:
              - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - link "Women's Dresses" [ref=f7e468] [cursor=pointer]
            - generic [ref=f7e472] [cursor=pointer]:
              - generic [ref=f7e473]: 
              - text: Add to cart
          - generic [ref=f7e474]:
            - heading "Rs. 1600" [level=2] [ref=f7e475]
            - paragraph [ref=f7e476]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f7e477] [cursor=pointer]:
              - generic [ref=f7e478]: 
              - text: Add to cart
        - list [ref=f7e480]:
          - listitem [ref=f7e481]:
            - link " View Product" [ref=f7e482]:
              - /url: /product_details/22
              - generic [ref=f7e483]: 
              - text: View Product
      - generic [ref=f7e485]:
        - generic [ref=f7e486]:
          - generic [ref=f7e487]:
            - img "ecommerce website products" [ref=f7e488]
            - heading "Rs. 1100" [level=2] [ref=f7e489]
            - paragraph [ref=f7e490]:
              - text: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - link "Browse Clothing" [ref=f7e491] [cursor=pointer]
            - generic [ref=f7e495] [cursor=pointer]:
              - generic [ref=f7e496]: 
              - text: Add to cart
          - generic [ref=f7e497]:
            - heading "Rs. 1100" [level=2] [ref=f7e498]
            - paragraph [ref=f7e499]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f7e500] [cursor=pointer]:
              - generic [ref=f7e501]: 
              - text: Add to cart
        - list [ref=f7e503]:
          - listitem [ref=f7e504]:
            - link " View Product" [ref=f7e505]:
              - /url: /product_details/23
              - generic [ref=f7e506]: 
              - text: View Product
      - generic [ref=f7e508]:
        - generic [ref=f7e509]:
          - generic [ref=f7e510]:
            - img "ecommerce website products" [ref=f7e511]
            - heading "Rs. 849" [level=2] [ref=f7e512]
            - paragraph [ref=f7e513]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f7e514] [cursor=pointer]:
              - generic [ref=f7e515]: 
              - text: Add to cart
          - generic [ref=f7e516]:
            - heading "Rs. 849" [level=2] [ref=f7e517]
            - paragraph [ref=f7e518]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f7e519] [cursor=pointer]:
              - generic [ref=f7e520]: 
              - text: Add to cart
        - list [ref=f7e522]:
          - listitem [ref=f7e523]:
            - link " View Product" [ref=f7e524]:
              - /url: /product_details/24
              - generic [ref=f7e525]: 
              - text: View Product
      - generic [ref=f7e527]:
        - generic [ref=f7e528]:
          - generic [ref=f7e529]:
            - img "ecommerce website products" [ref=f7e530]
            - heading "Rs. 1299" [level=2] [ref=f7e531]
            - paragraph [ref=f7e532]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f7e533] [cursor=pointer]:
              - generic [ref=f7e534]: 
              - text: Add to cart
          - generic [ref=f7e535]:
            - heading "Rs. 1299" [level=2] [ref=f7e536]
            - paragraph [ref=f7e537]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f7e538] [cursor=pointer]:
              - generic [ref=f7e539]: 
              - text: Add to cart
        - list [ref=f7e541]:
          - listitem [ref=f7e542]:
            - link " View Product" [ref=f7e543]:
              - /url: /product_details/28
              - generic [ref=f7e544]: 
              - text: View Product
      - generic [ref=f7e546]:
        - generic [ref=f7e547]:
          - generic [ref=f7e548]:
            - img "ecommerce website products" [ref=f7e549]
            - heading "Rs. 1000" [level=2] [ref=f7e550]
            - paragraph [ref=f7e551]: Green Side Placket Detail T-Shirt
            - generic [ref=f7e552] [cursor=pointer]:
              - generic [ref=f7e553]: 
              - text: Add to cart
          - generic [ref=f7e554]:
            - heading "Rs. 1000" [level=2] [ref=f7e555]
            - paragraph [ref=f7e556]: Green Side Placket Detail T-Shirt
            - generic [ref=f7e557] [cursor=pointer]:
              - generic [ref=f7e558]: 
              - text: Add to cart
        - list [ref=f7e560]:
          - listitem [ref=f7e561]:
            - link " View Product" [ref=f7e562]:
              - /url: /product_details/29
              - generic [ref=f7e563]: 
              - text: View Product
      - generic [ref=f7e565]:
        - generic [ref=f7e566]:
          - generic [ref=f7e567]:
            - img "ecommerce website products" [ref=f7e568]
            - heading "Rs. 1500" [level=2] [ref=f7e569]
            - paragraph [ref=f7e570]: Premium Polo T-Shirts
            - generic [ref=f7e571] [cursor=pointer]:
              - generic [ref=f7e572]: 
              - text: Add to cart
          - generic [ref=f7e573]:
            - heading "Rs. 1500" [level=2] [ref=f7e574]
            - paragraph [ref=f7e575]: Premium Polo T-Shirts
            - generic [ref=f7e576] [cursor=pointer]:
              - generic [ref=f7e577]: 
              - text: Add to cart
        - list [ref=f7e579]:
          - listitem [ref=f7e580]:
            - link " View Product" [ref=f7e581]:
              - /url: /product_details/30
              - generic [ref=f7e582]: 
              - text: View Product
      - generic [ref=f7e584]:
        - generic [ref=f7e585]:
          - generic [ref=f7e586]:
            - img "ecommerce website products" [ref=f7e587]
            - heading "Rs. 850" [level=2] [ref=f7e588]
            - paragraph [ref=f7e589]: Pure Cotton Neon Green Tshirt
            - generic [ref=f7e590] [cursor=pointer]:
              - generic [ref=f7e591]: 
              - text: Add to cart
          - generic [ref=f7e592]:
            - heading "Rs. 850" [level=2] [ref=f7e593]
            - paragraph [ref=f7e594]: Pure Cotton Neon Green Tshirt
            - generic [ref=f7e595] [cursor=pointer]:
              - generic [ref=f7e596]: 
              - text: Add to cart
        - list [ref=f7e598]:
          - listitem [ref=f7e599]:
            - link " View Product" [ref=f7e600]:
              - /url: /product_details/31
              - generic [ref=f7e601]: 
              - text: View Product
      - generic [ref=f7e603]:
        - generic [ref=f7e604]:
          - generic [ref=f7e605]:
            - img "ecommerce website products" [ref=f7e606]
            - heading "Rs. 799" [level=2] [ref=f7e607]
            - paragraph [ref=f7e608]: Soft Stretch Jeans
            - generic [ref=f7e609] [cursor=pointer]:
              - generic [ref=f7e610]: 
              - text: Add to cart
          - generic [ref=f7e611]:
            - heading "Rs. 799" [level=2] [ref=f7e612]
            - paragraph [ref=f7e613]: Soft Stretch Jeans
            - generic [ref=f7e614] [cursor=pointer]:
              - generic [ref=f7e615]: 
              - text: Add to cart
        - list [ref=f7e617]:
          - listitem [ref=f7e618]:
            - link " View Product" [ref=f7e619]:
              - /url: /product_details/33
              - generic [ref=f7e620]: 
              - text: View Product
      - generic [ref=f7e622]:
        - generic [ref=f7e623]:
          - generic [ref=f7e624]:
            - img "ecommerce website products" [ref=f7e625]
            - heading "Rs. 1200" [level=2] [ref=f7e626]
            - paragraph [ref=f7e627]: Regular Fit Straight Jeans
            - generic [ref=f7e628] [cursor=pointer]:
              - generic [ref=f7e629]: 
              - text: Add to cart
          - generic [ref=f7e630]:
            - heading "Rs. 1200" [level=2] [ref=f7e631]
            - paragraph [ref=f7e632]: Regular Fit Straight Jeans
            - generic [ref=f7e633] [cursor=pointer]:
              - generic [ref=f7e634]: 
              - text: Add to cart
        - list [ref=f7e636]:
          - listitem [ref=f7e637]:
            - link " View Product" [ref=f7e638]:
              - /url: /product_details/35
              - generic [ref=f7e639]: 
              - text: View Product
      - generic [ref=f7e641]:
        - generic [ref=f7e642]:
          - generic [ref=f7e643]:
            - img "ecommerce website products" [ref=f7e644]
            - heading "Rs. 1400" [level=2] [ref=f7e645]
            - paragraph [ref=f7e646]: Grunt Blue Slim Fit Jeans
            - generic [ref=f7e647] [cursor=pointer]:
              - generic [ref=f7e648]: 
              - text: Add to cart
          - generic [ref=f7e649]:
            - heading "Rs. 1400" [level=2] [ref=f7e650]
            - paragraph [ref=f7e651]: Grunt Blue Slim Fit Jeans
            - generic [ref=f7e652] [cursor=pointer]:
              - generic [ref=f7e653]: 
              - text: Add to cart
        - list [ref=f7e655]:
          - listitem [ref=f7e656]:
            - link " View Product" [ref=f7e657]:
              - /url: /product_details/37
              - generic [ref=f7e658]: 
              - text: View Product
      - generic [ref=f7e660]:
        - generic [ref=f7e661]:
          - generic [ref=f7e662]:
            - img "ecommerce website products" [ref=f7e663]
            - heading "Rs. 2300" [level=2] [ref=f7e664]
            - paragraph [ref=f7e665]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f7e666] [cursor=pointer]:
              - generic [ref=f7e667]: 
              - text: Add to cart
          - generic [ref=f7e668]:
            - heading "Rs. 2300" [level=2] [ref=f7e669]
            - paragraph [ref=f7e670]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f7e671] [cursor=pointer]:
              - generic [ref=f7e672]: 
              - text: Add to cart
        - list [ref=f7e674]:
          - listitem [ref=f7e675]:
            - link " View Product" [ref=f7e676]:
              - /url: /product_details/38
              - generic [ref=f7e677]: 
              - text: View Product
      - generic [ref=f7e679]:
        - generic [ref=f7e680]:
          - generic [ref=f7e681]:
            - img "ecommerce website products" [ref=f7e682]
            - heading "Rs. 3000" [level=2] [ref=f7e683]
            - paragraph [ref=f7e684]: Cotton Silk Hand Block Print Saree
            - generic [ref=f7e685] [cursor=pointer]:
              - generic [ref=f7e686]: 
              - text: Add to cart
          - generic [ref=f7e687]:
            - heading "Rs. 3000" [level=2] [ref=f7e688]
            - paragraph [ref=f7e689]: Cotton Silk Hand Block Print Saree
            - generic [ref=f7e690] [cursor=pointer]:
              - generic [ref=f7e691]: 
              - text: Add to cart
        - list [ref=f7e693]:
          - listitem [ref=f7e694]:
            - link " View Product" [ref=f7e695]:
              - /url: /product_details/39
              - generic [ref=f7e696]: 
              - text: View Product
      - generic [ref=f7e698]:
        - generic [ref=f7e699]:
          - generic [ref=f7e700]:
            - img "ecommerce website products" [ref=f7e701]
            - heading "Rs. 3500" [level=2] [ref=f7e702]
            - paragraph [ref=f7e703]: Rust Red Linen Saree
            - generic [ref=f7e704] [cursor=pointer]:
              - generic [ref=f7e705]: 
              - text: Add to cart
          - generic [ref=f7e706]:
            - heading "Rs. 3500" [level=2] [ref=f7e707]
            - paragraph [ref=f7e708]: Rust Red Linen Saree
            - generic [ref=f7e709] [cursor=pointer]:
              - generic [ref=f7e710]: 
              - text: Add to cart
        - list [ref=f7e712]:
          - listitem [ref=f7e713]:
            - link " View Product" [ref=f7e714]:
              - /url: /product_details/40
              - generic [ref=f7e715]: 
              - text: View Product
      - generic [ref=f7e717]:
        - generic [ref=f7e718]:
          - generic [ref=f7e719]:
            - img "ecommerce website products" [ref=f7e720]
            - heading "Rs. 5000" [level=2] [ref=f7e721]
            - paragraph [ref=f7e722]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f7e723] [cursor=pointer]:
              - generic [ref=f7e724]: 
              - text: Add to cart
          - generic [ref=f7e725]:
            - heading "Rs. 5000" [level=2] [ref=f7e726]
            - paragraph [ref=f7e727]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f7e728] [cursor=pointer]:
              - generic [ref=f7e729]: 
              - text: Add to cart
        - list [ref=f7e731]:
          - listitem [ref=f7e732]:
            - link " View Product" [ref=f7e733]:
              - /url: /product_details/41
              - generic [ref=f7e734]: 
              - text: View Product
      - generic [ref=f7e736]:
        - generic [ref=f7e737]:
          - generic [ref=f7e738]:
            - img "ecommerce website products" [ref=f7e739]
            - heading "Rs. 1400" [level=2] [ref=f7e740]
            - paragraph [ref=f7e741]: Lace Top For Women
            - generic [ref=f7e742] [cursor=pointer]:
              - generic [ref=f7e743]: 
              - text: Add to cart
          - generic [ref=f7e744]:
            - heading "Rs. 1400" [level=2] [ref=f7e745]
            - paragraph [ref=f7e746]: Lace Top For Women
            - generic [ref=f7e747] [cursor=pointer]:
              - generic [ref=f7e748]: 
              - text: Add to cart
        - list [ref=f7e750]:
          - listitem [ref=f7e751]:
            - link " View Product" [ref=f7e752]:
              - /url: /product_details/42
              - generic [ref=f7e753]: 
              - text: View Product
      - generic [ref=f7e755]:
        - generic [ref=f7e756]:
          - generic [ref=f7e757]:
            - img "ecommerce website products" [ref=f7e758]
            - heading "Rs. 1389" [level=2] [ref=f7e759]
            - paragraph [ref=f7e760]:
              - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - link "Women's Dresses" [ref=f7e761] [cursor=pointer]
            - generic [ref=f7e765] [cursor=pointer]:
              - generic [ref=f7e766]: 
              - text: Add to cart
          - generic [ref=f7e767]:
            - heading "Rs. 1389" [level=2] [ref=f7e768]
            - paragraph [ref=f7e769]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f7e770] [cursor=pointer]:
              - generic [ref=f7e771]: 
              - text: Add to cart
        - list [ref=f7e773]:
          - listitem [ref=f7e774]:
            - link " View Product" [ref=f7e775]:
              - /url: /product_details/43
              - generic [ref=f7e776]: 
              - text: View Product
  - insertion [ref=f7e778]
  - contentinfo [ref=f7e780]:
    - generic [ref=f7e785]:
      - heading "Subscription" [level=2] [ref=f7e786]
      - generic [ref=f7e787]:
        - textbox "Your email address" [ref=f7e788]
        - button "" [ref=f7e789] [cursor=pointer]
        - paragraph [ref=f7e791]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f7e795]: Copyright © 2021 All rights reserved
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
     |             ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  81 |     };
  82 |   }
  83 | }
  84 | 
```