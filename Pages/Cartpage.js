exports.cartpage=
class cartpage{
    constructor(page)
    {
        this.page=page;
        this.numberofproductsincart= '//tbody[@id="tbodyid"]/tr/td[2]';
    }
async checkproductincart(productname)
{

    const productincart=await this.page.$$(this.numberofproductsincart)
    for(const product of productincart)
    {
        console.log(await product.textContent())
    if(productname === await this.product.textContent())
    {
        return true;
        break;
    }
    }
}
    
}