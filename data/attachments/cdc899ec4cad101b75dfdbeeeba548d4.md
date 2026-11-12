# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Verify address details in checkout page
- Location: tests/regression/cart.spec.ts:23:7

# Error details

```
SyntaxError: Unexpected token '<', "<html><hea"... is not valid JSON
```

# Page snapshot

```yaml
- generic [active] [ref=f39e1]:
  - banner [ref=f39e2]:
    - generic [ref=f39e5]:
      - link [ref=f39e8]:
        - /url: /
        - img "Website for automation practice" [ref=f39e9]
      - list [ref=f39e12]:
        - listitem [ref=f39e13]:
          - link " Home" [ref=f39e14]:
            - /url: /
            - generic [ref=f39e15]: 
            - text: Home
        - listitem [ref=f39e16]:
          - link " Products" [ref=f39e17]:
            - /url: /products
            - generic [ref=f39e18]: 
            - text: Products
        - listitem [ref=f39e19]:
          - link " Cart" [ref=f39e20]:
            - /url: /view_cart
            - generic [ref=f39e21]: 
            - text: Cart
        - listitem [ref=f39e22]:
          - link " Signup / Login" [ref=f39e23]:
            - /url: /login
            - generic [ref=f39e24]: 
            - text: Signup / Login
        - listitem [ref=f39e25]:
          - link " Test Cases" [ref=f39e26]:
            - /url: /test_cases
            - generic [ref=f39e27]: 
            - text: Test Cases
        - listitem [ref=f39e28]:
          - link " API Testing" [ref=f39e29]:
            - /url: /api_list
            - generic [ref=f39e30]: 
            - text: API Testing
        - listitem [ref=f39e31]:
          - link " Video Tutorials" [ref=f39e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f39e33]: 
            - text: Video Tutorials
        - listitem [ref=f39e34]:
          - link " Contact us" [ref=f39e35]:
            - /url: /contact_us
            - generic [ref=f39e36]: 
            - text: Contact us
  - generic [ref=f39e41]:
    - list [ref=f39e42]:
      - listitem [ref=f39e43] [cursor=pointer]
      - listitem [ref=f39e44] [cursor=pointer]
      - listitem [ref=f39e45] [cursor=pointer]
    - generic [ref=f39e46]:
      - generic:
        - generic [ref=f39e47]:
          - heading "AutomationExercise" [level=1] [ref=f39e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=f39e49]
          - paragraph [ref=f39e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Automation practice website" [ref=f39e51] [cursor=pointer]
          - link [ref=f39e55]:
            - /url: /test_cases
            - button "Test Cases" [ref=f39e56] [cursor=pointer]
          - link [ref=f39e57]:
            - /url: /api_list
            - button "APIs list for practice" [ref=f39e58] [cursor=pointer]
        - img "demo website for practice" [ref=f39e60]
    - link "" [ref=f39e61]:
      - /url: "#slider-carousel"
    - link "" [ref=f39e63]:
      - /url: "#slider-carousel"
  - generic [ref=f39e67]:
    - generic [ref=f39e69]:
      - heading "Category" [level=2] [ref=f39e70]
      - generic [ref=f39e71]:
        - heading [level=4] [ref=f39e74]:
          - link " Women" [ref=f39e75]:
            - /url: "#Women"
            - generic [ref=f39e76]: 
            - text: Women
        - heading [level=4] [ref=f39e80]:
          - link " Men" [ref=f39e81]:
            - /url: "#Men"
            - generic [ref=f39e82]: 
            - text: Men
        - heading [level=4] [ref=f39e86]:
          - link " Kids" [ref=f39e87]:
            - /url: "#Kids"
            - generic [ref=f39e88]: 
            - text: Kids
      - insertion [ref=f39e91]
      - generic [ref=f39e93]:
        - heading "Brands" [level=2] [ref=f39e94]
        - list [ref=f39e96]:
          - listitem [ref=f39e97]:
            - link "(6) Polo" [ref=f39e98]:
              - /url: /brand_products/Polo
              - generic [ref=f39e99]: (6)
              - text: Polo
          - listitem [ref=f39e100]:
            - link "(5) H&M" [ref=f39e101]:
              - /url: /brand_products/H&M
              - generic [ref=f39e102]: (5)
              - text: H&M
          - listitem [ref=f39e103]:
            - link "(5) Madame" [ref=f39e104]:
              - /url: /brand_products/Madame
              - generic [ref=f39e105]: (5)
              - text: Madame
          - listitem [ref=f39e106]:
            - link "(3) Mast & Harbour" [ref=f39e107]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f39e108]: (3)
              - text: Mast & Harbour
          - listitem [ref=f39e109]:
            - link "(4) Babyhug" [ref=f39e110]:
              - /url: /brand_products/Babyhug
              - generic [ref=f39e111]: (4)
              - text: Babyhug
          - listitem [ref=f39e112]:
            - link "(3) Allen Solly Junior" [ref=f39e113]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f39e114]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f39e115]:
            - link "(3) Kookie Kids" [ref=f39e116]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f39e117]: (3)
              - text: Kookie Kids
          - listitem [ref=f39e118]:
            - link "(5) Biba" [ref=f39e119]:
              - /url: /brand_products/Biba
              - generic [ref=f39e120]: (5)
              - text: Biba
    - generic [ref=f39e121]:
      - generic [ref=f39e122]:
        - heading "Features Items" [level=2] [ref=f39e123]
        - generic [ref=f39e125]:
          - generic [ref=f39e126]:
            - generic [ref=f39e127]:
              - img "ecommerce website products" [ref=f39e128]
              - heading "Rs. 500" [level=2] [ref=f39e129]
              - paragraph [ref=f39e130]: Blue Top
              - generic [ref=f39e131] [cursor=pointer]:
                - generic [ref=f39e132]: 
                - text: Add to cart
            - generic [ref=f39e133]:
              - heading "Rs. 500" [level=2] [ref=f39e134]
              - paragraph [ref=f39e135]: Blue Top
              - generic [ref=f39e136] [cursor=pointer]:
                - generic [ref=f39e137]: 
                - text: Add to cart
          - list [ref=f39e139]:
            - listitem [ref=f39e140]:
              - link " View Product" [ref=f39e141]:
                - /url: /product_details/1
                - generic [ref=f39e142]: 
                - text: View Product
        - generic [ref=f39e144]:
          - generic [ref=f39e145]:
            - generic [ref=f39e146]:
              - img "ecommerce website products" [ref=f39e147]
              - heading "Rs. 400" [level=2] [ref=f39e148]
              - paragraph [ref=f39e149]:
                - text: Men
                - link "Tshirt" [ref=f39e150] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f39e153] [cursor=pointer]:
                - generic [ref=f39e154]: 
                - text: Add to cart
            - generic [ref=f39e155]:
              - heading "Rs. 400" [level=2] [ref=f39e156]
              - paragraph [ref=f39e157]: Men Tshirt
              - generic [ref=f39e158] [cursor=pointer]:
                - generic [ref=f39e159]: 
                - text: Add to cart
          - list [ref=f39e161]:
            - listitem [ref=f39e162]:
              - link " View Product" [ref=f39e163]:
                - /url: /product_details/2
                - generic [ref=f39e164]: 
                - text: View Product
        - generic [ref=f39e166]:
          - generic [ref=f39e167]:
            - generic [ref=f39e168]:
              - img "ecommerce website products" [ref=f39e169]
              - heading "Rs. 1000" [level=2] [ref=f39e170]
              - paragraph [ref=f39e171]:
                - text: Sleeveless
                - link "Dress" [ref=f39e172] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f39e175] [cursor=pointer]:
                - generic [ref=f39e176]: 
                - text: Add to cart
            - generic [ref=f39e177]:
              - heading "Rs. 1000" [level=2] [ref=f39e178]
              - paragraph [ref=f39e179]: Sleeveless Dress
              - generic [ref=f39e180] [cursor=pointer]:
                - generic [ref=f39e181]: 
                - text: Add to cart
          - list [ref=f39e183]:
            - listitem [ref=f39e184]:
              - link " View Product" [ref=f39e185]:
                - /url: /product_details/3
                - generic [ref=f39e186]: 
                - text: View Product
        - generic [ref=f39e188]:
          - generic [ref=f39e189]:
            - generic [ref=f39e190]:
              - img "ecommerce website products" [ref=f39e191]
              - heading "Rs. 1500" [level=2] [ref=f39e192]
              - paragraph [ref=f39e193]: Stylish Dress
              - generic [ref=f39e194] [cursor=pointer]:
                - generic [ref=f39e195]: 
                - text: Add to cart
            - generic [ref=f39e196]:
              - heading "Rs. 1500" [level=2] [ref=f39e197]
              - paragraph [ref=f39e198]: Stylish Dress
              - generic [ref=f39e199] [cursor=pointer]:
                - generic [ref=f39e200]: 
                - text: Add to cart
          - list [ref=f39e202]:
            - listitem [ref=f39e203]:
              - link " View Product" [ref=f39e204]:
                - /url: /product_details/4
                - generic [ref=f39e205]: 
                - text: View Product
        - generic [ref=f39e207]:
          - generic [ref=f39e208]:
            - generic [ref=f39e209]:
              - img "ecommerce website products" [ref=f39e210]
              - heading "Rs. 600" [level=2] [ref=f39e211]
              - paragraph [ref=f39e212]: Winter Top
              - generic [ref=f39e213] [cursor=pointer]:
                - generic [ref=f39e214]: 
                - text: Add to cart
            - generic [ref=f39e215]:
              - heading "Rs. 600" [level=2] [ref=f39e216]
              - paragraph [ref=f39e217]: Winter Top
              - generic [ref=f39e218] [cursor=pointer]:
                - generic [ref=f39e219]: 
                - text: Add to cart
          - list [ref=f39e221]:
            - listitem [ref=f39e222]:
              - link " View Product" [ref=f39e223]:
                - /url: /product_details/5
                - generic [ref=f39e224]: 
                - text: View Product
        - generic [ref=f39e226]:
          - generic [ref=f39e227]:
            - generic [ref=f39e228]:
              - img "ecommerce website products" [ref=f39e229]
              - heading "Rs. 400" [level=2] [ref=f39e230]
              - paragraph [ref=f39e231]: Summer White Top
              - generic [ref=f39e232] [cursor=pointer]:
                - generic [ref=f39e233]: 
                - text: Add to cart
            - generic [ref=f39e234]:
              - heading "Rs. 400" [level=2] [ref=f39e235]
              - paragraph [ref=f39e236]: Summer White Top
              - generic [ref=f39e237] [cursor=pointer]:
                - generic [ref=f39e238]: 
                - text: Add to cart
          - list [ref=f39e240]:
            - listitem [ref=f39e241]:
              - link " View Product" [ref=f39e242]:
                - /url: /product_details/6
                - generic [ref=f39e243]: 
                - text: View Product
        - generic [ref=f39e245]:
          - generic [ref=f39e246]:
            - generic [ref=f39e247]:
              - img "ecommerce website products" [ref=f39e248]
              - heading "Rs. 1000" [level=2] [ref=f39e249]
              - paragraph [ref=f39e250]: Madame Top For Women
              - generic [ref=f39e251] [cursor=pointer]:
                - generic [ref=f39e252]: 
                - text: Add to cart
            - generic [ref=f39e253]:
              - heading "Rs. 1000" [level=2] [ref=f39e254]
              - paragraph [ref=f39e255]: Madame Top For Women
              - generic [ref=f39e256] [cursor=pointer]:
                - generic [ref=f39e257]: 
                - text: Add to cart
          - list [ref=f39e259]:
            - listitem [ref=f39e260]:
              - link " View Product" [ref=f39e261]:
                - /url: /product_details/7
                - generic [ref=f39e262]: 
                - text: View Product
        - generic [ref=f39e264]:
          - generic [ref=f39e265]:
            - generic [ref=f39e266]:
              - img "ecommerce website products" [ref=f39e267]
              - heading "Rs. 700" [level=2] [ref=f39e268]
              - paragraph [ref=f39e269]: Fancy Green Top
              - generic [ref=f39e270] [cursor=pointer]:
                - generic [ref=f39e271]: 
                - text: Add to cart
            - generic [ref=f39e272]:
              - heading "Rs. 700" [level=2] [ref=f39e273]
              - paragraph [ref=f39e274]: Fancy Green Top
              - generic [ref=f39e275] [cursor=pointer]:
                - generic [ref=f39e276]: 
                - text: Add to cart
          - list [ref=f39e278]:
            - listitem [ref=f39e279]:
              - link " View Product" [ref=f39e280]:
                - /url: /product_details/8
                - generic [ref=f39e281]: 
                - text: View Product
        - generic [ref=f39e283]:
          - generic [ref=f39e284]:
            - generic [ref=f39e285]:
              - img "ecommerce website products" [ref=f39e286]
              - heading "Rs. 499" [level=2] [ref=f39e287]
              - paragraph [ref=f39e288]: Sleeves Printed Top - White
              - generic [ref=f39e289] [cursor=pointer]:
                - generic [ref=f39e290]: 
                - text: Add to cart
            - generic [ref=f39e291]:
              - heading "Rs. 499" [level=2] [ref=f39e292]
              - paragraph [ref=f39e293]: Sleeves Printed Top - White
              - generic [ref=f39e294] [cursor=pointer]:
                - generic [ref=f39e295]: 
                - text: Add to cart
          - list [ref=f39e297]:
            - listitem [ref=f39e298]:
              - link " View Product" [ref=f39e299]:
                - /url: /product_details/11
                - generic [ref=f39e300]: 
                - text: View Product
        - generic [ref=f39e302]:
          - generic [ref=f39e303]:
            - generic [ref=f39e304]:
              - img "ecommerce website products" [ref=f39e305]
              - heading "Rs. 359" [level=2] [ref=f39e306]
              - paragraph [ref=f39e307]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f39e308] [cursor=pointer]:
                - generic [ref=f39e309]: 
                - text: Add to cart
            - generic [ref=f39e310]:
              - heading "Rs. 359" [level=2] [ref=f39e311]
              - paragraph [ref=f39e312]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f39e313] [cursor=pointer]:
                - generic [ref=f39e314]: 
                - text: Add to cart
          - list [ref=f39e316]:
            - listitem [ref=f39e317]:
              - link " View Product" [ref=f39e318]:
                - /url: /product_details/12
                - generic [ref=f39e319]: 
                - text: View Product
        - generic [ref=f39e321]:
          - generic [ref=f39e322]:
            - generic [ref=f39e323]:
              - img "ecommerce website products" [ref=f39e324]
              - heading "Rs. 278" [level=2] [ref=f39e325]
              - paragraph [ref=f39e326]: Frozen Tops For Kids
              - generic [ref=f39e327] [cursor=pointer]:
                - generic [ref=f39e328]: 
                - text: Add to cart
            - generic [ref=f39e329]:
              - heading "Rs. 278" [level=2] [ref=f39e330]
              - paragraph [ref=f39e331]: Frozen Tops For Kids
              - generic [ref=f39e332] [cursor=pointer]:
                - generic [ref=f39e333]: 
                - text: Add to cart
          - list [ref=f39e335]:
            - listitem [ref=f39e336]:
              - link " View Product" [ref=f39e337]:
                - /url: /product_details/13
                - generic [ref=f39e338]: 
                - text: View Product
        - generic [ref=f39e340]:
          - generic [ref=f39e341]:
            - generic [ref=f39e342]:
              - img "ecommerce website products" [ref=f39e343]
              - heading "Rs. 679" [level=2] [ref=f39e344]
              - paragraph [ref=f39e345]: Full Sleeves Top Cherry - Pink
              - generic [ref=f39e346] [cursor=pointer]:
                - generic [ref=f39e347]: 
                - text: Add to cart
            - generic [ref=f39e348]:
              - heading "Rs. 679" [level=2] [ref=f39e349]
              - paragraph [ref=f39e350]: Full Sleeves Top Cherry - Pink
              - generic [ref=f39e351] [cursor=pointer]:
                - generic [ref=f39e352]: 
                - text: Add to cart
          - list [ref=f39e354]:
            - listitem [ref=f39e355]:
              - link " View Product" [ref=f39e356]:
                - /url: /product_details/14
                - generic [ref=f39e357]: 
                - text: View Product
        - generic [ref=f39e359]:
          - generic [ref=f39e360]:
            - generic [ref=f39e361]:
              - img "ecommerce website products" [ref=f39e362]
              - heading "Rs. 315" [level=2] [ref=f39e363]
              - paragraph [ref=f39e364]: Printed Off Shoulder Top - White
              - generic [ref=f39e365] [cursor=pointer]:
                - generic [ref=f39e366]: 
                - text: Add to cart
            - generic [ref=f39e367]:
              - heading "Rs. 315" [level=2] [ref=f39e368]
              - paragraph [ref=f39e369]: Printed Off Shoulder Top - White
              - generic [ref=f39e370] [cursor=pointer]:
                - generic [ref=f39e371]: 
                - text: Add to cart
          - list [ref=f39e373]:
            - listitem [ref=f39e374]:
              - link " View Product" [ref=f39e375]:
                - /url: /product_details/15
                - generic [ref=f39e376]: 
                - text: View Product
        - generic [ref=f39e378]:
          - generic [ref=f39e379]:
            - generic [ref=f39e380]:
              - img "ecommerce website products" [ref=f39e381]
              - heading "Rs. 478" [level=2] [ref=f39e382]
              - paragraph [ref=f39e383]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f39e384] [cursor=pointer]:
                - generic [ref=f39e385]: 
                - text: Add to cart
            - generic [ref=f39e386]:
              - heading "Rs. 478" [level=2] [ref=f39e387]
              - paragraph [ref=f39e388]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f39e389] [cursor=pointer]:
                - generic [ref=f39e390]: 
                - text: Add to cart
          - list [ref=f39e392]:
            - listitem [ref=f39e393]:
              - link " View Product" [ref=f39e394]:
                - /url: /product_details/16
                - generic [ref=f39e395]: 
                - text: View Product
        - generic [ref=f39e397]:
          - generic [ref=f39e398]:
            - generic [ref=f39e399]:
              - img "ecommerce website products" [ref=f39e400]
              - heading "Rs. 1200" [level=2] [ref=f39e401]
              - paragraph [ref=f39e402]: Little Girls Mr. Panda Shirt
              - generic [ref=f39e403] [cursor=pointer]:
                - generic [ref=f39e404]: 
                - text: Add to cart
            - generic [ref=f39e405]:
              - heading "Rs. 1200" [level=2] [ref=f39e406]
              - paragraph [ref=f39e407]: Little Girls Mr. Panda Shirt
              - generic [ref=f39e408] [cursor=pointer]:
                - generic [ref=f39e409]: 
                - text: Add to cart
          - list [ref=f39e411]:
            - listitem [ref=f39e412]:
              - link " View Product" [ref=f39e413]:
                - /url: /product_details/18
                - generic [ref=f39e414]: 
                - text: View Product
        - generic [ref=f39e416]:
          - generic [ref=f39e417]:
            - generic [ref=f39e418]:
              - img "ecommerce website products" [ref=f39e419]
              - heading "Rs. 1050" [level=2] [ref=f39e420]
              - paragraph [ref=f39e421]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f39e422] [cursor=pointer]:
                - generic [ref=f39e423]: 
                - text: Add to cart
            - generic [ref=f39e424]:
              - heading "Rs. 1050" [level=2] [ref=f39e425]
              - paragraph [ref=f39e426]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f39e427] [cursor=pointer]:
                - generic [ref=f39e428]: 
                - text: Add to cart
          - list [ref=f39e430]:
            - listitem [ref=f39e431]:
              - link " View Product" [ref=f39e432]:
                - /url: /product_details/19
                - generic [ref=f39e433]: 
                - text: View Product
        - generic [ref=f39e435]:
          - generic [ref=f39e436]:
            - generic [ref=f39e437]:
              - img "ecommerce website products" [ref=f39e438]
              - heading "Rs. 1190" [level=2] [ref=f39e439]
              - paragraph [ref=f39e440]: Cotton Mull Embroidered Dress
              - generic [ref=f39e441] [cursor=pointer]:
                - generic [ref=f39e442]: 
                - text: Add to cart
            - generic [ref=f39e443]:
              - heading "Rs. 1190" [level=2] [ref=f39e444]
              - paragraph [ref=f39e445]: Cotton Mull Embroidered Dress
              - generic [ref=f39e446] [cursor=pointer]:
                - generic [ref=f39e447]: 
                - text: Add to cart
          - list [ref=f39e449]:
            - listitem [ref=f39e450]:
              - link " View Product" [ref=f39e451]:
                - /url: /product_details/20
                - generic [ref=f39e452]: 
                - text: View Product
        - generic [ref=f39e454]:
          - generic [ref=f39e455]:
            - generic [ref=f39e456]:
              - img "ecommerce website products" [ref=f39e457]
              - heading "Rs. 1530" [level=2] [ref=f39e458]
              - paragraph [ref=f39e459]: Blue Cotton Indie Mickey Dress
              - generic [ref=f39e460] [cursor=pointer]:
                - generic [ref=f39e461]: 
                - text: Add to cart
            - generic [ref=f39e462]:
              - heading "Rs. 1530" [level=2] [ref=f39e463]
              - paragraph [ref=f39e464]: Blue Cotton Indie Mickey Dress
              - generic [ref=f39e465] [cursor=pointer]:
                - generic [ref=f39e466]: 
                - text: Add to cart
          - list [ref=f39e468]:
            - listitem [ref=f39e469]:
              - link " View Product" [ref=f39e470]:
                - /url: /product_details/21
                - generic [ref=f39e471]: 
                - text: View Product
        - generic [ref=f39e473]:
          - generic [ref=f39e474]:
            - generic [ref=f39e475]:
              - img "ecommerce website products" [ref=f39e476]
              - heading "Rs. 1600" [level=2] [ref=f39e477]
              - paragraph [ref=f39e478]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f39e479] [cursor=pointer]:
                - generic [ref=f39e480]: 
                - text: Add to cart
            - generic [ref=f39e481]:
              - heading "Rs. 1600" [level=2] [ref=f39e482]
              - paragraph [ref=f39e483]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f39e484] [cursor=pointer]:
                - generic [ref=f39e485]: 
                - text: Add to cart
          - list [ref=f39e487]:
            - listitem [ref=f39e488]:
              - link " View Product" [ref=f39e489]:
                - /url: /product_details/22
                - generic [ref=f39e490]: 
                - text: View Product
        - generic [ref=f39e492]:
          - generic [ref=f39e493]:
            - generic [ref=f39e494]:
              - img "ecommerce website products" [ref=f39e495]
              - heading "Rs. 1100" [level=2] [ref=f39e496]
              - paragraph [ref=f39e497]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f39e498] [cursor=pointer]:
                - generic [ref=f39e499]: 
                - text: Add to cart
            - generic [ref=f39e500]:
              - heading "Rs. 1100" [level=2] [ref=f39e501]
              - paragraph [ref=f39e502]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f39e503] [cursor=pointer]:
                - generic [ref=f39e504]: 
                - text: Add to cart
          - list [ref=f39e506]:
            - listitem [ref=f39e507]:
              - link " View Product" [ref=f39e508]:
                - /url: /product_details/23
                - generic [ref=f39e509]: 
                - text: View Product
        - generic [ref=f39e511]:
          - generic [ref=f39e512]:
            - generic [ref=f39e513]:
              - img "ecommerce website products" [ref=f39e514]
              - heading "Rs. 849" [level=2] [ref=f39e515]
              - paragraph [ref=f39e516]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f39e517] [cursor=pointer]:
                - generic [ref=f39e518]: 
                - text: Add to cart
            - generic [ref=f39e519]:
              - heading "Rs. 849" [level=2] [ref=f39e520]
              - paragraph [ref=f39e521]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f39e522] [cursor=pointer]:
                - generic [ref=f39e523]: 
                - text: Add to cart
          - list [ref=f39e525]:
            - listitem [ref=f39e526]:
              - link " View Product" [ref=f39e527]:
                - /url: /product_details/24
                - generic [ref=f39e528]: 
                - text: View Product
        - generic [ref=f39e530]:
          - generic [ref=f39e531]:
            - generic [ref=f39e532]:
              - img "ecommerce website products" [ref=f39e533]
              - heading "Rs. 1299" [level=2] [ref=f39e534]
              - paragraph [ref=f39e535]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=f39e536] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f39e539] [cursor=pointer]:
                - generic [ref=f39e540]: 
                - text: Add to cart
            - generic [ref=f39e541]:
              - heading "Rs. 1299" [level=2] [ref=f39e542]
              - paragraph [ref=f39e543]: Pure Cotton V-Neck T-Shirt
              - generic [ref=f39e544] [cursor=pointer]:
                - generic [ref=f39e545]: 
                - text: Add to cart
          - list [ref=f39e547]:
            - listitem [ref=f39e548]:
              - link " View Product" [ref=f39e549]:
                - /url: /product_details/28
                - generic [ref=f39e550]: 
                - text: View Product
        - generic [ref=f39e552]:
          - generic [ref=f39e553]:
            - generic [ref=f39e554]:
              - img "ecommerce website products" [ref=f39e555]
              - heading "Rs. 1000" [level=2] [ref=f39e556]
              - paragraph [ref=f39e557]: Green Side Placket Detail T-Shirt
              - generic [ref=f39e558] [cursor=pointer]:
                - generic [ref=f39e559]: 
                - text: Add to cart
            - generic [ref=f39e560]:
              - heading "Rs. 1000" [level=2] [ref=f39e561]
              - paragraph [ref=f39e562]: Green Side Placket Detail T-Shirt
              - generic [ref=f39e563] [cursor=pointer]:
                - generic [ref=f39e564]: 
                - text: Add to cart
          - list [ref=f39e566]:
            - listitem [ref=f39e567]:
              - link " View Product" [ref=f39e568]:
                - /url: /product_details/29
                - generic [ref=f39e569]: 
                - text: View Product
        - generic [ref=f39e571]:
          - generic [ref=f39e572]:
            - generic [ref=f39e573]:
              - img "ecommerce website products" [ref=f39e574]
              - heading "Rs. 1500" [level=2] [ref=f39e575]
              - paragraph [ref=f39e576]: Premium Polo T-Shirts
              - generic [ref=f39e577] [cursor=pointer]:
                - generic [ref=f39e578]: 
                - text: Add to cart
            - generic [ref=f39e579]:
              - heading "Rs. 1500" [level=2] [ref=f39e580]
              - paragraph [ref=f39e581]: Premium Polo T-Shirts
              - generic [ref=f39e582] [cursor=pointer]:
                - generic [ref=f39e583]: 
                - text: Add to cart
          - list [ref=f39e585]:
            - listitem [ref=f39e586]:
              - link " View Product" [ref=f39e587]:
                - /url: /product_details/30
                - generic [ref=f39e588]: 
                - text: View Product
        - generic [ref=f39e590]:
          - generic [ref=f39e591]:
            - generic [ref=f39e592]:
              - img "ecommerce website products" [ref=f39e593]
              - heading "Rs. 850" [level=2] [ref=f39e594]
              - paragraph [ref=f39e595]: Pure Cotton Neon Green Tshirt
              - generic [ref=f39e596] [cursor=pointer]:
                - generic [ref=f39e597]: 
                - text: Add to cart
            - generic [ref=f39e598]:
              - heading "Rs. 850" [level=2] [ref=f39e599]
              - paragraph [ref=f39e600]: Pure Cotton Neon Green Tshirt
              - generic [ref=f39e601] [cursor=pointer]:
                - generic [ref=f39e602]: 
                - text: Add to cart
          - list [ref=f39e604]:
            - listitem [ref=f39e605]:
              - link " View Product" [ref=f39e606]:
                - /url: /product_details/31
                - generic [ref=f39e607]: 
                - text: View Product
        - generic [ref=f39e609]:
          - generic [ref=f39e610]:
            - generic [ref=f39e611]:
              - img "ecommerce website products" [ref=f39e612]
              - heading "Rs. 799" [level=2] [ref=f39e613]
              - paragraph [ref=f39e614]: Soft Stretch Jeans
              - generic [ref=f39e615] [cursor=pointer]:
                - generic [ref=f39e616]: 
                - text: Add to cart
            - generic [ref=f39e617]:
              - heading "Rs. 799" [level=2] [ref=f39e618]
              - paragraph [ref=f39e619]: Soft Stretch Jeans
              - generic [ref=f39e620] [cursor=pointer]:
                - generic [ref=f39e621]: 
                - text: Add to cart
          - list [ref=f39e623]:
            - listitem [ref=f39e624]:
              - link " View Product" [ref=f39e625]:
                - /url: /product_details/33
                - generic [ref=f39e626]: 
                - text: View Product
        - generic [ref=f39e628]:
          - generic [ref=f39e629]:
            - generic [ref=f39e630]:
              - img "ecommerce website products" [ref=f39e631]
              - heading "Rs. 1200" [level=2] [ref=f39e632]
              - paragraph [ref=f39e633]: Regular Fit Straight Jeans
              - generic [ref=f39e634] [cursor=pointer]:
                - generic [ref=f39e635]: 
                - text: Add to cart
            - generic [ref=f39e636]:
              - heading "Rs. 1200" [level=2] [ref=f39e637]
              - paragraph [ref=f39e638]: Regular Fit Straight Jeans
              - generic [ref=f39e639] [cursor=pointer]:
                - generic [ref=f39e640]: 
                - text: Add to cart
          - list [ref=f39e642]:
            - listitem [ref=f39e643]:
              - link " View Product" [ref=f39e644]:
                - /url: /product_details/35
                - generic [ref=f39e645]: 
                - text: View Product
        - generic [ref=f39e647]:
          - generic [ref=f39e648]:
            - generic [ref=f39e649]:
              - img "ecommerce website products" [ref=f39e650]
              - heading "Rs. 1400" [level=2] [ref=f39e651]
              - paragraph [ref=f39e652]: Grunt Blue Slim Fit Jeans
              - generic [ref=f39e653] [cursor=pointer]:
                - generic [ref=f39e654]: 
                - text: Add to cart
            - generic [ref=f39e655]:
              - heading "Rs. 1400" [level=2] [ref=f39e656]
              - paragraph [ref=f39e657]: Grunt Blue Slim Fit Jeans
              - generic [ref=f39e658] [cursor=pointer]:
                - generic [ref=f39e659]: 
                - text: Add to cart
          - list [ref=f39e661]:
            - listitem [ref=f39e662]:
              - link " View Product" [ref=f39e663]:
                - /url: /product_details/37
                - generic [ref=f39e664]: 
                - text: View Product
        - generic [ref=f39e666]:
          - generic [ref=f39e667]:
            - generic [ref=f39e668]:
              - img "ecommerce website products" [ref=f39e669]
              - heading "Rs. 2300" [level=2] [ref=f39e670]
              - paragraph [ref=f39e671]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f39e672] [cursor=pointer]:
                - generic [ref=f39e673]: 
                - text: Add to cart
            - generic [ref=f39e674]:
              - heading "Rs. 2300" [level=2] [ref=f39e675]
              - paragraph [ref=f39e676]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f39e677] [cursor=pointer]:
                - generic [ref=f39e678]: 
                - text: Add to cart
          - list [ref=f39e680]:
            - listitem [ref=f39e681]:
              - link " View Product" [ref=f39e682]:
                - /url: /product_details/38
                - generic [ref=f39e683]: 
                - text: View Product
        - generic [ref=f39e685]:
          - generic [ref=f39e686]:
            - generic [ref=f39e687]:
              - img "ecommerce website products" [ref=f39e688]
              - heading "Rs. 3000" [level=2] [ref=f39e689]
              - paragraph [ref=f39e690]: Cotton Silk Hand Block Print Saree
              - generic [ref=f39e691] [cursor=pointer]:
                - generic [ref=f39e692]: 
                - text: Add to cart
            - generic [ref=f39e693]:
              - heading "Rs. 3000" [level=2] [ref=f39e694]
              - paragraph [ref=f39e695]: Cotton Silk Hand Block Print Saree
              - generic [ref=f39e696] [cursor=pointer]:
                - generic [ref=f39e697]: 
                - text: Add to cart
          - list [ref=f39e699]:
            - listitem [ref=f39e700]:
              - link " View Product" [ref=f39e701]:
                - /url: /product_details/39
                - generic [ref=f39e702]: 
                - text: View Product
        - generic [ref=f39e704]:
          - generic [ref=f39e705]:
            - generic [ref=f39e706]:
              - img "ecommerce website products" [ref=f39e707]
              - heading "Rs. 3500" [level=2] [ref=f39e708]
              - paragraph [ref=f39e709]: Rust Red Linen Saree
              - generic [ref=f39e710] [cursor=pointer]:
                - generic [ref=f39e711]: 
                - text: Add to cart
            - generic [ref=f39e712]:
              - heading "Rs. 3500" [level=2] [ref=f39e713]
              - paragraph [ref=f39e714]: Rust Red Linen Saree
              - generic [ref=f39e715] [cursor=pointer]:
                - generic [ref=f39e716]: 
                - text: Add to cart
          - list [ref=f39e718]:
            - listitem [ref=f39e719]:
              - link " View Product" [ref=f39e720]:
                - /url: /product_details/40
                - generic [ref=f39e721]: 
                - text: View Product
        - generic [ref=f39e723]:
          - generic [ref=f39e724]:
            - generic [ref=f39e725]:
              - img "ecommerce website products" [ref=f39e726]
              - heading "Rs. 5000" [level=2] [ref=f39e727]
              - paragraph [ref=f39e728]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f39e729] [cursor=pointer]:
                - generic [ref=f39e730]: 
                - text: Add to cart
            - generic [ref=f39e731]:
              - heading "Rs. 5000" [level=2] [ref=f39e732]
              - paragraph [ref=f39e733]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f39e734] [cursor=pointer]:
                - generic [ref=f39e735]: 
                - text: Add to cart
          - list [ref=f39e737]:
            - listitem [ref=f39e738]:
              - link " View Product" [ref=f39e739]:
                - /url: /product_details/41
                - generic [ref=f39e740]: 
                - text: View Product
        - generic [ref=f39e742]:
          - generic [ref=f39e743]:
            - generic [ref=f39e744]:
              - img "ecommerce website products" [ref=f39e745]
              - heading "Rs. 1400" [level=2] [ref=f39e746]
              - paragraph [ref=f39e747]: Lace Top For Women
              - generic [ref=f39e748] [cursor=pointer]:
                - generic [ref=f39e749]: 
                - text: Add to cart
            - generic [ref=f39e750]:
              - heading "Rs. 1400" [level=2] [ref=f39e751]
              - paragraph [ref=f39e752]: Lace Top For Women
              - generic [ref=f39e753] [cursor=pointer]:
                - generic [ref=f39e754]: 
                - text: Add to cart
          - list [ref=f39e756]:
            - listitem [ref=f39e757]:
              - link " View Product" [ref=f39e758]:
                - /url: /product_details/42
                - generic [ref=f39e759]: 
                - text: View Product
        - generic [ref=f39e761]:
          - generic [ref=f39e762]:
            - generic [ref=f39e763]:
              - img "ecommerce website products" [ref=f39e764]
              - heading "Rs. 1389" [level=2] [ref=f39e765]
              - paragraph [ref=f39e766]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f39e767] [cursor=pointer]:
                - generic [ref=f39e768]: 
                - text: Add to cart
            - generic [ref=f39e769]:
              - heading "Rs. 1389" [level=2] [ref=f39e770]
              - paragraph [ref=f39e771]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f39e772] [cursor=pointer]:
                - generic [ref=f39e773]: 
                - text: Add to cart
          - list [ref=f39e775]:
            - listitem [ref=f39e776]:
              - link " View Product" [ref=f39e777]:
                - /url: /product_details/43
                - generic [ref=f39e778]: 
                - text: View Product
      - generic [ref=f39e779]:
        - heading "recommended items" [level=2] [ref=f39e780]
        - generic [ref=f39e781]:
          - generic [ref=f39e782]:
            - text:   
            - generic:
              - generic [ref=f39e786]:
                - img "ecommerce website products" [ref=f39e787]
                - heading "Rs. 1500" [level=2] [ref=f39e788]
                - paragraph [ref=f39e789]: Stylish Dress
                - generic [ref=f39e790] [cursor=pointer]:
                  - generic [ref=f39e791]: 
                  - text: Add to cart
              - generic [ref=f39e795]:
                - img "ecommerce website products" [ref=f39e796]
                - heading "Rs. 600" [level=2] [ref=f39e797]
                - paragraph [ref=f39e798]: Winter Top
                - generic [ref=f39e799] [cursor=pointer]:
                  - generic [ref=f39e800]: 
                  - text: Add to cart
              - generic [ref=f39e804]:
                - img "ecommerce website products" [ref=f39e805]
                - heading "Rs. 400" [level=2] [ref=f39e806]
                - paragraph [ref=f39e807]: Summer White Top
                - generic [ref=f39e808] [cursor=pointer]:
                  - generic [ref=f39e809]: 
                  - text: Add to cart
          - link "" [ref=f39e810]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=f39e812]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=f39e815]
  - contentinfo [ref=f39e817]:
    - generic [ref=f39e822]:
      - heading "Subscription" [level=2] [ref=f39e823]
      - generic [ref=f39e824]:
        - textbox "Your email address" [ref=f39e825]
        - button "" [ref=f39e826] [cursor=pointer]
        - paragraph [ref=f39e828]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f39e832]: Copyright © 2021 All rights reserved
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