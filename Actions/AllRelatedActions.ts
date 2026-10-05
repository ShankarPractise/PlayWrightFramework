import {Page} from '@playwright/test';

export class AllRelatedActions{
    //variables and declaration
    private page: Page;
    private websiteUrl: String;

    constructor(page:Page){
        this.page = page;
        this.websiteUrl = "https://practice.expandtesting.com/";
    }

    async searchTheWebsite(endPoint: string): Promise<void>{
        await this.page.goto(this.websiteUrl + endPoint );
    }

    async clickOnTheButton(buttonName: string): Promise<void>{
        await this.page.getByRole('button',{name: buttonName, exact:true}).click();
    }

    async typeIntoTextField(textBoxName: string, valueOfTheTextBox: string): Promise<void>{
        await this.page.getByLabel(textBoxName).fill(valueOfTheTextBox);
    }
}