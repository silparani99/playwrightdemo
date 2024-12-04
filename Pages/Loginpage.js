exports.loginpage=
class loginpage{
    constructor(page)
    {
        this.page=page;
        this.loginlink= '#login2';
        this.loginusername= '#loginusername';
        this.loginpassword= '#loginpassword';
        this.loginbutton="//button[normalize-space()='Log in']";
    }

    async gotologinpage()
    {
        await this.page.goto("https://www.demoblaze.com/");
    }

    async loginmethod(username,Password)
    {
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.loginusername).fill(username)
        await this.page.locator(this.loginpassword).fill(Password)
        await this.page.locator(this.loginbutton).click();
    }
}