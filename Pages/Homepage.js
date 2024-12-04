exports.homepage=
class homepage{
    constructor(page)
    {
        this.page=page;
        this.productlist= '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addtocart= "//a[contains(text(),'Add to cart')]";
        this.cartlink= '#cartur';
     }

    async addproducttocart(productname)
    {
      const productlist=await this.page.$$(this.productlist)
      for(const product of productlist)
      {
        if (productname === await product.textContent())
        {
         await product.click()
         break;
        }
      }
           await this.page.on('dialog', async dialog =>
        {
           if(dialog.message().includes('Product added.'))
           await dialog.accept()
        })
        await this.page.locator(this.addtocart).click();

        
    }
    async gotocart()
        {
            await this.page.locator(this.cartlink).click();
        }

}